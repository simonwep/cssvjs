const expectAll = require('../utils/expect-all');
const {parse} = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <repeat-style>', () => {

    // Test valid values
    expectAll([
        ['repeat-x', {
            type: 'repeat-style',
            raw: 'repeat-x',
            value: {x: 'repeat', y: 'no-repeat'}
        }],

        ['repeat-y', {
            type: 'repeat-style',
            raw: 'repeat-y',
            value: {x: 'no-repeat', y: 'repeat'}
        }]
    ]);


    const randomRepeat = () => ['repeat', 'space', 'round', 'no-repeat'][Math.floor(Math.random() * 4)];
    for (let i = 0; i < 10; i++) {
        const left = randomRepeat();
        const right = Math.random() > 0.5 ? randomRepeat() : '';
        const str = `${left} ${right}`;

        expect(parse(str)).to.deep.equal({
            type: 'repeat-style',
            raw: str.trim(),
            value: {
                x: left,
                y: right || left
            }
        });
    }

    // Test invalid values
    expectAll([
        'round round round',
        'repeat-x repeat-y',
        'circle repeat-x',
        'repeat-y round'
    ]);
});
