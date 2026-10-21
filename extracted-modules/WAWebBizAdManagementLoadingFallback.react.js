__d("WAWebBizAdManagementLoadingFallback.react", [
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdManagementColumnWidths",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = 68;
    const c = {
        flexShrink: "x2lah0s",
        $$css: true
    };
    const d = {
        flexBasis: "x1r8uery",
        flexShrink: "x2lah0s",
        $$css: true
    };
    const m = {
        fill: {
            flexBasis: "x1r8uery",
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        maxWidth: function(t) {
            return [
                {
                    maxWidth: t != null ? "xf68679" : t,
                    $$css: true
                },
                {
                    "--x-maxWidth": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        minWidth: function(t) {
            return [
                {
                    minWidth: t != null ? "xkj4a21" : t,
                    $$css: true
                },
                {
                    "--x-minWidth": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        pixel: function(t) {
            return [
                c,
                {
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        proportional: function(t) {
            return [
                d,
                {
                    flexGrow: t != null ? "xw36f2b" : t,
                    $$css: true
                },
                {
                    "--x-flexGrow": t ?? undefined
                }
            ];
        }
    };
    const p = {
        cell: {
            boxSizing: "x9f619",
            paddingInlineStart: "x1phvje8",
            paddingInlineEnd: "xcldk2z",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        row: {
            paddingTop: "x1xrf6ya",
            paddingBottom: "xscbp6u",
            paddingInlineEnd: "xvtqlqk",
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        textContainer: {
            minWidth: "xeuugli",
            $$css: true
        },
        yourAdsCell: {
            width: "xh8yej3",
            $$css: true
        }
    };
    const length = 6;
    const f = [
        "yourAds",
        "status",
        "reach",
        "conversations",
        "costPerConversation",
        "amountSpent"
    ];
    function g() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <div className="x1c7u0tx x78zum5 xdt5ytf x1iyjqo2"><div className="x2lah0s x1gb2em4"/>{Array.from({
                length
            }, h)}</div>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function h(e, t) {
        return <V3Component key={t}/>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function Y9Component() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 48,
                width: 48
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            n = <Component_1 align="center" gap={12} xstyle={p.yourAdsCell}>{t}<Component gap={4} xstyle={p.textContainer}>{s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 16,
                width: 120
            })}{s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 12,
                width: 80
            })}</Component></Component_1>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function C() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            t = <Component gap={4}>{s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 16,
                width: 60
            })}{s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 12,
                width: 80
            })}</Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    var b = {
        amountSpent: <C/>,
        conversations: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 16,
            width: 50
        }),
        costPerConversation: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 16,
            width: 60
        }),
        reach: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 16,
            width: 50
        }),
        status: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 16,
            width: 60
        }),
        yourAds: <Y9Component/>
    };
    function V3Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            t = <Component align="center" xstyle={p.row}>{f.map(SComponent)}</Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function SComponent(e) {
        const Component = o("WAWebFlex.react").FlexColumn;
        return <Component key={e} xstyle={[
            p.cell,
            R(o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths[e])
        ]}>{b[e]}</Component>;
    }
    SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
    function R(e) {
        return [
            e.type === "pixel" && m.pixel(`${e.px}px`),
            e.type === "proportional" && m.proportional(e.value),
            e.type !== "pixel" && e.type !== "proportional" && m.fill,
            e.options?.minWidth != null && m.minWidth(`${e.options.minWidth}px`),
            e.options?.maxWidth != null && m.maxWidth(`${e.options.maxWidth}px`)
        ];
    }
    l.default = g;
}, 98);