__d("WAWebLandingFooter.react", [
    "fbt",
    "WAWebAppRootInteractionContext.react",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebLandingPromoGating",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebNoop",
    "WAWebSmsRegistrationSubtitle.react",
    "WDSIconIcLock.react",
    "WDSText.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "deferredLoadComponent",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebRegPromo"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const C1 = r("deferredLoadComponent")(r("requireDeferred")("WAWebPhoneNumberCaptureFields.react").__setRef("WAWebLandingFooter.react"));
    const d = {
        landingFooterWrapper: {
            paddingTop: "x1y1aw1k",
            $$css: true
        },
        noWaAccountText: {
            fontSize: "x1c3i2sq",
            lineHeight: "x1a6qonq",
            $$css: true
        },
        externalHelpLinkText: {
            fontSize: "x1jchvi3",
            fontWeight: "xk50ysn",
            lineHeight: "x1ud3kw6",
            $$css: true
        },
        e2ee: {
            color: "x65c15g",
            lineHeight: "x9d7mpn",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        promoCard: {
            width: "xy296fx x91od0",
            paddingTop: "x1p5oq8j x18w32sv",
            paddingInlineEnd: "x15zmtp0 xym2i8p",
            paddingBottom: "xwxc41k xk3sftt",
            paddingInlineStart: "x1oiqv2n x1i50ybd",
            borderStartStartRadius: "x1rsuxf0",
            borderStartEndRadius: "xcgujcq",
            borderEndEndRadius: "x1igtfuo",
            borderEndStartRadius: "x13up0n2",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xpypsur",
            borderInlineEndColor: "x1fe0zbt",
            borderBottomColor: "x249io5",
            borderInlineStartColor: "xtq6bvn",
            backgroundColor: "x12peec7",
            $$css: true
        },
        promoTitle: {
            fontSize: "x1c3i2sq",
            fontWeight: "xk50ysn",
            lineHeight: "x1o2sk6j",
            color: "xowvryd",
            $$css: true
        },
        promoButton: {
            width: "xdzyupr",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(12);
        const { isWebReg: a, onGetStartedNav: i, smsRegistration: l } = e;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                manualHold: false,
                shouldUseNavigationAsInteraction: true,
                tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_GET_STARTED
            };
            t[0] = c;
        } else {
            c = t[0];
        }
        const m = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(c);
        const f = m.startInteraction;
        let g;
        if (t[1] !== i || t[2] !== f) {
            g = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    f();
                    yield i();
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[1] = i;
            t[2] = f;
            t[3] = g;
        } else {
            g = t[3];
        }
        const h = g;
        let y;
        if (t[4] !== h || t[5] !== a || t[6] !== l) {
            y = o("WAWebLandingPromoGating").isLandingPromoEnabled() ? <_ isWebReg={a} smsRegistration={l}/> : <P2 isWebReg={a} onClick={h}/>;
            t[4] = h;
            t[5] = a;
            t[6] = l;
            t[7] = y;
        } else {
            y = t[7];
        }
        let C;
        let b;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            C = <div className="x2b8uid"><span className="x1rg5ohu xxymvpz x2fvf9">{u.jsx(r("WDSIconIcLock.react"), {
                width: 20,
                iconXstyle: d.e2ee,
                testid: "lock-outline"
            })}</span><span className="x65c15g x9d7mpn x6ikm8r x10wlt62">{s._("Your personal messages are end-to-end encrypted")}</span></div>;
            b = u.jsx(o("WAWebLinkDeviceCommonInstructions.react").TCLink, {});
            t[8] = C;
            t[9] = b;
        } else {
            C = t[8];
            b = t[9];
        }
        let v;
        if (t[10] !== y) {
            const Component = o("WAWebFlex.react").FlexColumn;
            v = <Component align="center" xstyle={o("WAWebLandingPromoGating").isLandingPromoEnabled() ? void 0 : d.landingFooterWrapper} rowGap={24}>{y}{C}{b}</Component>;
            t[10] = y;
            t[11] = v;
        } else {
            v = t[11];
        }
        return v;
    }
    function P2(e) {
        const t = o("react-compiler-runtime").c(4);
        const { isWebReg: n, onClick: r } = e;
        if (n) {
            return null;
        }
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            a = <Component paddingTop={8} xstyle={d.noWaAccountText}>{s._("Don't have a WhatsApp account?")}</Component>;
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Get started");
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== r) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            l = <Component_2 columnGap={8}>{a}<Component_1 paddingTop={12} xstyle={d.externalHelpLinkText}><Component text={i} onClick={r} testId="link_device_landing_get_started_link"/></Component_1></Component_2>;
            t[2] = r;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function _(e) {
        const n = o("react-compiler-runtime").c(18);
        const { isWebReg: a, smsRegistration: i } = e;
        const l = r("useWAWebRegPromo")(i);
        const { handleChangePhoneNumber: m, handleSubmit: p, isDisabled: _, phoneNumberWithoutCountryCode: f, selectedCountryId: g } = l;
        if (a) {
            return null;
        }
        let h;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                o("WDSThemes").WDSLightTheme,
                d.promoCard
            ];
            n[0] = h;
        } else {
            h = n[0];
        }
        let y;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            y = <Component_1 xstyle={d.promoTitle}><Component colorName="contentDefault" type="LargeTitle2">{s._("Create an account")}</Component></Component_1>;
            n[1] = y;
        } else {
            y = n[1];
        }
        let C;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            C = <Component_1 grow={1} rowGap={4}>{y}<Component rowGap={8}>{u.jsx(o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitle, {
                includesSmsText: false,
                textAlign: "start",
                ctaText: s._("Get started")
            })}</Component></Component_1>;
            n[2] = C;
        } else {
            C = n[2];
        }
        let b;
        if (n[3] !== p) {
            b = function() {
                p();
            };
            n[3] = p;
            n[4] = b;
        } else {
            b = n[4];
        }
        const v = i.serverResponse?.error_reason;
        let S;
        if (n[5] !== m || n[6] !== f || n[7] !== g || n[8] !== b || n[9] !== v) {
            S = <C1 phoneNumberWithoutCountryCode={f} selectedCountryId={g} onChangePhoneNumber={m} onChangeSelectedCountry={r("WAWebNoop")} showCountrySelect={false} surface="link-device-phone-number" onSubmit={b} error={v} theme="wds"/>;
            n[5] = m;
            n[6] = f;
            n[7] = g;
            n[8] = b;
            n[9] = v;
            n[10] = S;
        } else {
            S = n[10];
        }
        let R;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Get started");
            n[11] = R;
        } else {
            R = n[11];
        }
        let L;
        if (n[12] !== p || n[13] !== _) {
            const Component = r("WAWebLinkDeviceScreenPrimaryButton.react");
            L = <Component text={R} onClick={p} disabled={_} testId="wa-web-landing-promo-get-started" useFullWidthSweep xstyle={d.promoButton}/>;
            n[12] = p;
            n[13] = _;
            n[14] = L;
        } else {
            L = n[14];
        }
        let E;
        if (n[15] !== S || n[16] !== L) {
            let k;
            const Component = (k = o("WAWebFlex.react")).FlexItem;
            E = <Component align="center" justify="center" xstyle={h}><k.FlexRow align="center" justify="center" columnGap={24}>{C}<k.FlexItem shrink={0}><k.FlexColumn rowGap={8} align="stretch">{S}{L}</k.FlexColumn></k.FlexItem></k.FlexRow></Component>;
            n[15] = S;
            n[16] = L;
            n[17] = E;
        } else {
            E = n[17];
        }
        return E;
    }
    l.default = m;
}, 226);