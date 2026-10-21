__d("basePushToast", [
    "BaseToasterStateManager",
    "MetaConfig",
    "getToastDurationFromTextLength"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 72000000;
    const s = r("BaseToasterStateManager").getInstance();
    function u(e, t, n, o) {
        const i = n ?? s;
        const l = e.message?.toString();
        const u = i.push(t, o ?? r("getToastDurationFromTextLength")(l ?? ""));
        return u;
    }
    function c(t, n) {
        const r = n ?? s;
        const o = r.push(t, e);
        return o;
    }
    function d(e) {
        return e.action != null || e.withoutCloseButton != null && e.withoutCloseButton !== true;
    }
    function m() {
        return r("MetaConfig")._("191");
    }
    l.pushAlertToast = u;
    l.pushPersistentToast = c;
    l.isInteractiveToast = d;
    l.passesNewToastAPIGK = m;
}, 98);