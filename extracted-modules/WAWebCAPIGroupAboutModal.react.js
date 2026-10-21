__d("WAWebCAPIGroupAboutModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSIllustrationWdsPictoPrivacyBusiness.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        textAlignCenter: {
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    const d = "https://faq.whatsapp.com/1148840052398648";
    function m() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                surface: "unknown",
                viewName: "capi-group-about"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = s._("Learn more");
            e[1] = n;
        } else {
            n = e[1];
        }
        let r;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            r = <Component tsNavigationData={t} onOK={o("WAWebModalManager").closeModalManager} cancelText={n} onCancel={p}><_/></Component>;
            e[2] = r;
        } else {
            r = e[2];
        }
        return r;
    }
    function p() {
        return window.open(d, "_blank");
    }
    function _() {
        const e = o("react-compiler-runtime").c(5);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = u.jsx(r("WDSIllustrationWdsPictoPrivacyBusiness.react"), {
                testid: "wds-picto-privacy-business"
            });
            e[0] = t;
        } else {
            t = e[0];
        }
        let margin;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            margin = [
                16,
                0
            ];
            e[1] = margin;
        } else {
            margin = e[1];
        }
        let a;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            a = <Component xstyle={c.textAlignCenter} margin={margin} weight="medium">{s._("About your messages with this group")}</Component>;
            e[2] = a;
        } else {
            a = e[2];
        }
        let i;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            i = <Component xstyle={c.textAlignCenter} marginBottom={8}>{s._("WhatsApp secures your messages with the business and other members in this group.")}</Component>;
            e[3] = i;
        } else {
            i = e[3];
        }
        let l;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            l = <Component_1 align="center">{t}{a}{i}<Component xstyle={c.textAlignCenter}>{s._("You are always in control of the conversation. You can leave this group or block a business at any time.")}</Component></Component_1>;
            e[4] = l;
        } else {
            l = e[4];
        }
        return l;
    }
    l.CAPI_GROUP_ABOUT_MODAL_LEARN_MORE_URL = d;
    l.CAPIGroupAboutModal = m;
    l.CAPIGroupAboutModalContent = _;
}, 226);