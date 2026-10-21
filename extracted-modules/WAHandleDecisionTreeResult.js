__d("WAHandleDecisionTreeResult", [
    "WAErrorMessage",
    "WATagsLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(t, n) {
        const r = o("WATagsLogger").TAGS([
            "decision tree"
        ]);
        return n.then((n)=>{
            if (n.success) {
                return n.value;
            }
            if (n.error.type === "unknown-stanza") {
                r.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "unrecognized stanza: ",
                    ""
                ])), t);
                return "NO_ACK";
            }
            n.error.type;
            r.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] runtime-error ",
                ""
            ])), t.tag, n.error.error);
            return "NO_ACK";
        }).catch((e)=>{
            r.ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] unexpected-runtime-error: ",
                ""
            ])), t.tag, o("WAErrorMessage").maybeGetMessageFromError(e));
            return "NO_ACK";
        });
    }
    l.handleDecisionTreeResult = c;
}, 98);