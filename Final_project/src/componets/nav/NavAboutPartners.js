import { NavLink } from "react-router-dom";
import imgOcean from '../img/About_us/Partners/3docean.png';
import imgActiveden from '../img/About_us/Partners/Activeden.png';
import imgAudiojungle from '../img/About_us/Partners/Audiojungle.png';
import imgCodecanyon from '../img/About_us/Partners/Codecanyon.png';
import imgPhotodune from '../img/About_us/Partners/Photodune.png';
import imgThemeforest from '../img/About_us/Partners/Themeforest.png';

function NavAbout(props) {
    const listItems = props.links.map((item, index) => {
        if (item.img) {
            return (
                <li key={item.link.toString()}>
                    <NavLink to={item.path}>
                        <img src={item.img} alt={item.link} />
                    </NavLink>
                </li>
            )
        } else {
            return (
                <li key={item.link.toString()}>
                    <NavLink to={item.path}>{item.link}</NavLink>
                </li>
            )
        }
    });

    return (
        <nav className={props.class}>
            <ul>{listItems}</ul>
        </nav>
    );
}

NavAbout.defaultProps = {
    class: 'nav_about',
    links: [
        {
            link: "Link",
            path: "/",
            img: imgThemeforest
        },
        {
            link: "Link",
            path: "/",
            img: imgAudiojungle
        },
        {
            link: "Link",
            path: "/",
            img: imgCodecanyon
        },
        {
            link: "Link",
            path: "/",
            img: imgPhotodune
        },
        {
            link: "Link",
            path: "/",
            img: imgActiveden
        },
        {
            link: "Link",
            path: "/",
            img: imgOcean
        },
    ]
}

export default NavAbout;
