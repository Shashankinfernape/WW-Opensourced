__d("WAWebSessionScopeWamUtils", [
    "WAWebSessionScope",
    "WAWebStatusSessionGatingUtils",
    "WAWebWamEnumSessionScopeType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === o("WAWebSessionScope").SessionScope.DEFAULT) {
            return o("WAWebWamEnumSessionScopeType").SESSION_SCOPE_TYPE.DEFAULT;
        }
        if (e === o("WAWebSessionScope").SessionScope.STATUS) {
            return o("WAWebWamEnumSessionScopeType").SESSION_SCOPE_TYPE.STATUS;
        }
        if (e === o("WAWebSessionScope").SessionScope.PQ) {
            return o("WAWebWamEnumSessionScopeType").SESSION_SCOPE_TYPE.DEFAULT;
        }
        if (e == null) {
            return void 0;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function s({ from: t, isGroupStatus: n, isSkdm: r, metaSessionScope: a }) {
        if (r === true) {
            if (o("WAWebStatusSessionGatingUtils").isIncomingStatusSessionContext({
                from: t,
                isGroupStatus: n,
                metaSessionScope: a
            }) && o("WAWebStatusSessionGatingUtils").shouldUseStatusSessionForIncomingMessage(a)) {
                return o("WAWebSessionScope").SessionScope.STATUS;
            }
            return o("WAWebSessionScope").SessionScope.DEFAULT;
        }
    }
    function u(e) {
        if (c(e)) {
            return s(e);
        }
    }
    function c({ from: t, isGroupStatus: n }) {
        return t.isStatus() || n === true;
    }
    l.sessionScopeToWamType = e;
    l.getIncomingSkdmSessionScope = s;
    l.getIncomingSkdmSessionScopeForMessageReceive = u;
}, 98);