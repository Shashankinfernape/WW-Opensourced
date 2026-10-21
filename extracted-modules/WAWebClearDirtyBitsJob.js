__d("WAWebClearDirtyBitsJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new (r("WADeprecatedWapParser"))("cleanDirtyReplyParser", function(e) {
        e.assertAttr("type", "result");
        return {};
    });
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length !== 0) {
                const n = t.map((e)=>o("WAWap").wap("clean", {
                        type: o("WAWap").CUSTOM_STRING(e.type),
                        timestamp: o("WAWap").INT(e.timestamp)
                    }));
                const r = o("WAWap").wap("iq", {
                    to: o("WAWap").S_WHATSAPP_NET,
                    type: "set",
                    xmlns: "urn:xmpp:whatsapp:dirty",
                    id: o("WAWap").generateId()
                }, n);
                try {
                    yield o("WADeprecatedSendIq").deprecatedSendIq(r, u);
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "clearDirtyBits: success for type: ",
                        ""
                    ])), t.map((e)=>e.type).join(","));
                } catch (e) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "clearDirtyBits: failed with error"
                    ])));
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.clearDirtyBits = c;
}, 98);