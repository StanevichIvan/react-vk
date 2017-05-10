import React from 'react';
import MessagesStore from '../../../stores/messagesStore';
import MessagesActions from "../../../actions/messagesActions";
import ChatsStore from "../../../stores/chatsStore";

export default class UploadedDocuments extends React.Component {

    constructor() {
        super();
        this.sendFile = this.sendFile.bind(this);
        this.getDocuments = this.getDocuments.bind(this);
        this.state = {
            showDocs: false,
            documents: []
        };

        this.showDocuments = this.showDocuments.bind(this);
        this.sendFile = this.sendFile.bind(this);
    }

    sendFile(document) {
        const dialog = ChatsStore.getSelectedChat();
        MessagesActions.sendDocument(dialog, document);
        this.setState({showDocs: false});
    }

    getDocuments() {
        this.setState({
            documents: MessagesStore.getDocuments()
        });
    }

    showDocuments() {
        // const state = Object.assign({}, this.state);
        // state.showDocs = !this.state.showDocs;
        this.setState({showDocs: !this.state.showDocs});
    }

    componentDidMount() {
        ChatsStore.addChangeListener(this.getDocuments);
        MessagesActions.getDocuments();
    }

    componentWillUnmount() {
        ChatsStore.removeChangeListener(this.getDocuments);
    }

    render() {

        return (
            <div id="docs-select" className="docs-select chart__docs-select">
                {this.state.showDocs ? (<div className="docs-select__list">
                    {this.state.documents.map((doc, i) => {
                        return (<p key={i} onClick={() => {
                            this.sendFile(doc);
                        }}
                                   className="docs-select__list-title">{doc.title}</p>);
                    })}
                </div>) : <div/>}

                <button className="docs-select__button" type="button" onClick={this.showDocuments}>Attach uploaded
                    file
                </button>
            </div>
        );
    }
}