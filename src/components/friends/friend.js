import * as React from "react";

export default class Friend extends React.Component {

    constructor(props) {
        super();
        this.state = {user: props.user};
    }
    //
    // componentWillReceiveProps(nextProps) {
    //     this.setState({user: });
    // }

    render() {
        if (typeof this.state.user !== 'object')
            return (<div/>);

        return (
            <div className="conversation__message new">
                <img className="conversation__avatar" src={this.state.user.photo}/>
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