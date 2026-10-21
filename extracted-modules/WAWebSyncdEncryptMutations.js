__d("WAWebSyncdEncryptMutations", [
    "WAArrayBufferUtils",
    "WACryptoDependencies",
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMutationsCryptoUtils",
    "WAWebSyncdRequestEncode",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: encrypting mutation"
            ])));
            try {
                let a;
                const { binarySyncAction, index, operation, version } = t;
                const m = o("WAArrayBufferUtils").stringToArrayBuffer(index);
                const p = yield o("WAWebSyncdCrypto").generateEncryptionKeys(r);
                const { indexKey, valueEncryptionKey, valueMacKey } = p;
                const h = yield o("WACryptoDependencies").getCrypto().getRandomValues(new Uint8Array(o("WAWebSyncdCryptoConst").IV_LENGTH));
                const padding = (a = o("WAWebSyncdMutationsCryptoUtils")).generatePadding(m.byteLength, binarySyncAction.byteLength);
                const C = d({
                    index: m,
                    padding,
                    value: binarySyncAction,
                    version
                });
                const b = yield a.generateCipherText(h, valueEncryptionKey, C);
                const v = a.generateAssociatedData(operation, n);
                const S = yield a.generateMac(v, b, valueMacKey);
                const indexAndValueCipherText = o("WAWebSyncdCryptoUtils").combine([
                    b,
                    S
                ]);
                const L = yield o("WAWebSyncdCrypto").generateIndexMac(indexKey, m);
                return {
                    indexMac: L,
                    indexAndValueCipherText
                };
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: encrypting mutation failed"
                ])));
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.ENCRYPTION_FAILED);
                throw new (o("WAWebSyncdError")).SyncdFatalError("encryption failure");
            }
        });
        return c.apply(this, arguments);
    }
    function d({ index, padding, value, version }) {
        return o("WAWebSyncdRequestEncode").encodeSyncActionData({
            index,
            value: o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, value),
            padding,
            version
        });
    }
    l.syncdEncryptMutation = u;
}, 98);