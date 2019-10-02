const {expect} = require('chai');
const parse = require('../../src');

describe('CSS Type: <time>', () => {
    const units = ['s', 'ms'];

    for (const unit of units) {
        const num = Number((Math.random() * 1e5).toFixed(3));
        const str = num + unit;

        it(`Should parse ${str}`, () => {
            expect(parse(str)).to.deep.equal({
                type: 'time',
                value: num,
                unit
            });
        });
    }

    it('Should return null (or thrown an error) on invalid units or numbers', () => {
        expect(parse('1231ddd')).to.equal(null);
        expect(() => parse('3232.232.dee')).to.throw();
    });
});
