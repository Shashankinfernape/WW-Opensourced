__d("WAWebBoldMutatorComponent.react", [
    "WAWebCopyPasteSelectable.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(6);
        const { children, selectable, xstyle } = t;
        const s = children === undefined ? "" : children;
        let c;
        if (n[0] !== xstyle) {
            c = xstyle != null ? (e || (e = r("stylex")))(xstyle) : undefined;
            n[0] = xstyle;
            n[1] = c;
        } else {
            c = n[1];
        }
        let d;
        if (n[2] !== s || n[3] !== selectable || n[4] !== c) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableStrong;
            d = <Component selectable={selectable} appTextTemplate="*${appText}*" className={c}>{s}</Component>;
            n[2] = s;
            n[3] = selectable;
            n[4] = c;
            n[5] = d;
        } else {
            d = n[5];
        }
        return d;
    }
    l.default = c;
}, 98);