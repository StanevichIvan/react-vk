import renderer from 'react-test-renderer';
import Friends from './friends';
import * as React from "react";

describe('Friends rendering' , () => {

    it('renders correctly', () => {
        const rendered = renderer.create(<Friends/>);
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
