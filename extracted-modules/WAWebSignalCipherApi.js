__d("WAWebSignalCipherApi", [
    "Promise",
    "WAWebCryptoLibrary",
    "WAWebSignalCommonErrors",
    "asyncToGeneratorRuntime",
    "cr:4533",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n, r, o) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i, l = false, s) {
            if (!r("gkx")("26258")) {
                const u = n("cr:4533") == null ? undefined : n("cr:4533").getDebugDecryptFail();
                if (u != null && u > 0) {
                    if (n("cr:4533") != null) {
                        n("cr:4533").setDebugDecryptFail(u - 1);
                    }
                    return (e || (e = n("Promise"))).reject(new (o("WAWebSignalCommonErrors")).SignalDecryptionError);
                }
            }
            return o("WAWebCryptoLibrary").decryptSignalProto(t, a, i, l, s);
        });
        return u.apply(this, arguments);
    }
    function c(e, t, n, r) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r = false) {
            return o("WAWebCryptoLibrary").encryptSignalProto(e, t, n, r);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertext, sender, target }) {
            if (!r("gkx")("26258")) {
                const s = n("cr:4533") == null ? undefined : n("cr:4533").getDebugDecryptFail();
                if (s != null && s > 0) {
                    if (n("cr:4533") != null) {
                        n("cr:4533").setDebugDecryptFail(s - 1);
                    }
                    return (e || (e = n("Promise"))).reject(new (o("WAWebSignalCommonErrors")).SignalDecryptionError);
                }
            }
            return o("WAWebCryptoLibrary").decryptGroupSignalProto({
                author: sender,
                ciphertext,
                groupId: target
            });
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            return o("WAWebCryptoLibrary").encryptSenderKeyMsgSignalProto(e, t, n);
        });
        return f.apply(this, arguments);
    }
    l.decryptSignalProto = s;
    l.encryptSignalProto = c;
    l.decryptGroupSignalProto = m;
    l.encryptSenderKeyMsgSignalProto = _;
}, 98);