__d("WAWebNumberedListMutatorComponent.react", [
    "WAWebL10N",
    "WAWebTextMutatorComponentUtils",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        marginInlineStart30: {
            marginInlineStart: "xymharo",
            $$css: true
        }
    };
    const d = {
        ol: {
            wordBreak: "x13faqbe",
            whiteSpace: "xeaf4i8",
            position: "x1n2onr6",
            listStyleType: "x3yw8vx",
            $$css: true
        }
    };
    function NumberedList(t) {
        const n = o("react-compiler-runtime").c(4);
        const { children, inline, largerIndentation, quoted } = t;
        const m = children === undefined ? "" : children;
        const p = inline === undefined ? false : inline;
        const _ = largerIndentation === undefined ? false : largerIndentation;
        const f = quoted === undefined ? false : quoted;
        if (p) {
            return m;
        }
        let g;
        if (n[0] !== m || n[1] !== _ || n[2] !== f) {
            g = [];
            o("WAWebTextMutatorComponentUtils").groupListChildren(m).forEach((t, n)=>{
                if (t.isList) {
                    g.push(<ol key={n} {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.ol, c.marginInlineStart30, !f && o("WDSMargins.stylex").wdsMargins.marginVer4, _ ? c.marginInlineStart30 : o("WDSMargins.stylex").wdsMargins.marginStart20), {
                        dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
                        children: t.children
                    })}/>);
                } else {
                    g.push(t.children);
                }
            });
            n[0] = m;
            n[1] = _;
            n[2] = f;
            n[3] = g;
        } else {
            g = n[3];
        }
        return g;
    }
    NumberedList.displayName = "NumberedList";
    l.default = NumberedList;
}, 98);