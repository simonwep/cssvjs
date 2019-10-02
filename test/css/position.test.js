const parse = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <position>', () => {

    it(`Should parse a single value: "bottom"`, () => {
        expect(parse('bottom')).to.deep.equal({
            type: 'position',
            value: [
                {type: 'kw', value: 'bottom'}
            ]
        });
    });

    it('Should parse double values: "bottom left"', () => {
        expect(parse('bottom left')).to.deep.equal({
            type: 'position',
            value: [
                {type: 'kw', value: 'bottom'},
                {type: 'kw', value: 'left'}
            ]
        });
    });

    it('Should parse quadruple values: "bottom 10px left 20%"', () => {
        expect(parse('bottom 10px left 20%')).to.deep.equal({
            type: 'position',
            value: [
                {type: 'kw', value: 'bottom'},
                {type: 'length', value: 10, unit: 'px'},
                {type: 'kw', value: 'left'},
                {type: 'percentage', value: 20}
            ]
        });
    });

    it('Should return null on triple values: "top left 10px"', () => {
        expect(parse('top left 10px')).to.equal(null);
    });

    it('Should return null on opposite: values "left right', () => {
        expect(parse('left right')).to.equal(null);
    });
});
