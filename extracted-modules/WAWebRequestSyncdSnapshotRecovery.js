__d("WAWebRequestSyncdSnapshotRecovery", [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WATextEncoding",
    "WATimeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebSyncdConst",
    "WAWebSyncdCrypto",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = o("WATextEncoding").newTextDecoder();
    const p = 60000;
    const _ = (()=>{
        function t() {
            this.recoveryPromise = new Map;
            this.recoveryInflight = null;
        }
        const t_prototype = t.prototype;
        t_prototype.requestRecoveryWithTimeout = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    const n = yield o("WAPromiseTimeout").promiseTimeout(this.requestRecoveryFromPrimary(t), p);
                    return n;
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd recovery] error occurred during recovery request ",
                        ""
                    ])), error);
                    return null;
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.requestRecoveryFromPrimary = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                let t = null;
                try {
                    if (this.recoveryInflight != null) {
                        yield this.recoveryInflight.promise;
                    }
                    this.recoveryInflight = new (o("WAResolvable")).Resolvable;
                    if (!this.recoveryPromise.has(e)) {
                        this.recoveryPromise.set(e, new (o("WAResolvable")).Resolvable);
                    }
                    yield o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY, {
                        collectionName: e,
                        timestamp: o("WATimeUtils").unixTime()
                    });
                    const n = yield r("nullthrows")(this.recoveryPromise.get(e)).promise;
                    if (n == null || String(n?.collectionName) !== String(e)) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd recovery] collection mismatch got=",
                            " want=",
                            ""
                        ])), n?.collectionName, e);
                        throw r("err")("syncd recovery: null or collection name mismatch");
                    }
                    t = yield this.convertSyncdSnapshotRecoveryResponseToSnapshot(n);
                } catch (error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd recovery] error occurred during response processing ",
                        ""
                    ])), error);
                }
                if (this.recoveryInflight != null) {
                    this.recoveryInflight.resolve();
                }
                this.recoveryPromise.set(e, new (o("WAResolvable")).Resolvable);
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.convertSyncdSnapshotRecoveryResponseToSnapshot = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ collectionLthash, collectionName, mutationRecords, version }) {
                if (version == null) {
                    throw r("err")("syncd recovery: syncdVersion is null");
                }
                const decryptedMutations = yield (d || (d = n("Promise"))).all(mutationRecords.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ keyId, mac, value }) {
                        if (value == null || keyId == null) {
                            throw r("err")("syncd recovery: unexpected null value in mutation record");
                        }
                        const { index, version } = value;
                        if (index == null || version == null || mac == null) {
                            throw r("err")("syncd recovery: unexpected null value in mutation value");
                        }
                        let u = null;
                        try {
                            u = yield o("WAWebSyncdKeyCache").getKeyData(o("WAWebSyncdKeyTypes").toSyncKeyId(keyId));
                        } catch (error) {
                            const d = error instanceof Error && error.name;
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd recovery] key retrieval err: ",
                                ""
                            ])), d).sendLogs("syncd-recovery-key-data-error");
                        }
                        const p = yield o("WAWebSyncdCrypto").generateEncryptionKeys(r("nullthrows")(u));
                        const p_indexKey = p.indexKey;
                        const f = yield o("WAWebSyncdCrypto").generateIndexMac(r("nullthrows")(p_indexKey), r("nullthrows")(index));
                        const binarySyncData = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, value).readBuffer();
                        const h = o("WAWebSyncdConst").CollectionName.cast(collectionName);
                        if (h == null) {
                            throw r("err")("syncd recovery: invalid collection name");
                        }
                        const y = {
                            index: m.decode(index),
                            binarySyncData,
                            operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                            version,
                            keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(keyId),
                            indexMac: f,
                            valueMac: mac,
                            collection: h
                        };
                        return y;
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                return {
                    collectionLthash: r("nullthrows")(collectionLthash),
                    version: Number(version.version),
                    decryptedMutations
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.resolveRecoveryPromise = function(t, n) {
            const e = this.recoveryPromise.get(t);
            if (e != null) {
                e.resolve(n);
            }
        };
        return t;
    })();
    const f = new _;
    l.SyncdSnapshotRecoveryModule = f;
}, 98);