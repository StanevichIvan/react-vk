import React, {Component} from 'react';
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";

class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <section class="content">
                    <Navbar/>
                </section>
            </div>
        );
    }
}

export default App;