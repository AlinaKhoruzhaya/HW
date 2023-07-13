import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


function ContactsForm() {
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
            <div className="form-item">
                <input
                    className={errors.name ? 'error' : ''}
                    type="text"
                    placeholder="Your name"
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

            <div className="form-item">
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

            <div className="form-item">
                <input
                    className={errors.subject ? 'error' : ''}
                    type="text"
                    placeholder="Subject"
                    {...register("subject", {
                        required: "Required",
                        pattern: {
                            value: /^[a-zA-z0-9" "]+$/g,
                            message: "Incorrect text"
                        }
                    })}
                />
                <p className={'error-message'}>{errors.subject && errors.subject.message}</p>
            </div>

            <div className="form-item">
                <textarea
                    placeholder="Type your message..."
                    className={errors.message ? 'error' : ''}
                    {...register("message", {
                        required: "Required",
                        pattern: {
                            value: /^[a-zA-z0-9" "]+$/g,
                            message: "Incorrect text"
                        }
                    })}
                />
                <p className={'error-message'}>{errors.message && errors.message.message}</p>
            </div>
            <button className="form-item" type="submit"><span>send</span></button>
        </form >
    );
}

export default ContactsForm;
