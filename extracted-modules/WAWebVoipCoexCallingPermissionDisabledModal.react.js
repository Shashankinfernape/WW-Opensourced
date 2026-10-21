__d("WAWebVoipCoexCallingPermissionDisabledModal.react", [
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
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("You can't call this customer right now");
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = s._("OK");
            e[1] = n;
        } else {
            n = e[1];
        }
        let r;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            r = <Component title={t} onOK={o("WAWebModalManager").closeModalManager} okText={n} testid="calling-disabled-modal">{s._("They declined your call request. You can still message or accept calls from them.")}</Component>;
            e[2] = r;
        } else {
            r = e[2];
        }
        return r;
    }
    l.default = c;
}, 226);