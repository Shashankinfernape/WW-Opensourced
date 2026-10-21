__d("WAWebHandlePrivacyTokensNotification", [
    "Promise",
    "WAByteArray",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebEnvironment",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebJidToWid",
    "WAWebPresenceCollection",
    "WAWebSetTcTokenChatAction",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = (t)=>{
        const e = o("WAByteArray").uint8ArrayToBuffer(t.contentBytes());
        return {
            type: "trusted_contact",
            content: e,
            ts: t.attrTime("t")
        };
    };
    const p = new (r("WADeprecatedWapParser"))("incomingPrivacyTokensParser", function(t) {
        t.assertTag("notification");
        const n = t.attrString("id");
        const r = t.attrUserJid("from");
        const a = t.maybeAttrLidUserJid("sender_lid");
        const i = t.child("tokens");
        const privacyTokens = [];
        i.forEachChildWithTag("token", function(t) {
            const n = t.attrString("type");
            switch(n){
                case "trusted_contact":
                    privacyTokens.push(m(t));
                    break;
                default:
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "incomingPrivacyTokensParser - receiving an unknown type: ",
                        ""
                    ])), n);
            }
        });
        return {
            id: n,
            from: r,
            senderLid: a,
            privacyTokens
        };
    });
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = t.ts;
            const r = o("WAWebJidToWid").userJidToUserWid(e.from);
            const a = e.senderLid != null ? o("WAWebJidToWid").lidUserJidToUserLid(e.senderLid) : null;
            if (t.type === "trusted_contact") {
                yield o("WAWebSetTcTokenChatAction").handleIncomingTcToken(r, a, n, t.content);
                const i = g(r, a);
                yield o("WAWebPresenceCollection").PresenceCollection.reSubscribeWhenActive(i);
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        if (e.isLid()) {
            return e;
        }
        if (t != null) {
            return t;
        }
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "PrivacyTokenNotification without a lid: from: ",
            ""
        ])), e.toLogString()).sendLogs("privacy-token-notification-without-lid");
        throw r("err")("privacy-token-notification-without-lid");
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = p.parse(e);
            if (t.error) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "error while parsing: ",
                    ""
                ])), e.toString());
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), t.error.toString());
                throw t.error;
            }
            const t_success = t.success;
            const i = o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(t_success.id),
                class: "notification",
                to: o("WAWap").JID(t_success.from),
                type: "privacy_token"
            });
            if (!r("WAWebEnvironment").isGuest) {
                yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
                yield (d || (d = n("Promise"))).all(t_success.privacyTokens.map((e)=>_(t_success, e)));
            }
            return i;
        });
        return y.apply(this, arguments);
    }
    l.default = h;
}, 98);