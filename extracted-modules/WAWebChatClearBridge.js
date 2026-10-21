__d("WAWebChatClearBridge", [
    "Promise",
    "WATimeUtils",
    "WAWebApiActiveMessageRanges",
    "WAWebApiAddActiveMessageRange",
    "WAWebBackendApi",
    "WAWebClearChatSync",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDBReportingTokenUtils",
    "WAWebGroupAgentPrivacyNotice",
    "WAWebMessageRangeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebRequestDeleteAddOns",
    "WAWebThreadMetadataJob",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, skipStarred) {
            const l = o("WATimeUtils").unixTimeMs();
            const s = yield (e || (e = n("Promise"))).all([
                r("WAWebClearChatSync").getClearChatMutation(l, t.id, !skipStarred, false, false),
                r("WAWebClearChatSync").getClearChatMutation(l, t.id, !skipStarred, false, true)
            ]);
            const u = s[0];
            const c = s[1];
            let result;
            yield o("WAWebMessageRangeUtils").lockForMessageRangeSync([
                "message",
                "message-association"
            ], [
                u
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebApiAddActiveMessageRange").addActiveMessageRange(t.id.toString(), o("WAWebApiActiveMessageRanges").getActiveRangeAction("clearChat", {
                    deleteStarred: !skipStarred
                }), c.binarySyncAction);
                const n = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, c.binarySyncAction);
                const a = r("nullthrows")(n.clearChatAction?.messageRange);
                result = yield o("WAWebDBQueryAndRemoveMessageHistory").queryAndRemoveMessagesInMessageRange(t.id, a, {
                    skipStarred,
                    skipRecentSystemMessages: false,
                    skipScheduledMessages: true
                });
            }));
            yield o("WAWebThreadMetadataJob").deleteAllThreadsForChat(o("WAWebWidToJid").widToChatJid(t.id));
            yield o("WAWebGroupAgentPrivacyNotice").insertGroupAgentPrivacyNoticeAfterClearIfRequired(t.id);
            return {
                result
            };
        });
        return u.apply(this, arguments);
    }
    function c(e, t, r) {
        return s(e, t, r).then((()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                if (t.result != null && t.result.length > 0) {
                    const n = t.result;
                    yield o("WAWebBackendApi").frontendSendAndReceive("deleteModelsForLastAddOnPreview", {
                        messagesIds: n
                    });
                    yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(e.id.toString(), n);
                    o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(n, {
                        removeWholeRow: true
                    });
                }
                return t;
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    l.sendClear = c;
}, 98);