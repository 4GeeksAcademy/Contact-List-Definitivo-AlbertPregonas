import { useStore } from "../store.jsx";
import { useNavigate } from "react-router-dom";
import ContactDisplayCard from "../components/ContactDisplayCard.jsx";

const Contacts = () => {
    const { contacts } = useStore();
    const navigate = useNavigate();

    return (
        <div className="container">
            <button
                className="btn btn-success my-3"
                onClick={() => navigate("/add-contact")}
            >
                Add new contact
            </button>
            <div>
                {contacts.length > 0 ? (
                    contacts.map(contact => (
                        <ContactDisplayCard key={contact.id} contact={contact} />
                    ))
                ) : (
                    <p>No contacts available.</p>
                )}
            </div>
        </div>
    );
};

export default Contacts;
