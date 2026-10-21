__d("WAWebMdClientSessionIdUtils", [
    "WABase64",
    "WABinary",
    "WACryptoSha256",
    "WAWebAltDeviceLinkingApi",
    "WAWebConnModel",
    "WAWebPairingType",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebAltDeviceLinkingApi").getPairingType();
            if (t === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING && r("justknobx")._("527")) {
                return u();
            }
            return d(e);
        });
        return s.apply(this, arguments);
    }
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebAltDeviceLinkingApi").getCurrentRef();
            const t = o("WAWebAltDeviceLinkingApi").getCurrentHelloCached();
            if (e == null || t?.linkCodePairingWrappedCompanionEphemeralPub == null) {
                return null;
            }
            const n = t.linkCodePairingWrappedCompanionEphemeralPub;
            if (n.byteLength === 0 || e.byteLength === 0) {
                return null;
            }
            const r = new (o("WABinary")).Binary;
            r.writeBuffer(n);
            r.writeByteArray(e);
            const a = r.readByteArrayView();
            const i = yield o("WACryptoSha256").sha256(a);
            return o("WABase64").encodeB64(i);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
            if (!n) {
                return null;
            }
            const r = n?.staticKeyPair?.pubKey;
            const a = o("WAWebConnModel").Conn.ref;
            if (!a || a.length === 0 || e.byteLength === 0 || r.byteLength === 0) {
                return null;
            }
            const i = new (o("WABinary")).Binary;
            i.writeBuffer(e);
            i.writeBuffer(r);
            for(let l = 0; l < a.length; l++){
                i.write(a.charCodeAt(l));
            }
            const s = i.readByteArrayView();
            const u = yield o("WACryptoSha256").sha256(s);
            return o("WABase64").encodeB64(u);
        });
        return m.apply(this, arguments);
    }
    l.genMdClientSessionId = e;
}, 98);