import React from 'react';

export default class Header extends React.Component {

    render() {
        return (<header className="header">
                <div className="header__left-side">
                    <a className="main-logo"/>
                    <div className="search">
                        <input placeholder="Search" className="search__input" type="text"/>
                        <label className="search__label"/>
                    </div>
                    <div className="header__controls">
                    </div>
                </div>
                <div className="header__right-side">
                    <div className="header__action-buttons">
                        <a className="action-button action-button_reminder"/>
                        <a className="action-button action-button_new-post"/>
                        <a className="action-button action-button_new-message"/>
                    </div>
                    <div className="header__profile">
                        <img className="profile__img" src="" alt=""/>
                        <span className="profile__name"></span>
                    </div>
                </div>
            </header>
        );
    }
}



