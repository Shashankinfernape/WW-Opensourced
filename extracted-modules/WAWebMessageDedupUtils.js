__d("WAWebMessageDedupUtils", [
    "WALogger",
    "WAWebPendingMessageKey"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new Map;
    function c(t, n, r) {
        const i = o("WAWebPendingMessageKey").createPendingMessageKey(t, n, r);
        const l = (u.get(i) ?? 0) + 1;
        u.set(i, l);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[message-dedup] add message: ",
            ", total: ",
            ""
        ])), i, l);
        return l;
    }
    function d(e) {
        if (e === 0) {
            if (u.size > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-dedup] message cache cleared, total: ",
                    ""
                ])), u.size);
            }
            u.clear();
        }
    }
    l.addPendingMessage = c;
    l.maybeClearPendingMessages = d;
}, 98);