const expectAll = require('../utils/expect-all');

describe('CSS Type: <env>', () => {

    // Test valid values
    expectAll([
        ['env(variable, 50px 10%)', {
            function: 'env',
            type: 'environment-variable',
            value: {
                name: 'variable',
                values: [
                    {type: 'length', unit: 'px', value: 50},
                    {type: 'percentage', value: 10}
                ]
            }
        }],

        ['env(safe-gg, #fff)', {
            function: 'env',
            type: 'environment-variable',
            value: {
                name: 'safe-gg',
                values: [
                    {type: 'color', format: 'hex', value: 'fff'}
                ]
            }
        }],

        ['env(safe-area, bottom right)', {
            function: 'env',
            type: 'environment-variable',
            value: {
                name: 'safe-area',
                values: [
                    {
                        type: 'position',
                        value: [
                            {type: 'kw', value: 'bottom'},
                            {type: 'kw', value: 'right'}
                        ]
                    }
                ]
            }
        }],

        ['env(another-modifier_, linear-gradient(to right, red, blue))', {
            function: 'env',
            type: 'environment-variable',
            value: {
                name: 'another-modifier_',
                values: [
                    {
                        type: 'gradient',
                        variant: 'linear',
                        repeating: false,
                        value: {
                            type: 'linear',
                            modifier: {
                                type: 'side',
                                value: ['right']
                            },
                            stops: [
                                {
                                    type: 'color-stop',
                                    range: null,
                                    color: {type: 'color', format: 'named', value: 'red'}
                                },
                                {
                                    type: 'color-stop',
                                    range: null,
                                    color: {type: 'color', format: 'named', value: 'blue'}
                                }
                            ]
                        }
                    }
                ]
            }
        }]
    ]);

    // Test invalid values
    expectAll([
        'drop-shadow()',
        'drop-shadow(16px 16px 10px, black)',
        'drop-shadow(16px 16px 10px ocint43o2)',
        'blur(10deg)',
        'grayscale(1em)'
    ]);
});
