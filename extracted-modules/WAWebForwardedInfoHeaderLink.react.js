__d("WAWebForwardedInfoHeaderLink.react", [
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { children, onClick, testId } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1tiyuxx x1nbhmlj"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== children) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            l = <Component weight="semibold" color="link">{children}</Component>;
            t[1] = children;
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== onClick || t[4] !== l) {
            const Component = o("WAWebText.react").WAWebClickableText;
            u = <Component onClick={onClick}>{l}</Component>;
            t[3] = onClick;
            t[4] = l;
            t[5] = u;
        } else {
            u = t[5];
        }
        let c;
        if (t[6] !== u || t[7] !== testId) {
            c = <div {...babelHelpers.extends({
                "data-testid": testId
            }, i, {
                children: u
            })}/>;
            t[6] = u;
            t[7] = testId;
            t[8] = c;
        } else {
            c = t[8];
        }
        return c;
    }
    l.default = u;
}, 98);