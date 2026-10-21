__d("WAWebStrikethroughMutatorComponent.react", [
    "WAWebCopyPasteSelectable.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const { children, selectable } = e;
        const a = children === undefined ? "" : children;
        let i;
        if (t[0] !== a || t[1] !== selectable) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableDel;
            i = <Component selectable={selectable} appTextTemplate="~${appText}~">{a}</Component>;
            t[0] = a;
            t[1] = selectable;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    l.default = u;
}, 98);