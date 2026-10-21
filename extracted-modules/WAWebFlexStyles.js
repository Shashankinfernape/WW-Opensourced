__d("WAWebFlexStyles", [], function(t, n, r, o, a, i, l) {
    const e = {
        displayFlex: {
            display: "x78zum5",
            $$css: true
        },
        displayInlineFlex: {
            display: "x3nfvp2",
            $$css: true
        }
    };
    const s = {
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
    const u = {
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
    const c = {
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
    const d = {
        start: {
            justifyContent: "x1nhvcw1",
            $$css: true
        },
        center: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        end: {
            justifyContent: "x13a6bvl",
            $$css: true
        },
        all: {
            justifyContent: "x1qughib",
            $$css: true
        },
        around: {
            justifyContent: "x1l1ennw",
            $$css: true
        },
        evenly: {
            justifyContent: "xaw8158",
            $$css: true
        },
        stretch: {
            justifyContent: "x1szn6h9",
            $$css: true
        }
    };
    const m = {
        horizontal: {
            flexDirection: "x1q0g3np",
            $$css: true
        },
        vertical: {
            flexDirection: "xdt5ytf",
            $$css: true
        },
        horizontalReverse: {
            flexDirection: "x15zctf7",
            $$css: true
        },
        verticalReverse: {
            flexDirection: "x3ieub6",
            $$css: true
        }
    };
    const p = {
        center: {
            alignItems: "x6s0dn4",
            $$css: true
        },
        start: {
            alignItems: "x1cy8zhl",
            $$css: true
        },
        end: {
            alignItems: "xuk3077",
            $$css: true
        },
        stretch: {
            alignItems: "x1qjc9v5",
            $$css: true
        },
        baseline: {
            alignItems: "x1pha0wt",
            $$css: true
        }
    };
    function _(t) {
        const { basis: n, grow: r, order: o, shrink: a } = t;
        return {
            xstyle: [
                t.flex === true && e.displayFlex,
                t.inline === true && e.displayInlineFlex,
                t.wrap != null && s[t.wrap],
                t.alignSelf != null && u[t.alignSelf],
                t.justifySelf != null && c[t.justifySelf],
                t.flex === true && [
                    t.align != null && p[t.align],
                    t.justify != null && d[t.justify],
                    t.direction != null && m[t.direction]
                ]
            ],
            inline: {
                flexBasis: typeof n === "string" || n == null ? n : `${n}px`,
                flexGrow: r,
                flexShrink: a,
                order: o
            }
        };
    }
    l.getFlexStyles = _;
}, 98);