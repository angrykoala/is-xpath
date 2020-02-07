export function isXPathQuery(s: string): boolean {
    if (s[0] === '/') return true;
    if (/^.\./.test(s)) return true;
    const axisSplit = s.split("::");
    if (axisSplit.length > 1) {
        const validAxis = ["ancestor", "ancestor-or-self", "attribute", "child", "descendant", "descendant-or-self",
            "following", "following-sibling", "namespace", "parent", "preceding", "preceding-sibling", "self"];
        const axe = axisSplit[0];
        if (validAxis.indexOf(axe) !== -1) return true;
    }
    return false;
}
