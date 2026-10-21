__d("WAWebSyncdDecryptMutationsWrapper", [
    "Promise",
    "WALogger",
    "WATextEncoding",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = o("WATextEncoding").newTextDecoder();
    function m(e, t) {
        return _(t.records.map((e)=>({
                record: e,
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
            })), e);
    }
    function p(e, t) {
        return _(t.mutations, e);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            return (c || (c = n("Promise"))).all(t.map((e)=>h(r, e.operation, e.record))).catch((n)=>{
                if (n instanceof o("WAWebSyncdError").SyncdFatalError) {
                    const a = t.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET).map(g);
                    const i = t.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE).map(g);
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] decrypt fatal ",
                        " SET=",
                        " REMOVE=",
                        ""
                    ])), r, a, i);
                }
                throw n;
            });
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        const t = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(e.record.index.blob).slice(-16);
        const n = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(o("WAWebSyncdKeyTypes").fromSyncKeyId(e.record.keyId.id));
        return `[keyId: ${n}, mac: ${t}]`;
    }
    function h(e, t, n) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, operation, n) {
            const r = n.keyId.id;
            const a = yield o("WAWebSyncdKeyCache").getKeyData(r);
            if (!a) {
                if (operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE) {
                    const i = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(o("WAWebSyncdKeyTypes").fromSyncKeyId(r));
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: no key data for remove mutation with key id ",
                        ""
                    ])), i);
                }
                throw new (o("WAWebSyncdError")).SyncdMissingKeyError;
            }
            try {
                const l = yield o("WAWebSyncdEncryptionManager").WASyncdEncryptionManager.decryptMutation(e, r, a, operation, n);
                const { index, indexMac, plaintext, valueMac, version } = l;
                return {
                    index: d.decode(index),
                    version,
                    keyId: r,
                    operation,
                    indexMac,
                    valueMac,
                    collection: e,
                    binarySyncData: plaintext
                };
            } catch (error) {
                const g = error instanceof Error ? error.message : String(error);
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: decryption failed: ",
                    ""
                ])), g).sendLogs("syncd: decryption failed");
                throw error;
            }
        });
        return y.apply(this, arguments);
    }
    l.tryDecryptSnapshot = m;
    l.tryDecryptPatch = p;
}, 98);