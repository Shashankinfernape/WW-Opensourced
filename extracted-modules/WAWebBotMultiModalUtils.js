__d("WAWebBotMultiModalUtils", [
    "WAWebBotGating",
    "WAWebBotMultiModalToasts",
    "WAWebFileUtils",
    "WAWebResolveSupportedMediaTypes"
], function(t, n, r, o, a, i, l) {
    function e() {
        return Array.from(s(), function(e) {
            return `.${e}`;
        }).join(",");
    }
    function s() {
        return new Set(o("WAWebBotGating").getMetaAiSupportedFileTypes().split(",").map((e)=>e.trim().toLowerCase()).filter((e)=>e !== ""));
    }
    function u(e) {
        const t = s();
        const n = o("WAWebFileUtils").getFileExtension(e.name);
        return n != null && t.has(n);
    }
    function c(e) {
        const t = new Set(e.map((e)=>o("WAWebFileUtils").typeFromMimetype(e.type)));
        return t.size > 1;
    }
    function d(e, errors) {
        const n = new Set;
        if (o("WAWebBotGating").isMetaAiImageInputEnabled()) {
            n.add(o("WAWebFileUtils").FILETYPE.IMAGE);
        }
        if (o("WAWebBotGating").isMetaAiVideoInputEnabled()) {
            n.add(o("WAWebFileUtils").FILETYPE.VIDEO);
        }
        if (o("WAWebBotGating").isMetaAiDocUploadEnabled()) {
            n.add(o("WAWebFileUtils").FILETYPE.DOCUMENT);
        }
        const r = new Set;
        const a = e.filter((e)=>{
            const t = o("WAWebFileUtils").typeFromMimetype(e.file.type);
            if (n.has(t)) {
                return true;
            }
            r.add(t);
            return false;
        });
        if (r.size > 0) {
            errors.push({
                type: "unsupported_mime_types",
                fileTypes: Array.from(r)
            });
        }
        return a;
    }
    function m(e) {
        return e.filter((e)=>{
            const t = o("WAWebFileUtils").typeFromMimetype(e.file.type);
            if (t !== o("WAWebFileUtils").FILETYPE.DOCUMENT) {
                return true;
            }
            return u(e.file);
        });
    }
    function p(e, t, n) {
        const errors = [];
        const o = d(e, errors);
        if (o.length === 0) {
            return {
                validAttachments: [],
                errors
            };
        }
        if (c(o.map((e)=>e.file))) {
            errors.push({
                type: "mixed_media"
            });
            return {
                validAttachments: [],
                errors
            };
        }
        if (n != null && n.size > 0 && !g(o, n)) {
            errors.push({
                type: "mixed_media"
            });
            return {
                validAttachments: [],
                errors
            };
        }
        const a = m(o);
        if (a.length < o.length) {
            if (a.length > 0) {
                errors.push({
                    type: "some_items_failed",
                    count: o.length - a.length
                });
            } else {
                errors.push({
                    type: "unsupported_file_format"
                });
            }
        }
        if (a.length === 0) {
            return {
                validAttachments: [],
                errors
            };
        }
        const i = _(a, errors);
        if (i.length === 0) {
            return {
                validAttachments: [],
                errors
            };
        }
        const validAttachments = h(i, t, errors);
        return {
            validAttachments,
            errors
        };
    }
    function _(e, errors) {
        const n = o("WAWebBotGating").getMetaAiVideoUploadSizeLimitBytes();
        const r = e.filter((e)=>!f(e, n));
        if (r.length < e.length) {
            errors.push({
                type: "media_size_too_large",
                maxMb: Math.floor(n / (1024 * 1024))
            });
        }
        return r;
    }
    function f(e, t) {
        return o("WAWebFileUtils").typeFromMimetype(e.file.type) === o("WAWebFileUtils").FILETYPE.VIDEO && e.file.size > t;
    }
    function g(e, t) {
        if (t.size !== 1) {
            return false;
        }
        const n = o("WAWebFileUtils").typeFromMimetype(e[0].file.type);
        return t.has(n);
    }
    function h(e, t, errors) {
        const r = o("WAWebFileUtils").typeFromMimetype(e[0].file.type);
        const a = o("WAWebResolveSupportedMediaTypes").resolveMaxNumberSelectableMedia(e.length, t, r);
        if (e.length <= a) {
            return e;
        }
        if (r === o("WAWebFileUtils").FILETYPE.IMAGE || r === o("WAWebFileUtils").FILETYPE.VIDEO) {
            errors.push({
                type: "media_limit_exceeded",
                limit: a
            });
        } else if (r === o("WAWebFileUtils").FILETYPE.DOCUMENT) {
            errors.push({
                type: "document_limit_exceeded",
                limit: a
            });
        }
        return e.slice(0, a);
    }
    function y(e) {
        for (const t of e){
            e: {
                const n = t;
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.type === "mixed_media") {
                    o("WAWebBotMultiModalToasts").showMixedMediaTypeToast();
                    break e;
                }
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.type === "unsupported_mime_types" && "fileTypes" in n) {
                    const r = n.fileTypes;
                    o("WAWebBotMultiModalToasts").showUnsupportedMimeTypesToast(r);
                    break e;
                }
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.type === "unsupported_file_format") {
                    o("WAWebBotMultiModalToasts").showUnsupportedFileFormatToast();
                    break e;
                }
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.type === "some_items_failed" && "count" in n) {
                    const a = n.count;
                    o("WAWebBotMultiModalToasts").showSendMediaFailedItemToast(a);
                    break e;
                }
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.type === "media_limit_exceeded" && "limit" in n) {
                    const i = n.limit;
                    o("WAWebBotMultiModalToasts").showMediaSendLimitExceededToast(i);
                    break e;
                }
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.type === "document_limit_exceeded" && "limit" in n) {
                    const l = n.limit;
                    o("WAWebBotMultiModalToasts").showDocumentUploadLimitExceededToast(l);
                    break e;
                }
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.type === "media_size_too_large" && "maxMb" in n) {
                    const s = n.maxMb;
                    o("WAWebBotMultiModalToasts").showMediaTooLargeToast(s);
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
            }
        }
    }
    function C(e, t) {
        if (e !== t) {
            if (e > 0) {
                o("WAWebBotMultiModalToasts").showSendMediaFailedItemToast(t - e);
            } else {
                o("WAWebBotMultiModalToasts").showUnsupportedFileFormatToast();
            }
        }
    }
    l.getMetaAiFilePickerAcceptOverride = e;
    l.getMetaAiSupportedFileTypesList = s;
    l.isFileTypeSupportedForMetaAi = u;
    l.hasMetaAiMixedMediaTypes = c;
    l.getSupportedMetaAiAttachments = m;
    l.validateMetaAiAttachments = p;
    l.showMetaAiAttachmentErrors = y;
    l.maybeShowUnsupportedFileToast = C;
}, 98);