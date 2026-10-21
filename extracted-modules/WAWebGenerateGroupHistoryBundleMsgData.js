__d("WAWebGenerateGroupHistoryBundleMsgData", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMessageSerialization",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebGroupHistoryReportingTokenGenerator",
    "WAWebJidToWid",
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRetrieveMessagesForBundle",
    "WAWebRetrieveOutOfWindowPinsForBundle",
    "WAWebSerializeGroupHistoryMessages",
    "WAWebStartMediaUploadQpl",
    "WAWebUploadManager",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumUploadOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m({ chatId, historyReceivers, nonHistoryReceivers, selectedMessageCount, targetStartMessageTime }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("generateGroupHistoryBundleMsgData", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const f = o("WAWebWidFactory").asGroupWidOrThrow(o("WAWebJidToWid").groupJidToWid(chatId));
            if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(f)) {
                return (d || (d = n("Promise"))).reject(r("err")("[group-history] Group history sender is not enabled"));
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] sendBundle chat=",
                " receivers=",
                ""
            ])), chatId, historyReceivers);
            const g = yield o("WAWebRetrieveMessagesForBundle").retrieveMessagesForBundle(f, selectedMessageCount, targetStartMessageTime);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Retrieved ",
                " messages"
            ])), g.length);
            const h = targetStartMessageTime ?? o("WATimeUtils").unixTime();
            const y = o("WAWebGroupHistoryGating").getGroupHistoryMessagesTimeLimitSecs(f);
            const messagesNotOlderThanTimestamp = h - y;
            const inWindowMessageKeys = new Set(g.map((e)=>e.id));
            const v = yield o("WAWebRetrieveOutOfWindowPinsForBundle").retrieveOutOfWindowPinsForBundle({
                chatId: f,
                inWindowMessageKeys,
                messagesNotOlderThanTimestamp,
                targetJoinTime: targetStartMessageTime
            });
            const S = g.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e));
            const R = v.length > 0 ? v.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)) : undefined;
            const L = yield o("WAWebSerializeGroupHistoryMessages").serializeGroupHistoryMessages(S, R);
            const { compressedBundle, encodedBytes } = L;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Serialized messages ",
                " bytes"
            ])), compressedBundle.byteLength);
            const I = self.crypto.getRandomValues(new Uint8Array(32));
            const T = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const D = new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: f,
                id: yield r("WAWebMsgKey").newId(),
                participant: T
            });
            let x = null;
            if (o("WAWebGroupHistoryGating").isGroupHistorySenderReportingTokenEnabled(f)) {
                const $ = p(S, R);
                const P = o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion();
                x = yield o("WAWebGroupHistoryReportingTokenGenerator").genGroupHistoryReportingTokens(encodedBytes, I, o("WAWebWidToJid").widToUserJid(T), chatId, P, $);
                if (x != null) {
                    yield o("WAWebGroupHistoryReportingTokenDBUtils").storeGroupHistoryReportingTokenInfos(D.toString(), x, true);
                }
            }
            const uploadQpl = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "GroupHistoryBundle",
                mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                byteLength: compressedBundle.byteLength
            });
            const M = yield r("WAWebUploadManager").encryptAndUpload({
                blob: compressedBundle,
                signal: new AbortController().signal,
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.GROUP_HISTORY,
                userUploadAttemptCount: 0,
                forwardedFromWeb: false,
                uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHAT_GROUP,
                fileOrigin: null,
                isViewOnce: false,
                uploadQpl
            });
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Uploaded history bundle to ",
                ""
            ])), M.url);
            const filehash = yield o("WAMediaCalculateFilehash").calculateFilehash(compressedBundle);
            const oldestMessageTimestampInWindow = g.at(-1)?.t;
            const F = v.length > 0 ? Math.min(...v.map((e)=>e.t ?? Infinity)) : undefined;
            const oldestMessageTimestampInBundle = F != null && oldestMessageTimestampInWindow != null ? Math.min(oldestMessageTimestampInWindow, F) : F ?? oldestMessageTimestampInWindow;
            const B = babelHelpers.extends({
                id: D
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(D, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message), {
                type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageHistoryBundle,
                kind: o("WAWebMsgType").MsgKind.MessageHistoryBundle,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: o("WATimeUtils").unixTime(),
                isNewMsg: true,
                local: true,
                ack: o("WAWebAck").ACK.CLOCK,
                messageSecret: I,
                filehash,
                encFilehash: M.encFilehash,
                mediaKey: M.mediaKey,
                mediaKeyTimestamp: M.mediaKeyTimestamp,
                directPath: M.directPath,
                size: compressedBundle.byteLength,
                mimetype: "application/protobuf",
                groupHistoryBundleMetadata: {
                    messageCount: g.length,
                    historyReceivers,
                    nonHistoryReceivers,
                    oldestMessageTimestampInWindow,
                    oldestMessageTimestampInBundle,
                    processState: o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.NONE
                }
            });
            return B;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function p(e, t) {
        const n = new Map;
        for (const r of [].concat(e, t ?? [])){
            if (r.type === "revoked" && r.protocolMessageKey != null) {
                n.set(r.id.id, r.protocolMessageKey.id);
            }
        }
        return n;
    }
    l.generateGroupHistoryBundleMsgData = m;
}, 98);