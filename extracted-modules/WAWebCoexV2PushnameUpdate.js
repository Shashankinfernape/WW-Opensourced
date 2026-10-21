__d("WAWebCoexV2PushnameUpdate", [
    "WAWebCoexV2RepresentedIdentityFromMessage",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (!r("justknobx")._("5971")) {
            return null;
        }
        const n = o("WAWebCoexV2RepresentedIdentityFromMessage").maybeResolveCoexV2RepresentedIdentityFromMessage(e, t);
        if (n == null) {
            return null;
        }
        const a = n.representedIdentity;
        return {
            target: a?.identitySource === "sender" ? a.representedUser : null
        };
    }
    l.maybeGetCoexV2PushnameUpdatePlan = e;
}, 98);