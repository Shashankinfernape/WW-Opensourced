__d("WAWebUploadManagerMainThread", [
    "WAWebAppTracker",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoEncryptMedia",
    "WAWebCryptoEncryptMediaFromBlobLoadable",
    "WAWebMmsClient",
    "WAWebUploadManagerBase"
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
        t_prototype.unencryptedUpload = function(t) {
            const { file, fileOrigin, generateThumbnailOnServer, hash, isViewOnce, signal, type, uploadOrigin } = t;
            const d = r("WAWebCreateMediaUploadMetrics")({
                type,
                uploadOrigin,
                fileOrigin,
                userUploadAttemptCount: 0,
                forwardedFromWeb: false,
                isViewOnce
            });
            const { handleCheckExistingError, handleCheckExistingSuccess, handleStreamUploadStart, handleUploadAttemptError, handleUploadAttemptSuccess, handleUploadHostFound, handleUploadProgress, handleUploadSuccess, mediaId } = d;
            const v = function(t, n) {
                handleUploadProgress(t.loaded + n);
            };
            const token = t.token ?? hash;
            return this.getExistingOrUpload({
                ciphertextHmac: file,
                encFilehash: hash,
                type,
                signal,
                onCheckExistingSuccess: handleCheckExistingSuccess,
                onCheckExistingError: handleCheckExistingError,
                onUploadHostFound: handleUploadHostFound,
                onUploadAttemptSuccess: handleUploadAttemptSuccess,
                onUploadAttemptError: handleUploadAttemptError,
                onUploadSuccess: handleUploadSuccess,
                onStreamUploadStart: handleStreamUploadStart,
                onProgress: v,
                mediaId,
                token,
                generateThumbnailOnServer
            });
        };
        t_prototype.uploadCoverPhoto = function(t) {
            const { file, hash, isViewOnce, signal, type, uploadOrigin } = t;
            const u = r("WAWebCreateMediaUploadMetrics")({
                type,
                uploadOrigin,
                fileOrigin: null,
                userUploadAttemptCount: 0,
                forwardedFromWeb: false,
                isViewOnce
            });
            const { handleCheckExistingError, handleCheckExistingSuccess, handleStreamUploadStart, handleUploadAttemptError, handleUploadAttemptSuccess, handleUploadHostFound, handleUploadProgress, handleUploadSuccess, mediaId } = u;
            const C = function(t, n) {
                handleUploadProgress(t.loaded + n);
            };
            const b = {
                ciphertextHmac: file,
                encFilehash: hash,
                type,
                signal,
                onCheckExistingSuccess: handleCheckExistingSuccess,
                onCheckExistingError: handleCheckExistingError,
                onUploadHostFound: handleUploadHostFound,
                onUploadAttemptSuccess: handleUploadAttemptSuccess,
                onUploadAttemptError: handleUploadAttemptError,
                onUploadSuccess: handleUploadSuccess,
                onStreamUploadStart: handleStreamUploadStart,
                onProgress: C,
                mediaId,
                token: t.token ?? t.hash
            };
            return this.memoizedUpload(b);
        };
        return t;
    })(o("WAWebUploadManagerBase").UploadManagerBase);
    var s = function(t) {
        return o("WAWebCryptoEncryptMediaFromBlobLoadable").requireEncryptMediaFromBlob().then((e)=>e(t));
    };
    const u = new e;
    l.default = u;
}, 98);