const {parse} = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <border-radius>', () => {

    it('should parse "1px 2px 4px / 2em 3em"', () => {
        expect(parse('1px 2px 4px / 2em 3em')).to.deep.equal({
            type: 'border-radius',
            topLeftRadius: [
                {type: 'length', unit: 'px', value: 2},
                {type: 'length', unit: 'em', value: 2}
            ],
            topRightRadius: [
                {type: 'length', unit: 'px', value: 4},
                {type: 'length', unit: 'em', value: 3}
            ],
            bottomLeftRadius: [
                {type: 'length', unit: 'px', value: 2},
                {type: 'length', unit: 'em', value: 2}
            ],
            bottomRightRadius: [
                {type: 'length', unit: 'px', value: 4},
                {type: 'length', unit: 'em', value: 3}
            ]
        });
    });

    it('should parse "1mm 2cm 4px 9.4% / 3.4em"', () => {
        expect(parse('1mm 2cm 4px 9.4% / 3.4em')).to.deep.equal({
            type: 'border-radius',
            topLeftRadius: [
                {type: 'length', unit: 'cm', value: 2},
                {type: 'length', unit: 'em', value: 3.4}
            ],
            topRightRadius: [
                {type: 'length', unit: 'px', value: 4},
                {type: 'length', unit: 'em', value: 3.4}
            ],
            bottomLeftRadius: [
                {type: 'percentage', value: 9.4},
                {type: 'length', unit: 'em', value: 3.4}
            ],
            bottomRightRadius: [
                {type: 'length', unit: 'px', value: 4},
                {type: 'length', unit: 'em', value: 3.4}
            ]
        });
    });

    it('should parse "2cm 3mm 4em"', () => {
        expect(parse('2cm 3mm 4em')).to.deep.equal({
            type: 'border-radius',
            topLeftRadius: [
                {type: 'length', unit: 'mm', value: 3},
                {type: 'length', unit: 'mm', value: 3}
            ],
            topRightRadius: [
                {type: 'length', unit: 'em', value: 4},
                {type: 'length', unit: 'em', value: 4}
            ],
            bottomLeftRadius: [
                {type: 'length', unit: 'mm', value: 3},
                {type: 'length', unit: 'mm', value: 3}
            ],
            bottomRightRadius: [
                {type: 'length', unit: 'em', value: 4},
                {type: 'length', unit: 'em', value: 4}
            ]
        });
    });
});
