import { useForm } from "react-hook-form";
import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FormSignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(values) {
        alert(values.email + " " + values.password);
    }

    return (
        <div className="wrapper_sign-up">
            <div className="wrapper_bg_sign-up">
                <div className="bg_form">
                    <Link to={""}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-item-sign-up">
                            <input
                                className={errors.name ? 'error' : ''}
                                type="text"
                                placeholder="Name"
                                {...register("name", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[a-zA-z0-9" "]+$/g,
                                        message: "Incorrect name"
                                    }
                                })}
                            />
                            <p className={'error-message'}>{errors.name && errors.name.message}</p>
                        </div>
                        <div className="form-item-sign-up">
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
                        <div className="form-item-sign-up">
                            <input
                                className={errors.password ? 'error' : ''}
                                type="password"
                                autocomplete="new-password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Required",
                                    pattern: {
                                        value: /^(?!.*\s)(?=.*[AZ])(?=.*[az])(?=.*[0-9])(?=.*[~` !@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,12}$/,
                                        message: "The password must contain a number, symbol, letters of different case and be at least 8 characters"
                                    }
                                })}
                            />
                            <p className={'error-message'}>{errors.password && errors.password.message}</p>
                        </div>
                        <Checkbox {...label} defaultChecked />
                        <label> I agree to the  <Link to={"/privacy"}> Privacy policy</Link></label>
                        <button className="form-item-sign-up" type="submit"><span>sign up</span></button>
                    </form >
                    <div className="other_link">
                        Already have an account?<Link to={"/signin"}> Sign in!</Link></div>

                </div>
            </div>
        </div>
    );
}

export default FormSignUp;
