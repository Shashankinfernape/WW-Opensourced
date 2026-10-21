__d("WAWebPttPlayPauseButton.react", [
    "fbt",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        composeBox: {
            color: "x14ug900",
            $$css: true
        },
        composeBoxEnabled: {
            ":hover_color": "x1a92kiq",
            $$css: true
        },
        composeBoxEnabledRefresh: {
            ":hover_color": "x144v4sp",
            $$css: true
        },
        outOfChat: {
            width: "x1n7h9c3",
            height: "x1s1d1n7",
            marginInlineStart: "x2459kn",
            marginTop: "xvijh9v",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            color: "xh4mkqi",
            $$css: true
        },
        outOfChatEnabled: {
            ":hover_opacity": "x5z6fxw",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(21);
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
        const { disabled, onConfirm, paused, tabOrder, theme } = l;
        const h = disabled === undefined ? false : disabled;
        let y;
        if (n[3] !== onConfirm) {
            y = function(t) {
                if (t != null) {
                    onConfirm(t);
                }
            };
            n[3] = onConfirm;
            n[4] = y;
        } else {
            y = n[4];
        }
        const C = y;
        let b;
        if (n[5] !== paused) {
            b = paused ? s._("Play") : s._("Pause");
            n[5] = paused;
            n[6] = b;
        } else {
            b = n[6];
        }
        const v = b;
        let S;
        if (n[7] !== h || n[8] !== theme) {
            S = (u || (u = r("stylex"))).props([
                theme === "compose-box" && m.composeBox,
                theme === "compose-box" && !h && m.composeBoxEnabled,
                theme === "compose-box" && m.composeBoxEnabledRefresh,
                theme === "out-of-chat-playback" && m.outOfChat,
                theme === "out-of-chat-playback" && !h && m.outOfChatEnabled
            ]);
            n[7] = h;
            n[8] = theme;
            n[9] = S;
        } else {
            S = n[9];
        }
        const R = r(paused ? "WDSIconIcPlayArrowFilled.react" : "WDSIconIcPauseFilled.react");
        let L;
        if (n[10] !== h || n[11] !== C || n[12] !== v || n[13] !== i || n[14] !== R || n[15] !== tabOrder) {
            const Component = r("WDSMenuBarItem.react");
            L = <Component ref={i} testid="ptt-play-pause-button" onClick={C} disabled={h} tabOrder={tabOrder} title={v} icon={R}/>;
            n[10] = h;
            n[11] = C;
            n[12] = v;
            n[13] = i;
            n[14] = R;
            n[15] = tabOrder;
            n[16] = L;
        } else {
            L = n[16];
        }
        let E;
        if (n[17] !== v || n[18] !== S || n[19] !== L) {
            E = <div {...babelHelpers.extends({
                "aria-label": v
            }, S, {
                children: L
            })}/>;
            n[17] = v;
            n[18] = S;
            n[19] = L;
            n[20] = E;
        } else {
            E = n[20];
        }
        return E;
    }
    l.default = p;
}, 226);