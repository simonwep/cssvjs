const expectAll = require('../utils/expect-all');

describe('CSS Type: <color>', () => {

    // Test valid values
    expectAll([
        ['#b9f', {
            type: 'color',
            format: 'hex',
            value: 'b9f'
        }],

        ['#b96', {
            type: 'color',
            format: 'hex',
            value: 'b96'
        }],

        ['#b9ff', {
            type: 'color',
            format: 'hexa',
            value: 'b9ff'
        }],

        ['#b9ffac', {
            type: 'color',
            format: 'hex',
            value: 'b9ffac'
        }],

        ['#b9ffaccc', {
            type: 'color',
            format: 'hexa',
            value: 'b9ffaccc'
        }],

        ['rgb(51, 170, 51)', {
            type: 'color',
            format: 'rgb',
            value: [
                {type: 'number', value: 51},
                {type: 'number', value: 170},
                {type: 'number', value: 51}
            ]
        }],

        ['rgba(4.2, 20.3, .5, .2)', {
            type: 'color',
            format: 'rgba',
            value: [
                {type: 'number', value: 4.2},
                {type: 'number', value: 20.3},
                {type: 'number', value: 0.5},
                {type: 'number', value: 0.2}
            ]
        }],

        ['rgb(4%, 20%, 2%)', {
            type: 'color',
            format: 'rgb',
            value: [
                {type: 'percentage', value: 4},
                {type: 'percentage', value: 20},
                {type: 'percentage', value: 2}
            ]
        }],

        ['rgba(4%, 5%, 2%, 23%)', {
            type: 'color',
            format: 'rgba',
            value: [
                {type: 'percentage', value: 4},
                {type: 'percentage', value: 5},
                {type: 'percentage', value: 2},
                {type: 'percentage', value: 23}
            ]
        }],

        ['rgb(4%, 5%, 2%)', {
            type: 'color',
            format: 'rgb',
            value: [
                {type: 'percentage', value: 4},
                {type: 'percentage', value: 5},
                {type: 'percentage', value: 2}
            ]
        }],

        ['rgba(40 54 22 / 23%)', {
            type: 'color',
            format: 'rgba',
            value: [
                {type: 'number', value: 40},
                {type: 'number', value: 54},
                {type: 'number', value: 22},
                {type: 'percentage', value: 23}
            ]
        }],

        ['rgba(4% 5% 2% / 5%)', {
            type: 'color',
            format: 'rgba',
            value: [
                {type: 'percentage', value: 4},
                {type: 'percentage', value: 5},
                {type: 'percentage', value: 2},
                {type: 'percentage', value: 5}
            ]
        }],

        ['rgb(1e2, .5e1, .5e0, +.25e2%)', {
            type: 'color',
            format: 'rgba',
            value: [
                {type: 'number', value: 100},
                {type: 'number', value: 5},
                {type: 'number', value: 0.5},
                {type: 'percentage', value: 25}
            ]
        }],

        ['hsl(270, 60%, 70%)', {
            format: 'hsl',
            type: 'color',
            value: [
                {type: 'number', value: 270},
                {type: 'percentage', value: 60},
                {type: 'percentage', value: 70}
            ]
        }],

        ['hsla(4.71239rad, 60%, 70%, 0.3)', {
            format: 'hsla',
            type: 'color',
            value: [
                {type: 'angle', unit: 'rad', value: 4.71239},
                {type: 'percentage', value: 60},
                {type: 'percentage', value: 70},
                {type: 'number', value: 0.3}
            ]
        }],

        ['hsl(4.71239rad 60% 50% / 15%)', {
            type: 'color',
            format: 'hsla',
            value: [
                {type: 'angle', unit: 'rad', value: 4.71239},
                {type: 'percentage', value: 60},
                {type: 'percentage', value: 50},
                {type: 'percentage', value: 15}]
        }],

        ['hsla(270 60% 50% / 15%)', {
            format: 'hsla',
            type: 'color',
            value: [
                {type: 'number', value: 270},
                {type: 'percentage', value: 60},
                {type: 'percentage', value: 50},
                {type: 'percentage', value: 15}
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        '#fffbf',
        '#fnf',
        '#f ff',
        '#fffffffs',
        'rgb(300, 32, 34)',
        'rgb(300, 32 34)',
        'rgba(10% 0 1% / 7%)',
        'rgba(10% 0% 5% / -.e5%)',
        'rgba(3.5%, 0.3%, 2%, 120%)',
        'hsl(10, 33, 44%)',
        'hsla(10, 33%)',
        'hsla(3.5% 0.3% 2% 120%)'
    ]);
});
