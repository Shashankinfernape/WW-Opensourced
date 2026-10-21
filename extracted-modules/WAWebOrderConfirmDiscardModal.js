__d("WAWebOrderConfirmDiscardModal", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_onOK = e.onOK;
        let r;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                surface: "unknown",
                viewName: "order-confirm-discard"
            };
            a = s._("Discard changes?");
            t[0] = r;
            t[1] = a;
        } else {
            r = t[0];
            a = t[1];
        }
        let i;
        if (t[2] !== e_onOK) {
            i = function() {
                o("WAWebModalManager").ModalManager.close();
                e_onOK();
            };
            t[2] = e_onOK;
            t[3] = i;
        } else {
            i = t[3];
        }
        let l;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Discard");
            t[4] = l;
        } else {
            l = t[4];
        }
        let c;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            c = <Component>{s._("If you close this, your draft will be discarded.")}</Component>;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== i) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            d = <Component tsNavigationData={r} title={a} onOK={i} okText={l} onCancel={o("WAWebModalManager").closeModalManager}>{c}</Component>;
            t[6] = i;
            t[7] = d;
        } else {
            d = t[7];
        }
        return d;
    }
    l.default = c;
}, 226);