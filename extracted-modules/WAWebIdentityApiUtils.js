__d("WAWebIdentityApiUtils", [
    "WABinary",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        for(let n = 0; n < e.length && n < t.length; ++n){
            if (e[n] !== t[n]) {
                return e[n] - t[n];
            }
        }
        return e.length - t.length;
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield c(e);
            return t.map((t, n)=>{
                if (t == null) {
                    throw r("err")(`getAllIdentityKeys: missing identity key for device ${String(e[n])}`);
                }
                return t;
            });
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().bulkLoadIdentityKey(e.map((e)=>o("WAWebSignalCommonUtils").createSignalAddress(e)));
            return t.map((e)=>{
                if (e == null) {
                    return null;
                }
                return new Uint8Array(o("WAWebSignalCommonUtils").strToBuffer(e));
            });
        });
        return d.apply(this, arguments);
    }
    function m(t) {
        const n = new (o("WABinary")).Binary;
        t.sort(e).forEach((e)=>{
            n.writeByteArray(e);
        });
        return n.readByteArrayView();
    }
    l.getAllIdentityKeysBytesOrThrow = s;
    l.getAllIdentityKeysBytes = c;
    l.identityKeysToBinary = m;
}, 98);