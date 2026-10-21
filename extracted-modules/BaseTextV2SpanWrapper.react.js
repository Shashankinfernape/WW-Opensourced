__d("BaseTextV2SpanWrapper.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        "::after_content": "x100rkj9",
        "::after_display": "x1azrkns",
        "::before_content": "x10tli2e",
        "::before_display": "xpo3ry2",
        $$css: true
    };
    const d = {
        block: {
            "::after_content": "x1s928wv",
            "::after_display": "xhkezso",
            "::after_height": "x1gmr53x",
            "::before_content": "x1cpjm7i",
            "::before_display": "x1fgarty",
            "::before_height": "x1943h6x",
            $$css: true
        },
        computedPseudoStyles: function(t) {
            return [
                c,
                {
                    "::after_marginTop": t.baselineTrim != null ? "x140p0ai" : t.baselineTrim,
                    "::before_marginBottom": t.capHeightTrim != null ? "x1gufx9m" : t.capHeightTrim,
                    $$css: true
                },
                {
                    "--x-8dd7yt": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t.baselineTrim),
                    "--x-hxtmnb": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t.capHeightTrim)
                }
            ];
        },
        computedStyles: function(t) {
            return [
                {
                    fontSize: t.fontSize != null ? "xdmh292" : t.fontSize,
                    lineHeight: t.lineHeight != null ? "x15dsfln" : t.lineHeight,
                    $$css: true
                },
                {
                    "--x-fontSize": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t.fontSize),
                    "--x-lineHeight": t.lineHeight ?? undefined
                }
            ];
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(12);
        const { ref, children, computedValues, dir, id, nested, suppressHydrationWarning, testid, xstyle } = t;
        let g;
        if (n[0] !== computedValues || n[1] !== nested || n[2] !== xstyle) {
            g = (e || (e = r("stylex"))).props(d.computedStyles(computedValues), !nested && d.computedPseudoStyles(computedValues), !nested && d.block, xstyle);
            n[0] = computedValues;
            n[1] = nested;
            n[2] = xstyle;
            n[3] = g;
        } else {
            g = n[3];
        }
        let h;
        if (n[4] !== children || n[5] !== dir || n[6] !== id || n[7] !== ref || n[8] !== suppressHydrationWarning || n[9] !== g || n[10] !== testid) {
            h = <span {...babelHelpers.extends({
                "data-testid": undefined,
                dir,
                id,
                ref,
                suppressHydrationWarning
            }, g, {
                children
            })}/>;
            n[4] = children;
            n[5] = dir;
            n[6] = id;
            n[7] = ref;
            n[8] = suppressHydrationWarning;
            n[9] = g;
            n[10] = testid;
            n[11] = h;
        } else {
            h = n[11];
        }
        return h;
    }
    l.default = m;
}, 98);