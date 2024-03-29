const {expect} = require('chai');
const {parse} = require('../../src');

describe('CSS Type: <ratio>', () => {

    it(`Should parse a valid ratio: 3/4 `, () => {
        expect(parse('3/4')).to.deep.equal({
            type: 'ratio',
            x: 3,
            y: 4
        });
    });

    const invalidRatios = ['5.5/10', '-2/2', '2.3/-2'];
    for (const ratio of invalidRatios) {
        it(`Should return null on invalid ratio: ${ratio}`, () => {
            expect(parse(ratio)).to.equal(null);
        });
    }
});
