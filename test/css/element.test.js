const expectAll = require('../utils/expect-all');

describe('CSS Type: <element>', () => {

    // Test valid values
    expectAll([
        ['element(#_dn98b7-fgfre)', {
            function: 'element',
            type: 'element',
            value: {id: '#_dn98b7-fgfre'}
        }],

        ['element(#_1231)', {
            function: 'element',
            type: 'element',
            value: {id: '#_1231'}
        }],

        ['element(#cbu34)', {
            function: 'element',
            type: 'element',
            value: {id: '#cbu34'}
        }],

        ['element(#_--c323--)', {
            function: 'element',
            type: 'element',
            value: {id: '#_--c323--'}
        }]
    ]);

    // Test invalid values
    expectAll([
        'element()',
        'element(#)',
        'element(#2abc)',
        'element(#-bbb)',
        'element(#abc..)'
    ]);
});
