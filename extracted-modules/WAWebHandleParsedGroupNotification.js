__d("WAWebHandleParsedGroupNotification", [
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebHandleGroupNotificationAction",
    "WAWebHandleGroupNotificationV2",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebOfflineHandler",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = !!e.offline && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
        if (o("WAWebHandleGroupNotificationV2").isGroupNotificationOptimizationEligible(e, t) && t) {
            return o("WAWebHandleGroupNotificationV2").handleGroupNotificationV2(e, t);
        }
        return o("WAWebMessageQueue").onMessageQueue({
            chatWid: e.chatId,
            isOffline: t,
            msgCategory: null,
            action: (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebHandleGroupNotificationAction").handleActions({
                        isOffline: t,
                        meta: e
                    });
                    return o("WAWap").wap("ack", {
                        to: o("WAWebCommsWapMd").GROUP_JID(e.chatId),
                        id: o("WAWap").CUSTOM_STRING(e.externalId),
                        class: "notification",
                        type: "w:gp2",
                        participant: e.author ? o("WAWebCommsWapMd").USER_JID(e.author) : o("WAWap").DROP_ATTR
                    });
                });
                function a() {
                    return r.apply(this, arguments);
                }
                return a;
            })()
        }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "group_notification"));
    }
    l.handleParsedGroupNotification = e;
}, 98);