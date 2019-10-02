const parse = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <side-or-corner>', () => {

    it('should parse a side: "to left"', () => {
        expect(parse('to left')).to.deep.equal({
            type: 'side',
            value: [
                {type: 'kw', value: 'to'},
                {type: 'kw', value: 'left'}
            ]
        });
    });

    it('should parse a corner: "to bottom left"', () => {
        expect(parse('to bottom left')).to.deep.equal({
            type: 'corner',
            value: [
                {type: 'kw', value: 'to'},
                {type: 'kw', value: 'bottom'},
                {type: 'kw', value: 'left'}
            ]
        });
    });

    it('should return null on opposite values: "to left right"', () => {
        expect(parse('to left right')).to.equal(null);
    });
});
