__d("WAWebCodeMutatorComponent.react", [
    "WAWebCopyPasteSelectable.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        code: {
            fontFamily: "xgfl6pn",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(6);
        const { children, selectable, xstyle } = t;
        const s = children === undefined ? "" : children;
        let d;
        if (n[0] !== xstyle) {
            d = (e || (e = r("stylex")))(c.code, xstyle);
            n[0] = xstyle;
            n[1] = d;
        } else {
            d = n[1];
        }
        let m;
        if (n[2] !== s || n[3] !== selectable || n[4] !== d) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableCode;
            m = <Component selectable={selectable} appTextTemplate="```${appText}```" className={d}>{s}</Component>;
            n[2] = s;
            n[3] = selectable;
            n[4] = d;
            n[5] = m;
        } else {
            m = n[5];
        }
        return m;
    }
    l.default = d;
}, 98);