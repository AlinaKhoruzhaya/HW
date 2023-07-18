import * as React from 'react';
import { Link } from "react-router-dom";
import NavContactsSocialMedia from '../nav/NavContactsSocialMedia';
import ContactsForm from "./ContactsForm.js"

const ContactsList = () => {

    const contactsPageTitle = {
        title_page: 'Contacts',
        link_home: 'Home',
    };
    const contactsPageContent = {
        title_content: 'Get In Touch',
        text: 'We are always happy to help and provide more information about our services. You can contact us through email, phone, or by filling out the form on our website. Thank you for considering us!',
        tel: '8 800 234 56 78',
        link_tel: 'tel:88002345678',
        email: 'support@flixgo.com',
        link_email: 'mailto:support@flixgo.com',
    };

    return (
        <div className="wrapper_contacts">
            < div className="contacts_top">
                <div className='contacts_top_content container container_contacts'>
                    <h1>{contactsPageTitle.title_page}</h1>
                    <div className='navigation_contacts'>
                        <Link to={"/"}>
                            <span className='link_home'>{contactsPageTitle.link_home}</span>
                        </Link>
                        <span >{contactsPageTitle.title_page}</span>
                    </div>
                </div>
            </div>
            <div className='contacts_bottom_bg'>
                <div className='container container_contacts'>
                    <div className='contacts_bottom'>
                        <div className='contacts__bottom_left'>
                            <h2>{contactsPageContent.title_content}</h2>
                            <p>{contactsPageContent.text}</p>
                            <Link to={contactsPageContent.link_tel}>{contactsPageContent.tel}</Link><br />
                            <Link to={contactsPageContent.link_email}>{contactsPageContent.email}</Link>
                            <NavContactsSocialMedia />
                        </div>
                        <div className='contacts__bottom_right'>
                            <ContactsForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactsList;
