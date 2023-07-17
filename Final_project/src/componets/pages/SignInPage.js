import { useEffect } from "react";
import FormSignIn from "../layoutSecond/FormSignIn";

function SignIn() {
    useEffect(() => {
        document.title = 'Sign In';
    }, []);

    return (
        <FormSignIn />
    )
}

export default SignIn;
