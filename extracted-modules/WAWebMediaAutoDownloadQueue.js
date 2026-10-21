__d("WAWebMediaAutoDownloadQueue", [
    "$InternalEnum",
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDownloadStatusThumbnail",
    "WAWebDualUploadsAutoDownloadPolicy",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebStickerMimeUtils",
    "WAWebStickerModel",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = n("$InternalEnum")({
        MEDIA: "media",
        MMS_THUMBNAIL: "mms_thumbnail",
        PJPEG_THUMBNAIL: "pjpeg_thumbnail"
    });
    const b = 32 * 1024 * 1024;
    const v = 512 * 1024;
    const S = 5;
    const R = 512;
    const L = 500 * 1024;
    function E(e) {
        const t = e.type === o("WAWebMsgType").MSG_TYPE.STICKER && e.mimetype === o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType && e.isLottie === true && e.isAnimated === true;
        return t || o("WAWebMsgModelPropUtils").isTrusted(e.unsafe());
    }
    function k(e) {
        if (!o("WAWebDualUploadsAutoDownloadPolicy").shouldAutoDownloadAssociatedChild(e)) {
            return false;
        }
        switch(e.type){
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.PTT:
                return o("WAWebUserPrefsGeneral").getAutoDownloadAudio();
            case o("WAWebMsgType").MSG_TYPE.STICKER:
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                return o("WAWebUserPrefsGeneral").getAutoDownloadPhotos();
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
            case o("WAWebMsgType").MSG_TYPE.PTV:
                if (e.isGif && e.size < L) {
                    return o("WAWebUserPrefsGeneral").getAutoDownloadPhotos();
                }
                return o("WAWebUserPrefsGeneral").getAutoDownloadVideos();
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return o("WAWebUserPrefsGeneral").getAutoDownloadDocuments();
        }
        return false;
    }
    function I(e) {
        switch(e.type){
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
            case o("WAWebMsgType").MSG_TYPE.PTV:
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return e.size <= b;
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.PTT:
                return e.size < v;
            case o("WAWebMsgType").MSG_TYPE.STICKER:
                return true;
        }
        return false;
    }
    const T = (()=>{
        function t() {
            this.$1 = new (r("WAConcurrentPriorityPromiseQueue"))(S, {
                photos: 2,
                videos: 1,
                audio: 1,
                documents: 1,
                mms_thumbnail: 4
            });
        }
        const t_prototype = t.prototype;
        t_prototype.getEnqueuedTasksCount = function() {
            return this.$1.getEnqueuedTasksCount();
        };
        t_prototype.clearQueue = function() {
            this.$1.clearQueue();
        };
        t_prototype.$2 = function() {
            return o("WAWebUserPrefsGeneral").getAutoDownloadPhotos() && this.getEnqueuedTasksCount() < R;
        };
        t_prototype.enqueue = function(sticker, r, a) {
            if (sticker instanceof o("WAWebStickerModel").StickerModel) {
                if (this.$2()) {
                    this.$3({
                        sticker
                    });
                    return true;
                }
                return false;
            }
            const t = sticker;
            const i = r === C.MEDIA && !o("WAWebMsgGetters").getIsNewsletterMsg(t.unsafe()) && E(t) && t.isNewMsg && k(t) && I(t) && this.getEnqueuedTasksCount() < R;
            if (i) {
                switch(t.type){
                    case o("WAWebMsgType").MSG_TYPE.AUDIO:
                    case o("WAWebMsgType").MSG_TYPE.PTT:
                        this.$4({
                            message: t,
                            group: "audio",
                            chat: a
                        }).catch((t)=>{
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                ""
                            ])), t).sendLogs("auto-download media enqueue failed");
                        });
                        return true;
                    case o("WAWebMsgType").MSG_TYPE.IMAGE:
                    case o("WAWebMsgType").MSG_TYPE.STICKER:
                        this.$4({
                            message: t,
                            group: "photos",
                            chat: a
                        }).catch((e)=>{
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                ""
                            ])), e).sendLogs("auto-download media enqueue failed");
                        });
                        return true;
                    case o("WAWebMsgType").MSG_TYPE.VIDEO:
                    case o("WAWebMsgType").MSG_TYPE.PTV:
                        if (t.isGif && t.size < L) {
                            this.$4({
                                message: t,
                                group: "photos",
                                chat: a
                            }).catch((e)=>{
                                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "auto-download media enqueue failed ",
                                    ""
                                ])), e).sendLogs("auto-download media enqueue failed");
                            });
                            return true;
                        }
                        this.$4({
                            message: t,
                            group: "videos",
                            chat: a
                        }).catch((e)=>{
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                ""
                            ])), e).sendLogs("auto-download media enqueue failed");
                        });
                        return true;
                    case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                        this.$4({
                            message: t,
                            group: "documents",
                            chat: a
                        }).catch((e)=>{
                            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                ""
                            ])), e).sendLogs("auto-download media enqueue failed");
                        });
                        return true;
                }
            }
            if (r === C.MMS_THUMBNAIL) {
                if (t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT || o("WAWebMsgModelUtils").typeIsUrl(t)) {
                    this.$5({
                        message: t,
                        group: "mms_thumbnail",
                        chat: a
                    }).catch((e)=>{
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "auto-download mms thumbnail enqueue failed ",
                            ""
                        ])), e).sendLogs("auto-download mms thumbnail enqueue failed");
                    });
                    return true;
                }
                if ((t.type === o("WAWebMsgType").MSG_TYPE.IMAGE || t.type === o("WAWebMsgType").MSG_TYPE.VIDEO || t.type === o("WAWebMsgType").MSG_TYPE.PTV) && !o("WAWebDualUploadsAutoDownloadPolicy").isDualUploadHdChildMsg(t)) {
                    this.$6({
                        message: t,
                        group: "mms_thumbnail"
                    }).catch((e)=>{
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "auto-download status thumbnail enqueue failed ",
                            ""
                        ])), e).sendLogs("auto-download status thumbnail enqueue failed");
                    });
                    return true;
                }
            }
            if (r === C.PJPEG_THUMBNAIL && t.type === o("WAWebMsgType").MSG_TYPE.IMAGE && !o("WAWebDualUploadsAutoDownloadPolicy").isDualUploadHdChildMsg(t)) {
                this.$7({
                    message: t,
                    group: "mms_thumbnail"
                }).catch((e)=>{
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "auto-download pjpeg thumbnail enqueue failed ",
                        ""
                    ])), e).sendLogs("auto-download pjpeg thumbnail enqueue failed");
                });
                return true;
            }
            return false;
        };
        t_prototype.$3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ sticker }) {
                if (!sticker.mediaObject) {
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Sticker mediaObject missing at enqueue ",
                        ""
                    ])), r("gkx")("26258") ? "" : sticker.id).sendLogs("Sticker mediaObject does not exist for media at enqueue time");
                    return;
                }
                yield this.$1.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!sticker.mediaObject) {
                        o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "Sticker mediaObject missing at download ",
                            ""
                        ])), r("gkx")("26258") ? "" : sticker.id).sendLogs("Sticker mediaObject does not exist for media at download time");
                        return;
                    }
                    yield sticker.downloadMedia();
                }), {
                    group: "photos",
                    priority: 1
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$4 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ group, message }) {
                if (!message.mediaObject) {
                    o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "mediaObject does not exist for media at enqueue time ",
                        ""
                    ])), r("gkx")("26258") ? "" : message.id).sendLogs("mediaObject does not exist for media at enqueue time");
                    return;
                }
                yield this.$1.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!message.mediaObject) {
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "mediaObject does not exist for media at download time ",
                            ""
                        ])), r("gkx")("26258") ? "" : message.id).sendLogs("mediaObject does not exist for media at download time", {
                            sampling: 0
                        });
                        return;
                    }
                    if (k(message)) {
                        yield message.downloadMedia({
                            downloadEvenIfExpensive: false,
                            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.OTHER,
                            isUserInitiated: false,
                            isAutoDownload: true
                        });
                    }
                }), {
                    group,
                    priority: -message.t
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$5 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, group, message }) {
                yield this.$1.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield r("WAWebMediaDownloadMmsThumbnail")({
                        msg: message,
                        chat
                    });
                }), {
                    group,
                    priority: -message.t
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$6 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ group, message }) {
                yield this.$1.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebDownloadStatusThumbnail").downloadStatusThumbnail({
                        msg: message
                    });
                }), {
                    group,
                    priority: -message.t
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$7 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ group, message }) {
                yield this.$1.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebDownloadProgressiveJpegThumbnail").downloadProgressiveJpegThumbnail({
                        msg: message,
                        scanCount: o("WAWebMediaGatingUtils").getHQImageThumbnailInChatScans()
                    });
                }), {
                    group,
                    priority: -message.t
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    const D = new T;
    l.AutoDownloadTypes = C;
    l.MAX_AUTO_DOWNLOAD_SIZE = b;
    l.AUDIO_AUTO_DOWNLOAD_SIZE_LIMIT = v;
    l.shouldTrustMedia = E;
    l.shouldAutoDownloadMedia = k;
    l.validateMediaSize = I;
    l.AutoDownloadQueue = D;
}, 98);