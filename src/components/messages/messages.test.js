import MessagesComponent from './messages';
import TestUtils from 'react-addons-test-utils';
import * as React from "react";

describe('Messages page component', ()=> {
    it('rendered component', () => {
        let messageComponent = TestUtils.renderIntoDocument(<MessagesComponent/>);
    })
});