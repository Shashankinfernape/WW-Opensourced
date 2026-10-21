__d("WAWebManuallySetMedia", [
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaMmsV4Download",
    "WAWebMediaOpaqueData",
    "WAWebMmsMediaTypes"
], function(t, n, r, o, a, i, l) {
    function e({ chatWid, media, msg, rmrReason }) {
        const msg_mediaObject = msg.mediaObject;
        if (msg_mediaObject) {
            r("WAWebMediaOpaqueData").createFromData(media, msg.mimetype).then((e)=>o("WAWebMediaMmsV4Download").manuallySetMedia({
                    mimetype: msg.mimetype,
                    mediaObject: msg_mediaObject,
                    mediaBlob: e,
                    mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(msg),
                    rmrReason,
                    downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(msg),
                    chatWid
                }));
        }
    }
    l.manuallySetMedia = e;
}, 98);