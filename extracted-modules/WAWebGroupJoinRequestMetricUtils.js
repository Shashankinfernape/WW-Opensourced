__d("WAWebGroupJoinRequestMetricUtils", [
    "WAWebWaFsGroupJoinRequestActionWamEvent",
    "WAWebWamEnumGroupJoinRequestActionType"
], function(t, n, r, o, a, i, l) {
    function e({ action, groupId, groupsInCommon, isSuccessful, responseTime }) {
        new (o("WAWebWaFsGroupJoinRequestActionWamEvent")).WaFsGroupJoinRequestActionWamEvent({
            groupJid: p(groupId),
            groupJoinRequestAction: action,
            groupJoinRequestGroupsInCommon: groupsInCommon,
            serverResponseTime: Math.round(responseTime),
            isSuccessful
        }).commit();
    }
    function s(t) {
        e(babelHelpers.extends({}, t, {
            action: o("WAWebWamEnumGroupJoinRequestActionType").GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_CREATE
        }));
    }
    function u(t) {
        e(babelHelpers.extends({}, t, {
            action: o("WAWebWamEnumGroupJoinRequestActionType").GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_CANCEL
        }));
    }
    function c(groupId) {
        e({
            groupId,
            action: o("WAWebWamEnumGroupJoinRequestActionType").GROUP_JOIN_REQUEST_ACTION_TYPE.VIEW_PENDING_PARTICIPANTS,
            responseTime: 0,
            isSuccessful: true
        });
    }
    function d(t) {
        e(babelHelpers.extends({}, t, {
            action: o("WAWebWamEnumGroupJoinRequestActionType").GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_APPROVE
        }));
    }
    function m(t) {
        e(babelHelpers.extends({}, t, {
            action: o("WAWebWamEnumGroupJoinRequestActionType").GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_REJECT
        }));
    }
    function p(e) {
        const n = e?.toJid() ?? "";
        if (n.includes("-")) {
            return "";
        }
        return n;
    }
    l.logMembershipRequestCreate = s;
    l.logMembershipRequestCancel = u;
    l.logViewPendingParticipant = c;
    l.logMembershipRequestApprove = d;
    l.logMembershipRequestReject = m;
    l.getSanitizedJid = p;
}, 98);