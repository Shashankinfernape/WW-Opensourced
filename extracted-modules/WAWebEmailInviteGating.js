__d("WAWebEmailInviteGating", [
    "WAWebABProps",
    "WAWebGroupMemberLinkMode"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebABProps").getABPropConfigValue("web_email_invites_group_info");
    }
    function s(t) {
        return c(t) && e();
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("web_email_invites_server_send_enabled");
    }
    function c({ iAmAdmin, iAmMember, isInviteLinkRestricted, isSupportGroup, memberLinkMode }) {
        return !isSupportGroup && !isInviteLinkRestricted && (iAmAdmin || iAmMember && memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK);
    }
    l.isEmailInviteEntryPointEnabled = e;
    l.isInviteByEmailEnabled = s;
    l.isEmailInviteServerSendEnabled = u;
}, 98);