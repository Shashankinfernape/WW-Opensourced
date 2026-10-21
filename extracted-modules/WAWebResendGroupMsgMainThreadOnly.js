__d("WAWebResendGroupMsgMainThreadOnly", [
    "WAWebCreateSendMsgRecord",
    "WAWebGroupMsgSendUtils",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebOutgoingMessage",
    "WAWebResendGroupMsg",
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
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ackTime, groupId, isDirect, msgId, msgRecordType, msgType, oldList, phash, serverAddressingMode }) {
            const oldList_1 = oldList.map((e)=>o("WAWebWidFactory").createWid(e));
            const p = yield o("WAWebCreateSendMsgRecord").createMsgRecord(msgId, msgType, msgRecordType);
            if (p == null) {
                throw r("err")("resendUserGroupMsgJob failed to deserialize msg from db");
            }
            const _ = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(groupId);
            const groupData = yield o("WAWebGroupMsgSendUtils").getGroupData(groupId.toString(), _, p);
            const g = p.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message ? o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(p.data, o("WAWebMessageSendReporterFrontendDeps").MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS) : o("WAWebSendMsgMetricReporter").createAddonMetricReporter(p.data);
            g.sendReporter = g.createSendReporter({
                isResend: true,
                originalMessage: p.type === "message" ? p.data : undefined
            });
            const h = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.ChatResend, p);
            return o("WAWebResendGroupMsg").resendGroupMsg({
                isDirect,
                msgRecord: p,
                msgProtobuf: h,
                groupData,
                ackTime,
                oldList: oldList_1,
                phash,
                metricReporter: g,
                serverAddressingMode
            });
        });
        return s.apply(this, arguments);
    }
    l.resendGroupMsgMainThreadOnly = e;
}, 98);