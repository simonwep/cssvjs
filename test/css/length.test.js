const {expect} = require('chai');
const {parse} = require('../../src');

describe('CSS Type: <length>', () => {
    const units = ['cap', 'ch', 'em', 'ex', 'ic', 'lh', 'rem', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'cm', 'mm', 'q', 'in', 'pc', 'pt', 'mozmm'];

    for (const unit of units) {
        const num = Number((Math.random() * 1e5).toFixed(3));
        const str = num + unit.split('')
            .map(v => Math.random() > 0.5 ? v.toUpperCase() : v.toLowerCase())
            .join('');

        it(`Should parse ${str}`, () => {
            expect(parse(str)).to.deep.equal({
                type: 'length',
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
