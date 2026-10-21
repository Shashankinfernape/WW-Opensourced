__d("WAWebSyncdRequestBuilderBuild", [
    "Promise",
    "WABaseGlobals",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebBrokerGlobalAppState",
    "WAWebGetCollectionVersion",
    "WAWebGetSyncAction",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdEncryptMutationsWrapper",
    "WAWebSyncdError",
    "WAWebSyncdKeyManagement",
    "WAWebSyncdKeyManagementUtils",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdMMSUpload",
    "WAWebSyncdRequestBuilderTypesConverter",
    "WAWebSyncdRequestEncode",
    "WAWebSyncdWamAppState",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "sortBy"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 5;
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield y(e, t);
            const { collectionLtHashes, collectionNodes, collectionWithEncryptedMutations, localCollectionVersions, pendingCollectionsInBootstrap } = n;
            const u = h(o("WAWap").wap("sync", null, collectionNodes));
            const { iqId, iqNode } = u;
            return {
                syncIqNode: iqNode,
                collectionWithEncryptedMutations,
                localCollectionVersions,
                pendingCollectionsInBootstrap,
                iqId,
                collectionLtHashes
            };
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        const t = o("WAWap").generateId();
        const iqNode = o("WAWap").wap("iq", {
            id: t,
            to: o("WAWap").S_WHATSAPP_NET,
            type: "set",
            xmlns: "w:sync:app:state"
        }, e);
        return {
            iqNode,
            iqId: t
        };
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start _buildCollectionNodes"
            ])));
            const pendingCollectionsInBootstrap = [];
            const i = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, pendingMutations) {
                    const n = yield o("WAWebGetCollectionVersion").getCollectionVersionInTransaction(e).then((e)=>e?.version);
                    let patchNode_1;
                    let l;
                    let s;
                    if (pendingMutations != null && pendingMutations.length > 0) {
                        if (n == null) {
                            pendingCollectionsInBootstrap.push(e);
                        } else {
                            const u = yield b({
                                collection: e,
                                pendingMutations,
                                session: r
                            });
                            const { encryptedMutations, ltHash, patchNode } = u;
                            patchNode_1 = patchNode;
                            l = encryptedMutations;
                            s = ltHash;
                        }
                    }
                    return {
                        collection: e,
                        version: n,
                        patchNode: patchNode_1,
                        encryptedMutations: l,
                        ltHash: s
                    };
                });
                return function(n, r) {
                    return e.apply(this, arguments);
                };
            })();
            const localCollectionVersions = new Map;
            const collectionWithEncryptedMutations = new Map;
            const d = [];
            t.forEach((e, t)=>d.push(i(t, e)));
            const m = yield (p || (p = n("Promise"))).all(d);
            if (pendingCollectionsInBootstrap.length > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: skipping ",
                    " collections in sync iq patch because initial full sync is incomplete => ",
                    ""
                ])), pendingCollectionsInBootstrap.length, pendingCollectionsInBootstrap.slice(0, 3));
            }
            const collectionLtHashes = new Map;
            const collectionNodes = m.map(({ collection, encryptedMutations, ltHash, patchNode, version })=>{
                if (encryptedMutations) {
                    collectionWithEncryptedMutations.set(collection, encryptedMutations);
                }
                localCollectionVersions.set(collection, version);
                collectionLtHashes.set(collection, ltHash);
                return o("WAWap").wap("collection", {
                    name: o("WAWap").CUSTOM_STRING(collection),
                    return_snapshot: version == null || version === o("WAWebSyncdConst").DEFAULT_COLLECTION_VERSION ? "true" : "false",
                    version: o("WAWap").INT(version ?? o("WAWebSyncdConst").DEFAULT_COLLECTION_VERSION)
                }, patchNode);
            });
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: end _buildCollectionNodes"
            ])));
            return {
                collectionNodes,
                collectionWithEncryptedMutations,
                localCollectionVersions,
                pendingCollectionsInBootstrap,
                collectionLtHashes
            };
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ collection, pendingMutations, session }) {
            const activeKey = yield o("WAWebSyncdKeyManagement").getActiveKey(!L(pendingMutations));
            const l = yield T({
                activeKey,
                collection,
                pendingMutations
            });
            const s = l.map((e, t)=>o("WAWebSyncdEncryptMutationsWrapper").encryptMutation(e, activeKey).catch((e)=>{
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: encryption failed for idx ",
                        ""
                    ])), t);
                    throw e;
                }));
            const u = yield (p || (p = n("Promise"))).all(s).catch((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (e instanceof o("WAWebSyncdError").SyncdFatalError) {
                        yield S(l, collection);
                    }
                    throw e;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            const d = o("WAWebABProps").getABPropConfigValue("syncd_use_index_for_lthash_lookup") === true;
            const m = u.map((e)=>({
                    indexMac: e.indexMac,
                    valueMac: e.valueMac,
                    operation: e.operation,
                    action: e.action || undefined,
                    index: d ? e.index : undefined
                }));
            const _ = yield o("WAWebSyncdAntiTampering").computeLtHash(collection, m, session);
            const __ltHash = _.ltHash;
            const g = yield o("WAWebSyncdAntiTampering").computeOutgoingSnapshotAndPatchMacs(collection, __ltHash, u, activeKey.keyData);
            const { patchMac, snapshotMac } = g;
            u.map((e)=>{
                e.patchMac = patchMac;
            });
            const C = u.map((e)=>I(e.keyId, e.operation, e.indexMac, e.indexAndValueCipherText));
            const mutationsBlob = k(C);
            let v;
            if (o("WAWebSyncdMMSUpload").exceedInlineMutationCount(C)) {
                v = yield o("WAWebSyncdMMSUpload").uploadPatch({
                    activeSyncKeyId: activeKey.keyId,
                    mutationsBlob,
                    patchMac,
                    snapshotMac
                });
            } else {
                v = E(C, activeKey.keyId, snapshotMac, patchMac);
                if (o("WAWebSyncdMMSUpload").exceedPatchProtobufSize(v)) {
                    v = yield o("WAWebSyncdMMSUpload").uploadPatch({
                        activeSyncKeyId: activeKey.keyId,
                        mutationsBlob,
                        patchMac,
                        snapshotMac
                    });
                }
            }
            const patchNode = o("WAWap").wap("patch", null, v);
            return {
                patchNode,
                encryptedMutations: u,
                ltHash: __ltHash
            };
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.map((mutation, idx)=>({
                    mutation,
                    idx
                }));
            const r = n.filter((e)=>e.mutation.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET);
            const a = n.filter((e)=>e.mutation.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE);
            const i = r.map((e)=>{
                const t = a.map((t)=>{
                    if (t.mutation.index === e.mutation.index) {
                        return "same";
                    }
                    return "different";
                });
                return `[${t.join(",")}]`;
            });
            const l = r.map(({ idx, mutation })=>{
                const r = mutation.action ?? "";
                const o = mutation.id != null;
                return `${r}(${idx}) - ${o ? "stored" : "not stored"}`;
            });
            const s = a.map(({ idx, mutation })=>{
                const r = mutation.action ?? "";
                const o = mutation.id != null;
                return `${r}(${idx}) - ${o ? "stored" : "not stored"}`;
            });
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: fatal error encrypting patch for ",
                ":\n      SET: ",
                "\n      REMOVE: ",
                "\n      Is same index? ",
                ""
            ])), t, l, s, i.join(","));
        });
        return R.apply(this, arguments);
    }
    function L(pendingMutations) {
        return r("WAWebBrokerGlobalAppState").isLogoutInProgress && pendingMutations.some((e)=>o("WAWebSyncdActionUtils").getMutationNameFromIndex(e.collection, e.index) === o("WAWebSyncdConst").Actions.Sentinel);
    }
    function E(e, keyId, snapshotMac, patchMac) {
        const a = o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid());
        const clientDebugData = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").PatchDebugDataSpec, {
            isSenderPrimary: false,
            senderPlatform: o("WAWebProtobufSyncAction.pb").PatchDebugData$Platform.WEB
        }).readBuffer();
        return o("WAWebSyncdRequestEncode").encodeSyncdPatch({
            keyId: {
                id: o("WAWebSyncdKeyTypes").fromSyncKeyId(keyId)
            },
            mutations: e,
            snapshotMac,
            patchMac,
            deviceIndex: a,
            clientDebugData
        });
    }
    function k(e) {
        return o("WAWebSyncdRequestEncode").encodeSyncdMutations({
            mutations: e
        });
    }
    function I(keyId, operation, indexMac, indexAndValueCipherText) {
        return {
            operation,
            record: {
                keyId: {
                    id: o("WAWebSyncdKeyTypes").fromSyncKeyId(keyId)
                },
                index: {
                    blob: indexMac
                },
                value: {
                    blob: indexAndValueCipherText
                }
            }
        };
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ activeKey, collection, pendingMutations }) {
            const a = yield o("WAWebGetSyncAction").getSyncActionsByCollectionsInTransaction([
                collection
            ]);
            const i = new Set(a.map((e)=>e.index));
            let l = pendingMutations.filter((e)=>{
                if (e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE && !i.has(e.index)) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: dropping orphaned REMOVE mutation (no corresponding SET in SyncActionStore) for collection ",
                        ", action: ",
                        ""
                    ])), collection, e.action ?? "unknown");
                    return false;
                }
                return true;
            });
            const s = x(a, pendingMutations, activeKey.keyId);
            l = l.concat(s);
            const u = $(a, l, activeKey.keyId);
            o("WAWebSyncdWamAppState").addKeyRotationRemoveCount(u.length);
            l = l.concat(u);
            return l;
        });
        return D.apply(this, arguments);
    }
    function x(e, pendingMutations, keyId) {
        const a = new Set(pendingMutations.map((e)=>e.index));
        let i = e.filter((e)=>!a.has(e.index) && !o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(e.keyId, keyId));
        i = r("sortBy")(i, function(e) {
            return o("WAWebSyncdKeyManagementUtils").getKeyEpoch(e.keyId);
        });
        const l = Math.min(_, o("WAWebABProps").getABPropConfigValue("syncd_additional_mutations_count"));
        i = i.slice(0, l);
        return o("WAWebSyncdRequestBuilderTypesConverter").syncActionsToPendingMutations(i, o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET);
    }
    function $(e, t, keyId) {
        const r = new Set(t.filter((e)=>e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET).map((e)=>e.index));
        const a = e.filter((e)=>r.has(e.index));
        const i = a.filter((e)=>!o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(e.keyId, keyId));
        return o("WAWebSyncdRequestBuilderTypesConverter").syncActionsToPendingMutations(i, o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE);
    }
    l.buildSyncIqNode = f;
    l._generateMutationsToUpload = T;
}, 98);