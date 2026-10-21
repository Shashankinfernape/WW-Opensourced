__d("WAWebPinChatAuraUpsellModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
    "react",
    "react-compiler-runtime",
    "useWAWebWaPlusBenefitJourneyViewOnMount"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(8);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
                surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = r("useWAWebWaPlusBenefitJourneyViewOnMount")(t);
        let a;
        if (e[1] !== n) {
            a = function() {
                n.current.logSelect({
                    success: true,
                    actionTarget: "view_on_phone"
                });
                o("WAWebModalManager").ModalManager.closeAlert();
            };
            e[1] = n;
            e[2] = a;
        } else {
            a = e[2];
        }
        const i = a;
        let l;
        let c;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                surface: "unknown",
                viewName: "pin-chat-aura-upsell"
            };
            c = s._("Explore WhatsApp Plus on your primary device");
            e[3] = l;
            e[4] = c;
        } else {
            l = e[3];
            c = e[4];
        }
        let d;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Pin extra chats, share premium stickers and more when you subscribe to WhatsApp Plus");
            e[5] = d;
        } else {
            d = e[5];
        }
        let m;
        if (e[6] !== i) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            m = <Component tsNavigationData={l} title={c} onOK={i}>{d}</Component>;
            e[6] = i;
            e[7] = m;
        } else {
            m = e[7];
        }
        return m;
    }
    l.default = c;
}, 226);