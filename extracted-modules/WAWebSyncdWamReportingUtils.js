__d("WAWebSyncdWamReportingUtils", [
    "Promise",
    "WABase64",
    "WACryptoDependencies",
    "WACryptoSha256",
    "WALogger",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebMdSyncdBundleWamEvent",
    "WAWebMdSyncdMutationWamEvent",
    "WAWebMdSyncdMutationsSummaryWamEvent",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumKmpSyncdFlowEnum",
    "WAWebWamEnumMutationBundleType",
    "WAWebWamEnumMutationDirectionType",
    "WAWebWamEnumMutationOperationType",
    "WAWebWamEnumSyncdCollectionType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    function g(e) {
        if (e) {
            return o("WABase64").encodeB64UrlSafe(e);
        }
        return "";
    }
    function h(collection) {
        if (collection === o("WAWebSyncdConst").CollectionName.RegularHigh) {
            return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.REGULAR_HIGH;
        }
        if (collection === o("WAWebSyncdConst").CollectionName.RegularLow) {
            return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.REGULAR_LOW;
        }
        if (collection === o("WAWebSyncdConst").CollectionName.Regular) {
            return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.REGULAR;
        }
        if (collection === o("WAWebSyncdConst").CollectionName.CriticalBlock) {
            return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.CRITICAL_BLOCK;
        }
        if (collection === o("WAWebSyncdConst").CollectionName.CriticalUnblockLow) {
            return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.CRITICAL_UNBLOCK_LOW;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${collection}`);
        })();
    }
    let y = null;
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                if (y != null) {
                    return y;
                }
                const e = yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId();
                const t = o("WABase64").decodeB64(e);
                const n = yield o("WACryptoDependencies").getCrypto().subtle.digest({
                    name: "SHA-1"
                }, t);
                const r = o("WABase64").encodeB64UrlSafe(n);
                y = r.slice(-6);
                return y;
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getShortMdSessionId: ",
                    ""
                ])), error).sendLogs("getShortMdSessionId failed");
                return "";
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action, collection, indexMac, isIncoming, isPatch, isRemove, mdSessionId, patchMac, version }) {
            try {
                if (!I("syncd_mutation_and_bundle_logging").includes(collection)) {
                    return;
                }
                new (o("WAWebMdSyncdMutationWamEvent")).MdSyncdMutationWamEvent({
                    appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                    companionSessionIds: mdSessionId,
                    contentLength: 0,
                    isInBootstrap: false,
                    isUsingLid: false,
                    mutationBundle: isPatch ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.SNAPSHOT,
                    mutationDirection: isIncoming ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE.INCOMING : o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE.OUTGOING,
                    mutationMac: indexMac,
                    mutationName: action ?? "no-mutation-name",
                    mutationOperation: isRemove ? o("WAWebWamEnumMutationOperationType").MUTATION_OPERATION_TYPE.REMOVE : o("WAWebWamEnumMutationOperationType").MUTATION_OPERATION_TYPE.SET,
                    seqNumber: version,
                    syncdCollection: h(collection),
                    syncdKeyhash: "",
                    syncdKeyid: "",
                    patchMac: patchMac ?? ""
                }).commit();
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "syncReportMutationToWam: ",
                    ""
                ])), error).sendLogs("syncReportMutationToWam failed");
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WACryptoSha256").sha256(e);
            return o("WABase64").encodeB64UrlSafe(t.slice(0, 6));
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = o("WAWebSyncdKeyTypes").fromSyncKeyId(e);
                const syncdKeyId = o("WABase64").encodeB64UrlSafe(t);
                const r = yield o("WAWebSyncdKeyCache").getKeyData(e);
                if (r == null) {
                    return {
                        syncdKeyId,
                        syncdKeyHash: ""
                    };
                }
                const syncdKeyHash = yield R(o("WAWebSyncdKeyTypes").fromSyncKeyData(r));
                return {
                    syncdKeyId,
                    syncdKeyHash
                };
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getKeyIdAndHash: ",
                    ""
                ])), error).sendLogs("getKeyIdAndHash failed");
                return {
                    syncdKeyId: "",
                    syncdKeyHash: ""
                };
            }
        });
        return k.apply(this, arguments);
    }
    function I(t) {
        try {
            const a = o("WAWebABProps").getABPropConfigValue(t);
            if (a) {
                return JSON.parse(a)?.allowlist ?? [];
            }
            return [];
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getSyncdWamAllowlist: failed to parse ",
                ": ",
                ""
            ])), t, error).sendLogs("getSyncdWamAllowlist failed");
            return [];
        }
    }
    function T(e) {
        const t = {};
        const n = {};
        const r = {};
        for (const a of e){
            const l = o("WAWebSyncdActionUtils").getMutationNameFromIndex(a.collection, a.index) ?? "unknown";
            if (a.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET) {
                t[l] = (t[l] ?? 0) + 1;
            } else {
                n[l] = (n[l] ?? 0) + 1;
            }
            if (a.index.includes("@lid")) {
                r[l] = (r[l] ?? 0) + 1;
            }
        }
        return {
            setMutations: JSON.stringify(t),
            removeMutations: JSON.stringify(n),
            lidMutations: JSON.stringify(r)
        };
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            for (const r of e){
                const a = o("WABase64").encodeB64UrlSafe(o("WAWebSyncdKeyTypes").fromSyncKeyId(r.keyId));
                t.set(a, r.keyId);
            }
            const i = {};
            yield (f || (f = n("Promise"))).all(Array.from(t.entries()).map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                    const r = yield o("WAWebSyncdKeyCache").getKeyData(n);
                    if (r != null) {
                        i[t] = yield R(o("WAWebSyncdKeyTypes").fromSyncKeyData(r));
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return JSON.stringify(i);
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        if (e.direction === "outgoing") {
            return {
                direction: "outgoing",
                bundleType: "patch",
                bootstrapState: "non_bootstrap",
                snapshotMac: null,
                patchMac: e.patchMac,
                errorMessage: e.errorMessage ?? null
            };
        }
        return {
            direction: "incoming",
            bundleType: e.bundleType,
            bootstrapState: e.bootstrapState,
            snapshotMac: e.snapshotMac,
            patchMac: e.bundleType === "patch" ? e.patchMac : null,
            errorMessage: null
        };
    }
    function P({ bootstrapState, bundleType, collection, direction, mdSessionId }) {
        return {
            collection,
            direction,
            bundleType,
            bootstrapState,
            mdSessionId,
            version: null,
            bundleSize: null,
            keyId: null,
            wireSnapshotMac: null,
            wirePatchMac: null,
            computedLtHash: null,
            computedSnapshotMac: null,
            computedPatchMac: null,
            mutations: null,
            errorMessage: null
        };
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.bundleType === "patch" ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.SNAPSHOT;
            const n = e.direction === "incoming" ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE.INCOMING : o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE.OUTGOING;
            if (e.keyId != null && e.version != null) {
                const { keyId, version, bundleSize } = e;
                try {
                    if (I("md_syncd_bundle_logging").includes(e.collection)) {
                        const s = yield E(keyId);
                        const { syncdKeyHash, syncdKeyId } = s;
                        new (o("WAWebMdSyncdBundleWamEvent")).MdSyncdBundleWamEvent({
                            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                            bundleVersion: version,
                            companionSessionIds: e.mdSessionId,
                            computedLthash: e.computedLtHash ? o("WABase64").encodeB64UrlSafe(e.computedLtHash) : "",
                            expectedMac: g(e.bundleType === "patch" ? e.wirePatchMac : e.wireSnapshotMac),
                            kmpSyncdFlow: o("WAWebWamEnumKmpSyncdFlowEnum").KMP_SYNCD_FLOW_ENUM.NONE,
                            mutationBundle: t,
                            mutationDirection: n,
                            patchMac: e.computedPatchMac ? o("WABase64").encodeB64UrlSafe(e.computedPatchMac) : undefined,
                            patchSize: e.bundleType === "patch" && bundleSize != null ? bundleSize : undefined,
                            processingErrorMessage: e.errorMessage ?? undefined,
                            seqNumber: version,
                            snapshotMac: e.computedSnapshotMac ? o("WABase64").encodeB64UrlSafe(e.computedSnapshotMac) : "",
                            snapshotSize: e.bundleType === "snapshot" && bundleSize != null ? bundleSize : undefined,
                            syncdCollection: h(e.collection),
                            syncdKeyhash: syncdKeyHash,
                            syncdKeyid: syncdKeyId
                        }).commit();
                    }
                } catch (error) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "reportSyncdWamAccumulator bundle: ",
                        ""
                    ])), error).sendLogs("reportSyncdWamAccumulator bundle failed");
                }
            }
            if (e.mutations != null) {
                const p = e.mutations;
                try {
                    if (I("md_syncd_mutation_summary_logging").includes(e.collection)) {
                        const f = T(p);
                        const { lidMutations, removeMutations, setMutations } = f;
                        const v = yield D(p);
                        new (o("WAWebMdSyncdMutationsSummaryWamEvent")).MdSyncdMutationsSummaryWamEvent({
                            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                            companionSessionIds: e.mdSessionId,
                            isInBootstrap: e.bootstrapState === "bootstrap",
                            lidMutations,
                            mutationBundle: t,
                            mutationDirection: n,
                            patchMac: e.computedPatchMac ? o("WABase64").encodeB64UrlSafe(e.computedPatchMac) : undefined,
                            removeMutations,
                            seqNumber: e.version ?? 0,
                            setMutations,
                            snapshotMac: e.computedSnapshotMac ? o("WABase64").encodeB64UrlSafe(e.computedSnapshotMac) : undefined,
                            syncdCollection: h(e.collection),
                            syncdKeyidKeyhash: v
                        }).commit();
                    }
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "reportSyncdWamAccumulator summary: ",
                        ""
                    ])), error).sendLogs("reportSyncdWamAccumulator summary failed");
                }
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { bundleSize, collection, computedLtHash, keyId, mdSessionId, mutations, version } = e;
            const u = $(e);
            const { bootstrapState, bundleType, direction, errorMessage, patchMac, snapshotMac } = u;
            const b = bundleType === "patch" ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH : o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.SNAPSHOT;
            const v = direction === "incoming" ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE.INCOMING : o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE.OUTGOING;
            if (keyId != null) {
                try {
                    if (I("md_syncd_bundle_logging").includes(collection)) {
                        const S = yield E(keyId);
                        const { syncdKeyHash, syncdKeyId } = S;
                        new (o("WAWebMdSyncdBundleWamEvent")).MdSyncdBundleWamEvent({
                            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                            bundleVersion: version,
                            companionSessionIds: mdSessionId,
                            computedLthash: o("WABase64").encodeB64UrlSafe(computedLtHash),
                            expectedMac: g(bundleType === "patch" ? patchMac : snapshotMac),
                            kmpSyncdFlow: o("WAWebWamEnumKmpSyncdFlowEnum").KMP_SYNCD_FLOW_ENUM.NONE,
                            mutationBundle: b,
                            mutationDirection: v,
                            patchMac: patchMac ? o("WABase64").encodeB64UrlSafe(patchMac) : undefined,
                            patchSize: bundleType === "patch" ? bundleSize : undefined,
                            processingErrorMessage: errorMessage ?? undefined,
                            seqNumber: version,
                            snapshotMac: snapshotMac ? o("WABase64").encodeB64UrlSafe(snapshotMac) : "",
                            snapshotSize: bundleType === "snapshot" ? bundleSize : undefined,
                            syncdCollection: h(collection),
                            syncdKeyhash: syncdKeyHash,
                            syncdKeyid: syncdKeyId
                        }).commit();
                    }
                } catch (error) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "syncReportBundleToWam: ",
                        ""
                    ])), error).sendLogs("syncReportBundleToWam failed");
                }
            }
            try {
                if (I("md_syncd_mutation_summary_logging").includes(collection)) {
                    const k = T(mutations);
                    const { lidMutations, removeMutations, setMutations } = k;
                    const M = yield D(mutations);
                    new (o("WAWebMdSyncdMutationsSummaryWamEvent")).MdSyncdMutationsSummaryWamEvent({
                        appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
                        companionSessionIds: mdSessionId,
                        isInBootstrap: bootstrapState === "bootstrap",
                        lidMutations,
                        mutationBundle: b,
                        mutationDirection: v,
                        patchMac: patchMac ? o("WABase64").encodeB64UrlSafe(patchMac) : undefined,
                        removeMutations,
                        seqNumber: version,
                        setMutations,
                        snapshotMac: snapshotMac ? o("WABase64").encodeB64UrlSafe(snapshotMac) : undefined,
                        syncdCollection: h(collection),
                        syncdKeyidKeyhash: M
                    }).commit();
                }
            } catch (error) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "syncReportMutationsSummaryToWam: ",
                    ""
                ])), error).sendLogs("syncReportMutationsSummaryToWam failed");
            }
        });
        return A.apply(this, arguments);
    }
    function F(e, t, computedLtHash, r, o, errorMessage) {
        w({
            collection: e,
            version: t,
            computedLtHash,
            bundleSize: r.length,
            keyId: r[0]?.keyId ?? null,
            mutations: r,
            mdSessionId: o,
            direction: "outgoing",
            patchMac: r[0]?.patchMac ?? null,
            errorMessage
        });
    }
    l.getShortMdSessionId = C;
    l.syncReportMutationToWam = v;
    l.encodeKeyDataForWam = R;
    l.getSyncdWamAllowlist = I;
    l.createSyncdWamAccumulator = P;
    l.reportSyncdWamAccumulator = N;
    l.syncReportOutgoingToWam = F;
}, 98);