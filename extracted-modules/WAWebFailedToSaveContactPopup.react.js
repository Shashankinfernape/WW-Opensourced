__d("WAWebFailedToSaveContactPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_onOK = e.onOK;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = s._("Can't save contact");
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = r;
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Can't save contact right now, try again later.");
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            c = <Component>{l}</Component>;
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== e_onOK) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            d = <Component onOK={e_onOK} title={a}>{c}</Component>;
            t[3] = e_onOK;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    l.default = c;
}, 226);