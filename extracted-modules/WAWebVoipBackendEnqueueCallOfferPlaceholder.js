__d("WAWebVoipBackendEnqueueCallOfferPlaceholder", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallOfferStanzaParser",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        if (e.tag === "call" && o("WAWebVoipCallLogPlaceholderTracker").isOfflineCallLogOrderingEnabled() && e.attrs?.offline != null) {
            const n = o("WAWebVoipCallOfferStanzaParser").parseCallOfferStanza(e);
            if (n != null) {
                if (!(o("WAWebUserPrefsMeUser").isMeAccount(n.callCreator) || o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(n.callId))) {
                    o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderPending(n.callId);
                    u(n);
                }
            }
        }
    }
    function u(t) {
        const a = t.groupJid ?? t.callCreator;
        o("WAWebMessageQueue").onMessageQueue({
            chatWid: a,
            isOffline: true,
            msgCategory: null,
            action: function() {
                return o("WAWebBackendApi").frontendSendAndReceive("writeCallOfferPlaceholder", t);
            }
        }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "voip_call_offer_placeholder")).catch((n)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] placeholder queue/bridge failed for callId=",
                ""
            ])), t.callId).catching(r("getErrorSafe")(n)).sendLogs("voip-placeholder-backend-queue-fail");
            o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(t.callId);
        });
    }
    l.maybeEnqueueCallOfferPlaceholderFromStanza = s;
    l.enqueueCallOfferPlaceholder = u;
}, 98);