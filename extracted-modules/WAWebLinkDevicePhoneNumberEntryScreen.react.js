__d("WAWebLinkDevicePhoneNumberEntryScreen.react", [
    "fbt",
    "CometHeroHoldTrigger.react",
    "WAIsoToCc",
    "WALogger",
    "WAWebAlternateDeviceLinkingLink.react",
    "WAWebAppRootInteractionContext.react",
    "WAWebButton.react",
    "WAWebCountriesUtils",
    "WAWebCountryPhoneNumberInput.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebHybridRegGating",
    "WAWebInteractionTracePolicy",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceFlagEmojiSetup",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebLoggedOutBanner.react",
    "WAWebSpinner.react",
    "WAWebThemeContext",
    "WAWebUserPrefsGeneral",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebCountries"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useEffect, useRef, useState } = m;
    const h = "link-device-phone-number-entry-screen-error";
    const y = {
        spinnerContainer: {
            height: "x1ym45yv",
            $$css: true
        },
        spinnerContainerModal: {
            height: "x1fb2l0r",
            $$css: true
        },
        error: {
            backgroundColor: "x1o4ak67",
            color: "xvwrcih",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        phoneNumberSectionWrapper: {
            width: "x1m258z3",
            $$css: true
        },
        spacer: {
            height: "xsdox4t",
            $$css: true
        },
        marginBottom8: {
            marginBottom: "xefnzgg",
            $$css: true
        },
        marginBottom4: {
            marginBottom: "x4tpdpg",
            $$css: true
        },
        marginBottom24: {
            marginBottom: "x14mdic9",
            $$css: true
        },
        paddingVert12: {
            paddingTop: "x1xrf6ya",
            paddingBottom: "xscbp6u",
            $$css: true
        },
        paddingHoriz16: {
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        textAlignCenter: {
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    function C({ initialCountryId, initialPhoneNumber, isLinkingPageLoading, onClickLinkWithQr, onSubmitPhoneNumber, showUpdatePrimaryAppBanner }) {
        const m = useState(function() {
            if (initialPhoneNumber != null) {
                return o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getCountryCodeIso(initialPhoneNumber);
            }
            const e = initialCountryId == null ? null : initialCountryId.toUpperCase();
            if (e != null && r("WAIsoToCc")[e] != null) {
                return e;
            }
            return "US";
        });
        const _ = m[0];
        const h = m[1];
        const C = useState(function() {
            if (initialPhoneNumber == null) {
                return "";
            }
            return o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").cleanPhoneNumberInputValue(initialPhoneNumber).phoneNumberWithoutCountryCode;
        });
        const S = C[0];
        const R = C[1];
        const ERef = useRef(null);
        const k = useState(false);
        const shouldDisplayError = k[0];
        const T = k[1];
        const D = useCallback(function() {
            if (_ != null && o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(r("WAIsoToCc")[_], S, "pn_linking")) {
                const e = `${r("WAIsoToCc")[_]}${S}`;
                onSubmitPhoneNumber(e);
            } else {
                ERef.current?.focus();
                T(true);
            }
        }, [
            onSubmitPhoneNumber,
            S,
            _
        ]);
        const x = useCallback(function(e, t) {
            T(false);
            h(e);
            R(t);
        }, []);
        const onPhoneNumberLengthExceeded = useCallback(function() {
            T(true);
        }, []);
        const P = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
            manualHold: true,
            shouldUseNavigationAsInteraction: true,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN
        });
        const { failInteraction, startInteraction, stopInteraction } = P;
        const A = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            startInteraction();
            yield onClickLinkWithQr();
        }), [
            onClickLinkWithQr,
            startInteraction
        ]);
        const F = s._("Enter phone number");
        const O = s._("Select a country and enter your phone number.");
        const B = o("WAWebHybridRegGating").shouldFollowAppTheme();
        const Component = r("WAWebFlexItem.react");
        const Component_1 = r("WAWebFlexItem.react");
        const Component_2 = r("WAWebAlternateDeviceLinkingLink.react");
        const Component_3 = r("WAWebFlexItem.react");
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        return <><L shouldShowUpdatePrimaryErrorBanner={showUpdatePrimaryAppBanner}/><Component_4 testid="link-device-phone-number-entry-screen" align="center" xstyle={B ? v() : o("WDSThemes").WDSLightTheme}><Component xstyle={[
            y.marginBottom4,
            y.textAlignCenter
        ]}>{d.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
            theme: B ? "wds" : undefined,
            value: F
        })}</Component><Component_1 xstyle={y.textAlignCenter}>{d.jsx(o("WAWebLinkDeviceCommonComponents.react").Subtitle, {
            value: O
        })}</Component_1><B12 shouldDisplayError={shouldDisplayError} phoneNumberWithoutCountryCode={S} selectedCountryId={_} onSubmit={D} onChangePhoneNumber={x} onChangeSelectedCountry={h} onPhoneNumberLengthExceeded={onPhoneNumberLengthExceeded} actionButtonText={r("WAWebFbtCommon")("Next")} isLinkingPageLoading={isLinkingPageLoading} surface="link-device-phone-number" onFailInteraction={failInteraction} onStopInteraction={stopInteraction}/><Component_3><Component_2 codeType={o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE} onClick={A}/></Component_3></Component_4></>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function B12(t) {
        const n = o("react-compiler-runtime").c(33);
        const { actionButtonText, isInsideModal, isLinkingPageLoading, onChangePhoneNumber, onChangeSelectedCountry, onFailInteraction, onPhoneNumberLengthExceeded, onStopInteraction, onSubmit, phoneNumberWithoutCountryCode, selectedCountryId, shouldDisplayError, surface } = t;
        const L = isInsideModal === undefined ? false : isInsideModal;
        const E = isLinkingPageLoading === undefined ? false : isLinkingPageLoading;
        const k = surface === undefined ? "default" : surface;
        let I;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION
            };
            n[0] = I;
        } else {
            I = n[0];
        }
        const T = o("useWAWebCountries").useCountries(I);
        const { error, value } = T;
        let $;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            $ = [];
            n[1] = $;
        } else {
            $ = n[1];
        }
        const P = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), $);
        let N;
        let M;
        if (n[2] !== value || n[3] !== E || n[4] !== onFailInteraction || n[5] !== onStopInteraction || n[6] !== P.error || n[7] !== P.loading) {
            N = function() {
                if (P.error && onFailInteraction) {
                    onFailInteraction(P.error);
                } else if (onStopInteraction != null && !P.loading && !P.error && E !== true && value != null) {
                    onStopInteraction();
                }
            };
            M = [
                value,
                E,
                onFailInteraction,
                onStopInteraction,
                P.error,
                P.loading
            ];
            n[2] = value;
            n[3] = E;
            n[4] = onFailInteraction;
            n[5] = onStopInteraction;
            n[6] = P.error;
            n[7] = P.loading;
            n[8] = N;
            n[9] = M;
        } else {
            N = n[8];
            M = n[9];
        }
        useEffect(N, M);
        if (P.loading || P.error || E === true || value == null) {
            if (P.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[AltDeviceLink] PhoneNumEntry emoji load failed"
                ]))).catching(P.error).sendLogs("alt-device-linking load error", {
                    sampling: 0.01
                });
            } else if (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[AltDeviceLink] PhoneNumEntry countries load failed"
                ]))).catching(error).sendLogs("alt-device-linking load error", {
                    sampling: 0.01
                });
            }
            const w = L ? y.spinnerContainerModal : y.spinnerContainer;
            let A;
            if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = r("WAWebFlexItem.react");
                A = <Component>{d.jsx(r("CometHeroHoldTrigger.react"), {
                    description: "WAWebLinkDevicePhoneNumberEntryScreen",
                    hold: true
                })}{d.jsx(o("WAWebSpinner.react").Spinner, {})}</Component>;
                n[10] = A;
            } else {
                A = n[10];
            }
            let F;
            if (n[11] !== w) {
                const Component = o("WAWebFlex.react").FlexColumn;
                F = <Component align="center" justify="around" xstyle={w}>{A}</Component>;
                n[11] = w;
                n[12] = F;
            } else {
                F = n[12];
            }
            return F;
        }
        const O = k === "link-device-phone-number" && shouldDisplayError;
        const B = k === "link-device-phone-number" ? o("WAWebHybridRegGating").shouldFollowAppTheme() : o("WAWebHybridRegGating").isHybridRegEnabled();
        const W = B ? "wds" : undefined;
        let q;
        if (n[13] !== value || n[14] !== onChangePhoneNumber || n[15] !== onChangeSelectedCountry || n[16] !== onPhoneNumberLengthExceeded || n[17] !== onSubmit || n[18] !== phoneNumberWithoutCountryCode || n[19] !== selectedCountryId || n[20] !== shouldDisplayError || n[21] !== k || n[22] !== W) {
            const Component = r("WAWebCountryPhoneNumberInput.react");
            q = <Component countries={value} shouldDisplayError={shouldDisplayError} phoneNumberWithoutCountryCode={phoneNumberWithoutCountryCode} selectedCountryId={selectedCountryId} onChangePhoneNumber={onChangePhoneNumber} onChangeSelectedCountry={onChangeSelectedCountry} onPhoneNumberLengthExceeded={onPhoneNumberLengthExceeded} onSubmit={onSubmit} surface={k} theme={W}/>;
            n[13] = value;
            n[14] = onChangePhoneNumber;
            n[15] = onChangeSelectedCountry;
            n[16] = onPhoneNumberLengthExceeded;
            n[17] = onSubmit;
            n[18] = phoneNumberWithoutCountryCode;
            n[19] = selectedCountryId;
            n[20] = shouldDisplayError;
            n[21] = k;
            n[22] = W;
            n[23] = q;
        } else {
            q = n[23];
        }
        let U;
        if (n[24] !== O) {
            U = O ? <R/> : <S/>;
            n[24] = O;
            n[25] = U;
        } else {
            U = n[25];
        }
        let V;
        if (n[26] !== actionButtonText || n[27] !== onSubmit) {
            const Component = o("WAWebButton.react").Button;
            const Component_1 = r("WAWebFlexItem.react");
            V = actionButtonText != null && <Component_1 xstyle={y.marginBottom24} align="center"><Component type="primary" onClick={onSubmit} testid="link-device-phone-number-entry-next-button">{actionButtonText}</Component></Component_1>;
            n[26] = actionButtonText;
            n[27] = onSubmit;
            n[28] = V;
        } else {
            V = n[28];
        }
        let H;
        if (n[29] !== V || n[30] !== q || n[31] !== U) {
            const Component = o("WAWebFlex.react").FlexColumn;
            H = <Component align="stretch" xstyle={y.phoneNumberSectionWrapper}>{q}{U}{V}</Component>;
            n[29] = V;
            n[30] = q;
            n[31] = U;
            n[32] = H;
        } else {
            H = n[32];
        }
        return H;
    }
    function v() {
        if (o("WAWebUserPrefsGeneral").getSystemThemeMode()) {
            return o("WDSThemes").WDSSystemTheme;
        }
        if (o("WAWebThemeContext").getTheme() === "dark") {
            return o("WDSThemes").WDSDarkTheme;
        }
        return o("WDSThemes").WDSLightTheme;
    }
    function S() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = d.jsx(r("WAWebFlexItem.react"), {
                xstyle: y.spacer
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function R() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                y.error,
                y.marginBottom8,
                y.paddingVert12,
                y.paddingHoriz16
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            n = <Component_1 alignSelf="center" xstyle={t} align="center" justify="center"><Component><span id={h}>{s._("A valid phone number is required.")}</span></Component></Component_1>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_shouldShowUpdatePrimaryErrorBanner = e.shouldShowUpdatePrimaryErrorBanner;
        if (e_shouldShowUpdatePrimaryErrorBanner === true) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = s._("Update WhatsApp on phone");
                t[0] = a;
            } else {
                a = t[0];
            }
            const header = a;
            let l;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                const u = s._("This feature is not available on the current version of WhatsApp on your phone. Please update the app and try again.");
                l = d.jsx(r("WAWebLoggedOutBanner.react"), {
                    header,
                    text: u,
                    category: "warning"
                });
                t[1] = l;
            } else {
                l = t[1];
            }
            return l;
        }
        return null;
    }
    l.LinkWithPhoneNumberEntryScreen = C;
    l.PhoneNumberSection = B12;
}, 226);