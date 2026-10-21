__d("WAWebCryptoMediaRetry", [
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WALogger",
    "WAWebProtobufsMmsRetry.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "encodeServerErrorReceipt"
        ])));
        const n = new (o("WABinary")).Binary;
        o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsMmsRetry.pb").ServerErrorReceiptSpec, t, n);
        return n.readByteArrayView();
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, stanzaId, n) {
            const r = yield g(e);
            const a = n?.slice() || h();
            const i = u({
                stanzaId
            });
            const l = yield o("WACryptoAesGcm").gcmEncrypt(r, a, i, stanzaId);
            return {
                ciphertext: l,
                iv: a
            };
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertext, cryptoKey, iv, stanzaId }) {
            const l = yield g(cryptoKey);
            try {
                const u = yield o("WACryptoAesGcm").gcmDecrypt(l, iv, ciphertext, stanzaId);
                return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsMmsRetry.pb").MediaRetryNotificationSpec, u);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "rmr decryption failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("rmr-decryption-failed", {
                    sampling: 0.01
                });
                throw error;
            }
        });
        return p.apply(this, arguments);
    }
    const _ = 12;
    const f = "WhatsApp Media Retry Notification";
    function g(e) {
        return o("WACryptoHkdf").extractAndExpand(e, f, 32);
    }
    function h() {
        const e = new Uint8Array(_);
        self.crypto.getRandomValues(e);
        return e;
    }
    l.encryptServerErrorReceipt = c;
    l.decryptMediaRetryNotification = m;
    l.ENC_IV_SIZE = _;
}, 98);