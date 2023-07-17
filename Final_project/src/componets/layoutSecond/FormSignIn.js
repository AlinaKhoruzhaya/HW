import { useForm } from "react-hook-form";
import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FormSignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(values) {
        alert(values.email + " " + values.password);
    }

    return (
        <div className="wrapper_sign-in">
            <div className="wrapper_bg_sign-in">
                <div className="bg_form">
                    <Link to={""}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-item-sign-in">
                            <input
                                className={errors.email ? 'error' : ''}
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/i,
                                        message: "Incorrect email"
                                    }
                                })}
                            />
                            <p className={'error-message'}>{errors.email && errors.email.message}</p>
                        </div>
                        <div className="form-item-sign-in">
                            <input
                                className={errors.password ? 'error' : ''}
                                type="password"
                                // autocomplete="current-password"
                                autoComplete="new-password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[a-zA-z0-9" "]+$/g,
                                        message: "Incorrect password"
                                    }
                                })}
                            />
                            <p className={'error-message'}>{errors.password && errors.password.message}</p>
                        </div>
                        <Checkbox {...label} defaultChecked />
                        <label>Remember me</label>
                        <button className="form-item-sign-in" type="submit"><span>sign in</span></button>
                    </form >
                    <div className="other_links">Don't have an account?<Link to={"/signup"}> Sign up!</Link></div>
                    <div className="other_links"><Link to={"/forgot"}> Forgot password?</Link></div>
                </div>
            </div>
        </div>
    );
}

export default FormSignIn;
