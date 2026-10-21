__d("WAWebSyncdRotateKey", [
    "WAArrayBuffersConcat",
    "WABaseGlobals",
    "WAByteArray",
    "WACryptoDependencies",
    "WAJids",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebSyncdKeyManagementUtils",
    "WAWebSyncdKeyTypes",
    "equalsSet"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 1;
    const s = 90;
    function u({ timestamp }) {
        const r = Math.min(s, Math.max(e, o("WAWebABProps").getABPropConfigValue("syncd_key_max_use_days")));
        const a = r * o("WATimeUtils").DAY_MILLISECONDS;
        const i = o("WATimeUtils").unixTimeMs() - timestamp;
        return i > a;
    }
    function c({ fingerprint }, t) {
        for(var o = t.currentIndex, a = t.deviceIndexes, i = t.rawId, l = new Set(fingerprint.deviceIndexes), s = fingerprint.currentIndex + 1; s <= o; s++){
            l.add(s);
        }
        return fingerprint.rawId !== i || !r("equalsSet")(l, new Set(a));
    }
    function d(fingerprint, t) {
        const n = m(t);
        const { keyEpoch, keyId } = n;
        const i = p();
        const l = o("WATimeUtils").unixTimeMs();
        return {
            keyId,
            keyEpoch,
            keyData: i,
            fingerprint,
            timestamp: l
        };
    }
    function m(e) {
        let keyEpoch;
        if (e == null) {
            const n = new Uint8Array(16);
            o("WACryptoDependencies").getCrypto().getRandomValues(n);
            keyEpoch = o("WAWebSyncdKeyManagementUtils").generateNewKeyEpoch(o("WAWebSyncdKeyTypes").toSyncKeyId(n.buffer));
        } else {
            keyEpoch = o("WAWebSyncdKeyManagementUtils").generateNewKeyEpoch(e.keyId);
        }
        const r = o("WAJids").interpretAsNumber(o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid()));
        return {
            keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(new Uint8Array(o("WAArrayBuffersConcat").concatArrayBuffers(o("WAByteArray").intToBytes(2, r).buffer, o("WAByteArray").intToBytes(4, keyEpoch).buffer)).buffer),
            keyEpoch
        };
    }
    function p() {
        return o("WAWebSyncdKeyTypes").toSyncKeyData(o("WACryptoDependencies").getCrypto().getRandomValues(new Uint8Array(32)).buffer);
    }
    l.hasKeyExpired = u;
    l.hasADeviceBeenRemoved = c;
    l.rotateKey = d;
}, 98);