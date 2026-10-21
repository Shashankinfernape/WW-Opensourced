__d("WAWebCreateMediaDownloadMetrics", [
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebExperienceIdWamFields",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDownload2WamEvent",
    "WAWebMmsMediaTypes",
    "WAWebWamEnumConnectionType",
    "WAWebWamEnumMediaDownloadResultType",
    "WAWebWamEnumNetworkStackType",
    "WAWebWamGroupMetricCache",
    "WAWebWamMediaMetricUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const r = o("WAWebWamMediaMetricUtils").generateMediaEventId();
            const a = new (o("WAWebMediaDownload2WamEvent")).MediaDownload2WamEvent({
                mediaId: r,
                connectionType: o("WAWebWamEnumConnectionType").CONNECTION_TYPE.HOSTNAME,
                overallMediaType: o("WAWebWamMediaMetricUtils").getMetricMediaType(e.type),
                overallMmsVersion: 4,
                networkStack: o("WAWebWamEnumNetworkStackType").NETWORK_STACK_TYPE.NATIVE,
                overallDownloadMode: o("WAWebWamMediaMetricUtils").getMetricOverallDownloadModeType(e.type, e.downloadMode, e.isPrefetch),
                overallAttemptCount: e.userDownloadAttemptCount,
                overallIsEncrypted: o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(e.type),
                overallDownloadOrigin: e.downloadOrigin,
                overallBackendStore: o("WAWebWamMediaMetricUtils").getMetricBackendStore(e.directPath) ?? undefined,
                isViewOnce: e.isViewOnce,
                experienceIds: o("WAWebExperienceIdWamFields").getExperienceIdsWamValue(e.experienceIds) ?? undefined
            });
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.MediaDL);
            if (e.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE) {
                a.set(babelHelpers.extends({}, e.imageDimensions));
            }
            const e_chatWid = e.chatWid;
            if (e_chatWid) {
                const l = yield o("WAWebWamGroupMetricCache").getGroupMetrics(e_chatWid);
                if (l?.deviceCount != null) {
                    a.set({
                        deviceCount: l.deviceCount
                    });
                }
            }
            const handleDownloadHostFound = function({ failCount, hostClass, hostName }) {
                a.set({
                    overallDomain: hostName,
                    overallConnectionClass: hostClass,
                    overallRetryCount: failCount
                });
            };
            const handleDownloadSuccess = function(overallMediaSize) {
                a.set({
                    overallMediaSize,
                    overallDownloadResult: o("WAWebWamEnumMediaDownloadResultType").MEDIA_DOWNLOAD_RESULT_TYPE.OK,
                    overallIsFinal: true,
                    downloadHttpCode: 200
                });
            };
            const handleDownloadError = function(t, overallIsFinal) {
                const overallDownloadResult = o("WAWebWamMediaMetricUtils").getMetricDownloadErrorResultType(t);
                a.set({
                    overallDownloadResult,
                    overallIsFinal
                });
                const r = o("WAWebWamMediaMetricUtils").getStatusCode(t);
                if (r != null) {
                    a.downloadHttpCode = r;
                }
                a.markOverallCumT();
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaDL);
                o("WAWebAppTracker").attachWAMAppContext(a, a.overallCumT);
                a.commit();
                o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(a, t);
                if (overallIsFinal && overallDownloadResult !== o("WAWebWamEnumMediaDownloadResultType").MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_CANCEL) {
                    o("WAWebCoreActionsODS").logMediaDownloadError();
                    if (overallDownloadResult === o("WAWebWamEnumMediaDownloadResultType").MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_TOO_OLD) {
                        o("WAWebCoreActionsODS").logMediaDownloadErrorExpired();
                    } else if (overallDownloadResult === o("WAWebWamEnumMediaDownloadResultType").MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_NETWORK) {
                        o("WAWebCoreActionsODS").logMediaDownloadErrorNetwork();
                    }
                }
            };
            const handleDownloadAttemptSuccess = function(t) {
                a.set({
                    overallT: t
                });
            };
            const handleDownloadAttemptError = function({ error, failCount, overallT }) {
                const i = new (o("WAWebMediaDownload2WamEvent")).MediaDownload2WamEvent(a.all);
                i.set({
                    mediaId: o("WAWebWamMediaMetricUtils").generateMediaEventId(),
                    overallDownloadResult: o("WAWebWamMediaMetricUtils").getMetricDownloadErrorResultType(error),
                    overallIsFinal: false,
                    overallT,
                    overallRetryCount: failCount
                });
                const l = o("WAWebWamMediaMetricUtils").getStatusCode(error);
                if (l != null) {
                    a.downloadHttpCode = l;
                }
                a.markOverallCumT();
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaDL);
                o("WAWebAppTracker").attachWAMAppContext(a, a.overallCumT);
                i.commit();
                o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(i, error);
            };
            const markDecryptionStart = function() {
                a.startOverallDecryptT();
            };
            const markDecryptionEnd = function() {
                a.markOverallDecryptT();
            };
            const handleDownloadAndDecryptSuccess = function() {
                a.markOverallCumT();
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaDL);
                o("WAWebAppTracker").attachWAMAppContext(a, a.overallCumT);
                a.commit();
                o("WAWebCoreActionsODS").logMediaDownloadSuccess();
            };
            const startNetworkT = function() {
                a.startDownloadNetworkT();
            };
            const markNetworkT = function() {
                a.markDownloadNetworkT();
            };
            return {
                handleDownloadSuccess,
                handleDownloadHostFound,
                handleDownloadError,
                handleDownloadAttemptSuccess,
                handleDownloadAttemptError,
                handleDownloadAndDecryptSuccess,
                markDecryptionEnd,
                markDecryptionStart,
                startNetworkT,
                markNetworkT
            };
        });
        return s.apply(this, arguments);
    }
    l.createMediaDownloadMetrics = e;
}, 98);