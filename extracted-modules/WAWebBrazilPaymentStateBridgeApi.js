__d("WAWebBrazilPaymentStateBridgeApi", [
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebRemoveBrazilPaymentStatePlaceholdersAction"
], function(t, n, r, o, a, i, l) {
    const e = {
        updateBrazilPaymentStateMsgs: function({ updates }) {
            updates.forEach(({ interactivePayload, msgKey })=>{
                s(msgKey)?.set({
                    interactivePayload
                });
            });
        },
        removeBrazilPaymentStatePlaceholders: function({ msgKeys, unreadReductions }) {
            o("WAWebRemoveBrazilPaymentStatePlaceholdersAction").removeResolvedBrazilPaymentStatePlaceholders(msgKeys, unreadReductions);
        }
    };
    function s(msgKey) {
        const n = o("WAWebLidMigrationUtils").getAlternateMsgKey(msgKey);
        return o("WAWebMsgCollection").MsgCollection.get(msgKey) ?? (n != null ? o("WAWebMsgCollection").MsgCollection.get(n) : null);
    }
    l.BrazilPaymentStateBridgeApi = e;
}, 98);