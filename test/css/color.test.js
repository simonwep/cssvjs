const parse = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <color>', () => {

    it('should parse "#b9f"', () => {
        expect(parse('#b9f')).to.deep.equal({
            type: 'color',
            format: 'hex',
            value: 'b9f'
        });
    });

    it('should parse "#b9ff"', () => {
        expect(parse('#b9ff')).to.deep.equal({
            type: 'color',
            format: 'hexa',
            value: 'b9ff'
        });
    });

    it('should parse "#b9ffac"', () => {
        expect(parse('#b9ffac')).to.deep.equal({
            type: 'color',
            format: 'hex',
            value: 'b9ffac'
        });
    });

    it('should parse "#b9ffaccc"', () => {
        expect(parse('#b9ffaccc')).to.deep.equal({
            type: 'color',
            format: 'hexa',
            value: 'b9ffaccc'
        });
    });

    it('should parse "rgb(51, 170, 51)"', () => {
        expect(parse('rgb(51, 170, 51)')).to.deep.equal({
            type: 'color',
            format: 'rgb',
            value: [
                {type: 'num', value: 51},
                {type: 'num', value: 170},
                {type: 'num', value: 51}
            ]
        });
    });

    it('should parse "rgba(4.2, 20.3, .5, .2)"', () => {
        expect(parse('rgba(4.2, 20.3, .5, .2)')).to.deep.equal({
            type: 'color',
            format: 'rgba',
            value: [
                {type: 'num', value: 4.2},
                {type: 'num', value: 20.3},
                {type: 'num', value: 0.5},
                {type: 'num', value: 0.2}
            ]
        });
    });

    it('should parse "rgb(4%, 20%, 2%)"', () => {
        expect(parse('rgb(4%, 20%, 2%)')).to.deep.equal({
            type: 'color',
            format: 'rgb',
            value: [
                {type: 'percentage', value: 4},
                {type: 'percentage', value: 20},
                {type: 'percentage', value: 2}
            ]
        });
    });

    it('should parse "rgba(4%, 5%, 2%, 23%)"', () => {
        expect(parse('rgba(4%, 5%, 2%, 23%)')).to.deep.equal({
                type: 'color',
                format: 'rgba',
                value: [
                    {type: 'percentage', value: 4},
                    {type: 'percentage', value: 5},
                    {type: 'percentage', value: 2},
                    {type: 'percentage', value: 23}
                ]
            }
        );
    });

    it('should parse "rgb(4% 5% 2%)"', () => {
        expect(parse('rgb(4%, 5%, 2%)')).to.deep.equal({
                type: 'color',
                format: 'rgb',
                value: [
                    {type: 'percentage', value: 4},
                    {type: 'percentage', value: 5},
                    {type: 'percentage', value: 2}
                ]
            }
        );
    });

    it('should parse "rgba(40 54 22 / 23%)"', () => {
        expect(parse('rgba(40 54 22 / 23%)')).to.deep.equal({
            type: 'color',
            format: 'rgba',
            value: [
                {type: 'num', value: 40},
                {type: 'num', value: 54},
                {type: 'num', value: 22},
                {type: 'percentage', value: 23}
            ]
        });
    });

    it('should parse "rgba(4% 5% 2% / 23%)"', () => {
        expect(parse('rgba(4% 5% 2% / 5%)')).to.deep.equal({
                type: 'color',
                format: 'rgba',
                value: [
                    {type: 'percentage', value: 4},
                    {type: 'percentage', value: 5},
                    {type: 'percentage', value: 2},
                    {type: 'percentage', value: 5}
                ]
            }
        );
    });

    it('should parse "rgba(1e2, .5e1, .5e0, +.25e2%)"', () => {
        expect(parse('rgba(1e2, .5e1, .5e0, +.25e2%)')).to.deep.equal(
            {
                type: 'color',
                format: 'rgba',
                value: [
                    {type: 'num', value: 100},
                    {type: 'num', value: 5},
                    {type: 'num', value: 0.5},
                    {type: 'percentage', value: 25}
                ]
            }
        );
    });

    const invalidValues = [
        '#fffbf',
        '#fnf',
        '#fffffffs',
        'rgb(300, 32, 34)',
        'rgb(300, 32 34)',
        'rgb(10, 34, 5, 0.3)',
        'rgba(10, 34, 5, 1.01)',
        'rgba(10% 0 1% / 7%)',
        'rgba(10% 0% 5% / -.e5%)',
        'rgba(3.5%, 0.3%, 2%, 120%)'
    ];

    for (const str of invalidValues) {
        it(`should return null for ${str}`, () => {
            const result = parse(str);

            if (result) {
                console.log(result);
            }

            expect(result).to.equal(null);
        });
    }

});
