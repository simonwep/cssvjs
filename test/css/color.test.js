const {parse} = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <color>', () => {

    it('should parse "#b9f"', () => {
        expect(parse('#b9f')).to.deep.equal({
            type: 'color',
            format: 'hex',
            value: 'b9f'
        });
    });

    it('should parse "#b96"', () => {
        expect(parse('#b96')).to.deep.equal({
            type: 'color',
            format: 'hex',
            value: 'b96'
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
                {type: 'num', value: 51, decimal: false},
                {type: 'num', value: 170, decimal: false},
                {type: 'num', value: 51, decimal: false}
            ]
        });
    });

    it('should parse "rgba(4.2, 20.3, .5, .2)"', () => {
        expect(parse('rgba(4.2, 20.3, .5, .2)')).to.deep.equal({
            type: 'color',
            format: 'rgba',
            value: [
                {type: 'num', value: 4.2, decimal: true},
                {type: 'num', value: 20.3, decimal: true},
                {type: 'num', value: 0.5, decimal: true},
                {type: 'num', value: 0.2, decimal: true}
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
                {type: 'num', value: 40, decimal: false},
                {type: 'num', value: 54, decimal: false},
                {type: 'num', value: 22, decimal: false},
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

    it('should parse "rgb(1e2, .5e1, .5e0, +.25e2%)"', () => {
        expect(parse('rgb(1e2, .5e1, .5e0, +.25e2%)')).to.deep.equal(
            {
                type: 'color',
                format: 'rgba',
                value: [
                    {type: 'num', value: 100, decimal: false},
                    {type: 'num', value: 5, decimal: true},
                    {type: 'num', value: 0.5, decimal: true},
                    {type: 'percentage', value: 25}
                ]
            }
        );
    });

    it('should parse "hsl(270, 60%, 70%)"', () => {
        expect(parse('hsl(270, 60%, 70%)')).to.deep.equal({
                format: 'hsl',
                type: 'color',
                value: [
                    {type: 'num', value: 270, decimal: false},
                    {type: 'percentage', value: 60},
                    {type: 'percentage', value: 70}
                ]
            }
        );
    });

    it('should parse "hsla(4.71239rad, 60%, 70%, 0.3)"', () => {
        expect(parse('hsla(4.71239rad, 60%, 70%, 0.3)')).to.deep.equal({
                format: 'hsla',
                type: 'color',
                value: [
                    {type: 'angle', unit: 'rad', value: 4.71239},
                    {type: 'percentage', value: 60},
                    {type: 'percentage', value: 70},
                    {type: 'num', value: 0.3, decimal: true}
                ]
            }
        );
    });

    it('should parse "hsl(4.71239rad 60% 50% / 15%)"', () => {
        expect(parse('hsl(4.71239rad 60% 50% / 15%)')).to.deep.equal({
                type: 'color',
                format: 'hsla',
                value: [
                    {type: 'angle', unit: 'rad', value: 4.71239},
                    {type: 'percentage', value: 60},
                    {type: 'percentage', value: 50},
                    {type: 'percentage', value: 15}]
            }
        );
    });

    it('should parse "hsla(270 60% 50% / 15%)"', () => {
        expect(parse('hsla(270 60% 50% / 15%)')).to.deep.equal({
                format: 'hsla',
                type: 'color',
                value: [
                    {type: 'num', value: 270, decimal: false},
                    {type: 'percentage', value: 60},
                    {type: 'percentage', value: 50},
                    {type: 'percentage', value: 15}
                ]
            }
        );
    });

    const invalidValues = [
        '#fffbf',
        '#fnf',
        '#f ff',
        '#fffffffs',
        'rgb(300, 32, 34)',
        'rgb(300, 32 34)',
        'rgba(10% 0 1% / 7%)',
        'rgba(10% 0% 5% / -.e5%)',
        'rgba(3.5%, 0.3%, 2%, 120%)',
        'hsl(10, 33, 44%)',
        'hsla(10, 33%)',
        'hsla(3.5% 0.3% 2% 120%)'
    ];

    for (const str of invalidValues) {
        it(`should return null for ${str}`, () => {
            expect(parse(str)).to.equal(null);
        });
    }
});
