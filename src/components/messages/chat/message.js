import * as React from "react";

export default class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        };
    }

    render() {
        return (
            <div className="chart-message">
                <div className="chart-message__avatar">
                    <div className="chart-message__avatar-content active">
                        <img src={this.state.message.img} alt=""/>
                        <div className="chart-message__controls">
                            <span className="chart-message__control chart-message__control_star"/>
                            <span className="chart-message__control chart-message__control_share"/>
                        </div>
                    </div>
                </div>
                <div className="chart-message__time">
                </div>
                <div className="chart-message__content">
                    <p className="chart-message__text">
                        {this.state.message.body}
                    </p>
                </div>
            </div>
        );
    }
}