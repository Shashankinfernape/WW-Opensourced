__d("WAWebCallLinkPreviewThumbnail.react", [
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeModeContext",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    const c = 22;
    const d = 26;
    const m = {
        icon: {
            color: "x14ug900",
            $$css: true
        }
    };
    function p(e) {
        const t = o("react-compiler-runtime").c(10);
        const { callType, isSentByMe } = e;
        const i = isSentByMe === undefined ? false : isSentByMe;
        const l = e_useContext(r("WAWebChatThemeModeContext"));
        const l_isVibrant = l.isVibrant;
        let _;
        let f;
        if (t[0] !== i || t[1] !== l_isVibrant) {
            const g = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
                isVibrant: l_isVibrant,
                isSentByMe: i,
                isNotification: false
            });
            _ = "call-link-preview-thumbnail";
            f = ({
                0: {
                    className: "xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1280gxy"
                },
                1: {
                    className: "xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvcodip"
                }
            })[!!g << 0];
            t[0] = i;
            t[1] = l_isVibrant;
            t[2] = _;
            t[3] = f;
        } else {
            _ = t[2];
            f = t[3];
        }
        let h;
        if (t[4] !== callType) {
            h = callType === "video" ? s.jsx(r("WDSIconIcVideocamFilled.react"), {
                testid: "video",
                "aria-hidden": true,
                height: d,
                width: d,
                iconXstyle: m.icon
            }) : s.jsx(r("WDSIconIcCallFilled.react"), {
                "aria-hidden": true,
                height: c,
                width: c,
                iconXstyle: m.icon
            });
            t[4] = callType;
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        if (t[6] !== _ || t[7] !== f || t[8] !== h) {
            y = <div {...babelHelpers.extends({
                "data-testid": _
            }, f, {
                children: h
            })}/>;
            t[6] = _;
            t[7] = f;
            t[8] = h;
            t[9] = y;
        } else {
            y = t[9];
        }
        return y;
    }
    l.default = p;
}, 98);