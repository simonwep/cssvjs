const expectAll = require('../utils/expectAll');

describe('CSS Type: <filter-function>', () => {

    // Test valid values
    expectAll([
        ['drop-shadow(16px 16px 10px black)', {
            function: 'drop-shadow',
            type: 'filter-function',
            value: {
                offsetX: {type: 'length', unit: 'px', value: 16},
                offsetY: {type: 'length', unit: 'px', value: 16},
                blurRadius: {type: 'length', unit: 'px', value: 10},
                color: {type: 'color', format: 'named', value: 'black'},
                spreadRadius: null
            }
        }],

        ['blur(17px)', {
            function: 'blur',
            type: 'filter-function',
            value: {type: 'length', unit: 'px', value: 17}
        }],

        ['hue-rotate(1.25turn)', {
            function: 'hue-rotate',
            type: 'filter-function',
            value: {type: 'angle', unit: 'turn', value: 1.25}
        }],

        ['grayscale(1.5)', {
            function: 'grayscale',
            type: 'filter-function',
            value: {type: 'number', value: 1.5}
        }],

        ['opacity(75%)', {
            function: 'opacity',
            type: 'filter-function',
            value: {type: 'percentage', value: 75}
        }]
    ]);

    // Test invalid values
    expectAll([
        'drop-shadow()',
        'drop-shadow(16px 16px 10px, black)',
        'drop-shadow(16px 16px 10px ocint43o2)',
        'blur(10deg)',
        'grayscale(1em)'
    ]);
});
