const expectAll = require('../utils/expectAll');

describe('CSS Type: <min> / <max> / <clamp>', () => {

    // Test valid values
    expectAll([
        ['min(10vw, 4em, 80px)', {
            function: 'min',
            type: 'min-max-clamp',
            value: [
                {type: 'length', unit: 'vw', value: 10},
                {type: 'length', unit: 'em', value: 4},
                {type: 'length', unit: 'px', value: 80}
            ]
        }],

        ['max(50vw, 300px)', {
            function: 'max',
            type: 'min-max-clamp',
            value: [
                {type: 'length', unit: 'vw', value: 50},
                {type: 'length', unit: 'px', value: 300}
            ]
        }],

        ['clamp(10px, 5em, 56px)', {
            function: 'clamp',
            type: 'min-max-clamp',
            value: [
                {type: 'length', unit: 'px', value: 10},
                {type: 'length', unit: 'em', value: 5},
                {type: 'length', unit: 'px', value: 56}
            ]
        }],

        ['min(10px, max(6em, 10vw))', {
            function: 'min',
            type: 'min-max-clamp',
            value: [
                {type: 'length', unit: 'px', value: 10},
                {
                    function: 'max',
                    type: 'min-max-clamp',
                    value: [
                        {type: 'length', unit: 'em', value: 6},
                        {type: 'length', unit: 'vw', value: 10}
                    ]
                }
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        'clamp(10px, 5em)',
        'clamp(20px, 10px, 10vw, 20vw)',
        'max()',
        'min(',
        'min(#fff)'
    ]);
});
