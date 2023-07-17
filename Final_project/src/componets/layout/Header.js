import MainMenu from "../nav/MainMenu.js";
import Search from "./Search.js";
import Logo from "../img/Logo.svg";
import { HeaderSvgFavourites } from "../svg/HeadeSvgFavourites.tsx";
import "../img/Header/Heart.svg";
import "../img/Header/User.svg";
import { Link } from "react-router-dom";
import MainMenuBurg from "../nav/MainMenuBurg.js";


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
                    <Link to={""}>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <MainMenu links={links} />
                <div>
                    <Search />
                </div>
                <Link className="favourites" to={"/wishlist"} >
                    <HeaderSvgFavourites id="heart" />
                </Link>
                <Link to={"/signin"} className="account">
                    <button><span>{nameButton.name}</span></button>
                </Link>
                <div className="burger-menu" >
                    <input type="checkbox" id="active" />
                    <label for="active" class="menu-btn"><span></span></label>
                    <label for="active" class="close"></label>
                    <MainMenuBurg links={links} />
                </div>
            </div>
        </header>
    )
}

export default header;
