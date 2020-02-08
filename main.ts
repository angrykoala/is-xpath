const VALID_AXIS = ["ancestor", "ancestor-or-self", "attribute", "child", "descendant", "descendant-or-self",
"following", "following-sibling", "namespace", "parent", "preceding", "preceding-sibling", "self"];

export default function isXPath(s: string): boolean {
    // Test for @ and plain nodes
    if (s[0] === '/') return true;
    if (/^.\./.test(s)) return true;
    const axisSplit = s.split("::");
    if (axisSplit.length > 1) {
        const axe = axisSplit[0];
        if (VALID_AXIS.indexOf(axe) !== -1) return true;
    }
    return false;
}

// TO CHECK: Invalid .//header/
