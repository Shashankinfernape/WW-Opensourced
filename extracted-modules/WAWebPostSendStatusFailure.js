__d("WAWebPostSendStatusFailure", [
    "WAErrors",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebHandleMsgError",
    "WAWebSendMsgResultAction",
    "WAWebWamEnumMessageSendResultType"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(t, n, r) {
        const i = r != null ? `-${r}` : "";
        if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[status] failed to send status message"
            ]))).sendLogs(`status-send-server-error${i}`);
            n.sendReporter?.postFailure({
                result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
                isTerminal: true
            });
            return {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
            };
        } else if (t instanceof o("WAWebHandleMsgError").MessageValidationError) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[status] failed to send status message"
            ]))).sendLogs(`status-send-validation-error${i}`);
            n.sendReporter?.postFailure({
                result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_PROTOBUF,
                isTerminal: true
            });
            return {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
            };
        } else if (t instanceof o("WAWebHandleMsgError").MessageSentAckError) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[status] failed to send status message, get error ack"
            ]))).sendLogs(`status-send-ack-error${i}`);
            n.sendReporter?.postFailure({
                result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                isTerminal: true
            });
            return {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
            };
        } else if (t instanceof o("WAErrors").BufferTooLargeError) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[status] failed to send status message, get error ack"
            ]))).sendLogs(`status-send-too-large-error${i}`);
            n.sendReporter?.postFailure({
                result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_PAYLOAD_TOO_BIG,
                isTerminal: true
            });
            return {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
            };
        }
        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "[status] failed to send status message"
        ]))).catching(t).sendLogs(`status-send-fail${i}`);
        n.sendReporter?.postFailure({
            result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
            isTerminal: true
        });
        return {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
        };
    }
    l.postStatusSendFailure = m;
}, 98);