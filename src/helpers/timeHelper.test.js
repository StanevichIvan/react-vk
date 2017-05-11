import timeHelper from './timeHelper';

describe('Convert unix time offset to string', ()=> {

    it('Minutes to string', ()=> {
        const time = Date.now()/1000 - 660;
        expect(timeHelper(time)).toBe('11 min');
    });

    it('Hours to string' , () => {
        const time = Date.now()/1000 - (60 * 60 * 4);
        expect(timeHelper(time)).toBe('4 h');
    });

    it('Days to string' , () => {
        const time = Date.now()/1000 - (60 * 60 * 24 * 5);
        expect(timeHelper(time)).toBe('5 d');
    });
});