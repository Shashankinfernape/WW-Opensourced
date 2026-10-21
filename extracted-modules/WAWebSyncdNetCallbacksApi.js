__d("WAWebSyncdNetCallbacksApi", [
    "WABase64",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebMmsClientErrors",
    "WAWebStartMediaDownloadQpl",
    "WAWebStartMediaUploadQpl",
    "WAWebSyncdError",
    "WAWebSyncdUploadFatalErrorMetric",
    "WAWebUploadManager",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumMdSyncdFatalErrorCode",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = function(t) {
        const uploadQpl = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
            entryPoint: "SyncdNetCallbacks",
            mediaType: "md-app-state",
            byteLength: t.byteLength
        });
        return r("WAWebUploadManager").encryptAndUpload({
            blob: t,
            signal: new AbortController().signal,
            type: "md-app-state",
            uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
            fileOrigin: null,
            userUploadAttemptCount: 0,
            forwardedFromWeb: false,
            isViewOnce: false,
            uploadQpl
        }).then(({ directPath, encFilehash, handle, mediaKey })=>{
            if (handle == null) {
                throw r("err")("Missing handle after uploading external patch to mms4");
            }
            return {
                mediaKey: o("WABase64").decodeB64(mediaKey),
                directPath,
                encFilehash: o("WABase64").decodeB64(encFilehash),
                handle
            };
        });
    };
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, syncdBlobType, a) {
            const i = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "SyncdNetCallbacks"
            });
            i.addAnnotations({
                string: {
                    syncdBlobType
                }
            });
            const { directPath, fileEncSha256, fileSha256, mediaKey } = t;
            const m = {
                directPath,
                encFilehash: o("WABase64").encodeB64(fileEncSha256),
                filehash: o("WABase64").encodeB64(fileSha256),
                mediaKey: o("WABase64").encodeB64(mediaKey),
                type: "md-app-state",
                userDownloadAttemptCount: 0,
                downloadOrigin: o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.MESSAGE_HISTORY_SYNC
            };
            i.addPoint("download_options_ready");
            try {
                const p = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt(babelHelpers.extends({
                    signal: new AbortController().signal,
                    downloadQpl: i
                }, m));
                i.endSuccess();
                return p;
            } catch (error) {
                i.endFailWithError("download_failed", r("getErrorSafe")(error).message);
                const _ = o("WABase64").encodeB64(t.fileEncSha256).length;
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] download err ",
                    " size=",
                    " hashLen=",
                    " ",
                    ""
                ])), syncdBlobType, t.fileSizeBytes, _, a);
                throw error instanceof o("WAWebMmsClientErrors").MediaNotFoundError ? (o("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric({
                    collection: a,
                    mdFatalErrorCode: syncdBlobType === "patch" ? o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.EXTERNAL_PATCH_EXPIRED : o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_EXPIRED
                }).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] upload fatal error metric failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("syncd-fatal-error-metric-upload-failed");
                }), new (o("WAWebSyncdError")).SyncdFatalError("external patch expired")) : error;
            }
        });
        return d.apply(this, arguments);
    }
    l.uploadSyncExternalPatch = u;
    l.downloadSyncBlob = c;
}, 98);