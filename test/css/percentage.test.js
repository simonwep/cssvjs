const {expect} = require('chai');
const parse = require('../../src');

describe('CSS Type: <percentage>', () => {

    it('Should parse a percentage value', () => {
        expect(parse('.9%')).to.deep.equal({
            type: 'percentage',
            value: 0.9
        });
    });

});
