__d("WAWebSyncdEncryptMutationsWrapper", [
    "WALogger",
    "WAWebGetSyncAction",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCrypto",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const { index, operation } = t;
            let n_keyId = n.keyId;
            let n_keyData = n.keyData;
            let s;
            e: {
                if (operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET) {
                    break e;
                }
                if (operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE) {
                    s = yield o("WAWebGetSyncAction").getSyncActionInTransaction(index);
                    if (!s) {
                        throw new (o("WAWebSyncdError")).SyncdFatalError("no corresponding set mutation");
                    }
                    const u = s.keyId;
                    const c = yield o("WAWebSyncdKeyCache").getKeyData(u);
                    if (c == null) {
                        throw new (o("WAWebSyncdError")).SyncdFatalError("no key data for corresponding mutation");
                    }
                    n_keyId = u;
                    n_keyData = c;
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${operation}`);
            }
            try {
                const d = yield o("WAWebSyncdEncryptionManager").WASyncdEncryptionManager.encryptMutation(t, n_keyId, n_keyData);
                const { indexAndValueCipherText, indexMac } = d;
                const _ = o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(indexAndValueCipherText);
                return babelHelpers.extends({}, t, {
                    keyId: n_keyId,
                    keyData: n_keyData,
                    indexMac,
                    indexAndValueCipherText,
                    valueMac: _
                });
            } catch (error) {
                const f = error instanceof Error ? error.message : String(error);
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: encryption failed: ",
                    ""
                ])), f).sendLogs("syncd: encryption failed");
                throw error;
            }
        });
        return u.apply(this, arguments);
    }
    l.encryptMutation = s;
}, 98);