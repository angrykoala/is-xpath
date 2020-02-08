import { assert } from 'chai';
import isXPath from '../main';

describe("Is XPath", () => {
    it("Valid xPath", () => {
        assert.isTrue(isXPath("/p"));
    });
});
