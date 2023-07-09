import { useForm } from "react-hook-form";
import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FormForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(values) {
        alert(values.email + " " + values.password);
    }

    return (
        <div className="wrapper_password">
            <div className="wrapper_bg_password">
                <div className="bg_password_form">
                    <Link to={""}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-item-password">
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

                        <Checkbox {...label} defaultChecked />
                        <label> I agree to the  <Link to={"/privacy"}> Privacy policy</Link></label>
                        <button className="form-item-password" type="submit"><span>recover</span></button>
                    </form >
                    <div className="info">
                        We will send a password to your Email</div>
                </div>
            </div>
        </div>
    );
}

export default FormForgotPassword;
