import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import Home from "../components/home/home";
import Messages from "../components/messages/messages";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Navbar/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/messages" component={Messages}/>

                </div>
            </Router>
        );
    }
}
