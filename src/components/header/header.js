import React from 'react';
import './header.css';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<header className="header">
                <div className="header__left-side">
                    <a className="main-logo"></a>
                    <div className="search">
                        <input placeholder="Search" className="search__input" type="text"/>
                        <label className="search__label"></label>
                    </div>
                    <div className="header__controls">
                        <ul className="header__controls-list">
                            <li className="controls-list__item"><a href="#">People</a></li>
                            <li className="controls-list__item"><a href="#">Games</a></li>
                            <li className="controls-list__item"><a href="#">Music</a></li>
                            <li className="controls-list__item"><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header__right-side">
                    <div className="header__action-buttons">
                        <a className="action-button action-button_reminder"></a>
                        <a className="action-button action-button_new-post"></a>
                        <a className="action-button action-button_new-message"></a>
                    </div>
                    <div className="header__profile">
                        <img className="profile__img" src=""/>
                        <span className="profile__name">Vyacheslav Kornilov</span>
                    </div>
                </div>
            </header>
        );
    }
}



