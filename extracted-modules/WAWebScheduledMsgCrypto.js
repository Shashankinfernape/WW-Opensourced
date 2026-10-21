__d("WAWebScheduledMsgCrypto", [
    "WALogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgConstants",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        const e = new Uint8Array(o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_BYTES);
        self.crypto.getRandomValues(e);
        return e;
    }
    function d() {
        return r("WAWebPonyfillsCryptoRandomUUID")();
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return self.crypto.subtle.importKey("raw", e, {
                name: "AES-GCM",
                length: 256
            }, false, [
                "encrypt",
                "decrypt"
            ]);
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Uint8Array(o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_IV_BYTES);
            self.crypto.getRandomValues(n);
            try {
                const a = yield m(t);
                const i = yield self.crypto.subtle.encrypt({
                    name: "AES-GCM",
                    iv: n
                }, a, e);
                return {
                    encIv: n.buffer,
                    encPayload: i
                };
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to encrypt with RevealKey"
                ]))).catching(r("getErrorSafe")(e));
                throw e;
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            try {
                const a = yield m(n);
                const i = new Uint8Array(t);
                const l = yield self.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: i
                }, a, e);
                return l;
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to decrypt with RevealKey"
                ]))).catching(r("getErrorSafe")(e));
                throw e;
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return {
            conditionalRevealMessage: {
                conditionalRevealMessageType: o("WAWebProtobufsE2E.pb").Message$ConditionalRevealMessage$ConditionalRevealMessageType.SCHEDULED_MESSAGE,
                encIv: t instanceof Uint8Array ? t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength) : t,
                encPayload: e instanceof Uint8Array ? e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength) : e,
                revealKeyId: n
            }
        };
    }
    function C({ conditionalRevealMessageType: n, encIv: r, encPayload: a, revealKeyId: i }) {
        if (a == null || r == null || i == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] ConditionalRevealMessage missing fields"
            ])));
            return null;
        }
        return {
            conditionalRevealMessageType: n ?? o("WAWebProtobufsE2E.pb").Message$ConditionalRevealMessage$ConditionalRevealMessageType.UNKNOWN,
            encIv: r,
            encPayload: a,
            revealKeyId: i
        };
    }
    l.generateRevealKey = c;
    l.generateRevealKeyId = d;
    l.encryptWithRevealKey = _;
    l.decryptWithRevealKey = g;
    l.buildConditionalRevealMessage = y;
    l.parseConditionalRevealMessage = C;
}, 98);