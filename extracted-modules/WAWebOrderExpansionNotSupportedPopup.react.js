__d("WAWebOrderExpansionNotSupportedPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebOrderGatingUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_chat = e.chat;
        let r;
        if (t[0] !== e_chat.contact) {
            r = o("WAWebFrontendContactGetters").getFormattedUser(e_chat.contact);
            t[0] = e_chat.contact;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                surface: "unknown",
                viewName: "order-expansion-not-supported"
            };
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._("Couldn't charge buyer") : s._("Couldn't create order");
            t[3] = l;
        } else {
            l = t[3];
        }
        let c;
        if (t[4] !== a) {
            const Component = o("WAWebText.react").WAWebTextSectionTitle;
            const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
            c = <Component_1 tsNavigationData={i} testid="order-expansion-country-not-supported-popup-title" title={l} onOK={o("WAWebModalManager").closeModalManager}><Component testid="order-expansion-country-not-supported-popup-description">{o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._("This feature isn't available in {contact-name}'s location.", [
                s._param("contact-name", a)
            ]) : s._("Orders aren't available in {contact-name}'s location.", [
                s._param("contact-name", a)
            ])}</Component></Component_1>;
            t[4] = a;
            t[5] = c;
        } else {
            c = t[5];
        }
        return c;
    }
    l.default = c;
}, 226);