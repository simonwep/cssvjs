const {expect} = require('chai');
const parse = require('../../src');

describe('CSS Type: <angle>', () => {

    it(`Should parse a plain-text url: url(http://www.example.com)`, () => {
        expect(parse('url(http://www.example.com)')).to.deep.equal({
            type: 'url',
            format: 'plain',
            value: 'http://www.example.com'
        });
    });

    it(`Should parse a url in quotes: url("http://www.example.com")`, () => {
        expect(parse('url("http://www.example.com")')).to.deep.equal({
            type: 'url',
            format: 'quotated',
            value: {
                type: 'str',
                value: 'http://www.example.com'
            }
        });
    });
});
