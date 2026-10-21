__d("WAWebBizCtwaContextSourceButton.react", [
    "WAWebBizCtwaContextPreviewIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            position: "x10l6tqk",
            bottom: "xqo3gd",
            insetInlineEnd: "x11dcrhx",
            left: null,
            right: null,
            $$css: true
        }
    };
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(6);
        const { hostname, onClick } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x10l6tqk x1vjfegm x1dmp6jm x1peatla x1ey2m1c xtijo5x x1tmnsyt x1ypdohk"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== hostname) {
            l = s.jsx(r("WAWebBizCtwaContextPreviewIcon.react"), {
                hostname,
                xstyle: u.icon
            });
            t[1] = hostname;
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        if (t[3] !== onClick || t[4] !== l) {
            c = <div {...babelHelpers.extends({}, i, {
                onClick,
                children: l
            })}/>;
            t[3] = onClick;
            t[4] = l;
            t[5] = c;
        } else {
            c = t[5];
        }
        return c;
    }
    l.default = CComponent;
}, 98);