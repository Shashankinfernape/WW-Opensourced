__d("WAWebChatlistPanelDrawerButton.react", [
    "WAWebCellFrame.react",
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            width: "x1g3ev5e",
            height: "x3ffywh",
            color: "xhslqc4",
            $$css: true
        },
        wrapper: {
            flexShrink: "x2lah0s",
            marginTop: "xav9cv8",
            marginBottom: "x4tpdpg",
            marginInlineStart: "x1lziwak",
            marginInlineEnd: "x14z9mp",
            marginLeft: null,
            marginRight: null,
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(15);
        const { ariaLabel, dataTab, dataTestId, detail, icon, onClick, primary } = e;
        let p;
        if (t[0] !== primary) {
            const Component = r("WDSText.react");
            p = <Component type="Body1" colorName="contentDeemphasized">{primary}</Component>;
            t[0] = primary;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = p;
        let f;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                u.wrapper,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
            ];
            t[2] = f;
        } else {
            f = t[2];
        }
        let g;
        if (t[3] !== icon) {
            const Component = o("WAWebFlex.react").FlexRow;
            g = <Component align="center" justify="center" xstyle={u.icon}>{icon}</Component>;
            t[3] = icon;
            t[4] = g;
        } else {
            g = t[4];
        }
        let h;
        if (t[5] !== detail || t[6] !== _ || t[7] !== g) {
            h = s.jsx(r("WAWebCellFrame.react"), {
                role: "group",
                ariaColIndex: null,
                image: g,
                primary: _,
                detail,
                theme: "archive-panel"
            });
            t[5] = detail;
            t[6] = _;
            t[7] = g;
            t[8] = h;
        } else {
            h = t[8];
        }
        let y;
        if (t[9] !== ariaLabel || t[10] !== dataTab || t[11] !== dataTestId || t[12] !== onClick || t[13] !== h) {
            const Component = r("WAWebUnstyledButton.react");
            y = <Component testid={dataTestId} dataTab={dataTab} xstyle={f} onClick={onClick} aria-label={ariaLabel}>{h}</Component>;
            t[9] = ariaLabel;
            t[10] = dataTab;
            t[11] = dataTestId;
            t[12] = onClick;
            t[13] = h;
            t[14] = y;
        } else {
            y = t[14];
        }
        return y;
    }
    l.default = c;
}, 98);