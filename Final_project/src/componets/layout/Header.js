import MainMenu from "../nav/MainMenu.js";
import Search from "./Search.js";
import Logo from "../img/Logo.svg";
import { HeaderSvgFavourites } from "../svg/HeadeSvgFavourites.tsx";
import { HeaderSvgSearch } from "../svg/HeaderSvgSearch.tsx";
import 'reset-css';
import "../../styles/Header.css";
import "../img/Heart.svg";
import "../img/User.svg";

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
                    {/* <div className="search"> */}
                    {/* <input id="input_search" type="text" placeholder="Search..." />
                    <HeaderSvgSearch id="search" /> */}
                    <Search />
                </div>

                <a className="favourites">
                    <HeaderSvgFavourites id="heart" />
                </a>
                <a className="account">
                    <button><span>{nameButton.name}</span></button>
                </a>
                <div className="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}
export default header;
