__d("WAWebBizAdsErrorPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebStopEvent",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e) {
        const t = o("react-compiler-runtime").c(1);
        const e_fallback = e.fallback;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [];
            t[0] = r;
        } else {
            r = t[0];
        }
        e_useEffect(m, r);
        return e_fallback;
    }
    function m() {
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component_1 okButtonType="primary" okText={s._("Reload")} onOK={p} onOverlayClick={o("WAWebStopEvent").preventDefault} title={s._("Something went wrong")}><Component colorName="contentDefault" type="Body1">{s._("Try reloading the page.")}</Component></Component_1>, {
            blockClose: true
        });
    }
    function p() {
        window.location.reload();
    }
    l.default = d;
}, 226);