__d("WAWebMemberShareGroupHistoryModeFormatSystemMessageText", [
    "fbt",
    "WALogger",
    "WAWebFormatParticipantNames",
    "WAWebGroupHistoryShareMode",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    function c({ msg }) {
        const a = msg.templateParams?.[0];
        if (a == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] memberShareGroupHistoryMode null"
            ])));
            return "";
        }
        const i = o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.cast(a.toString());
        if (i == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] memberShareGroupHistoryMode invalid"
            ])));
            return "";
        }
        const l = o("WAWebUserPrefsMeUser").isMeAccount(msg.author);
        const msg_author = msg.author;
        if (l) {
            if (i === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ADMIN_SHARE) {
                return s._("You changed this group's settings to allow only admins to send message history to new members.");
            }
            if (i === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ALL_MEMBER_SHARE) {
                return s._("You changed this group's settings to allow all members to send message history to new members.");
            }
        }
        const d = msg_author ? o("WAWebFormatParticipantNames").getFormattedName({
            jid: msg_author
        }) : null;
        if (i === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ADMIN_SHARE) {
            if (d == null) {
                return s._("This group's settings have changed to allow only admins to send message history to new members.");
            }
            return s._("{name} changed this group's settings to allow only admins to send message history to new members.", [
                s._param("name", d)
            ]);
        }
        if (i === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ALL_MEMBER_SHARE) {
            if (d == null) {
                return s._("This group's settings have changed to allow all members to send message history to new members.");
            }
            return s._("{name} changed this group's settings to allow all members to send message history to new members.", [
                s._param("name", d)
            ]);
        }
        return "";
    }
    l.default = c;
}, 226);