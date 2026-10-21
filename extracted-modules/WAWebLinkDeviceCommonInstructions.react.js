__d("WAWebLinkDeviceCommonInstructions.react", [
    "fbt",
    "WAWebClickable.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebWhatsAppAppIcon.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcNorthEast.react",
    "WDSIconIosWdsIcSettingsGear.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        bold: {
            fontWeight: "x1xlr1w8",
            $$css: true
        },
        icon: {
            opacity: "x1ks1olk",
            color: "xowvryd",
            $$css: true
        },
        underline: {
            textDecorationLine: "xujl8zx",
            textDecorationColor: "x1vs5fdg",
            textDecorationThickness: "xewurvo",
            textUnderlineOffset: "x3pynha",
            $$css: true
        },
        noUnderlineLink: {
            color: "xo1mcw5",
            ":hover_color": "xyla9g4",
            ":hover_textDecorationLine": "x1sur9pj",
            ":hover_textDecorationColor": "x7v4iwh",
            ":hover_textDecorationThickness": "x1yp5wxd",
            ":hover_textUnderlineOffset": "xqyrhhy",
            $$css: true
        },
        moreHelpText: {
            cursor: "x1ypdohk",
            display: "x1rg5ohu",
            color: "xowvryd",
            fontWeight: "xk50ysn",
            ":hover_color": "xcul1l7",
            ":focus-visible_color": "x90lxvo",
            $$css: true
        },
        tcText: {
            cursor: "x1ypdohk",
            color: "x65c15g",
            textAlign: "x2b8uid",
            fontSize: "x1pg5gke",
            fontWeight: "xo1l8bm",
            lineHeight: "xetkqiv",
            letterSpacing: "xqhqf4p",
            ":hover_textDecoration": "xt0b8zv",
            $$css: true
        },
        waLogo: {
            borderStartStartRadius: "xrxyp3c",
            borderStartEndRadius: "xv0oops",
            borderEndEndRadius: "x1isl5vh",
            borderEndStartRadius: "xn8zj9a",
            $$css: true
        },
        iconThemed: {
            color: "x14ug900",
            opacity: "x1hc1fzr",
            $$css: true
        },
        moreHelpTextWindows: {
            color: "xo1mcw5",
            $$css: true
        },
        moreHelpTextThemed: {
            color: "x14ug900",
            ":hover_color": "xyla9g4",
            ":focus-visible_color": "x1079x1i",
            $$css: true
        },
        moreHelpTextThemedDeemphasized: {
            color: "xhslqc4",
            ":hover_color": "xyla9g4",
            ":focus-visible_color": "x1079x1i",
            $$css: true
        },
        tcTextThemed: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function D1Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { children, withIcon } = e;
        const a = withIcon === undefined ? false : withIcon;
        let i;
        if (t[0] !== a) {
            i = ({
                0: {
                    className: "x1rg5ohu xk50ysn x1o2sk6j"
                },
                1: {
                    className: "xk50ysn x1o2sk6j xt0psk2 xuxw1ft"
                }
            })[!!a << 0];
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== children || t[3] !== i) {
            l = <strong {...babelHelpers.extends({}, i, {
                children
            })}/>;
            t[2] = children;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function m() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Scan the QR code with your phone's camera");
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function PComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebWhatsAppAppIcon.react");
            t = s._("Tap the link to open {=m2}", [
                s._implicitParam("=m2", <D1Component withIcon>{s._("WhatsApp {=m2}", [
                    s._implicitParam("=m2", <div className="x6s0dn4 x3nfvp2 x16dsc37 xxk0z11">{s._("{=m1}", [
                        s._implicitParam("=m1", <Component size={24} xstyle={c.waLogo}>{s._("")}</Component>)
                    ])}</div>)
                ])}</D1Component>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function _() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Scan the QR code again to link to your account");
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function FComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebWhatsAppAppIcon.react");
            t = s._("Open {=m2} on your phone", [
                s._implicitParam("=m2", <D1Component withIcon>{s._("WhatsApp {=m2}", [
                    s._implicitParam("=m2", <div className="x6s0dn4 x3nfvp2 x16dsc37 xxk0z11">{s._("{=m1}", [
                        s._implicitParam("=m1", <Component size={24} xstyle={c.waLogo}>{s._("")}</Component>)
                    ])}</div>)
                ])}</D1Component>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function GComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_theme = e.theme;
        let r;
        if (t[0] !== e_theme) {
            r = s._("On Android tap {=m1} · On iPhone tap {=m5}", [
                s._implicitParam("=m1", <D1Component withIcon>{s._("Menu {=m1}", [
                    s._implicitParam("=m1", <CComponent theme={e_theme}>{s._("")}</CComponent>)
                ])}</D1Component>),
                s._implicitParam("=m5", <D1Component withIcon>{s._("Settings {=m1}", [
                    s._implicitParam("=m1", <B1Component theme={e_theme}>{s._("")}</B1Component>)
                ])}</D1Component>)
            ]);
            t[0] = e_theme;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function HComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Tap {=m1}, then {=m3}", [
                s._implicitParam("=m1", <D1Component>{s._("Linked devices")}</D1Component>),
                s._implicitParam("=m3", <D1Component>{s._("Link device")}</D1Component>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function YComponent() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Tap {=m1} and enter this code on your phone", [
                s._implicitParam("=m1", <D1Component>{s._("Link with phone number instead")}</D1Component>)
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_theme = e.theme;
        const a = e_theme === "wds" || r("WAWebEnvironment").isWindows;
        let i;
        if (t[0] !== a) {
            i = ({
                0: {
                    className: "x6s0dn4 x1rg5ohu x16dsc37 x1cmgu4r x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1gxa6cn xa0aww2"
                },
                1: {
                    className: "x6s0dn4 x1rg5ohu x16dsc37 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1od0jb8 x1gxa6cn xa0aww2"
                }
            })[!!a << 0];
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = a && c.iconThemed;
        let iconXstyle;
        if (t[2] !== l) {
            iconXstyle = [
                c.icon,
                l
            ];
            t[2] = l;
            t[3] = iconXstyle;
        } else {
            iconXstyle = t[3];
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                x: 0,
                y: 1,
                width: 24,
                height: 24
            };
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] !== iconXstyle) {
            m = u.jsx(r("WDSIconIcMoreVert.react"), {
                iconXstyle,
                width: 18,
                height: 20,
                testid: "menu",
                viewBox: d
            });
            t[5] = iconXstyle;
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== i || t[8] !== m) {
            p = <div {...babelHelpers.extends({}, i, {
                children: m
            })}/>;
            t[7] = i;
            t[8] = m;
            t[9] = p;
        } else {
            p = t[9];
        }
        return p;
    }
    function B1Component(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_theme = e.theme;
        const a = e_theme === "wds" || r("WAWebEnvironment").isWindows;
        let i;
        if (t[0] !== a) {
            i = ({
                0: {
                    className: "x6s0dn4 x1rg5ohu x16dsc37 x1cmgu4r x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1gxa6cn x1j8ymqv xa0aww2 x4tra6z"
                },
                1: {
                    className: "x6s0dn4 x1rg5ohu x16dsc37 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1od0jb8 x1gxa6cn x1j8ymqv xa0aww2 x4tra6z"
                }
            })[!!a << 0];
            t[0] = a;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = a && c.iconThemed;
        let s;
        if (t[2] !== l) {
            s = u.jsx(r("WDSIconIosWdsIcSettingsGear.react"), {
                testid: "settings-iphone",
                iconXstyle: [
                    c.icon,
                    l
                ],
                width: 18,
                height: 18
            });
            t[2] = l;
            t[3] = s;
        } else {
            s = t[3];
        }
        let d;
        if (t[4] !== i || t[5] !== s) {
            d = <div {...babelHelpers.extends({}, i, {
                children: s
            })}/>;
            t[4] = i;
            t[5] = s;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    function VComponent(e) {
        const t = o("react-compiler-runtime").c(20);
        const { isBold, onClick, showArrow, showUnderline, testId, text, theme, url, useDeemphasizedThemedColor } = e;
        const g = isBold === undefined ? false : isBold;
        const h = showArrow === undefined ? true : showArrow;
        const y = showUnderline === undefined ? true : showUnderline;
        const C = testId === undefined ? "link-device-qrcode-alt-linking-help" : testId;
        const b = useDeemphasizedThemedColor === undefined ? false : useDeemphasizedThemedColor;
        const v = theme === "wds";
        const S = v && c.moreHelpTextThemed;
        const R = b && c.moreHelpTextThemedDeemphasized;
        const L = y ? c.underline : c.noUnderlineLink;
        const E = g && c.bold;
        let k;
        if (t[0] !== S || t[1] !== R || t[2] !== L || t[3] !== E) {
            k = [
                c.moreHelpText,
                S,
                R,
                L,
                E,
                r("WAWebEnvironment").isWindows && c.moreHelpTextWindows
            ];
            t[0] = S;
            t[1] = R;
            t[2] = L;
            t[3] = E;
            t[4] = k;
        } else {
            k = t[4];
        }
        let I;
        if (t[5] !== onClick || t[6] !== url) {
            I = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (onClick) {
                        yield onClick();
                    }
                    if (url != null) {
                        o("WAWebExternalLink.react").openExternalLink(url);
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[5] = onClick;
            t[6] = url;
            t[7] = I;
        } else {
            I = t[7];
        }
        let T;
        if (t[8] !== text) {
            const Component = o("WAWebFlex.react").FlexColumn;
            T = <Component>{text}</Component>;
            t[8] = text;
            t[9] = T;
        } else {
            T = t[9];
        }
        let D;
        if (t[10] !== h) {
            const Component = o("WAWebFlex.react").FlexColumn;
            D = h && <Component>{u.jsx(r("WDSIconIcNorthEast.react"), {
                width: 16,
                height: 16,
                directional: true
            })}</Component>;
            t[10] = h;
            t[11] = D;
        } else {
            D = t[11];
        }
        let x;
        if (t[12] !== T || t[13] !== D) {
            const Component = o("WAWebFlex.react").FlexRow;
            x = <Component align="center" columnGap={4}>{T}{D}</Component>;
            t[12] = T;
            t[13] = D;
            t[14] = x;
        } else {
            x = t[14];
        }
        let $;
        if (t[15] !== k || t[16] !== I || t[17] !== x || t[18] !== C) {
            const Component = o("WAWebClickable.react").Clickable;
            $ = <Component xstyle={k} as="div" dataTestId={C} onClick={I}>{x}</Component>;
            t[15] = k;
            t[16] = I;
            t[17] = x;
            t[18] = C;
            t[19] = $;
        } else {
            $ = t[19];
        }
        return $;
    }
    function SComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_theme = e.theme;
        const a = e_theme === "wds" || r("WAWebEnvironment").isWindows;
        const i = a && c.tcTextThemed;
        let l;
        if (t[0] !== i) {
            l = [
                c.tcText,
                i
            ];
            t[0] = i;
            t[1] = l;
        } else {
            l = t[1];
        }
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Terms & Privacy Policy");
            t[2] = d;
        } else {
            d = t[2];
        }
        let m;
        if (t[3] !== l) {
            const Component = o("WAWebClickable.react").Clickable;
            m = <Component xstyle={l} as="div" dataTestId="link-device-qrcode-alt-linking-tc" onClick={R}>{d}</Component>;
            t[3] = l;
            t[4] = m;
        } else {
            m = t[4];
        }
        return m;
    }
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebExternalLink.react").openExternalLink("https://www.whatsapp.com/legal/");
        });
        return L.apply(this, arguments);
    }
    l.Strong = D1Component;
    l.LinkDeviceInstructionPhoneCamera = m;
    l.LinkDeviceInstructionOpenWhatsApp = PComponent;
    l.LinkDeviceInstructionScanCodeAgain = _;
    l.LinkDeviceInstructionOpenWhatsAppOnPhone = FComponent;
    l.LinkDeviceInstructionNavigateToSettings = GComponent;
    l.LinkDeviceInstructionsTapLinkedDevices = HComponent;
    l.LinkDeviceInstructionsLinkWithPhoneNumberInstead = YComponent;
    l.ExternalHelpLink = VComponent;
    l.TCLink = SComponent;
}, 226);