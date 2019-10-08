const {parse} = require('../../src');
const {expect} = require('chai');

describe('CSS Type: <blend-mode>', () => {
    const blendModes = [
        'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
        'exclusion', 'hue', 'saturation', 'color', 'luminosity'
    ];

    for (const mode of blendModes) {

        it(`Should parse ${mode}`, () => {
            expect(parse(mode)).to.deep.equal({
                type: 'blend-mode',
                value: mode
            });
        });
    }
});
