import { useEffect } from "react";
import ContactsList from "../layout/ContactsList";

function Contacts() {
    useEffect(() => {
        document.title = 'Contacts';
    }, []);

    return (
        <ContactsList />
    )
}

export default Contacts;
