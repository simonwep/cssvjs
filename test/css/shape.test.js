const expectAll = require('../utils/expectAll');

describe('CSS Type: <shape>', () => {

    // Test valid values
    expectAll([
        ['rect(10px, 3em, 20px, 5mm)', {
            function: 'rect',
            type: 'shape',
            value: [
                {type: 'length', unit: 'px', value: 10},
                {type: 'length', unit: 'em', value: 3},
                {type: 'length', unit: 'px', value: 20},
                {type: 'length', unit: 'mm', value: 5}
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        'rect(10px, 3em, 20px, 5%)',
        'rect(10px, 3px, 2px)',
        'rect(10px, 3px, 2px, 10px, 2px)'
    ]);
});
