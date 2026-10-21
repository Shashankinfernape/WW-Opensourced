__d("WAWebSmsRegistrationPhoneNumberInput.react", [
    "fbt",
    "CometHeroHoldTrigger.react",
    "WAIsoToCc",
    "WAWebAppRootInteractionContext.react",
    "WAWebCountriesUtils",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebHybridRegGating",
    "WAWebInteractionTracePolicy",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceFlagEmojiSetup",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebLoginPromptFooter.react",
    "WAWebODS",
    "WAWebPhoneNumberCaptureFields.react",
    "WAWebPhoneNumberCaptureValidation",
    "WAWebSmsRegistrationConfirmation.react",
    "WAWebSmsRegistrationSendSmsCall",
    "WAWebSmsRegistrationSubtitle.react",
    "WAWebSpinner.react",
    "WAWebWaBrandArrowRightIconWrapper.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "react",
    "useVisibility",
    "useWAWebAsync",
    "useWAWebCountries"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useImperativeHandle, useMemo, useState } = c;
    function f({ accessSessionId, enableProductMetricsLogging = true, experimentBucket, imperativeRef, navigationPending = false, onBack, onContinue, onLogin, onPhaseChange, requestEntryPoint, setApiCmd, surface = "link-device-phone-number" }) {
        const k = surface === "guest-calling-post-call";
        const qplSurface = k ? surface : undefined;
        const T = k || o("WAWebHybridRegGating").isHybridRegEnabled();
        const showUnderline = k || !T;
        const ctaText = k ? s._("Get started") : undefined;
        const $ = ctaText ?? r("WAWebFbtCommon")("Continue");
        const P = useState("");
        const phoneNumberWithoutCountryCode = P[0];
        const M = P[1];
        const w = useState("US");
        const selectedCountryId = w[0];
        const onChangeSelectedCountry = w[1];
        const O = useState(false);
        const B = O[0];
        const W = O[1];
        const q = useState(false);
        const U = q[0];
        const V = q[1];
        const H = useState();
        const G = H[0];
        const z = H[1];
        const j = useCallback(function() {
            M("");
            z(null);
            onPhaseChange?.("phone-number");
        }, [
            onPhaseChange
        ]);
        const K = g(G);
        const handleBack = useCallback(function() {
            if (K) {
                j();
                return true;
            }
            if (onBack != null) {
                return onBack();
            }
            return false;
        }, [
            onBack,
            j,
            K
        ]);
        useImperativeHandle(imperativeRef, function() {
            return {
                handleBack
            };
        }, [
            handleBack
        ]);
        const onChangePhoneNumber = useCallback(function(e, t) {
            M(t.substr(0, 10));
        }, []);
        const Y = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
            manualHold: false,
            shouldUseNavigationAsInteraction: true,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN
        });
        const Y_startInteraction = Y.startInteraction;
        const Z = useMemo(function() {
            return B || U || !r("WAWebPhoneNumberCaptureValidation")(selectedCountryId, phoneNumberWithoutCountryCode);
        }, [
            U,
            B,
            phoneNumberWithoutCountryCode,
            selectedCountryId
        ]);
        const ee = r("useVisibility")({
            onVisible: function() {
                if (enableProductMetricsLogging) {
                    o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(experimentBucket == null ? o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_PN_SCREEN_LOADED : o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_LOADED, undefined, qplSurface);
                }
            }
        });
        const te = ee[0];
        const ne = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []);
        const re = o("useWAWebCountries").useCountries({
            filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION
        });
        const { error, value } = re;
        if (value == null || error != null || ne.loading || ne.error) {
            const Component = o("WAWebFlex.react").FlexRow;
            return <Component justify="center">{u.jsx(r("CometHeroHoldTrigger.react"), {
                description: "WAWebSmsRegistrationPhoneNumberInput",
                hold: true
            })}{u.jsx(o("WAWebSpinner.react").Spinner, {})}</Component>;
        }
        const ie = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!Z) {
                    if (enableProductMetricsLogging) {
                        o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(experimentBucket == null ? o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_PN_SCREEN_CONTINUE_CLICKED : o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_PN_SCREEN_CONTINUE_CLICKED, undefined, qplSurface);
                    }
                    if (k && !K) {
                        r("WAWebODS").incr("web.guest_calling.post_call.phone_submitted");
                    }
                    W(true);
                    const n = (r("WAIsoToCc")[selectedCountryId] ?? "") + phoneNumberWithoutCountryCode;
                    const a = yield o("WAWebSmsRegistrationSendSmsCall").sendSmsCall(n, requestEntryPoint, accessSessionId);
                    const s = a?.retry_after;
                    if (a?.status === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.ERROR && s != null && s > 0) {
                        V(true);
                        window.setTimeout(function() {
                            V(false);
                        }, s * 1000);
                    }
                    z(a);
                    onPhaseChange?.(g(a) ? "confirmation" : "phone-number");
                    W(false);
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        if (K) {
            const Component = r("WAWebSmsRegistrationConfirmation.react");
            return <Component enableProductMetricsLogging={enableProductMetricsLogging} navigationPending={navigationPending} selectedCountryId={selectedCountryId} phoneNumberWithoutCountryCode={phoneNumberWithoutCountryCode} onBack={j} onContinue={onContinue} onRetry={ie} providerNumber={G?.provider_number} qplSurface={qplSurface} surface={surface} theme={T ? "wds" : undefined}/>;
        }
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = o("WAWebFlex.react").FlexRow;
        const Component_4 = r("WAWebPhoneNumberCaptureFields.react");
        const Component_5 = r("WAWebLinkDeviceScreenPrimaryButton.react");
        const Component_6 = o("WAWebFlex.react").FlexColumn;
        const Component_7 = o("WAWebFlex.react").FlexRow;
        const Component_8 = r("WAWebLoginPromptFooter.react");
        const Component_9 = o("WAWebFlex.react").FlexColumn;
        return <Component_9 rowGap={24} xstyle={T ? undefined : o("WDSThemes").WDSLightTheme} ref={te}><Component_3 alignSelf="center"><Component_2 rowGap={T ? 0 : 16}>{!k && <Component alignSelf="center">{u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
            value: s._("Enter your phone number"),
            theme: T ? "wds" : undefined
        })}</Component>}<Component_1>{u.jsx(o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitle, {
            ctaText,
            includesSmsText: !k,
            registrationNoticeType: k ? "sms-verification" : "data-rates",
            theme: T ? "wds" : undefined,
            useLandingStyle: k
        })}</Component_1></Component_2></Component_3><Component_7 alignSelf="center"><Component_6 rowGap={4} align="center"><Component_4 phoneNumberWithoutCountryCode={phoneNumberWithoutCountryCode} selectedCountryId={selectedCountryId} onChangePhoneNumber={onChangePhoneNumber} onChangeSelectedCountry={onChangeSelectedCountry} showCountrySelect={o("WAWebHybridRegGating").shouldShowCountrySelector()} surface={surface} onSubmit={function() {
            ie();
        }} error={G?.error_reason} theme={T ? "wds" : "default"}/><Component_5 text={$} onClick={ie} animate={false} disabled={Z} hostSurface={k ? "elevated" : "default"} testId="link-device-sms-pn-entry-continue-button" icon={u.jsx(r("WAWebWaBrandArrowRightIconWrapper.react"), {})} theme={T ? "wds" : undefined}/></Component_6></Component_7><Component_8 isBold={T && !k} onLogin={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!navigationPending) {
                if (!k) {
                    Y_startInteraction();
                }
                if (onLogin != null) {
                    onLogin();
                }
                if (setApiCmd != null) {
                    setApiCmd(null);
                }
            }
        })} showArrow={T ? false : undefined} showUnderline={showUnderline} theme={T ? "wds" : undefined} useDeemphasizedThemedColor={k} useLandingStyle={k}/></Component_9>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e) {
        return e?.status === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.SENT;
    }
    l.default = f;
}, 226);