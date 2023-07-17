import { NavLink } from "react-router-dom";

function MainMenuBurg(props) {

    const listItems = props.links.map((item, index) =>
        <li key={item.link.toString()}>
            <NavLink to={item.path}>{item.link} </NavLink>
        </li>
    );

    return (
        <div className="wrapper">
            <ul>{listItems}</ul>
        </div>
    );
}

MainMenuBurg.defaultProps = {
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

export default MainMenuBurg;
