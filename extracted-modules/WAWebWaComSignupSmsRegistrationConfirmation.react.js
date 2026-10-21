__d("WAWebWaComSignupSmsRegistrationConfirmation.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceCommonStrings",
    "WAWebLinkDeviceInstructionsList.react",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "WAWebWdsIllPhoneTextDownloadV2Icon.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useVisibility"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        if (e.length === 11) {
            return `+${e.slice(0, 1)} (${e.slice(1, 4)}) ${e.slice(4, 7)}-${e.slice(7)}`;
        }
        return e;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(27);
        const { onBack, onLinkDevice, onRetry, phoneNumberWithoutCountryCode, providerNumber } = e;
        let f;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                onVisible
            };
            t[0] = f;
        } else {
            f = t[0];
        }
        const g = r("useVisibility")(f);
        const h = g[0];
        const y = `1${phoneNumberWithoutCountryCode}`;
        let C;
        if (t[1] !== y) {
            C = c(y);
            t[1] = y;
            t[2] = C;
        } else {
            C = t[2];
        }
        const b = C;
        let v;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            v = <Component>{u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
                value: s._("Register on your phone")
            })}</Component>;
            t[3] = v;
        } else {
            v = t[3];
        }
        let S;
        if (t[4] !== b) {
            S = s._("SMS sent to {phone}", [
                s._param("phone", b)
            ]);
            t[4] = b;
            t[5] = S;
        } else {
            S = t[5];
        }
        let R;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Wrong number?");
            t[6] = R;
        } else {
            R = t[6];
        }
        let L;
        if (t[7] !== onBack) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
            L = <Component testId="link_device_registration_wrong_number_link" text={R} isBold={false} showArrow={false} showUnderline onClick={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_WRONG_NUMBER_CLICKED);
                onBack();
            })}/>;
            t[7] = onBack;
            t[8] = L;
        } else {
            L = t[8];
        }
        let E;
        if (t[9] !== S || t[10] !== L) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const Component_2 = o("WAWebFlex.react").FlexRow;
            E = <Component_2><Component_1 rowGap={12}>{v}<Component columnGap={8}>{S}.{L}</Component></Component_1></Component_2>;
            t[9] = S;
            t[10] = L;
            t[11] = E;
        } else {
            E = t[11];
        }
        let k;
        if (t[12] !== onLinkDevice || t[13] !== onRetry || t[14] !== providerNumber) {
            const Component = o("WAWebFlex.react").FlexRow;
            k = <Component><P9Component onLinkDevice={onLinkDevice} onRetry={onRetry} providerNumber={providerNumber}/></Component>;
            t[12] = onLinkDevice;
            t[13] = onRetry;
            t[14] = providerNumber;
            t[15] = k;
        } else {
            k = t[15];
        }
        let I;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            I = s._("Need help?");
            t[16] = I;
        } else {
            I = t[16];
        }
        let T;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            T = <Component columnGap={8}>{I}{u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
                testId: "link_device_registration_contact_support_link",
                text: s._("Contact WhatsApp"),
                isBold: false,
                showArrow: false,
                showUnderline: true,
                url: "https://www.whatsapp.com/contact"
            })}</Component>;
            t[17] = T;
        } else {
            T = t[17];
        }
        let D;
        if (t[18] !== k) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            D = <Component_1><Component rowGap={32}>{k}{T}</Component></Component_1>;
            t[18] = k;
            t[19] = D;
        } else {
            D = t[19];
        }
        let x;
        if (t[20] !== D || t[21] !== E) {
            const Component = o("WAWebFlex.react").FlexColumn;
            x = <Component rowGap={32}>{E}{D}</Component>;
            t[20] = D;
            t[21] = E;
            t[22] = x;
        } else {
            x = t[22];
        }
        let $;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            $ = <Component align="center" alignSelf="center">{u.jsx(o("WAWebWdsIllPhoneTextDownloadV2Icon.react").WdsIllPhoneTextDownloadV2Icon, {})}</Component>;
            t[23] = $;
        } else {
            $ = t[23];
        }
        let P;
        if (t[24] !== h || t[25] !== x) {
            const Component = o("WAWebFlex.react").FlexRow;
            P = <Component columnGap={20} ref={h}>{x}{$}</Component>;
            t[24] = h;
            t[25] = x;
            t[26] = P;
        } else {
            P = t[26];
        }
        return P;
    }
    function onVisible() {
        o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_SCREEN_LOADED);
    }
    function P9Component(e) {
        const t = o("react-compiler-runtime").c(9);
        const { onLinkDevice, onRetry, providerNumber } = e;
        let l;
        if (t[0] !== onRetry || t[1] !== providerNumber) {
            l = <_ key="postreginstruction1" onRetry={onRetry} providerNumber={providerNumber}/>;
            t[0] = onRetry;
            t[1] = providerNumber;
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            s = <F10 key="postreginstruction2"/>;
            t[3] = s;
        } else {
            s = t[3];
        }
        let c;
        if (t[4] !== onLinkDevice) {
            c = <G12 key="postreginstruction3" onLinkDevice={onLinkDevice}/>;
            t[4] = onLinkDevice;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== l || t[7] !== c) {
            const instructions = [
                l,
                s,
                c
            ];
            d = u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
                instructionSource: "postreg",
                instructions
            });
            t[6] = l;
            t[7] = c;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const { onRetry, providerNumber } = e;
        let i;
        if (t[0] !== providerNumber) {
            i = providerNumber != null ? s._("Check your phone for an {=m1} from WhatsApp number {=m4}", [
                s._implicitParam("=m1", <H5Component>{s._("SMS")}</H5Component>),
                s._implicitParam("=m4", <H5Component>{s._("{provider_number}", [
                    s._param("provider_number", providerNumber)
                ])}</H5Component>)
            ]) : s._("Check your phone for an {=m1} from WhatsApp", [
                s._implicitParam("=m1", <H5Component>{s._("SMS")}</H5Component>)
            ]);
            t[0] = providerNumber;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebLinkDeviceCommonStrings").getResendSmsLinkLabel();
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        if (t[3] !== onRetry) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
            c = o("WAWebLinkDeviceCommonStrings").getDidntReceiveSmsLabel(<Component testId="link_device_registration_resend_sms_link" text={l} isBold={false} showArrow={false} showUnderline onClick={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_RESEND_SMS_CLICKED);
                yield onRetry();
            })}/>);
            t[3] = onRetry;
            t[4] = c;
        } else {
            c = t[4];
        }
        let d;
        if (t[5] !== i || t[6] !== c) {
            d = <>{i}. {c}</>;
            t[5] = i;
            t[6] = c;
            t[7] = d;
        } else {
            d = t[7];
        }
        return d;
    }
    function F10() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Tap the message link to open or download WhatsApp, and follow the steps to register your account.");
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function G12(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_onLinkDevice = e.onLinkDevice;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("To use WhatsApp on this device, link your account from your phone.");
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Link device");
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== e_onLinkDevice) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
            l = <>{a} <Component testId="link_device_registration_link_device_link" text={i} isBold={false} onClick={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType.REG_WACOM_CONFIRMATION_CONTINUE_CLICKED);
                e_onLinkDevice();
            })} showArrow={false} showUnderline/></>;
            t[2] = e_onLinkDevice;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function H5Component(e) {
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