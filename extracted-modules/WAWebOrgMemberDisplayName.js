__d("WAWebOrgMemberDisplayName", [
    "WAWebBusinessProfileTypes",
    "WAWebUsernameTypes"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        if (e.trim() !== "") {
            return e;
        }
        const r = t?.trim();
        if (r != null && r !== "") {
            return o("WAWebUsernameTypes").displayUsername(o("WAWebUsernameTypes").asUsername(r));
        }
        const a = n?.trim();
        if (a == null || a === "") {
            return e;
        }
        return a;
    }
    function s({ isBusiness = false, memberName, pushName, savedName, verifiedLevel, verifiedName }) {
        if (isBusiness && verifiedLevel === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && verifiedName != null && verifiedName !== "") {
            return null;
        }
        if (savedName != null && savedName !== "") {
            return savedName;
        }
        if (memberName != null && memberName !== "") {
            return memberName;
        }
        if (pushName != null && pushName !== "") {
            return pushName;
        }
        return null;
    }
    l.getOrgMemberNameWithUsernameFallback = e;
    l.resolveWAWebOrgMemberDisplayName = s;
}, 98);