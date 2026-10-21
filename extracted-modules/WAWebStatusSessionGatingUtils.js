__d("WAWebStatusSessionGatingUtils", [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebSessionScope"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        DISABLED: 0,
        RECEIVER_ENABLED: 1,
        SENDER_ENABLED: 2,
        FORCED: 3
    });
    function s() {
        return e.cast(o("WAWebABProps").getABPropConfigValue("status_infra_1_1_session_split")) ?? e.DISABLED;
    }
    function u() {
        const t = s();
        if (t === e.SENDER_ENABLED || t === e.FORCED) {
            return o("WAWebSessionScope").SessionScope.STATUS;
        }
        return o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function c({ from: t, isGroupStatus: n, metaSessionScope: r }) {
        return t.isStatus() || n === true && r === o("WAWebSessionScope").SessionScope.STATUS;
    }
    function d(t = void 0) {
        const n = s();
        if (n === e.DISABLED) {
            return false;
        }
        if (n === e.FORCED) {
            return true;
        }
        return t === o("WAWebSessionScope").SessionScope.STATUS;
    }
    l.StatusSessionReceiverState = e;
    l.getStatusSessionReceiverState = s;
    l.getStatusSessionScope = u;
    l.isIncomingStatusSessionContext = c;
    l.shouldUseStatusSessionForIncomingMessage = d;
}, 98);