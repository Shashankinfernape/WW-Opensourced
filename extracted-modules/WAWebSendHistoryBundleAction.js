__d("WAWebSendHistoryBundleAction", [
    "WALogger",
    "WAWebFindChatAction",
    "WAWebGenerateGroupHistoryBundleMsgData",
    "WAWebGenerateGroupHistoryNoticeMsgData",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryNoticeHandler",
    "WAWebJidToWid",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t, n, r, o) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, historyReceivers, nonHistoryReceivers, selectedMessageCount, targetStartMessageTime) {
            const l = yield o("WAWebGenerateGroupHistoryBundleMsgData").generateGroupHistoryBundleMsgData({
                chatId: t,
                historyReceivers,
                nonHistoryReceivers,
                selectedMessageCount,
                targetStartMessageTime
            });
            const u = yield o("WAWebFindChatAction").findExistingChat(o("WAWebJidToWid").groupJidToWid(t), "messageHistorySend");
            const c = o("WAWebSendMsgChatAction").addAndSendMsgToChat(u, l);
            const d = c[0];
            const p = c[1];
            const _ = yield p;
            const __messageSendResult = _.messageSendResult;
            if (__messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Failed to send history bundle message"
                ]))).sendLogs("group-history-bundle-send-failed");
                return {
                    bundleAcked: false,
                    noticeAcked: false
                };
            }
            const l_groupHistoryBundleMetadata = l.groupHistoryBundleMetadata;
            if (l_groupHistoryBundleMetadata == null) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] bundleMetadata is null"
                ])));
                return {
                    bundleAcked: true,
                    noticeAcked: false
                };
            }
            const noticeAcked = yield m(u, l_groupHistoryBundleMetadata);
            return {
                bundleAcked: true,
                noticeAcked
            };
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, groupHistoryBundleMetadata) {
            const n = yield o("WAWebGenerateGroupHistoryNoticeMsgData").generateGroupHistoryNoticeMsgData({
                chat: e,
                groupHistoryBundleMetadata
            });
            const r = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, n);
            const a = r[0];
            const i = r[1];
            const l = yield i;
            const l_messageSendResult = l.messageSendResult;
            if (l_messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Failed to send history notice message"
                ]))).sendLogs("group-history-notice-send-failed");
                return false;
            }
            yield o("WAWebGroupHistoryNoticeHandler").markGroupHistoryNoticeSent(e.id, groupHistoryBundleMetadata.historyReceivers);
            return true;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE && o("WAWebGroupHistoryGating").isGroupHistoryPostJoinSenderOrInternalTesterEnabled(e.id.remote)) {
                const t = o("WAWebMsgGetters").getGroupHistoryBundleMetadata(e);
                if (t != null) {
                    const n = t.historyReceivers;
                    if (n.length !== 0 && !(yield o("WAWebGroupHistoryNoticeHandler").areAllReceiversNoticeSent(e.id.remote, n))) {
                        const r = yield o("WAWebFindChatAction").findExistingChat(e.id.remote, "messageHistorySend");
                        yield m(r, t);
                    }
                }
            }
        });
        return f.apply(this, arguments);
    }
    l.sendHistoryBundleAction = c;
    l.completeGroupHistorySend = m;
    l.completeGroupHistorySendOnBundleResend = _;
}, 98);