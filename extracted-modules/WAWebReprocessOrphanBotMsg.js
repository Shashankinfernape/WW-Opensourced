__d("WAWebReprocessOrphanBotMsg", [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes.flow",
    "WAWebMessageInsertDeferredPlaceholder",
    "WAWebMsgProcessingDecryptApi",
    "WAWebProcessMsgInfoForLid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "reprocessOrphanBotMsg: stanza=",
                ""
            ])), t).tags("messaging");
            let i;
            try {
                i = yield o("WAWap").decodeStanza(a, function(e) {
                    return (p || (p = n("Promise"))).resolve(e);
                });
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "reprocessOrphanBotMsg: failed to decode stanza=",
                    ""
                ])), t).catching(r("getErrorSafe")(error)).sendLogs("bot-orphan-replay-decode-failed");
                return "unrecoverable";
            }
            let l;
            try {
                l = o("WAWebHandleMsgParser").incomingMsgParser.parse(i).success;
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "reprocessOrphanBotMsg: failed to parse stanza=",
                    ""
                ])), t).catching(r("getErrorSafe")(error)).sendLogs("bot-orphan-replay-parse-failed");
                return "unrecoverable";
            }
            if (l == null) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "reprocessOrphanBotMsg: parser returned no result for stanza=",
                    ""
                ])), t).sendLogs("bot-orphan-replay-parse-empty");
                return "unrecoverable";
            }
            delete l.msgInfo.offline;
            yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
                msgInfo: l.msgInfo,
                msgMeta: l.msgMeta
            });
            yield o("WAWebMessageInsertDeferredPlaceholder").maybeRemoveDeferredPlaceholder(l.msgInfo);
            const _ = yield o("WAWebMsgProcessingDecryptApi").decryptE2EPayload(l, o("WAWebHandleMsgProcess").processDecryptedMessageProto);
            const __result = _.result;
            if (__result !== o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS) {
                const h = g(__result);
                if (h === "unrecoverable") {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "reprocessOrphanBotMsg: replay cannot succeed stanza=",
                        " result=",
                        ""
                    ])), t, String(__result)).sendLogs("bot-orphan-replay-unsuccessful");
                } else {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "reprocessOrphanBotMsg: replay did not succeed stanza=",
                        " result=",
                        ""
                    ])), t, String(__result)).sendLogs("bot-orphan-replay-retryable", {
                        sampling: 0.01
                    });
                }
                return h;
            }
            return "replayed";
        });
        return f.apply(this, arguments);
    }
    function g(__result) {
        if (__result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_VALIDATION_ERROR || __result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.HSM_MISMATCH) {
            return "unrecoverable";
        }
        return "retryable";
    }
    l.reprocessOrphanBotMsg = _;
}, 98);