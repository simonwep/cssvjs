module.exports = [
    {type: 'gradient', parse: require('./gradient')},
    {type: 'transform-function', parse: require('./transform-function')},
    {type: 'min-max-clamp', parse: require('./min-max-clamp')},
    {type: 'counters', parse: require('./counters')},
    {type: 'symbols', parse: require('./symbols')},
    {type: 'filter-function', parse: require('./filter-function')},
    {type: 'timing-function', parse: require('./timing-function')},
    {type: 'image-set', parse: require('./image-set')},
    {type: 'cross-fade', parse: require('./cross-fade')},
    {type: 'element', parse: require('./element')},
    {type: 'attr', parse: require('./attr')},
    {type: 'env', parse: require('./env')},
    {type: 'calc', parse: require('./calc')},
    {type: 'basic-shape', parse: require('./basic-shape')},
    {type: 'blend-mode', parse: require('./blend-mode')},
    {type: 'flex-value', parse: require('./flex-value')},
    {type: 'string', parse: require('./string')},
    {type: 'shape', parse: require('./shape')},
    {type: 'repeat-style', parse: require('./repeat-style')},
    {type: 'inheritance-keyword', parse: require('./inheritance-keyword')},
    {type: 'var', parse: require('./var')},
    {type: 'url', parse: require('./url')},
    {type: 'color', parse: require('./color')},
    {type: 'percentage', parse: require('./percentage')},
    {type: 'resolution', parse: require('./resolution')},
    {type: 'frequency', parse: require('./frequency')},
    {type: 'minmax', parse: require('./minmax')},
    {type: 'length', parse: require('./length')},
    {type: 'time', parse: require('./time')},
    {type: 'ratio', parse: require('./ratio')},
    {type: 'angle', parse: require('./angle')},
    {type: 'position', parse: require('./position')},
    {type: 'border-radius', parse: require('./border-radius')},
    {type: 'integer', parse: require('./integer')},
    {type: 'number', parse: require('./number')},
    {type: 'custom-ident', parse: require('./custom-ident')}
];
