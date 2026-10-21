__d("WAWebGroupHistoryPostJoinEligibility", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return {
            groupType: o("WAWebGroupMetadataGetters").getGroupType(e),
            groupWid: e.id,
            hasCapi: e.hasCapi,
            iAmAdmin: e.participants.iAmAdmin(),
            iAmSuperAdmin: e.participants.iAmSuperAdmin(),
            memberShareGroupHistoryMode: e.memberShareGroupHistoryMode
        };
    }
    function s(groupType) {
        if (groupType === o("WAWebGroupType").GroupType.DEFAULT || groupType === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) {
            return true;
        }
        return groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
    }
    function u(e, t, n) {
        if (e || t) {
            return true;
        }
        return n === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ALL_MEMBER_SHARE;
    }
    function c(e, t, n) {
        if (e == null) {
            return false;
        }
        return e.some((e)=>e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e) && (n == null || n.get(e.toString()) === t));
    }
    function d(e, t, n) {
        return m(t) && f(e, n).eligible;
    }
    function m(e) {
        if (o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderPrerequisitesEnabled()) {
            return p(e);
        }
        return false;
    }
    function p(e) {
        if (!s(e.groupType) || e.hasCapi === true) {
            return false;
        }
        return u(e.iAmAdmin, e.iAmSuperAdmin, e.memberShareGroupHistoryMode);
    }
    function _(e) {
        return o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e);
    }
    function f(e, t) {
        if (o("WAWebGroupHistoryRestrictionHelper").isHistoryRestrictedWid(e.id)) {
            return {
                eligible: false,
                reason: "bot"
            };
        }
        const r = e.joinTime ?? t;
        if (r == null) {
            return {
                eligible: false,
                reason: "no_join_time"
            };
        }
        if (g(e.groupHistorySentState)) {
            return {
                eligible: false,
                reason: "already_received"
            };
        }
        const a = o("WAWebABProps").getABPropConfigValue("group_history_new_user_threshold_secs");
        if (o("WATimeUtils").unixTime() - r > a) {
            return {
                eligible: false,
                reason: "window_expired"
            };
        }
        return {
            eligible: true
        };
    }
    function g(e) {
        return e === o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.HISTORY_SENT || e === o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState.NOTICE_SENT;
    }
    function h(e, t, n) {
        if (e == null || !e.startOfHistoryLoaded) {
            return false;
        }
        const { earliestShareableMsgT, latestShareableMsgT } = e;
        if (earliestShareableMsgT == null) {
            return true;
        }
        if (t == null) {
            return false;
        }
        if (earliestShareableMsgT > t) {
            return true;
        }
        if (n != null && latestShareableMsgT != null) {
            const i = o("WAWebGroupHistoryGating").getGroupHistoryMessagesTimeLimitSecs(n);
            if (latestShareableMsgT < t - i) {
                return true;
            }
        }
        return false;
    }
    function y(e, t, n, r) {
        return d(e, t, n) && !h(r, e.joinTime ?? n, t.groupWid);
    }
    function C(e, t, n, r) {
        return y(e, t, n, r) && _(t.groupWid);
    }
    function b(t) {
        if (!o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderOrInternalTesterEnabled(t.id)) {
            return [];
        }
        const n = e(t);
        return t.participants.getModelsArray().filter((e)=>d(e, n));
    }
    l.groupContextFromMetadata = e;
    l.canCurrentUserShareHistory = u;
    l.hasResolvableNonSelfRecipient = c;
    l.isEligibleForPostJoinHistory = d;
    l.isPostJoinHistoryGroupEligible = m;
    l.isPostJoinHistoryGroupStructurallyEligible = p;
    l.isPostJoinHistoryExperimentArmEnabled = _;
    l.getParticipantPostJoinEligibility = f;
    l.isAlreadyReceivedState = g;
    l.hasNoShareableHistoryBeforeJoin = h;
    l.canSendPostJoinHistoryToParticipant = y;
    l.shouldOfferPostJoinHistoryToParticipant = C;
    l.getEligiblePostJoinParticipants = b;
}, 98);