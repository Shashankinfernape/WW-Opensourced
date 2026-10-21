__d("WAWebEphemeralDecodeBroadcastSetting", [
    "WABase64",
    "WABinary",
    "WACustomError",
    "WATimeUtils",
    "WAWebProtobufsEphemeral.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = new Uint8Array(32);
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = yield self.crypto.subtle.importKey("raw", t, "HKDF", false, [
                "deriveKey"
            ]);
            const o = yield self.crypto.subtle.deriveKey({
                name: "HKDF",
                hash: "SHA-256",
                salt: e,
                info: n
            }, r, {
                name: "HMAC",
                hash: "SHA-256"
            }, true, [
                "verify"
            ]);
            return self.crypto.subtle.exportKey("raw", o);
        });
        return u.apply(this, arguments);
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = e.slice(0, 12);
            const o = e.slice(12, 44);
            const a = yield self.crypto.subtle.importKey("raw", o, "AES-GCM", false, [
                "decrypt"
            ]);
            return self.crypto.subtle.decrypt({
                name: "AES-GCM",
                iv: new Uint8Array(r),
                additionalData: n
            }, a, t);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ broadcastJid: t, ephSetting: n, recipient: a, sender: i, sharedSecret: l }) {
            const u = t.toString({
                legacy: true
            });
            const d = a.toString({
                legacy: true
            });
            const m = i.toString({
                legacy: true
            });
            const p = `Ephemeral ${d} ${u}`;
            const f = o("WABinary").Binary.build(p).readByteArrayView();
            const g = new Uint8Array(l);
            const h = o("WABase64").decodeB64(n);
            const y = o("WABinary").Binary.build(m).readBuffer();
            const C = yield s(g, f);
            try {
                const b = yield c(C, h, y);
                const v = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsEphemeral.pb").EphemeralSettingSpec, b);
                const { duration: S, timestamp: R } = v;
                if (S == null || R == null) {
                    throw r("err")("ephSetting decoded into malformed proto");
                }
                return {
                    ephemeralDuration: S,
                    ephemeralSettingTimestamp: o("WATimeUtils").castLongIntToUnixTime(R)
                };
            } catch (e) {
                throw new _(e instanceof Error ? e.message : String(e));
            }
        });
        return p.apply(this, arguments);
    }
    var _ = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "BroadcastEphSettingsError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.deriveKey = s;
    l.decodeBroadcastEphemeralSetting = m;
    l.BroadcastEphSettingsError = _;
}, 98);