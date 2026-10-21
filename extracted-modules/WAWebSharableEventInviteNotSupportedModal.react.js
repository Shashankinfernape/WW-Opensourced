__d("WAWebSharableEventInviteNotSupportedModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Open on your primary phone");
            n = s._("Got it");
            e[0] = t;
            e[1] = n;
        } else {
            t = e[0];
            n = e[1];
        }
        let r;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            r = <Component testid="sharable_event_invite_not_supported_modal" title={t} okText={n} onOK={o("WAWebModalManager").closeModalManager}>{s._("To view or respond to this event, use WhatsApp on your primary phone.")}</Component>;
            e[2] = r;
        } else {
            r = e[2];
        }
        return r;
    }
    l.SharableEventInviteNotSupportedModal = c;
}, 226);