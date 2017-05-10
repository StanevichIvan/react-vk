import * as React from "react";
import {Redirect} from "react-router-dom";

export default class Friend extends React.Component {

    constructor(props) {
        super();
        this.state = {user: props.user, redirectToPhotos: false};
        this.redirectToPhotos = this.redirectToPhotos.bind(this);
    }

    redirectToPhotos() {
        this.setState({user: this.state.user, redirectToPhotos: true});
    }

    render() {

        if (this.state.redirectToPhotos) {
            let path = `/photo/${this.state.user.id}`;
            return (<Redirect to={path} push/>);
        }

        if (typeof this.state.user !== 'object')
            return (<div/>);

        return (
            <div className="conversation__message new" onClick={this.redirectToPhotos}>
                <img className="conversation__avatar" src={this.state.user.photo} alt=""/>
                <div className="conversation__message-info">
                    <h4 className="conversation__name">{this.state.user.firstName} {this.state.user.lastName}</h4>
                </div>
                <div className="conversation__message-info">
                    <h4 className="conversation__name conversation__name_right">
                        <span className="conversation__message-count"/>
                        <span className="conversation__message-time"/>
                    </h4>
                    <p className="conversation__message-text conversation__name_right">
                        <i className="conversation__attachment"/>
                    </p>
                </div>
            </div>);
    }
}