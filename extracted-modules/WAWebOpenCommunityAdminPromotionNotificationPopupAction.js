__d("WAWebOpenCommunityAdminPromotionNotificationPopupAction", [
    "WAWebChatGroupUtils",
    "WAWebCommunityAdminPromotionNotificationFlowLoadable",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNuxPreferences",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ groupMetadata }) {
        if (groupMetadata != null) {
            let r;
            const a = o("WAWebGroupMetadataGetters").getGroupType(groupMetadata);
            switch(a){
                case o("WAWebGroupType").GroupType.COMMUNITY:
                    r = groupMetadata;
                    break;
                case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                    r = groupMetadata.getParentGroupChat()?.groupMetadata;
                    break;
                default:
                    break;
            }
            return r;
        }
    }
    function c(e) {
        if (e == null || o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(e) || o("WAWebChatGroupUtils").isSuspendedGroup(e)) {
            return false;
        }
        const t = u(e);
        return !(t == null || !t.participants.iAmAdmin() || o("WAWebUserPrefsMeUser").isMeAccount(t.owner) || !o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").getCommunityAdminPromotionNuxKey(t.id.toString())));
    }
    function d(e) {
        if (e != null) {
            const communityMetadata = u(e);
            if (communityMetadata != null) {
                o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebCommunityAdminPromotionNotificationFlowLoadable").CommunityAdminPromotionNotificationFlowLoadable, {
                    communityMetadata
                }));
            }
        }
    }
    l.shouldOpenCommunityAdminPromotionNotificationPopup = c;
    l.openCommunityAdminPromotionNotificationPopup = d;
}, 98);