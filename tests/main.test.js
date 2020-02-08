"use strict";

const {assert} = require('chai');
const isXPath = require('..');

describe("Is XPath", () => {
    it("Valid xPath", () => {
        assert.isTrue(isXPath("/p"));
    });
    it("Not xPath", () => {
        assert.isFalse(isXPath(".p"));
    });
});
