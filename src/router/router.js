import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import Home from "../components/home/home";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Home}/>
                    <Route path="/header" component={Header}/>
                    <Route path="/navbar" component={Navbar}/>
                </div>
            </Router>
        );
    }
}
