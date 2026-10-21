__d("WAWebMediaObject", [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebAck",
    "WAWebCryptoCreateMediaKeys",
    "WAWebCryptoMediaTypeInfo",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMedia",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebRequestMediaReuploadBridge",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
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
    const C = (()=>{
        function t() {
            const e = this;
            this.msgs = [];
            this.$1 = new (o("WAShiftTimer")).ShiftTimer(function() {
                E(e);
                M(e);
            });
            this.callOnConsolidate = null;
            this.$2 = null;
            this.$3 = 0;
            this.saveMedia = null;
            this.stickers = [];
            this.entries = new (o("WAWebMediaEntry")).MediaEntryList;
            this.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT;
            this.uploadStage = o("WAWebMediaTypes").UploadStage.INIT;
            this.userUploadAttemptCount = 0;
            this.userDownloadAttemptCount = 0;
            this.hashMismatchRetryCount = 0;
            this.$4 = null;
            this.$5 = null;
            this.$6 = new Map;
            this.$7 = null;
            this.mediaBlob = null;
            this.size = undefined;
            this.loadedSize = undefined;
            this.filehash = undefined;
            this.contentInfo = {};
            this.progressiveStage = undefined;
            this.parsedVcards = null;
            this.extractedLottieSticker = null;
        }
        const t_prototype = t.prototype;
        t_prototype.encryptedDownloadPromise_TESTONLY = function() {
            return this.$4;
        };
        t_prototype.unencryptedDownloadPromise_TESTONLY = function() {
            return this.$5;
        };
        t_prototype.consolidate = function(n) {
            if (n.downloadStage) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] mediaObject.downloadStage: ",
                    ""
                ])), this.filehash?.slice(0, 10), String(n.downloadStage));
            }
            if (b(this, n)) {
                this.notifyMsgsAsync();
                return true;
            }
            return false;
        };
        t_prototype.clearBlob = function(t) {
            const mediaBlob = this.mediaBlob;
            if (mediaBlob) {
                this.mediaBlob = null;
                mediaBlob.autorelease();
            }
            if (t?.reset === true) {
                this.$8();
            }
        };
        t_prototype.$8 = function() {
            this.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.INIT
            });
        };
        t_prototype.contentFields = function() {
            const e = this.type || o("WAWebMediaTypes").TYPE.DOCUMENT;
            return o("WAWebMediaTypes").FIELDS[e];
        };
        t_prototype.resolveWhenConsolidated = function() {
            const e = this;
            if (this.$1.ts) {
                return new (y || (y = n("Promise")))(function(t) {
                    if (e.callOnConsolidate) {
                        e.callOnConsolidate.push(t);
                    } else {
                        e.callOnConsolidate = [
                            t
                        ];
                    }
                });
            }
            return (y || (y = n("Promise"))).resolve();
        };
        t_prototype.notifyMsgsAsync = function() {
            this.$1.debounce(0);
        };
        t_prototype.addMsg = function(t) {
            for(var e = this.msgs, n = 0, r = 0; r < e.length; r++){
                const a = e[r];
                const i = a[0];
                const l = a[1];
                if (i === t && !l) {
                    n++;
                }
            }
            if (n > 0) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed! ",
                    " redundant media msg(s)"
                ])), n).sendLogs("redundant-media-msg");
            }
            e.push([
                t,
                false
            ]);
            this.notifyMsgsAsync();
        };
        t_prototype.removeMsg = function(t) {
            for(let e = this.msgs, n = false, r = 0; !n && r < e.length; r++){
                const o = e[r];
                const a = o[0];
                const i = o[1];
                if (a === t && !i) {
                    e[r][1] = true;
                    n = true;
                }
            }
        };
        t_prototype.hasAssociatedMsgsOrStickers = function() {
            for(let e = this.msgs, t = 0; t < e.length; t++){
                if (!e[t][1]) {
                    return true;
                }
            }
            return this.hasAssociatedStickers();
        };
        t_prototype.associatedMsgs = function() {
            for(var e = this.msgs, t = [], n = 0; n < e.length; n++){
                const r = e[n];
                const o = r[0];
                const a = r[1];
                if (!a) {
                    t.push(o);
                }
            }
            return t;
        };
        t_prototype.rmr = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this.associatedStickers();
                if (t.length > 0) {
                    const a = this.associatedMsgs().filter((e)=>e != null);
                    if (a.length === 0) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "The sticker associated message has been deleted."
                        ])));
                        return (y || (y = n("Promise"))).resolve(200);
                    }
                }
                const i = this.msgs.find(([t, n])=>!n && !t.isUnsentPhoneMsg()) || [
                    null
                ];
                const l = i[0];
                if (!l) {
                    const _ = this.filehash ?? "none";
                    const f = this.mediaBlob != null;
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[media-rmr] no eligible msg. total=",
                        " hash=",
                        " blob=",
                        " dlStage=",
                        ""
                    ])), this.msgs.length, _, f, this.downloadStage);
                    for(let g = 0; g < this.msgs.length; g++){
                        const msg = this.msgs[g];
                        const b = msg[0];
                        const v = msg[1];
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[media-rmr] rmr: msg[",
                            "] removed=",
                            " isUnsentPhone=",
                            " from=",
                            " type=",
                            ""
                        ])), g, v, b.isUnsentPhoneMsg(), b.from?.toLogString(), b.type);
                    }
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).sendLogs("media-fault: rmr called on MediaObject with no msg");
                    return (y || (y = n("Promise"))).reject(r("err")("rmr called on MediaObject with no msg"));
                }
                e.onMsgSelect(l);
                const S = yield r("WAWebRequestMediaReuploadBridge")(l);
                if (S.status === 200) {
                    const R = l.mediaData.type;
                    if (R === "unknown") {
                        return (y || (y = n("Promise"))).reject(r("err")("rmr called on MediaData with unknown type"));
                    }
                    const L = S.isMD ? this.entries.updateEntry({
                        deprecatedMms3Url: l.deprecatedMms3Url,
                        encFilehash: l.encFilehash,
                        directPath: S.directPath
                    }) : this.entries.addEntry({
                        deprecatedMms3Url: S.url,
                        mediaKey: S.mediaKey || r("nullthrows")(l.mediaKey),
                        mediaKeyTimestamp: S.mediaKeyTimestamp,
                        encFilehash: S.encFilehash,
                        type: R,
                        directPath: S.directPath,
                        debugHint: "rmr"
                    });
                    if (!L) {
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("media-fault: rmr entry can not be found");
                    }
                    L?.markWhetherOnServer(true);
                }
                return S.status;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.msgProps = function(t) {
            const e = {};
            k(e, this, o("WAWebMediaTypes").FIELDS.RAW);
            k(e, this.contentInfo, this.contentFields());
            k(e, t, o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS);
            e.preview = this.contentInfo._preview;
            const n = {};
            for(const r in e){
                const a = o("WAWebMediaTypes").MEDIA_TO_MSG[r];
                if (a) {
                    n[a] = e[r];
                }
            }
            return n;
        };
        t_prototype.delete = function(t = "media_object_delete") {
            this.saveMedia = null;
            o("WAWebMedia").cancelDownloadMedia(this);
            o("WAWebMedia").cancelUploadMedia(this, t);
            this.clearBlob();
        };
        t_prototype.runProcessIfNotRunBefore = function(t, r, o) {
            const e = this;
            let a = this.$2;
            if (!a) {
                a = this.$2 = {};
            }
            if (!Object.hasOwn(a, t)) {
                this.$3++;
                a[t] = (y || (y = n("Promise"))).resolve(o).then(r).then((t)=>void e.consolidate(t)).finally(()=>{
                    e.$3--;
                    if (e.$3 === 0) {
                        e.notifyMsgsAsync();
                    }
                });
            }
        };
        t_prototype.getPendingProcess = function(t) {
            if (this.$3 === 0 || !this.$2 || !Object.hasOwn(this.$2, t)) {
                return (y || (y = n("Promise"))).resolve();
            }
            return this.$2[t];
        };
        t_prototype.videoStreamingInfo = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (this.type !== o("WAWebMediaTypes").TYPE.VIDEO) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "type: ",
                        ""
                    ])), String(this.type)).sendLogs("media-fault: media streaming info request for non-video type");
                    return;
                }
                const t = this.entries.getDownloadEntry(true);
                if (!t || !t.sidecar || !(t instanceof o("WAWebMediaEntry").EncryptedMediaEntry)) {
                    return null;
                }
                const a = yield (y || (y = n("Promise"))).all([
                    r("WAWebCryptoCreateMediaKeys")(o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO, t.mediaKey),
                    t.url()
                ]);
                const i = a[0];
                const clientUrl = a[1];
                return {
                    cryptoKeys: babelHelpers.extends({}, i, {
                        cipherKey: i.encKey,
                        sidecar: t.sidecar
                    }),
                    streamData: {
                        clientUrl,
                        size: this.size,
                        msgKey: e
                    }
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.addSticker = function(t) {
            for(var e = this.stickers, n = 0, r = 0; r < e.length; r++){
                const a = e[r];
                const i = a[0];
                const l = a[1];
                if (i === t && !l) {
                    n++;
                }
            }
            if (n > 0) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed! ",
                    " redundant sticker(s)"
                ])), n).sendLogs("redundant-sticker-add");
            }
            e.push([
                t,
                false
            ]);
            this.notifyMsgsAsync();
        };
        t_prototype.removeSticker = function(t) {
            for(let e = this.stickers, n = false, r = 0; !n && r < e.length; r++){
                const o = e[r];
                const a = o[0];
                const i = o[1];
                if (a === t && !i) {
                    e[r][1] = true;
                    n = true;
                }
            }
        };
        t_prototype.hasAssociatedStickers = function() {
            return this.stickers.some(([t, n])=>!n);
        };
        t_prototype.associatedStickers = function() {
            return this.stickers.reduce((acc, [n, r])=>{
                if (r) {
                    return acc;
                }
                return acc.concat(n);
            }, []);
        };
        t_prototype.getUploadPromise = function(t) {
            if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(t)) {
                return this.$6.get(v(t));
            }
            return this.$7;
        };
        t_prototype.setUploadPromise = function(t, n) {
            if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(n)) {
                this.$6.set(v(n), t);
            } else {
                this.$7 = t;
            }
        };
        t_prototype.clearUploadPromise = function(t, n) {
            const e = this;
            if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(t)) {
                const a = Array.from(this.$6.keys()).find((t)=>e.$6.get(t) === n) ?? v(t);
                this.$6.delete(a);
            } else {
                this.$7 = null;
            }
        };
        t_prototype.getUploadPromises = function() {
            return [].concat(Array.from(this.$6.values()), [
                this.$7
            ]);
        };
        t_prototype.getDownloadPromise = function(t) {
            if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(t)) {
                return this.$4;
            }
            return this.$5;
        };
        t_prototype.setDownloadPromise = function(t, n) {
            if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(n)) {
                this.$4 = t;
            } else {
                this.$5 = t;
            }
        };
        t_prototype.clearDownloadPromise = function(t) {
            if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(t)) {
                this.$4 = null;
            } else {
                this.$5 = null;
            }
        };
        t_prototype.getDownloadPromises = function() {
            return [
                this.$4,
                this.$5
            ];
        };
        t_prototype.toJSON = function() {
            return {
                mediaBlob: this.mediaBlob,
                size: this.size,
                filehash: this.filehash,
                type: this.type,
                contentInfo: this.contentInfo,
                downloadStage: this.downloadStage,
                uploadStage: this.uploadStage
            };
        };
        return t;
    })();
    function b(e, t) {
        const e_contentInfo = e.contentInfo;
        let a = false;
        const i = S(t.type);
        if (i && !e.type) {
            e.type = i;
            a = true;
        }
        const { downloadStage, uploadStage } = t;
        if (downloadStage && downloadStage !== e.downloadStage) {
            e.downloadStage = downloadStage;
            a = true;
        }
        if (uploadStage && uploadStage !== e.uploadStage) {
            e.uploadStage = uploadStage;
            a = true;
        }
        if (t.resolvedPreview && !e_contentInfo.preview) {
            t.resolvedPreview.retain();
            e_contentInfo.preview = t.resolvedPreview;
            a = true;
        }
        if (t.progressiveStage !== undefined && t.progressiveStage !== e.progressiveStage) {
            e.progressiveStage = t.progressiveStage;
            a = true;
        }
        const t_mediaBlob = t.mediaBlob;
        if (t_mediaBlob && !t_mediaBlob.isBlobEqual(e.mediaBlob)) {
            if (e.mediaBlob) {
                e.clearBlob();
            }
            t_mediaBlob.retain();
            e.mediaBlob = t_mediaBlob;
            e.size = t_mediaBlob.size();
            a = true;
        }
        if (t.size != null && t.size !== 0 && (e.size == null || t.size < e.size)) {
            e.size = t.size;
            a = true;
        }
        const t_loadedSize = t.loadedSize;
        if (t_loadedSize != null && t_loadedSize !== e.loadedSize) {
            e.loadedSize = t_loadedSize;
            a = true;
        }
        if (t.filehash != null && t.filehash !== "" && (e.filehash == null || e.filehash === "")) {
            e.filehash = t.filehash;
            a = true;
        }
        if (t.parsedVcards && t.parsedVcards !== e.parsedVcards) {
            e.parsedVcards = t.parsedVcards;
            a = true;
        }
        if (t.extractedLottieSticker != null && t.extractedLottieSticker !== e.extractedLottieSticker) {
            e.extractedLottieSticker = t.extractedLottieSticker;
            a = true;
        }
        for(let d = e.contentFields(), m = 0; m < d.length; m++){
            const p = d[m];
            switch(p){
                case "preview":
                    if (t.preview != null && t.preview !== "" && e_contentInfo._preview == null) {
                        const _ = t.preview;
                        if (_ instanceof r("WAWebMediaOpaqueData")) {
                            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "consolidate: preview is already OpaqueData, reusing directly"
                            ])));
                            _.retain();
                            e_contentInfo.preview = _;
                        } else {
                            e.runProcessIfNotRunBefore("preview", x, _);
                        }
                        e_contentInfo._preview = _;
                        a = true;
                    }
                    break;
                case "fullWidth":
                case "fullHeight":
                case "aspectRatio":
                    {
                        const f = t[p];
                        if (f != null && f !== 0 && e_contentInfo[p] !== f) {
                            e_contentInfo[p] = f;
                            a = true;
                        }
                        break;
                    }
                case "animationDuration":
                case "singleLoopDuration":
                    {
                        const h = t[p];
                        if (h != null && h !== e_contentInfo[p]) {
                            e_contentInfo[p] = h;
                            a = true;
                        }
                        break;
                    }
                case "fullPreviewData":
                    {
                        const y = t.fullPreviewData;
                        if (y == null) {
                            break;
                        }
                        const C = e_contentInfo.fullPreviewData;
                        if (C == null || !C.released && !y.released && y.size() > C.size()) {
                            e_contentInfo.fullPreviewData = y;
                            a = true;
                        }
                        break;
                    }
                default:
                    {
                        const b = t[p];
                        if (b !== undefined && e_contentInfo[p] === undefined) {
                            e_contentInfo[p] = b;
                            a = true;
                        }
                    }
            }
        }
        if (e_contentInfo.aspectRatio == null || e_contentInfo.aspectRatio === 0) {
            if (e_contentInfo.fullWidth != null && e_contentInfo.fullWidth !== 0 && e_contentInfo.fullHeight != null && e_contentInfo.fullHeight !== 0) {
                e_contentInfo.aspectRatio = e_contentInfo.fullWidth / e_contentInfo.fullHeight;
                a = true;
            } else if (e_contentInfo.preview) {
                e.runProcessIfNotRunBefore("aspectRatio", P, e_contentInfo.preview);
            }
        }
        return a;
    }
    function v(e) {
        if (!o("WAWebABProps").getABPropConfigValue("wa_web_media_thumbnail_key_match_enabled")) {
            return "encrypted";
        }
        try {
            return o("WAWebCryptoMediaTypeInfo").getMediaTypeInfo(e) ?? e;
        } catch (t) {
            return e;
        }
    }
    function S(type) {
        switch(type){
            case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
            case o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT:
                return o("WAWebMediaTypes").TYPE.IMAGE;
            case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
                return o("WAWebMediaTypes").TYPE.VIDEO;
            case o("WAWebMediaTypes").OUTWARD_TYPES.PTV:
                return o("WAWebMediaTypes").TYPE.PTV;
            case o("WAWebMediaTypes").OUTWARD_TYPES.STICKER:
                return o("WAWebMediaTypes").TYPE.STICKER;
            case o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO:
            case o("WAWebMediaTypes").OUTWARD_TYPES.PTT:
                return o("WAWebMediaTypes").TYPE.AUDIO;
            case o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT:
            default:
                return;
        }
    }
    function R(e) {
        switch(e){
            case "VIDEO":
            case "PTV":
                return 3;
            case "IMAGE":
                return 2;
            case "AUDIO":
                return 4;
            case "STICKER":
                return 16;
            case "DOCUMENT":
                return 8;
            case "PRODUCT":
                return 18;
            case "BIZ_COVER_PHOTO":
                throw r("err")(`web media type is invalid: ${e}`);
            default:
                throw r("err")(`web media type is invalid: ${e}`);
        }
    }
    function L(e) {
        if (e.interactiveHeader?.mediaType != null) {
            switch(e.interactiveHeader.mediaType){
                case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT:
                    return o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT;
                case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO:
                    return o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO;
                case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE:
                    return o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE;
                case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.PRODUCT:
                    return o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT;
            }
        }
    }
    function E(e) {
        const t = {};
        k(t, e, o("WAWebMediaTypes").FIELDS.RAW);
        k(t, e.contentInfo, e.contentFields());
        if (e.mediaBlob) {
            t.renderableUrl = e.mediaBlob.url();
        }
        const e_msgs = e.msgs;
        for(let r = e_msgs.length, a = 0; a < r; a++){
            const i = e_msgs[a];
            const l = i[0];
            const s = i[1];
            if (l != null && !s) {
                if (l.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                    t.mediaStage = I(l, e);
                    for(let u = 0; u < o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS.length; u++){
                        const c = o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS[u];
                        if (c === "accessibilityLabel" && t.accessibilityLabel != null && l.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
                            l.set("accessibilityLabel", t.accessibilityLabel);
                        }
                        t[c] = l.get(o("WAWebMediaTypes").MEDIA_TO_MSG[c]);
                    }
                    if (l.type === o("WAWebMsgType").MSG_TYPE.STICKER && t.isAiSticker === true && l.isAiSticker !== true) {
                        l.set("isAiSticker", true);
                    }
                    if (t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
                        t.type = L(l);
                    }
                } else {
                    delete t.mediaStage;
                    for(let d = 0; d < o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS.length; d++){
                        delete t[o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS[d]];
                    }
                }
                l.mediaData.set(t);
            }
        }
        for(let m = e_msgs.length - 1; m >= 0; m--){
            if (e_msgs[m][1]) {
                e_msgs.splice(m, 1);
            }
        }
        const e_callOnConsolidate = e.callOnConsolidate;
        if (e_callOnConsolidate) {
            e.callOnConsolidate = null;
            e_callOnConsolidate.forEach((e)=>void e());
        }
        if (e.saveMedia) {
            e.saveMedia(e);
        }
    }
    function k(e, t, n) {
        for (const o of n){
            e[o] = t[o];
        }
    }
    function I(e, t) {
        if (t.filehash == null || t.filehash === "") {
            return o("WAWebMediaTypes").MediaDataStage.PREPARING;
        }
        if (e.id.fromMe && e.ack < o("WAWebAck").ACK.SENT) {
            if (!e.local) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!"
                ]))).sendLogs("media-fault: unsent media system message not local");
            }
            return D(t);
        }
        return T(t);
    }
    function T(e) {
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT) {
            return o("WAWebMediaTypes").MediaDataStage.INIT;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.EXISTS) {
            return o("WAWebMediaTypes").MediaDataStage.EXISTS;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.REUPLOADING) {
            return o("WAWebMediaTypes").MediaDataStage.REUPLOADING;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.FETCHING) {
            return o("WAWebMediaTypes").MediaDataStage.FETCHING;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.PROCESSING) {
            return o("WAWebMediaTypes").MediaDataStage.DECRYPTING;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.NEED_POKE) {
            return o("WAWebMediaTypes").MediaDataStage.NEED_POKE;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING) {
            return o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_UNSUPPORTED) {
            return o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.RESOLVED) {
            return o("WAWebMediaTypes").MediaDataStage.RESOLVED;
        }
        if (e.downloadStage === o("WAWebMediaTypes").DownloadStage.PROGRESSIVE_READY) {
            return o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.downloadStage}`);
        })();
    }
    function D(e) {
        switch(e.uploadStage){
            case o("WAWebMediaTypes").UploadStage.INIT:
                return o("WAWebMediaTypes").MediaDataStage.PREPARING;
            case o("WAWebMediaTypes").UploadStage.PREPARING:
                return o("WAWebMediaTypes").MediaDataStage.PREPARING;
            case o("WAWebMediaTypes").UploadStage.UPLOADING:
                return o("WAWebMediaTypes").MediaDataStage.UPLOADING;
            case o("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
                return o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD;
            case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
                return o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING;
            case o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE:
                return o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE;
            case o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN:
                return o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN;
            case o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED:
                return o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD;
            case o("WAWebMediaTypes").UploadStage.UPLOADED:
                return o("WAWebMediaTypes").MediaDataStage.SENDING;
            case o("WAWebMediaTypes").UploadStage.ERROR_FILE_NOT_READABLE:
                return o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE;
            case o("WAWebMediaTypes").UploadStage.FINALIZING:
                return o("WAWebMediaTypes").MediaDataStage.FINALIZING;
        }
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const resolvedPreview = yield r("WAWebMediaOpaqueData").createFromBase64Preview(e);
            resolvedPreview.autorelease();
            return {
                resolvedPreview
            };
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebMediaDataUtils").getImageWidthHeight(e);
            const { height, width } = t;
            return {
                aspectRatio: width / height
            };
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        const t = {};
        k(t, e, o("WAWebMediaTypes").FIELDS.RAW);
        k(t, e.contentInfo, e.contentFields());
        if (e.mediaBlob) {
            t.renderableUrl = e.mediaBlob.url();
        }
        const mediaStage = T(e);
        e.stickers = e.stickers.filter(([t, n])=>!n);
        e.stickers.forEach(([r, o])=>{
            r.mediaData.set(babelHelpers.extends({}, t, {
                mediaStage
            }));
        });
        if (e.callOnConsolidate) {
            e.callOnConsolidate.forEach((e)=>void e());
            e.callOnConsolidate = null;
        }
        if (e.saveMedia) {
            e.saveMedia(e);
        }
    }
    l.MediaObject = C;
    l.consolidate = b;
    l.webMediaTypeToWamMediaType = R;
    l.getInteractiveMsgMediaType = L;
}, 98);