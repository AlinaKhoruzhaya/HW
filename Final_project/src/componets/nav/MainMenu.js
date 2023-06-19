import { NavLink } from "react-router-dom";

function MainMenu(props) {
    const listItems = props.links.map((item, index) =>
        <li key={item.link.toString()}>
            <NavLink to={item.path}>{item.link}</NavLink>
        </li>
    );

    return (
        <nav className="nav">
            <ul>{listItems}</ul>
        </nav>
    );
}

MainMenu.defaultProps = {
    links: [
        {
            link: "Link",
            path: "/"
        },
        {
            link: "Link",
            path: "/"
        },
    ]
}

export default MainMenu;
