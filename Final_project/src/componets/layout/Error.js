import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {

    const ContentErrorPage = {
        name_error: '404',
        text: 'The page you are looking for not available!',
        name_button: 'go back',
    }

    return (
        <div className="wrapper_error_page">
            <div className="bg_error_page">
                <div className="container">
                    <div className="bg_content_error_page">
                        <h1 className='name_error'>{ContentErrorPage.name_error}</h1>
                        <p>{ContentErrorPage.text}</p>
                        <Link to={""}><button><span>{ContentErrorPage.name_button}</span></button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Error;
