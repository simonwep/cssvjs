const expectAll = require('../utils/expectAll');

describe('CSS Type: <attr>', () => {

    // Test valid values
    expectAll([
        ['attr(data-bg)', {
            function: 'attr',
            type: 'attribute',
            value: {
                attribute: 'data-bg',
                typeOrUnit: null,
                fallback: null
            }
        }],

        ['attr(data-bg color)', {
            function: 'attr',
            type: 'attribute',
            value: {
                attribute: 'data-bg',
                typeOrUnit: 'color',
                fallback: null
            }
        }],

        ['attr(data-bg color, #fff)', {
            function: 'attr',
            type: 'attribute',
            value: {
                attribute: 'data-bg',
                typeOrUnit: 'color',
                fallback: {
                    type: 'color',
                    format: 'hex',
                    value: 'fff'
                }
            }
        }]
    ]);

    // Test invalid values
    expectAll([
        'attr()',
        'attr(###)',
        'attr(data-bg abc)',
        'attr(data-bg px, 1000)',
        'attr(data-bg color, linear-gradient(to left, red, blue))'
    ]);
});
