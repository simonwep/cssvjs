const expectAll = require('../utils/expect-all');

describe('CSS Type: <calc>', () => {

    // Test valid values
    expectAll([
        ['calc(2px)', {
            function: 'calc',
            type: 'calculation',
            value: {
                type: 'sum',
                rightHand: [],
                leftHand: {type: 'length', unit: 'px', value: 2}
            }
        }],

        ['calc(2px + 10em / 4)', {
            function: 'calc',
            type: 'calculation',
            value: {
                type: 'sum',
                leftHand: {type: 'length', unit: 'px', value: 2},
                rightHand: [
                    {
                        operator: '+',
                        value: {
                            type: 'product',
                            leftHand: {
                                type: 'length', unit: 'em', value: 10
                            },
                            rightHand: [
                                {
                                    operator: '/',
                                    value: {type: 'number', value: 4}
                                }
                            ]
                        }
                    }
                ]
            }
        }],

        ['calc(var(--width) * 2 + (5 * 2em) + calc(2em + 10px))', {
            function: 'calc',
            type: 'calculation',
            value: {
                type: 'sum',
                leftHand: {
                    type: 'product',
                    leftHand: {
                        function: 'var',
                        type: 'variable',
                        value: {name: '--width', fallback: null}
                    },
                    rightHand: [
                        {
                            operator: '*',
                            value: {type: 'number', value: 2}
                        }
                    ]
                },
                rightHand: [
                    {
                        operator: '+',
                        value: {
                            type: 'sum',
                            leftHand: {
                                type: 'product',
                                leftHand: {type: 'number', value: 5},
                                rightHand: [
                                    {
                                        operator: '*',
                                        value: {type: 'length', unit: 'em', value: 2}
                                    }
                                ]
                            },
                            rightHand: []
                        }
                    },
                    {
                        operator: '+',
                        value: {
                            type: 'sum',
                            leftHand: {type: 'length', unit: 'em', value: 2},
                            rightHand: [
                                {
                                    operator: '+',
                                    value: {type: 'length', unit: 'px', value: 10}
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
        'calc()',
        'calc(2px + 10em / 0)',
        'calc(3 + 5 * 20px)',
        'calc(2 * 4)'
    ]);
});
