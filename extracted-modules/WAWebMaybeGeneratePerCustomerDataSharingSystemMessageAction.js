__d("WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction", [
    "WAPromiseQueue",
    "WAWebCTWADataSharingModel",
    "WAWebCommonCTWADataSharing",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgType",
    "WAWebPerCustomerDataSharingControlLogging",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = new (o("WAPromiseQueue")).PromiseQueueMap;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ accountLid, entryPoint, globalDataSharingEntryPoint, perCustomerDataSharingState }) {
            yield e.enqueue(accountLid, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
                const t = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion();
                if (o("WAWebPerCustomerDataSharingUtils").isPerCustomerDataSharingFeatureEnabled(accountLid, e)) {
                    const n = o("WAWebWidFactory").createWid(accountLid);
                    const s = yield o("WAWebPerCustomerDataSharingUtils").getLastDataSharingState(n);
                    const u = o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(e, t);
                    const currentOptInStatus = perCustomerDataSharingState && u;
                    if (!(s != null && s === currentOptInStatus)) {
                        const d = o("WAWebContactSystemMsg").genNotificationMsg(n, {
                            type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                            subtype: currentOptInStatus ? "biz_per_customer_3pd_data_share_opt_in" : "biz_per_customer_3pd_data_share_opt_out",
                            templateParams: []
                        });
                        yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                            chatId: n,
                            newMsg: d,
                            handleSingleMsgOrigin: "perCustomerDataSharingNotification",
                            preserveOrder: false
                        });
                        o("WAWebPerCustomerDataSharingControlLogging").logPerCustomerDataSharingControlEvent({
                            action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.SYSTEM_MESSAGE_INSERTED,
                            currentOptInStatus,
                            entryPoint,
                            globalDataSharingEntryPoint
                        });
                    }
                }
            }));
        });
        return u.apply(this, arguments);
    }
    l.maybeGeneratePerCustomerDataSharingSystemMessage = s;
}, 98);