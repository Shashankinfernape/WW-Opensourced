__d("WAWebLoadingConfirmPopup.react", [
    "WAWebConfirmPopup.react",
    "WAWebLazyLoadLoading.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(8);
        const { error, okText, title } = e;
        const l = c;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                surface: "unknown",
                viewName: "loading-confirm"
            };
            t[0] = u;
        } else {
            u = t[0];
        }
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x1n2onr6 x1vd4hg5"
            };
            t[1] = d;
        } else {
            d = t[1];
        }
        let m;
        if (t[2] !== error) {
            m = <div {...babelHelpers.extends({}, d, {
                children: s.jsx(r("WAWebLazyLoadLoading.react"), {
                    error
                })
            })}/>;
            t[2] = error;
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] !== okText || t[5] !== m || t[6] !== title) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            p = <Component tsNavigationData={u} title={title} onOK={l} okText={okText} okDisabled onCancel={o("WAWebModalManager").closeModalManager}>{m}</Component>;
            t[4] = okText;
            t[5] = m;
            t[6] = title;
            t[7] = p;
        } else {
            p = t[7];
        }
        return p;
    }
    function c() {}
    l.default = UComponent;
}, 98);