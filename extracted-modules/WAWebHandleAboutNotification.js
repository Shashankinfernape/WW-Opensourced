__d("WAWebHandleAboutNotification", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new (r("WADeprecatedWapParser"))("incomingAboutNotification", function(e) {
        e.assertTag("notification");
        const t = {
            stanzaId: e.attrString("id")
        };
        const n = e.hasChild("set") && e.child("set");
        if (n && !n.hasAttr("hash")) {
            return babelHelpers.extends({
                type: "change",
                from: o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("from")),
                pushname: e.attrString("notify"),
                content: n.contentString(),
                ts: e.attrTime("t")
            }, t);
        }
        if (n && n.hasAttr("hash")) {
            return babelHelpers.extends({
                type: "sideListChange",
                from: o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("from")),
                hash: n.attrString("hash")
            }, t);
        }
        return babelHelpers.extends({
            type: "unknown",
            from: e.attrString("from")
        }, t);
    });
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleAboutNotification: ",
                " from=",
                ""
            ])), e.type, e.from.toString());
            switch(e.type){
                case "sideListChange":
                    {
                        const t = yield o("WAWebApiContact").getContactRecordByHash(e.hash);
                        if (t == null) {
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "side contact hash not found for status update"
                            ])));
                        } else {
                            o("WAWebBackendApi").frontendFireAndForget("refreshTextStatus", {
                                contactId: t.id
                            });
                        }
                        break;
                    }
                case "change":
                    {
                        const n = e.from;
                        const a = [
                            n.toString()
                        ];
                        const i = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(n));
                        if (i) {
                            a.push(i.toString());
                        }
                        o("WAWebBackendApi").frontendFireAndForget("updateTextStatuses", {
                            ids: a,
                            content: e.content
                        });
                        break;
                    }
                default:
                    e.type;
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "handleAboutNotification: unhandled type ",
                        ""
                    ])), e.type);
                    break;
            }
            return o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(e.stanzaId),
                to: e.from instanceof r("WAWebWid") ? o("WAWebCommsWapMd").JID(e.from) : o("WAWap").CUSTOM_STRING(e.from),
                class: "notification",
                type: "status"
            });
        });
        return _.apply(this, arguments);
    }
    function f(t) {
        const r = m.parse(t);
        if (r.error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), r.error.toString());
            return (d || (d = n("Promise"))).reject(r.error);
        }
        return p(r.success);
    }
    l.handleAboutNotification = f;
}, 98);