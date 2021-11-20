# xml.js
This package is a fork of [kripken/xml.js](https://github.com/kripken/xml.js) that is compatible with NodeJS

-----------------------------------------------------------------------------------

This package exports the `xmllint` object which is an Emscripten port of
libxml2's `xmllint` command for use in the browser or node.


## Installation:

```
npm install Beat-YT/xml.js
```

## API

```javascript
const xmllint = require('xmllint');

var result = xmllint.validateXML({
    schema: "string",
    xml: "string"
})

```

The return value Object has one property `errors` which is either null,
in the case of no errors, or an Array of error strings....eg:

```javascript

if (!result.errors) {
	//there were no errors.
}

```

Usable with Browserify via `browserify-shim`.

## Building xmllint from source

Install emscripten.

```
	git clone
	git submodule init
	git submodule update
	./script/clean
	./script/libxml2
	./script/compile
	./script/test
```

There are also equivalent `gulp` tasks.
