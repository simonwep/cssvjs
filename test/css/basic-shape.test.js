const {parse} = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <basic-shape>', () => {

    it('Should parse "inset(22% 12% 15em 35mm)"', () => {
        expect(parse('inset(22% 12% 15em 35mm)')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'inset',
                top: {type: 'percentage', value: 22},
                right: {type: 'percentage', value: 12},
                bottom: {type: 'length', unit: 'em', value: 15},
                left: {type: 'length', unit: 'mm', value: 35},
                radius: null
            }
        });
    });

    it('Should parse "inset(5% 2% 1em 7mm round 4em / 2em 9px 2px)"', () => {
        expect(parse('inset(5% 2% 1em 7mm round 4em / 2em 9px 2px)')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'inset',
                top: {type: 'percentage', value: 5},
                right: {type: 'percentage', value: 2},
                bottom: {type: 'length', unit: 'em', value: 1},
                left: {type: 'length', unit: 'mm', value: 7},
                radius: {
                    type: 'border-radius',
                    topLeftRadius: [
                        {type: 'length', unit: 'em', value: 4},
                        {type: 'length', unit: 'em', value: 2}
                    ],
                    topRightRadius: [
                        {type: 'length', unit: 'em', value: 4},
                        {type: 'length', unit: 'px', value: 9}
                    ],
                    bottomLeftRadius: [
                        {type: 'length', unit: 'em', value: 4},
                        {type: 'length', unit: 'px', value: 2}
                    ],
                    bottomRightRadius: [
                        {type: 'length', unit: 'em', value: 4},
                        {type: 'length', unit: 'px', value: 9}
                    ]
                }
            }
        });
    });

    it('should parse "circle(6rem)"', () => {
        expect(parse('circle(6rem)')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'circle',
                radius: {type: 'length', unit: 'rem', value: 6},
                position: null
            }
        });
    });

    it('should parse "circle(6rem at 12rem 8rem)"', () => {
        expect(parse('circle(6rem at 12rem 8rem)')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'circle',
                radius: {type: 'length', unit: 'rem', value: 6},
                position: {
                    type: 'position',
                    value: [
                        {type: 'length', unit: 'rem', value: 12},
                        {type: 'length', unit: 'rem', value: 8}
                    ]
                }
            }
        });
    });

    it('Should parse "ellipse(2em 5vmin)"', () => {
        expect(parse('ellipse(2em 5vmin)')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'ellipse',
                position: null,
                radius: [
                    {type: 'length', unit: 'em', value: 2},
                    {type: 'length', unit: 'vmin', value: 5}
                ]
            }
        });
    });

    it('Should parse "ellipse(115px 55px at 50% 40%)"', () => {
        expect(parse('ellipse(115px 55px at 50% 40%)')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'ellipse',
                radius: [
                    {type: 'length', unit: 'px', value: 115},
                    {type: 'length', unit: 'px', value: 55}
                ],
                position: {
                    type: 'position',
                    value: [
                        {type: 'percentage', value: 50},
                        {type: 'percentage', value: 40}
                    ]
                }
            }
        });
    });

    it('Should parse "polygon(2em 5em, 1em 3em)"', () => {
        expect(parse('polygon(2em 5em, 1em 3em)')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'polygon',
                fillRule: null,
                points: [
                    [
                        {type: 'length', unit: 'em', value: 2},
                        {type: 'length', unit: 'em', value: 5}
                    ],
                    [
                        {type: 'length', unit: 'em', value: 1},
                        {type: 'length', unit: 'em', value: 3}
                    ]
                ]
            }
        });
    });

    it('Should parse "polygon(evenodd, 2px 3px, 3px 2px)"', () => {
        expect(parse('polygon(evenodd, 2px 3px, 3px 2px)')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'polygon',
                fillRule: 'evenodd',
                points: [
                    [
                        {type: 'length', unit: 'px', value: 2},
                        {type: 'length', unit: 'px', value: 3}
                    ],
                    [
                        {type: 'length', unit: 'px', value: 3},
                        {type: 'length', unit: 'px', value: 2}
                    ]
                ]
            }
        });
    });

    it('Should parse "path("M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812")"', () => {
        expect(parse('path("M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812")')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'path',
                fillRule: null,
                path: 'M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812'
            }
        });
    });

    it('Should parse "path(evenodd, "M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812")"', () => {
        expect(parse('path(evenodd, "M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812")')).to.deep.equal({
            type: 'basic-shape',
            value: {
                type: 'path',
                fillRule: 'evenodd',
                path: 'M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812'
            }
        });
    });
});
