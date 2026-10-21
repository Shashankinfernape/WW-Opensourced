__d("WAWebInlineCodeMutatorComponent.react", [
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
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            backgroundColor: "x1bu39yj",
            color: "x1bvqhpb",
            fontFamily: "xgfl6pn",
            $$css: true
        },
        quotedColor: {
            color: "x15rks2t",
            $$css: true
        },
        paddingHoriz4: {
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            $$css: true
        },
        paddingVert2: {
            paddingTop: "x1gxa6cn",
            paddingBottom: "xa0aww2",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(7);
        const { children, quoted, selectable, xstyle } = t;
        const d = children === undefined ? "" : children;
        let m;
        if (n[0] !== quoted || n[1] !== xstyle) {
            m = (e || (e = r("stylex")))(c.code, quoted && c.quotedColor, c.paddingHoriz4, c.paddingVert2, xstyle);
            n[0] = quoted;
            n[1] = xstyle;
            n[2] = m;
        } else {
            m = n[2];
        }
        let p;
        if (n[3] !== d || n[4] !== selectable || n[5] !== m) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableCode;
            p = <Component selectable={selectable} appTextTemplate="`${appText}`" className={m}>{d}</Component>;
            n[3] = d;
            n[4] = selectable;
            n[5] = m;
            n[6] = p;
        } else {
            p = n[6];
        }
        return p;
    }
    l.default = d;
}, 98);