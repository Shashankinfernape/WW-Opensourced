__d("WAWebSyncdEncryptionManager", [
    "WACryptoHmac",
    "WAEncodeString",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDecryptMutations",
    "WAWebSyncdEncryptMutations",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function generateSnapshotMac(e, t, n, r) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const a = yield o("WAWebSyncdCrypto").generateEncryptionKeys(e);
            const a_snapshotMacKey = a.snapshotMacKey;
            const buffer = o("WAEncodeString").toUtf8(r).buffer;
            const s = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(n);
            return o("WACryptoHmac").hmacSha256(a_snapshotMacKey, o("WAWebSyncdCryptoUtils").combine([
                t,
                s,
                buffer
            ]));
        });
        return s.apply(this, arguments);
    }
    function generatePatchMac(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ collection, keyData, patchVersion, snapshotMac, valueMacs }) {
            const l = yield o("WAWebSyncdCrypto").generateEncryptionKeys(keyData);
            const l_patchMacKey = l.patchMacKey;
            const buffer = o("WAEncodeString").toUtf8(collection).buffer;
            const c = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(patchVersion);
            return o("WACryptoHmac").hmacSha256(l_patchMacKey, o("WAWebSyncdCryptoUtils").combine([
                snapshotMac
            ].concat(valueMacs, [
                c,
                buffer
            ])));
        });
        return c.apply(this, arguments);
    }
    const d = {
        encryptMutation: o("WAWebSyncdEncryptMutations").syncdEncryptMutation,
        decryptMutation: o("WAWebSyncdDecryptMutations").syncdDecryptMutation,
        generatePatchMac,
        generateSnapshotMac
    };
    l.WASyncdEncryptionManager = d;
}, 98);