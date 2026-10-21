__d("WDSButtonGroup.react", [
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "getPlatformByGK",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s.useMemo;
    const d = {
        stickyContainer: {
            position: "x7wzq59",
            bottom: "x1ey2m1c",
            left: "xu96u03",
            right: "x3m8u43",
            insetInlineStart: null,
            insetInlineEnd: null,
            borderTopColor: "xx42vgk",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            zIndex: "x1vjfegm",
            maxWidth: "x193iq5w",
            minHeight: "x1lh6h5t",
            $$css: true
        },
        topSpacing: {
            paddingTop: "xl7twdi",
            $$css: true
        },
        fill: {
            width: "xh8yej3",
            $$css: true
        },
        hug: {
            width: "xeq5yr9",
            $$css: true
        },
        horizontalWrap: {
            flexWrap: "x8hhl5t",
            $$css: true
        },
        flexibleButton: {
            flexBasis: "x1r8uery",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            minWidth: "x1pshirs",
            $$css: true
        },
        placeholderButton: {
            visibility: "xlshs6z",
            pointerEvents: "x47corl",
            $$css: true
        },
        stickyEnd: {
            justifyContent: "x13a6bvl",
            $$css: true
        }
    };
    function m({ primaryButtonProps: n, secondaryButtonProps: a, tertiaryButtonProps: i, orientation: l, width: m = "fill", sticky: _ = false, footnote: f, topSpacing: h = false, platform: C = o("getPlatformByGK").WDS_PLATFORM, maintainButtonPosition: v = false }) {
        const S = C === "iOS" || C === "android";
        const R = S ? "stacked" : "horizontal";
        const L = l ?? R;
        const E = c(function() {
            const e = L === "horizontal" && m === "fill" && !_;
            let t;
            if (e) {
                t = "fit";
            } else {
                t = m === "fill" ? "flexible" : "fit";
            }
            const o = e ? d.flexibleButton : null;
            const l = function(n, a, i = false) {
                return u.createElement(r("WDSButton.react"), babelHelpers.extends({}, n, {
                    widthMode: t,
                    key: a,
                    xstyle: [
                        m === "fill" ? d.fill : d.hug,
                        o,
                        i ? d.placeholderButton : null,
                        n.xstyle
                    ],
                    platform: C
                }));
            };
            const s = l(n, "primary");
            const c = a ? l(a, "secondary") : null;
            const p = i ? l(i, "tertiary") : null;
            const f = [
                s
            ];
            if (c) {
                f.push(c);
            }
            if (p) {
                f.push(p);
            } else if (v && L === "stacked") {
                const g = l(n, "placeholder", true);
                f.push(g);
            }
            if (L === "horizontal") {
                f.reverse();
            }
            return f;
        }, [
            n,
            a,
            i,
            m,
            L,
            C,
            v,
            _
        ]);
        const k = [
            L === "horizontal" ? o("WDSFlex.stylex").wdsFlex.flexRowCenter : o("WDSFlex.stylex").wdsFlex.flexColumnCenter,
            o("WDSFlex.stylex").wdsFlex.gapSingle,
            m === "fill" ? d.fill : d.hug,
            h === true && d.topSpacing,
            _ && d.stickyContainer,
            _ && L === "horizontal" && d.stickyEnd,
            L === "horizontal" && m === "fill" && !_ && d.horizontalWrap
        ];
        if (f != null) {
            const Component = r("WDSText.react");
            return <div className="xh8yej3" role="group"><div className="x12xbjc7 x2b8uid"><Component type="Body3" colorName="contentDeemphasized">{f}</Component></div><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(k), {
                children: E
            })}/></div>;
        }
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(k), {
            role: "group",
            children: E
        })}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);