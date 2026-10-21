__d("WAWebSyncdMetricFatalError", [
    "$InternalEnum",
    "WALogger",
    "WAWebSyncdMetricFatalErrorListener",
    "WAWebSyncdUploadFatalErrorMetricEmitter",
    "WAWebWamEnumRecoveryStatusEnum"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "type"
    ];
    let s;
    let u;
    const c = n("$InternalEnum").Mirrored([
        "PATCH_PROTOBUF_SERIALIZATION_FAILED",
        "MUTATIONS_PROTOBUF_SERIALIZATION_FAILED",
        "ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED",
        "ENCRYPTION_FAILED",
        "MISSING_SNAPSHOT_VERSION",
        "MISSING_SNAPSHOT_MAC",
        "MISSING_SNAPSHOT_KEY_ID",
        "MISSING_PATCH_VERSION",
        "PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS",
        "MISSING_PATCH_SNAPSHOT_MAC",
        "MISSING_PATCH_MAC",
        "MISSING_PATCH_KEY_ID",
        "MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY",
        "MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH",
        "MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256",
        "MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256",
        "MISSING_MUTATION_OPERATION",
        "MISSING_MUTATION_RECORD",
        "MISSING_MUTATION_INDEX",
        "MISSING_MUTATION_VALUE",
        "MISSING_MUTATION_KEY_ID",
        "EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED",
        "SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED",
        "PATCH_PROTOBUF_DESERIALIZATION_FAILED",
        "MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED",
        "ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED",
        "MISSING_ACTION_INDEX",
        "MISSING_ACTION_VERSION",
        "SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT",
        "SNAPSHOT_MAC_MISMATCH_IN_PATCH",
        "MAC_MISMATCH_PATCH",
        "DECRYPTION_FAILED",
        "DUPLICATE_PATCH_VERSION_IN_COLLECTION",
        "SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH",
        "SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT",
        "MISSING_ACTION_VALUE",
        "MISSING_ACTION_TIMESTAMP",
        "XMPP_BAD_REQUEST_FOR_COLLECTION",
        "XMPP_NOT_FOUND_FOR_COLLECTION",
        "CYCLIC_MUTATION_DEPENDENCY_IN_PATCH",
        "SERVER_DID_NOT_SEND_ALL_PATCHES",
        "TERMINAL_PATCH_MISSING_DATA",
        "TERMINAL_PATCH_DESERIALIZATION_ERROR",
        "TERMINAL_PATCH_UNKNOWN",
        "INVALID_ACTION_INDEX",
        "XMPP_BAD_REQUEST_GLOBAL_ERROR",
        "XMPP_NOT_FOUND_GLOBAL_ERROR",
        "XMPP_BAD_METHOD_GLOBAL_ERROR",
        "XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR",
        "TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D",
        "TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY",
        "MISSING_KEY_ON_ALL_CLIENTS",
        "MALFORMED_MUTATION_CLEAR_CHAT",
        "FAILED_MUTATION_CLEAR_CHAT"
    ]);
    const d = [];
    function m(t, n) {
        for(n === undefined && (n = true); d.length > 0;){
            const r = d.pop();
            if (r != null) {
                if (n) {
                    r.recoveryStatus = o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM.PRIMARY_DID_NOT_RESPOND;
                }
                r.recoveryRequestDurationMs = t;
                r.isFatal = n;
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: flush fatal error after failed shapshot recovery: ",
                    ""
                ])), r.type);
                const a = r.type;
                const i = babelHelpers.objectWithoutPropertiesLoose(r, e);
                p(a, i, false);
            }
        }
    }
    function p(e, t, n) {
        if (n === true) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] defer fatal err, inflight recovery: ",
                ""
            ])), e);
            d.push(babelHelpers.extends({
                type: e
            }, t));
            return;
        }
        o("WAWebSyncdUploadFatalErrorMetricEmitter").emitUploadFatalErrorMetric({
            collection: t?.collection ?? null,
            didBootstrapFromSnapshot: t?.didBootstrapFromSnapshot ?? undefined,
            isFatal: t?.isFatal ?? undefined,
            isLastPatchSenderAPrimaryDevice: t?.isLastPatchSenderAPrimaryDevice ?? undefined,
            isLtHashConsistent: t?.isLtHashConsistent ?? undefined,
            isPatchSenderPrimary: t?.isPatchSenderPrimary ?? undefined,
            isPreviousPatchAnIncomingPatch: t?.isPreviousPatchAnIncomingPatch ?? undefined,
            isPureSyncdSession: t?.isPureSyncdSession ?? undefined,
            isSenderIndexSameAsPreviousSenderIndex: t?.isSenderIndexSameAsPreviousSenderIndex ?? undefined,
            isThereAnotherSyncdCompanion: t?.isThereAnotherSyncdCompanion ?? undefined,
            lidMigrationStage: t?.lidMigrationStage ?? undefined,
            macFatalCollectionNameMismatch: t?.macFatalCollectionNameMismatch ?? undefined,
            macFatalCurrentLthashMismatch: t?.macFatalCurrentLthashMismatch ?? undefined,
            macFatalDidPreviousPatchFailPostSaveValidation: t?.macFatalDidPreviousPatchFailPostSaveValidation ?? undefined,
            macFatalDidUseMacFetchFallback: t?.macFatalDidUseMacFetchFallback ?? undefined,
            macFatalHasMissingRemove: t?.macFatalHasMissingRemove ?? undefined,
            macFatalNewLthashMismatch: t?.macFatalNewLthashMismatch ?? undefined,
            macFatalNewLthashSubtractMismatch: t?.macFatalNewLthashSubtractMismatch ?? undefined,
            macFatalNumberAddMismatch: t?.macFatalNumberAddMismatch ?? undefined,
            macFatalNumberHasOverrideMutation: t?.macFatalNumberHasOverrideMutation ?? undefined,
            macFatalNumberNumAddMutation: t?.macFatalNumberNumAddMutation ?? undefined,
            macFatalNumberNumRemoveMutation: t?.macFatalNumberNumRemoveMutation ?? undefined,
            macFatalNumberRemoveMismatch: t?.macFatalNumberRemoveMismatch ?? undefined,
            macFatalPatchVersionMismatch: t?.macFatalPatchVersionMismatch ?? undefined,
            macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash: t?.macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash ?? undefined,
            macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch: t?.macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch ?? undefined,
            mdFatalErrorCode: o("WAWebSyncdMetricFatalErrorListener").convertSyncdErrorCode(e),
            patchSnapshotMutationCount: t?.patchSnapshotMutationCount ?? undefined,
            patchVersion: t?.patchVersion ?? undefined,
            recoveryRequestDurationMs: t?.recoveryRequestDurationMs ?? undefined,
            recoveryStatus: t?.recoveryStatus ?? undefined
        });
    }
    l.SyncdFatalErrorType = c;
    l.flushDeferredFatalError = m;
    l.reportSyncdFatalError = p;
}, 98);