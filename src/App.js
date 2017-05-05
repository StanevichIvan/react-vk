import React, {Component} from 'react';
import Routes from './router/router';
import Header from "./components/header/header";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Header/>
                <div id="messages-content">
                    <Routes/>
                </div>
            </div>
        );
    }
}

export default App;