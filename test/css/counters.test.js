const expectAll = require('../utils/expect-all');

describe('CSS Type: <counters>', () => {

    // Test valid values
    expectAll([
        ['counters(countername, \'.\', upper-roman)', {
            function: 'counters',
            type: 'counters',
            value: {
                ident: {
                    type: 'custom-ident',
                    value: 'countername'
                },
                str: {
                    type: 'string',
                    value: '.'
                },
                counterStyle: {
                    type: 'custom-ident',
                    value: 'upper-roman'
                }
            }
        }],

        ['counters(my-counter, "_", upper-roman)', {
            function: 'counters',
            type: 'counters',
            value: {
                ident: {
                    type: 'custom-ident',
                    value: 'my-counter'
                },
                str: {
                    type: 'string',
                    value: '_'
                },
                counterStyle: {
                    type: 'custom-ident',
                    value: 'upper-roman'
                }
            }
        }]
    ]);

    // Test invalid values
    expectAll([]);
});
