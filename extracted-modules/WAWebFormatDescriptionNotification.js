__d("WAWebFormatDescriptionNotification", [
    "fbt",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
    "WAWebWamEnumSystemMessageTypeType"
], function(t, n, r, o, a, i, l, s) {
    const e = o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled();
    function u({ author, authorClickable, isParentGroup = false, shouldFormatAsLastMsg = false }) {
        if (shouldFormatAsLastMsg) {
            if (o("WAWebSystemMessagesUtils").isMe(author)) {
                if (isParentGroup === true) {
                    return {
                        text: s._("You changed the community description"),
                        enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED
                    };
                }
                return {
                    text: s._("You changed the group description"),
                    enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED
                };
            }
            if (authorClickable != null) {
                if (isParentGroup === true) {
                    return {
                        text: s._("{user_name} changed the community description", [
                            s._param("user_name", authorClickable)
                        ]),
                        enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED
                    };
                }
                return {
                    text: s._("{user_name} changed the group description", [
                        s._param("user_name", authorClickable)
                    ]),
                    enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED
                };
            }
            if (isParentGroup === true) {
                return {
                    text: s._("A member changed the community description"),
                    enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED
                };
            }
            return {
                text: s._("A member changed the group description"),
                enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED
            };
        }
        if (o("WAWebSystemMessagesUtils").isMe(author)) {
            if (isParentGroup === true) {
                return {
                    text: e ? s._("You changed the community description") : s._("You changed the community description. Click to view"),
                    enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED
                };
            }
            return {
                text: e ? s._("You changed the group description") : s._("You changed the group description. Click to view."),
                enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED
            };
        }
        if (authorClickable != null) {
            if (isParentGroup === true) {
                return {
                    text: e ? s._("{user_name} changed the community description", [
                        s._param("user_name", authorClickable)
                    ]) : s._("{user_name} changed the community description. Click to view", [
                        s._param("user_name", authorClickable)
                    ]),
                    enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED
                };
            }
            return {
                text: e ? s._("{user_name} changed the group description", [
                    s._param("user_name", authorClickable)
                ]) : s._("{user_name} changed the group description. Click to view", [
                    s._param("user_name", authorClickable)
                ]),
                enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED
            };
        }
        if (isParentGroup === true) {
            return {
                text: e ? s._("A member changed the community description") : s._("A member changed the community description. Click to view"),
                enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED
            };
        }
        return {
            text: e ? s._("A member changed the group description") : s._("A member changed the group description. Click to view"),
            enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED
        };
    }
    function c({ author, authorClickable, isParentGroup = false, shouldFormatAsLastMsg = false }) {
        return u({
            author,
            authorClickable,
            isParentGroup,
            shouldFormatAsLastMsg
        }).text;
    }
    l.formatDescriptionNotification = c;
}, 226);