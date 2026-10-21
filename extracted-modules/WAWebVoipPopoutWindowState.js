__d("WAWebVoipPopoutWindowState", [
    "WALogger",
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new (r("WAWebEventEmitter"));
    const u = "wa-web-main";
    function c(t, n, r) {
        try {
            const a = t?.open("#", u);
            a?.focus();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] ",
                " permission prompt would open in the hidden main tab; focusing it so the prompt is visible"
            ])), n, r);
            return a != null;
        } catch (e) {
            return false;
        }
    }
    let d = false;
    let m = null;
    let p = false;
    let _ = false;
    let f = 0;
    const g = new Set;
    function h() {
        return d;
    }
    function y(e) {
        d = e;
    }
    function C() {
        return p;
    }
    function b(e) {
        if (p !== e) {
            p = e;
            s.trigger("popoutWindowOpeningChanged", {
                isOpening: e
            });
        }
    }
    function v() {
        return _;
    }
    function S() {
        _ = true;
    }
    function R() {
        _ = false;
    }
    function L() {
        return g.size > 0;
    }
    function E() {
        const e = f++;
        g.add(e);
        return function() {
            g.delete(e);
        };
    }
    function k() {
        g.clear();
    }
    function I() {
        if (m == null || !d) {
            return false;
        }
        try {
            return !(m.document.hidden || m.innerWidth <= 0 || m.innerHeight <= 0);
        } catch (e) {
            return false;
        }
    }
    function T() {
        return m;
    }
    function D(e) {
        m = e;
    }
    function x() {
        if (m == null) {
            return false;
        }
        try {
            return !$(m);
        } catch (e) {
            return false;
        }
    }
    function $(e) {
        return e != null && typeof e === "object" && "closed" in e && e.closed === true;
    }
    l.WAWebVoipUiPopoutWindowEventEmitter = s;
    l.MAIN_WINDOW_NAME = u;
    l.focusMainWindowForMediaPrompt = c;
    l.getIsCallActiveInPopoutWindow = h;
    l.setIsCallActiveInPopoutWindow = y;
    l.getIsPopoutWindowOpening = C;
    l.setIsPopoutWindowOpening = b;
    l.getIsPopoutUiReady = v;
    l.markPopoutUiReady = S;
    l.resetPopoutUiReady = R;
    l.getIsCameraStreamReacquisitionInProgress = L;
    l.beginCameraStreamReacquisition = E;
    l.resetCameraStreamReacquisitions = k;
    l.getIsPopoutWindowActiveAndVisible = I;
    l.getPopoutWindow = T;
    l.setPopoutWindow = D;
    l.isPopoutWindowAlive = x;
    l.isWindowClosed = $;
}, 98);