__d("WAWebKeepInChatWarningUnkeepOwnMsgModal", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(12);
        const { onCancel, onConfirm } = e;
        let a;
        if (t[0] !== onConfirm) {
            a = function() {
                onConfirm();
                o("WAWebModalManager").ModalManager.closeSupportOrModal();
            };
            t[0] = onConfirm;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] !== onCancel) {
            l = function() {
                onCancel?.();
                o("WAWebModalManager").ModalManager.closeSupportOrModal();
            };
            t[2] = onCancel;
            t[3] = l;
        } else {
            l = t[3];
        }
        const c = l;
        let d;
        if (t[4] !== c) {
            d = function() {
                c();
            };
            t[4] = c;
            t[5] = d;
        } else {
            d = t[5];
        }
        const m = d;
        let p;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                surface: "unknown",
                viewName: "kic-unkeep-own-msg"
            };
            t[6] = p;
        } else {
            p = t[6];
        }
        let _;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("This is your message. If you choose to unkeep it, no one else can keep it again in the chat.");
            t[7] = _;
        } else {
            _ = t[7];
        }
        let f;
        if (t[8] !== c || t[9] !== i || t[10] !== m) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            f = <Component tsNavigationData={p} onOK={i} onCancel={c} onOverlayClick={m}>{_}</Component>;
            t[8] = c;
            t[9] = i;
            t[10] = m;
            t[11] = f;
        } else {
            f = t[11];
        }
        return f;
    }
    l.default = c;
}, 226);