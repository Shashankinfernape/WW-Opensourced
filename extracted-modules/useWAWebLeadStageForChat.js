__d("useWAWebLeadStageForChat", [
    "WAWebGetLeadStageByChatJidJob",
    "WAWebLeadStage",
    "WAWebLeadSublistChangeNotifier",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d(e, t) {
        const a = o("react-compiler-runtime").c(14);
        const i = useState(0);
        const l = i[0];
        const s = i[1];
        let d;
        let p;
        if (a[0] !== t) {
            d = function() {
                if (t) {
                    return o("WAWebLeadSublistChangeNotifier").subscribeToLeadSublistChanges(function() {
                        return s(m);
                    });
                }
            };
            p = [
                t
            ];
            a[0] = t;
            a[1] = d;
            a[2] = p;
        } else {
            d = a[1];
            p = a[2];
        }
        useEffect(d, p);
        let _;
        if (a[3] !== e) {
            _ = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    return o("WAWebGetLeadStageByChatJidJob").getLeadStageByChatJidJob({
                        chatJid: e
                    });
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            a[3] = e;
            a[4] = _;
        } else {
            _ = a[4];
        }
        let f;
        if (a[5] !== e || a[6] !== t || a[7] !== l) {
            f = [
                e,
                l,
                t
            ];
            a[5] = e;
            a[6] = t;
            a[7] = l;
            a[8] = f;
        } else {
            f = a[8];
        }
        const g = r("useWAWebAsync")(_, f, t);
        const { error, loading, value } = g;
        if (!t || loading || error != null) {
            let b;
            if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
                b = {
                    stage: null,
                    isResolved: false
                };
                a[9] = b;
            } else {
                b = a[9];
            }
            return b;
        }
        let stage;
        if (a[10] !== value) {
            stage = value != null ? o("WAWebLeadStage").getLeadStageFromNumber(value) : null;
            a[10] = value;
            a[11] = stage;
        } else {
            stage = a[11];
        }
        let S;
        if (a[12] !== stage) {
            S = {
                stage,
                isResolved: true
            };
            a[12] = stage;
            a[13] = S;
        } else {
            S = a[13];
        }
        return S;
    }
    function m(e) {
        return e + 1;
    }
    l.default = d;
}, 98);