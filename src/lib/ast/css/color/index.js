const optional = require('../../tools/optional');
const check = require('../../tools/check');
const rgb = require('./rgb');
const hex = require('./hex');
const hsl = require('./hsl');

const colorKeywords = [
    'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua',
    'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate',
    'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki',
    'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey',
    'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro',
    'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
    'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink',
    'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta',
    'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
    'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod',
    'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown',
    'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan',
    'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen'
];

module.exports = stream => {

    // Check for color keyword
    if (check(stream, 'kw', ...colorKeywords, 'transparent')) {
        return {
            type: 'color',
            format: 'named',
            value: stream.next().value
        };
    }

    // Check for format
    const format = optional(stream, 'kw', 'rgb', 'rgba', 'hsl', 'hsla') ||
        optional(stream, 'punc', '#');

    if (format && stream.hasNext()) {
        const fmt = format.value;

        switch (fmt) {
            case '#':
                return hex(stream);
            case 'rgb':
            case 'rgba': {

                if (!optional(stream, 'punc', '(')) {
                    return null;
                }

                const parsed = rgb(stream);
                return (optional(stream, 'punc', ')') && parsed) || null;
            }
            case 'hsl':
            case 'hsla': {

                if (!optional(stream, 'punc', '(')) {
                    return null;
                }

                const parsed = hsl(stream);
                return (optional(stream, 'punc', ')') && parsed) || null;
            }
        }
    }

    return null;
};
