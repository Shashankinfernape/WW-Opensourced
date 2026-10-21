__d("WAWebSmsRegistrationConfirmation.react", [
    "fbt",
    "WAIsoToCc",
    "WAWebFlex.react",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceCommonStrings",
    "WAWebLinkDeviceInstructionsList.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "WAWebWdsIllPhoneTextDownloadV2Icon.react",
    "WDSButton.react",
    "WDSIllustrationWdsIllPhoneTextDownload.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "once",
    "react",
    "react-compiler-runtime",
    "useVisibility"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        continueButton: {
            minWidth: "x173radd",
            $$css: true
        },
        container: {
            flexDirection: "x1q0g3np",
            "@media (max-width: 600px)_flexDirection": "x3wxgri",
            $$css: true
        },
        containerWds: {
            color: "x14ug900",
            $$css: true
        },
        contentColumn: {
            "@media (max-width: 600px)_alignItems": "xcjwdqn",
            $$css: true
        },
        illustrationColumn: {
            width: "x9r4l05",
            "@media (max-width: 600px)_marginBottom": "xudy9kh",
            $$css: true
        }
    };
    function d(e) {
        const a = o("react-compiler-runtime").c(61);
        const { enableProductMetricsLogging, navigationPending, onBack, onContinue, onRetry, phoneNumberWithoutCountryCode, providerNumber, qplSurface, selectedCountryId, surface, theme } = e;
        const enableProductMetricsLogging_1 = enableProductMetricsLogging === undefined ? true : enableProductMetricsLogging;
        const S = navigationPending === undefined ? false : navigationPending;
        const R = surface === undefined ? "link-device-phone-number" : surface;
        const L = R === "guest-calling-post-call";
        let onVisible;
        if (a[0] !== enableProductMetricsLogging_1 || a[1] !== qplSurface) {
            onVisible = r("once")(function() {
                if (enableProductMetricsLogging_1) {
                    o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_SCREEN_LOADED, undefined, qplSurface);
                }
            });
            a[0] = enableProductMetricsLogging_1;
            a[1] = qplSurface;
            a[2] = onVisible;
        } else {
            onVisible = a[2];
        }
        let k;
        if (a[3] !== onVisible) {
            k = {
                onVisible
            };
            a[3] = onVisible;
            a[4] = k;
        } else {
            k = a[4];
        }
        const I = r("useVisibility")(k);
        const T = I[0];
        let D;
        if (a[5] !== phoneNumberWithoutCountryCode || a[6] !== selectedCountryId) {
            D = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").formatPhoneNumberInput({
                phoneNumberWithoutCountryCode,
                countryCodeIso: selectedCountryId
            });
            a[5] = phoneNumberWithoutCountryCode;
            a[6] = selectedCountryId;
            a[7] = D;
        } else {
            D = a[7];
        }
        const x = D;
        const $ = r("WAIsoToCc")[selectedCountryId] ?? "";
        const P = theme === "wds" ? `+${$}` : $;
        const N = x?.formattedInputValue != null ? `${P} ${x?.formattedInputValue}` : `${P} ${phoneNumberWithoutCountryCode}`;
        const M = theme === "wds" && c.containerWds;
        let w;
        if (a[8] !== M) {
            w = [
                c.container,
                M
            ];
            a[8] = M;
            a[9] = w;
        } else {
            w = a[9];
        }
        let A;
        if (a[10] === Symbol.for("react.memo_cache_sentinel")) {
            A = s._("Register on your phone");
            a[10] = A;
        } else {
            A = a[10];
        }
        let F;
        if (a[11] !== theme) {
            const Component = o("WAWebFlex.react").FlexRow;
            F = <Component>{u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
                value: A,
                theme
            })}</Component>;
            a[11] = theme;
            a[12] = F;
        } else {
            F = a[12];
        }
        let O;
        if (a[13] !== N) {
            O = s._("SMS sent to {phone}", [
                s._param("phone", N)
            ]);
            a[13] = N;
            a[14] = O;
        } else {
            O = a[14];
        }
        let B;
        if (a[15] === Symbol.for("react.memo_cache_sentinel")) {
            B = s._("Wrong number?");
            a[15] = B;
        } else {
            B = a[15];
        }
        const W = theme === "wds";
        const q = theme !== "wds";
        let U;
        if (a[16] !== enableProductMetricsLogging_1 || a[17] !== onBack || a[18] !== qplSurface) {
            U = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (enableProductMetricsLogging_1) {
                        o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_WRONG_NUMBER_CLICKED, undefined, qplSurface);
                    }
                    onBack();
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            a[16] = enableProductMetricsLogging_1;
            a[17] = onBack;
            a[18] = qplSurface;
            a[19] = U;
        } else {
            U = a[19];
        }
        let V;
        if (a[20] !== W || a[21] !== q || a[22] !== U) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
            V = <Component testId="link_device_registration_wrong_number_link" text={B} isBold={W} showArrow={false} showUnderline={q} onClick={U}/>;
            a[20] = W;
            a[21] = q;
            a[22] = U;
            a[23] = V;
        } else {
            V = a[23];
        }
        let H;
        if (a[24] !== O || a[25] !== V) {
            const Component = o("WAWebFlex.react").FlexRow;
            H = <Component columnGap={8}>{O}.{V}</Component>;
            a[24] = O;
            a[25] = V;
            a[26] = H;
        } else {
            H = a[26];
        }
        let G;
        if (a[27] !== F || a[28] !== H) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            G = <Component_1><Component rowGap={12}>{F}{H}</Component></Component_1>;
            a[27] = F;
            a[28] = H;
            a[29] = G;
        } else {
            G = a[29];
        }
        let z;
        if (a[30] !== enableProductMetricsLogging_1 || a[31] !== L || a[32] !== onRetry || a[33] !== providerNumber || a[34] !== qplSurface || a[35] !== theme) {
            const Component = o("WAWebFlex.react").FlexRow;
            z = <Component><M6Component enableProductMetricsLogging={enableProductMetricsLogging_1} onRetry={onRetry} providerNumber={providerNumber} shouldUseWDS={L} qplSurface={qplSurface} theme={theme}/></Component>;
            a[30] = enableProductMetricsLogging_1;
            a[31] = L;
            a[32] = onRetry;
            a[33] = providerNumber;
            a[34] = qplSurface;
            a[35] = theme;
            a[36] = z;
        } else {
            z = a[36];
        }
        let j;
        if (a[37] !== enableProductMetricsLogging_1 || a[38] !== L || a[39] !== S || a[40] !== onContinue || a[41] !== qplSurface || a[42] !== theme) {
            const Component = r("WDSButton.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            const Component_3 = o("WAWebFlex.react").FlexColumn;
            j = theme === "wds" && onContinue != null && <Component_3 rowGap={16}><Component_1><Component disabled={S} label={s._("Link device")} loading={S} testid="link_device_registration_link_device_button" onPress={function() {
                if (enableProductMetricsLogging_1) {
                    o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_CONTINUE_CLICKED, undefined, qplSurface);
                }
                onContinue();
            }} variant="filled" widthMode="fit" xstyle={[
                c.continueButton,
                S && L && o("WDSThemes").WDSLightTheme
            ]}/></Component_1><Component_2>{u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                testId: "link_device_registration_contact_support_link",
                text: s._("Need help?"),
                isBold: true,
                showArrow: false,
                showUnderline: false,
                url: "https://www.whatsapp.com/contact"
            })}</Component_2></Component_3>;
            a[37] = enableProductMetricsLogging_1;
            a[38] = L;
            a[39] = S;
            a[40] = onContinue;
            a[41] = qplSurface;
            a[42] = theme;
            a[43] = j;
        } else {
            j = a[43];
        }
        let K;
        if (a[44] !== theme) {
            const Component = o("WAWebFlex.react").FlexRow;
            K = theme !== "wds" && <Component columnGap={8}>{s._("Need help?")}{u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                testId: "link_device_registration_contact_support_link",
                text: s._("Contact WhatsApp"),
                isBold: false,
                showArrow: false,
                showUnderline: true,
                url: "https://www.whatsapp.com/contact"
            })}</Component>;
            a[44] = theme;
            a[45] = K;
        } else {
            K = a[45];
        }
        let Q;
        if (a[46] !== z || a[47] !== j || a[48] !== K) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            Q = <Component_1><Component rowGap={32}>{z}{j}{K}</Component></Component_1>;
            a[46] = z;
            a[47] = j;
            a[48] = K;
            a[49] = Q;
        } else {
            Q = a[49];
        }
        let X;
        if (a[50] !== G || a[51] !== Q) {
            const Component = o("WAWebFlex.react").FlexColumn;
            X = <Component rowGap={32} xstyle={c.contentColumn}>{G}{Q}</Component>;
            a[50] = G;
            a[51] = Q;
            a[52] = X;
        } else {
            X = a[52];
        }
        let Y;
        if (a[53] !== L || a[54] !== theme) {
            const Component = o("WAWebFlex.react").FlexColumn;
            Y = !L && <Component align="center" alignSelf="center" xstyle={c.illustrationColumn} shrink={0}>{theme === "wds" ? u.jsx(o("WAWebWdsIllPhoneTextDownloadV2Icon.react").WdsIllPhoneTextDownloadV2Icon, {}) : u.jsx(r("WDSIllustrationWdsIllPhoneTextDownload.react"), {
                testid: "wds-ill-phone-text-download"
            })}</Component>;
            a[53] = L;
            a[54] = theme;
            a[55] = Y;
        } else {
            Y = a[55];
        }
        let J;
        if (a[56] !== T || a[57] !== X || a[58] !== Y || a[59] !== w) {
            const Component = o("WAWebFlex.react").FlexRow;
            J = <Component columnGap={20} ref={T} xstyle={w}>{X}{Y}</Component>;
            a[56] = T;
            a[57] = X;
            a[58] = Y;
            a[59] = w;
            a[60] = J;
        } else {
            J = a[60];
        }
        return J;
    }
    function M6Component(e) {
        const t = o("react-compiler-runtime").c(9);
        const { enableProductMetricsLogging, onRetry, providerNumber, qplSurface, shouldUseWDS, theme } = e;
        const d = shouldUseWDS === undefined ? false : shouldUseWDS;
        let m;
        if (t[0] !== enableProductMetricsLogging || t[1] !== onRetry || t[2] !== providerNumber || t[3] !== qplSurface || t[4] !== theme) {
            m = theme === "wds" ? [
                <P7Component key="smsregistrationconfirmationinstruction1" enableProductMetricsLogging={enableProductMetricsLogging} onRetry={onRetry} providerNumber={providerNumber} qplSurface={qplSurface} theme={theme}/>,
                <_ key="smsregistrationconfirmationinstruction2"/>,
                <H3Component key="smsregistrationconfirmationinstruction3" theme={theme}/>
            ] : [
                <P7Component key="smsregistrationconfirmationinstruction1" enableProductMetricsLogging={enableProductMetricsLogging} onRetry={onRetry} providerNumber={providerNumber} qplSurface={qplSurface} theme={theme}/>,
                <F9Component key="smsregistrationconfirmationinstruction2"/>,
                <G11 key="smsregistrationconfirmationinstruction3"/>,
                <H3Component key="smsregistrationconfirmationinstruction4" theme={theme}/>
            ];
            t[0] = enableProductMetricsLogging;
            t[1] = onRetry;
            t[2] = providerNumber;
            t[3] = qplSurface;
            t[4] = theme;
            t[5] = m;
        } else {
            m = t[5];
        }
        const instructions = m;
        let C;
        if (t[6] !== instructions || t[7] !== d) {
            C = u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
                instructionSource: "smsreg",
                instructions,
                shouldUseWDS: d
            });
            t[6] = instructions;
            t[7] = d;
            t[8] = C;
        } else {
            C = t[8];
        }
        return C;
    }
    function P7Component(e) {
        const t = o("react-compiler-runtime").c(20);
        const { enableProductMetricsLogging, onRetry, providerNumber, qplSurface, theme } = e;
        const d = theme === "wds";
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Check your phone for an {=m1} from WhatsApp.", [
                s._implicitParam("=m1", <Y4Component>{s._("SMS")}</Y4Component>)
            ]);
            t[0] = m;
        } else {
            m = t[0];
        }
        const p = m;
        let _;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            _ = o("WAWebLinkDeviceCommonStrings").getResendSmsLinkLabel();
            t[1] = _;
        } else {
            _ = t[1];
        }
        const f = _;
        let g;
        if (t[2] !== enableProductMetricsLogging || t[3] !== onRetry || t[4] !== qplSurface) {
            g = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (enableProductMetricsLogging) {
                        o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_CONFIRMATION_RESEND_SMS_CLICKED, undefined, qplSurface);
                    }
                    yield onRetry();
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[2] = enableProductMetricsLogging;
            t[3] = onRetry;
            t[4] = qplSurface;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = g;
        if (d) {
            let C;
            if (t[6] !== providerNumber) {
                C = providerNumber != null && providerNumber.length > 0 ? s._("Check your phone for an {=m1} from WhatsApp number {provider_number}.", [
                    s._param("provider_number", <Y4Component>{providerNumber}</Y4Component>),
                    s._implicitParam("=m1", <Y4Component>{s._("SMS")}</Y4Component>)
                ]) : p;
                t[6] = providerNumber;
                t[7] = C;
            } else {
                C = t[7];
            }
            let b;
            if (t[8] !== h) {
                const Component = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
                b = s._("Didn't get it? {resend_sms}", [
                    s._param("resend_sms", <Component testId="link_device_registration_resend_sms_link" text={f} isBold showArrow={false} showUnderline={false} onClick={h}/>)
                ]);
                t[8] = h;
                t[9] = b;
            } else {
                b = t[9];
            }
            let v;
            if (t[10] !== C || t[11] !== b) {
                v = <>{C} {b}</>;
                t[10] = C;
                t[11] = b;
                t[12] = v;
            } else {
                v = t[12];
            }
            return v;
        }
        let S;
        if (t[13] !== providerNumber) {
            S = providerNumber != null && providerNumber.length > 0 ? s._("Check your phone for an {=m1} from WhatsApp number {provider_number}.", [
                s._param("provider_number", providerNumber),
                s._implicitParam("=m1", <Y4Component>{s._("SMS")}</Y4Component>)
            ]) : p;
            t[13] = providerNumber;
            t[14] = S;
        } else {
            S = t[14];
        }
        let R;
        if (t[15] !== h) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
            R = o("WAWebLinkDeviceCommonStrings").getDidntReceiveSmsLabel(<Component testId="link_device_registration_resend_sms_link" text={f} isBold={false} showArrow={false} showUnderline onClick={h}/>);
            t[15] = h;
            t[16] = R;
        } else {
            R = t[16];
        }
        let L;
        if (t[17] !== S || t[18] !== R) {
            L = <>{S} {R}</>;
            t[17] = S;
            t[18] = R;
            t[19] = L;
        } else {
            L = t[19];
        }
        return L;
    }
    function _() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("{=m0} the message link to open or download WhatsApp, and follow the steps to {=m2} your account.", [
                s._implicitParam("=m0", <Y4Component>{s._("Tap")}</Y4Component>),
                s._implicitParam("=m2", <Y4Component>{s._("register")}</Y4Component>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function F9Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("{=m0} the message link to open or download WhatsApp.", [
                s._implicitParam("=m0", <Y4Component>{s._("Tap")}</Y4Component>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function G11() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Follow the steps to {=m1} your account.", [
                s._implicitParam("=m1", <Y4Component>{s._("register")}</Y4Component>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function H3Component(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_theme = e.theme;
        let r;
        if (t[0] !== e_theme) {
            r = <>{e_theme === "wds" ? s._("Next, you can {=m1} this device to your WhatsApp account.", [
                s._implicitParam("=m1", <Y4Component>{s._("link")}</Y4Component>)
            ]) : <>{s._("To use WhatsApp on this device, {=m1} your account from your phone.", [
                s._implicitParam("=m1", <Y4Component>{s._("link")}</Y4Component>)
            ])} {u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                testId: "link_device_registration_learn_more_link",
                text: s._("Learn more"),
                url: "https://faq.whatsapp.com/497209988909970",
                isBold: e_theme === "wds",
                showArrow: false,
                showUnderline: e_theme !== "wds"
            })}</>}</>;
            t[0] = e_theme;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function Y4Component(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_children = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "x1rg5ohu xk50ysn x1o2sk6j"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_children) {
            a = <strong {...babelHelpers.extends({}, r, {
                children: e_children
            })}/>;
            t[1] = e_children;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = d;
}, 226);