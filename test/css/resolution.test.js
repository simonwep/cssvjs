const {expect} = require('chai');
const {parse} = require('../../src');

describe('CSS Type: <resolution>', () => {
    const units = ['dpi', 'dpcm', 'dppx', 'x'];

    for (const unit of units) {
        const num = Number((Math.random() * 1e5).toFixed(3));
        const str = num + unit;

        it(`Should parse "${str}"`, () => {
            expect(parse(str)).to.deep.equal({
                type: 'resolution',
                value: num,
                unit
            });
        });
    }
});
