__d("WAWebFormatMemberLinkModeNotification", [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebGroupType",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
        let r;
        if (e) {
            r = o("WAWebFormatParticipantNames").getFormattedName({
                clickable: false,
                jid: e
            });
        }
        const a = n[0] && o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(n[0].toString()) === o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On;
        if (a) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
                if (t) {
                    return s._("You changed this group's setting to allow all members to share invite links to this group. You can currently only change this on your phone.");
                }
                return s._("You changed this group's setting to allow all members to share invite links to this group.");
            }
            if (t) {
                return s._("{author} changed this group's setting to allow all members to share invite links to this group. You can currently only change this on your phone.", [
                    s._param("author", r)
                ]);
            }
            return s._("{author} changed this group's setting to allow all members to share invite links to this group.", [
                s._param("author", r)
            ]);
        }
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
            if (t) {
                return s._("You changed this group's setting to allow only admins to share invite links to this group. You can currently only change this on your phone.");
            }
            return s._("You changed this group's setting to allow only admins to share invite links to this group.");
        }
        if (t) {
            return s._("{author} changed this group's setting to allow only admins to share invite links to this group. You can currently only change this on your phone.", [
                s._param("author", r)
            ]);
        }
        return s._("{author} changed this group's setting to allow only admins to share invite links to this group.", [
            s._param("author", r)
        ]);
    }
    l.default = e;
}, 226);