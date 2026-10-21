__d("WAWebAttachMediaCollection", [
    "fbt",
    "Promise",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebAttachMediaModel",
    "WAWebBaseCollection",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebFileUtils",
    "WAWebGetMetaAiImagineEventContext",
    "WAWebHatchGating",
    "WAWebL10nFilesize",
    "WAWebLogImagineAction",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaFileErrors",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaGatingUtils",
    "WAWebMimeTypes",
    "WAWebResolveSupportedMediaTypes",
    "WAWebServerPropConstants",
    "WAWebSingleSelection",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineMediaType",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamMediaPickerStatsLogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = ((t)=>{
        function a(e) {
            let n;
            const e_chatParticipantCount = e.chatParticipantCount;
            n = t.call(this) || this;
            n.errorMsgs = null;
            n.ignored = 0;
            n.mediaPickerStatsLogger = new (o("WAWebWamMediaPickerStatsLogger")).MediaPickerStatsLogger;
            n.selection = new (r("WAWebSingleSelection"))([], function(e) {
                return e.id;
            }, "prev");
            n.isStickerMaker = false;
            n.$AttachMediaCollection$p_1 = function(e, t) {
                if (t === "focus" || t === false) {
                    n.trigger("active-change");
                }
            };
            n.mediaPickerStatsLogger.chatRecipients = e_chatParticipantCount;
            n.listenTo(n.selection, "all", n.$AttachMediaCollection$p_1);
            return n;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.removeSingleton = function(t, n) {
            let e;
            if (t) {
                if (!n) {
                    this.mediaPickerStatsLogger.logDelete(t.id);
                }
                if (t.url) {
                    window.URL.revokeObjectURL(t.url);
                }
                if ((e = t.original) != null && e.url) {
                    window.URL.revokeObjectURL(t.original.url);
                }
            }
        };
        a_prototype.remove = function(n, r) {
            const e = this;
            const a = t.prototype.remove.call(this, n, r);
            a.forEach((t)=>{
                if (t != null) {
                    o("WAWebAttachMediaGetters").clearAttachMediaGetterCacheFor(t);
                }
                e.removeSingleton(t, r);
            });
            this.selection.init(this.getPreviewableMedias(), true);
            return a;
        };
        a_prototype.delete = function() {
            const e = this;
            this.forEach((e)=>o("WAWebAttachMediaGetters").clearAttachMediaGetterCacheFor(e));
            t.prototype.delete.call(this);
            this.forEach((t)=>e.removeSingleton(t));
            this.selection.init(this.getPreviewableMedias(), true);
        };
        a_prototype.reorder = function(t, n) {
            this.reorderMutate(t, n);
            this.selection.init(this.getPreviewableMedias(), true);
            return this.getPreviewableMedias();
        };
        a_prototype.replace = function(t, n) {
            const e = this.get(t);
            if (e) {
                const { quality, supportedTypes } = e;
                const at = this.indexOf(e);
                const { caption, provenanceSourceAttachment } = e;
                this.remove(e, {
                    silent: true
                });
                e.delete();
                const u = new (o("WAWebAttachMediaModel")).AttachMedia({
                    id: t,
                    caption,
                    file: this.$AttachMediaCollection$p_2(n),
                    quality,
                    supportedTypes
                });
                u.preserveProvenanceSourceAttachment(provenanceSourceAttachment);
                this.add(u, at >= 0 ? {
                    at
                } : {});
                return u.processPromise;
            }
        };
        a_prototype.getValidMedias = function() {
            return this.filter((e)=>e.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.READY || e.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING);
        };
        a_prototype.getPreviewableMedias = function() {
            return this.filter((e)=>o("WAWebAttachMediaGetters").getPreviewable(e));
        };
        a_prototype.getActive = function() {
            return this.selection.getVal();
        };
        a_prototype.setActive = function(t) {
            this.selection.setVal(t);
        };
        a_prototype.unsetActive = function() {
            this.selection.unset();
        };
        a_prototype.setNextAsActive = function() {
            const e = this.selection.list.length - 1;
            if (this.selection.index === -1 || this.selection.index === e) {
                return this.selection.getVal();
            }
            this.selection.setNext();
            return this.selection.getVal();
        };
        a_prototype.setPrevAsActive = function() {
            if (this.selection.index === -1 || this.selection.index === 0) {
                return this.selection.getVal();
            }
            this.selection.setPrev();
            return this.selection.getVal();
        };
        a_prototype.processAttachmentsForChat = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a) {
                const i = o("WAWebResolveSupportedMediaTypes").resolveSupportedMediaTypesForChat(n);
                const length = this.getPreviewableMedias().length;
                const s = r ?? o("WAWebResolveSupportedMediaTypes").resolveMaxNumberSelectableMedia(e.length + length, n.id);
                let u = null;
                if (o("WAWebBotUtils").isHatchBot(n.id)) {
                    u = o("WAWebHatchGating").getHatchDocumentUploadSizeLimitBytes();
                } else if (o("WAWebBotUtils").isMetaAiBot(n.id)) {
                    u = o("WAWebBotGating").getMetaAiDocumentUploadSizeLimitBytes();
                }
                const c = o("WAWebBotUtils").isMetaAiBot(n.id) ? o("WAWebBotGating").getMetaAiVideoUploadSizeLimitBytes() : null;
                yield this.processAttachments(e, t, i, s, a, u, c);
                if (o("WAWebBotUtils").isMetaAiBot(n.id)) {
                    d(this, n);
                }
            });
            function t(t, n, r, o, a) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.processAttachments = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, fileOrigin, supportedTypes, l, s, u, c) {
                const d = this;
                const length = this.getPreviewableMedias().length;
                const p = t.length + length > l ? Math.max(l - length, 0) : t.length;
                const _ = t.length - p;
                if (p === 0) {
                    if (_) {
                        this.trigger("max_upload_limit", _);
                    }
                } else {
                    this.ignore(_);
                }
                const f = t.slice(0, p).map((t)=>{
                    let file = d.$AttachMediaCollection$p_2(t);
                    if (u != null) {
                        file = file.then((e)=>{
                            if (e.type === o("WAWebFileUtils").FILETYPE.DOCUMENT && e.file.size > u) {
                                throw new (r("WAWebMediaFileTooLargeError"))("document", u, e.file.size);
                            }
                            return e;
                        });
                    }
                    if (c != null) {
                        file = file.then((e)=>{
                            if (e.type === o("WAWebFileUtils").FILETYPE.VIDEO && e.file.size > c) {
                                throw new (r("WAWebMediaFileTooLargeError"))("video", c, e.file.size);
                            }
                            return e;
                        });
                    }
                    const s = new (o("WAWebAttachMediaModel")).AttachMedia({
                        id: o("WAWebAttachMediaModel").nextAttachMediaId(),
                        file,
                        fileOrigin,
                        supportedTypes
                    });
                    if (!(t instanceof (e || (e = n("Promise"))))) {
                        const filename = t.filename ?? t.file?.name;
                        const mimetype = t.mimetype ?? t.file?.type;
                        if (filename != null || mimetype != null) {
                            s.set({
                                filename,
                                mimetype
                            });
                        }
                    }
                    return s;
                });
                this.add(f);
                const g = this.getActive();
                this.unsetActive();
                f.forEach((e)=>{
                    d.listenTo(e, o("WAWebAttachMediaGetters").PREVIEWABLE_ROOT_EVENTS_STR, function() {
                        d.$AttachMediaCollection$p_3(f, g);
                    });
                });
                (e || (e = n("Promise"))).all(t).then(()=>{
                    d.$AttachMediaCollection$p_3(f, g);
                });
                yield e.all(f.map((e)=>e.processPromise));
                if (s) {
                    s();
                }
                f.forEach((e)=>d.$AttachMediaCollection$p_4(e, fileOrigin));
                return this.$AttachMediaCollection$p_3(f, g);
            });
            function a(e, n, r, o, a, i, l) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.$AttachMediaCollection$p_3 = function(t, n) {
            if (!this.getActive() && !this.getModelsArray().some((e)=>e.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING && !o("WAWebAttachMediaGetters").getPreviewable(e))) {
                let e = t.find((e)=>o("WAWebAttachMediaGetters").getPreviewable(e));
                if (!e) {
                    e = n;
                }
                this.selection.init(this.getPreviewableMedias());
                if (e) {
                    this.setActive(e);
                }
            }
        };
        a_prototype.$AttachMediaCollection$p_4 = function(t, n) {
            if (n != null) {
                const e = t.isGif ? "gif" : t.type;
                this.mediaPickerStatsLogger.logAdd(t.id, e, n);
            }
        };
        a_prototype.$AttachMediaCollection$p_2 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = yield (e || (e = n("Promise"))).resolve(t);
                if (r.filename == null || r.filename === "") {
                    r.filename = r.file.name;
                }
                if (r.mimetype == null || r.mimetype === "") {
                    r.mimetype = r.file.type;
                }
                if (!r.type) {
                    r.type = o("WAWebFileUtils").typeFromMimetype(r.file.type);
                }
                if (!r.type && r.mimetype != null && r.mimetype !== "") {
                    r.type = o("WAWebFileUtils").typeFromMimetype(r.mimetype);
                }
                return r;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.ignore = function(t) {
            if (t > 0) {
                this.ignored += t;
            }
        };
        a_prototype.uiProcessMsgs = function(t, n) {
            let e = [];
            let a;
            let i = 0;
            let l = 0;
            let u = 0;
            let c = 0;
            let d = null;
            let m = 0;
            let p = 0;
            let _ = 0;
            let f = 0;
            let g = 0;
            let h = 0;
            let y = 0;
            let C = false;
            const b = o("WAWebL10nFilesize").getL10nFilesize(o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES);
            const v = o("WAWebL10nFilesize").getL10nFilesize(o("WAWebServerPropConstants").VCARD_MAX_SIZE_KB * 1024);
            const S = n === o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS;
            const R = S ? o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY : null;
            this.forEach((e)=>{
                if (!e.uiProcessed && (!a && o("WAWebAttachMediaGetters").getPreviewable(e) && (a = e), e.state !== o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING && (e.uiProcessed = true, e.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR))) {
                    if (e.exception instanceof r("WAWebMediaFileTooLargeError")) {
                        switch(e.exception.mediaType){
                            case o("WAWebFileUtils").FILETYPE.IMAGE:
                                i += 1;
                                break;
                            case o("WAWebFileUtils").FILETYPE.VIDEO:
                                l += 1;
                                break;
                            case o("WAWebFileUtils").FILETYPE.AUDIO:
                                u += 1;
                                break;
                            case o("WAWebFileUtils").FILETYPE.DOCUMENT:
                                if (e.isVcardOverMmsDocument) {
                                    m += e.documentPageCount;
                                } else {
                                    c += 1;
                                    d = e.exception.uploadLimit;
                                }
                                break;
                        }
                    } else if (e.exception instanceof o("WAWebMediaFileErrors").MediaFileEmpty) {
                        switch(e.getFileType()){
                            case o("WAWebFileUtils").FILETYPE.IMAGE:
                                p += 1;
                                break;
                            case o("WAWebFileUtils").FILETYPE.VIDEO:
                                _ += 1;
                                break;
                            case o("WAWebFileUtils").FILETYPE.AUDIO:
                                f += 1;
                                break;
                            case o("WAWebFileUtils").FILETYPE.DOCUMENT:
                                if (e.isVcardOverMmsDocument) {
                                    h += e.documentPageCount;
                                } else {
                                    g += 1;
                                }
                                break;
                        }
                    } else {
                        if (e.exception instanceof o("WAWebMediaFileErrors").MediaFileFailedLoad) {
                            C = true;
                        } else {
                            y += 1;
                        }
                    }
                }
            });
            if (i > 0) {
                e.push(s._("_j{\"*\":\"{number} images you tried adding are larger than the {maxSize} limit.\",\"_1\":\"1 image you tried adding is larger than the {maxSize} limit.\"}", [
                    s._plural(i, "number"),
                    s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("image", R)))
                ]));
            }
            if (l > 0) {
                e.push(s._("_j{\"*\":\"{number} videos you tried adding are larger than the {maxSize} limit.\",\"_1\":\"1 video you tried adding is larger than the {maxSize} limit.\"}", [
                    s._plural(l, "number"),
                    s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("video", R)))
                ]));
            }
            if (u > 0) {
                e.push(s._("_j{\"*\":{\"*\":\"{number} files you tried adding are larger than the {maxSize} limit.\"},\"_1\":{\"_1\":\"1 file you tried adding is larger than the {maxSize} limit.\"}}", [
                    s._plural(u, "number"),
                    s._plural(u),
                    s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("audio", R)))
                ]));
            }
            if (c > 0) {
                const L = d != null ? o("WAWebL10nFilesize").getL10nFilesize(d) : b;
                e.push(s._("_j{\"*\":{\"*\":\"{number} documents you tried adding are larger than the {maxSize} limit.\"},\"_1\":{\"_1\":\"1 document you tried adding is larger than the {maxSize} limit.\"}}", [
                    s._plural(c, "number"),
                    s._plural(c),
                    s._param("maxSize", L)
                ]));
            }
            if (m > 0) {
                e.push(s._("_j{\"*\":\"The contacts that you tried to add are larger than the {maxSize} limit.\",\"_1\":\"The contact that you tried to add is larger than the {maxSize} limit.\"}", [
                    s._plural(m),
                    s._param("maxSize", v)
                ]));
            }
            if (p > 0) {
                e.push(s._("_j{\"*\":\"{number} images you tried adding have no content.\",\"_1\":\"1 image you tried adding has no content.\"}", [
                    s._plural(p, "number")
                ]));
            }
            if (_ > 0) {
                e.push(s._("_j{\"*\":{\"*\":\"{number} videos you tried adding have no content.\"},\"_1\":{\"_1\":\"1 video you tried adding has no content.\"}}", [
                    s._plural(_, "number"),
                    s._plural(_)
                ]));
            }
            if (f > 0) {
                e.push(s._("_j{\"*\":{\"*\":\"{number} files you tried adding have no content.\"},\"_1\":{\"_1\":\"1 file you tried adding has no content.\"}}", [
                    s._plural(f, "number"),
                    s._plural(f)
                ]));
            }
            if (g > 0) {
                e.push(s._("_j{\"*\":{\"*\":\"{number} documents you tried adding have no content.\"},\"_1\":{\"_1\":\"1 document you tried adding has no content.\"}}", [
                    s._plural(g, "number"),
                    s._plural(g)
                ]));
            }
            if (h > 0) {
                e.push(s._("_j{\"*\":{\"*\":\"{number} contacts that you tried to add have no content.\"},\"_1\":{\"_1\":\"1 contact that you tried to add has no content.\"}}", [
                    s._plural(h, "number"),
                    s._plural(h)
                ]));
            }
            if (y > 0) {
                e.push(s._("_j{\"*\":\"{number} files you tried adding are not supported.\",\"_1\":\"1 file you tried adding is not supported.\"}", [
                    s._plural(y, "number")
                ]));
            }
            if (C) {
                e = [];
                e.push(s._("The item you tried adding failed to load."));
            }
            if (e.length > 1) {
                e = [];
                const E = i + l + u + c;
                const k = p + _ + f + g;
                const I = E + k + y;
                if (y === 0) {
                    if (E !== 0) {
                        e.push(s._("_j{\"*\":\"{number} files you tried adding are larger than the {maxSize} limit.\",\"_1\":\"1 file you tried adding is larger than the {maxSize} limit.\"}", [
                            s._plural(E, "number"),
                            s._param("maxSize", b)
                        ]));
                    }
                    if (k !== 0) {
                        e.push(s._("_j{\"*\":\"{number} files you tried adding have no content.\",\"_1\":\"1 file you tried adding has no content.\"}", [
                            s._plural(k, "number")
                        ]));
                    }
                } else {
                    e.push(s._("_j{\"*\":\"{number} files could not be added.\",\"_1\":\"1 file could not be added.\"}", [
                        s._plural(I, "number")
                    ]));
                }
            }
            const errorMsgs = e.join(" ");
            this.errorMsgs = errorMsgs;
            const length = this.getPreviewableMedias().length;
            this.ignore(length - t);
            const ignored = this.ignored;
            this.ignored = 0;
            if (ignored) {
                this.trigger("max_upload_limit", ignored);
            }
            if (y > 0) {
                this.trigger("files_not_supported");
            }
            return {
                errorMsgs
            };
        };
        a_prototype.canSendMedia = function(t) {
            const e = c(t);
            if (e != null && o("WAWebMimeTypes").isPdfDocument(e) && t.state !== o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR && o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()) {
                return true;
            }
            return t.state !== o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING || o("WAWebAttachMediaGetters").getPreviewable(t);
        };
        a_prototype.canSend = function() {
            const e = this;
            return this.getModelsArray().every((t)=>e.canSendMedia(t));
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebAttachMediaModel").AttachMedia;
    function c(e) {
        if (e.mimetype != null && e.mimetype !== "") {
            return e.mimetype;
        }
        const e_file = e.file;
        if (e_file instanceof File) {
            return e_file.type;
        }
        return null;
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const maxIndex = e.countWhere(function(e) {
                return e.exception instanceof r("WAWebMediaFileTooLargeError") && e.exception.mediaType === o("WAWebFileUtils").FILETYPE.DOCUMENT;
            });
            if (maxIndex !== 0) {
                o("WAWebLogImagineAction").logImagineAction({
                    action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_SIZE_EXCEED_LIMIT,
                    mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.DOCUMENT,
                    maxIndex,
                    eventContext: yield o("WAWebGetMetaAiImagineEventContext").getMetaAiImagineEventContext(t)
                });
            }
        });
        return m.apply(this, arguments);
    }
    l.default = u;
}, 226);