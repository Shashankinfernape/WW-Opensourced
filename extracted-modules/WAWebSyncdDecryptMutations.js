__d("WAWebSyncdDecryptMutations", [
    "WACryptoUtils",
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDecode",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMutationsCryptoUtils",
    "WAWebSyncdValidateSyncActionProtobuf",
    "asyncToGeneratorRuntime",
    "encodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(e, t, n, r, o) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a, i, l) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: decrypting mutation"
            ])));
            const blob = l.index.blob;
            const blob_1 = l.value.blob;
            const m = o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(blob_1);
            const p = o("WAWebSyncdCryptoUtils").split(blob_1, o("WAWebSyncdCryptoConst").IV_LENGTH, blob_1.byteLength - o("WAWebSyncdCryptoConst").MAC_LENGTH - o("WAWebSyncdCryptoConst").IV_LENGTH);
            const _ = p[0];
            const f = p[1];
            const g = p[2];
            const h = yield o("WAWebSyncdCrypto").generateEncryptionKeys(a);
            const { indexKey, valueEncryptionKey, valueMacKey } = h;
            const v = o("WAWebSyncdCryptoUtils").combine([
                _,
                f
            ]);
            const S = o("WAWebSyncdMutationsCryptoUtils").generateAssociatedData(i, n);
            const R = yield o("WAWebSyncdMutationsCryptoUtils").generateMac(S, v, valueMacKey);
            if (!o("WACryptoUtils").arrayBuffersEqual(g, R)) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: decrypting mutation failed: valueMAC mismatch"
                ])));
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.DECRYPTION_FAILED, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("decryption failure: valueMAC mismatch");
            }
            const L = yield o("WAWebSyncdMutationsCryptoUtils").decryptCipherText(new Uint8Array(_), valueEncryptionKey, f);
            const E = o("WAWebSyncdDecode").decodeSyncActionData(t, L);
            const k = r("WAWebSyncdValidateSyncActionProtobuf").validateSyncActionDataProtobuf(t, E);
            const I = yield o("WAWebSyncdCrypto").generateIndexMac(indexKey, k.index);
            if (!o("WACryptoUtils").arrayBuffersEqual(blob, I)) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: decrypting mutation failed: indexMAC mismatch"
                ])));
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.DECRYPTION_FAILED, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("decryption failure: indexMAC mismatch");
            }
            const { index, value, version } = k;
            return {
                version,
                index,
                value: value ? o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, value).readBuffer() : null,
                indexMac: blob,
                valueMac: m,
                plaintext: L
            };
        });
        return d.apply(this, arguments);
    }
    l.syncdDecryptMutation = c;
}, 98);