const expectAll = require('../utils/expectAll');

describe('CSS Type: <gradient>', () => {

    // Test valid values
    expectAll([
        ['repeating-linear-gradient(to right, rgba(20, 3, 4, 0.4) 10% 20%, #3f87a6, #fff 3em)', {
            type: 'gradient',
            repeating: true,
            variant: 'linear',
            value: {
                type: 'linear',
                modifier: {
                    type: 'side',
                    value: ['right']
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
        }],

        ['radial-gradient(farthest-corner at 40px 40px, #f35 0%, #43e 100%)', {
            type: 'gradient',
            repeating: false,
            variant: 'radial',
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
        }],

        ['conic-gradient(from 0.25turn at 50% 30%, #f69d3c, 10deg, #ebf8e1 10deg 20deg)', {
            type: 'gradient',
            repeating: false,
            variant: 'conic',
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
                        color: {type: 'color', format: 'hex', value: 'ebf8e1'},
                        range: [
                            {type: 'angle', unit: 'deg', value: 10},
                            {type: 'angle', unit: 'deg', value: 20}
                        ]
                    }
                ]
            }
        }]
    ]);

    // Test invalid values
    expectAll([
        'conic-gradient(from 0.25turn at 30deg 30%, #f69d3c, 10deg, #ebf8e1 10deg 20deg)',
        'linear-gradient(to right)',
        'linear-gradient(to right, rgba(20, 3, 4, 0.4) 10% 20% 20%)',
        'radial-gradient(farthest-corner at 40px 40px, #f35)'
    ]);
});
