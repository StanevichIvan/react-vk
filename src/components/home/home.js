import React from 'react';

export default class Home extends React.Component {

    formSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <a target="_blank"
                   href="https://oauth.vk.com/authorize?client_id=5971236&redirect_uri=blank.html&scope=friends,messages,wall,video,docs,photos&response_type=token">
                    Get credentials
                </a>
                <h1>Enter credentials</h1>
                <div>
                    <label>
                        Token
                        <input type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        Current user ID
                        <input type="text"/>
                    </label>
                </div>
                <button type="submit">Start</button>
            </form>
        );
    }
}