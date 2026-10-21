__d("WAWebFlexItem.react", [
    "WAWebStructureStyles",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "align",
        "as",
        "basis",
        "children",
        "columnGap",
        "gap",
        "grow",
        "inline",
        "isFlexContainer",
        "justify",
        "margin",
        "marginBottom",
        "marginEnd",
        "marginStart",
        "marginTop",
        "order",
        "padding",
        "paddingBottom",
        "paddingEnd",
        "paddingStart",
        "paddingTop",
        "rowGap",
        "shrink",
        "testid",
        "wrap",
        "xstyle"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        basis: function(t) {
            return [
                {
                    flexBasis: t != null ? "x1mz2wy7" : t,
                    $$css: true
                },
                {
                    "--x-flexBasis": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        grow: function(t) {
            return [
                {
                    flexGrow: t != null ? "xw36f2b" : t,
                    $$css: true
                },
                {
                    "--x-flexGrow": t ?? undefined
                }
            ];
        },
        order: function(t) {
            return [
                {
                    order: t != null ? "xuwbzjh" : t,
                    $$css: true
                },
                {
                    "--x-order": t ?? undefined
                }
            ];
        },
        shrink: function(t) {
            return [
                {
                    flexShrink: t != null ? "xn95wi4" : t,
                    $$css: true
                },
                {
                    "--x-flexShrink": t ?? undefined
                }
            ];
        }
    };
    const p = {
        flexItem: {
            flexGrow: "x1c4vz4f",
            flexShrink: "xs83m0k",
            flexBasis: "xdl72j9",
            order: "x1g77sc7",
            minWidth: "xeuugli",
            minHeight: "x2lwn1j",
            $$css: true
        },
        displayFlex: {
            display: "x78zum5",
            $$css: true
        },
        displayInlineFlex: {
            display: "x3nfvp2",
            $$css: true
        }
    };
    const _ = {
        nowrap: {
            flexWrap: "xozqiw3",
            $$css: true
        },
        wrap: {
            flexWrap: "x1a02dak",
            $$css: true
        },
        wrapReverse: {
            flexWrap: "x8hhl5t",
            $$css: true
        }
    };
    const f = {
        auto: {
            alignSelf: "x1oa3qoh",
            $$css: true
        },
        start: {
            alignSelf: "xqcrz7y",
            $$css: true
        },
        center: {
            alignSelf: "xamitd3",
            $$css: true
        },
        end: {
            alignSelf: "xpvyfi4",
            $$css: true
        },
        stretch: {
            alignSelf: "xkh2ocl",
            $$css: true
        },
        baseline: {
            alignSelf: "xoi2r2e",
            $$css: true
        }
    };
    const g = {
        auto: {
            justifySelf: "x12fk4p8",
            $$css: true
        },
        start: {
            justifySelf: "xwldb3t",
            $$css: true
        },
        center: {
            justifySelf: "x7v7x1q",
            $$css: true
        },
        end: {
            justifySelf: "x15bdqvn",
            $$css: true
        },
        stretch: {
            justifySelf: "xuy72oy",
            $$css: true
        }
    };
    function h(t) {
        const n = o("react-compiler-runtime").c(14);
        let a;
        let i;
        let l;
        let c;
        let h;
        let y;
        if (n[0] !== t) {
            const C = t.ref;
            const b = babelHelpers.objectWithoutPropertiesLoose(t, e);
            l = C;
            const { align, as, basis, children, columnGap, gap, grow, inline, isFlexContainer, justify, margin, marginBottom, marginEnd, marginStart, marginTop, order, padding, paddingBottom, paddingEnd, paddingStart, paddingTop, rowGap, shrink, testid, wrap, xstyle } = b;
            const j = babelHelpers.objectWithoutPropertiesLoose(b, s);
            i = children;
            y = testid;
            c = j;
            const K = align === undefined ? "auto" : align;
            const Q = as === undefined ? "div" : as;
            const X = justify === undefined ? "auto" : justify;
            const Y = wrap === undefined ? "nowrap" : wrap;
            const J = o("WAWebStructureStyles").getStructureStyles(b);
            a = Q;
            h = (u || (u = r("stylex"))).props(p.flexItem, isFlexContainer === true && p.displayFlex, inline === true && p.displayInlineFlex, _[Y], f[K], g[X], J, xstyle, basis != null && m.basis(typeof basis === "string" ? basis : `${basis}px`), grow != null && m.grow(grow), shrink != null && m.shrink(shrink), order != null && m.order(order));
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = c;
            n[5] = h;
            n[6] = y;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            c = n[4];
            h = n[5];
            y = n[6];
        }
        let Z;
        if (n[7] !== a || n[8] !== i || n[9] !== l || n[10] !== c || n[11] !== h || n[12] !== y) {
            Z = d.jsx(a, babelHelpers.extends({}, h, {
                "data-testid": y,
                ref: l
            }, c, {
                children: i
            }));
            n[7] = a;
            n[8] = i;
            n[9] = l;
            n[10] = c;
            n[11] = h;
            n[12] = y;
            n[13] = Z;
        } else {
            Z = n[13];
        }
        return Z;
    }
    l.default = h;
}, 98);