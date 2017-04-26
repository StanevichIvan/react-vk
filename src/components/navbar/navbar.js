import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (<menu className="content__menu">
            <ul className="menu" id="nav-bar">
                <li className="menu__item menu__item_friends"><a href="#" className="menu__link">Friends</a></li>
                <li className="menu__item menu__item_photos"><a href="#" className="menu__link">Photos</a></li>
                <li className="menu__item menu__item_videos"><a href="#" className="menu__link">Videos</a></li>
                <li className="menu__item menu__item_music"><a href="#" className="menu__link">Music</a></li>
                <li className="menu__item menu__item_messages" id="message-nav-button"><a href="#"
                                                                                          className="menu__link">Messages
                </a></li>
                <li className="menu__item menu__item_groups"><a href="#" className="menu__link">Groups</a></li>
                <li className="menu__item menu__item_news"><a href="#" className="menu__link">News</a></li>
                <li className="menu__item menu__item_feedback"><a href="#" className="menu__link">Feedback</a></li>
                <li className="menu__item menu__item_bookmarks"><a href="#" className="menu__link">Bookmarks</a></li>
                <li className="menu__item menu__item_settings"><a href="#" className="menu__link">Settings</a></li>
                <li className="menu__item menu__item_games"><a href="#" className="menu__link">Games</a></li>
                <li className="menu__item menu__item_documents"><a href="#" className="menu__link">Documents</a></li>
                <li className="menu__item menu__item_cloud"><a href="#" className="menu__link">Cloud</a></li>
            </ul>
        </menu>);
    }
};