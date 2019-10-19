const expectAll = require('../utils/expectAll');

describe('CSS Type: <symbols>', () => {

    // Test valid values
    expectAll([
        ['symbols(cyclic "*" "†" "‡")', {
            function: 'symbols',
            type: 'symbols',
            value: {
                symbolType: 'cyclic',
                symbols: [
                    {type: 'string', value: '*'},
                    {type: 'string', value: '†'},
                    {type: 'string', value: '‡'}
                ]
            }
        }],

        ['symbols(url(/my-image.png) linear-gradient(to right, red, blue) "-")', {
            function: 'symbols',
            type: 'symbols',
            value: {
                symbolType: null,
                symbols: [
                    {
                        type: 'url',
                        format: 'plain',
                        value: '/my-image.png'
                    },
                    {
                        type: 'linear-gradient',
                        value: {
                            type: 'linear',
                            modifier: {
                                type: 'side',
                                value: ['right']
                            },
                            stops: [
                                {
                                    type: 'color-stop',
                                    color: {type: 'color', format: 'named', value: 'red'},
                                    range: null
                                },
                                {
                                    type: 'color-stop',
                                    color: {
                                        type: 'color', format: 'named', value: 'blue'
                                    },
                                    range: null
                                }
                            ]
                        }
                    },
                    {type: 'string', value: '-'}
                ]
            }
        }]
    ]);

    // Test invalid values
    expectAll([
        'symbols(url(), url)',
        'symbols()'
    ]);
});
