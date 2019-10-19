const expectAll = require('../utils/expectAll');

describe('CSS Type: <filter-function>', () => {

    // Test valid values
    expectAll([
        ['minmax(min-content, 10fr)', {
            function: 'minmax',
            type: 'minmax',
            value: [
                {type: 'keyword', value: 'min-content'},
                {type: 'flex', value: 10}
            ]
        }],

        ['minmax(10%, auto)', {
            function: 'minmax',
            type: 'minmax',
            value: [
                {type: 'percentage', value: 10},
                {type: 'keyword', value: 'auto'}
            ]
        }],

        ['minmax(10em, max-content)', {
            function: 'minmax',
            type: 'minmax',
            value: [
                {type: 'length', unit: 'em', value: 10},
                {type: 'keyword', value: 'max-content'}
            ]
        }],

        ['minmax(10em, 56.6%)', {
            function: 'minmax',
            type: 'minmax',
            value: [
                {type: 'length', unit: 'em', value: 10},
                {type: 'percentage', value: 56.6}
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        'minmax(10em, 5deg)',
        'minmax()',
        'minmax(10em, 2px, 5%)'
    ]);
});
