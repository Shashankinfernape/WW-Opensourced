__d("WAWebVoipCallLinkLoadingPreview.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebThemeContext",
    "WAWebVoipPanelSurfaceStyles",
    "WDSColorStyles.stylex",
    "WDSSpinner.react",
    "WDSText.react",
    "WDSThemes",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        theme: "dark",
        setTheme: r("WAWebNoop"),
        setSystemThemeMode: r("WAWebNoop"),
        systemThemeMode: false
    };
    const d = {
        voipContainer: {
            position: "x1n2onr6",
            width: "xh8yej3",
            height: "x5yr21d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            userSelect: "x87ps6o",
            $$css: true
        },
        lobbyOuterContainer: {
            position: "x1n2onr6",
            display: "x78zum5",
            height: "x5yr21d",
            width: "xh8yej3",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        lobbyInnerContainer: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            width: "xh8yej3",
            height: "x5yr21d",
            display: "x78zum5",
            $$css: true
        },
        contentContainer: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x6s0dn4",
            height: "x5yr21d",
            width: "xh8yej3",
            paddingTop: "x16ovd2e",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x4tra6z",
            paddingInlineEnd: "x1j8ymqv",
            boxSizing: "x9f619",
            rowGap: "x1b73lln",
            backgroundColor: "x1c7u0tx",
            $$css: true
        },
        participantInfoSection: {
            flexShrink: "x2lah0s",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            alignItems: "x6s0dn4",
            rowGap: "x1f0uite",
            columnGap: "xs2akgl",
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            marginTop: "x1380le5",
            marginInlineStart: "x150mmf0",
            marginInlineEnd: "xqf2s3x",
            marginLeft: null,
            marginRight: null,
            backgroundColor: "x16w0wmm",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            width: "x1unu1t6",
            boxSizing: "x9f619",
            $$css: true
        },
        loadingArea: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            rowGap: "x1f0uite",
            columnGap: "xs2akgl",
            width: "xh8yej3",
            $$css: true
        },
        controlsPlaceholder: {
            paddingTop: "x16ovd2e",
            paddingBottom: "x12xbjc7",
            flexShrink: "x2lah0s",
            marginTop: "xr1yuqi",
            width: "xh8yej3",
            boxSizing: "x9f619",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(27);
        const e_isVideo = e.isVideo;
        const a = o("WAWebThemeContext").useIsDarkTheme();
        let i;
        if (t[0] !== e_isVideo) {
            i = e_isVideo ? s._("Video call") : s._("Voice call");
            t[0] = e_isVideo;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        const m = a ? o("WAWebVoipPanelSurfaceStyles").WAWebVoipPanelSurfaceStyles.panelSurfaceDarkTheme : o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain;
        let p;
        if (t[2] !== m) {
            p = [
                o("WDSThemes").WDSDarkTheme,
                d.voipContainer,
                o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
                m
            ];
            t[2] = m;
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = a && o("WAWebVoipPanelSurfaceStyles").WAWebVoipPanelSurfaceStyles.panelSurfaceDarkTheme;
        let f;
        if (t[4] !== _) {
            f = [
                d.contentContainer,
                _
            ];
            t[4] = _;
            t[5] = f;
        } else {
            f = t[5];
        }
        const g = a && o("WAWebVoipPanelSurfaceStyles").WAWebVoipPanelSurfaceStyles.cardSurfaceDarkTheme;
        let h;
        if (t[6] !== g) {
            h = [
                d.participantInfoSection,
                g
            ];
            t[6] = g;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x100vrsf x1vqgdyp x1c9tyrk xeusxvb x1pahc9y x1ertn4p xfn3atn x78zum5 x6s0dn4 xl56j7k x2lah0s x1c3i2sq"
            };
            t[8] = y;
        } else {
            y = t[8];
        }
        const C = e_isVideo ? "📹" : "📞";
        let b;
        if (t[9] !== C) {
            b = <div {...babelHelpers.extends({}, y, {
                children: C
            })}/>;
            t[9] = C;
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            v = <Component type="Body1Emphasized" colorName="contentDefault" selectable={false}>{s._("Call link")}</Component>;
            t[11] = v;
        } else {
            v = t[11];
        }
        let S;
        if (t[12] !== l) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            S = <Component_1>{v}<Component type="Body2" colorName="contentDeemphasized" selectable={false}>{l}</Component></Component_1>;
            t[12] = l;
            t[13] = S;
        } else {
            S = t[13];
        }
        let R;
        if (t[14] !== b || t[15] !== S || t[16] !== h) {
            const Component = o("WAWebFlex.react").FlexRow;
            R = <Component align="center" xstyle={h}>{b}{S}</Component>;
            t[14] = b;
            t[15] = S;
            t[16] = h;
            t[17] = R;
        } else {
            R = t[17];
        }
        let L;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            L = u.jsx(r("WDSSpinner.react"), {
                size: 40,
                stroke: 3,
                xstyle: o("WDSColorStyles.stylex").WDSColorStyles.accent
            });
            t[18] = L;
        } else {
            L = t[18];
        }
        let E;
        let k;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexItem;
            E = <Component_1 xstyle={d.loadingArea}>{L}<Component type="Body1" colorName="contentDeemphasized" selectable={false}>{s._("Connecting...")}</Component></Component_1>;
            k = u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: d.controlsPlaceholder
            });
            t[19] = E;
            t[20] = k;
        } else {
            E = t[19];
            k = t[20];
        }
        let I;
        if (t[21] !== R || t[22] !== f) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebFlex.react").FlexItem;
            I = <Component_2 xstyle={d.lobbyOuterContainer}><Component_1 xstyle={d.lobbyInnerContainer}><Component xstyle={f}>{R}{E}{k}</Component></Component_1></Component_2>;
            t[21] = R;
            t[22] = f;
            t[23] = I;
        } else {
            I = t[23];
        }
        let T;
        if (t[24] !== I || t[25] !== p) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebThemeContext").ThemeContext.Provider;
            T = <Component_1 value={c}><Component xstyle={p}>{I}</Component></Component_1>;
            t[24] = I;
            t[25] = p;
            t[26] = T;
        } else {
            T = t[26];
        }
        return T;
    }
    l.default = m;
}, 226);