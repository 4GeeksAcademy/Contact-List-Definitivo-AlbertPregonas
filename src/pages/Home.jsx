import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center my-5 d-flex justify-content-center align-items-center flex-column">
            <h1>Welcome to the Contact App</h1>
            <Link to="/contacts" className="pt-5" style={{ textDecoration: 'none' }}>
                <div className="contact_button">Contacts</div>
            </Link>
        </div>
    );
};

export default Home;
