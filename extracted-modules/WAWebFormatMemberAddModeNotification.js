__d("WAWebFormatMemberAddModeNotification", [
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
                return s._("You changed this group's setting to allow all members to add others to this group. Click to change.");
            }
            if (t) {
                return s._("{author} changed this group's setting to allow all members to add others to this group. Click to change.", [
                    s._param("author", r)
                ]);
            }
            return s._("{author} changed this group's setting to allow all members to add others to this group", [
                s._param("author", r)
            ]);
        }
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
            return s._("You changed this group's setting to allow only admins to add others to this group. Click to change.");
        }
        if (t) {
            return s._("{author} changed this group's setting to allow only admins to add others to this group. Click to change.", [
                s._param("author", r)
            ]);
        }
        return s._("{author} changed this group's setting to allow only admins to add others to this group", [
            s._param("author", r)
        ]);
    }
    l.default = e;
}, 226);