__d("WAWebLinkDeviceQrcodeLayout.react", [
    "fbt",
    "CometHeroHoldTrigger.react",
    "CometPlaceholder.react",
    "WAWebAlternateDeviceLinkingLink.react",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebHybridRegGating",
    "WAWebLinkDeviceCodeView.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebSpinner.react",
    "deferredLoadComponent",
    "react",
    "react-compiler-runtime",
    "requireDeferred"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const C2 = r("deferredLoadComponent")(r("requireDeferred")("WAWebLogoutReasonBanner.react").__setRef("WAWebLinkDeviceQrcodeLayout.react"));
    const d = 228;
    const m = {
        qrSpinner: {
            backgroundColor: "xf39lq1",
            width: "xh8yej3",
            height: "x5yr21d",
            borderStartStartRadius: "x16qb05n",
            borderStartEndRadius: "xi7iut8",
            borderEndEndRadius: "x1dm3dyd",
            borderEndStartRadius: "x1pv694p",
            $$css: true
        },
        qrSpinnerThemed: {
            backgroundColor: "x1od0jb8",
            $$css: true
        }
    };
    function p(e) {
        const t = o("react-compiler-runtime").c(18);
        const { apiCmd: n, autoLogoutEnabled: a, children: i, enabedAlternateDeviceLinking: l, onAutoLogoutToggle: d, onClickLinkWithPhoneNumber: m } = e;
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = f();
            t[0] = p;
        } else {
            p = t[0];
        }
        const _ = p;
        const g = m;
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("CometPlaceholder.react");
            h = <Component fallback={null} name="WAWebLogoutReasonBanner"><C2/></Component>;
            t[1] = h;
        } else {
            h = t[1];
        }
        let y;
        if (t[2] !== l || t[3] !== g) {
            y = g != null ? {
                onClick: g,
                shouldShow: l,
                testId: "link_device_qr_phone_number_shortcut_link",
                text: s._("Link with phone number instead.")
            } : null;
            t[2] = l;
            t[3] = g;
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] !== l || t[6] !== g) {
            const Component = r("WAWebAlternateDeviceLinkingLink.react");
            C = g != null ? <Component codeType={o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR} onClick={g} enabled={l}/> : null;
            t[5] = l;
            t[6] = g;
            t[7] = C;
        } else {
            C = t[7];
        }
        let b;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            b = ({
                0: {},
                2: {
                    className: "x14a8spa x1t7qo4d x1c76a8b xu7uy1i"
                },
                1: {
                    className: "x18d9i69 xexx8yu"
                },
                3: {
                    className: "x1t7qo4d xu7uy1i x18d9i69 xexx8yu"
                }
            })[!!r("WAWebEnvironment").isWindows << 1 | !!(r("WAWebEnvironment").isWindows && o("WAWebHybridRegGating").isHybridRegEnabled()) << 0];
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] !== i) {
            v = <div {...babelHelpers.extends({}, b, {
                children: i
            })}/>;
            t[9] = i;
            t[10] = v;
        } else {
            v = t[10];
        }
        let S;
        if (t[11] !== n || t[12] !== a || t[13] !== d || t[14] !== y || t[15] !== C || t[16] !== v) {
            const Component = o("WAWebLinkDeviceCodeView.react").LinkDeviceCodeView;
            S = <Component codeType={o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.QR} apiCmd={n} banners={h} title={_} autoLogoutEnabled={a} onAutoLogoutToggle={d} screenReaderSubtitleConfig={y} alternativeLinkDeviceMethodHint={C}>{v}</Component>;
            t[11] = n;
            t[12] = a;
            t[13] = d;
            t[14] = y;
            t[15] = C;
            t[16] = v;
            t[17] = S;
        } else {
            S = t[17];
        }
        return S;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(7);
        const n = e.theme;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = n === "wds" && m.qrSpinnerThemed;
        let l;
        if (t[1] !== i) {
            l = [
                m.qrSpinner,
                i
            ];
            t[1] = i;
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        let c;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            s = u.jsx(r("CometHeroHoldTrigger.react"), {
                description: "WAWebLinkDeviceQrcodeQRSpinner",
                hold: true
            });
            c = u.jsx(o("WAWebSpinner.react").Spinner, {});
            t[3] = s;
            t[4] = c;
        } else {
            s = t[3];
            c = t[4];
        }
        let d;
        if (t[5] !== l) {
            const Component = o("WAWebFlex.react").FlexRow;
            d = <div {...babelHelpers.extends({}, a, {
                children: <Component align="center" justify="center" xstyle={l}>{s}{c}</Component>
            })}/>;
            t[5] = l;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    function f() {
        if (r("WAWebEnvironment").isWindows) {
            return s._("Log in to WhatsApp");
        }
        return s._("Scan to log in");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.WAWebLinkDeviceQrcodeLayout = p;
    l.QRSpinner = _;
}, 226);