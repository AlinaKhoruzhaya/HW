import MainMenu from "../nav/MainMenu.js";
import Search from "./Search.js";
import Logo from "../img/Logo.svg";
import { HeaderSvgFavourites } from "../svg/HeadeSvgFavourites.tsx";
import "../img/Heart.svg";
import "../img/User.svg";
import Sidebar from '../pages/Sidebar.js';
import { slide as Menu } from 'react-burger-menu';

const links = [
    {
        link: "Home",
        path: "/"
    },
    {
        link: "Movies",
        path: "/movies"
    },
    {
        link: "About us",
        path: "/about"
    },
    {
        link: "Contacts",
        path: "/contacts"
    },
];

const nameButton = {
    name: 'sigh in'
}


function header() {
    return (
        <header className="header">
            <div className="header_container container">
                <div className="logo">
                    <a >
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
                <MainMenu links={links} />
                <div>
                    <Search />
                </div>

                <a className="favourites">
                    <HeaderSvgFavourites id="heart" />
                </a>
                <a className="account">
                    <button><span>{nameButton.name}</span></button>
                </a>

                <div className="burger-menu" id="outer-container">
                    <Menu right />
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>

            </div>
        </header>
    )
}

export default header;
