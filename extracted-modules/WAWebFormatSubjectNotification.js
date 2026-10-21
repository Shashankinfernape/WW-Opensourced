__d("WAWebFormatSubjectNotification", [
    "fbt",
    "WAWebChatGroupUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l, s) {
    function e({ author, authorClickable, chat, subjectValue }) {
        if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat)) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(author)) {
                return s._("You changed the community's name to \"{community_name}\"", [
                    s._param("community_name", subjectValue)
                ]);
            }
            if (authorClickable != null) {
                return s._("{user} changed the community's name to \"{community_name}\"", [
                    s._param("user", authorClickable),
                    s._param("community_name", subjectValue)
                ]);
            }
            return s._("A member changed the community's name to \"{community_name}\"", [
                s._param("community_name", subjectValue)
            ]);
        }
        if (o("WAWebUserPrefsMeUser").isMeAccount(author)) {
            return s._("You changed the group name to \"{group_name}\"", [
                s._param("group_name", subjectValue)
            ]);
        }
        if (authorClickable != null) {
            return s._("{user} changed the group name to \"{group_name}\"", [
                s._param("user", authorClickable),
                s._param("group_name", subjectValue)
            ]);
        }
        return s._("A member changed the group name to \"{group_name}\"", [
            s._param("group_name", subjectValue)
        ]);
    }
    l.formatSubjectNotification = e;
}, 226);