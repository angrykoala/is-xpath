"use strict";

const {assert} = require('chai');
const isXPath = require('..');

const validPaths = require('./config/valid_paths.json');
const invalidPaths = require('./config/invalid_paths.json');

describe("Valid XPaths", () => {
    for (const path of validPaths) {
        it(`${path} is XPath`, () => {
            assert.isTrue(isXPath(path), `Expected ${path} to be valid.`);
        });
    }
});
describe("InValid XPaths", () => {
    for (const path of invalidPaths) {
        it(`${path} is not XPath`, () => {
            assert.isFalse(isXPath(path), `Expected ${path} to not be valid.`);
        });
    }
});
