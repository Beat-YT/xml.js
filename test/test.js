const { readFileSync } = require('fs');
const xmllint = require('../xmllint.js');

const xml = readFileSync('./test/test.xml', 'utf-8');
const schema = readFileSync('./test/test.xsd', 'utf-8');

const invalidXml = readFileSync('./test/invalidTest.xml', 'utf-8');
const invalidSchema = readFileSync('./test/invalidTest.xsd', 'utf-8');


// =======================================================

console.log('Testing validateXML');

var result = xmllint.validateXML({
	schema, xml
});

if (result.errors) {
	throw new Error("test xml didn't match the test schema\n" + result.errors.join('\n'))
}

// =======================================================

console.log('Testing valid xml with invalid schema');

var result = xmllint.validateXML({
	schema: invalidSchema, xml
});

if (!result.errors) {
	throw new Error("test xml did match the test schema")
}

// =======================================================

console.log('Testing invalid xml with valid schema');

var result = xmllint.validateXML({
	schema, xml: invalidXml
});

if (!result.errors) {
	throw new Error("test xml did match the test schema")
}

// =======================================================

console.log('Testing invalid xml with invalid schema');

var result = xmllint.validateXML({
	schema: invalidSchema, xml: invalidXml
});

if (!result.errors) {
	throw new Error("test xml did match the test schema")
}

// =======================================================

console.log('Testing with an empty string');

var result = xmllint.validateXML({
	schema: '',
	xml: ''
});

if (!result.errors) {
	throw new Error("test xml did match the test schema")
}

// =======================================================

console.log('Testing Memory leak');

var tries = 0,
	interval = setInterval(() => {
		var result = xmllint.validateXML({
			schema, xml
		});

		if (result.errors) {
			throw new Error(tries + " test xml didn't match the test schema\n" + result.errors.join('\n'))
		}

		tries++
		if (tries > 20) {
			console.log('TEST PASS');
			clearInterval(interval);
		}
	}, 200);







