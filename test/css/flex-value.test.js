const {expect} = require('chai');
const {parse} = require('../../src');

describe('CSS Type: <flex>', () => {

    it(`Should parse "12.4fr"`, () => {
        expect(parse('12.4fr')).to.deep.equal({
            type: 'flex',
            value: 12.4
        });
    });
});
