const {expect} = require('chai');
const {parse} = require('../../src');

describe('CSS Type: <integer>', () => {
    const validIntegers = [['-15', -15], ['1e-5', 0.00001], ['1e5', 100000]];
    const invalidIntegers = ['+---12', '12.', '_5', '\\4E94', 'ten', '12.0'];

    for (const [str, res] of validIntegers) {
        it(`Should parse "${str}"`, () => {
            expect(parse(str)).to.deep.equal({
                type: 'integer',
                value: res
            });
        });
    }

    for (const str of invalidIntegers) {
        it(`Should return not return a node of type integer ${str}`, () => {
            expect(parse(str)).to.satisfy(v => {
                return v === null || v.type !== 'integer';
            });
        });
    }
});
