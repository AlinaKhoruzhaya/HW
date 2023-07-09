import { useEffect } from "react";
import FormForgotPassword from "../layout/FormForgotPassword";

function PasswordRetrieval() {
    useEffect(() => {
        document.title = 'Forgot Password';
    }, []);

    return (
        <FormForgotPassword />
    )
}

export default PasswordRetrieval;
