__d("WAWebBizCoexHostedAddVerification", [
    "WALogger",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Set;
    function u(e) {
        if (e != null) {
            s.add(o("WAWebWidFactory").asUserWidOrThrow(e));
        }
    }
    function c(t) {
        if (t != null) {
            const n = s.has(o("WAWebWidFactory").asUserWidOrThrow(t));
            if (n !== true) {
                const a = "not found in coex verification cache";
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "coex verification error ",
                    ""
                ])), t.toLogString()).sendLogs(a);
                throw r("err")(a);
            }
        }
    }
    l.addToCoexHostedVerificationCache = u;
    l.assertThrowsWidAdvTypeFromVerificationCache = c;
}, 98);