const expectAll = require('../utils/expect-all');

describe('CSS Type: <basic-shape>', () => {

    // Test valid values
    expectAll([
        ['inset(22% 12% 15em 35mm)', {
            type: 'basic-shape',
            value: {
                type: 'inset',
                top: {type: 'percentage', value: 22},
                right: {type: 'percentage', value: 12},
                bottom: {type: 'length', unit: 'em', value: 15},
                left: {type: 'length', unit: 'mm', value: 35},
                radius: null
            }
        }],

        ['inset(5% 2% 0 7mm round 4em / 2em 9px 2px)', {
            type: 'basic-shape',
            value: {
                type: 'inset',
                top: {type: 'percentage', value: 5},
                right: {type: 'percentage', value: 2},
                bottom: {type: 'length', unit: null, value: 0},
                left: {type: 'length', unit: 'mm', value: 7},
                radius: {
                    type: 'border-radius',
                    topLeftRadius: [
                        {type: 'length', unit: 'em', value: 4},
                        {type: 'length', unit: 'em', value: 2}
                    ],
                    topRightRadius: [
                        {type: 'length', unit: 'em', value: 4},
                        {type: 'length', unit: 'px', value: 9}
                    ],
                    bottomLeftRadius: [
                        {type: 'length', unit: 'em', value: 4},
                        {type: 'length', unit: 'px', value: 2}
                    ],
                    bottomRightRadius: [
                        {type: 'length', unit: 'em', value: 4},
                        {type: 'length', unit: 'px', value: 9}
                    ]
                }
            }
        }],

        ['circle(6rem)', {
            type: 'basic-shape',
            value: {
                type: 'circle',
                radius: {type: 'length', unit: 'rem', value: 6},
                position: null
            }
        }],

        ['circle(6rem at 12rem 8rem)', {
            type: 'basic-shape',
            value: {
                type: 'circle',
                radius: {type: 'length', unit: 'rem', value: 6},
                position: {
                    type: 'position',
                    value: [
                        {type: 'length', unit: 'rem', value: 12},
                        {type: 'length', unit: 'rem', value: 8}
                    ]
                }
            }
        }],

        ['ellipse(2em 5vmin)', {
            type: 'basic-shape',
            value: {
                type: 'ellipse',
                position: null,
                radius: [
                    {type: 'length', unit: 'em', value: 2},
                    {type: 'length', unit: 'vmin', value: 5}
                ]
            }
        }],

        ['ellipse(115px 55px at 50% 40%)', {
            type: 'basic-shape',
            value: {
                type: 'ellipse',
                radius: [
                    {type: 'length', unit: 'px', value: 115},
                    {type: 'length', unit: 'px', value: 55}
                ],
                position: {
                    type: 'position',
                    value: [
                        {type: 'percentage', value: 50},
                        {type: 'percentage', value: 40}
                    ]
                }
            }
        }],

        ['polygon(2em 5em, 1em 3em)', {
            type: 'basic-shape',
            value: {
                type: 'polygon',
                fillRule: null,
                points: [
                    [
                        {type: 'length', unit: 'em', value: 2},
                        {type: 'length', unit: 'em', value: 5}
                    ],
                    [
                        {type: 'length', unit: 'em', value: 1},
                        {type: 'length', unit: 'em', value: 3}
                    ]
                ]
            }
        }],

        ['polygon(evenodd, 2px 3px, 3px 2px)', {
            type: 'basic-shape',
            value: {
                type: 'polygon',
                fillRule: 'evenodd',
                points: [
                    [
                        {type: 'length', unit: 'px', value: 2},
                        {type: 'length', unit: 'px', value: 3}
                    ],
                    [
                        {type: 'length', unit: 'px', value: 3},
                        {type: 'length', unit: 'px', value: 2}
                    ]
                ]
            }
        }],

        ['path("M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812")', {
            type: 'basic-shape',
            value: {
                type: 'path',
                fillRule: null,
                path: 'M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812'
            }
        }],

        ['path(evenodd, "M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812")', {
            type: 'basic-shape',
            value: {
                type: 'path',
                fillRule: 'evenodd',
                path: 'M 55.003, 23.405 v14.488 L 65.260, 27.640 c0.000, -1.812'
            }
        }]
    ]);

    // Test invalid values
    expectAll([
        'path(10)',
        'polygon(2px, 5px)',
        'ellipse(115px 55px at 10deg 40%)',
        'ellipse(3 3)'
    ]);
});
