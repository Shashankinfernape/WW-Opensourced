__d("WAWebChatOpenMetricsStore", [
    "WAWebLidMigrationUtils",
    "WAWebQplFlowWrapper",
    "WAWebRenderCursorGetWindowHeight",
    "WAWebUiActionWamEvent",
    "WAWebWamEnumUiActionType",
    "WAWebWebcChatOpenWamEvent",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891425633, "3259");
    const s = new Map;
    function u(t) {
        const isLid = o("WAWebLidMigrationUtils").chatIsLid(t);
        const a = r("WAWebRenderCursorGetWindowHeight")();
        const uiActionEvent = new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
            uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.CHAT_OPEN,
            uiActionPreloaded: true,
            isLid
        });
        const openEvent = new (o("WAWebWebcChatOpenWamEvent")).WebcChatOpenWamEvent({
            webcUnreadCount: t.unreadCount,
            webcWindowHeightFloat: a
        });
        const instanceKey = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
            annotations: {
                int: {
                    unreadMessageCount: t.unreadCount,
                    windowHeight: a
                }
            },
            cancelExisting: true,
            cancelOnUnload: true
        }).instanceKey;
        s.set(t.id.toString(), {
            instanceKey,
            openEvent,
            uiActionEvent
        });
    }
    function c(e) {
        const t = e.id.toString();
        const n = s.get(t);
        if (n == null) {
            return null;
        }
        s.delete(t);
        return n;
    }
    l.startChatOpenMetrics = u;
    l.consumeChatOpenMetrics = c;
}, 98);