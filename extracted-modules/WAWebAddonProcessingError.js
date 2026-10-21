__d("WAWebAddonProcessingError", [
    "$InternalEnum",
    "WAWebHandleMsgError",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        MISSING_THREAD_MESSAGE_ID: "missing_thread_message_id",
        MISSING_THREAD_MESSAGE_SENDER_JID: "missing_thread_message_sender_jid"
    });
    const s = ((e)=>{
        function t(t, n) {
            let r;
            const a = `type: ${t}, errorCode: ${String(n)}`;
            r = e.call(this, a, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE) || this;
            r.name = "PlaceholderValidationError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    function u({ threadMsgId, threadMsgSenderJid }, n) {
        if (threadMsgId == null) {
            throw new s(n, e.MISSING_THREAD_MESSAGE_ID);
        }
        if (threadMsgSenderJid == null) {
            throw new s(n, e.MISSING_THREAD_MESSAGE_SENDER_JID);
        }
        return {
            threadMsgId,
            threadMsgSenderJid
        };
    }
    l.validateMsgMeta = u;
}, 98);