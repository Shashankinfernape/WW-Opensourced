__d("WAWebVoipBridgeCallEntryHandlers", [
    "WAWebIncomingOfferNoticeVoipHandlerAction",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipActivityTracker",
    "WAWebVoipStartCall",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        handleIncomingOfferNotice: function({ callCreatorJid, callId, isGroup, isVideo, offerTime }) {
            let e;
            const u = o("WAWebWidFactory").createWid(callCreatorJid);
            (e = o("WAWebVoipActivityTracker")).startActivityTracking();
            e.startUiActivityTracking();
            e.trackUiActivity(e.VoipUiActivity.CALL_RECEIVED_INCOMING);
            if (isGroup) {
                o("WAWebVoipActivityTracker").trackActivity(isVideo ? o("WAWebVoipActivityTracker").VoipActivity.RECEIVED_INCOMING_VIDEO_GROUP_CALL : o("WAWebVoipActivityTracker").VoipActivity.RECEIVED_INCOMING_AUDIO_GROUP_CALL);
            } else {
                o("WAWebVoipActivityTracker").trackActivity(isVideo ? o("WAWebVoipActivityTracker").VoipActivity.RECEIVED_INCOMING_VIDEO_CALL : o("WAWebVoipActivityTracker").VoipActivity.RECEIVED_INCOMING_AUDIO_CALL);
            }
            r("WAWebIncomingOfferNoticeVoipHandlerAction")({
                callCreator: u,
                callId,
                isGroup,
                isVideo,
                offerTime
            });
        },
        startVoipCallByWid: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isVideo, peerJid }) {
                yield o("WAWebVoipStartCall").startWAWebVoipCall(peerJid, isVideo, 0, 0, null, {
                    entryTrust: "user_gesture"
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        requestOpenChat: function({ chatJid }) {
            const n = o("WAWebWidFactory").createWid(String(chatJid));
            return o("WAWebVoipActionRequestOpenChat").requestOpenChat(n);
        },
        requestJoinCall: function({ callId }) {
            o("WAWebVoipStartCall").joinOngoingCallByCallId(callId);
        }
    };
    l.VoipBridgeCallEntryHandlers = e;
}, 98);