__d("WAWebHandleVoipOfferNotice", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebJidToWid"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new (r("WADeprecatedWapParser"))("callOfferNoticeParser", function(e) {
        e.assertTag("call");
        const t = e.attrString("id");
        const fromWid = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from"));
        const r = e.child("offer_notice");
        const a = o("WAWebJidToWid").deviceJidToDeviceWid(r.attrDeviceJid("call-creator"));
        const i = r.attrString("call-id");
        const l = r.attrString("type");
        const s = r.attrString("media");
        const t_1 = e.attrTime("t");
        return {
            stanzaId: t,
            fromWid,
            callCreator: a,
            callId: i,
            isGroup: l === "group",
            isVideo: s === "video",
            t: t_1
        };
    });
    function c(t) {
        const r = u.parse(t);
        if (r.error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), r.error.toString());
            return (s || (s = n("Promise"))).resolve("NO_ACK");
        }
        const r_success = r.success;
        const { callCreator, callId, fromWid, isGroup, isVideo, stanzaId, t: t_1 } = r_success;
        o("WAWebBackendApi").frontendFireAndForget("handleIncomingOfferNotice", {
            callCreatorJid: callCreator.toString(),
            callId,
            offerTime: t_1,
            isVideo,
            isGroup
        });
        return (s || (s = n("Promise"))).resolve(o("WAWap").wap("ack", {
            to: o("WAWebCommsWapMd").JID(fromWid),
            id: o("WAWap").CUSTOM_STRING(stanzaId),
            class: "call",
            type: o("WAWap").CUSTOM_STRING("offer_notice")
        }));
    }
    l.default = c;
}, 98);