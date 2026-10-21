__d("WAWebErrorTooltip.react", [
    "WAWebTooltipStyles",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        marginInlineStart10: {
            marginInlineStart: "x1hm9lzh",
            $$css: true
        },
        marginInlineEnd10: {
            marginInlineEnd: "x1sa5p1d",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(5);
        const { children, fromMe } = t;
        let l;
        if (n[0] !== fromMe) {
            l = (e || (e = r("stylex"))).props([
                fromMe !== false && o("WAWebTooltipStyles").tooltipStyles.fromMe,
                fromMe === false && o("WAWebTooltipStyles").tooltipStyles.notFromMe,
                fromMe === false && c.marginInlineStart10,
                o("WAWebTooltipStyles").tooltipStyles.tooltip,
                c.marginInlineEnd10,
                o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor12
            ]);
            n[0] = fromMe;
            n[1] = l;
        } else {
            l = n[1];
        }
        let s;
        if (n[2] !== children || n[3] !== l) {
            s = <div {...babelHelpers.extends({}, l, {
                role: "tooltip",
                children
            })}/>;
            n[2] = children;
            n[3] = l;
            n[4] = s;
        } else {
            s = n[4];
        }
        return s;
    }
    l.default = d;
}, 98);