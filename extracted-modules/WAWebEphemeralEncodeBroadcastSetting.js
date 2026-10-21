__d("WAWebEphemeralEncodeBroadcastSetting", [
    "WABase64",
    "WABinary",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebProtobufsEphemeral.pb",
    "asyncToGeneratorRuntime",
    "encodeProtobuf"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, additionalData) {
            const r = e.slice(0, 12);
            const o = e.slice(12, 44);
            const a = yield self.crypto.subtle.importKey("raw", o, "AES-GCM", false, [
                "encrypt"
            ]);
            return self.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: new Uint8Array(r),
                additionalData
            }, a, t);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ broadcastJid, duration, recipient, sender, sharedSecret, timestamp }) {
            const u = broadcastJid.toString({
                legacy: true
            });
            const c = recipient.toString({
                legacy: true
            });
            const d = sender.toString({
                legacy: true
            });
            const m = `Ephemeral ${c} ${u}`;
            const p = o("WABinary").Binary.build(m).readByteArrayView();
            const _ = o("WABinary").Binary.build(d).readBuffer();
            const f = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsEphemeral.pb").EphemeralSettingSpec, {
                duration,
                timestamp
            }).readBuffer();
            const g = yield o("WAWebEphemeralDecodeBroadcastSetting").deriveKey(sharedSecret, p);
            const h = yield e(g, f, _);
            return o("WABase64").encodeB64(h);
        });
        return c.apply(this, arguments);
    }
    function d() {
        const e = new Uint8Array(32);
        self.crypto.getRandomValues(e);
        return e;
    }
    l.encodeBroadcastEphemeralSetting = u;
    l.generateEphemeralSharedSecret = d;
}, 98);