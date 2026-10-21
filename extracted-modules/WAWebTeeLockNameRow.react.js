__d("WAWebTeeLockNameRow.react", [
    "WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_children = e.children;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x1n2onr6 x1xnnf8n"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x6s0dn4 x14ug900 x78zum5 x5yr21d xtijo5x x10l6tqk x13vifvy x1utyu60 x11xpdln xx6bhzk x9lcvmn"
            };
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = <div {...babelHelpers.extends({}, i, {
                "data-testid": "tee-lock-name-icon",
                children: s.jsx(r("WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react"), {
                    height: 16,
                    width: 16
                })
            })}/>;
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== e_children) {
            u = <div {...babelHelpers.extends({}, a, {
                "data-testid": "tee-lock-name-row",
                children: [
                    e_children,
                    l
                ]
            })}/>;
            t[3] = e_children;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    l.default = u;
}, 98);