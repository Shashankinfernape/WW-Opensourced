__d("WAWebUploadManagerWorkerBridge", [
    "WAAbortError",
    "WAWebAppTracker",
    "WAWebBackendWorkerClient",
    "WAWebCryptoEncryptMedia",
    "WAWebCryptoEncryptMediaFromBlobLoadable",
    "WAWebDeserializeBridgedError",
    "WAWebMainThreadQplHandler",
    "WAWebMainThreadUploadManagerHandler",
    "WAWebMmsClient",
    "WAWebUploadManagerBase",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.call(this, {
                appTracker: o("WAWebAppTracker").AppTracker,
                mmsClient: {
                    upload: function(t) {
                        return r("WAWebMmsClient").upload(t);
                    },
                    checkIfUploadExists: function(t) {
                        return r("WAWebMmsClient").checkIfUploadExists(t);
                    }
                },
                encryptMedia: r("WAWebCryptoEncryptMedia"),
                encryptMediaFromBlob: s
            }) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.encryptAndUpload = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const e_blob = e.blob;
                const r = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge();
                const uploadId = o("WAWebUploadManagerBase").getNextUploadId();
                if (e.signal.aborted) {
                    throw new (o("WAAbortError")).AbortError;
                }
                o("WAWebMainThreadUploadManagerHandler").registerUploadCallbacks(uploadId, t);
                const i = function() {
                    r.fireAndForget("media", "abortUpload", {
                        uploadId
                    });
                };
                e.signal.addEventListener("abort", i, {
                    once: true
                });
                try {
                    const l = yield r.sendAndReceive("media", "encryptAndUpload", {
                        blob: e_blob,
                        type: e.type,
                        mediaKey: e.mediaKey,
                        mediaKeyTimestamp: e.mediaKeyTimestamp,
                        userUploadAttemptCount: e.userUploadAttemptCount,
                        forwardedFromWeb: e.forwardedFromWeb,
                        uploadOrigin: e.uploadOrigin,
                        isViewOnce: e.isViewOnce,
                        isHdPhoto: e.isHdPhoto,
                        token: e.token,
                        uploadId,
                        serializedUploadQpl: o("WAWebMainThreadQplHandler").serializeQplForBridge(e.uploadQpl)
                    });
                    if (l.success) {
                        return l.value;
                    }
                    throw o("WAWebDeserializeBridgedError").deserializeBridgedError(l.error);
                } finally{
                    e.signal.removeEventListener("abort", i);
                    o("WAWebMainThreadUploadManagerHandler").unregisterUploadCallbacks(uploadId);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebUploadManagerBase").UploadManagerBase);
    var s = function(t) {
        return o("WAWebCryptoEncryptMediaFromBlobLoadable").requireEncryptMediaFromBlob().then((e)=>e(t));
    };
    const u = new e;
    l.default = u;
}, 98);