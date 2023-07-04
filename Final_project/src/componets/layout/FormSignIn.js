import { useForm } from "react-hook-form";

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
                <button id="toggle-password" type="button" aria-label="Показать пароль в виде простого текста. Предупреждение: в этом случае ваш пароль будет отображен на экране.">Показать пароль</button>
                <p className={'error-message'}>{errors.email && errors.email.message}</p>
            </div>

            <div className="form-item-sign-in">
                <input
                    className={errors.password ? 'error' : ''}
                    type="password"
                    autocomplete="current-password"
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


            <button className="form-item-sign-in" type="submit"><span>sign in</span></button>
        </form >
    );
}

export default FormSignIn;
