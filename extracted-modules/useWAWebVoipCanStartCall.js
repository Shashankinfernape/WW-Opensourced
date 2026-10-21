__d("useWAWebVoipCanStartCall", [
    "WAWebCallCollection",
    "WAWebChatGroupUtils",
    "WAWebDBCAPIPermissions",
    "WAWebFrontendContactGetters",
    "WAWebStreamGetters",
    "WAWebStreamModel",
    "WAWebUserPrefsMultiDevice",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL);
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                r("WAWebCallCollection").activeCall
            ];
            e[1] = n;
        } else {
            n = e[1];
        }
        const a = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), t, u, n);
        let i;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebVoipEventConstants")).getChangeEvent(l.VoipStreamEvents.INFO),
                l.getChangeEvent(l.VoipStreamEvents.OBSCURITY),
                l.getChangeEvent(l.VoipStreamEvents.HAS_SYNCED)
            ];
            e[2] = i;
        } else {
            i = e[2];
        }
        let c;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebStreamGetters").getDisplayInfo(o("WAWebStreamModel").Stream)
            ];
            e[3] = c;
        } else {
            c = e[3];
        }
        const d = r("useWAWebEventTargetValue")(o("WAWebStreamModel").Stream, i, s, c);
        return !a && d;
    }
    function s() {
        return o("WAWebStreamGetters").getDisplayInfo(o("WAWebStreamModel").Stream) === o("WAWebStreamModel").StreamInfo.NORMAL;
    }
    function u() {
        return r("WAWebCallCollection").activeCall != null;
    }
    function c(t) {
        return e() && !o("WAWebChatGroupUtils").shouldBlockCall(t) && !o("WAWebFrontendContactGetters").getIsContactBlocked(t.contact);
    }
    function d(e) {
        if (!o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() || e.capiCallingPermissionType == null || !o("WAWebVoipGatingUtils").isCoexCallingPermissionsEnabled()) {
            return true;
        }
        return e.capiCallingPermissionType === o("WAWebDBCAPIPermissions").CloudAPICallingPermissionType.ALLOW;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = d(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    l.useWAWebVoipCanStartCallForWid = e;
    l.useWAWebVoipCanStartCall = c;
    l.isCapiCallingPermissionAllowed = d;
    l.useWAWebVoipIsCapiCallingPermissionAllowed = m;
}, 98);