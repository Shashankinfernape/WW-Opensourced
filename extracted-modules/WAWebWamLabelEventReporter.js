__d("WAWebWamLabelEventReporter", [
    "$InternalEnum",
    "WAWebGetSharedSessionId",
    "WAWebLabelEventWamEvent",
    "WAWebMobilePlatforms",
    "WAWebUnifiedSession"
], function(t, n, r, o, a, i, l) {
    const s = n("$InternalEnum")({
        CHAT_HEADER: "chat_header",
        CONTACT_INFO: "contact_info",
        GROUP_INFO: "group_info",
        CHAT_OVERFLOW: "chat_overflow",
        CHAT_LIST_CONTEXT_MENU: "chat_list_context_menu",
        LIST_SETTINGS: "list_settings",
        LIST_NUX: "list_nux",
        BROADCAST_LIST_CHAT_INFO_OVERFLOW: "broadcast_list_chat_info_overflow"
    });
    const u = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? o("WAWebGetSharedSessionId").getSharedSessionId();
    function c(labelOperation, t, n, r, a, i, l, s) {
        const c = {
            labelOperation
        };
        if (t != null) {
            c.labelCount = t;
        }
        if (n) {
            c.labelTarget = n;
        }
        if (r != null && o("WAWebMobilePlatforms").isSMB()) {
            c.threadIdHmac = r;
        }
        if (a != null) {
            c.predefinedLabelNumber = a;
        }
        if (i != null) {
            c.customLabelTitle = i;
        }
        if (l != null) {
            c.entryPointConversionSource = l;
        }
        if (s != null) {
            c.labelOperationEntryPoint = s;
        }
        c.appSessionId = u;
        const d = new (o("WAWebLabelEventWamEvent")).LabelEventWamEvent(c);
        d.commit();
    }
    l.LabelOperationEntryPoints = s;
    l.logLabelOperationEvent = c;
}, 98);