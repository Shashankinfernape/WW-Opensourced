__d("WAWebFormatReportToAdminNotification", [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebGroupType",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        const n = t[0] && o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(t[0].toString()) === o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On;
        const r = t[1] && o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.cast(t[1].toString()) === o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin;
        const a = o("WAWebUserPrefsMeUser").isMeAccount(e);
        if (a) {
            const i = s._("You turned on send for admin review for this group. Click to change.");
            const l = s._("You turned off send for admin review for this group. Click to change.");
            if (n) {
                return i;
            }
            return l;
        }
        if (e) {
            const u = o("WAWebFormatParticipantNames").getFormattedName({
                clickable: false,
                jid: e
            });
            const c = s._("{author} turned on send for admin review for this group. Click to change.", [
                s._param("author", u)
            ]);
            const d = s._("{author} turned off send for admin review for this group. Click to change.", [
                s._param("author", u)
            ]);
            const m = s._("{author} turned on send for admin review for this group. Click to learn more.", [
                s._param("author", u)
            ]);
            const p = s._("{author} turned off send for admin review for this group. Click to learn more.", [
                s._param("author", u)
            ]);
            if (r) {
                if (n) {
                    return c;
                }
                return d;
            }
            if (n) {
                return m;
            }
            return p;
        }
        const _ = s._("Send for admin review is turned on for this group. Click to change.");
        const f = s._("Send for admin review is turned off for this group. Click to change.");
        const g = s._("Send for admin review is turned on for this group. Click to learn more.");
        const h = s._("Send for admin review is turned off for this group. Click to learn more.");
        if (r) {
            if (n) {
                return _;
            }
            return f;
        }
        if (n) {
            return g;
        }
        return h;
    }
    l.formatReportToAdminNotification = e;
}, 226);