import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu
        // right
        // width={'260px'}
        >
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/movies">
                Movies
            </a>
            <a className="menu-item" href="/about">
                About us
            </a>
            <a className="menu-item" href="/contacts">
                Contacts
            </a>
        </Menu >
    );
};
