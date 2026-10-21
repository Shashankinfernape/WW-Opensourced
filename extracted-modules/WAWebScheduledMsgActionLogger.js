__d("WAWebScheduledMsgActionLogger", [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebChatGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebScheduledMessageActionWamEvent",
    "WAWebScheduledMsgStore",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupRoleType",
    "WAWebWamEnumScheduledMessageActionType",
    "WAWebWamMsgUtils",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        h(e, o("WAWebWamEnumScheduledMessageActionType").SCHEDULED_MESSAGE_ACTION_TYPE.OPEN_SCHEDULE_DATE_TIME_PICKER, {});
    }
    function d(e) {
        h(e, o("WAWebWamEnumScheduledMessageActionType").SCHEDULED_MESSAGE_ACTION_TYPE.SELECT_DATE_TIME, {});
    }
    function m(e, { countBeforeAction, futureDurationSecs, toScheduledCount }) {
        h(e, o("WAWebWamEnumScheduledMessageActionType").SCHEDULED_MESSAGE_ACTION_TYPE.TAP_SCHEDULE_BUTTON, {
            scheduledMessageCount: countBeforeAction,
            scheduledMessageFutureDurationSecs: futureDurationSecs,
            scheduledMessageToScheduledCount: toScheduledCount
        });
    }
    function p(t, { scheduledTimestampS, toScheduledCount }) {
        o("WAWebScheduledMsgStore").getScheduledMessageCount(o("WAJids").unsafeCoerceToChatJid(t.id.toJid())).then((e)=>{
            m(t, {
                countBeforeAction: e,
                futureDurationSecs: Math.max(0, Math.floor(scheduledTimestampS - o("WATimeUtils").unixTime())),
                toScheduledCount
            });
        }).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][wam] tap-schedule count read failed: ",
                ""
            ])), r("getErrorSafe")(t));
        });
    }
    function _(e, { countBeforeAction, entrypoint }) {
        h(e, o("WAWebWamEnumScheduledMessageActionType").SCHEDULED_MESSAGE_ACTION_TYPE.VIEW_SCHEDULED_MESSAGE_LIST, {
            scheduledMessageCount: countBeforeAction,
            scheduledMessageEntrypoint: entrypoint
        });
    }
    function f(e, t) {
        o("WAWebScheduledMsgStore").getScheduledMessageCount(o("WAJids").unsafeCoerceToChatJid(e.id.toJid())).then((n)=>{
            _(e, {
                countBeforeAction: n,
                entrypoint: t
            });
        }).catch((e)=>{
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][wam] view-list count read failed: ",
                ""
            ])), r("getErrorSafe")(e));
        });
    }
    function g(e, scheduledMessageToUnscheduleCount) {
        h(e, o("WAWebWamEnumScheduledMessageActionType").SCHEDULED_MESSAGE_ACTION_TYPE.TAP_UNSCHEDULE_BUTTON, {
            scheduledMessageToUnscheduleCount
        });
    }
    function h(e, scheduledMessageActionType, n) {
        const r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
        if (r == null) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][wam] Unified session ID is null"
            ])));
            return;
        }
        new (o("WAWebScheduledMessageActionWamEvent")).ScheduledMessageActionWamEvent(babelHelpers.extends({}, y(e), n, {
            scheduledMessageActionType,
            unifiedSessionId: r
        })).commit();
    }
    function y(e) {
        const messageType = o("WAWebWamMsgUtils").getWamMessageTypeForScheduledMsg(e.id);
        const e_groupMetadata = e.groupMetadata;
        if (!o("WAWebChatGetters").getIsGroup(e) || e_groupMetadata == null) {
            return {
                messageType
            };
        }
        return {
            groupRole: e_groupMetadata.participants.iAmAdmin() ? o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.ADMIN : o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.MEMBER,
            groupTypeClient: o("WAWebGroupType").groupTypeToGroupTypeClient(o("WAWebGroupMetadataGetters").getGroupType(e_groupMetadata)),
            messageType
        };
    }
    l.logScheduledMsgOpenPicker = c;
    l.logScheduledMsgSelectDateTime = d;
    l.logScheduledMsgTapSchedule = m;
    l.logScheduledMsgTapScheduleForChat = p;
    l.logScheduledMsgViewList = _;
    l.logScheduledMsgViewListForChat = f;
    l.logScheduledMsgTapUnschedule = g;
}, 98);