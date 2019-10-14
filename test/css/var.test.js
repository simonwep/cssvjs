const expectAll = require('../utils/expectAll');

describe('CSS Type: <var>', () => {

    // Test valid values
    expectAll([

        ['var(--vn43_-_sadf-gsd, linear-gradient(to left, red, blue 70% 100%))', {
            function: 'var',
            type: 'variable',
            value: {
                name: '--vn43_-_sadf-gsd',
                fallback: {
                    type: 'linear-gradient',
                    value: {
                        type: 'linear',
                        modifier: {
                            type: 'side',
                            value: ['left']
                        },
                        stops: [
                            {
                                type: 'color-stop',
                                range: null,
                                color: {type: 'color', format: 'named', value: 'red'}
                            },
                            {
                                type: 'color-stop',
                                range: [
                                    {type: 'percentage', value: 70},
                                    {type: 'percentage', value: 100}
                                ],
                                color: {type: 'color', format: 'named', value: 'blue'}
                            }
                        ]
                    }
                }
            }
        }],

        ['var(--a-color, red)', {
            function: 'var',
            type: 'variable',
            value: {
                name: '--a-color',
                fallback: {type: 'color', format: 'named', value: 'red'}
            }
        }],

        ['var(--without-fallback)', {
            function: 'var',
            type: 'variable',
            value: {
                name: '--without-fallback',
                fallback: null
            }
        }]
    ]);

    // Test invalid values
    expectAll([
        'var(--a-co lor, red)',
        'var(--name, re)',
        'var(--name red)',
        'var(--name, red',
        'var(--)',
        'var()'
    ]);
});
