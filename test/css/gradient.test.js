const {expect} = require('chai');
const {parse} = require('../../src');

describe('CSS Type: <gradient>', () => {

    it('Should parse "linear-gradient(to right, rgba(20, 3, 4, 0.4) 10% 20%, #3f87a6, #fff 3em)', () => {
        expect(parse('linear-gradient(to right, rgba(20, 3, 4, 0.4) 10% 20%, #3f87a6, #fff 3em)')).to.deep.equal({
            type: 'linear-gradient',
            value: {
                type: 'linear',
                modifier: {
                    type: 'side',
                    value: [
                        {
                            type: 'kw',
                            value: 'right'
                        }
                    ]
                },
                stops: [
                    {
                        type: 'color-stop',
                        color: {
                            type: 'color',
                            format: 'rgba',
                            value: [
                                {type: 'number', value: 20},
                                {type: 'number', value: 3},
                                {type: 'number', value: 4},
                                {type: 'number', value: 0.4}
                            ]
                        },
                        range: [
                            {type: 'percentage', value: 10},
                            {type: 'percentage', value: 20}
                        ]
                    },
                    {
                        type: 'color-stop',
                        color: {type: 'color', format: 'hex', value: '3f87a6'},
                        range: null
                    },
                    {
                        type: 'color-stop',
                        color: {type: 'color', format: 'hex', value: 'fff'},
                        range: [{type: 'length', unit: 'em', value: 3}]
                    }
                ]
            }
        });
    });

    it('Should parse "radial-gradient(farthest-corner at 40px 40px, #f35 0%, #43e 100%)"', () => {
        expect(parse('radial-gradient(farthest-corner at 40px 40px, #f35 0%, #43e 100%)')).to.deep.equal({
            type: 'radial-gradient',
            value: {
                type: 'radial',
                modifier: 'farthest-corner',
                position: {
                    type: 'position',
                    value: [
                        {type: 'length', unit: 'px', value: 40},
                        {type: 'length', unit: 'px', value: 40}
                    ]
                },
                stops: [
                    {
                        type: 'color-stop',
                        color: {type: 'color', format: 'hex', value: 'f35'},
                        range: [{type: 'percentage', value: 0}]
                    },
                    {
                        type: 'color-stop',
                        color: {type: 'color', format: 'hex', value: '43e'},
                        range: [{type: 'percentage', value: 100}]
                    }
                ]
            }
        });
    });

    it('Should parse "conic-gradient(from 0.25turn at 50% 30%, #f69d3c, 10deg, #3f87a6 10deg 20deg)"', () => {
        expect(parse('conic-gradient(from 0.25turn at 50% 30%, #f69d3c, 10deg, #3f87a6 10deg 20deg)')).to.deep.equal({
            type: 'conic-gradient',
            value: {
                type: 'conic',
                angle: {
                    type: 'angle',
                    unit: 'turn',
                    value: 0.25
                },
                position: {
                    type: 'position',
                    value: [
                        {type: 'percentage', value: 50},
                        {type: 'percentage', value: 30}
                    ]
                },
                stops: [
                    {
                        type: 'color-stop',
                        color: {type: 'color', format: 'hex', value: 'f69d3c'},
                        range: null
                    },
                    {
                        type: 'color-stop',
                        color: null,
                        range: [
                            {type: 'angle', unit: 'deg', value: 10}
                        ]
                    },
                    {
                        type: 'color-stop',
                        color: {type: 'color', format: 'hex', value: '3f87a6'},
                        range: [
                            {type: 'angle', unit: 'deg', value: 10},
                            {type: 'angle', unit: 'deg', value: 20}
                        ]
                    }
                ]
            }
        });
    });
});
