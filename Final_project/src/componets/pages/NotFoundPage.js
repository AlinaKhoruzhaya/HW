import { useEffect } from "react";
import Error from "../layout/Error";

function Notfound() {
    useEffect(() => {
        document.title = '404 Page';
    }, []);

    return (
        <Error />
    )
}

export default Notfound;
