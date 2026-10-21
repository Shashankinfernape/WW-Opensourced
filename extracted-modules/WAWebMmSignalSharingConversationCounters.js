__d("WAWebMmSignalSharingConversationCounters", [
    "WALogger",
    "WAWebConversationCountersUtils",
    "WAWebDBUpdateChatTable",
    "WAWebMmSignalSharingModelUtils",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return o("WAWebMmSignalSharingModelUtils").MM_SIGNAL_SHARING_COUNTED_MSG_TYPES.has(e.type) && o("WAWebMmSignalSharingModelUtils").isMmSignalSharingNewMessageParamsEligible(e);
    }
    function u(chat) {
        const r = o("WAWebMmSignalSharingModelUtils").getMmSignalSharingExpirationWindowItem({
            chat
        });
        return {
            depth: r?.conversationDepth ?? 0,
            repeat: r?.conversationRepeat ?? 0,
            lastMessageFromMe: r?.lastMessageFromMe
        };
    }
    function c(chat, n) {
        const l = o("WAWebMmSignalSharingModelUtils").getMmSignalSharingExpirationWindowItem({
            chat
        });
        const t_mmSignalSharingExpirationWindow = chat.mmSignalSharingExpirationWindow;
        if (!(l == null || t_mmSignalSharingExpirationWindow == null)) {
            const u = o("WAWebConversationCountersUtils").nextConversationCounters({
                depth: l.conversationDepth ?? 0,
                repeat: l.conversationRepeat ?? 0,
                lastMessageFromMe: l.lastMessageFromMe
            }, n, false);
            l.conversationDepth = u.depth;
            l.conversationRepeat = u.repeat;
            l.lastMessageFromMe = u.lastMessageFromMe;
            o("WAWebDBUpdateChatTable").updateChatTable(chat.id, {
                mmSignalSharingExpirationWindow: t_mmSignalSharingExpirationWindow
            }).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mmSignalSharing] persist conversation counters failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("wa-mm-signal-sharing-counters-persist-failed");
            });
        }
    }
    l.isMmSignalSharingCountedMsg = s;
    l.getMmSignalSharingConversationCounters = u;
    l.advanceMmSignalSharingConversationCounters = c;
}, 98);