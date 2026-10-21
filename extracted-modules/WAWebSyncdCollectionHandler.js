__d("WAWebSyncdCollectionHandler", [
    "Promise",
    "WABase64",
    "WACryptoUtils",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebGetCollectionVersion",
    "WAWebGetMissingKey",
    "WAWebGetSyncAction",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebRequestSyncdSnapshotRecovery",
    "WAWebRunInTransaction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdCollectionHandlerTypesConverter",
    "WAWebSyncdCollectionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDecryptMutationsWrapper",
    "WAWebSyncdError",
    "WAWebSyncdGetActionHandler",
    "WAWebSyncdHandleMissingKeys",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdMMSDownload",
    "WAWebSyncdMetricCriticalBootstrapStage",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMetrics",
    "WAWebSyncdResolveConflict",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebSyncdValidateMutations",
    "WAWebSyncdValidateServerSyncProtobuf",
    "WAWebSyncdWamAppState",
    "WAWebSyncdWamReportingUtils",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "asyncToGeneratorRuntime",
    "countWhere",
    "decodeProtobuf",
    "getErrorSafe",
    "gkx",
    "nullthrows",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    let ne;
    let re;
    let oe;
    let ae;
    let ie;
    let le;
    let se;
    let ue;
    let ce;
    let de;
    let me;
    let pe;
    let _e;
    let fe;
    let ge;
    let he;
    let ye;
    let Ce;
    let be;
    let ve;
    let Se;
    const Re = 0;
    const Le = new ArrayBuffer(128);
    function Ee(e) {
        return ke.apply(this, arguments);
    }
    function ke() {
        ke = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return (Se || (Se = n("Promise"))).resolve();
            }
            const t = Math.random().toString(36).substr(2, 5);
            const r = e.sort((e, t)=>e.timestamp - t.timestamp);
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start applyIndividualMutations"
            ])));
            const a = o("WAWebSyncdCollectionHandlerTypesConverter").syncActionsToDecryptedMutation(r);
            const i = a.reduce((acc, item)=>{
                const r = acc.get(item.collection) ?? [];
                r.push(item);
                acc.set(item.collection, r);
                return acc;
            }, new Map);
            const l = Array.from(i.keys(), (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(r) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " syncd: apply individual mutations for collection ",
                        ""
                    ])), t, r);
                    const a = i.get(r);
                    if (a !== undefined) {
                        const l = yield Xe(r, a, o("WAWebSyncdConst").SyncDataType.Local, t, null, null);
                        const { pendingSetMutationsToDrop, setMutationsToPersist } = l;
                        const c = setMutationsToPersist.map((e)=>({
                                actionState: e.actionState,
                                index: e.index,
                                modelId: e.modelId,
                                modelType: e.modelType
                            }));
                        let d = c;
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] syncd: filter individual mutations for collection ",
                            ", mutations: ",
                            ", mutationsWithoutMacs: ",
                            ""
                        ])), t, r, e.length, c.length);
                        d = c.filter((t)=>{
                            const n = e.find((e)=>e.index === t.index);
                            if (n == null) {
                                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: could not find original individual mutation"
                                ]))).sendLogs("syncd: could not find original individual mutation");
                                return true;
                            }
                            return t.actionState !== n.actionState || t.modelId !== n.modelId || t.modelType !== n.modelType;
                        });
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] syncd: end apply individual mutations for collection ",
                            ""
                        ])), t, r);
                        yield o("WAWebRunInTransaction").runInTransaction({
                            SyncActionStore: true,
                            PendingMutationStore: true
                        }, (()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ PendingMutationStore, SyncActionStore }) {
                                if (d.length > 0) {
                                    yield SyncActionStore.bulkUpdate(d);
                                }
                                if (pendingSetMutationsToDrop.length > 0) {
                                    yield PendingMutationStore.bulkRemove(pendingSetMutationsToDrop);
                                }
                            });
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })());
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " syncd: end update db after apply individual mutations for collection ",
                            ""
                        ])), t, r);
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })());
            yield (Se || (Se = n("Promise"))).all(l);
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " syncd: end applyIndividualMutations"
            ])), t);
        });
        return ke.apply(this, arguments);
    }
    function Ie(e) {
        return Te.apply(this, arguments);
    }
    function Te() {
        Te = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ collectionDetails, localVersion, session, syncdEventFlow }) {
            const { name, patches, snapshot, syncedEncryptedMutations, syncedPendingMutationsId, version } = collectionDetails;
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: start applying collection ",
                ""
            ])), session, name);
            try {
                syncdEventFlow?.mark("external_mutations_download_start", {
                    patchCount: collectionDetails.patches?.length,
                    snapshotSizeBytes: collectionDetails.snapshot?.fileSizeBytes
                });
                const f = yield Ae(name, patches, snapshot, localVersion);
                const g = f[0];
                const h = f[1];
                syncdEventFlow?.mark("external_mutations_download_end", {
                    patchesWithMutationsCount: h?.length,
                    snapshotRecordsCount: g?.records.length
                });
                const x = performance.now();
                if (g != null) {
                    yield We(name, g, h, syncdEventFlow, session, o("WAWebSyncdCollectionUtils").isBootstrap(localVersion) ? "bootstrap" : "non_bootstrap");
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: ",
                        " snapshot and patches applied successfully"
                    ])), session, name);
                } else if (h != null) {
                    const $ = Math.min(...h.map((e)=>e.version.version));
                    const P = localVersion != null && $ > localVersion + 1 && h.length > 0;
                    if (P) {
                        yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(name, `${session} has missing patches`);
                        const N = yield o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
                        o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " syncd: missing keys: [",
                            "]"
                        ])), session, N.map((e)=>`${e.keyHex}:${e.timestamp}`));
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " syncd: has missing patches. collection: ",
                            ", localVersion: ",
                            ",\n           minPatch: ",
                            ""
                        ])), session, name, localVersion, $);
                        yield De(name, h[0]);
                        yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(name);
                        o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " syncd: has missing patches. collection: ",
                            ""
                        ])), session, name).sendLogs("syncd: has missing patches");
                        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SERVER_DID_NOT_SEND_ALL_PATCHES, {
                            collection: name,
                            patchVersion: localVersion ?? 0
                        });
                        throw new (o("WAWebSyncdError")).SyncdFatalError("syncd: has missing patches");
                    }
                    yield He(name, h, syncdEventFlow, session, o("WAWebSyncdCollectionUtils").isBootstrap(localVersion) ? "bootstrap" : "non_bootstrap");
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: ",
                        " patches applied successfully"
                    ])), session, name);
                } else if (version != null) {
                    const M = r("countWhere")(syncedEncryptedMutations, function(e) {
                        return e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET;
                    });
                    const w = r("countWhere")(syncedEncryptedMutations, function(e) {
                        return e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE;
                    });
                    const A = Array.from(new Set(syncedEncryptedMutations.map((e)=>e.index))).length;
                    yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(name, `${session} start upload patch. version: ${version}. mutation count: ${syncedEncryptedMutations.length},
        numSet: ${M}, numRemove: ${w}, numUniqueIndex: ${A}`);
                    yield $e(name, version, syncedPendingMutationsId, syncedEncryptedMutations, session);
                    const F = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
                    syncedEncryptedMutations.forEach((e)=>{
                        const t = o("WAWebSyncdActionUtils").getMutationNameFromIndex(e.collection, e.index);
                        o("WAWebSyncdWamReportingUtils").syncReportMutationToWam({
                            action: t,
                            collection: name,
                            indexMac: o("WABase64").encodeB64UrlSafe(e.indexMac),
                            isIncoming: false,
                            isPatch: true,
                            isRemove: e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
                            mdSessionId: F,
                            patchMac: e.patchMac ? o("WABase64").encodeB64UrlSafe(e.patchMac) : undefined,
                            version
                        });
                    });
                    yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(name, `${session} end upload patches`);
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: ",
                        " v",
                        " uploaded successfully"
                    ])), session, name, version);
                } else {
                    if (o("WAWebSyncdCollectionUtils").isBootstrap(localVersion)) {
                        yield o("WAWebGetCollectionVersion").updateCollectionVersionAndLtHashInTransaction(name, Re, Le);
                    }
                    if (syncedEncryptedMutations.length > 0) {
                        const O = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
                        o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(name, localVersion ?? 0, new ArrayBuffer(0), syncedEncryptedMutations, O, "error: no response from server for collection");
                    }
                    o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: sync ",
                        " but there are no updates"
                    ])), name);
                }
                const B = Math.floor(performance.now() - x);
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: applyAppStateSyncResponse: finished applying ",
                    " in ",
                    "ms"
                ])), name, B);
                if ((h || g) && o("WAWebSyncdCollectionUtils").isBootstrap(localVersion) && !o("WAWebSyncdCollectionUtils").isCriticalCollection(name)) {
                    const W = g != null;
                    o("WAWebSyncdMetrics").reportSyncdBootstrapDataApplied(name, W ? o("WAWebSyncdMetrics").SyncdBootstrapDataAppliedSnapshotUsed.SNAPSHOT_USED : o("WAWebSyncdMetrics").SyncdBootstrapDataAppliedSnapshotUsed.SNAPSHOT_NOT_USED, B);
                }
                return collectionDetails;
            } catch (error) {
                const q = r("getErrorSafe")(error).message;
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(name, `error (maybe retryable): ${q}`);
                if (syncedEncryptedMutations.length > 0) {
                    const U = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
                    o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(name, localVersion ?? 0, new ArrayBuffer(0), syncedEncryptedMutations, U, `error: ${q}`);
                }
                if (error instanceof o("WAWebSyncdError").SyncdMissingKeyError) {
                    o("WALogger").WARN(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: key error: ",
                        " missing keys"
                    ])), name);
                    return {
                        name,
                        state: o("WAWebSyncdConst").CollectionState.Blocked
                    };
                }
                if (error instanceof o("WAWebSyncdError").SyncdFatalError) {
                    o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: fatal error: ",
                        " throws ",
                        ""
                    ])), name, q).sendLogs(`syncd: fatal error: ${String(name)} throws ${q}`);
                    return {
                        name,
                        state: o("WAWebSyncdConst").CollectionState.ErrorFatal
                    };
                }
                o("WALogger").WARN(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: retryable error: ",
                    " throws ",
                    ""
                ])), name, q).sendLogs(`syncd: retryable error: ${String(name)} throws ${q}`);
                return {
                    name,
                    state: o("WAWebSyncdConst").CollectionState.ErrorRetry
                };
            }
        });
        return Te.apply(this, arguments);
    }
    function De(e, t) {
        return xe.apply(this, arguments);
    }
    function xe() {
        xe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = yield o("WAWebSyncdDecryptMutationsWrapper").tryDecryptPatch(e, t);
                const r = n.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET);
                const a = o("WAWebSyncdValidateMutations").validateAndTypeSetMutations(e, r);
                const i = a.length > 0 ? a[0].timestamp : null;
                const l = i == null ? null : o("WATimeUtils").daysDiff(o("WATimeUtils").unixTimeMs(), i);
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `max timestamp in first patch: ${l ?? "n/a"} days ago`);
            } catch (error) {
                o("WALogger").WARN(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: could not log max timestamp: ",
                    ""
                ])), error);
            }
        });
        return xe.apply(this, arguments);
    }
    function $e(e, t, n, r, o) {
        return Pe.apply(this, arguments);
    }
    function Pe() {
        Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i) {
            const s = o("WAWebABProps").getABPropConfigValue("syncd_use_index_for_lthash_lookup") === true;
            const u = a.map((e)=>({
                    indexMac: e.indexMac,
                    valueMac: e.valueMac,
                    operation: e.operation,
                    action: e.action || undefined,
                    index: s ? e.index : undefined
                }));
            yield Ne(i, e, a, u);
            const c = yield o("WAWebSyncdAntiTampering").computeLtHash(e, u, i, null, t, o("WAWebSyncdAntiTampering").SyncdPatchDirection.Outgoing);
            const c_ltHash = c.ltHash;
            const m = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
            o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(e, t, c_ltHash, a, m);
            const p = o("WAWebSyncdCollectionHandlerTypesConverter").encryptedUploadMutationsToSyncActions(a.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET), o("WAWebSyncdConst").SyncActionState.Success);
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${i}] set mutation during upload: ${p.map((e)=>o("WAWebSyncdAntiTampering").indexAndValueMacToString(e.indexMac, e.valueMac)).join("\n	")}`);
            const _ = new Set(p.map((e)=>e.index));
            const f = a.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE && !_.has(e.index)).map((e)=>e.index);
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${i}] count removed during upload: ${f.length}`);
            const g = (yield o("WAWebGetCollectionVersion").getCollectionVersionInTransaction(e).then((e)=>e?.version)) ?? 0;
            if (t !== g + 1) {
                o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: uploadSuccessful: unexpected server version (",
                    ") after patch upload, expected ",
                    ""
                ])), t, g + 1).sendLogs("syncd: unexpected server version after patch upload");
            }
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: uploadSuccessful: write to db for ",
                ""
            ])), i, e);
            yield o("WAWebSyncdAntiTampering").logMacsInSnapshot(e, i, `pre-processing outgoing patch v${t}`);
            yield o("WAWebSyncdAntiTampering").reportCollectionInconsistency(e, `pre-processing outgoing patch ${t}.`, i);
            yield ze(e, t, a, i);
            let h = null;
            yield o("WAWebRunInTransaction").runInTransaction({
                SyncActionStore: true,
                PendingMutationStore: true,
                CollectionVersionStore: true
            }, (()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ CollectionVersionStore, PendingMutationStore, SyncActionStore }) {
                    h = yield ot(e, t, "outgoing patch", CollectionVersionStore, i);
                    if (h == null) {
                        yield SyncActionStore.bulkRemove(f);
                        yield SyncActionStore.bulkSet(p);
                        yield PendingMutationStore.bulkRemove(r);
                        yield CollectionVersionStore.update(e, {
                            version: t,
                            ltHash: c_ltHash
                        });
                    } else {
                        o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: [",
                            "] skip applying syncd old version ",
                            ""
                        ])), i, t);
                    }
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })());
            if (h != null) {
                const y = h;
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, y);
                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
                o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), y).sendLogs(`syncd: processing old version for ${e}`);
            }
            o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: end uploadSuccessful for ",
                ""
            ])), i, e);
        });
        return Pe.apply(this, arguments);
    }
    function Ne(e, t, n, r) {
        return Me.apply(this, arguments);
    }
    function Me() {
        Me = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a) {
            try {
                const i = yield (Se || (Se = n("Promise"))).all([
                    (yield Se.all(r.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE).map((e)=>o("WAWebGetSyncAction").getSyncActionInTransaction(e.index)))).filter(Boolean),
                    (yield Se.all(r.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET).map((e)=>o("WAWebGetSyncAction").getSyncActionInTransaction(e.index)))).filter(Boolean),
                    (yield Se.all(r.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET).map((e)=>o("WAWebGetSyncAction").getSyncActionsByIndexMacsInTransaction([
                            e.indexMac
                        ])))).filter(Boolean)
                ]);
                const l = i[0];
                const s = i[1];
                const u = i[2];
                let c = null;
                if (s.length === 1 && u.length === 1 && u[0].length === 1) {
                    c = s[0].index === u[0][0].index;
                }
                const d = `[${e}] patch uploaded with mutations mac for ${t}:

      SET: ${a.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET).map((e)=>o("WAWebSyncdAntiTampering").indexAndValueMacToString(e.indexMac, e.valueMac)).join("\n	")}
      REMOVE: ${a.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE).map((e)=>o("WAWebSyncdAntiTampering").indexAndValueMacToString(e.indexMac, e.valueMac)).join("\n	")}

      REMOVE fetch by index: ${l.map((e)=>we(e)).join("\n	")}
      SET fetch by index: ${s.map((e)=>we(e)).join("\n	")}
      SET fetch by mac: ${u.map((e)=>e.map((e)=>we(e))).join("\n	")}
      isSameIndex: ${c == null ? "n/a" : c.toString()}
      `;
                o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    " "
                ])), d);
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(t, d);
            } catch (error) {
                o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: failed to debug upload: ",
                    ""
                ])), error);
            }
        });
        return Me.apply(this, arguments);
    }
    function we(e) {
        const t = o("WAWebSyncdActionUtils").getMutationNameFromIndex(e.collection, e.index);
        return `${e.collection}:${o("WAWebSyncdAntiTampering").indexAndValueMacToString(e.indexMac, e.valueMac)}:${t ?? "no-mutation-name"}`;
    }
    function Ae(e, t, n, r) {
        return Fe.apply(this, arguments);
    }
    function Fe() {
        Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i) {
            let l = (Se || (Se = n("Promise"))).resolve();
            let downloadSize = 0;
            const downloadStartTs = o("WATimeUtils").unixTimeMs();
            if (a != null) {
                const d = r("WAWebSyncdValidateServerSyncProtobuf").validateExternalBlobReference(e, a);
                downloadSize += o("WALongInt").numberOrThrowIfTooLarge(d.fileSizeBytes ?? 0);
                o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: download snapshot for ",
                    ""
                ])), e);
                l = o("WAWebSyncdMMSDownload").downloadSnapshot(e, d);
            }
            let m = Se.resolve();
            if (t != null && t.length > 0) {
                const p = t.map((t)=>r("WAWebSyncdValidateServerSyncProtobuf").validatePatchProtobuf(e, t));
                m = (Se || (Se = n("Promise"))).all(p.map((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        let n = t.mutations || [];
                        const t_externalMutations = t.externalMutations;
                        if (t_externalMutations) {
                            o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: download patch for ",
                                ""
                            ])), e);
                            n = yield o("WAWebSyncdMMSDownload").downloadExternalPatch(e, t_externalMutations);
                            o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: ",
                                "'s external patch downloaded"
                            ])), e);
                            downloadSize += o("WALongInt").numberOrThrowIfTooLarge(t_externalMutations.fileSizeBytes ?? 0);
                        }
                        return {
                            mutations: n,
                            version: t.version,
                            snapshotMac: t.snapshotMac,
                            patchMac: t.patchMac,
                            keyId: t.keyId,
                            exitCode: t.exitCode,
                            deviceIndex: t.deviceIndex,
                            clientDebugData: t.clientDebugData
                        };
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })()));
            }
            let _;
            let f;
            try {
                const g = yield (Se || (Se = n("Promise"))).all([
                    l,
                    m
                ]);
                _ = g[0];
                f = g[1];
                if (o("WAWebSyncdCollectionUtils").isBootstrap(i)) {
                    o("WAWebSyncdMetrics").reportSyncdBootstrapAppStateDownloadMetric({
                        collection: e,
                        downloadStartTs,
                        downloadSize,
                        isSuccess: "success",
                        failureReason: null
                    });
                }
            } catch (error) {
                if (o("WAWebSyncdCollectionUtils").isBootstrap(i)) {
                    o("WAWebSyncdMetrics").reportSyncdBootstrapAppStateDownloadMetric({
                        collection: e,
                        downloadStartTs,
                        downloadSize,
                        isSuccess: "failure",
                        failureReason: o("WAWebMdSyncDownloadFailureReason").getMdSyncDownloadFailureReason(error)
                    });
                }
                throw error;
            }
            return [
                _,
                f
            ];
        });
        return Fe.apply(this, arguments);
    }
    function Oe(e, t) {
        const measuredComputeLtHashAndValidateSnapshot = (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, r) {
                e?.mark("anti_tampering_start", {
                    source: o("WAWebSyncdConst").SyncDataType.Snapshot
                });
                const a = yield o("WAWebSyncdAntiTampering").computeLtHashAndValidateSnapshot(n, r, t);
                e?.mark("anti_tampering_end", {
                    source: o("WAWebSyncdConst").SyncDataType.Snapshot
                });
                return a;
            });
            return function(t, n) {
                return r.apply(this, arguments);
            };
        })();
        const measuredTryDecryptSnapshot = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                e?.mark("decryption_start", {
                    source: o("WAWebSyncdConst").SyncDataType.Snapshot
                });
                const r = yield o("WAWebSyncdDecryptMutationsWrapper").tryDecryptSnapshot(t, n);
                e?.mark("decryption_end", {
                    source: o("WAWebSyncdConst").SyncDataType.Snapshot
                });
                return r;
            });
            return function(n, r) {
                return t.apply(this, arguments);
            };
        })();
        return {
            measuredComputeLtHashAndValidateSnapshot,
            measuredTryDecryptSnapshot
        };
    }
    function Be(e) {
        const measuredComputeLtHashAndValidatePatch = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r, a, i) {
                e?.mark("anti_tampering_start", {
                    source: o("WAWebSyncdConst").SyncDataType.Patch
                });
                const l = yield o("WAWebSyncdAntiTampering").computeLtHashAndValidatePatch(t, n, r, a, i);
                e?.mark("anti_tampering_end", {
                    source: o("WAWebSyncdConst").SyncDataType.Patch
                });
                return l;
            });
            return function(n, r, o, a, i) {
                return t.apply(this, arguments);
            };
        })();
        const measuredTryDecryptPatch = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                e?.mark("decryption_start", {
                    source: o("WAWebSyncdConst").SyncDataType.Patch
                });
                const r = yield o("WAWebSyncdDecryptMutationsWrapper").tryDecryptPatch(t, n);
                e?.mark("decryption_end", {
                    source: o("WAWebSyncdConst").SyncDataType.Patch
                });
                return r;
            });
            return function(n, r) {
                return t.apply(this, arguments);
            };
        })();
        return {
            measuredComputeLtHashAndValidatePatch,
            measuredTryDecryptPatch
        };
    }
    function We(e, t, n, r, o, a) {
        return qe.apply(this, arguments);
    }
    function qe() {
        qe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i, l, bootstrapState) {
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${l}] start applySnapshotAndPatches. mutation count: ${t.records.length}, version: ${t.version.version}`);
            let d = false;
            const m = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
            const p = o("WAWebSyncdWamReportingUtils").createSyncdWamAccumulator({
                bootstrapState,
                bundleType: "snapshot",
                collection: e,
                direction: "incoming",
                mdSessionId: m
            });
            p.version = t.version.version;
            p.bundleSize = t.records.length;
            p.keyId = t.keyId?.id ?? null;
            p.wireSnapshotMac = t.mac;
            try {
                const _ = Oe(i, l);
                const { measuredComputeLtHashAndValidateSnapshot, measuredTryDecryptSnapshot } = _;
                i?.mark("apply_start", {
                    source: o("WAWebSyncdConst").SyncDataType.Snapshot,
                    snapshotRecordsCount: t.records.length
                });
                o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: start validate ",
                    "'s snapshot"
                ])), l, e);
                let h = new ArrayBuffer(0);
                let y = null;
                try {
                    const C = yield measuredComputeLtHashAndValidateSnapshot(e, t);
                    h = C.ltHash;
                    p.computedLtHash = h;
                    p.computedSnapshotMac = C.computedSnapshotMac;
                } catch (error) {
                    const b = o("WAWebSyncdSnapshotRecoveryGatingUtils").shouldPreformSnapshotRecovery(e, t.records.length, error);
                    if (b.shouldPerformRecovery) {
                        d = true;
                        yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${l}] attempt to recovery failed validate snapshot mac`);
                        o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] syncd: ",
                            " failed validate snapshot mac, attempt to recovery"
                        ])), l, e);
                    } else {
                        throw error;
                    }
                }
                o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: collection ",
                    "'s snapshot validated"
                ])), l, e);
                let v = [];
                if (!d) {
                    v = yield measuredTryDecryptSnapshot(e, t);
                    o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: collection ",
                        "'s snapshot decrypted"
                    ])), l, e);
                } else {
                    o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd recovery: ",
                        " requesting recovery from primary"
                    ])), l, e);
                    if (!r("gkx")("26258")) {
                        o("WALogger").ERROR(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] syncd recovery: ",
                            " requesting recovery from primary"
                        ])), l, e).sendLogs("syncd-recover-fatal");
                    }
                    const S = o("WATimeUtils").unixTimeMs();
                    const R = yield o("WAWebRequestSyncdSnapshotRecovery").SyncdSnapshotRecoveryModule.requestRecoveryWithTimeout(e);
                    o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd recovery: ",
                        " recovery request resolved"
                    ])), l, e);
                    const L = o("WATimeUtils").unixTimeMs() - S;
                    if (R == null) {
                        o("WAWebSyncdMetricFatalError").flushDeferredFatalError(L);
                        throw new (o("WAWebSyncdError")).SyncdFatalError("unable to validate snapshot mac");
                    }
                    o("WAWebSyncdMetricFatalError").flushDeferredFatalError(L, false);
                    v = R.decryptedMutations;
                    h = R.collectionLthash;
                    y = R.version;
                }
                if (!d) {
                    p.mutations = v;
                    v.forEach((n)=>{
                        const r = o("WAWebSyncdActionUtils").getMutationNameFromIndex(n.collection, n.index);
                        o("WAWebSyncdWamReportingUtils").syncReportMutationToWam({
                            action: r,
                            collection: e,
                            indexMac: o("WABase64").encodeB64UrlSafe(n.indexMac),
                            isIncoming: true,
                            isPatch: false,
                            isRemove: n.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
                            mdSessionId: m,
                            patchMac: o("WABase64").encodeB64UrlSafe(t.mac),
                            version: t.version.version
                        });
                    });
                    o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(babelHelpers.extends({}, p));
                    yield ze(e, t.version.version, v, l);
                    o("WAWebSyncdWamAppState").addMutationCount(t.records.length);
                    o("WAWebSyncdMetricCriticalBootstrapStage").reportSyncdDecryptedMutations(v);
                    o("WAWebSyncdValidateMutations").validateNoSameIndexForMultipleMutations(e, v, o("WAWebSyncdConst").SyncDataType.Snapshot);
                }
                const E = d && y != null ? y : t.version.version;
                const k = yield Xe(e, v, o("WAWebSyncdConst").SyncDataType.Snapshot, l, i, E);
                const { pendingSetMutationsToDrop, setMutationsToPersist } = k;
                o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: processed ",
                    " mutations in snapshot of collection ",
                    " v",
                    ""
                ])), l, v.length, e, E);
                o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: collection ",
                    "'s snapshot v",
                    " applied"
                ])), l, e, E);
                let D = null;
                i?.mark("update_DB_start", {
                    source: o("WAWebSyncdConst").SyncDataType.Snapshot,
                    setMutationsToPersistCount: setMutationsToPersist.length,
                    pendingMutationsToDropCount: pendingSetMutationsToDrop.length
                });
                yield o("WAWebRunInTransaction").runInTransaction({
                    SyncActionStore: true,
                    PendingMutationStore: true,
                    CollectionVersionStore: true
                }, (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ CollectionVersionStore, PendingMutationStore, SyncActionStore }) {
                        D = yield ot(e, E, "snapshot", CollectionVersionStore, l);
                        if (D == null) {
                            yield SyncActionStore.bulkSet(setMutationsToPersist);
                            yield PendingMutationStore.bulkRemove(pendingSetMutationsToDrop);
                            yield CollectionVersionStore.update(e, {
                                version: E,
                                ltHash: h
                            });
                        } else {
                            o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: [",
                                "] skip applying syncd old version ",
                                ""
                            ])), l, E);
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
                i?.mark("update_DB_end", {
                    source: o("WAWebSyncdConst").SyncDataType.Snapshot
                });
                if (D != null) {
                    const x = D;
                    yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, x);
                    yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
                    o("WALogger").ERROR(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ""
                    ])), x).sendLogs(`syncd: processing old version for ${e}`);
                }
                o("WALogger").LOG(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: completed applying snapshot for ",
                    ""
                ])), l, e);
                i?.mark("apply_end", {
                    source: o("WAWebSyncdConst").SyncDataType.Snapshot,
                    decryptedMutationsCount: v.length
                });
            } catch (error) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `exception ${r("getErrorSafe")(error).message}`);
                o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(babelHelpers.extends({}, p, {
                    errorMessage: r("getErrorSafe")(error).message
                }));
                if (error instanceof o("WAWebSyncdError").SyncdMissingKeyError) {
                    yield o("WAWebSyncdHandleMissingKeys").handleMissingKeysInSnapshot(e, t);
                }
                throw error;
            }
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${l}] done applying snapshot`);
            if (a && !d) {
                if (i != null) {
                    i.mark("apply_start", {
                        source: o("WAWebSyncdConst").SyncDataType.Patch,
                        patchCount: a.length
                    });
                }
                yield He(e, a, i, l, bootstrapState);
                if (i != null) {
                    i.mark("apply_end", {
                        source: o("WAWebSyncdConst").SyncDataType.Patch,
                        patchCount: a.length
                    });
                }
            }
        });
        return qe.apply(this, arguments);
    }
    function Ue(e) {
        return Ve.apply(this, arguments);
    }
    function Ve() {
        Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebABProps").getABPropConfigValue("web_syncd_max_mutations_to_process_during_resume");
            if (e > t) {
                const n = Date.now();
                o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: patches have ",
                    " mutations, wait for UI unblock"
                ])), e);
                yield o("WAWebSyncdDbCallbacksApi").handleSyncDelayApplyingPatchUntilUIUnblocks();
                o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: UI is unblocked, waited for ",
                    "ms"
                ])), Date.now() - n);
            }
        });
        return Ve.apply(this, arguments);
    }
    function He(e, t, n, r, o) {
        return Ge.apply(this, arguments);
    }
    function Ge() {
        Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i, l) {
            const s = t.length === 0 ? "n/a" : t[t.length - 1].version.version;
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${i}] start apply patches. count: ${t.length}, last patch version: ${s}`);
            if (t.length === 0) {
                o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: no patches for collection ",
                    ""
                ])), i, e);
                return (Se || (Se = n("Promise"))).resolve();
            }
            o("WAWebSyncdValidateMutations").validateNoDuplicatePatchVersionInCollection(e, t);
            t.sort((e, t)=>{
                if (e.version.version > t.version.version) {
                    return 1;
                }
                return -1;
            });
            try {
                const u = r("sumBy")(t, function(e) {
                    return e.mutations.length;
                });
                yield Ue(u);
                for(let c = 0; c < t.length; c++){
                    if (c <= 4 || c % 10 === 0) {
                        yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${i}] start applying ${e} patch ${t[c].version.version} with ${t[c].mutations.length} mutations from device ${t[c].deviceIndex ?? "n/a"}`);
                    }
                    yield Ke(e, t[c], a, c <= 1, l, i);
                    if (c <= 4 || c % 10 === 0) {
                        yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${i}] finished applying patch ${t[c].version.version} with ${t[c].mutations.length} mutations`);
                    }
                }
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${i}] after apply patches for ${e} (last patch: v${s} total mutations: ${u})`);
            } catch (error) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `exception${r("getErrorSafe")(error).message}`);
                if (error instanceof o("WAWebSyncdError").SyncdMissingKeyError) {
                    yield o("WAWebSyncdHandleMissingKeys").handleMissingKeysInPatches(e, t);
                }
                throw error;
            }
        });
        return Ge.apply(this, arguments);
    }
    function ze(e, t, n, r) {
        return je.apply(this, arguments);
    }
    function je() {
        je = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            if (e === o("WAWebSyncdConst").CollectionName.CriticalBlock || e === o("WAWebSyncdConst").CollectionName.RegularLow) {
                const a = n.map((e)=>{
                    const t = e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET ? "SET" : "REMOVE";
                    const n = o("WAWebSyncdActionUtils").getMutationNameFromIndex(e.collection, e.index);
                    return `${t} ${n ?? "no-mutation-name"} index mac: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(e.indexMac).slice(-16)}, key id: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(o("WAWebSyncdKeyTypes").fromSyncKeyId(e.keyId))}`;
                }).join("  || ");
                const i = `mutations in patch for collection ${e} version ${t}: ${a}`;
                o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: ",
                    ""
                ])), r, i);
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, i);
            }
        });
        return je.apply(this, arguments);
    }
    function Ke(e, t, n, r, o, a) {
        return Qe.apply(this, arguments);
    }
    function Qe() {
        Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i = false, bootstrapState, s) {
            const d = o("WAWebABProps").getABPropConfigValue("enable_syncd_debug_data_in_patch") || e === o("WAWebSyncdConst").CollectionName.CriticalBlock || e === o("WAWebSyncdConst").CollectionName.RegularLow || o("WAWebCurrentUser").isEmployee();
            if (d) {
                yield o("WAWebSyncdAntiTampering").logMacsInSnapshot(e, s, `pre-processing incoming patch ${t.version.version}.`);
                yield o("WAWebSyncdAntiTampering").reportCollectionInconsistency(e, `[${s}] pre-processing incoming patch ${t.version.version}.
      incoming current lthash: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(t?.clientDebugData?.currentLthash ?? new ArrayBuffer(0)).slice(-16)},
      incoming new lthash: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(t?.clientDebugData?.newLthash ?? new ArrayBuffer(0)).slice(-16)}`, s, 250);
            }
            if (t.exitCode) {
                const h = t.exitCode.code;
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `patch exit code ${h ?? ""}`);
                e: {
                    if (h === 100) {
                        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_MISSING_DATA, {
                            collection: e
                        });
                        break e;
                    }
                    if (h === 101) {
                        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_DESERIALIZATION_ERROR, {
                            collection: e
                        });
                        break e;
                    }
                    {
                        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_UNKNOWN, {
                            collection: e
                        });
                        break e;
                    }
                }
                throw new (o("WAWebSyncdError")).SyncdFatalError(`received terminal patch with exit code:  ${String(h)} text: ${String(t.exitCode?.text)}  `);
            }
            yield o("WAWebSyncdDbCallbacksApi").handleSyncBeforeApplyPatch(t);
            const y = r("countWhere")(t.mutations, function(e) {
                return e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET;
            });
            const C = t.mutations.length - y;
            o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: applying patch ",
                " v",
                " from device ",
                "\n    SET count: ",
                "\n    REMOVE count: ",
                ""
            ])), s, e, t.version.version, t.deviceIndex, y, C);
            if (y === 0 && C === 0) {
                o("WALogger").WARN(oe || (oe = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    ": empty patch found"
                ])), e).sendLogs(`syncd: ${e}: empty patch found`);
            }
            const b = Be(a);
            const { measuredComputeLtHashAndValidatePatch, measuredTryDecryptPatch } = b;
            const R = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
            const L = o("WAWebSyncdWamReportingUtils").createSyncdWamAccumulator({
                bootstrapState,
                bundleType: "patch",
                collection: e,
                direction: "incoming",
                mdSessionId: R
            });
            L.version = t.version.version;
            L.bundleSize = t.mutations.length;
            L.keyId = t.keyId?.id ?? null;
            L.wireSnapshotMac = t.snapshotMac;
            L.wirePatchMac = t.patchMac;
            const E = yield measuredTryDecryptPatch(e, t);
            o("WAWebSyncdMetricCriticalBootstrapStage").reportSyncdDecryptedMutations(E);
            L.mutations = E;
            E.forEach((n)=>{
                const r = o("WAWebSyncdActionUtils").getMutationNameFromIndex(n.collection, n.index);
                o("WAWebSyncdWamReportingUtils").syncReportMutationToWam({
                    action: r,
                    collection: e,
                    indexMac: o("WABase64").encodeB64UrlSafe(n.indexMac),
                    isIncoming: true,
                    isPatch: true,
                    isRemove: n.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
                    mdSessionId: R,
                    patchMac: t.patchMac ? o("WABase64").encodeB64UrlSafe(t.patchMac) : undefined,
                    version: t.version.version
                });
            });
            yield ze(e, t.version.version, E, s);
            if (i) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${s}] after decrypt patch ${t.version.version}`);
            }
            let k;
            try {
                const I = yield measuredComputeLtHashAndValidatePatch(e, t, s, W, E);
                k = I.ltHash;
                L.computedLtHash = k;
                L.computedPatchMac = I.computedPatchMac;
                L.computedSnapshotMac = I.computedSnapshotMacAfterPatch;
            } catch (error) {
                o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(babelHelpers.extends({}, L, {
                    errorMessage: r("getErrorSafe")(error).message
                }));
                throw error;
            }
            o("WALogger").LOG(ae || (ae = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: completed computeLtHashAndValidatePatch for ",
                " v",
                ""
            ])), s, e, t.version.version);
            o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(babelHelpers.extends({}, L));
            o("WAWebSyncdWamAppState").addMutationCount(E.length);
            o("WAWebSyncdValidateMutations").validateNoSameIndexForMultipleMutations(e, E, o("WAWebSyncdConst").SyncDataType.Patch);
            const T = tt(E);
            const D = T.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE);
            const x = yield Je(e, D, s);
            const x_pendingMutationsToDrop = x.pendingMutationsToDrop;
            o("WALogger").LOG(ie || (ie = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: completed applyRemoveMutations for ",
                " v",
                ""
            ])), s, e, t.version.version);
            const P = T.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET);
            const N = yield Xe(e, P, o("WAWebSyncdConst").SyncDataType.Patch, s, a, t.version.version, i);
            const { pendingSetMutationsToDrop, setMutationsToPersist } = N;
            o("WALogger").LOG(le || (le = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: processed ",
                " mutations in patch version ",
                " of collection ",
                ""
            ])), s, E.length, t.version.version, e);
            const A = x_pendingMutationsToDrop.concat(pendingSetMutationsToDrop);
            a?.mark("update_DB_start", {
                source: o("WAWebSyncdConst").SyncDataType.Patch,
                setMutationsToPersistCount: setMutationsToPersist.length,
                pendingMutationsToDropCount: A.length
            });
            const version = t.version.version;
            let O = null;
            yield o("WAWebRunInTransaction").runInTransaction({
                SyncActionStore: true,
                PendingMutationStore: true,
                CollectionVersionStore: true
            }, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ CollectionVersionStore, PendingMutationStore, SyncActionStore }) {
                    O = yield ot(e, version, "incoming patch", CollectionVersionStore, s);
                    if (O == null) {
                        yield SyncActionStore.bulkRemove(D.map((e)=>e.index));
                        yield SyncActionStore.bulkSet(setMutationsToPersist);
                        yield PendingMutationStore.bulkRemove(A);
                        yield CollectionVersionStore.update(e, {
                            version,
                            ltHash: k
                        });
                    } else {
                        o("WALogger").LOG(se || (se = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: [",
                            "] skip applying syncd old version ",
                            ""
                        ])), s, version);
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
            if (O != null) {
                const B = O;
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, B);
                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
                o("WALogger").ERROR(ue || (ue = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), B).sendLogs(`syncd: processing old version for ${e}`);
            }
            if (d || e === o("WAWebSyncdConst").CollectionName.RegularLow || o("WAWebCurrentUser").isEmployee()) {
                yield o("WAWebSyncdAntiTampering").logMacsInSnapshot(e, s, `post-processing incoming patch ${t.version.version}.`);
            }
            a?.mark("update_DB_end", {
                source: o("WAWebSyncdConst").SyncDataType.Patch
            });
            o("WALogger").LOG(ce || (ce = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: completed final transaction in applyPatch for ",
                " v",
                ""
            ])), s, e, t.version.version);
            if (i) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${s}] after final transaction for patch ${t.version.version}. new lthash: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(k).slice(-16)}`);
            }
            function W(e) {
                return q.apply(this, arguments);
            }
            function q() {
                q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    return (yield o("WAWebGetSyncAction").getSyncActionsByCollectionsInTransaction([
                        e
                    ])).filter((e)=>o("WACryptoUtils").arrayBuffersEqual(t, e.indexMac)).pop()?.valueMac;
                });
                return q.apply(this, arguments);
            }
        });
        return Qe.apply(this, arguments);
    }
    function Xe(e, t, n, r, o, a, i) {
        return Ye.apply(this, arguments);
    }
    function Ye() {
        Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, source, a, i, l, s = false) {
            o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ABOUT_TO_APPLY_MUTATIONS);
            const u = source === o("WAWebSyncdConst").SyncDataType.Local ? " (individual mutations)" : "";
            const c = [];
            const d = o("WAWebSyncdValidateMutations").validateAndTypeSetMutations(e, t);
            const m = nt(e, d);
            const { supportedMutations, unsupportedMutations } = m;
            unsupportedMutations.forEach((e)=>c.push(o("WAWebSyncdCollectionHandlerTypesConverter").setMutationToSyncAction(e, o("WAWebSyncdConst").SyncActionState.Unsupported)));
            i?.mark("conflict_resolution_start", {
                source,
                collectionName: e,
                count: supportedMutations.length
            });
            o("WALogger").LOG(de || (de = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: before resolveConflict for ",
                " v",
                ""
            ])), a, e, l);
            const f = yield o("WAWebSyncdResolveConflict").resolveConflict(e, supportedMutations);
            const { pendingSetMutationsToDrop, remoteMutationsToApply } = f;
            o("WALogger").LOG(me || (me = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: after resolveConflict for ",
                " v",
                ""
            ])), a, e, l);
            const y = supportedMutations.filter((e)=>!remoteMutationsToApply.includes(e));
            i?.mark("conflict_resolution_end", {
                source,
                collectionName: e,
                apply: remoteMutationsToApply.length,
                drop: y.length
            });
            y.forEach((e)=>c.push(o("WAWebSyncdCollectionHandlerTypesConverter").setMutationToSyncAction(e, o("WAWebSyncdConst").SyncActionState.Skipped, e.actionName)));
            i?.mark("apply_set_mutations_start", {
                source,
                collectionName: e,
                count: remoteMutationsToApply.length
            });
            for(var C = rt(remoteMutationsToApply), b = null, v = 0; v < C.length; v++){
                const S = s && v <= 1;
                const R = C[v][0].actionHandler;
                const L = C[v].map((e)=>{
                    let t;
                    if (e.binarySyncData) {
                        t = r("nullthrows")(o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, e.binarySyncData).value);
                    } else {
                        t = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, e.binarySyncAction);
                    }
                    if (b == null || b < e.timestamp) {
                        b = e.timestamp;
                    }
                    return {
                        operation: "set",
                        indexParts: e.indexArr,
                        value: t,
                        timestamp: e.timestamp
                    };
                });
                if (S) {
                    yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `${a} after deserialize. mutationsToApply length: ${L.length}`);
                }
                let E = [];
                let k = false;
                try {
                    if (o("WAWebCurrentUser").isEmployee()) {
                        o("WALogger").LOG(pe || (pe = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: applying mutations ",
                            " for handler ",
                            " ",
                            ""
                        ])), JSON.stringify(L.slice(0, 3), null, 2), R.getAction(), u);
                    }
                    o("WALogger").LOG(_e || (_e = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: before apply mutation batch for ",
                        " v",
                        ", mutations count: ",
                        " ",
                        ""
                    ])), a, e, l, L.length, u);
                    E = yield R.applyMutations(L, {
                        setMutationsPendingToPersist: c,
                        allSupportedSetMutations: remoteMutationsToApply
                    }, S);
                    const I = o("WAWebCurrentUser").isEmployee() ? R.getAction() : "-";
                    o("WALogger").LOG(fe || (fe = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: after apply mutation batch for ",
                        " v",
                        ", mutations count: ",
                        ", handler: ",
                        " ",
                        ""
                    ])), a, e, l, L.length, I, u);
                    if (S) {
                        yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${a}] after apply group ${v}/${C.length} for ${e} ${l ?? ""}. result length: ${E.length}`);
                    }
                } catch (error) {
                    if (error instanceof o("WAWebSyncdError").SyncdFatalError || e === o("WAWebSyncdConst").CollectionName.CriticalBlock) {
                        throw error;
                    }
                    k = true;
                    o("WALogger").WARN(ge || (ge = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: catching error during applySetMutations: ",
                        ""
                    ])), error);
                }
                o("WALogger").LOG(he || (he = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: after apply mutation batch for ",
                    " ",
                    ""
                ])), a, e, u);
                for(let T = 0; T < C[v].length; T++){
                    let D;
                    let x;
                    const $ = k ? o("WAWebSyncdConst").SyncActionState.Failed : E[T].actionState;
                    c.push(o("WAWebSyncdCollectionHandlerTypesConverter").setMutationToSyncAction(C[v][T], $, C[v][T].actionName, k || (D = E[T].orphanModel) == null ? undefined : D.modelId, k || (x = E[T].orphanModel) == null ? undefined : x.modelType));
                }
            }
            const P = b;
            const N = P == null ? null : o("WATimeUtils").daysDiff(o("WATimeUtils").unixTimeMs(), P);
            o("WALogger").LOG(ye || (ye = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: max timestamp from recent patch: ",
                " days agp"
            ])), N ?? "n/a");
            if (s) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `${a} max timestamp from recent patch: ${N ?? "n/a"} days ago`);
            }
            const M = c.reduce((acc, { actionState })=>{
                if (acc[actionState] == null) {
                    acc[actionState] = 0;
                }
                acc[actionState]++;
                return acc;
            }, {});
            i?.mark("apply_set_mutations_end", babelHelpers.extends({
                source,
                collectionName: e,
                count: remoteMutationsToApply.length
            }, M));
            o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.APPLIED_MUTATIONS);
            if (e === o("WAWebSyncdConst").CollectionName.CriticalBlock) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `${a} apply states for ${e} v${l ?? "n/a"}: ${c.map((e)=>e.actionState).join(", ")}`);
            }
            o("WALogger").LOG(Ce || (Ce = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " syncd: completed apply set mutations for ",
                " ",
                ""
            ])), a, e, u);
            return {
                setMutationsToPersist: c,
                pendingSetMutationsToDrop
            };
        });
        return Ye.apply(this, arguments);
    }
    function Je(e, t, n) {
        return Ze.apply(this, arguments);
    }
    function Ze() {
        Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = et(t);
            const r_supportedMutations = r.supportedMutations;
            const i = rt(r_supportedMutations);
            const pendingMutationsToDrop = yield o("WAWebSyncdResolveConflict").resolveRemoveConflicts(e, r_supportedMutations);
            o("WALogger").LOG(be || (be = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " syncd: before apply remove mutations for ",
                ""
            ])), n, e);
            for(let s = 0; s < i.length; s++){
                const u = i[s][0].actionHandler;
                yield u.applyMutations(i[s].map((t)=>({
                        operation: "remove",
                        indexParts: it(e, t.index)
                    })), {
                    setMutationsPendingToPersist: [],
                    allSupportedSetMutations: []
                });
            }
            o("WALogger").LOG(ve || (ve = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " syncd: after apply remove mutations for ",
                ""
            ])), n, e);
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `${n} after apply remove mutations for ${e}. mutation count: ${t.length}`);
            return {
                pendingMutationsToDrop
            };
        });
        return Ze.apply(this, arguments);
    }
    function et(t) {
        const n = [];
        let r = 0;
        const a = [];
        let i = 0;
        const l = t.map((e)=>{
            if (e.version > o("WAWebSyncdGetActionHandler").maxSupportedVersion()) {
                return {
                    unsupported: e
                };
            }
            const t = it(e.collection, e.index);
            const l = o("WAWebSyncdConst").Actions.cast(t[0]);
            if (!l) {
                r++;
                if (n.length < 3) {
                    n.push(t[0]);
                }
                return {
                    unsupported: e
                };
            }
            const s = o("WAWebSyncdGetActionHandler").getActionHandler(l);
            if (!s) {
                i++;
                if (a.length < 3) {
                    a.push(l);
                }
                return {
                    unsupported: e
                };
            }
            const supported = {
                collection: e.collection,
                index: e.index,
                indexMac: e.indexMac,
                keyId: e.keyId,
                binarySyncData: e.binarySyncData,
                valueMac: e.valueMac,
                version: e.version,
                indexArr: t,
                actionName: l,
                actionHandler: s
            };
            return {
                supported
            };
        });
        if (r > 0) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: ",
                " invalid actions => ",
                ""
            ])), r, n);
        }
        if (i > 0) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: no handler for ",
                " actions => ",
                ""
            ])), i, a);
        }
        const u = [];
        const c = [];
        l.map(({ supported, unsupported })=>{
            if (supported != null) {
                u.push(supported);
            } else if (unsupported != null) {
                c.push(unsupported);
            }
        });
        return {
            supportedMutations: u,
            unsupportedMutations: c
        };
    }
    function tt(e) {
        const t = e.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET);
        const n = new Set(t.map((e)=>e.index));
        const r = e.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE);
        r.forEach((e)=>{
            if (!n.has(e.index)) {
                t.push(e);
            }
        });
        return t;
    }
    function nt(e, t) {
        const n = [];
        let r = 0;
        const a = [];
        let i = 0;
        const l = t.map((t)=>{
            if (t.version > o("WAWebSyncdGetActionHandler").maxSupportedVersion()) {
                return {
                    unsupported: t
                };
            }
            const l = it(e, t.index);
            const s = o("WAWebSyncdConst").Actions.cast(l[0]);
            if (!s) {
                r++;
                if (n.length < 3) {
                    n.push(l[0]);
                }
                return {
                    unsupported: t
                };
            }
            const u = o("WAWebSyncdGetActionHandler").getActionHandler(s);
            if (u) {
                return {
                    supported: {
                        collection: t.collection,
                        index: t.index,
                        indexMac: t.indexMac,
                        keyId: t.keyId,
                        timestamp: t.timestamp,
                        binarySyncData: t.binarySyncData,
                        valueMac: t.valueMac,
                        version: t.version,
                        indexArr: l,
                        actionName: s,
                        actionHandler: u
                    }
                };
            }
            i++;
            if (a.length < 3) {
                a.push(s);
            }
            return {
                unsupported: t
            };
        });
        if (r > 0) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: ",
                " invalid actions => ",
                ""
            ])), r, n);
        }
        if (i > 0) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: no handler for ",
                " actions => ",
                ""
            ])), i, a);
        }
        const s = [];
        const d = [];
        l.map(({ supported, unsupported })=>{
            if (supported != null) {
                s.push(supported);
            } else if (unsupported != null) {
                d.push(unsupported);
            }
        });
        return {
            supportedMutations: s,
            unsupportedMutations: d
        };
    }
    function rt(e) {
        return e.reduce((acc, item)=>{
            if (acc.length !== 0 && item.actionName === acc[acc.length - 1][0].actionName) {
                acc[acc.length - 1].push(item);
            } else {
                acc.push([
                    item
                ]);
            }
            return acc;
        }, []);
    }
    function ot(e, t, n, r, o) {
        return at.apply(this, arguments);
    }
    function at() {
        at = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, o) {
            const a = yield r.get(e);
            if (a?.version != null && a.version >= t) {
                return `[${o}] syncd: processing old version for ${e}. processing: ${t} already persisted: ${a.version}. context: ${n}`;
            }
        });
        return at.apply(this, arguments);
    }
    function it(e, index) {
        const n = o("WAWebSyncdActionUtils").parseIndex(e, index);
        if (n == null) {
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.INVALID_ACTION_INDEX, {
                collection: e
            });
            throw new (o("WAWebSyncdError")).SyncdFatalError("invalid action index");
        }
        return n;
    }
    l.applyIndividualMutations = Ee;
    l.applyAppStateSyncResponse = Ie;
}, 98);