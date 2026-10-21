__d("WAWebDebugBizVPVOverlay", [
    "WAWebUserPrefsDebugKeys",
    "WAWebUserPrefsStore",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("gkx")("26258");
    function s() {
        if (e) {
            return false;
        }
        const t = r("WAWebUserPrefsStore").get(r("WAWebUserPrefsDebugKeys").DEBUG_VPV_OVERLAY_ENABLED);
        if (t == null) {
            return false;
        }
        return !!t;
    }
    let u = s();
    const c = new Set;
    function d() {
        return !e && u;
    }
    function m(t) {
        if (!(e || u === t)) {
            u = t;
            r("WAWebUserPrefsStore").set(r("WAWebUserPrefsDebugKeys").DEBUG_VPV_OVERLAY_ENABLED, t);
            c.forEach((e)=>{
                e(u);
            });
        }
    }
    function p() {
        m(!u);
    }
    p.doc = "Toggle VPV debug overlay on business messages";
    p.paramsToExecute = [];
    function _(e) {
        c.add(e);
        return function() {
            c.delete(e);
        };
    }
    l.isVPVOverlayEnabled = d;
    l.enableVPVOverlay = m;
    l.toggleVPVOverlay = p;
    l.subscribeToVPVOverlay = _;
}, 98);