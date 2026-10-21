__d("WAWebCallLogViewModeProcessor", [
    "WAWebBoolFunc",
    "WAWebCreateViewModeProcessor",
    "WAWebMsgType",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = (e = o("WAWebCreateViewModeProcessor")).createViewModeProcessor({
        type: (s = o("WAWebViewMode.flow")).ViewModeType.HISTORY_SYNCED_CALL_LOG,
        compatibleMessageTypes: [
            (u = o("WAWebMsgType")).MSG_TYPE.CALL_LOG
        ],
        messageVisibleInChat: (c = o("WAWebBoolFunc")).returnFalse,
        messageVisibleInChatlistPreview: c.returnFalse,
        shouldShowInNotification: c.returnFalse,
        shouldShowInSearch: c.returnTrue,
        shouldIncludeInChatSpamReport: c.returnFalse
    });
    const m = e.createViewModeProcessor({
        type: s.ViewModeType.CALL_LOG_OFFLINE_RESUME,
        compatibleMessageTypes: [
            u.MSG_TYPE.CALL_LOG
        ],
        messageVisibleInChat: c.returnFalse,
        messageVisibleInChatlistPreview: c.returnFalse,
        shouldShowInNotification: c.returnFalse,
        shouldShowInSearch: c.returnTrue,
        shouldIncludeInChatSpamReport: c.returnFalse
    });
    const p = e.createViewModeProcessor({
        type: s.ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED,
        compatibleMessageTypes: [
            u.MSG_TYPE.CALL_LOG
        ],
        messageVisibleInChat: c.returnTrue,
        messageVisibleInChatlistPreview: c.returnTrue,
        shouldShowInNotification: c.returnFalse,
        shouldShowInSearch: c.returnTrue,
        shouldIncludeInChatSpamReport: c.returnFalse
    });
    const _ = e.createViewModeProcessor({
        type: s.ViewModeType.CALL_LOG_AD_HOC_GROUP_CALL,
        compatibleMessageTypes: [
            u.MSG_TYPE.CALL_LOG
        ],
        messageVisibleInChat: c.returnFalse,
        messageVisibleInChatlistPreview: c.returnFalse,
        shouldShowInNotification: c.returnFalse,
        shouldShowInSearch: c.returnTrue,
        shouldIncludeInChatSpamReport: c.returnFalse
    });
    l.HistorySyncedCallLogViewModeProcessor = d;
    l.CallLogOfflineResumeViewModeProcessor = m;
    l.CallLogOfflineResumePromotedViewModeProcessor = p;
    l.CallLogAdHocGroupCallViewModeProcessor = _;
}, 98);