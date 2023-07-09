import { useEffect } from "react";
import FormSignUp from "../layout/FormSignUp";

function SignUp() {
    useEffect(() => {
        document.title = 'Sign Up';
    }, []);

    return (
        <FormSignUp />
    )
}

export default SignUp;
