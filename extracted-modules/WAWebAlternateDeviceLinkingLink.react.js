__d("WAWebAlternateDeviceLinkingLink.react", [
    "fbt",
    "WAWebClickable.react",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebWaBrandArrowRightIconWrapper.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        alternateLinkingMethod: {
            cursor: "x1ypdohk",
            textDecorationLine: "xujl8zx",
            textDecorationColor: "x1vs5fdg",
            textDecorationThickness: "xewurvo",
            textUnderlineOffset: "x3pynha",
            color: "xowvryd",
            fontWeight: "xk50ysn",
            ":hover_color": "xcul1l7",
            ":focus-visible_color": "x90lxvo",
            $$css: true
        },
        alternateLinkingMethodWindows: {
            textDecorationLine: "xkrqix3",
            color: "xo1mcw5",
            $$css: true
        },
        linkContainer: {
            width: "x9r4l05",
            $$css: true
        }
    };
    function m() {
        return s._("Log in with phone number");
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p() {
        return s._("Log in with QR code");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function Component(t) {
        const n = o("react-compiler-runtime").c(17);
        const { codeType, enabled, onClick } = t;
        const s = enabled === undefined ? true : enabled;
        let u;
        if (n[0] !== codeType) {
            u = codeType === o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE ? p() : m();
            n[0] = codeType;
            n[1] = u;
        } else {
            u = n[1];
        }
        const _ = u;
        const f = codeType === o("WAWebLinkDeviceCodeViewCodeType").LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE ? "link_device_phone_number_qr_link" : "link_device_qr_phone_number_link";
        let g;
        if (n[2] !== _) {
            const Component = o("WAWebFlex.react").FlexColumn;
            g = <Component>{_}</Component>;
            n[2] = _;
            n[3] = g;
        } else {
            g = n[3];
        }
        let h;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            h = <Component>{c.jsx(r("WAWebWaBrandArrowRightIconWrapper.react"), {})}</Component>;
            n[4] = h;
        } else {
            h = n[4];
        }
        let y;
        if (n[5] !== g) {
            const Component = o("WAWebFlex.react").FlexRow;
            y = <Component paddingTop={4} columnGap={4} align="start" paddingEnd={r("WAWebEnvironment").isWindows ? 40 : undefined} paddingBottom={r("WAWebEnvironment").isWindows ? 20 : undefined} paddingStart={40} justify="center" xstyle={r("WAWebEnvironment").isWindows && d.linkContainer}>{g}{h}</Component>;
            n[5] = g;
            n[6] = y;
        } else {
            y = n[6];
        }
        const C = y;
        if (!s) {
            let b;
            if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
                b = ({
                    0: {
                        className: "xujl8zx x1vs5fdg xewurvo x3pynha xowvryd xk50ysn x90lxvo xt0e3qv xbyyjgo x1i44hl6"
                    },
                    1: {
                        className: "x1vs5fdg xewurvo x3pynha xk50ysn x90lxvo xkrqix3 xo1mcw5 xt0e3qv xbyyjgo x1i44hl6"
                    }
                })[!!r("WAWebEnvironment").isWindows << 0];
                n[7] = b;
            } else {
                b = n[7];
            }
            let v;
            if (n[8] !== b || n[9] !== C) {
                v = <span {...babelHelpers.extends({}, b, {
                    children: C
                })}/>;
                n[8] = b;
                n[9] = C;
                n[10] = v;
            } else {
                v = n[10];
            }
            return v;
        }
        let S;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            S = (e || (e = r("stylex")))([
                d.alternateLinkingMethod,
                r("WAWebEnvironment").isWindows && d.alternateLinkingMethodWindows
            ]);
            n[11] = S;
        } else {
            S = n[11];
        }
        let R;
        if (n[12] !== onClick || n[13] !== S || n[14] !== f || n[15] !== C) {
            const Component = o("WAWebClickable.react").Clickable;
            R = <Component as="div" dataTestId={f} className={S} onClick={onClick}>{C}</Component>;
            n[12] = onClick;
            n[13] = S;
            n[14] = f;
            n[15] = C;
            n[16] = R;
        } else {
            R = n[16];
        }
        return R;
    }
    l.default = Component;
}, 226);