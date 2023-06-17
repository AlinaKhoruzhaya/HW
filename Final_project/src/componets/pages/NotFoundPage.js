import { useEffect } from "react";

function Notfound() {
    useEffect(() => {
        document.title = '404 Page';
    }, []);

    return (
        <div> 404 Page</div>
    )
}

export default Notfound;
