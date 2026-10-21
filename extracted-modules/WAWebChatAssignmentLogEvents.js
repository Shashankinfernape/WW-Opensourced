__d("WAWebChatAssignmentLogEvents", [
    "WAWebABProps",
    "WAWebAgentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatCollection",
    "WAWebChatFlowTypes",
    "WAWebFrontendChatGetters",
    "WAWebMdChatAssignmentSecondaryActionWamEvent",
    "WAWebMdChatAssignmentWamEvent",
    "WAWebMiscBrowserUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChatAssignmentActionType",
    "WAWebWamEnumChatAssignmentChatType",
    "WAWebWamEnumChatAssignmentEntryPointType",
    "WAWebWamEnumMdChatAssignmentAssignmentType",
    "WAWebWamEnumMdChatAssignmentSecondaryActionType",
    "WAWebWamEnumMdChatAssignmentSourceType"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
        return o("WAWebAgentCollection").AgentCollection.getModelsArray().find((t)=>t.deviceId === e);
    }
    function s(t, n) {
        const l = e();
        const s = o("WAWebABProps").getABPropConfigValue("smb_md_agent_chat_assignment_system_messages_logging_v2_enabled");
        if (!s) {
            delete n.mdChatAssignmentSecondaryActionAssignmentType;
        }
        return new (o("WAWebMdChatAssignmentSecondaryActionWamEvent")).MdChatAssignmentSecondaryActionWamEvent(babelHelpers.extends({
            mdChatAssignmentSecondaryActionAgentId: l?.id ?? "",
            mdChatAssignmentSecondaryActionBrowserId: r("WAWebMiscBrowserUtils").persistentExpiringId(),
            mdChatAssignmentSecondaryActionChatType: t?.getMdChatAssignmentChatType(),
            mdChatAssignmentSecondaryActionMdId: l?.deviceId ?? -1
        }, n));
    }
    function u(e) {
        if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
            s(e, {
                mdChatAssignmentSecondaryActionSource: o("WAWebWamEnumMdChatAssignmentSourceType").MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE,
                mdChatAssignmentSecondaryActionType: o("WAWebWamEnumMdChatAssignmentSecondaryActionType").MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_TOOLTIP_SHOWN
            }).commit();
        }
    }
    function c(e) {
        if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
            s(e, {
                mdChatAssignmentSecondaryActionAssignmentType: e.assignedAgent == null ? o("WAWebWamEnumMdChatAssignmentAssignmentType").MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.ASSIGNED : o("WAWebWamEnumMdChatAssignmentAssignmentType").MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.UNASSIGNED,
                mdChatAssignmentSecondaryActionSource: o("WAWebWamEnumMdChatAssignmentSourceType").MD_CHAT_ASSIGNMENT_SOURCE_TYPE.BOOTSTRAP,
                mdChatAssignmentSecondaryActionType: o("WAWebWamEnumMdChatAssignmentSecondaryActionType").MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_SYSTEM_MESSAGE_ADDED_TO_CHAT_HISTORY
            }).commit();
        }
    }
    function d(e) {
        if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
            s(e, {
                mdChatAssignmentSecondaryActionAssignmentType: e.assignedAgent == null ? o("WAWebWamEnumMdChatAssignmentAssignmentType").MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.ASSIGNED : o("WAWebWamEnumMdChatAssignmentAssignmentType").MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.UNASSIGNED,
                mdChatAssignmentSecondaryActionSource: o("WAWebWamEnumMdChatAssignmentSourceType").MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE,
                mdChatAssignmentSecondaryActionType: o("WAWebWamEnumMdChatAssignmentSecondaryActionType").MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_SYSTEM_MESSAGE_CREATION_ERROR
            }).commit();
        }
    }
    function m(e) {
        if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
            const t = o("WAWebChatCollection").ChatCollection.get(e);
            if (t != null) {
                s(t, {
                    mdChatAssignmentSecondaryActionSource: o("WAWebWamEnumMdChatAssignmentSourceType").MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE,
                    mdChatAssignmentSecondaryActionType: o("WAWebWamEnumMdChatAssignmentSecondaryActionType").MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_CHAT_STATUS_TICKER_SHOWN
                }).commit();
            }
        }
    }
    function p({ assigneeId, chat, props }) {
        const c = e();
        const d = o("WAWebAgentCollection").AgentCollection.get(assigneeId);
        const assignerMdId = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
        const p = assigneeId === c?.id;
        return new (o("WAWebMdChatAssignmentWamEvent")).MdChatAssignmentWamEvent(babelHelpers.extends({
            assignerAgentId: c?.id ?? "",
            assignerBrowserId: r("WAWebMiscBrowserUtils").persistentExpiringId(),
            assignerMdId,
            chatAssignmentAgentId: d?.id ?? "",
            chatAssignmentBrowserId: p ? r("WAWebMiscBrowserUtils").persistentExpiringId() : "",
            chatAssignmentChatType: g(chat),
            chatAssignmentMdId: d?.deviceId ?? -1
        }, props));
    }
    function _(e) {
        switch(e){
            case o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.MULTI_SELECT:
                return o("WAWebWamEnumChatAssignmentEntryPointType").CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.MULTI_SELECT;
            case o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.SYSTEM_MESSAGE:
                return o("WAWebWamEnumChatAssignmentEntryPointType").CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.SYSTEM_MESSAGE;
            case o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONVERSATION_MENU:
                return o("WAWebWamEnumChatAssignmentEntryPointType").CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.CONVERSATION_OVERFLOW_MENU;
            case o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN:
                return o("WAWebWamEnumChatAssignmentEntryPointType").CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.CONTACT_INFO_SCREEN;
        }
    }
    function f(e, assigneeId, n, r, chatsCnt) {
        if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
            let chatAssignmentAction;
            if (assigneeId === "") {
                chatAssignmentAction = o("WAWebWamEnumChatAssignmentActionType").CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_UNASSIGNED;
            } else if (n) {
                chatAssignmentAction = o("WAWebWamEnumChatAssignmentActionType").CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_REASSIGNED;
            } else {
                chatAssignmentAction = o("WAWebWamEnumChatAssignmentActionType").CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_ASSIGNED;
            }
            p({
                assigneeId,
                chat: e,
                props: {
                    chatAssignmentAction,
                    chatAssignmentEntryPoint: _(r),
                    chatsCnt
                }
            }).commit();
        }
    }
    function g(chat) {
        const t = o("WAWebFrontendChatGetters").getKind(chat);
        if (t != null) {
            switch(t){
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                    return o("WAWebWamEnumChatAssignmentChatType").CHAT_ASSIGNMENT_CHAT_TYPE.INDIVIDUAL;
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                    return o("WAWebWamEnumChatAssignmentChatType").CHAT_ASSIGNMENT_CHAT_TYPE.GROUP;
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                case o("WAWebChatFlowTypes").ChatKindType.Community:
                    return o("WAWebWamEnumChatAssignmentChatType").CHAT_ASSIGNMENT_CHAT_TYPE.COMMUNITY;
                case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                    return o("WAWebWamEnumChatAssignmentChatType").CHAT_ASSIGNMENT_CHAT_TYPE.CHANNEL;
            }
        } else {
            const n = new TypeError(`Invalid Chat.kind ${String(t)}`);
            n.stack;
            throw n;
        }
    }
    l.logNuxShown = u;
    l.logSystemMessageGeneratedFromCompanion = c;
    l.logSystemMessageFailedToGenerate = d;
    l.logChatStatusTickerShown = m;
    l.logChatAssignment = f;
}, 98);