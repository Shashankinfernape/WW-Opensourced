__d("useBaseAnchorElement", [
    "react",
    "react-compiler-runtime",
    "useAnchorVisibilityObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (e || (e = o("react"))).useId;
    const u = {
        anchorName: function(t) {
            return [
                {
                    anchorName: t != null ? "x14xdw8m" : t,
                    $$css: true
                },
                {
                    "--x-anchorName": t ?? void 0
                }
            ];
        }
    };
    function c() {
        const e = o("react-compiler-runtime").c(6);
        const t = `--${s()}`;
        const n = r("useAnchorVisibilityObserver")();
        const a = n[0];
        const i = n[1];
        const l = i ? t : null;
        let c;
        if (e[0] !== l) {
            c = l != null && u.anchorName(l);
            e[0] = l;
            e[1] = c;
        } else {
            c = e[1];
        }
        let d;
        if (e[2] !== l || e[3] !== a || e[4] !== c) {
            d = [
                l,
                c,
                a
            ];
            e[2] = l;
            e[3] = a;
            e[4] = c;
            e[5] = d;
        } else {
            d = e[5];
        }
        return d;
    }
    l.default = c;
}, 98);