const tokenizer = require('../../../src/lib/tokenizer');
const {expect} = require('chai');

describe('Tokenizer', () => {
    const testStr = '   foo{ .35} -3, baz,-27.4ba_m  "(3.3\'';

    it('Properly parse keywords', () => {
        const arr = tokenizer(testStr)
            .filter(v => v.type === 'kw')
            .map(v => v.value);

        expect(arr).to.deep.equal(['foo', 'baz', 'ba_m']);
    });

    it('Properly parse punctuation characters', () => {
        const arr = tokenizer(testStr)
            .filter(v => v.type === 'punc')
            .map(v => v.value);

        expect(arr).to.deep.equal(['{', '}', ',', ',', '"', '(', '\'']);
    });

    it('Properly parse numbers', () => {
        const arr = tokenizer(testStr)
            .filter(v => v.type === 'num')
            .map(v => v.value);

        expect(arr).to.deep.equal([0.35, -3, -27.4, 3.3]);
    });
});
