const expectAll = require('../utils/expectAll');

describe('CSS Type: <frequency>', () => {

    // Test valid values
    expectAll([
        ['20hz', {type: 'frequency', unit: 'hz', value: 20}],
        ['2.2khz', {type: 'frequency', unit: 'khz', value: 2.2}],
        ['-0kHz', {type: 'frequency', unit: 'khz', value: 0}],
        ['14KhZ', {type: 'frequency', unit: 'khz', value: 14}]
    ]);

    // Test invalid values
    expectAll([
        '7 Hz',
        'hz'
    ]);
});
