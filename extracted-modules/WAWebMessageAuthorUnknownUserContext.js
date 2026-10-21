__d("WAWebMessageAuthorUnknownUserContext", [
    "WAWebDisplayType"
], function(t, n, r, o, a, i, l) {
    function e({ displayType, isAnnouncementGroup, isCommunityGroup, isCommunityLoaded, isPhoneNumberForceMasked, nameRendered }) {
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.QUOTED_MSG) {
            return "group_message_quoted";
        }
        if (isPhoneNumberForceMasked === true && !isCommunityLoaded) {
            return "group_message_cag_masked_noparent";
        }
        if (isPhoneNumberForceMasked === true) {
            if (nameRendered) {
                return "group_message_cag_masked";
            }
            return "group_message_cag_masked_bare";
        }
        if (isAnnouncementGroup) {
            return "group_message_cag";
        }
        if (isCommunityGroup) {
            return "group_message_community_sub";
        }
        return "group_message_group";
    }
    l.getMessageAuthorUnknownUserContext = e;
}, 98);