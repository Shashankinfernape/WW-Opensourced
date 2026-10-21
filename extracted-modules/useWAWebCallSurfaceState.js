__d("useWAWebCallSurfaceState", [
    "WAWebPipController",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("react-compiler-runtime").c(9);
        let n;
        let a;
        let i;
        if (t[0] !== e) {
            n = e != null ? [
                `${e.id.toString()}_pip_did_open`,
                `${e.id.toString()}_pip_did_close`
            ] : [];
            a = function() {
                if (e != null) {
                    return r("WAWebPipController").isOpened(e);
                }
                return false;
            };
            i = [
                e
            ];
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
        }
        const isPipOpen = r("useWAWebEventTargetValue")(r("WAWebPipController"), n, a, i);
        const isInPopout = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", u);
        const isInDocPip = r("useWAWebEventTargetValue")(o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter, "docPipOpenStateChanged", s);
        const isAnySurfaceOpen = isPipOpen || isInPopout || isInDocPip;
        let p;
        if (t[4] !== isInDocPip || t[5] !== isInPopout || t[6] !== isPipOpen || t[7] !== isAnySurfaceOpen) {
            p = {
                isPipOpen,
                isInPopout,
                isInDocPip,
                isAnySurfaceOpen
            };
            t[4] = isInDocPip;
            t[5] = isInPopout;
            t[6] = isPipOpen;
            t[7] = isAnySurfaceOpen;
            t[8] = p;
        } else {
            p = t[8];
        }
        return p;
    }
    function s() {
        return o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen();
    }
    function u() {
        return o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
    }
    l.default = e;
}, 98);