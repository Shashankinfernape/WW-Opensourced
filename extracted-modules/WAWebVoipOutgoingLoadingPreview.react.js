__d("WAWebVoipOutgoingLoadingPreview.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebThemeContext",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipPanelSurfaceStyles",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSIconIcCallEndFilled.react",
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
            pointerEvents: "x67bb7w",
            $$css: true
        },
        contentContainer: {
            height: "x5yr21d",
            width: "xh8yej3",
            boxSizing: "x9f619",
            backgroundColor: "x1c7u0tx",
            $$css: true
        },
        loadingArea: {
            width: "xh8yej3",
            $$css: true
        },
        loadingAreaCompact: {
            width: "xh8yej3",
            boxSizing: "x9f619",
            $$css: true
        },
        controls: {
            marginTop: "xr1yuqi",
            height: "xsdox4t",
            width: "xh8yej3",
            boxSizing: "x9f619",
            $$css: true
        },
        endButton: {
            height: "x10w6t97",
            minWidth: "x4m7ku4",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(23);
        const { isJoin, isVideo } = e;
        const i = o("WAWebThemeContext").useIsDarkTheme();
        let l;
        if (t[0] !== isVideo) {
            l = isVideo ? s._("Video call") : s._("Voice call");
            t[0] = isVideo;
            t[1] = l;
        } else {
            l = t[1];
        }
        const m = l;
        let p;
        if (t[2] !== isJoin) {
            const _ = isJoin ? s._("Joining…") : s._("Calling…");
            const Component = r("WDSText.react");
            p = <Component type="Body1" colorName="contentDeemphasized" selectable={false}>{_}</Component>;
            t[2] = isJoin;
            t[3] = p;
        } else {
            p = t[3];
        }
        let f;
        if (t[4] !== m) {
            const Component = r("WDSText.react");
            f = <Component type="Body2" colorName="contentDeemphasized" selectable={false}>{m}</Component>;
            t[4] = m;
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] !== p || t[7] !== f) {
            g = <>{p}{f}</>;
            t[6] = p;
            t[7] = f;
            t[8] = g;
        } else {
            g = t[8];
        }
        const h = g;
        const y = i ? o("WAWebVoipPanelSurfaceStyles").WAWebVoipPanelSurfaceStyles.panelSurfaceDarkTheme : o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain;
        let C;
        if (t[9] !== y) {
            C = [
                o("WDSThemes").WDSDarkTheme,
                d.voipContainer,
                o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
                y
            ];
            t[9] = y;
            t[10] = C;
        } else {
            C = t[10];
        }
        const b = i && o("WAWebVoipPanelSurfaceStyles").WAWebVoipPanelSurfaceStyles.panelSurfaceDarkTheme;
        let v;
        if (t[11] !== b) {
            v = [
                d.contentContainer,
                b
            ];
            t[11] = b;
            t[12] = v;
        } else {
            v = t[12];
        }
        let S;
        if (t[13] !== isVideo || t[14] !== h) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            S = isVideo ? <Component align="center" justify="center" grow={1} rowGap={16} xstyle={d.loadingArea}>{u.jsx(r("WDSSpinner.react"), {
                size: 40,
                stroke: 3,
                xstyle: o("WDSColorStyles.stylex").WDSColorStyles.accent
            })}{h}</Component> : <Component_2 align="center" justify="center" grow={1} columnGap={12} xstyle={d.loadingAreaCompact}>{u.jsx(r("WDSSpinner.react"), {
                size: 32,
                stroke: 3,
                xstyle: o("WDSColorStyles.stylex").WDSColorStyles.accent
            })}<Component_1 align="start" justify="center">{h}</Component_1></Component_2>;
            t[13] = isVideo;
            t[14] = h;
            t[15] = S;
        } else {
            S = t[15];
        }
        let R;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSButton.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            R = <Component_1 align="center" justify="end" shrink={0} paddingStart={8} paddingEnd={8} xstyle={d.controls}><Component testid="voip_outgoing_cancel_button" type="destructive" variant="filled" onPress={o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall} Icon={r("WDSIconIcCallEndFilled.react")} size="small" xstyle={[
                o("WDSThemes").WDSLightTheme,
                d.endButton
            ]} aria-label={s._("End call")}/></Component_1>;
            t[16] = R;
        } else {
            R = t[16];
        }
        let L;
        if (t[17] !== v || t[18] !== S) {
            const Component = o("WAWebFlex.react").FlexColumn;
            L = <Component align="center" paddingTop={8} xstyle={v}>{S}{R}</Component>;
            t[17] = v;
            t[18] = S;
            t[19] = L;
        } else {
            L = t[19];
        }
        let E;
        if (t[20] !== L || t[21] !== C) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebThemeContext").ThemeContext.Provider;
            E = <Component_1 value={c}><Component testid="voip_outgoing_loading_preview_wrapper" xstyle={C}>{L}</Component></Component_1>;
            t[20] = L;
            t[21] = C;
            t[22] = E;
        } else {
            E = t[22];
        }
        return E;
    }
    l.default = m;
}, 226);