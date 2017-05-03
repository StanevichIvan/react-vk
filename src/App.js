import React, {Component} from 'react';
import Routes from './router/router';

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <section className="content">
                    <Routes/>
                </section>
            </div>
        );
    }
}

export default App;