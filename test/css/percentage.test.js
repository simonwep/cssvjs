const parse = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <percentage>', () => {

    it('should parse a percentage value', () => {
        expect(parse('.9%')).to.deep.equal({
            type: 'percentage',
            value: 0.9
        });
    });

});
