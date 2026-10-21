__d("WAWebLinkDeviceAutoLogoutToggle.react", [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebFbtAppName",
    "WAWebFlex.react",
    "WDSFocusStateStyles",
    "WDSIconIcInfo.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        autoLogoutToggleM1: {
            position: "x1n2onr6",
            $$css: true
        },
        infoRefreshedIcon: {
            color: "xowvryd",
            $$css: true
        },
        infoIconWrapper: {
            display: "x3nfvp2",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(11);
        const { autoLogoutEnabled: n, onAutoLogoutToggle: r, xstyle: a } = e;
        let i;
        if (t[0] !== a) {
            i = [
                d.autoLogoutToggleM1,
                a
            ];
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = !n;
        let u;
        if (t[2] !== r || t[3] !== l) {
            const Component = o("WAWebCheckBox.react").CheckBox;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            u = <Component_1 margin={4}><Component id="auto-logout-toggle" checked={l} onChange={r} testid="link_device_auto_logout_checkbox" theme={o("WAWebCheckBox.react").CheckboxTheme.AUTO_LOGOUT}/></Component_1>;
            t[2] = r;
            t[3] = l;
            t[4] = u;
        } else {
            u = t[4];
        }
        let m;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "xt0psk2 xk50ysn"
            };
            t[5] = m;
        } else {
            m = t[5];
        }
        let _;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            _ = <Component><label {...babelHelpers.extends({}, m, {
                htmlFor: "auto-logout-toggle",
                children: s._("Stay logged in on this browser")
            })}/></Component>;
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            f = <Component_2 marginTop={4} marginBottom={4}><Component_1 columnGap={4} align="center">{_}<Component><P5/></Component></Component_1></Component_2>;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== i || t[9] !== u) {
            const Component = o("WAWebFlex.react").FlexRow;
            g = <Component align="center" dir="auto" columnGap={12} testid="link_device_auto_logout_toggle" xstyle={i}>{u}{f}</Component>;
            t[8] = i;
            t[9] = u;
            t[10] = g;
        } else {
            g = t[10];
        }
        return g;
    }
    function P5() {
        const t = o("react-compiler-runtime").c(3);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = s._("If selected, you'll stay logged into {app name} after closing the browser tab.", [
                s._param("app name", o("WAWebFbtAppName").fbtWAWebAppShortNameWithoutWindows())
            ]);
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = n;
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = (e || (e = r("stylex"))).props(d.infoIconWrapper, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSTooltip.react");
            l = <Component label={a}><span {...babelHelpers.extends({}, i, {
                "aria-label": a,
                role: "img",
                tabIndex: 0,
                children: c.jsx(r("WDSIconIcInfo.react"), {
                    width: 16,
                    height: 16,
                    iconXstyle: d.infoRefreshedIcon,
                    testid: "info-refreshed"
                }, "info_icon")
            })}/></Component>;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.default = m;
}, 226);