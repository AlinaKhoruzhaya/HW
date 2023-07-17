import { useEffect } from "react";
import FormSignUp from "../layoutSecond/FormSignUp";

function SignUp() {
    useEffect(() => {
        document.title = 'Sign Up';
    }, []);

    return (
        <FormSignUp />
    )
}

export default SignUp;
