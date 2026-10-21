__d("WAWebThreadMessageDBHooks", [
    "WAWebChatConstants",
    "WAWebThreadModelResolver",
    "WAWebUserPrefsMultiDevice"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        if (e == null || n === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY) {
            return false;
        }
        const a = t != null ? o("WAWebThreadModelResolver").getThreadModel(t, e)?.creationTimestamp : null;
        if (a == null) {
            return false;
        }
        const i = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
        return i != null && a <= i;
    }
    l.useWAWebThreadHasOlderMessages = e;
}, 98);