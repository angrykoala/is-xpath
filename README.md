Koalafied Typescript
====================
_by @angrykoala_

Tests if a string is a [xPath](https://en.wikipedia.org/wiki/XPath).


> **Warning:** This package does not provide full guarantee that the xPath is valid. This package is intended for code trying to check if a string is an xPath selector or css selector.

```js
const isXPath=require('is-xpath');

isXPath("/p"); // true
isXPath(".p"); // false
```

## License
This projects is under GPL-3.0 License
