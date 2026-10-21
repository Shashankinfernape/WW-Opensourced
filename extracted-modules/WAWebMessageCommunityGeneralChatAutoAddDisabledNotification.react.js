__d("WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react", [
    "fbt",
    "WAWebCommunityGatingUtils",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        const a = o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.cast(t[0]?.toString()) ?? o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.Full;
        if (a === o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.Server) {
            return s._("New community members will no longer be automatically added.");
        }
        if (o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()) {
            return s._("\"{subgroup_name}\" is now full.", [
                s._param("subgroup_name", e)
            ]);
        }
        return s._("\"{subgroup_name}\" is now full. New community members will no longer be automatically added to it.", [
            s._param("subgroup_name", e)
        ]);
    }
    l.communityGeneralChatAutoAddDisabledNotification = e;
}, 226);