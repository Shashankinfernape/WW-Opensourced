__d("WAWebHandleBizThreadDataBulkNotification", [
    "WALogger",
    "WASmaxBizThreadDataNotifyBulkRPC",
    "WASmaxNotificationFallbackGenericNotificationRPC",
    "WASmaxParsingFailure",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "WAWebCustomerManagerGating",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const sampling = 0.01;
    function u(t) {
        try {
            const n = o("WASmaxBizThreadDataNotifyBulkRPC").receiveNotifyBulkRPC(t);
            const a = n.parsedRequest;
            if (a.threadDataBulkSubtypeMixin.notifSubType === "lead_stage" && o("WAWebCustomerManagerGating").customerManagerEnabled()) {
                o("WAWebBackendApi").frontendFireAndForget("repullServerLeadStages", {});
            }
        } catch (error) {
            if (error instanceof o("WASmaxParsingFailure").SmaxParsingFailure) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleBizThreadDataBulkNotification: parse failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-thread-data-bulk-parse-failed", {
                    sampling
                });
                return o("WASmaxNotificationFallbackGenericNotificationRPC").makeGenericNotificationResponseBadStanza({
                    ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError
                }, t);
            }
            throw error;
        }
        return o("WASmaxNotificationFallbackGenericNotificationRPC").makeGenericNotificationResponseAck(t);
    }
    l.handleBizThreadDataBulkNotification = u;
}, 98);