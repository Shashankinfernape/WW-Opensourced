__d("WAWebTeeChatNotAvailableOnWebBanner.react", [
    "fbt",
    "WAWebConversationNewBanner.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcClose.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        dismissButton: {
            marginTop: "xr1yuqi",
            marginBottom: "x4ii5y1",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_onDismiss = e.onDismiss;
        let primaryText;
        let secondaryText;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            primaryText = s._("Meta AI with Private Processing is not available on WhatsApp Web.");
            secondaryText = s._("Open WhatsApp on your phone to talk to Meta AI with Private Processing in this chat.");
            t[0] = primaryText;
            t[1] = secondaryText;
        } else {
            primaryText = t[0];
            secondaryText = t[1];
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Dismiss banner");
            t[2] = l;
        } else {
            l = t[2];
        }
        let d;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            d = u.jsx(r("WDSIconIcClose.react"), {
                "aria-hidden": true,
                height: 24,
                width: 24
            });
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] !== e_onDismiss) {
            const Component = r("WAWebUnstyledButton.react");
            m = u.jsx(r("WAWebConversationNewBanner.react"), {
                testId: "tee_chat_unavailable_banner",
                primaryText,
                secondaryText,
                buttons: <Component key="dismiss" aria-label={l} onClick={e_onDismiss} role="button" testid="tee_chat_unavailable_banner_dismiss_btn" xstyle={c.dismissButton}>{d}</Component>
            });
            t[4] = e_onDismiss;
            t[5] = m;
        } else {
            m = t[5];
        }
        return m;
    }
    l.default = d;
}, 226);