"use strict";

const VALID_AXIS = ["ancestor", "ancestor-or-self", "attribute", "child", "descendant", "descendant-or-self",
    "following", "following-sibling", "namespace", "parent", "preceding", "preceding-sibling", "self"];


function firstAxisIsValid(s){
    const axisSplit = s.split("::");
    if (axisSplit.length > 1) {
        const axe = axisSplit[0];
        if (VALID_AXIS.indexOf(axe) !== -1) return true;
    }
}



module.exports = function isXPath(s) {
    // Test for @ and plain nodes
    if (s[0] === '/') return true;
    if (/^.\./.test(s)) return true;
    if(firstAxisIsValid(s)) return true;
    return false;
};
