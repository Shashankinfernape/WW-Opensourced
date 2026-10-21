__d("WAWebAdaptiveLayoutRoot.react", [
    "WAWebAdaptiveLayoutContext.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const c = [
        "chatlist",
        "conversation",
        "right"
    ];
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(18);
        const { children, conversationOpen, leftDrawerOpen, mode, rightDrawerOpen } = e;
        const isNarrow = mode === "narrow";
        let m;
        if (t[0] !== mode || t[1] !== isNarrow) {
            m = {
                mode,
                isNarrow
            };
            t[0] = mode;
            t[1] = isNarrow;
            t[2] = m;
        } else {
            m = t[2];
        }
        const p = m;
        let _;
        if (t[3] !== conversationOpen || t[4] !== leftDrawerOpen || t[5] !== mode || t[6] !== rightDrawerOpen) {
            _ = "chatlist";
            if (mode === "narrow") {
                if (rightDrawerOpen) {
                    _ = "right";
                } else if (leftDrawerOpen) {
                    _ = "left";
                } else if (conversationOpen) {
                    _ = "conversation";
                }
            }
            t[3] = conversationOpen;
            t[4] = leftDrawerOpen;
            t[5] = mode;
            t[6] = rightDrawerOpen;
            t[7] = _;
        } else {
            _ = t[7];
        }
        let f;
        if (t[8] !== children || t[9] !== mode || t[10] !== _) {
            let g;
            if (t[12] !== mode || t[13] !== _) {
                g = function(t, n) {
                    const e = c[n];
                    const r = mode === "narrow" && (e == null || _ !== e);
                    return <div {...babelHelpers.extends({}, {
                        0: {
                            className: "xjp7ctv"
                        },
                        1: {
                            className: "x1s85apg"
                        }
                    }[!!r << 0], {
                        children: t
                    })}/>;
                };
                t[12] = mode;
                t[13] = _;
                t[14] = g;
            } else {
                g = t[14];
            }
            f = s.Children.map(children, g);
            t[8] = children;
            t[9] = mode;
            t[10] = _;
            t[11] = f;
        } else {
            f = t[11];
        }
        let h;
        if (t[15] !== p || t[16] !== f) {
            const Component = r("WAWebAdaptiveLayoutContext.react").Provider;
            h = <Component value={p}>{f}</Component>;
            t[15] = p;
            t[16] = f;
            t[17] = h;
        } else {
            h = t[17];
        }
        return h;
    }
    l.default = DComponent;
}, 98);