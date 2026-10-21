__d("WAWebHandleDigestKey", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebDigestKeyJob"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new (r("WADeprecatedWapParser"))("digestKeyParser", function(e) {
        e.assertTag("notification");
        e.assertAttr("type", "encrypt");
        e.assertFromServer();
        e.child("digest").assertTag("digest");
        return {
            stanzaId: e.attrString("id")
        };
    });
    function c(t) {
        const r = u.parse(t);
        if (r.error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), r.error.toString());
            return (s || (s = n("Promise"))).reject(r.error);
        }
        const r_success = r.success;
        const i = o("WAWap").wap("ack", {
            to: o("WAWap").S_WHATSAPP_NET,
            id: o("WAWap").CUSTOM_STRING(r_success.stanzaId),
            class: "notification"
        });
        return o("WAWebDigestKeyJob").digestKey().then(()=>i);
    }
    l.default = c;
}, 98);