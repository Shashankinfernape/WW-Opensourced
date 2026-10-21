__d("WAWebHandlePlaceholderMsgKeyHashUtils", [
    "WABase64",
    "WACryptoHmac",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e = null;
    const s = new TextEncoder;
    function u(e) {
        return s.encode(e).buffer;
    }
    function c() {
        if (!e) {
            e = o("WAWebUserPrefsMultiDevice").getChatThreadLoggingSecretB64().then((e)=>{
                if (e == null) {
                    return null;
                }
                return o("WABase64").decodeB64(e);
            });
        }
        return e;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const i = yield c();
            if (!i) {
                return null;
            }
            const l = u(e.id.id + (e.id.fromMe ? "1" : "0") + (e.id.remote?.toString({
                legacy: true
            }) ?? "") + (e.id.participant?.toString({
                legacy: true
            }) ?? ""));
            const s = yield o("WACryptoHmac").hmacSha256(i, l);
            return o("WABase64").encodeB64(s);
        });
        return m.apply(this, arguments);
    }
    l.getMessageKeyHash = d;
}, 98);