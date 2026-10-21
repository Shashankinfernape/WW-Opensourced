__d("WAWebHandlePsa", [
    "$InternalEnum",
    "WAByteArray",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = n("$InternalEnum")({
        Image: "image",
        Video: "video",
        Text: "text"
    });
    const c = new (r("WADeprecatedWapParser"))("incomingCampaignParser", function(e) {
        e.assertTag("notification");
        e.assertAttr("from", o("WAJids").STATUS_JID);
        const t = e.attrString("id");
        const n = o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("participant"));
        const r = e.attrTime("t");
        const a = e.child("campaign");
        const revoke = a.hasChild("revoke");
        const l = a.attrString("id");
        const campaignDuration = a.maybeAttrInt("duration");
        const c = a.mapChildrenWithTag("message", function(e) {
            const t = e.child("media");
            t.attrEnumValues("mediatype", u.members());
            const n = {
                id: e.attrString("id"),
                ts: r,
                body: o("WAByteArray").uint8ArrayToBuffer(t.contentBytes())
            };
            return n;
        });
        return {
            participant: n,
            stanzaId: t,
            campaignId: l,
            campaignDuration,
            revoke,
            ts: r,
            messages: c
        };
    });
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = c.parse(t);
            if (n.error) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error while parsing: ",
                    ""
                ])), t.toString());
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), n.error.toString());
                throw n.error;
            }
            const n_success = n.success;
            const a = o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(n_success.stanzaId),
                participant: o("WAWebCommsWapMd").JID(n_success.participant),
                class: "notification",
                type: "psa",
                to: o("WAWebCommsWapMd").JID(o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID))
            });
            return a;
        });
        return m.apply(this, arguments);
    }
    l.default = d;
}, 98);