import { useEffect } from "react";
import Policy from "../layout/Policy.js";

function PrivacyPolicy() {
    useEffect(() => {
        document.title = 'Privacy Policy';
    }, []);

    return (
        <Policy />
    )
}

export default PrivacyPolicy;
