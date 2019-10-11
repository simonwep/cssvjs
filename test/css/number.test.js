const {expect} = require('chai');
const {parse} = require('../../src');

describe('CSS Type: <number>', () => {

    for (let i = 0; i < 10; i++) {
        let num = (Math.random() - 0.5) * 1e5;

        it(`Should parse "${num}"`, () => {
            expect(parse(String(num))).to.deep.equal({
                type: 'number',
                value: num
            });
        });
    }
});
