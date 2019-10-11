const expectAll = require('../utils/expectAll');

describe('CSS Type: <time>', () => {

    // Test valid values
    expectAll([
        ['60s', {
            type: 'time',
            unit: 's',
            value: 60
        }],

        ['-60s', {
            type: 'time',
            unit: 's',
            value: -60
        }],

        ['150.25ms', {
            type: 'time',
            unit: 'ms',
            value: 150.25
        }],

        ['0ms', {
            type: 'time',
            unit: 'ms',
            value: 0
        }],

        ['0s', {
            type: 'time',
            unit: 's',
            value: 0
        }]
    ]);

    // Test invalid values
    expectAll([
        '2312ss',
        '293.32.2ms'
    ]);
});
