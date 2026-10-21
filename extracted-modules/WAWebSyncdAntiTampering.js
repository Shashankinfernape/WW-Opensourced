__d("WAWebSyncdAntiTampering", [
    "Promise",
    "WAArrayBufferUtils",
    "WACryptoLtHash",
    "WACryptoUtils",
    "WAEncodeString",
    "WALogger",
    "WAPromiseEach",
    "WATextEncoding",
    "WAWebABProps",
    "WAWebConnModel",
    "WAWebCurrentUser",
    "WAWebGetCollectionVersion",
    "WAWebGetSyncAction",
    "WAWebKeyManagementUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebRunInTransaction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering.flow",
    "WAWebSyncdAntiTamperingLtHash",
    "WAWebSyncdConst",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMetrics",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebWamEnumMdSyncdCriticalEventCode",
    "asyncToGeneratorRuntime"
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
    const F = [
        (A = o("WAWebSyncdConst")).Actions.LocaleSetting,
        A.Actions.SettingPushName,
        "generated_wui",
        A.Actions.Sentinel,
        A.Actions.PrimaryVersion,
        A.Actions.TimeFormat,
        A.Actions.Nux,
        A.Actions.BotWelcomeRequest,
        A.Actions.DeviceCapabilities,
        A.Actions.Archive,
        A.Actions.LockChat,
        A.Actions.FavoriteSticker,
        A.Actions.ChatLockSettings,
        A.Actions.MarkChatAsRead,
        A.Actions.NoteEdit,
        A.Actions.Pin,
        A.Actions.PinDEPRECATED,
        A.Actions.RemoveRecentSticker,
        A.Actions.UnarchiveChatsSetting,
        A.Actions.AndroidUnsupportedActions
    ];
    function O(e, t, n = true) {
        const r = typeof e === "string" ? e : o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(e);
        const a = typeof t === "string" ? t : o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(t);
        const i = n ? -16 : 0;
        return `${r.slice(i)}:${a.slice(i)}`;
    }
    const B = o("WATextEncoding").newTextDecoder();
    function W(e, t, n) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            const { keyId, mac, records, version } = n;
            const c = yield o("WAWebSyncdKeyCache").getKeyData(keyId.id);
            if (!c) {
                throw new (o("WAWebSyncdError")).SyncdMissingKeyError;
            }
            const d = new Map(records.map((e)=>[
                    o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(e.index.blob),
                    o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(e.value.blob)
                ]));
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd:\n  ",
                " snapshot macsToAdd:\n      ",
                ""
            ])), r, t, Array.from(d.entries()).map(([t, n])=>O(t, n)).join("\n	"));
            const m = yield o("WACryptoLtHash").LT_HASH_ANTI_TAMPERING.add(o("WACryptoLtHash").EMPTY_LT_HASH, Array.from(d.values()));
            const p = yield o("WAWebSyncdCrypto").generateEncryptionKeys(c);
            const p_snapshotMacKey = p.snapshotMacKey;
            const f = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(version.version);
            const buffer = o("WAEncodeString").toUtf8(t).buffer;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: validating snapshot mac for ",
                " snapshot v",
                ":\n  ltHash: ",
                "\n  encoded version: ",
                "\n  encoded collection: ",
                "\n  expected snapshotMAC: ",
                "\n  "
            ])), r, t, version.version, o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(m), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(f), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(buffer), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(mac));
            const computedSnapshotMac = yield z(t, mac, c, m, f, buffer, true, records.length, n.version.version, null, null, null, null, r);
            return {
                ltHash: m,
                computedSnapshotMac
            };
        });
        return q.apply(this, arguments);
    }
    function U(e, t, n, r, o) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: computeLtHashAndValidatePatch for ",
                ""
            ])), r, e);
            const { keyId, mutations, patchMac, snapshotMac, version } = t;
            const keyId_id = keyId.id;
            const g = yield o("WAWebSyncdKeyCache").getKeyData(keyId_id);
            if (!g) {
                throw new (o("WAWebSyncdError")).SyncdMissingKeyError;
            }
            const h = i.map((t)=>{
                const n = o("WAWebSyncdConst").Actions.cast(o("WAWebSyncdActionUtils").getMutationNameFromIndex(e, t.index));
                if (n == null) {
                    return null;
                }
                return [
                    o("WAArrayBufferUtils").arrayBufferToString(t.indexMac),
                    n
                ];
            });
            const y = new Map(h.filter(Boolean));
            const C = o("WAWebABProps").getABPropConfigValue("syncd_use_index_for_lthash_lookup") === true;
            const b = C ? new Map(i.map((e)=>[
                    o("WAArrayBufferUtils").arrayBufferToString(e.indexMac),
                    e.index
                ])) : null;
            const v = mutations.map((e)=>{
                const t = o("WAArrayBufferUtils").arrayBufferToString(e.record.index.blob);
                return {
                    operation: e.operation,
                    indexMac: e.record.index.blob,
                    valueMac: o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(e.record.value.blob),
                    action: y.get(t),
                    index: b?.get(t)
                };
            });
            const S = yield o("WAWebGetCollectionVersion").getCollectionVersionLtHashInTransaction(e);
            const R = yield J(e, v, r, a, t.version.version, o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection.Incoming, S);
            const L = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(version.version);
            const buffer = o("WAEncodeString").toUtf8(e).buffer;
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: validating snapshot and patch mac for ",
                " v",
                ":\n  expected snapshotMAC: ",
                "\n  expected patchMAC: ",
                "\n  encoded version: ",
                "\n  encoded collection: ",
                "\n  key ID: ",
                "\n  "
            ])), r, e, version.version, o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(snapshotMac), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(patchMac), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(L), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(buffer), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(o("WAWebSyncdKeyTypes").fromSyncKeyId(keyId_id)));
            let computedPatchMac;
            let computedSnapshotMacAfterPatch;
            try {
                computedPatchMac = yield K(e, patchMac, g, snapshotMac, v.map((e)=>e.valueMac), mutations.length, version.version, r);
                computedSnapshotMacAfterPatch = yield z(e, snapshotMac, g, R.ltHash, L, buffer, false, mutations.length, version.version, t.clientDebugData, S, R, t.deviceIndex, r);
            } catch (error) {
                yield T();
                throw error;
            }
            return {
                ltHash: R.ltHash,
                computedPatchMac,
                computedSnapshotMacAfterPatch
            };
            function T() {
                return D.apply(this, arguments);
            }
            function D() {
                D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield ae(e, r, "logErrorDiagnostics", false);
                    const n = new Map(t.map(({ indexMac, valueMac })=>[
                            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac),
                            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(valueMac)
                        ]));
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: error on incoming records:\n    	",
                        ""
                    ], [
                        "[",
                        "] syncd: error on incoming records:\n    \\t",
                        ""
                    ])), r, v.map(({ indexMac, operation, valueMac })=>`${operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET ? "set" : "remove"} | ${O(indexMac, valueMac, false)} | ${n.has(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac)) ? "found" : "did not find"} indexMAC in the above logged macs`).join("\n	"));
                });
                return D.apply(this, arguments);
            }
        });
        return V.apply(this, arguments);
    }
    function H(e, t, n) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebGetCollectionVersion").getCollectionVersionInTransaction(e).then((e)=>e?.version ?? 0);
            if (r !== t - 1) {
                const a = r > t - 1 ? "greater-than-expected" : "less-than-expected";
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: ",
                    " received patch v",
                    " !== latest local version (v",
                    ") + 1"
                ])), n, e, t, r).sendLogs(`syncd-version-check-error-local-version-${a}`);
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${n}] received patch v${t} !== latest local version (v${r}) + 1`);
                throw new (o("WAWebSyncdError")).SyncdRetryableError(`syncd-version-check-error-local-version-${a}`);
            }
            const i = yield o("WAWebGetCollectionVersion").getCollectionVersionLtHashInTransaction(e);
            if (o("WACryptoUtils").arrayBuffersEqual(i, o("WACryptoLtHash").EMPTY_LT_HASH) && t !== 1) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: empty local lthash found when processing ",
                    " patch v",
                    ""
                ])), n, e, t).sendLogs("syncd-empty-lthash-on-mac-mismatch");
                throw new (o("WAWebSyncdError")).SyncdRetryableError("empty lthash");
            }
        });
        return G.apply(this, arguments);
    }
    function z(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
        return j.apply(this, arguments);
    }
    function j() {
        j = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a, i, l, patchSnapshotMutationCount, u, c, d, m, p, R) {
            const E = !l;
            const k = (yield o("WAWebGetCollectionVersion").getIsCollectionInMacMismatchFatalInTransaction(e)) ?? false;
            if (E && k) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: collection ",
                    " is already in snapshot mac mismatch so not checking again"
                ])), R, e);
                return null;
            }
            const I = yield o("WAWebSyncdEncryptionManager").WASyncdEncryptionManager.generateSnapshotMac(n, r, u, e);
            const T = o("WACryptoUtils").arrayBuffersEqual(I, t);
            const D = o("WAWebSyncdSnapshotRecoveryGatingUtils").shouldPreformSnapshotRecovery(e, patchSnapshotMutationCount, new (o("WAWebSyncdError")).SyncdFatalError("probe"));
            const x = !T && l && D.shouldPerformRecovery;
            if (!T) {
                if (x) {
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: snapshot mac mismatch, will perform recovery for ",
                        " v",
                        " with ",
                        " mutations"
                    ])), R, e, u, patchSnapshotMutationCount);
                }
                if (!l) {
                    yield H(e, u, R);
                }
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${R}] failed validate snapshot mac`);
                const $ = yield o("WAWebSyncdAntiTamperingLtHash").checkLtHash(R, e);
                const { isLtHashConsistent, scratchLtHash } = $;
                const M = l ? o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT : o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_MAC_MISMATCH_IN_PATCH;
                const macFatalCollectionNameMismatch = c?.collectionName && !o("WACryptoUtils").arrayBuffersEqual(i, c?.collectionName);
                const macFatalNewLthashMismatch = c?.newLthash && !o("WACryptoUtils").arrayBuffersEqual(r, c?.newLthash);
                const macFatalPatchVersionMismatch = c?.patchVersion && !o("WACryptoUtils").arrayBuffersEqual(a, c?.patchVersion);
                const macFatalCurrentLthashMismatch = c?.currentLthash && d && !o("WACryptoUtils").arrayBuffersEqual(d, c?.currentLthash);
                const macFatalNewLthashSubtractMismatch = c?.newLthashSubtract && m?.subtractResult && !o("WACryptoUtils").arrayBuffersEqual(m?.subtractResult, c?.newLthashSubtract);
                const macFatalNumberHasOverrideMutation = m?.hasOverride;
                const macFatalNumberNumAddMutation = m?.numAdd;
                const macFatalNumberNumRemoveMutation = m?.numRemove;
                const macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch = c?.currentLthash && scratchLtHash && !o("WACryptoUtils").arrayBuffersEqual(scratchLtHash, c?.currentLthash);
                const isPatchSenderPrimary = p === 0;
                const macFatalNumberAddMismatch = c?.numberAdd != null && m?.numAdd != null && m?.numAdd !== c?.numberAdd;
                const macFatalNumberRemoveMismatch = c?.numberRemove != null && m?.numRemove != null && m?.numRemove !== c?.numberRemove;
                const macFatalDidUseMacFetchFallback = m?.didUseFallback;
                const macFatalHasMissingRemove = m?.hasMissingRemove;
                const isThereAnotherSyncdCompanion = (yield o("WAWebKeyManagementUtils").getPeerDevices()).length > 1;
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(M, {
                    collection: e,
                    patchSnapshotMutationCount,
                    patchVersion: u,
                    isFatal: !E,
                    isLtHashConsistent,
                    macFatalCollectionNameMismatch,
                    macFatalCurrentLthashMismatch,
                    macFatalNewLthashMismatch,
                    macFatalPatchVersionMismatch,
                    macFatalNewLthashSubtractMismatch,
                    macFatalNumberHasOverrideMutation,
                    macFatalNumberNumAddMutation,
                    macFatalNumberNumRemoveMutation,
                    macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch,
                    isPatchSenderPrimary,
                    macFatalDidUseMacFetchFallback,
                    macFatalHasMissingRemove,
                    macFatalNumberAddMismatch,
                    macFatalNumberRemoveMismatch,
                    isThereAnotherSyncdCompanion,
                    isPureSyncdSession: yield o("WAWebSyncdAntiTamperingLtHash").getPureSyncDSessionDetails(),
                    lidMigrationStage: o("WAWebSyncdAntiTamperingLtHash").getLidMigrationStage(),
                    recoveryStatus: D.reason
                }, x);
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: fatal extra details:\n      mdFatalErrorCode: ",
                    ",\n      collection: ",
                    ",\n      mutationCount: ",
                    ",\n      patchVersion: ",
                    ",\n      isLtHashConsistent: ",
                    ",\n      macFatalCollectionNameMismatch: ",
                    ",\n      macFatalCurrentLthashMismatch: ",
                    ",\n      macFatalNewLthashMismatch: ",
                    ",\n      macFatalPatchVersionMismatch: ",
                    ",\n      macFatalNewLthashSubtractMismatch: ",
                    ",\n      macFatalNumberHasOverrideMutation: ",
                    ",\n      macFatalNumberNumAddMutation: ",
                    ",\n      macFatalNumberNumRemoveMutation: ",
                    ",\n      macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch: ",
                    ",\n      isPatchSenderPrimary: ",
                    ",\n      macFatalDidUseMacFetchFallback: ",
                    ",\n      macFatalHasMissingRemove: ",
                    ",\n      macFatalNumberAddMismatch: ",
                    ",\n      macFatalNumberRemoveMismatch: ",
                    ",\n      isThereAnotherSyncdCompanion: ",
                    "\n    "
                ])), R, M, e, patchSnapshotMutationCount, u, isLtHashConsistent, macFatalCollectionNameMismatch, macFatalCurrentLthashMismatch, macFatalNewLthashMismatch, macFatalPatchVersionMismatch, macFatalNewLthashSubtractMismatch, macFatalNumberHasOverrideMutation, macFatalNumberNumAddMutation, macFatalNumberNumRemoveMutation, macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch, isPatchSenderPrimary, macFatalDidUseMacFetchFallback, macFatalHasMissingRemove, macFatalNumberAddMismatch, macFatalNumberRemoveMismatch, isThereAnotherSyncdCompanion);
                if (E) {
                    yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
                    const Y = `syncd: unable to validate snapshot mac. collection: ${e}`;
                    if (o("WAWebCurrentUser").isEmployee()) {
                        o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] ",
                            ""
                        ])), R, Y).sendLogs(Y, {
                            sampling: 1
                        });
                    } else if (c != null) {
                        const J = `${Y} (additional info)`;
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] ",
                            ""
                        ])), R, J).sendLogs(J, {
                            sampling: 1
                        });
                    } else {
                        o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "]  ",
                            ""
                        ])), R, Y).sendLogs(Y, {
                            sampling: 0.01
                        });
                    }
                    yield o("WAWebGetCollectionVersion").updateIsCollectionInMacMismatchFatalInTransaction(e);
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: skip fatal after snapshot mac mismatch for collection ",
                        ""
                    ])), R, e);
                    if (macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch === false && macFatalCurrentLthashMismatch === true) {
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] syncd: clientDebugData?.currentLthash: ",
                            ",\n        scratchLtHash: ",
                            ",\n        currentLtHash: ",
                            ""
                        ])), R, o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(c?.currentLthash ?? new ArrayBuffer(0)).slice(-16), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(scratchLtHash ?? new ArrayBuffer(0)).slice(-16), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(d ?? new ArrayBuffer(0)).slice(-16));
                        o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: snapshot_mac_mismatch_in_patch due to cache mismatch"
                        ]))).sendLogs("syncd: snapshot_mac_mismatch_in_patch due to cache mismatch");
                    }
                    return I;
                }
                throw new (o("WAWebSyncdError")).SyncdFatalError("unable to validate snapshot mac");
            }
            return I;
        });
        return j.apply(this, arguments);
    }
    function K(e, t, n, r, o, a, i, l) {
        return Q.apply(this, arguments);
    }
    function Q() {
        Q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, snapshotMac, valueMacs, patchSnapshotMutationCount, l, s) {
            const u = yield o("WAWebSyncdEncryptionManager").WASyncdEncryptionManager.generatePatchMac({
                collection: e,
                keyData: n,
                patchVersion: l,
                snapshotMac,
                valueMacs
            });
            const c = o("WACryptoUtils").arrayBuffersEqual(u, t);
            if (!c) {
                yield H(e, l, s);
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, "failed validate patch mac");
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MAC_MISMATCH_PATCH, {
                    collection: e,
                    patchSnapshotMutationCount,
                    patchVersion: l
                });
                o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: unable to validate patch mac."
                ])), s).sendLogs("syncd: unable to validate patch mac.");
                throw new (o("WAWebSyncdError")).SyncdFatalError("unable to validate patch mac");
            }
            return u;
        });
        return Q.apply(this, arguments);
    }
    function X(e, t, n, r) {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const a = (yield o("WAWebGetCollectionVersion").getCollectionVersionInTransaction(e).then((e)=>e?.version ?? o("WAWebSyncdConst").DEFAULT_COLLECTION_VERSION)) + 1;
            const i = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(a);
            const buffer = o("WAEncodeString").toUtf8(e).buffer;
            const snapshotMac = yield o("WAWebSyncdEncryptionManager").WASyncdEncryptionManager.generateSnapshotMac(r, t, a, e);
            const patchMac = yield o("WAWebSyncdEncryptionManager").WASyncdEncryptionManager.generatePatchMac({
                collection: e,
                keyData: r,
                patchVersion: a,
                snapshotMac,
                valueMacs: n.map((e)=>e.valueMac)
            });
            const c = yield o("WAWebSyncdCrypto").generateEncryptionKeys(r);
            const { patchMacKey, snapshotMacKey } = c;
            o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: computing snapshot and patch macs for outgoing patch ",
                " v",
                ":\n  encoded version: ",
                "\n  encoded collection: ",
                "\n  snapshotMAC: ",
                "\n  patchMAC: ",
                ""
            ])), e, a, o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(i), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(buffer), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(snapshotMac), o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(patchMac));
            return {
                snapshotMac,
                patchMac
            };
        });
        return Y.apply(this, arguments);
    }
    function J(e, t, n, r, o, a, i) {
        return Z.apply(this, arguments);
    }
    function Z() {
        Z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i, l, s) {
            const u = o("WAWebABProps").getABPropConfigValue("enable_syncd_debug_data_in_patch") || e === o("WAWebSyncdConst").CollectionName.CriticalBlock || l === o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection.Outgoing;
            const c = s ?? (yield o("WAWebGetCollectionVersion").getCollectionVersionLtHashInTransaction(e));
            const d = o("WAWebABProps").getABPropConfigValue("syncd_use_index_for_lthash_lookup") === true && t.every((e)=>e.index != null);
            if (d) {
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: using index-based ltHash lookup for ",
                    ""
                ])), r, e);
            }
            const m = d ? yield ne(e, t) : yield ee(t.map((e)=>e.indexMac));
            const p = new Map;
            const _ = new Map;
            const f = new Map;
            const g = new Set;
            if (d) {
                for (const h of t){
                    if (h.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE && h.index != null) {
                        g.add(h.index);
                    }
                }
            }
            let hasMissingRemove = false;
            let didUseFallback = false;
            yield o("WAPromiseEach").promiseEach(t, (()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, a) {
                    let s;
                    const { indexMac, operation, valueMac } = n;
                    const b = d && (s = n.index) != null ? s : B.decode(indexMac);
                    const v = m.get(b);
                    if (v) {
                        if (operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE) {
                            _.set(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac), v.valueMac);
                        } else if (!g.has(b)) {
                            f.set(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac), v.valueMac);
                        }
                    } else if (operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE) {
                        const S = d ? null : yield N(indexMac);
                        if (S != null) {
                            _.set(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac), S);
                            didUseFallback = true;
                            o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                                "[",
                                "] syncd: had to use fallbackQueryForValueMac in collection ",
                                " for platform ",
                                ": ",
                                "\n        }"
                            ])), r, e, o("WAWebConnModel").Conn.platform ?? "[empty]", o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac).slice(-16)).tags("non-sad").sendLogs("syncd: fallback query");
                            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${r}] used fallback for ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac)}`);
                        } else {
                            hasMissingRemove = true;
                            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${r}] incoming REMOVE mutation missing in local snapshot for collection ${e} version ${i?.toString() ?? "n/a"}: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac)}`);
                            yield ae(e, r, "REMOVE missing", false);
                            const x = `
          syncUseMultipleMacQueries: true
          input mutations mac:
          ${t.map((e)=>(e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET ? "SET " : "REMOVE ") + O(e.indexMac, e.valueMac)).join("\n	")}
          currentMacs: ${Array.from(m.values()).map((e)=>O(e.indexMac, e.valueMac)).join(", ")}
        `;
                            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `missing remove additional info: ${x}`);
                            o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(o("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE.MISSING_MUTATION_TO_REMOVE, e, n.action);
                            const $ = `[${r}] syncd: missing indexMAC in sync-actions table for REMOVE mutation in collection ${e} version ${i?.toString() ?? "n/a"} direction ${l || "n/a"} for platform ${o("WAWebConnModel").Conn.platform ?? "[empty]"}: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac).slice(-16)}`;
                            if (e === o("WAWebSyncdConst").CollectionName.CriticalBlock) {
                                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
                                o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    ""
                                ])), $).sendLogs(`syncd: missing indexMAC from REMOVE in collection ${e}`);
                            } else {
                                o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                                    "",
                                    ""
                                ])), $).sendLogs(`syncd: missing indexMAC from REMOVE in collection ${e}`, {
                                    sampling: 0.01
                                });
                            }
                        }
                    }
                    if (operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET) {
                        p.set(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(indexMac), valueMac);
                    }
                });
                return function(e, t) {
                    return a.apply(this, arguments);
                };
            })());
            if (hasMissingRemove) {
                const b = `
      syncUseMultipleMacQueries: true
      input mutations mac:
      ${t.map((e)=>(e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET ? "SET " : "REMOVE ") + O(e.indexMac, e.valueMac)).join("\n	")}
      currentMacs: ${Array.from(m.values()).map((e)=>O(e.indexMac, e.valueMac)).join(", ")}
    `;
                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), b);
            }
            const v = yield o("WACryptoLtHash").LT_HASH_ANTI_TAMPERING.subtractThenAdd(c, Array.from(p.values()), Array.from(_.values()).concat(Array.from(f.values())));
            const { ltHash, subtractResult } = v;
            const L = `[${r}] syncd: computing ltHash for ${e}:
  mutations length: ${t.length}
  currentLtHash: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(c).slice(-16)}
  subtractResult: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(subtractResult).slice(-16)}
  currentMacs length: ${m.size}
  macsToAdd:
      ${Array.from(p.entries()).map(([t, n])=>O(t, n)).join("\n	")}
  macsToRemove:
      ${Array.from(_.entries()).map(([t, n])=>O(t, n)).join("\n	")}
  macsToOverwrite (also remove):
      ${Array.from(f.entries()).map(([t, n])=>O(t, n)).join("\n	")}
  newLtHash: ${o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(ltHash).slice(-16)}
  hasMissingRemove: ${hasMissingRemove.toString()}
  didUseFallback: ${didUseFallback.toString()}`;
            o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ""
            ])), L);
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `generate lthash details 1: ${L}`);
            if (u) {
                const P = `
      input mutations mac:
      ${t.map((e)=>(e.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET ? "SET " : "REMOVE ") + O(e.indexMac, e.valueMac)).join("\n	")}
      currentMacs: ${Array.from(m.values()).map((e)=>O(e.indexMac, e.valueMac)).join(", ")}
    `;
                o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), P);
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `generate lthash details 2: ${P}`);
            }
            return {
                ltHash,
                numAdd: p.size,
                numRemove: _.size,
                hasOverride: f.size > 0,
                subtractResult,
                hasMissingRemove,
                didUseFallback
            };
            function N(indexMac) {
                if (a == null) {
                    return (w || (w = n("Promise"))).resolve(null);
                }
                return a(indexMac);
            }
        });
        return Z.apply(this, arguments);
    }
    function ee(e) {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebGetSyncAction").getSyncActionsByIndexMacsInTransaction(e);
            return new Map(t.map((e)=>[
                    B.decode(e.indexMac),
                    {
                        indexMac: e.indexMac,
                        valueMac: e.valueMac
                    }
                ]));
        });
        return te.apply(this, arguments);
    }
    function ne(e, t) {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Set;
            for (const r of t){
                if (r.index != null) {
                    n.add(r.index);
                }
            }
            if (n.size === 0) {
                return new Map;
            }
            const a = yield o("WAWebGetSyncAction").getSyncActionsByCollectionAndIndexesInTransaction(e, Array.from(n));
            return new Map(a.map((e)=>[
                    e.index,
                    {
                        indexMac: e.indexMac,
                        valueMac: e.valueMac
                    }
                ]));
        });
        return re.apply(this, arguments);
    }
    function oe(e, item) {
        const t_action = item.action;
        if (t_action && (o("WAWebCurrentUser").isEmployee() || e === o("WAWebSyncdConst").CollectionName.RegularLow || e === o("WAWebSyncdConst").CollectionName.CriticalBlock || F.includes(t_action))) {
            if (t_action === o("WAWebSyncdConst").Actions.DeviceCapabilities || t_action === o("WAWebSyncdConst").Actions.DeviceCapabilitiesV2) {
                if (o("WAWebCurrentUser").isEmployee()) {
                    return item.index;
                }
                const r = item.index.indexOf(":");
                return `${t_action}:${item.index.slice(r - 4)}`;
            }
            return t_action;
        }
    }
    function ae(e, t, n, r) {
        return ie.apply(this, arguments);
    }
    function ie() {
        ie = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a = true) {
            const i = a ? 20 : 1;
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: logMacs: ",
                ": prepare"
            ])), e);
            const l = yield o("WAWebRunInTransaction").runInTransaction({
                SyncActionStore: true,
                CollectionVersionStore: true
            }, function({ CollectionVersionStore, SyncActionStore }) {
                return (w || (w = n("Promise"))).all([
                    CollectionVersionStore.get(e).then((e)=>e?.version),
                    SyncActionStore.getByCollections([
                        e
                    ])
                ]);
            });
            const s = l[0];
            const u = l[1];
            o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: current snapshot ",
                " v",
                " with ",
                " mutations. context ",
                " mutations:"
            ])), t, e, s, u.length, r);
            const c = o("WAWebCurrentUser").isEmployee() ? 200 : 120;
            if (a && u.length > c) {
                return u;
            }
            const d = u.reduce((acc, item, index)=>{
                if (index % i === 0) {
                    acc.push("");
                }
                acc[acc.length - 1] += O(item.indexMac, item.valueMac, a) + ` ${oe(e, item) ?? "n/a"} | `;
                return acc;
            }, []);
            if (d.length > 0) {
                o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), d.map((e)=>`|${e}`).join("\n"));
            }
            if (e === o("WAWebSyncdConst").CollectionName.CriticalBlock || e === o("WAWebSyncdConst").CollectionName.RegularLow || o("WAWebCurrentUser").isEmployee()) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `current local snapshot for ${e} v${s ?? "n/a"} mutation length ${u.length} context ${r}: ${d.join("\n")}`);
            }
            return u;
        });
        return ie.apply(this, arguments);
    }
    l.SyncdPatchDirection = o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection;
    l.checkLtHash = o("WAWebSyncdAntiTamperingLtHash").checkLtHash;
    l.getLidMigrationStage = o("WAWebSyncdAntiTamperingLtHash").getLidMigrationStage;
    l.reportCollectionInconsistency = o("WAWebSyncdAntiTamperingLtHash").reportCollectionInconsistency;
    l.indexAndValueMacToString = O;
    l.computeLtHashAndValidateSnapshot = W;
    l.computeLtHashAndValidatePatch = U;
    l.computeOutgoingSnapshotAndPatchMacs = X;
    l.computeLtHash = J;
    l.logMacsInSnapshot = ae;
}, 98);