__d("WAWebMediaDownloadMsg", [
    "Promise",
    "WALogger",
    "WAWebExperienceIdWamFields",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaMmsV4Download",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u({ chatWid, downloadEvenIfExpensive, isAutoDownload, isUserClick, mode, msg, rmrData, rmrReason, shouldSequenceDownload, shouldThrowAbortError }) {
        const msg_mediaObject = msg.mediaObject;
        if (msg_mediaObject) {
            const h = msg_mediaObject.getPendingProcess("fromDisk");
            return h.then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (isUserClick) {
                    msg_mediaObject.userDownloadAttemptCount++;
                }
                yield o("WAWebMediaMmsV4Download").downloadMedia({
                    mimetype: msg.mimetype,
                    mediaObject: msg_mediaObject,
                    downloadEvenIfExpensive,
                    mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(msg),
                    rmrReason,
                    rmrData,
                    downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(msg),
                    isVcardOverMmsDocument: msg.isVcardOverMmsDocument,
                    mode,
                    isAutoDownload,
                    isViewOnce: !!msg.isViewOnce,
                    chatWid,
                    shouldSequenceDownload,
                    shouldThrow: shouldThrowAbortError,
                    experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(msg)
                });
                msg_mediaObject.userDownloadAttemptCount = 0;
            }));
        }
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "id: ",
            " type: ",
            ""
        ])), msg.id.toString(), msg.type).sendLogs("media-fault: downloadMsg msg without mediaObject");
        return (s || (s = n("Promise"))).resolve();
    }
    l.downloadMsg = u;
}, 98);