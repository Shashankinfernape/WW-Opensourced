__d("WAWebAttachMediaModel", [
    "$InternalEnum",
    "Promise",
    "WABase64",
    "WAFilteredCatch",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebABProps",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebBaseModel",
    "WAWebChatGetters",
    "WAWebFileUtils",
    "WAWebHDMediaUtils",
    "WAWebMedia",
    "WAWebMediaDataUtils",
    "WAWebMediaEditorData",
    "WAWebMediaFileErrors",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaGatingUtils",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMediaProvenanceQpl",
    "WAWebMediaWorkerProxy",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPREGatingUtils",
    "WAWebStickerConstants",
    "asyncToGeneratorRuntime",
    "err",
    "isNonZeroNumber"
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
    const g = n("$InternalEnum").Mirrored([
        "Outline",
        "OutlineDone",
        "CropRotateCanvas"
    ]);
    const h = n("$InternalEnum").Mirrored([
        "Standard",
        "HD"
    ]);
    let y = 1;
    function C() {
        return String(y++);
    }
    const b = ((t)=>{
        function a(...i) {
            let e;
            e = t.call(this, ...i) || this;
            e.id = o("WAWebBaseModel").prop(C);
            e.file = o("WAWebBaseModel").prop();
            e.uiProcessed = o("WAWebBaseModel").prop(false);
            e.fileOrigin = o("WAWebBaseModel").prop();
            e.isVcardOverMmsDocument = o("WAWebBaseModel").prop(false);
            e.stickerMaker = o("WAWebBaseModel").prop(false);
            e.supportedTypes = o("WAWebBaseModel").prop();
            e.quality = o("WAWebBaseModel").prop(h.Standard);
            e.originalAttachment = o("WAWebBaseModel").session();
            e.provenanceSourceAttachment = o("WAWebBaseModel").session();
            e.state = o("WAWebBaseModel").session();
            e.mediaPrep = o("WAWebBaseModel").session();
            e.mimetype = o("WAWebBaseModel").session();
            e.originalMimetype = o("WAWebBaseModel").session();
            e.processPromise = o("WAWebBaseModel").session();
            e.exception = o("WAWebBaseModel").session();
            e.caption = o("WAWebBaseModel").session();
            e.type = o("WAWebBaseModel").session(o("WAWebMsgType").MSG_TYPE.UNKNOWN);
            e.hdEligible = o("WAWebBaseModel").session(false);
            e.metadataByQuality = o("WAWebBaseModel").session();
            e.processingProgressPercentage = o("WAWebBaseModel").session(0);
            e.mediaEditorData = o("WAWebBaseModel").session();
            e.lastMediaEditorAction = o("WAWebBaseModel").session();
            e.editedFile = o("WAWebBaseModel").session();
            e.$AttachMediaImpl$p_1 = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.$AttachMediaImpl$p_2 = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.preview = o("WAWebBaseModel").session();
            e.previewBase64 = o("WAWebBaseModel").session();
            e.fullPreview = o("WAWebBaseModel").session();
            e.fullPreviewSize = o("WAWebBaseModel").session();
            e.filename = o("WAWebBaseModel").session();
            e.documentPageCount = o("WAWebBaseModel").session();
            e.isPasswordProtected = o("WAWebBaseModel").session(null);
            e.originalFilename = o("WAWebBaseModel").session();
            e.isGif = o("WAWebBaseModel").session();
            e.gifAttribution = o("WAWebBaseModel").session();
            e.duration = o("WAWebBaseModel").session();
            e.hasFilter = o("WAWebBaseModel").session(false);
            e.isCropped = o("WAWebBaseModel").session(false);
            e.isRotated = o("WAWebBaseModel").session(false);
            e.isVideoManuallyTrimmed = o("WAWebBaseModel").session(false);
            e.isVideoMuted = o("WAWebBaseModel").session(false);
            e.isVideoTrimmed = o("WAWebBaseModel").session(false);
            e.$AttachMediaImpl$p_3 = null;
            e.hasSetFromPrefs = o("WAWebBaseModel").prop(false);
            e.$AttachMediaImpl$p_8 = r("WAMemoizeConcurrent")(function() {
                return "hd-eligible";
            }, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield e.attachmentPromise;
                    const t_file = t.file;
                    const r = window.URL.createObjectURL(t_file);
                    const a = yield o("WAWebMediaLoad").loadImage(r);
                    return o("WAWebHDMediaUtils").isHdPhoto(a.naturalHeight, a.naturalWidth);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            t.prototype.initialize.call(this);
            if (this.file instanceof (f || (f = n("Promise")))) {
                this.originalAttachment = this.file;
                this.provenanceSourceAttachment = this.file;
                this.processAttachment(this.file);
            } else {
                throw r("err")("cannot process non-promise file");
            }
        };
        a_prototype.processAttachment = function(t) {
            const n = this;
            this.state = o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING;
            this.mediaEditorData = r("WAWebMediaEditorData").create();
            this.$AttachMediaImpl$p_3?.abort();
            this.$AttachMediaImpl$p_3 = new AbortController;
            this.processPromise = this.$AttachMediaImpl$p_4(t).then(()=>{
                const e = new Image;
                e.src = n.fullPreview;
                e.onload = function() {
                    const t = {};
                    if (n.stickerMaker) {
                        t.fitToSquare = true;
                        const r = 2 * o("WAWebStickerConstants").STICKER_MAKER_IMAGE_PADDING;
                        t.scale = {
                            x: 1 - r / o("WAWebStickerConstants").STICKER_DIMENSION,
                            y: 1 - r / o("WAWebStickerConstants").STICKER_DIMENSION
                        };
                    }
                    n.mediaEditorData = n.mediaEditorData.setBackground(e, t);
                };
            });
        };
        a_prototype.cancelEnrichment = function() {
            this.$AttachMediaImpl$p_3?.abort();
        };
        a_prototype.$AttachMediaImpl$p_5 = function(t) {
            switch(t ?? this.quality){
                case h.Standard:
                    return o("WAWebABProps").getABPropConfigValue("web_image_max_edge");
                case h.HD:
                    return o("WAWebABProps").getABPropConfigValue("web_image_max_hd_edge");
            }
        };
        a_prototype.updateQuality = function(n) {
            this.quality = n;
            if (this.originalAttachment != null) {
                this.processAttachment(this.originalAttachment);
            } else {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[AttachMediaModel] originalAttachment is null"
                ]))).tags("media").sendLogs("attach-media-update-quality-null-attachment");
            }
        };
        a_prototype.$AttachMediaImpl$p_6 = function(t) {
            if (t == null || this.supportedTypes == null) {
                return true;
            }
            return this.supportedTypes.has(t);
        };
        a_prototype.$AttachMediaImpl$p_7 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                this.metadataByQuality = new Map(o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled() ? [
                    [
                        this.quality,
                        (yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                            maxDimension: this.$AttachMediaImpl$p_5(this.quality)
                        }))
                    ]
                ] : [
                    [
                        h.Standard,
                        (yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                            maxDimension: this.$AttachMediaImpl$p_5(h.Standard)
                        }))
                    ],
                    [
                        h.HD,
                        (yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                            maxDimension: this.$AttachMediaImpl$p_5(h.HD)
                        }))
                    ]
                ]);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$AttachMediaImpl$p_4 = function(attachmentPromise) {
            const e = this;
            let a;
            return attachmentPromise.then((()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    if (!e.$AttachMediaImpl$p_6(n.type)) {
                        throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType;
                    }
                    e.set(n);
                    if (n.preview != null) {
                        e.previewBase64 = n.preview;
                    }
                    e.originalFilename = n.filename;
                    const i = {
                        maxDimension: e.$AttachMediaImpl$p_5(),
                        fileOrigin: e.fileOrigin,
                        signal: e.$AttachMediaImpl$p_3?.signal
                    };
                    const { asSticker, documentPageCount, file, filename, gifAttribution, isGif, isVcardOverMmsDocument, stickerMaker } = n;
                    if ((asSticker === true || stickerMaker === true) && n.type === o("WAWebFileUtils").FILETYPE.VIDEO) {
                        throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType;
                    }
                    if (isGif === true) {
                        i.asGif = true;
                        i.gifAttribution = gifAttribution ?? undefined;
                        i.accessibilityLabel = n.accessibilityLabel;
                    } else if (n.type === o("WAWebFileUtils").FILETYPE.DOCUMENT) {
                        i.asDocument = true;
                        i.filename = filename;
                        i.isVcardOverMmsDocument = isVcardOverMmsDocument;
                        i.documentPageCount = documentPageCount;
                    } else if (n.type === o("WAWebFileUtils").FILETYPE.STICKER_PACK) {
                        i.asStickerPack = true;
                    }
                    if (e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
                        i.setProgressPercentage = function(t) {
                            e.processingProgressPercentage = t;
                        };
                        i.setMediaPreview = function(t, n, r) {
                            const a = o("WABase64").encodeB64(t);
                            e.updatePreview(a);
                            e.previewBase64 = a;
                            e.fullPreviewSize = {
                                width: n,
                                height: r
                            };
                            const i = new Blob([
                                t
                            ], {
                                type: "image/jpeg"
                            });
                            const l = window.URL.createObjectURL(i);
                            e.updateFullPreview(l);
                        };
                        i.setMimeType = function(t) {
                            e.mimetype = t;
                        };
                        i.resetMediaPreview = function() {
                            e.updatePreview("");
                            e.previewBase64 = "";
                            e.updateFullPreview("");
                        };
                    }
                    i.asSticker = asSticker;
                    if (stickerMaker === true) {
                        i.minDimension = o("WAWebStickerConstants").STICKER_DIMENSION;
                        i.transparency = true;
                    }
                    i.precomputedFields = {
                        fullHeight: n.fullPreviewSize ? n.fullPreviewSize.height : undefined,
                        fullWidth: n.fullPreviewSize ? n.fullPreviewSize.width : undefined,
                        preview: n.preview,
                        duration: n.duration
                    };
                    const h = r("WAWebMediaOpaqueData").createFromData(file, file.type);
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "processAttachmentPromiseHelper before prepRawMedia"
                    ])));
                    const mediaPrep = o("WAWebMedia").prepRawMedia(h, i);
                    e.set({
                        mediaPrep
                    });
                    const C = yield mediaPrep.waitForPrep();
                    const C_documentPreview = C.documentPreview;
                    const fullPreview = C.mediaBlob instanceof r("WAWebMediaOpaqueData") ? window.URL.createObjectURL(C.mediaBlob.forceToBlob()) : window.URL.createObjectURL(C.mediaBlob);
                    const S = {
                        file: C.mediaBlob,
                        fullPreview,
                        type: C.type,
                        filename: C.filename,
                        mimetype: C.mimetype,
                        originalMimetype: n.mimetype,
                        preview: C.preview,
                        previewBase64: C.preview,
                        state: o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.READY,
                        isGif: C.isGif,
                        fullPreviewSize: undefined,
                        documentPageCount,
                        isVcardOverMmsDocument: C.isVcardOverMmsDocument,
                        isPasswordProtected: C.isPasswordProtected,
                        editedFile: C.mediaBlob,
                        duration: C.duration
                    };
                    if (o("isNonZeroNumber").isNonZeroNumber(C.fullWidth) && o("isNonZeroNumber").isNonZeroNumber(C.fullHeight)) {
                        S.fullPreviewSize = {
                            height: C.fullHeight,
                            width: C.fullWidth
                        };
                    }
                    if (C.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
                        S.preview = fullPreview;
                        e.originalAttachment = attachmentPromise;
                        if (!C.isGif) {
                            e.hdEligible = yield e.$AttachMediaImpl$p_8({
                                attachmentPromise,
                                signal: new AbortController().signal
                            });
                            if (e.hdEligible) {
                                yield e.$AttachMediaImpl$p_7(file);
                            }
                        }
                    }
                    if (C.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && C_documentPreview) {
                        S.fullPreview = C_documentPreview.url;
                        S.preview = C_documentPreview.thumbUrl;
                        S.fullPreviewSize = {
                            height: C_documentPreview.height,
                            width: C_documentPreview.width
                        };
                        S.documentPageCount = C_documentPreview.pdfPages;
                    }
                    e.set(S);
                    if (!o("WAWebAttachMediaGetters").getPreviewable(e)) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Invariant violated, processed file is not previewable"
                        ]))).sendLogs("AttachMedia processFile");
                    }
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })()).catch(o("WAFilteredCatch").filteredCatch([
                (a = o("WAWebMediaFileErrors")).InvalidMediaFileType,
                a.InvalidImageFileType
            ], function(n) {
                if (e.isGif || e.type === o("WAWebFileUtils").FILETYPE.DOCUMENT || !e.$AttachMediaImpl$p_6(o("WAWebMsgType").MSG_TYPE.DOCUMENT)) {
                    throw n;
                }
                return e.$AttachMediaImpl$p_4(attachmentPromise.then((e)=>{
                    e.type = o("WAWebFileUtils").FILETYPE.DOCUMENT;
                    return e;
                }));
            })).catch(o("WAFilteredCatch").filteredCatch([
                r("WAWebMediaFileTooLargeError"),
                a.MediaFileFailedLoad,
                a.MediaFileEmpty
            ], function(exception) {
                e.set({
                    exception,
                    state: o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR
                });
                return e;
            })).catch((t)=>{
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[AttachMedia] unexpected err -> InvalidMediaFileType: ",
                    ""
                ])), t);
                e.set({
                    exception: new (o("WAWebMediaFileErrors")).InvalidMediaFileType,
                    state: o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR
                });
                return e;
            });
        };
        a_prototype.sendToChat = function({ chat, options }) {
            if (this.mediaPrep) {
                if (this.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR) {
                    return (f || (f = n("Promise"))).reject(this.exception);
                }
                if (this.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING && (o("WAWebAttachMediaGetters").getPreviewable(this) !== true || options.addEvenWhilePreparing !== true)) {
                    return (f || (f = n("Promise"))).reject(r("err")("Media still processing"));
                }
                if (this.$AttachMediaImpl$p_9(chat)) {
                    options.aiProvenancePromise = this.$AttachMediaImpl$p_10();
                }
                options.fileOrigin = this.fileOrigin;
                return this.$AttachMediaImpl$p_11({
                    chat,
                    options
                });
            }
            return (f || (f = n("Promise"))).reject(r("err")("MediaPrep not available"));
        };
        a_prototype.$AttachMediaImpl$p_9 = function(t) {
            return (this.type === o("WAWebMsgType").MSG_TYPE.IMAGE || this.type === o("WAWebMsgType").MSG_TYPE.VIDEO) && o("WAWebChatGetters").getIsNewsletter(t) && o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled();
        };
        a_prototype.$AttachMediaImpl$p_10 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.provenanceSourceAttachment == null) {
                    return null;
                }
                let e = null;
                let t = false;
                const n = (r)=>{
                    if (!(e == null || t)) {
                        t = true;
                        try {
                            r(e);
                        } catch (error) {
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[AttachMedia] ai provenance QPL end failed: ",
                                ""
                            ])), error);
                        }
                    }
                };
                try {
                    const r = yield this.provenanceSourceAttachment;
                    const a = r.file;
                    e = o("WAWebMediaProvenanceQpl").startProvenanceDetectionQpl(a);
                    const i = this.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? o("WAWebFileUtils").FILETYPE.VIDEO : o("WAWebFileUtils").FILETYPE.IMAGE;
                    if (a.size > o("WAWebMediaGatingUtils").getUploadLimit(i, this.fileOrigin)) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[AttachMedia] skipping ai provenance detection: media over upload limit"
                        ])));
                        n((e)=>e.endCancel(undefined, {
                                string: {
                                    cancel_reason: "oversize"
                                }
                            }));
                        return null;
                    }
                    const l = yield o("WAWebMediaWorkerProxy").detectAiProvenanceInWorker({
                        hints: v(a),
                        input: yield o("WAWebFileUtils").blobToArrayBuffer(a),
                        eventFlow: {
                            addAnnotations: function(n) {
                                return e?.addAnnotations(n);
                            },
                            addPoint: function(n, r) {
                                return e?.addPoint(n, r);
                            },
                            flowDetails: e.flowDetails
                        }
                    });
                    const { engineErrorCode, provenance } = l;
                    if (engineErrorCode != null) {
                        n((e)=>e.endFailWithError("provenance_engine_error", "engine_error", {
                                int: {
                                    engine_error_code: engineErrorCode
                                }
                            }));
                        return null;
                    }
                    if (provenance != null) {
                        n((e)=>e.endSuccess({
                                string: {
                                    detection_result: "ai",
                                    detection_source: provenance.c2pa != null ? "c2pa" : "iptc"
                                }
                            }));
                    } else {
                        n((e)=>e.endSuccess({
                                string: {
                                    detection_result: "none"
                                }
                            }));
                    }
                    return provenance;
                } catch (error) {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[AttachMedia] ai provenance detection failed: ",
                        ""
                    ])), error);
                    n((e)=>e.endFailWithError("provenance_detection_error", "exception"));
                    return null;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$AttachMediaImpl$p_11 = function({ chat, options }) {
            if (this.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.READY) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "AttachMedia:sendToChat: before sendToChat"
                ])));
                return this.mediaPrep.sendToChat({
                    chat,
                    options
                });
            }
            const r = {
                mimetype: this.mimetype
            };
            switch(this.type){
                case o("WAWebMsgType").MSG_TYPE.VIDEO:
                    r.isGif = this.isGif;
                    r.gifAttribution = this.gifAttribution;
                case o("WAWebMsgType").MSG_TYPE.IMAGE:
                    r.width = this.fullPreviewSize.width;
                    r.height = this.fullPreviewSize.height;
                    r.body = this.previewBase64;
                    options.placeholderProps = r;
                    break;
                case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                    r.pageCount = this.documentPageCount;
                    r.filename = this.filename;
                    r.body = this.previewBase64;
                    options.placeholderProps = r;
                    break;
                case o("WAWebMsgType").MSG_TYPE.AUDIO:
                case o("WAWebMsgType").MSG_TYPE.PTT:
                default:
                    break;
            }
            return this.mediaPrep.sendToChat({
                chat,
                options
            });
        };
        a_prototype.getFileType = function() {
            if (!(this.file instanceof Blob || this.file instanceof File)) {
                throw r("err")("expected file to be a Blob or File");
            }
            return o("WAWebFileUtils").typeFromMimetype(this.file.type);
        };
        a_prototype.delete = function() {
            if (this.fullPreview) {
                window.URL.revokeObjectURL(this.fullPreview);
            }
            t.prototype.delete.call(this);
            o("WAWebAttachMediaGetters").clearAttachMediaGetterCacheFor(this);
        };
        a_prototype.updateMediaEditorData = function(t, n) {
            if (this.mediaEditorData === t) {
                return this.mediaEditorData;
            }
            if (n.undoable) {
                this.$AttachMediaImpl$p_1.push([
                    this.mediaEditorData,
                    this.lastMediaEditorAction
                ]);
                this.lastMediaEditorAction = n.lastAction;
                this.$AttachMediaImpl$p_2 = [];
            }
            this.mediaEditorData = t;
            return this.mediaEditorData;
        };
        a_prototype.undoMediaEditorData = function(t = true) {
            if (this.canUndoMediaEditorData()) {
                if (t) {
                    this.$AttachMediaImpl$p_2.push([
                        this.mediaEditorData,
                        this.lastMediaEditorAction
                    ]);
                }
                const e = this.$AttachMediaImpl$p_1.pop();
                const n = e[0];
                const r = e[1];
                this.mediaEditorData = n;
                this.lastMediaEditorAction = r;
            }
        };
        a_prototype.redoMediaEditorData = function() {
            if (this.canRedoMediaEditorData()) {
                this.$AttachMediaImpl$p_1.push([
                    this.mediaEditorData,
                    this.lastMediaEditorAction
                ]);
                const e = this.$AttachMediaImpl$p_2.pop();
                const t = e[0];
                const n = e[1];
                this.mediaEditorData = t;
                this.lastMediaEditorAction = n;
            }
        };
        a_prototype.canUndoMediaEditorData = function() {
            return this.$AttachMediaImpl$p_1.length > 0;
        };
        a_prototype.canRedoMediaEditorData = function() {
            return this.$AttachMediaImpl$p_2.length > 0;
        };
        a_prototype.updateEditedFile = function(t) {
            this.editedFile = t;
        };
        a_prototype.preserveProvenanceSourceAttachment = function(t) {
            if (t != null) {
                this.provenanceSourceAttachment = t;
            }
        };
        a_prototype.updatePreview = function(t) {
            window.URL.revokeObjectURL(this.preview);
            this.preview = t;
        };
        a_prototype.updateFullPreview = function(t) {
            window.URL.revokeObjectURL(this.fullPreview);
            this.fullPreview = t;
        };
        a_prototype.updateCaption = function(t) {
            this.caption = t;
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    b.Proxy = "attachMedia";
    function v(e) {
        if (e.type === "") {
            return [];
        }
        return [
            e.type
        ];
    }
    const S = o("WAWebBaseModel").defineModel(b);
    l.MediaEditorAction = g;
    l.MediaQuality = h;
    l.nextAttachMediaId = C;
    l.AttachMedia = S;
}, 98);