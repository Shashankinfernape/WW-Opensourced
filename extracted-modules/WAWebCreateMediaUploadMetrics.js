__d("WAWebCreateMediaUploadMetrics", [
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebHttpErrors",
    "WAWebMapFileOriginToUploadOrigin",
    "WAWebMediaUpload2WamEvent",
    "WAWebMmsMediaTypes",
    "WAWebWamEnumConnectionType",
    "WAWebWamEnumMediaQuality",
    "WAWebWamEnumMediaUploadResultType",
    "WAWebWamEnumNetworkStackType",
    "WAWebWamEnumOverallLastUploadRetryPhaseType",
    "WAWebWamMediaMetricUtils"
], function(t, n, r, o, a, i, l) {
    function e({ fileOrigin, forwardedFromWeb, isHdPhoto = false, isViewOnce, type, uploadOrigin, uploadQpl = null, userUploadAttemptCount }) {
        const _ = o("WAWebWamMediaMetricUtils").generateMediaEventId();
        const f = new (o("WAWebMediaUpload2WamEvent")).MediaUpload2WamEvent({
            mediaId: _,
            connectionType: o("WAWebWamEnumConnectionType").CONNECTION_TYPE.HOSTNAME,
            overallMediaType: o("WAWebWamMediaMetricUtils").getMetricMediaType(type),
            overallMmsVersion: 4,
            overallAttemptCount: userUploadAttemptCount,
            networkStack: o("WAWebWamEnumNetworkStackType").NETWORK_STACK_TYPE.NATIVE,
            overallUploadMode: o("WAWebWamMediaMetricUtils").getMetricOverallUploadModeType(type),
            overallIsForward: forwardedFromWeb,
            overallUploadOrigin: uploadOrigin,
            uploadSource: r("WAWebMapFileOriginToUploadOrigin")(fileOrigin, forwardedFromWeb),
            isViewOnce,
            overallUserVisibleT: 0
        });
        o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.MediaUL);
        if (type === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE) {
            const photoQualitySetting = isHdPhoto ? o("WAWebWamEnumMediaQuality").MEDIA_QUALITY.HIGHEST_QUALITY : o("WAWebWamEnumMediaQuality").MEDIA_QUALITY.DATA_SAVER;
            f.set({
                photoQualitySetting
            });
        }
        function handleArrayBufferCreated(overallMediaSize) {
            f.set({
                overallMediaSize
            });
            uploadQpl?.addPoint("handle_array_buffer_created", {
                int: {
                    overall_media_size: s(overallMediaSize)
                }
            });
        }
        function handleCheckExistingError(e) {
            let t = null;
            if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError) {
                f.set({
                    resumeHttpCode: e.status
                });
                t = e.status;
            }
            const n = {};
            if (t != null) {
                n.check_existing_http_status = t;
            }
            uploadQpl?.addPoint("handle_check_existing_error", {
                string: {
                    check_existing_error_name: e.name
                },
                int: n
            });
        }
        function handleCheckExistingSuccess() {
            f.set({
                overallUploadResult: o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE.DUPLICATE,
                overallIsFinal: true,
                resumeHttpCode: 200
            });
            f.markOverallCumT();
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaUL);
            o("WAWebAppTracker").attachWAMAppContext(f, f.overallCumT);
            f.commit();
            uploadQpl?.addPoint("handle_check_existing_success", {
                bool: {
                    check_existing_dedupe_hit: true
                }
            });
        }
        function handleUploadHostFound({ failCount, hostClass, hostName }) {
            f.set({
                overallDomain: hostName,
                overallConnectionClass: hostClass,
                overallRetryCount: failCount
            });
            uploadQpl?.addPoint("handle_upload_host_found", {
                string: {
                    host_name: hostName,
                    host_class: hostClass
                },
                int: {
                    upload_host_attempt: failCount
                }
            });
        }
        function handleUploadSuccess() {
            f.set({
                resumeHttpCode: 404,
                overallUploadResult: o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE.OK,
                overallIsFinal: true,
                uploadHttpCode: 200,
                finalizeHttpCode: 200
            });
            f.markOverallCumT();
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaUL);
            o("WAWebAppTracker").attachWAMAppContext(f, f.overallCumT);
            f.commit();
            o("WAWebCoreActionsODS").logMediaUploadSuccess();
        }
        function handleUploadError(e) {
            const overallUploadResult = o("WAWebWamMediaMetricUtils").getMetricUploadErrorResultType(e);
            f.set({
                overallUploadResult,
                overallIsFinal: true
            });
            const n = o("WAWebWamMediaMetricUtils").getStatusCode(e);
            if (n != null) {
                f.uploadHttpCode = n;
                f.finalizeHttpCode = n;
            }
            f.markOverallCumT();
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaUL);
            o("WAWebAppTracker").attachWAMAppContext(f, f.overallCumT);
            f.commit();
            o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(f, e);
            if (overallUploadResult !== o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE.ERROR_CANCEL) {
                o("WAWebCoreActionsODS").logMediaUploadError();
                if (overallUploadResult === o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE.ERROR_SERVER) {
                    o("WAWebCoreActionsODS").logMediaUploadErrorServer();
                } else if (overallUploadResult === o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE.ERROR_UPLOAD) {
                    o("WAWebCoreActionsODS").logMediaUploadErrorNetwork();
                }
            }
        }
        function handleUploadAttemptSuccess(e) {
            f.set({
                overallT: e
            });
            uploadQpl?.addPoint("handle_upload_attempt_success");
        }
        const handleUploadAttemptError = function({ error, failCount, overallLastUploadRetryPhase, overallT }) {
            const i = new (o("WAWebMediaUpload2WamEvent")).MediaUpload2WamEvent(f.all);
            const l = o("WAWebWamMediaMetricUtils").getStatusCode(error);
            const finalizeHttpCode = overallLastUploadRetryPhase === o("WAWebWamEnumOverallLastUploadRetryPhaseType").OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.FINALIZE ? l : i.finalizeHttpCode;
            i.set({
                mediaId: o("WAWebWamMediaMetricUtils").generateMediaEventId(),
                overallUploadResult: o("WAWebWamMediaMetricUtils").getMetricUploadErrorResultType(error),
                overallIsFinal: false,
                overallT,
                overallRetryCount: failCount,
                overallLastUploadRetryPhase,
                finalizeHttpCode
            });
            if (l != null) {
                f.uploadHttpCode = l;
            }
            f.markOverallCumT();
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaUL);
            o("WAWebAppTracker").attachWAMAppContext(f, f.overallCumT);
            i.commit();
            o("WAWebWamMediaMetricUtils").logErrorUnknownDetails(f, error);
            uploadQpl?.addPoint("handle_upload_attempt_error", {
                string: {
                    upload_error_name: error.name
                },
                int: {
                    upload_attempt: failCount,
                    upload_retry_phase: overallLastUploadRetryPhase
                }
            });
        };
        function handleEncryptionStart() {
            f.startOverallEncryptT();
            uploadQpl?.addPoint("encrypt_start");
        }
        function handleEncryptionSuccess() {
            f.markOverallEncryptT();
            uploadQpl?.addPoint("encrypt_end");
        }
        function handleStreamUploadStart() {
            f.set({
                uploadIsStreaming: true
            });
            uploadQpl?.addPoint("streaming_upload_start");
        }
        function handleUploadProgress(uploadBytesTransferred) {
            f.set({
                uploadBytesTransferred
            });
        }
        function handleSendMessageStart(isViewOnce_1) {
            if (isViewOnce_1 != null) {
                f.set({
                    isViewOnce: isViewOnce_1
                });
            }
            f.markOverallUserVisibleT();
        }
        return {
            handleStreamUploadStart,
            handleArrayBufferCreated,
            handleCheckExistingError,
            handleCheckExistingSuccess,
            handleUploadHostFound,
            handleUploadSuccess,
            handleUploadError,
            handleUploadAttemptSuccess,
            handleUploadAttemptError,
            mediaId: _,
            handleEncryptionStart,
            handleEncryptionSuccess,
            handleUploadProgress,
            handleSendMessageStart
        };
    }
    function s(overallMediaSize) {
        return Math.round(overallMediaSize / 1024) * 1024;
    }
    l.default = e;
}, 98);