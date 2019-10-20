const expectAll = require('../utils/expect-all');

describe('CSS Type: <image-set>', () => {

    // Test valid values
    expectAll([
        ['image-set("cat.png" 1x, "cat-2x.png" 2x, "cat-print.png" 600dpi)', {
            function: 'image-set',
            type: 'image-set',
            value: [
                {
                    img: {type: 'string', value: 'cat.png'},
                    res: {type: 'resolution', unit: 'x', value: 1}
                },
                {
                    img: {type: 'string', value: 'cat-2x.png'}, res: {
                        type: 'resolution', unit: 'x', value: 2
                    }
                },
                {
                    img: {type: 'string', value: 'cat-print.png'},
                    res: {type: 'resolution', unit: 'dpi', value: 600}
                }
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        'image-set()',
        'image-set(red blue)',
        'image-set("cat.png" 1x "cat-2x.png" 2x)',
        'image-set("cat.png" 1x, "cat-2x.png" 2px)'
    ]);
});
