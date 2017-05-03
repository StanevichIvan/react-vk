import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navbar from "../components/navbar/navbar";
import Home from "../components/home/home";
import Messages from "../components/messages/messages";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <section className="content">
                        <Navbar/>
                        <div className="content__router-outlet router-outlet">
                            <Route exact path="/" component={Home}/>
                            <Route path="/messages" component={Messages}/>
                        </div>
                    </section>
                </div>
            </Router>
        );
    }
}
