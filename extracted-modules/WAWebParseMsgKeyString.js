__d("WAWebParseMsgKeyString", [
    "WALogger",
    "WATypeUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        if (t == null || t === "" || !o("WATypeUtils").isString(t)) {
            throw r("err")("MsgKey fromString error: str is null or not a string");
        }
        const n = t.split("_");
        let a = void 0;
        if (n.length < 3) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "MsgKey error: cannot create MsgKey from ",
                ""
            ])), t);
        } else if (n.length === 4) {
            if (n[3] !== "out" && n[3] !== "in") {
                a = n[3];
            }
        } else if (n.length === 5) {
            a = n[4];
        }
        return {
            fromMe: n[0] === "true",
            remote: n[1],
            id: n[2],
            participant: a
        };
    }
    l.default = s;
}, 98);