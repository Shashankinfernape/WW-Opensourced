__d("WAWebScheduledMsgDecryptInnerProto", [
    "WALogger",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgCrypto",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const o = yield d(e, t, n);
            return o?.proto ?? null;
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            let i;
            try {
                i = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(_(t), _(n), a);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] reveal payload decrypt failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("scheduled-msg-reveal-payload-decrypt-failed");
                return null;
            }
            const l = new Uint8Array(i);
            try {
                return {
                    proto: p(o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, l)),
                    protoBytes: l
                };
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] reveal payload decode failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-reveal-payload-decode-failed");
                return null;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        const n = e.associatedChildMessage?.message;
        if (n == null) {
            return e;
        }
        return babelHelpers.extends({}, n, {
            messageContextInfo: e.messageContextInfo
        });
    }
    function _(e) {
        if (e instanceof ArrayBuffer) {
            return e;
        }
        return e.slice().buffer;
    }
    l.decryptAndDecodeRevealPayload = u;
    l.decryptAndDecodeRevealPayloadWithBytes = d;
}, 98);