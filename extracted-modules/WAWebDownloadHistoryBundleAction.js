__d("WAWebDownloadHistoryBundleAction", [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryBundleProcessor",
    "WAWebGroupHistoryMessageManager",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReceiverUserJourneyLogger",
    "WAWebGroupHistoryUtils",
    "WAWebSerializeError",
    "WAWebUpdateGroupHistoryBundleStateAction",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            if (!o("WAWebGroupHistoryUtils").isValidHistoryBundleToProcess(t, n)) {
                if (o("WAWebGroupHistoryUtils").isGroupHistoryBundleExpired(t)) {
                    o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.downloadExpired(t.id.remote.toJid());
                }
                return;
            }
            const i = yield o("WAWebGroupHistoryMessageManager").findMostRecentJoinSystemMessage(t.id.remote, t.id);
            if (!(i != null && !o("WAWebGroupHistoryUtils").isJoinMessageWithinReceiverWindow(i))) {
                if (!a.isUserInitiated && (yield o("WAWebGroupHistoryMessageManager").hasReceivedBundleForJoinSession(t.id.remote, t.id, i))) {
                    yield o("WAWebUpdateGroupHistoryBundleStateAction").updateGroupHistoryBundleState(t.id, o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DEDUPED);
                    return;
                }
                const groupHistoryReceiverGroupId = t.id.remote.toJid();
                try {
                    o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.downloadStarted(groupHistoryReceiverGroupId, a.isUserInitiated);
                    yield o("WAWebUpdateGroupHistoryBundleStateAction").updateGroupHistoryBundleState(t.id, o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DOWNLOADING);
                    yield t.downloadMedia(a);
                    o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.downloadSucceeded(groupHistoryReceiverGroupId);
                } catch (error) {
                    o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.downloadFailed(groupHistoryReceiverGroupId, "download_failed");
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] download bundle failed - ",
                        ""
                    ])), r("WAWebSerializeError")(error));
                    yield o("WAWebUpdateGroupHistoryBundleStateAction").updateGroupHistoryBundleState(t.id, o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED);
                    return;
                }
                try {
                    const u = o("WAWebFrontendMsgGetters").getMediaData(t.unsafe());
                    const c = u?.mediaBlob;
                    let d;
                    if (c instanceof Blob) {
                        d = c;
                    } else {
                        d = c?.getBlob();
                    }
                    if (!d) {
                        throw r("err")("group history blob is null");
                    }
                    const m = yield d.arrayBuffer();
                    yield o("WAWebGroupHistoryBundleProcessor").processMessageHistoryBundle(t, m, t.id.remote);
                } catch (error) {
                    o("WAWebGroupHistoryReceiverUserJourneyLogger").GroupHistoryReceiverUserJourneyLogger.parseHistoryProtoFailed({
                        groupHistoryMessagesCount: 0,
                        groupHistoryOutWindowPinsCount: undefined,
                        groupHistoryReceiverGroupId,
                        receiverFailureReason: "parse_failed"
                    });
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] Failed to process history bundle message - ",
                        ""
                    ])), r("WAWebSerializeError")(error));
                    yield o("WAWebUpdateGroupHistoryBundleStateAction").updateGroupHistoryBundleState(t.id, o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED);
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.default = u;
}, 98);