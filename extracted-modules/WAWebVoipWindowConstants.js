__d("WAWebVoipWindowConstants", [
    "WAWebCallCollection",
    "WAWebEventEmitter",
    "WAWebVoipWindowConstants.stylex.const"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 280;
    const s = 280;
    const u = 200;
    const c = 820;
    let d = false;
    const m = new (r("WAWebEventEmitter"));
    function p(e) {
        d = e;
        m.trigger("change", e);
    }
    let _ = false;
    const f = new (r("WAWebEventEmitter"));
    function g(e) {
        if (e !== _) {
            _ = e;
            f.trigger("change", e);
        }
    }
    function h() {
        return _;
    }
    function y() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall?.isGroup === true && activeCall?.isVideo !== true) {
            return u;
        }
        return s;
    }
    function C() {
        if (d) {
            return c;
        }
        return e;
    }
    l.MIN_WINDOW_WIDTH = e;
    l.MIN_WINDOW_HEIGHT = s;
    l.DRAWER_WIDTH = o("WAWebVoipWindowConstants.stylex.const").drawerDimensions.width;
    l.MIN_WINDOW_WIDTH_WITH_SIDEBAR = c;
    l.sidebarVisibilityEmitter = m;
    l.setIsSidebarVisible = p;
    l.speakerDominantTooSmallEmitter = f;
    l.updateSpeakerDominantTooSmall = g;
    l.getIsSpeakerDominantTooSmall = h;
    l.getEffectiveMinWindowHeight = y;
    l.getEffectiveMinWindowWidth = C;
}, 98);