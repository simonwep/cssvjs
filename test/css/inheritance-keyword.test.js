const expectAll = require('../utils/expect-all');

describe('CSS Type: <inheritance-keyword>', () => {

    // Test valid values
    expectAll([
        ['inherit', {
            type: 'inheritance-keyword',
            value: 'inherit'
        }],

        ['initial', {
            type: 'inheritance-keyword',
            value: 'initial'
        }],

        ['unset', {
            type: 'inheritance-keyword',
            value: 'unset'
        }],

        ['revert', {
            type: 'inheritance-keyword',
            value: 'revert'
        }]
    ]);
});
