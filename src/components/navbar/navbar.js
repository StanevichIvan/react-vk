import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <menu className="content__menu">
                <ul className="menu" id="nav-bar">
                    <li className="menu__item menu__item_friends">
                        <Link to='/friends' className="menu__link">Friends</Link>
                    </li>
                    <li className="menu__item menu__item_photos">
                        <Link to="/photo" className="menu__link">Photos</Link>
                    </li>
                    <li className="menu__item menu__item_messages" id="message-nav-button">
                        <Link to="/messages" className="menu__link">Messages</Link>
                    </li>
                    {/*<li className="menu__item menu__item_news">*/}
                        {/*<Link to='/news' href="#" className="menu__link">News</Link>*/}
                    {/*</li>*/}
                </ul>
            </menu>);
    }
};