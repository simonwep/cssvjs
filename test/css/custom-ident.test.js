const expectAll = require('../utils/expect-all');

describe('CSS Type: <custom-ident>', () => {

    // Test valid values
    expectAll([
        ['hello-world', {
            type: 'custom-ident',
            value: 'hello-world'
        }],

        ['nono79', {
            type: 'custom-ident',
            value: 'nono79'
        }],

        ['billi\\.bob', {
            type: 'custom-ident',
            value: 'billi.bob'
        }],

        ['-bob', {
            type: 'custom-ident',
            value: '-bob'
        }]
    ]);

    // Test invalid values
    expectAll([
        '--varr',
        '--23',
        'bob.super'
    ]);
});
