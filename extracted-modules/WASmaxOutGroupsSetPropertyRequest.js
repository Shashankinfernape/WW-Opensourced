__d("WASmaxOutGroupsSetPropertyRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxJsx").smax("locked", null);
        return e;
    }
    function s() {
        const e = o("WASmaxJsx").smax("announcement", null);
        return e;
    }
    function u() {
        const e = o("WASmaxJsx").smax("no_frequently_forwarded", null);
        return e;
    }
    function c({ ephemeralExpiration, ephemeralTrigger }) {
        const r = o("WASmaxJsx").smax("ephemeral", {
            expiration: o("WAWap").INT(ephemeralExpiration),
            trigger: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, ephemeralTrigger)
        });
        return r;
    }
    function d() {
        const e = o("WASmaxJsx").smax("unlocked", null);
        return e;
    }
    function m() {
        const e = o("WASmaxJsx").smax("not_announcement", null);
        return e;
    }
    function p() {
        const e = o("WASmaxJsx").smax("frequently_forwarded_ok", null);
        return e;
    }
    function _() {
        const e = o("WASmaxJsx").smax("not_ephemeral", null);
        return e;
    }
    function f(e) {
        const t = o("WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin").mergeMembershipApprovalGroupJoinModeMixin(o("WASmaxJsx").smax("membership_approval_mode", null), e);
        return t;
    }
    function g() {
        const e = o("WASmaxJsx").smax("allow_admin_reports", null);
        return e;
    }
    function h() {
        const e = o("WASmaxJsx").smax("not_allow_admin_reports", null);
        return e;
    }
    function y() {
        const e = o("WASmaxJsx").smax("allow_non_admin_sub_group_creation", null);
        return e;
    }
    function C() {
        const e = o("WASmaxJsx").smax("not_allow_non_admin_sub_group_creation", null);
        return e;
    }
    function b() {
        const e = o("WASmaxJsx").smax("group_history", null);
        return e;
    }
    function v() {
        const e = o("WASmaxJsx").smax("no_group_history", null);
        return e;
    }
    function S(t) {
        let n;
        const { hasLocked, hasAnnouncement, hasNoFrequentlyForwarded, ephemeralArgs, hasUnlocked, hasNotAnnouncement, hasFrequentlyForwardedOk, hasNotEphemeral, membershipApprovalModeArgs, hasAllowAdminReports, hasNotAllowAdminReports, hasAllowNonAdminSubGroupCreation, hasNotAllowNonAdminSubGroupCreation, hasGroupHistory, hasNoGroupHistory } = t;
        const N = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(o("WASmaxJsx").smax("iq", null, (n = o("WASmaxChildren")).HAS_OPTIONAL_CHILD(e, hasLocked), n.HAS_OPTIONAL_CHILD(s, hasAnnouncement), n.HAS_OPTIONAL_CHILD(u, hasNoFrequentlyForwarded), n.OPTIONAL_CHILD(c, ephemeralArgs), n.HAS_OPTIONAL_CHILD(d, hasUnlocked), n.HAS_OPTIONAL_CHILD(m, hasNotAnnouncement), n.HAS_OPTIONAL_CHILD(p, hasFrequentlyForwardedOk), n.HAS_OPTIONAL_CHILD(_, hasNotEphemeral), n.OPTIONAL_CHILD(f, membershipApprovalModeArgs), n.HAS_OPTIONAL_CHILD(g, hasAllowAdminReports), n.HAS_OPTIONAL_CHILD(h, hasNotAllowAdminReports), n.HAS_OPTIONAL_CHILD(y, hasAllowNonAdminSubGroupCreation), n.HAS_OPTIONAL_CHILD(C, hasNotAllowNonAdminSubGroupCreation), n.HAS_OPTIONAL_CHILD(b, hasGroupHistory), n.HAS_OPTIONAL_CHILD(v, hasNoGroupHistory)), t);
        return N;
    }
    l.makeSetPropertyRequestLocked = e;
    l.makeSetPropertyRequestAnnouncement = s;
    l.makeSetPropertyRequestNoFrequentlyForwarded = u;
    l.makeSetPropertyRequestEphemeral = c;
    l.makeSetPropertyRequestUnlocked = d;
    l.makeSetPropertyRequestNotAnnouncement = m;
    l.makeSetPropertyRequestFrequentlyForwardedOk = p;
    l.makeSetPropertyRequestNotEphemeral = _;
    l.makeSetPropertyRequestMembershipApprovalMode = f;
    l.makeSetPropertyRequestAllowAdminReports = g;
    l.makeSetPropertyRequestNotAllowAdminReports = h;
    l.makeSetPropertyRequestAllowNonAdminSubGroupCreation = y;
    l.makeSetPropertyRequestNotAllowNonAdminSubGroupCreation = C;
    l.makeSetPropertyRequestGroupHistory = b;
    l.makeSetPropertyRequestNoGroupHistory = v;
    l.makeSetPropertyRequest = S;
}, 98);