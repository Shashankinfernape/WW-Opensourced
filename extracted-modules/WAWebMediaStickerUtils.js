__d("WAWebMediaStickerUtils", [
    "Promise",
    "WALogger",
    "WAWebMediaInMemoryBlobCache",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 3;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.filter((e)=>{
                const n = o("WAWebNonMessageDataRequestMediaHandlingUtils").mediaReuploadRequestCountMap.get(e.filehash) ?? 0;
                return n < o("WAWebNonMessageDataRequestMediaHandlingUtils").MEDIA_REUPLOAD_REQUEST_LIMIT;
            });
            yield o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER, {
                fileSha256Arr: t.map((e)=>e.filehash)
            });
        });
        return _.apply(this, arguments);
    }
    function f(stickersArr) {
        const t = stickersArr.map((e)=>{
            if (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(e.filehash)) {
                return (d || (d = n("Promise"))).resolve();
            }
            return e.downloadMedia(false);
        });
        return (d || (d = n("Promise"))).allSettled(t);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ filterStickers, isAvatarStickers, onChange, onDownloadEnd, onDownloadStart, setStickerReuploadRetryCount, setStickersDownloaded, stickerReuploadRetryCount, stickersArr }) {
            const y = stickersArr.filter((e)=>o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(e.filehash));
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sticker-dl] pre-dl cached=",
                ""
            ])), y.length);
            setStickersDownloaded(filterStickers != null ? filterStickers(y, {
                isAvatarStickers
            }) : y);
            onDownloadStart?.();
            yield f(stickersArr).then(()=>{
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker-dl] done"
                ])));
                const e = [];
                const t = [];
                stickersArr.forEach((n)=>{
                    if (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(n.filehash)) {
                        e.push(n);
                    } else {
                        t.push(n);
                    }
                });
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sticker-dl] post-dl cached=",
                    ""
                ])), e.length);
                setStickersDownloaded(filterStickers != null ? filterStickers(e, {
                    isAvatarStickers
                }) : e);
                onChange?.();
                if (stickerReuploadRetryCount < m && t.length > 0) {
                    setStickerReuploadRetryCount(stickerReuploadRetryCount + 1);
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[sticker-dl] failed, need RDU=",
                        ""
                    ])), t.length);
                    p(t);
                }
            });
            onDownloadEnd?.();
        });
        return h.apply(this, arguments);
    }
    l.requestStickerReupload = p;
    l.handleStickerDownloadInStickerPanel = g;
}, 98);