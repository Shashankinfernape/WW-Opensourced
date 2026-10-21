__d("WAWebChatCommunityUtils", [
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = 91;
    function s(e) {
        if (e) {
            return o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e?.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY && o("WAWebChatGroupUtils").isSuspendedGroup(e);
        }
        return false;
    }
    function u(e) {
        if (e) {
            return o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e?.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY && o("WAWebChatGroupUtils").isSuspendedGroup(e) && o("WAWebChatGroupUtils").isTerminatedGroup(e);
        }
        return false;
    }
    function c(e) {
        if (!(e != null && e.groupMetadata)) {
            return false;
        }
        const e_groupMetadata = e.groupMetadata;
        const t_participants = e_groupMetadata.participants;
        return t_participants.iAmSuperAdmin();
    }
    function d(e) {
        return !(!(e != null && e.groupMetadata) || u(e) || s(e));
    }
    function m(e) {
        return r("WAWebGroupMetadataCollection").filter((t)=>t.parentGroup === e && t.defaultSubgroup === true).map((e)=>e.id);
    }
    function p(e, t) {
        return e.map((e)=>{
            const i = t ? o("WAWebChatCollection").ChatCollection.get(e)?.formattedTitle : r("WAWebUnjoinedSubgroupMetadataCollection").get(e)?.subject;
            return {
                id: e,
                subject: i ?? ""
            };
        });
    }
    function _(e) {
        if (!e || !e.contact.name) {
            return false;
        }
        const t = o("WAWebChatCollection").ChatCollection.findFirst(function(t) {
            return t.groupMetadata?.parentGroup === e.id && t.groupMetadata?.defaultSubgroup;
        });
        if (!t || !t.contact.name) {
            return false;
        }
        return t.contact.name !== e.contact.name;
    }
    function f(e) {
        if (!e) {
            return false;
        }
        const t = r("WAWebGroupMetadataCollection").get(e);
        if (!t) {
            return false;
        }
        const n = t.participants.iAmAdmin();
        return t.allowNonAdminSubGroupCreation !== true && !n;
    }
    function g(e, t, n) {
        if (t == null) {
            return true;
        }
        let r;
        if (n == null) {
            const l = o("WAWebLidMigrationUtils").toPn(t.id) ?? t.id;
            const s = e?.groupMetadata?.getParentGroupChat()?.groupMetadata?.participants;
            r = !!(s != null && s.iAmAdmin()) || l.isUser() && !!(s != null && s.userIsAdmin(l));
        } else {
            r = n.iAmCommunityAdmin || n.isSenderAdmin;
        }
        if (!e || o("WAWebUserPrefsMeUser").isMeAccount(t.id) || o("WAWebFrontendContactGetters").getIsMyContact(t) || !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) || r) {
            return false;
        }
        if (t.id.isLid()) {
            return true;
        }
        return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
    }
    function h(e) {
        const t = e.length !== 0 ? e[0].toString() : null;
        if (!r("isStringNullOrEmpty")(t) && o("WAWebWidFactory").isWidlike(t)) {
            return o("WAWebWidFactory").createWidFromWidLike(t);
        }
        return null;
    }
    l.SUBGROUP_V2_CHAT_CELL_HEIGHT = e;
    l.isSuspendedCommunity = s;
    l.isIntegrityDeactivatedCommunity = u;
    l.isCommunitySuperAdmin = c;
    l.canAddGroupToCommunity = d;
    l.getCagIdFromCommunity = m;
    l.formatSubgroupUpdateTypes = p;
    l.cagAndCommunitySubjectDiffer = _;
    l.isSubgroupSuggestionCreation = f;
    l.shouldMaskPhoneNumberForChat = g;
    l.getNewCommunityOwnerFromTemplateParams = h;
}, 98);