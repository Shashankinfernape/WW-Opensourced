__d("WAWebResendUserMsgMainThreadOnly", [
    "WAWebCreateSendMsgRecord",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebOutgoingMessage",
    "WAWebPnlessStanzaMigration",
    "WAWebResendUserMsg",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ackTime, excludeList, msgId, msgRecordType, msgType }) {
            const excludeList_1 = excludeList.map((e)=>o("WAWebWidFactory").createWid(e));
            const u = yield o("WAWebCreateSendMsgRecord").createMsgRecord(msgId, msgType, msgRecordType);
            if (u == null) {
                throw r("err")("resendUserMsgJob failed to deserialize msg from db");
            }
            const c = u.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message ? o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(u.data, o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS) : o("WAWebSendMsgMetricReporter").createAddonMetricReporter(u.data);
            c.sendReporter = c.createSendReporter({
                isResend: true,
                originalMessage: u.type === "message" ? u.data : undefined
            });
            const d = u.data.to;
            yield o("WAWebPnlessStanzaMigration").maybeReplaceWidWithAccountLid(u);
            const m = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.ChatResend, u);
            return o("WAWebResendUserMsg").resendUserMsg({
                ackTime,
                chatId: d,
                excludeList: excludeList_1,
                metricReporter: c,
                msgProtobuf: m,
                msgRecord: u
            });
        });
        return s.apply(this, arguments);
    }
    l.resendUserMsgMainThreadOnly = e;
}, 98);