__d("WAWebMsgRcatUtils", [
    "Promise",
    "WABase64",
    "WACryptoHkdf",
    "WACryptoHmac",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebFrontendMsgGetters",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsYoutubeUrlParser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "Rcat";
    const u = 32;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.nonce != null) {
                return e.nonce;
            }
            const t = o("WAWebMsgGetters").getSender(e);
            const n = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (t == null || n == null) {
                return null;
            }
            const { messageSecret, rcat } = e;
            if (rcat == null || messageSecret == null) {
                return null;
            }
            const i = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && !t.isLid() ? o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(t)) : t;
            if (i == null) {
                return null;
            }
            const l = yield _({
                fromJid: o("WAWebWidToJid").widToUserJid(i),
                messageSecret,
                stanzaId: e.id.id,
                toJid: o("WAWebWidToJid").widToUserJid(n)
            });
            e.nonce = l;
            return l;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ fromJid, messageSecret, stanzaId, toJid }) {
            const i = new TextEncoder().encode([
                stanzaId,
                fromJid,
                toJid,
                s
            ].join(""));
            const l = yield o("WACryptoHkdf").extractAndExpand(messageSecret, i, u);
            return new Uint8Array(l);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ fromJid, messageSecret, stanzaId, toJid }) {
            const i = yield m({
                fromJid,
                messageSecret,
                stanzaId,
                toJid
            });
            return o("WABase64").encodeB64UrlSafe(i, true);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        const n = o("WAWebMsgGetters").getMatchedText(e);
        if (n == null || n === "") {
            return null;
        }
        const r = o("WAWebUtilsYoutubeUrlParser").parseYoutubeVideoId(n);
        if (t || r != null) {
            return r;
        }
        return n;
    }
    function h(e) {
        const t = g(e, false);
        if (t == null) {
            return null;
        }
        return new TextEncoder().encode(t);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WACryptoHmac").hmacSha256(t, e);
            return new Uint8Array(n).slice(0, 8);
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = r("nullthrows")(o("WAWebMsgGetters").getFrom(t));
            const l = h(t);
            const s = o("WAWebMsgGetters").getMessageSecret(t);
            if (a.length === 0 || t.type !== o("WAWebMsgType").MSG_TYPE.CHAT || !o("WAWebFrontendMsgGetters").getIsUrlMessage(t) || s == null || l == null || !o("WAWebMsgGetters").getIsSentByMe(t) || a.length > o("WAWebABProps").getABPropConfigValue("maximum_group_size_for_rcat")) {
                return null;
            }
            const fromJid = o("WAWebWidToJid").widToUserJid(i);
            const c = new Map;
            const d = a.map((e)=>{
                const toJid = o("WAWebWidToJid").widToUserJid(e);
                return m({
                    fromJid,
                    messageSecret: s,
                    stanzaId: o("WAWebMsgGetters").getId(t).id,
                    toJid
                }).then((e)=>y(l, e)).then((e)=>{
                    c.set(toJid, e);
                });
            });
            yield (e || (e = n("Promise"))).all(d);
            return c;
        });
        return v.apply(this, arguments);
    }
    l.genNonceForMsg = c;
    l.deriveNonce = m;
    l.deriveNonceString = _;
    l.getContentIdString = g;
    l.genContentBindingForMsg = b;
}, 98);