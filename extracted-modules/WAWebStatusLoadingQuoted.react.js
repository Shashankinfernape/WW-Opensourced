__d("WAWebStatusLoadingQuoted.react", [
    "WAWebLazyLoadLoading.react",
    "WAWebModalManager",
    "WDSIconIcArrowBack.react",
    "WDSIconIcClose.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(9);
        const { error, retry, text } = e;
        const l = c;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "x10l6tqk x13vifvy x1o0tod xjhb59c xh8yej3 x5yr21d x1280gxy"
            };
            t[0] = u;
        } else {
            u = t[0];
        }
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x10l6tqk xoyzfg9 x1i4sgur xhtitgo x17t9dm2"
            };
            t[1] = d;
        } else {
            d = t[1];
        }
        let m;
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = <button {...babelHelpers.extends({}, d, {
                onClick: l,
                children: s.jsx(r("WDSIconIcClose.react"), {
                    testid: "x-viewer",
                    height: 24,
                    width: 24
                })
            })}/>;
            p = {
                className: "x10l6tqk xoyzfg9 x18hw5r0 xhtitgo x78zum5 x17t9dm2"
            };
            t[2] = m;
            t[3] = p;
        } else {
            m = t[2];
            p = t[3];
        }
        let _;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = <button {...babelHelpers.extends({}, p, {
                onClick: l,
                children: s.jsx(r("WDSIconIcArrowBack.react"), {
                    directional: true
                })
            })}/>;
            t[4] = _;
        } else {
            _ = t[4];
        }
        let f;
        if (t[5] !== error || t[6] !== retry || t[7] !== text) {
            f = <div {...babelHelpers.extends({}, u, {
                "data-animate-status-viewer": true,
                children: [
                    m,
                    _,
                    s.jsx(r("WAWebLazyLoadLoading.react"), {
                        error,
                        text,
                        retry
                    })
                ]
            })}/>;
            t[5] = error;
            t[6] = retry;
            t[7] = text;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    function c() {
        return o("WAWebModalManager").ModalManager.closeMedia();
    }
    l.default = UComponent;
}, 98);