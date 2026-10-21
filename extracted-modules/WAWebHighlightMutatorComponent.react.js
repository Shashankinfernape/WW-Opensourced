__d("WAWebHighlightMutatorComponent.react", [
    "WAWebCopyPasteSelectable.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const { children, selectable } = e;
        const a = children === undefined ? "" : children;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = "x1r8hjv8 x117nqv4";
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== a || t[2] !== selectable) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableSpan;
            l = <Component className={i} data-testid="text-highlight" selectable={selectable}>{a}</Component>;
            t[1] = a;
            t[2] = selectable;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    l.default = u;
}, 98);