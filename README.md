is-xpath
====================
_by @angrykoala_

Tests if a string is a [xPath](https://en.wikipedia.org/wiki/XPath). This is **not** a full xPath validation, but a simple way of figuring out if a given string is an xPath or css selector.

* Works on Node.js and Browser.
* No DOM.
* No Dependencies.


> **Warning:** This package does not provide full guarantee that the xPath is valid. This package is intended for code trying to check if a string is an xPath selector or css selector.

```js
const isXPath=require('is-xpath');

isXPath("/p"); // true
isXPath(".p"); // false
```

## License
This projects is under GPL-3.0 License
