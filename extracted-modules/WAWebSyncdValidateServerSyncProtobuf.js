__d("WAWebSyncdValidateServerSyncProtobuf", [
    "WALongInt",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdError",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdMetricFatalError",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        static validateSnapshotProtobuf(n, { keyId, mac, records, version }) {
            const s = version?.version;
            if (!version || s == null) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_VERSION, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing snapshot version");
            }
            const records_1 = records.map((t)=>e.validateRecordProtobuf(n, t));
            if (!mac) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_MAC, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing snapshot mac");
            }
            const c = e.validateKeyIdProtobuf(n, keyId, o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_KEY_ID);
            return {
                version: {
                    version: o("WALongInt").numberOrThrowIfTooLarge(s)
                },
                records: records_1,
                mac,
                keyId: c
            };
        }
        static validatePatchProtobuf(n, { clientDebugData, deviceIndex, exitCode, externalMutations, keyId, mutations, patchMac, snapshotMac, version }) {
            const p = version?.version;
            if (!version || p == null) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_VERSION, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing patch version");
            }
            if (mutations && mutations.length > 0 && externalMutations) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("patch with both inline and external mutations");
            }
            if (!snapshotMac) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_SNAPSHOT_MAC, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing patch snapshot mac");
            }
            if (!patchMac) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_MAC, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing patch mac");
            }
            const _ = e.validateKeyIdProtobuf(n, keyId, o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_KEY_ID);
            let clientDebugData_1;
            if (clientDebugData != null) {
                clientDebugData_1 = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").PatchDebugDataSpec, clientDebugData);
            }
            if (externalMutations) {
                const g = e.validateExternalBlobReference(n, externalMutations);
                return {
                    version: {
                        version: o("WALongInt").numberOrThrowIfTooLarge(p)
                    },
                    mutations: undefined,
                    externalMutations: g,
                    snapshotMac,
                    patchMac,
                    keyId: _,
                    deviceIndex,
                    clientDebugData: clientDebugData_1
                };
            }
            const h = mutations.map((t)=>e.validateMutationProtobuf(n, t));
            return {
                version: {
                    version: o("WALongInt").numberOrThrowIfTooLarge(p)
                },
                mutations: h,
                externalMutations: undefined,
                exitCode,
                snapshotMac,
                patchMac,
                keyId: _,
                deviceIndex,
                clientDebugData: clientDebugData_1
            };
        }
        static validateExternalBlobReference(t, { directPath, fileEncSha256, fileSha256, fileSizeBytes, handle, mediaKey }) {
            if (!mediaKey) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing external blob reference media key");
            }
            if (directPath == null) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing external blob reference direct path");
            }
            if (!fileSha256) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing external blob reference file SHA256");
            }
            if (!fileEncSha256) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing external blob reference file enc SHA256");
            }
            return {
                mediaKey,
                directPath,
                handle,
                fileSizeBytes,
                fileSha256,
                fileEncSha256
            };
        }
        static validateMutationProtobuf(n, { operation, record }) {
            if (operation == null) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_OPERATION, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing mutation operation");
            }
            if (!record) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_RECORD, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing mutation record");
            }
            const i = e.validateRecordProtobuf(n, record);
            return {
                operation,
                record: i
            };
        }
        static validateRecordProtobuf(n, { index, keyId, value }) {
            const l = index?.blob;
            const s = value?.blob;
            if (!index || !l) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_INDEX, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing mutation index");
            }
            if (!value || !s) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_VALUE, {
                    collection: n
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing mutation value");
            }
            const u = e.validateKeyIdProtobuf(n, keyId, o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_KEY_ID);
            return {
                index: {
                    blob: l
                },
                value: {
                    blob: s
                },
                keyId: u
            };
        }
        static validateKeyIdProtobuf(t, n, r) {
            const e = n?.id;
            if (!n || !e) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(r, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing mutation key id");
            }
            return {
                id: o("WAWebSyncdKeyTypes").toSyncKeyId(e)
            };
        }
    }
    l.default = e;
}, 98);