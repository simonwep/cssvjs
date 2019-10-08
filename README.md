<h3 align="center">
    <img src="https://user-images.githubusercontent.com/30767528/66331928-e7055100-e933-11e9-962b-58d0c4378b26.png" alt="Logo">
</h3>

<h3 align="center">
    Fast, Refined CSS Value-Parser
</h3>

<br/>
<br/>

<p align="center">
  <img alt="gzip size" src="https://img.badgesize.io/https://raw.githubusercontent.com/Simonwep/cssvjs/master/dist/cssvjs.min.js?compression=gzip&style=flat-square">
  <img alt="brotli size" src="https://img.badgesize.io/https://raw.githubusercontent.com/Simonwep/cssvjs/master/dist/cssvjs.min.js?compression=brotli&style=flat-square">
   <a href="https://travis-ci.org/Simonwep/cssvjs"><img
     alt="Build Status"
     src="https://img.shields.io/travis/Simonwep/cssvjs.svg?style=popout-square"></a>
  <a href="https://www.npmjs.com/package/cssvjs"><img
     alt="Download count"
     src="https://img.shields.io/npm/dm/cssvjs.svg?style=popout-square"></a>
  <a href="https://www.jsdelivr.com/package/npm/cssvjs"><img
     alt="JSDelivr download count"
     src="https://data.jsdelivr.com/v1/package/npm/cssvjs/badge"></a>
  <img alt="No dependencies" src="https://img.shields.io/badge/dependencies-none-d41af0.svg?style=popout-square">
  <img alt="Current version"
       src="https://img.shields.io/github/tag/Simonwep/cssvjs.svg?color=f01ab6&label=version&style=flat-square">
  <a href="https://www.patreon.com/simonwep"><img
     alt="Support me"
     src="https://img.shields.io/badge/patreon-support-f01a6c.svg?style=popout-square"></a>
</p>

## Getting Started
⚠ cssvjs is currently **not stable** and **heavily under development**.
The API might change and all `0.0.x` releases should be treated as test / preview releases.

Install via npm:
```shell
$ npm install cssvjs
```

Install via yarn:
```shell
$ yarn add cssvjs
```

Include directly via jsdelivr:
```html
<script src="https://cdn.jsdelivr.net/npm/graceful-ws/dist/cssvjs.min.js"></script>
```

## Usage
```js 
import {parse} from 'cssjvs';
// const {parse} = require('cssjvs'); // Without es6 import
// const {parse} = CSSvJS; // In a browser env
console.log(parse(`rgba(40 54 22 / 23%)`));
```

which will print the following to the console:
```js
{
  type: 'color',
  format: 'rgba',
  value: [
    {type: 'num', value: 40},
    {type: 'num', value: 54},
    {type: 'num', value: 22},
    {type: 'percentage', value: 23}
  ]
}
```

## Supported values
All values are fully [tested](https://github.com/Simonwep/cssvjs/tree/master/test/css), submit an [issue](https://github.com/Simonwep/cssvjs/issues/new) if you find a bug.
I'll slowly fill add more types. Version `1.0.0` will cover all the basic ones.

* [`<angle>`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/angle.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/angle.test.js)
* [`<color>`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/color/index.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/color.test.js)
* [`<length>`](https://developer.mozilla.org/en-US/docs/Web/CSS/length) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/length.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/length.test.js)
* [`<percentage>`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/percentage.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/percentage.test.js)
* [`<position>`](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/position.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/percentage.test.js)
* [`<ratio>`](https://developer.mozilla.org/en-US/docs/Web/CSS/ratio) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/ratio.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/ratio.test.js)
* [`<side-or-corner>`](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Values) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/sideOrCorner.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/sideOrCorner.test.js)
* [`<string>`](https://developer.mozilla.org/en-US/docs/Web/CSS/string) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/string.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/string.test.js)
* [`<time>`](https://developer.mozilla.org/en-US/docs/Web/CSS/time) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/time.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/time.test.js)
* [`<url>`](https://developer.mozilla.org/en-US/docs/Web/CSS/url) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/url.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/url.test.js)
* [`<flex-value>`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value) [parser](https://github.com/Simonwep/cssvjs/blob/master/src/lib/ast/css/flexValue.js) / [tests](https://github.com/Simonwep/cssvjs/blob/master/test/css/flexValue.test.js)