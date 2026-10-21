__d("WAWebResendMsgAction", [
    "Promise",
    "WAWebAck",
    "WAWebDBUpdateMessageTable",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterSendMsgAction",
    "WAWebSendHistoryBundleAction",
    "WAWebSendMessageEditAction",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        if (o("WAWebMsgGetters").getIsFailed(t)) {
            if (o("WAWebMsgGetters").getIsEdited(t)) {
                return o("WAWebSendMessageEditAction").resendLatestEdit(t);
            }
            const r = {
                ack: o("WAWebAck").ACK.CLOCK
            };
            r.isSendFailure = false;
            t.enqueueAckUpdate(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, r);
                t.set(r);
            }));
            if (o("WAWebMsgGetters").getIsNewsletterMsg(t)) {
                return o("WAWebNewsletterSendMsgAction").resendNewsletterMsg(t).then((e)=>e && e.messageSendResult);
            }
            if (t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE) {
                return o("WAWebSendMsgRecordAction").sendMsgRecord(t).then((e)=>{
                    if (e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                        o("WAWebSendHistoryBundleAction").completeGroupHistorySendOnBundleResend(t);
                    }
                    return e.messageSendResult;
                });
            }
            if (o("WAWebFrontendMsgGetters").getAsMms(t)) {
                if (o("WAWebMsgGetters").getIsSentByMeFromWeb(t)) {
                    return t.resumeUpload();
                }
                return t.resumeRemoteUpload();
            }
            return o("WAWebSendMsgRecordAction").sendMsgRecord(t).then((e)=>e.messageSendResult);
        }
        return (e || (e = n("Promise"))).resolve();
    }
    l.resendMsg = s;
}, 98);