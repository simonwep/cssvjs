const expectAll = require('../utils/expectAll');

describe('CSS Type: <cross-fade>', () => {

    // Test valid values
    expectAll([
        ['cross-fade(33.33% url(red.png), url(yellow.png), url(blue.png) 33.33%)', {
            function: 'cross-fade',
            type: 'cross-fade',
            value: {
                finalImage: null,
                parameters: [
                    {
                        amount: {type: 'percentage', value: 33.33},
                        url: {type: 'url', format: 'plain', value: 'red.png'}
                    },
                    {
                        amount: null,
                        url: {type: 'url', format: 'plain', value: 'yellow.png'}
                    },
                    {
                        amount: {type: 'percentage', value: 33.33},
                        url: {type: 'url', format: 'plain', value: 'blue.png'}
                    }
                ]
            }
        }],

        ['cross-fade(url("/b.png"), url("/a.png"))', {
            function: 'cross-fade',
            type: 'cross-fade',
            value: {
                parameters: [
                    {
                        amount: null,
                        url: {
                            type: 'url',
                            format: 'quotated',
                            value: {
                                type: 'string',
                                value: '/b.png'
                            }
                        }
                    }
                ],
                finalImage: {
                    type: 'url',
                    format: 'quotated',
                    value: {
                        type: 'string',
                        value: '/a.png'
                    }
                }
            }
        }],

        ['cross-fade(33.33% url(red.png), url(yellow.png), #f01f)', {
            function: 'cross-fade',
            type: 'cross-fade',
            value: {
                parameters: [
                    {
                        amount: {type: 'percentage', value: 33.33},
                        url: {type: 'url', format: 'plain', value: 'red.png'}
                    },
                    {
                        amount: null,
                        url: {type: 'url', format: 'plain', value: 'yellow.png'}
                    }
                ],
                finalImage: {
                    type: 'color',
                    format: 'hexa',
                    value: 'f01f'
                }
            }
        }]

    ]);

    // Test invalid values
    expectAll([
        'cross-fade()'
    ]);
});
