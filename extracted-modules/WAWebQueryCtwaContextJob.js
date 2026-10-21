__d("WAWebQueryCtwaContextJob", [
    "WABase64",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebCtwaAGMUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (r("WADeprecatedWapParser"))("ctwaContext", function(e) {
        e.assertTag("iq");
        e.assertFromServer();
        const t = e.child("context");
        if (e.hasChild("error")) {
            d(e.child("error"));
            throw r("err")("invalid response");
        }
        const n = {
            sourceUrl: t.child("source").child("url").contentString(),
            sourceId: t.child("source").child("id").contentString(),
            sourceType: t.child("source").child("type").contentString()
        };
        if (t.hasChild("headline")) {
            n.title = t.child("headline").contentString();
        }
        if (t.hasChild("body")) {
            n.description = t.child("body").contentString();
        }
        if (t.hasChild("thumbnail")) {
            if (t.child("thumbnail").hasChild("url")) {
                n.thumbnailUrl = t.child("thumbnail").child("url").contentString();
            }
            if (t.child("thumbnail").hasChild("bytes")) {
                n.thumbnail = o("WABase64").encodeB64(t.child("thumbnail").child("bytes").contentBytes());
            }
            if (t.hasChild("video")) {
                n.mediaUrl = t.child("video").child("url").contentString();
                n.mediaType = o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType.VIDEO;
            } else {
                n.mediaType = o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType.IMAGE;
            }
        }
        const a = t.maybeChild("sourceApp");
        if (a != null) {
            n.sourceApp = a.contentString();
        }
        const i = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(n.sourceApp);
        if (i) {
            if (t.hasChild("greetingMessageBody")) {
                n.greetingMessageBody = t.child("greetingMessageBody").contentString();
            }
            if (t.hasChild("automatedGreetingMessageShown")) {
                n.automatedGreetingMessageShown = t.child("automatedGreetingMessageShown").contentString() === "true";
            }
            const l = t.maybeChild("ctaPayload");
            if (l != null) {
                n.ctaPayload = l.contentString();
            }
            const s = t.maybeChild("originalImageUrl");
            if (s != null) {
                n.originalImageUrl = s.contentString();
            }
        }
        return n;
    });
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let a;
            const i = o("WAWebWidFactory").createWid(e).toString({
                legacy: true
            });
            const l = (a = o("WAWap")).wap("iq", {
                xmlns: "fb:thrift_iq",
                id: a.generateId(),
                type: "get",
                to: a.S_WHATSAPP_NET,
                smax_id: a.SMAX_ID(r("WAWapDeprecatedSmaxID").CtwaGetContext)
            }, a.wap("account_number", null, i), a.wap("code", null, t), a.wap("expected_source_url", null, n));
            const u = yield o("WADeprecatedSendIq").deprecatedSendIq(l, s);
            if (u.success) {
                return u.result;
            }
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(u.errorCode);
        });
        return c.apply(this, arguments);
    }
    function d(t) {
        const n = t && t.maybeAttrString("code");
        const r = t && t.maybeAttrString("text");
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "getCtwaContext error: code ",
            " text ",
            ""
        ])), n, r);
    }
    l.default = u;
}, 98);