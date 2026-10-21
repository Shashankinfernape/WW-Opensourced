__d("WAWebUpdateMessageHistoryBundleState", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMsgUtils",
    "WAWebDBUpdateMessageTable",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(messageKey, processState) {
            try {
                const a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(messageKey);
                const i = a?.groupHistoryBundleMetadata;
                if (i == null) {
                    throw r("err")("Group history bundle metadata not found");
                }
                yield o("WAWebDBUpdateMessageTable").updateMessageTable(messageKey, {
                    groupHistoryBundleMetadata: babelHelpers.extends({}, i, {
                        processState
                    })
                });
                o("WAWebBackendApi").frontendFireAndForget("updateGroupHistoryBundleState", {
                    messageKey,
                    processState
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: failed to update bundle state in storage"
                ]))).verbose().sendLogs("updateGroupHistoryBundleState failed");
                throw error;
            }
        });
        return u.apply(this, arguments);
    }
    l.updateGroupHistoryBundleState = s;
}, 98);