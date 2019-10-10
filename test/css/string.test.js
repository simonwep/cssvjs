const {expect} = require('chai');
const {parse} = require('../../src');

describe('CSS Type: <string>', () => {

    it(`Should parse single quoted string: 'Hello World'`, () => {
        expect(parse(`'Hello World'`)).to.deep.equal({
            type: 'string',
            value: 'Hello World'
        });
    });

    it('Should parse double quoted string: "Hello World"', () => {
        expect(parse('"Hello World"')).to.deep.equal({
            type: 'string',
            value: 'Hello World'
        });
    });

    it(`Should parse ignore escaped quotes: "abc\\' efg\\""`, () => {
        expect(parse(`"abc\\' efg\\""`)).to.deep.equal({
            type: 'string',
            value: `abc' efg"`
        });
    });
});
