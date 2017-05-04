import * as React from "react";
import AppDispatcher from '../../../dispatcher/appDispatcher';
import ActionTypes from '../../../constants/actionTypes';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        };
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({id: nextProps.id});
    }

    sendMessage(event) {
        event.preventDefault();
        const message = event.target.message.value;
        AppDispatcher.handleViewAction({
            type: ActionTypes.SEND_MESSAGE,
            payload: {
                id: this.state.id,
                body: message
            }
        });
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
