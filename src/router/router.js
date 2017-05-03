import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navbar from "../components/navbar/navbar";
import Home from "../components/home/home";
import Messages from "../components/messages/messages";
import Photos from "../components/photos/photos";
import News from "../components/news/news";
import Friends from "../components/friends/friends";

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <section className="content">
                        <Navbar/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/photo" component={Photos}/>
                        <Route path="/news" component={News}/>
                        <Route path="/fiends" component={Friends}/>
                    </section>
                </div>
            </Router>
        );
    }
}
