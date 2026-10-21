__d("WAWebUploadManager", [
    "WAWebABProps",
    "WAWebCreateMediaUploadMetrics",
    "WAWebUploadManagerMainThread",
    "WAWebUploadManagerWorkerBridge"
], function(t, n, r, o, a, i, l) {
    class e {
        encryptAndUpload(t) {
            const e = r("WAWebCreateMediaUploadMetrics")({
                type: t.type,
                uploadOrigin: t.uploadOrigin,
                fileOrigin: t.fileOrigin,
                userUploadAttemptCount: t.userUploadAttemptCount,
                forwardedFromWeb: t.forwardedFromWeb,
                isViewOnce: t.isViewOnce,
                isHdPhoto: t.isHdPhoto,
                uploadQpl: t.uploadQpl
            });
            const n = o("WAWebABProps").getABPropConfigValue("web_media_encrypt_upload_in_worker_enabled");
            const a = r(n ? "WAWebUploadManagerWorkerBridge" : "WAWebUploadManagerMainThread");
            return a.encryptAndUpload(t, e);
        }
        unencryptedUpload(t) {
            return r("WAWebUploadManagerMainThread").unencryptedUpload(t);
        }
        uploadCoverPhoto(t) {
            return r("WAWebUploadManagerMainThread").uploadCoverPhoto(t);
        }
    }
    const s = new e;
    l.default = s;
}, 98);