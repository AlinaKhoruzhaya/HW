import { useEffect } from "react";
import FormSignIn from "../layout/FormSignIn";

function SignIn() {
    useEffect(() => {
        document.title = 'Sign In';
    }, []);

    return (
        <FormSignIn />
    )
}

export default SignIn;
