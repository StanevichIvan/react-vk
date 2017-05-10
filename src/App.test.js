import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App entry file test', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        // console.log('succsess');
    });
});
