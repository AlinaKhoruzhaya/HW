import { useEffect } from "react";

function Contacts() {
    useEffect(() => {
        document.title = 'Contacts';
    }, []);

    return (
        <div> Contacts Page</div>
    )
}

export default Contacts;
