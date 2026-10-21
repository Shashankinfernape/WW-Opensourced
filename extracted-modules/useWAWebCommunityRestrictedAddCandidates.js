__d("useWAWebCommunityRestrictedAddCandidates", [
    "WAWebABProps",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebCommunityMembers"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(10);
        let n;
        if (t[0] !== e) {
            n = o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupAddRestrictedByParentCommunity(e) && o("WAWebABProps").getABPropConfigValue("web_community_setting_add_members_enabled");
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const r = n;
        let a;
        let i;
        let l;
        if (t[2] !== e || t[3] !== r) {
            const u = r ? e?.getParentGroupChat() : null;
            a = o("useWAWebCommunityMembers").useCommunityMembers;
            i = u;
            l = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(u?.groupMetadata);
            t[2] = e;
            t[3] = r;
            t[4] = a;
            t[5] = i;
            t[6] = l;
        } else {
            a = t[4];
            i = t[5];
            l = t[6];
        }
        const c = a(i, l);
        const c_members = c.members;
        let m;
        if (t[7] !== r || t[8] !== c_members) {
            m = r ? c_members.filter(s) : null;
            t[7] = r;
            t[8] = c_members;
            t[9] = m;
        } else {
            m = t[9];
        }
        return m;
    }
    function s(e) {
        return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
    }
    l.default = e;
}, 98);