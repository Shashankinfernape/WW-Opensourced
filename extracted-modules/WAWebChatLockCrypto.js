__d("WAWebChatLockCrypto", [
    "WACryptoUtils",
    "WALogger",
    "WAWebProtobufsUserPassword.pb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, data) {
        return o("WACryptoUtils").arrayBuffersEqual(e, data);
    }
    function u(e) {
        if (e.transformer === o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer.PBKDF2_HMAC_SHA384) {
            return {
                name: "PBKDF2",
                hash: "SHA-384",
                salt: e.salt,
                iterations: e.iterations
            };
        }
        if (e.transformer === o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer.PBKDF2_HMAC_SHA512) {
            return {
                name: "PBKDF2",
                hash: "SHA-512",
                salt: e.salt,
                iterations: e.iterations
            };
        }
        if (e.transformer === o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer.NONE) {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.transformer}`);
        })();
    }
    function c(e, encoding) {
        switch(encoding){
            case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding.UTF8:
                {
                    const n = new TextEncoder;
                    return n.encode(e);
                }
            case o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding.UTF8_BROKEN:
                {
                    const r = new TextEncoder;
                    const a = r.encode(e);
                    const i = new Uint8Array(a.length * 2);
                    a.forEach((e, t)=>{
                        i[t * 2] = e < 128 ? 0 : 255;
                        i[t * 2 + 1] = e;
                    });
                    const l = new TextDecoder("utf-16be").decode(i);
                    return r.encode(l);
                }
        }
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = u(t);
            if (n != null) {
                const r = c(e, t.encoding);
                const o = yield self.crypto.subtle.importKey("raw", r, n.name, false, [
                    "deriveBits"
                ]);
                return self.crypto.subtle.deriveBits(n, o, t.data.byteLength * 8);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (n == null) {
                return false;
            }
            const r = yield d(t, n);
            if (r == null) {
                return false;
            }
            const a = s(r, n.data);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatLock] comparing secret codes"
            ])));
            return a;
        });
        return _.apply(this, arguments);
    }
    l._deriveBitsFromSecretCode = d;
    l.validateChatLockSecretCode = p;
}, 98);