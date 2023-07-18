import MainMenu from "../nav/MainMenu.js";
import Logo from "../img/Logo.svg";
import { Link } from "react-router-dom";
import NavFooterSocialMedia from "../nav/NavFooterSocialMedia";

const linksFirst = [
    {
        link: "Home",
        path: "/"
    },
    {
        link: "About us",
        path: "/about"
    },
];

const linksSecond = [
    {
        link: "Contacts",
        path: "/contacts"
    },

    {
        link: "Help center",
        path: "/help"
    },
];

const linksThird = [

    {
        link: "Pricing plans",
        path: "/price"
    },
    {
        link: "Privacy Policy",
        path: "/privacy"
    },
];

const columnName = {
    column_first: 'Resources',
    column_second: 'Help',
}

const contentBottomPage = {
    text: '© FlixGo, 2018—2023.',
}

function footer() {


    return (
        <footer>
            <div className="footer">
                <div className="footer_container container">
                    <div className="footer_logo_icon">
                        <Link to={""}>
                            <img src={Logo} alt="logo" />
                        </Link>
                        <NavFooterSocialMedia />
                    </div>
                    <div className="column colums_first"><span>{columnName.column_first}</span>
                        <MainMenu links={linksFirst} /></div>
                    <div className="column colums_second"><span>{columnName.column_second}</span>
                        <MainMenu links={linksSecond} /></div>
                    <MainMenu className="colums_third" links={linksThird} />

                </div><div className="bottom_content container">
                    {contentBottomPage.text}
                </div>
            </div>
        </footer>
    )
}
export default footer;
