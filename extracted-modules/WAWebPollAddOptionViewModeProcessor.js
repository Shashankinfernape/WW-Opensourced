__d("WAWebPollAddOptionViewModeProcessor", [
    "WAWebBoolFunc",
    "WAWebCreateViewModeProcessor",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WAWebCreateViewModeProcessor").createViewModeProcessor({
        type: o("WAWebViewMode.flow").ViewModeType.POLL_ADD_OPTION,
        messageVisibleInChat: (e = o("WAWebBoolFunc")).returnTrue,
        messageVisibleInChatlistPreview: e.returnTrue,
        shouldShowInNotification: e.returnTrue,
        shouldShowInSearch: e.returnFalse,
        shouldIncludeInChatSpamReport: e.returnTrue
    });
    l.default = s;
}, 98);