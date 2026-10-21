__d("WAWebOrgMemberContactName", [
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebOrgContactCollection",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberDisplayName",
    "WAWebOrgMemberLidEligibility",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const r = s(e.id);
        if (r == null || o("WAWebFrontendContactGetters").getIsMyContact(e)) {
            return null;
        }
        const a = o("WAWebOrgMemberDisplayName").resolveWAWebOrgMemberDisplayName({
            isBusiness: o("WAWebContactGetters").getIsBusiness(e),
            memberName: r.memberName.trim(),
            pushName: o("WAWebContactGetters").getPushname(e)?.trim(),
            savedName: o("WAWebContactGetters").getName(e)?.trim(),
            verifiedLevel: o("WAWebContactGetters").getVerifiedLevel(e),
            verifiedName: o("WAWebContactGetters").getVerifiedName(e)
        });
        if (a === "") {
            return null;
        }
        return a;
    }
    function s(e) {
        if (!o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() || o("WAWebUserPrefsMeUser").isMeAccount(e)) {
            return null;
        }
        const t = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(e);
        const n = t == null ? null : o("WAWebOrgContactCollection").OrgContactCollection.get(t.user);
        if (n?.primaryOrgId == null) {
            return null;
        }
        return n;
    }
    l.getOrgMemberDisplayName = e;
    l.getKnownOrgMember = s;
}, 98);