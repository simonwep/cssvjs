const expectAll = require('../utils/expectAll');

describe('CSS Type: <position>', () => {


    // Test valid values
    expectAll([
        ['bottom', {
            type: 'position',
            value: [
                {type: 'kw', value: 'bottom'}
            ]
        }],

        ['bottom left', {
            type: 'position',
            value: [
                {type: 'kw', value: 'bottom'},
                {type: 'kw', value: 'left'}
            ]
        }],

        ['bottom 10px left 20%', {
            type: 'position',
            value: [
                {type: 'kw', value: 'bottom'},
                {type: 'length', value: 10, unit: 'px'},
                {type: 'kw', value: 'left'},
                {type: 'percentage', value: 20}
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        'top left 10px',
        'left right',
        'bottom top'
    ]);
});
