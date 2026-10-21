__d("WAWebVoipMicrophoneHealthPresence", [
    "WAWebBoolFunc",
    "WAWebVoipGatingUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    const s = new Set;
    const u = new Set;
    const c = new Set;
    function d(e) {
        if (e.isDocPip) {
            return "doc_pip";
        }
        if (e.isContextInPopoutWindow && e.windowEl !== window) {
            return "popout_window";
        }
        return "main_window";
    }
    function m({ isCallActiveInPopoutWindow, isDocPipOpen, placement }) {
        if (isDocPipOpen) {
            return placement === "doc_pip";
        }
        if (isCallActiveInPopoutWindow) {
            return placement === "popout_window";
        }
        return placement === "main_window";
    }
    function p(t, n, r = o("WAWebBoolFunc").returnFalse) {
        if (n) {
            e.set(t, r);
        } else {
            e.delete(t);
        }
    }
    function _() {
        return Array.from(e.values()).some((e)=>e());
    }
    function f(e, t) {
        const n = u.size > 0;
        if (t) {
            u.add(e);
        } else {
            u.delete(e);
        }
        if (!n && u.size > 0) {
            for (const r of c){
                r();
            }
        }
    }
    function g() {
        return u.size > 0 && y().isExperienceEnabled;
    }
    function h(e) {
        const t = y();
        const { isCompactAffordanceEnabled, isExperienceEnabled } = t;
        return isExperienceEnabled && (!e || isCompactAffordanceEnabled);
    }
    function y() {
        return {
            isCompactAffordanceEnabled: o("WAWebVoipGatingUtils").isMicrophoneHealthCompactAffordanceEnabled(),
            isExperienceEnabled: o("WAWebVoipGatingUtils").isMicrophoneHealthExperienceEnabled()
        };
    }
    function C(e) {
        c.add(e);
        return function() {
            c.delete(e);
        };
    }
    function b(e, t) {
        if (t) {
            s.add(e);
        } else {
            s.delete(e);
        }
    }
    function v() {
        return s.size > 0;
    }
    function S() {
        e.clear();
        s.clear();
        u.clear();
        c.clear();
    }
    l.getCallSurfacePlacement = d;
    l.isMicrophoneObserverOwner = m;
    l.reportMicrophoneHealthArmed = p;
    l.canMicrophoneHealthWarn = _;
    l.reportMicrophoneHealthExperienceMounted = f;
    l.canRecoverMicrophone = g;
    l.canShowMicrophoneWarning = h;
    l.subscribeToMicrophoneHealthExperienceMount = C;
    l.reportMicrophoneUnavailableBannerVisible = b;
    l.isMicrophoneUnavailableBannerVisible = v;
    l.resetMicrophoneHealthPresenceForTesting = S;
}, 98);