__d("WAWebIncomingOfferNoticeVoipHandlerAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebCallCollection",
    "WAWebCallNotificationBus",
    "WAWebVoipGatingUtils",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 45;
    function d({ callCreator, callId, isGroup, isVideo, offerTime }) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip:handleIncomingCallOfferNotice: callId ",
            ""
        ])), callId);
        const m = c - (o("WATimeUtils").unixTime() - offerTime);
        if (m <= 0) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip:handleIncomingCallOfferNotice: stale offer_notice"
            ])));
            return;
        }
        const p = m * 1000;
        r("WAWebCallCollection").add({
            id: callId,
            isVideo,
            isGroup,
            offerTime,
            peerJid: callCreator,
            isSilenced: false
        }, {
            merge: true
        });
        if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip:handleIncomingCallOfferNotice unexpected ",
                " video=",
                " group=",
                ""
            ])), callId, isVideo, isGroup).sendLogs("web-calling-enabled-offer-notice-received");
        } else {
            const _ = o("WAWebWidFactory").asUserWidOrThrow(callCreator);
            r("WAWebCallNotificationBus").trigger("alert_call", {
                wid: _,
                msgId: callId,
                isVideo,
                isGroup,
                isSilenced: false
            });
            self.setTimeout(function() {
                r("WAWebCallNotificationBus").trigger("cancel_call", {
                    wid: _,
                    msgId: callId
                });
            }, p);
        }
        self.setTimeout(function() {
            const e = r("WAWebCallCollection").get(callId);
            if (e) {
                r("WAWebCallCollection").remove(e);
            }
        }, p);
    }
    l.default = d;
}, 98);