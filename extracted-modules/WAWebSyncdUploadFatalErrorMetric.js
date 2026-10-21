__d("WAWebSyncdUploadFatalErrorMetric", [
    "WATimeUtils",
    "WAWebAppTracker",
    "WAWebMdFatalErrorWamEvent",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaSyncActions",
    "WAWebSyncBootstrap",
    "WAWebSyncdCollectionsStateMachine",
    "WAWebSyncdMetrics",
    "WAWebSyncdUploadFatalErrorMetricEmitter",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    const e = o("WATimeUtils").unixTime();
    function s() {
        o("WAWebSyncdUploadFatalErrorMetricEmitter").listenForUploadFatalErrorMetric(function(e) {
            u(e);
        });
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ collection, didBootstrapFromSnapshot, isFatal, isLastPatchSenderAPrimaryDevice, isLtHashConsistent, isPatchSenderPrimary, isPreviousPatchAnIncomingPatch, isPureSyncdSession, isSenderIndexSameAsPreviousSenderIndex, isThereAnotherSyncdCompanion, lidMigrationStage, macFatalCollectionNameMismatch, macFatalCurrentLthashMismatch, macFatalDidPreviousPatchFailPostSaveValidation, macFatalDidUseMacFetchFallback, macFatalHasMissingRemove, macFatalNewLthashMismatch, macFatalNewLthashSubtractMismatch, macFatalNumberAddMismatch, macFatalNumberHasOverrideMutation, macFatalNumberNumAddMutation, macFatalNumberNumRemoveMutation, macFatalNumberRemoveMismatch, macFatalPatchVersionMismatch, macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash, macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch, mdFatalErrorCode, patchSnapshotMutationCount, patchVersion, recoveryRequestDurationMs, recoveryStatus }) {
            let w = {
                mdFatalErrorCode,
                collection: collection ? o("WAWebSyncdMetrics").collectionNameToMetric(collection) : undefined,
                isBootstrap: r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess()
            };
            const A = o("WAWebUserPrefsMultiDevice").getPairingTimestamp();
            const timeSincePairingMs = A != null ? (o("WATimeUtils").unixTime() - A) * 1000 : undefined;
            w = babelHelpers.extends({}, w, {
                timeSinceRefreshMs: (o("WATimeUtils").unixTime() - e) * 1000,
                timeSincePairingMs,
                patchSnapshotMutationCount,
                patchVersion,
                isFatal,
                isWebLthashConsistent: isLtHashConsistent,
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
                macFatalDidPreviousPatchFailPostSaveValidation,
                macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash,
                isPreviousPatchAnIncomingPatch,
                isPreviousPatchSenderPrimary: isLastPatchSenderAPrimaryDevice,
                isSenderIndexSameAsPreviousSenderIndex,
                didBootstrapFromSnapshot,
                isThereAnotherSyncdCompanion,
                isPureSyncdSession,
                lidMigrationStage,
                recoveryRequestDurationMs,
                recoveryStatus
            });
            w = babelHelpers.extends({}, w, {
                appContext: o("WAWebAppTracker").AppTracker.getAppContext()
            });
            const O = yield o("WAWebUserPrefsMultiDevice").getRecentMailboxAgeDays();
            const B = yield o("WAWebUserPrefsAppStateSync").getLastPeriodicAppStateSyncTs();
            const W = r("WAWebSyncdCollectionsStateMachine").getCollectionMinFailureTime();
            w = babelHelpers.extends({}, w, {
                mailboxAgeDays: O ?? undefined,
                daysSinceLastPeriodicSync: B == null ? undefined : Math.trunc((o("WATimeUtils").unixTime() - B) / 60 / 60 / 24),
                hoursSinceFirstFiniteFailure: W == null ? undefined : Math.trunc((o("WATimeUtils").unixTimeMs() - W) / 1000 / 60 / 60)
            });
            const q = yield o("WAWebSchemaSyncActions").getSyncActionsTable().get('["primary_version","current"]');
            const U = yield o("WAWebSchemaSyncActions").getSyncActionsTable().get('["primary_version","session_start"]');
            if (q || U) {
                const j = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, q?.binarySyncData).value;
                const K = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, U?.binarySyncData).value;
                w = babelHelpers.extends({}, w, {
                    currentPrimaryAppVersion: j?.primaryVersionAction?.version ?? undefined,
                    sessionStartPrimaryAppVersion: K?.primaryVersionAction?.version ?? undefined
                });
            }
            yield new (o("WAWebMdFatalErrorWamEvent")).MdFatalErrorWamEvent(w).commitAndWaitForFlush(true);
        });
        return c.apply(this, arguments);
    }
    l.initialiseFatalErrorMetricUploading = s;
    l.uploadFatalErrorMetric = u;
}, 98);