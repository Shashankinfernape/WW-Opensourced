__d("WAWebPhashUtils", [
    "WABase64",
    "WACryptoSha256",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!r("gkx")("26258")) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[phashV1] calculating phash for ",
                    ""
                ])), t.join(","));
            }
            for(var n = t.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e).toString({
                    legacy: true
                })).sort().join(""), a = [], i = 0; i < n.length; i++){
                a.push(n.charCodeAt(i));
            }
            const l = new Uint8Array(a);
            const s = yield self.crypto.subtle.digest({
                name: "SHA-1"
            }, l);
            return `1:${o("WABase64").encodeB64(s.slice(0, 6))}`;
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false, n = false) {
            if (!r("gkx")("26258")) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[phashV2] calculating phash for ",
                    ""
                ])), e.join(","));
            }
            const a = [].concat(e);
            if (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() && t === true) {
                a.push(o("WAWebBotUtils").META_BOT_FBID_WID);
            }
            if (n === true) {
                a.push(o("WAWebBotUtils").META_BOT_TEE_FBID_WID);
            }
            for(var i = a.map((e)=>e.toString({
                    legacy: true,
                    formatFull: true
                })).sort().join(""), l = [], u = 0; u < i.length; u++){
                l.push(i.charCodeAt(u));
            }
            const c = new Uint8Array(l);
            const d = yield o("WACryptoSha256").sha256(c);
            return `2:${o("WABase64").encodeB64(d.slice(0, 6))}`;
        });
        return m.apply(this, arguments);
    }
    l.phashV1 = u;
    l.phashV2 = d;
}, 98);