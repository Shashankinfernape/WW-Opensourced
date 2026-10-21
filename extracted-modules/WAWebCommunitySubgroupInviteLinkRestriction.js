__d("WAWebCommunitySubgroupInviteLinkRestriction", [
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebSchemaGroupMetadata"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s(e);
    }
    function s(e) {
        if (e == null) {
            return false;
        }
        const i = e.getParentGroupChat();
        if (i == null) {
            return false;
        }
        const i_groupMetadata = i.groupMetadata;
        if (i_groupMetadata == null) {
            return false;
        }
        const s = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(i_groupMetadata);
        const u = s?.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
        const c = e.participants?.iAmAdmin() ?? false;
        const d = i_groupMetadata.participants?.iAmAdmin() ?? false;
        return u && !c && !d;
    }
    l.isSubgroupInviteLinkRestrictedByParentCommunity = e;
    l.isSubgroupAddRestrictedByParentCommunity = s;
}, 98);