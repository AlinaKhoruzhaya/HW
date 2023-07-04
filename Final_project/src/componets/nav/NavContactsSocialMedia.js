import { NavLink } from "react-router-dom";
import { IconFacebook } from '../svg/IconFacebook.tsx';
import { IconInstagram } from "../svg/IconInstagram.tsx";
import { IconTelegram } from "../svg/IconTelegram.tsx";
import { IconLinkedin } from "../svg/IconLinkedin.tsx";
import { IconTwitter } from "../svg/IconTwitter.tsx"


function NavContactsSocialMedia(props) {
    const listItems = props.links.map((item, index) => {
        if (item.img) {
            return (
                <li key={item.link.toString()}>
                    {/* <NavLink to={item.path}>{item.link}</NavLink> */}
                    <NavLink to={item.path}>
                        {item.img}
                        {/* <span>{item.link}</span> */}
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

NavContactsSocialMedia.defaultProps = {
    class: 'navContacts',
    links: [
        {
            link: "Link",
            path: "/",
            img: <IconFacebook id="facebook" />
        },
        {
            link: "Link",
            path: "/",
            img: <IconInstagram id="instagram" />
        },
        {
            link: "Link",
            path: "/",
            img: <IconTelegram id="telegram" />
        },
        {
            link: "Link",
            path: "/",
            img: <IconTwitter id="twitter" />
        },
        {
            link: "Link",
            path: "/",
            img: <IconLinkedin id="linkedin" />
        },
    ]
}

export default NavContactsSocialMedia;
