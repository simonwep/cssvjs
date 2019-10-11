const {parse} = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <angle>', () => {
    const units = ['deg', 'grad', 'rad', 'turn'];

    for (const unit of units) {
        const num = Number((Math.random() * 1e5).toFixed(3));
        const str = num + unit;

        it(`Should parse "${str}"`, () => {
            expect(parse(str)).to.deep.equal({
                type: 'angle',
                value: num,
                unit
            });
        });
    }

    it('Should return null on invalid units or numbers', () => {
        expect(parse('1231ddd')).to.equal(null);
        expect(parse('3232.232.dee')).to.equal(null);
    });
});
