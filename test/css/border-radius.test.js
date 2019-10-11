const expectAll = require('../utils/expectAll');

describe('CSS Type: <border-radius>', () => {

    // Test valid values
    expectAll([
        ['1px 2px 4px / 2em 3em', {
            type: 'border-radius',
            topLeftRadius: [
                {type: 'length', unit: 'px', value: 1},
                {type: 'length', unit: 'em', value: 2}
            ],
            topRightRadius: [
                {type: 'length', unit: 'px', value: 2},
                {type: 'length', unit: 'em', value: 3}
            ],
            bottomLeftRadius: [
                {type: 'length', unit: 'px', value: 4},
                {type: 'length', unit: 'em', value: 2}
            ],
            bottomRightRadius: [
                {type: 'length', unit: 'px', value: 2},
                {type: 'length', unit: 'em', value: 3}
            ]
        }]
        ,

        ['1mm 2cm 4px 9.4% / 3.4em', {
            type: 'border-radius',
            topLeftRadius: [
                {type: 'length', unit: 'mm', value: 1},
                {type: 'length', unit: 'em', value: 3.4}
            ],
            topRightRadius: [
                {type: 'length', unit: 'cm', value: 2},
                {type: 'length', unit: 'em', value: 3.4}
            ],
            bottomLeftRadius: [
                {type: 'length', unit: 'px', value: 4},
                {type: 'length', unit: 'em', value: 3.4}
            ],
            bottomRightRadius: [
                {type: 'percentage', value: 9.4},
                {type: 'length', unit: 'em', value: 3.4}
            ]
        }],

        ['2cm 3mm 4em', {
            type: 'border-radius',
            topLeftRadius: [
                {type: 'length', unit: 'cm', value: 2},
                {type: 'length', unit: 'cm', value: 2}
            ],
            topRightRadius: [
                {type: 'length', unit: 'mm', value: 3},
                {type: 'length', unit: 'mm', value: 3}
            ],
            bottomLeftRadius: [
                {type: 'length', unit: 'em', value: 4},
                {type: 'length', unit: 'em', value: 4}
            ],
            bottomRightRadius: [
                {type: 'length', unit: 'mm', value: 3},
                {type: 'length', unit: 'mm', value: 3}
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        '2cm 2mm 0.5em 0.5em 0.2em',
        '2cm 3mm 4em / 2em 2em 2em 2em 2em'
    ]);

});
