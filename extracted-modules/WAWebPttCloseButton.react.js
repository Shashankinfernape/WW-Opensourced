__d("WAWebPttCloseButton.react", [
    "fbt",
    "WDSIconIcClose.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(17);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { disabled, onConfirm, tabOrder, theme } = l;
        const _ = disabled === undefined ? false : disabled;
        const f = theme === "out-of-chat-playback";
        let g;
        if (n[3] !== onConfirm) {
            g = function(t) {
                if (t != null) {
                    onConfirm(t);
                }
            };
            n[3] = onConfirm;
            n[4] = g;
        } else {
            g = n[4];
        }
        const h = g;
        let y;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            y = s._("Close");
            n[5] = y;
        } else {
            y = n[5];
        }
        const C = y;
        let b;
        if (n[6] !== _ || n[7] !== f) {
            b = ({
                0: {
                    className: "x1kky2od xmix8c7"
                },
                2: {
                    className: "x1n7h9c3 x1s1d1n7 xpcyujq xvijh9v x78zum5 xl56j7k x6s0dn4 xh4mkqi"
                },
                1: {
                    className: "x1kky2od xmix8c7 x5z6fxw"
                },
                3: {
                    className: "x1n7h9c3 x1s1d1n7 xpcyujq xvijh9v x78zum5 xl56j7k x6s0dn4 xh4mkqi x5z6fxw"
                }
            })[!!f << 1 | !!(f && !_) << 0];
            n[6] = _;
            n[7] = f;
            n[8] = b;
        } else {
            b = n[8];
        }
        let v;
        if (n[9] !== _ || n[10] !== h || n[11] !== i || n[12] !== tabOrder) {
            const Component = r("WDSMenuBarItem.react");
            v = <Component ref={i} testid="ptt-player-close-button" onClick={h} tabOrder={tabOrder} disabled={_} title={C} icon={r("WDSIconIcClose.react")}/>;
            n[9] = _;
            n[10] = h;
            n[11] = i;
            n[12] = tabOrder;
            n[13] = v;
        } else {
            v = n[13];
        }
        let S;
        if (n[14] !== b || n[15] !== v) {
            S = <div {...babelHelpers.extends({
                "aria-label": C
            }, b, {
                children: v
            })}/>;
            n[14] = b;
            n[15] = v;
            n[16] = S;
        } else {
            S = n[16];
        }
        return S;
    }
    l.default = d;
}, 226);