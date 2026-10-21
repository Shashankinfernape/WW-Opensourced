__d("WAWebWaComSignupSmsPhoneNumberInput.react", [
    "fbt",
    "$InternalEnum",
    "CometHeroHoldTrigger.react",
    "WAIsoToCc",
    "WALogger",
    "WAWebAppRootInteractionContext.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebInteractionTracePolicy",
    "WAWebL10N",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceFlagEmojiSetup",
    "WAWebLinkDevicePhoneNumberEntryInput.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebRegistrationCampaignConstants",
    "WAWebSpinner.react",
    "WAWebWaBrandArrowRightIconWrapper.react",
    "WAWebWaComSignupSmsRegistrationConfirmation.react",
    "WAXWhatsAppWebRegistrationControllerRouteBuilder",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useVisibility",
    "useWAWebAsync",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useMemo, useState } = m;
    const errorMessageDOMId = "reg-exp-m1-phone-number-entry-screen-error";
    const h = {
        subtitle: {
            lineHeight: "x1qfxs89",
            letterSpacing: "xfq947u",
            textAlign: "x2b8uid",
            $$css: true
        },
        error: {
            backgroundColor: "xrkjzwr",
            color: "x30a034",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            marginBottom: "x1e56ztr",
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "xdx6fka",
            $$css: true
        },
        combinedPill: {
            boxSizing: "x9f619",
            height: "xsdox4t",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            alignItems: "x6s0dn4",
            backgroundColor: "x1p8t8ri",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            paddingInlineStart: "x106a9eq",
            paddingInlineEnd: "x1xnnf8n",
            columnGap: "x1amjocr",
            width: "x121pien",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xkh25tn",
            borderInlineEndColor: "x9zucqe",
            borderBottomColor: "x1fftf1g",
            borderInlineStartColor: "x4zyt7s",
            $$css: true
        },
        phoneInputInPill: {
            flexGrow: "x1iyjqo2",
            height: "xt7dq6l",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            backgroundColor: "xjbqb8w",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        combinedPillFocused: {
            borderTopColor: "xlze6vy",
            borderInlineEndColor: "x47fsot",
            borderBottomColor: "x1rrvw3c",
            borderInlineStartColor: "x18djku1",
            $$css: true
        },
        combinedPillError: {
            borderTopColor: "x113kvv2",
            borderInlineEndColor: "xce17vl",
            borderBottomColor: "x61tcke",
            borderInlineStartColor: "x1kfnm9f",
            $$css: true
        },
        inputAndButtonColumn: {
            width: "x121pien",
            $$css: true
        },
        buttonHeight: {
            height: "xsdox4t",
            $$css: true
        }
    };
    const y = "for (;;);";
    const C = n("$InternalEnum")({
        SENT: 1,
        ERROR: 2
    });
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(phone) {
            try {
                const n = r("WAXWhatsAppWebRegistrationControllerRouteBuilder").buildUri({
                    phone,
                    step: "otp",
                    locale: r("WAWebL10N").getLocale(),
                    source: 2
                }).toString().concat("&__a=1");
                const a = yield window.fetch(n, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                let i = yield a.text();
                if (i.startsWith(y)) {
                    i = i.substring(y.length);
                }
                const l = JSON.parse(i).payload;
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendSmsCall] response received +"
                ])));
                return l;
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendSmsCall] call failed ",
                    ""
                ])), error).sendLogs("wa-web-reg");
            }
            return {
                status: C.ERROR,
                error_reason: r("WAWebFbtCommon")("Try Again"),
                retry_after: 5
            };
        });
        return v.apply(this, arguments);
    }
    function S({ children }) {
        return children;
    }
    function RComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_errorReason = e.errorReason;
        let r;
        if (t[0] !== e_errorReason) {
            const Component = o("WAWebFlex.react").FlexRow;
            r = <Component alignSelf="center" xstyle={h.error}>{e_errorReason}</Component>;
            t[0] = e_errorReason;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function LComponent({ experimentBucket, phoneNumberWithoutCountryCodeFromQueryParams, providerNumberFromQueryParams, setApiCmd }) {
        const c = useState(phoneNumberWithoutCountryCodeFromQueryParams);
        const m = c[0];
        const y = c[1];
        const v = useState(false);
        const L = v[0];
        const k = v[1];
        const I = useState(false);
        const T = I[0];
        const D = I[1];
        const x = useState(false);
        const $ = x[0];
        const P = x[1];
        const N = useState(false);
        const M = N[0];
        const w = N[1];
        const A = useState(false);
        const F = A[0];
        const O = A[1];
        const B = o("useWAWebTimeout").useManualTimeout(function() {
            w(false);
            O(false);
        });
        const W = B[0];
        const q = useState();
        const U = q[0];
        const V = q[1];
        const H = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []);
        const G = useCallback(function(e, t) {
            y(t.substr(0, 10));
            if (F) {
                O(false);
            }
        }, [
            F
        ]);
        const z = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
            manualHold: false,
            shouldUseNavigationAsInteraction: true,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN
        });
        const z_startInteraction = z.startInteraction;
        const K = useMemo(function() {
            return $ || M || !o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(r("WAIsoToCc").US, m);
        }, [
            M,
            $,
            m
        ]);
        const Q = r("useVisibility")({
            onVisible: function() {
                o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_LOADED);
            }
        });
        const X = Q[0];
        const Y = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!K) {
                    o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_CONTINUE_CLICKED);
                    P(true);
                    const t = (r("WAIsoToCc").US ?? "") + m;
                    const n = yield b(t);
                    const a = n?.retry_after;
                    if (n?.status === C.ERROR) {
                        O(true);
                        if (a != null && a > 0) {
                            w(true);
                            W(a * 1000);
                        }
                    }
                    V(n);
                    P(false);
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        if (U?.status === C.SENT || experimentBucket === o("WAWebRegistrationCampaignConstants").WHATSAPP_DOT_COM_REG_EXP_FLOW_2 && !T) {
            const Component = r("WAWebWaComSignupSmsRegistrationConfirmation.react");
            return <Component phoneNumberWithoutCountryCode={m} providerNumber={U?.provider_number ?? providerNumberFromQueryParams} onBack={function() {
                y(m);
                V(null);
                D(true);
            }} onLinkDevice={function() {
                z_startInteraction();
                setApiCmd(null);
            }} onRetry={Y}/>;
        }
        if (H.loading || H.error) {
            const Component = o("WAWebFlex.react").FlexRow;
            return <Component justify="center">{d.jsx(r("CometHeroHoldTrigger.react"), {
                description: "WAWebSmsRegistrationPhoneNumberInput",
                hold: true
            })}{d.jsx(o("WAWebSpinner.react").Spinner, {})}</Component>;
        }
        const Z = String.fromCodePoint(127482, 127480);
        const emoji = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(Z);
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = o("WAWebFlex.react").FlexRow;
        const Component_4 = r("WAWebLinkDevicePhoneNumberEntryInput.react");
        const Component_5 = r("WAWebFlexItem.react");
        const Component_6 = r("WAWebLinkDeviceScreenPrimaryButton.react");
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = o("WAWebFlex.react").FlexRow;
        const Component_9 = o("WAWebFlex.react").FlexColumn;
        const Component_10 = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
        const Component_11 = o("WAWebFlex.react").FlexColumn;
        const Component_12 = o("WAWebFlex.react").FlexRow;
        const Component_13 = o("WAWebFlex.react").FlexColumn;
        return <Component_13 rowGap={24} xstyle={o("WDSThemes").WDSLightTheme} ref={X}><Component_3 alignSelf="center"><Component_2 rowGap={16}><Component alignSelf="center">{d.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
            value: s._("Confirm your phone number"),
            theme: undefined
        })}</Component><Component_1><E/></Component_1></Component_2></Component_3><Component_8 alignSelf="center"><Component_7 rowGap={20} align="stretch" xstyle={h.inputAndButtonColumn}><Component_5 isFlexContainer xstyle={[
            h.combinedPill,
            F ? h.combinedPillError : L && h.combinedPillFocused
        ]} align="center">{emoji != null && d.jsx(r("WAWebEmoji.react"), {
            DEPRECATED_className: "xngnso2",
            emoji,
            selectable: false
        })}<Component_4 countryCodeIso="US" phoneNumberWithoutCountryPrefix={m} a11yErrorMessage={{
            errorShown: U?.error_reason != null && F,
            errorMessageDOMId,
            errorMessage: U?.error_reason
        }} onChange={G} onEnter={function() {
            Y();
        }} onFocus={function() {
            return k(true);
        }} onBlur={function() {
            return k(false);
        }} theme="default" xstyle={h.phoneInputInPill}/></Component_5>{U?.error_reason != null && F && <RComponent errorReason={U?.error_reason ?? r("WAWebFbtCommon")("Try Again")}/>}<div className="xrvj5dj"><Component_6 text={r("WAWebFbtCommon")("Continue")} onClick={Y} animate={false} disabled={K} testId="link-device-sms-pn-entry-continue-button" icon={d.jsx(r("WAWebWaBrandArrowRightIconWrapper.react"), {})} theme={undefined} xstyle={h.buttonHeight}/></div></Component_7></Component_8><Component_12 columnGap={8} alignSelf="center"><Component_9><S>{s._("Already have an account?")}</S></Component_9><Component_11><S><Component_10 isBold={false} testId="link_device_registration_login_link" text={s._("Log in")} onClick={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            z_startInteraction();
            setApiCmd(null);
        })} showArrow={undefined} showUnderline={undefined}/></S></Component_11></Component_12></Component_13>;
    }
    LComponent.displayName = `${LComponent.name} [from ${i.id}]`;
    function E() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            t = <Component alignSelf="center" align="center" wrap="wrap" justify="center"><S>{s._("We'll send an SMS to your phone, where you can download WhatsApp and register your account.")}</S></Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            n = <Component_1 rowGap={2} xstyle={h.subtitle}>{t}<Component alignSelf="center" align="center" wrap="wrap" justify="center"><S>{s._("Message and data rates may apply. Read our\u00a0 {privacy_policy_link}. Click \"Continue\" to accept the\u00a0 {terms_of_service_link}.", [
                s._param("privacy_policy_link", d.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                    isBold: false,
                    testId: "link_device_registration_privacy_policy_link",
                    text: s._("Privacy Policy"),
                    url: "https://www.whatsapp.com/legal/privacy-policy",
                    showArrow: false,
                    showUnderline: undefined
                })),
                s._param("terms_of_service_link", d.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                    isBold: false,
                    testId: "link_device_registration_terms_of_service_link",
                    text: s._("Terms of Service"),
                    url: "https://www.whatsapp.com/legal/terms-of-service",
                    showArrow: false,
                    showUnderline: undefined
                }))
            ])}</S></Component></Component_1>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = LComponent;
}, 226);