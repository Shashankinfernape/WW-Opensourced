__d("WAWebNoticeButterbar.react", [
    "WDSBanner.react",
    "WDSIconIcLock.react",
    "react",
    "react-compiler-runtime",
    "useWAWebButterbarVisibilityReport"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(6);
        const { banner, onVisibilityChange, ref, shouldShow } = e;
        const u = shouldShow ? banner?.text : null;
        const c = u == null || u === "" ? null : u;
        r("useWAWebButterbarVisibilityReport")(c != null, onVisibilityChange);
        if (c == null) {
            return null;
        }
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x1380le5 x14mko6t xefnzgg x1uvdrpn"
            };
            t[0] = d;
        } else {
            d = t[0];
        }
        let m;
        if (t[1] !== c) {
            m = s.jsx(r("WDSBanner.react"), {
                type: "default",
                body: c,
                icon: r("WDSIconIcLock.react")
            });
            t[1] = c;
            t[2] = m;
        } else {
            m = t[2];
        }
        let p;
        if (t[3] !== ref || t[4] !== m) {
            p = <div {...babelHelpers.extends({
                ref
            }, d, {
                children: m
            })}/>;
            t[3] = ref;
            t[4] = m;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    l.default = u;
}, 98);