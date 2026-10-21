__d("WAWebPrivacyModeSystemMsg", [
    "$InternalEnum",
    "WAWebHandleMsgTypes.flow"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "E2EE",
        "BSP",
        "FB",
        "HOSTED_GROUP"
    ]);
    function s(t) {
        if (t == null || t.actualActors === o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.Self && t.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.OnPremise) {
            return e.E2EE;
        }
        if (t.actualActors === o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.Capi) {
            return e.HOSTED_GROUP;
        }
        if (t.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook) {
            return e.FB;
        }
        return e.BSP;
    }
    function u(e, t) {
        if (e == null) {
            return t;
        }
        if (t == null || e.privacyModeTs > t.privacyModeTs) {
            return e;
        }
        return t;
    }
    function c(e) {
        const n = e.bizInfo?.verifiedName;
        if (n == null) {
            return null;
        }
        if (e.biz && n.isApi === true) {
            return n.privacyMode;
        }
        return null;
    }
    l.ReducedPrivacyMode = e;
    l.getReducedPrivacyMode = s;
    l.getLatestPrivacyMode = u;
    l.getPrivacyModeFromQueryExistResponse = c;
}, 98);