__d("WAWebFormatAllowNonAdminSubGroupCreationNotification", [
    "fbt",
    "WAWebGroupType"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        let n;
        const r = t[0] && o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(t[0].toString()) === o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On;
        const a = !!((n = e.groupMetadata) != null && n.participants.iAmAdmin());
        if (r) {
            if (a) {
                return s._("Everyone in this community can now add groups. Click to change.");
            }
            return s._("Everyone in this community can now add groups.");
        }
        if (a) {
            return s._("Only community admins can add groups. Members can suggest groups for admin approval. Click to change.");
        }
        return s._("Only community admins can add groups. Members can suggest groups for admin approval.");
    }
    l.default = e;
}, 226);