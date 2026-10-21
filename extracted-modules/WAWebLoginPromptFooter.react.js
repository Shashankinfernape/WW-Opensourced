__d("WAWebLoginPromptFooter.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebSmsRegistrationSubtitle.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(18);
        const { isBold, onLogin, showArrow, showUnderline, theme, useDeemphasizedThemedColor, useLandingStyle } = e;
        const m = isBold === undefined ? false : isBold;
        const showArrow_1 = showArrow === undefined ? true : showArrow;
        const _ = showUnderline === undefined ? true : showUnderline;
        const useDeemphasizedThemedColor_1 = useDeemphasizedThemedColor === undefined ? false : useDeemphasizedThemedColor;
        const useLandingStyle_1 = useLandingStyle === undefined ? false : useLandingStyle;
        let h;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Already have an account?");
            t[0] = h;
        } else {
            h = t[0];
        }
        let y;
        if (t[1] !== theme || t[2] !== useLandingStyle_1) {
            const Component = o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitleText;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            y = <Component_1><Component theme={theme} useLandingStyle={useLandingStyle_1}>{h}</Component></Component_1>;
            t[1] = theme;
            t[2] = useLandingStyle_1;
            t[3] = y;
        } else {
            y = t[3];
        }
        let C;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Log in");
            t[4] = C;
        } else {
            C = t[4];
        }
        let b;
        if (t[5] !== m || t[6] !== onLogin || t[7] !== showArrow_1 || t[8] !== _ || t[9] !== useDeemphasizedThemedColor_1) {
            const Component = o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink;
            b = <Component isBold={m} onClick={onLogin} showArrow={showArrow_1} showUnderline={_} testId="link_device_registration_login_link" text={C} useDeemphasizedThemedColor={useDeemphasizedThemedColor_1}/>;
            t[5] = m;
            t[6] = onLogin;
            t[7] = showArrow_1;
            t[8] = _;
            t[9] = useDeemphasizedThemedColor_1;
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] !== b || t[12] !== theme || t[13] !== useLandingStyle_1) {
            const Component = o("WAWebSmsRegistrationSubtitle.react").SmsRegistrationSubtitleText;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            v = <Component_1><Component theme={theme} useLandingStyle={useLandingStyle_1}>{b}</Component></Component_1>;
            t[11] = b;
            t[12] = theme;
            t[13] = useLandingStyle_1;
            t[14] = v;
        } else {
            v = t[14];
        }
        let S;
        if (t[15] !== v || t[16] !== y) {
            const Component = o("WAWebFlex.react").FlexRow;
            S = <Component columnGap={8} alignSelf="center">{y}{v}</Component>;
            t[15] = v;
            t[16] = y;
            t[17] = S;
        } else {
            S = t[17];
        }
        return S;
    }
    l.default = c;
}, 226);