import * as React from "react";
import AppDispatcher from '../../../dispatcher/appDispatcher';
import ActionTypes from '../../../constants/actionTypes';
import MessagesActions from "../../../actions/messagesActions";

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: props.dialog
        };
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        this.setState({dialog: nextProps.dialog});
    }

    sendMessage(event) {
        event.preventDefault();
        const message = event.target.message.value;
        MessagesActions.sendMessage(this.state.dialog, message);
    }

    render() {
        return (
            <form className="chart__form" id="chart-form" onSubmit={this.sendMessage}>
                <div className="chart__input-wrap">
                    <div className="chart__input">
                        <input placeholder="Your message" name="message"/>
                        <div className="chart__file-upload">
                            <input id="file-upload" name="image" type="file"/>
                        </div>
                        <div id="docs-select" className="docs-select chart__docs-select">
                            <div className="docs-select__list"/>
                            <button className="docs-select__button" type="button">Attach uploaded
                                file
                            </button>
                        </div>
                    </div>
                    <button className="chart__input-button" type="submit">Send</button>
                </div>
                <img className="chart__form-avatar" src="${this.senderImg}"/>
            </form>
        );
    }
}
