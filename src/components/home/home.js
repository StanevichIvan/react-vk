import React from 'react';

export default class Home extends React.Component {
    // constructor() {
    //     super();
    // }

    formSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
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