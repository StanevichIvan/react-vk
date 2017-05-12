import renderer from 'react-test-renderer';
import Friend from './friend';
import * as React from "react";
import User from "../../models/User";

describe('Friend component', () => {

    it('Сorrectly rendering', () => {
        const obj = {
            first_name: "Игнат",
            last_name: "Игнатов",
            photo_50: "https://d75ljpmh88vxs.cloudfront.net/web/images/lens_flare_inspiration_square.jpg",
            last_seen: Date.now() / 1000,
            uid: 2131231
        };

        const user = new User(obj);
        const rendered = renderer.create(<Friend user={user}/>);
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});