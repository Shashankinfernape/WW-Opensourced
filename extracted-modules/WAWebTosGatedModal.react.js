__d("WAWebTosGatedModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebTos",
    "WAWebTosGating",
    "react",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ contact }) {
        const n = function() {
            if (!o("WAWebTosGating").shouldBlockByTos(contact)) {
                o("WAWebModalManager").ModalManager.close();
            }
        };
        o("useWAWebListener").useListener(contact, "change:privacyMode", n);
        o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", n);
        const a = s._("WhatsApp recently updated its terms and privacy policy. This business uses a secure service from Meta to manage chats. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.");
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "tos-gated"
        }} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")} title={s._("WhatsApp's terms and privacy policy update")}>{a}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);