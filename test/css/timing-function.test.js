const expectAll = require('../utils/expect-all');
const {parse} = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <timing-function>', () => {

    // Test keywords
    const keyWords = ['linear', 'ease', 'ease-in', 'ease-in-out', 'ease-out'];
    for (const keyWord of keyWords) {
        it(`Should parse "${keyWord}"`, () => {
            expect(parse(keyWord)).to.deep.equal({
                type: 'timing-function',
                value: keyWord
            });
        });
    }

    // Test steps
    const directions = ['jump-start', 'jump-end', 'jump-both', 'jump-none', 'start', 'end'];
    for (const direction of directions) {
        const steps = Math.ceil(Math.random() * 10);
        const str = `steps(${steps}, ${direction})`;

        it(`Should parse "${str}"`, () => {
            expect(parse(str)).to.deep.equal({
                function: 'steps',
                type: 'timing-function',
                value: {
                    direction,
                    steps
                }
            });
        });
    }

    // Test valid values
    expectAll([
        ['cubic-bezier(0.1, 0.7, 1.0, 0.1)', {
            function: 'cubic-bezier',
            type: 'timing-function',
            value: [
                {type: 'number', value: 0.1},
                {type: 'number', value: 0.7},
                {type: 'number', value: 1},
                {type: 'number', value: 0.1}
            ]
        }]
    ]);

    // Test invalid values
    expectAll([
        'cubic-bezier(0.1, red, 1.0, green)',
        'cubic-bezier(-1.9, 0.3, -0.2, 2.1)',
        'cubic-bezier(2.45, 0.6, 4, 0.1)',
        'cubic-bezier(0.3, 2.1)',
        'steps(2.0, jump-end)',
        'steps(0, jump-none)',
        'steps(-3, start)'
    ]);
});
