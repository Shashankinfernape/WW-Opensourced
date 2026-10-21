__d("WAWebVoipCallOfferStanzaParser", [
    "WADeprecatedWapParser",
    "WATimeUtils",
    "WAWebJidToWid"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (r("WADeprecatedWapParser"))("callOfferPlaceholder", function(e) {
        e.assertTag("call");
        const n = e.mapFirstChild(function(e) {
            return e;
        });
        if (n == null || n.tag() !== "offer") {
            return null;
        }
        return {
            callId: n.attrString("call-id"),
            callCreator: o("WAWebJidToWid").jidWithTypeToWid(n.attrJidWithType("call-creator")),
            groupJid: n.hasAttr("group-jid") ? o("WAWebJidToWid").jidWithTypeToWid(n.attrJidWithType("group-jid")) : null,
            isVideoCall: n.hasChild("video"),
            t: e.maybeAttrTime("t") ?? o("WATimeUtils").castToUnixTime(0)
        };
    });
    function s(t) {
        const n = e.parse(t);
        if (n.error || n.success == null) {
            return null;
        }
        return n.success;
    }
    l.parseCallOfferStanza = s;
}, 98);