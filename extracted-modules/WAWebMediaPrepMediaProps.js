__d("WAWebMediaPrepMediaProps", [
    "WALogger",
    "WAWebMediaDataUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaMmsV4Download",
    "WAWebMediaOpaqueData",
    "WAWebMediaStorage",
    "WAWebMmsMediaTypes",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumWebcRmrReasonCode"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t, n) {
        return t.waitForPrep().then((e)=>{
            const e_mediaBlob = e.mediaBlob;
            if (e_mediaBlob && !(e_mediaBlob instanceof r("WAWebMediaOpaqueData"))) {
                return r("WAWebMediaOpaqueData").createFromData(e_mediaBlob, e_mediaBlob.type).then((t)=>{
                    e.mediaBlob = t;
                    return e;
                });
            }
            return e;
        }).then((t)=>{
            const t_filehash = t.filehash;
            if (!t_filehash) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!"
                ]))).sendLogs("media-fault: sendToChat filehash undefined");
            }
            const c = t.mediaBlob instanceof r("WAWebMediaOpaqueData");
            const d = t_filehash ?? "none";
            const m = n.forwardedFromWeb ?? false;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] getMediaPropsNew hash=",
                " blob=",
                " type=",
                " fwd=",
                ""
            ])), d, c, t.type, m);
            const p = o("WAWebMediaStorage").getOrCreateMediaObject(t_filehash);
            const p_mediaBlob = p.mediaBlob;
            if (p_mediaBlob) {
                p_mediaBlob.retain();
                if (t.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
                    t.mediaBlob.autorelease();
                }
                t.mediaBlob = p_mediaBlob;
            }
            if (t.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
                t.renderableUrl = t.mediaBlob.url();
            }
            p.consolidate(t.toJSON());
            if (t.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
                t.mediaBlob.autorelease();
            }
            const f = o("WAWebMediaDataUtils").shouldUseMediaCache(o("WAWebMmsMediaTypes").castToV4(p.type));
            if (f && t.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
                const g = t.mediaBlob.formData();
                o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(t_filehash, g);
            }
            const h = f && t.mediaBlob instanceof r("WAWebMediaOpaqueData");
            const y = p.mediaBlob != null;
            const length = p.msgs.length;
            const length_1 = p.entries.entries.length;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] post-merge blob=",
                " msgs=",
                " entries=",
                " cache=",
                " mem=",
                ""
            ])), y, length, length_1, f, h);
            o("WAWebMediaMmsV4Download").downloadMedia({
                mimetype: t.mimetype,
                mediaObject: p,
                downloadEvenIfExpensive: true,
                mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
                    type: t.type,
                    isGif: t.isGif,
                    isNewsletter: n.isNewsletterMsg === true
                }),
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                downloadOrigin: n.downloadOrigin ?? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL,
                mode: "manual",
                chatWid: n.chatWid
            });
            const v = babelHelpers.extends({}, p.msgProps(t));
            v.caption = n.caption;
            if (n.isViewOnce === true) {
                v.isViewOnce = true;
            }
            return v;
        });
    }
    l.default = c;
}, 98);