import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contacts from "./pages/Contact.jsx";
import CreateContactPage from "./pages/CreateContactPage.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/contacts", element: <Contacts /> },
    { path: "/add-contact", element: <CreateContactPage /> },
    { path: "/edit-contact/:id", element: <CreateContactPage /> }
]);
