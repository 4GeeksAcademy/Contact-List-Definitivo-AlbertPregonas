import { useState, useEffect } from "react";
import { useStore } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const CreateContactPage = () => {
    const { contacts, addContact, updateContact } = useStore();
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = !!id;

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        if (isEditing) {
            const contact = contacts.find(c => c.id === parseInt(id));
            if (contact) {
                setFormData({
                    name: contact.name,
                    address: contact.address,
                    phone: contact.phone,
                    email: contact.email
                });
            }
        }
    }, [id, contacts]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await updateContact(parseInt(id), formData); 
        } else {
            await addContact(formData);
        }
        navigate("/contacts");
    };

    return (
        <div className="container">
            <h2>{isEditing ? "Edit Contact" : "Add New Contact"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} value={formData.address} required />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
                <button type="submit">{isEditing ? "Update" : "Save"}</button>
            </form>
        </div>
    );
};

export default CreateContactPage; 