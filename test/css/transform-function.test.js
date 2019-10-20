const expectAll = require('../utils/expect-all');

describe('CSS Type: <transform-function>', () => {

    // Test valid values
    expectAll([
        ['rotateY(2deg)', {
            type: 'transform-function',
            function: 'rotatey',
            value: {type: 'angle', unit: 'deg', value: 2}
        }],

        ['scaleX(2.56)', {
            type: 'transform-function',
            function: 'scalex',
            value: {
                type: 'number', value: 2.56
            }
        }],

        ['translateY(25.5em)', {
            type: 'transform-function',
            function: 'translatey',
            value: {type: 'length', unit: 'em', value: 25.5}
        }],

        ['translate(2em, 6px)', {
            type: 'transform-function',
            function: 'translate',
            value: [{type: 'length', unit: 'em', value: 2}, {type: 'length', unit: 'px', value: 6}
            ]
        }],

        ['scale(2.5, 3.2)', {
            type: 'transform-function',
            function: 'scale',
            value: [{type: 'number', value: 2.5}, {type: 'number', value: 3.2}
            ]
        }],

        ['skew(2deg, 3deg)', {
            type: 'transform-function',
            function: 'skew',
            value: [{type: 'angle', unit: 'deg', value: 2}, {type: 'angle', unit: 'deg', value: 3}
            ]
        }],

        ['translate3d(2em, 1.5em, 20px)', {
            type: 'transform-function',
            function: 'translate3d',
            value: [{type: 'length', unit: 'em', value: 2}, {type: 'length', unit: 'em', value: 1.5}, {type: 'length', unit: 'px', value: 20}
            ]
        }],

        ['scale3d(2.5, 2.1, 0.57)', {
            type: 'transform-function',
            function: 'scale3d',
            value: [{type: 'number', value: 2.5}, {type: 'number', value: 2.1}, {type: 'number', value: 0.57}
            ]
        }],

        ['rotate3d(2deg, 5.33rad, 10turn)', {
            type: 'transform-function',
            function: 'rotate3d',
            value: [{type: 'angle', unit: 'deg', value: 2}, {type: 'angle', unit: 'rad', value: 5.33}, {type: 'angle', unit: 'turn', value: 10}
            ]
        }],

        ['perspective(10px)', {
            type: 'transform-function',
            function: 'perspective',
            value: {type: 'length', unit: 'px', value: 10}
        }],

        ['matrix(10, 2, 6, 8, 2, 3)', {
            type: 'transform-function',
            function: 'matrix',
            value: [{type: 'number', value: 10}, {type: 'number', value: 2}, {type: 'number', value: 6}, {type: 'number', value: 8}, {type: 'number', value: 2},
                {type: 'number', value: 3}
            ]
        }],

        ['matrix3d(10, 2, 6, 8, 2, 3, 3, 6, 9, 1, 2, 3, 4, 19, 3, 6)', {
            type: 'transform-function',
            function: 'matrix3d',
            value: [
                {type: 'number', value: 10},
                {type: 'number', value: 2},
                {type: 'number', value: 6},
                {type: 'number', value: 8},
                {type: 'number', value: 2},
                {type: 'number', value: 3},
                {type: 'number', value: 3},
                {type: 'number', value: 6},
                {type: 'number', value: 9},
                {type: 'number', value: 1},
                {type: 'number', value: 2},
                {type: 'number', value: 3},
                {type: 'number', value: 4},
                {type: 'number', value: 19},
                {type: 'number', value: 3},
                {type: 'number', value: 6}
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        'perspective(20deg)',
        'matrix3d(10, 20)',
        'matrix3d(10, 20, 3, 3)',
        'rotate(200deg, 20deg)',
        'translate3d(10em, 2em, 10deg)'
    ]);
});
