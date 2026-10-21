__d("WAWebGetUpdatedThreadMetadataRecord", [
    "WALogger",
    "WAWebAiThreadTypeUtils",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "WAWebWidToJid",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n) {
        const a = o("WAWebWidToJid").widToChatJid(t.chatId);
        const type = t.threadId.type;
        const internalId = o("WAWebThreadsMetadataIdUtils").craftThreadsMetadataInternalId(type, a, t.lastMessageTimestamp);
        const s = n?.creationTimestamp;
        const creationTimestamp = s == null ? t.creationTimestamp : Math.min(t.creationTimestamp, s);
        const c = {
            internalId,
            creationTimestamp
        };
        if (type === o("WAWebThreadUtils").ThreadType.AiThread) {
            const v = n?.lastMessageTimestamp;
            const lastMessageTimestamp = v == null ? t.lastMessageTimestamp : Math.max(t.lastMessageTimestamp, v);
            if (n?.aiThreadInfo == null && t.aiThreadInfo == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getUpdatedThreadMetadataRecord] missing aiThreadType id=",
                    ""
                ])), t.threadId.toString()).sendLogs("ai-thread-missing-ai-thread-type");
            }
            const aiThreadInfo = n?.aiThreadInfo == null && t.aiThreadInfo == null ? undefined : o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(t.aiThreadInfo?.title ?? n?.aiThreadInfo?.title, r("nullthrows")(t.aiThreadInfo?.aiThreadType ?? n?.aiThreadInfo?.aiThreadType, "aiThreadType"));
            const botModeSelection = t.botModeSelection ?? n?.botModeSelection;
            const botModeOverride = t.botModeOverride ?? n?.botModeOverride;
            return babelHelpers.extends({
                id: o("WAWebThreadsMetadataIdUtils").craftAiThreadDBId(t.threadId)
            }, c, {
                aiThreadInfo,
                unreadCount: n?.unreadCount ?? 0,
                lastMessageTimestamp,
                botModeSelection,
                botModeOverride,
                lastReceivedKey: n?.lastReceivedKey,
                unreadEditTimestampMs: n?.unreadEditTimestampMs,
                pinThreadTimestamp: t.pinThreadTimestamp ?? n?.pinThreadTimestamp
            });
        }
        return babelHelpers.extends({
            id: o("WAWebThreadsMetadataIdUtils").craftViewRepliesThreadDBId(t.threadId)
        }, c, {
            lastMessageTimestamp: undefined,
            unreadCount: undefined,
            pinThreadTimestamp: undefined,
            aiThreadInfo: undefined,
            botModeSelection: undefined,
            botModeOverride: undefined,
            lastReceivedKey: undefined
        });
    }
    l.getUpdatedThreadMetadataRecord = s;
}, 98);