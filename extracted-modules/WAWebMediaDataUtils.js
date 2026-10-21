__d("WAWebMediaDataUtils", [
    "Promise",
    "WABase64",
    "WALogger",
    "WAPromiseCallSync",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebDecodeWebpToRgba",
    "WAWebDocumentUploadEnrichment",
    "WAWebFileTypeFromBytes",
    "WAWebFileUtils",
    "WAWebImageUtils",
    "WAWebMediaAnalyzer",
    "WAWebMediaCleanFileName",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaOpaqueData",
    "WAWebMediaPreProcessQpl",
    "WAWebMediaTypes",
    "WAWebMimeTypes",
    "WAWebMmsMediaTypes",
    "WAWebNetworkGetResponseIfOnline",
    "WAWebURLUtils",
    "WAWebVcardParsingUtils",
    "WAWebVideoTranscoderWamEvent",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumVideoTranscoderAlgorithmType",
    "WAWebWamEnumVideoTranscoderResultType",
    "WAWebWamEnumVideoTranscoderSourceFormatType",
    "WAWebWamEnumVideoTranscoderTargetFormatType",
    "WAWebWaveformUtils",
    "WAWebWebpParseWebp",
    "WAWebXHR",
    "asyncToGeneratorRuntime",
    "cr:10296",
    "err",
    "isStringNullOrEmpty",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 20000;
    function f(e) {
        return A((()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                t(e);
                const o = new Image;
                yield new (p || (p = n("Promise")))(function(t, n) {
                    o.onload = t;
                    o.onabort = function() {
                        n(r("err")("getImageWidthHeight onabort"));
                    };
                    o.onerror = function() {
                        n(r("err")("getImageWidthHeight onerror"));
                    };
                    o.src = e.url();
                });
                return {
                    width: o.naturalWidth,
                    height: o.naturalHeight
                };
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    function g(e) {
        return new (p || (p = n("Promise")))(function(t, n) {
            const o = new Image;
            const a = window.URL.createObjectURL(e);
            o.onload = function() {
                const e = {
                    width: o.naturalWidth,
                    height: o.naturalHeight
                };
                window.URL.revokeObjectURL(a);
                t(e);
            };
            o.onabort = function() {
                window.URL.revokeObjectURL(a);
                n(r("err")("getImageWidthHeight onabort"));
            };
            o.onerror = function() {
                window.URL.revokeObjectURL(a);
                n(r("err")("getImageWidthHeight onerror"));
            };
            o.src = a;
        });
    }
    function h(t) {
        return o("WAWebFileUtils").blobToArrayBuffer(t).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "MediaUtils error: ",
                ""
            ])), t);
            throw t;
        });
    }
    function y(e) {
        return A(function(t) {
            t(e);
            const n = e.getBlob();
            if (n) {
                return h(n);
            }
            const a = r("nullthrows")(e.getBase64(), "b64 should be defined");
            return o("WABase64").decodeB64(a);
        });
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield h(e);
            return r("WAWebDecodeWebpToRgba")(t);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield h(e);
            return o("WAWebWebpParseWebp").parseWebp(t);
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return A((()=>{
            const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                n(e);
                const a = yield o("WAWebMediaLoad").transcode(e.forceToBlob(), t).then((e)=>r("WAWebMediaOpaqueData").createFromData(e, e.type));
                n(a);
                a.autorelease();
                return a;
            });
            return function(e) {
                return a.apply(this, arguments);
            };
        })());
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { maxDimension, minDimension, transparency }) {
            const i = yield o("WAWebImageUtils").rotateAndResize(e, maxDimension, o("WAWebImageUtils").BLOB, {
                transparency,
                minDimension
            });
            const { height, images, width } = i;
            if (images == null || images.blob == null) {
                throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad;
            }
            return {
                width,
                height,
                size: images.blob.size
            };
        });
        return E.apply(this, arguments);
    }
    function k(e, t, n) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { maxDimension, minDimension, transparency }, n) {
            const s = e.forceToBlob();
            const u = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("image", s);
            try {
                const d = yield o("WAWebImageUtils").rotateAndResize(s, maxDimension, o("WAWebImageUtils").BLOB | o("WAWebImageUtils").CANVAS, {
                    transparency,
                    minDimension
                });
                const { height, images, width } = d;
                if (images == null || images.canvas == null) {
                    throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad;
                }
                const g = yield o("WAWebImageUtils").rotateAndResize(images.canvas, o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE, o("WAWebImageUtils").DATA_URL | o("WAWebImageUtils").CANVAS);
                const h = g.images;
                if (h == null || h.canvas == null) {
                    throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad;
                }
                const y = o("WAWebCanvasUtils").getResizedDataUrl(h.canvas, "image/jpeg", _);
                const C = y != null && y !== "" ? r("WAWebURLUtils").parseDataURL(y).data : null;
                const b = n === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY || n === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_CAPTURE || n === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_MEDIA_STRIP || n === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_GIF;
                let v = null;
                let fullPreviewSize = null;
                if (b && images.canvas != null) {
                    const R = yield o("WAWebImageUtils").rotateAndResize(images.canvas, o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE, o("WAWebImageUtils").DATA_URL);
                    const L = R.images;
                    const E = L?.dataUrl;
                    if (E != null && E !== "") {
                        v = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(r("WAWebURLUtils").parseDataURL(E).data);
                        fullPreviewSize = {
                            width: o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE,
                            height: Math.round(o("WAWebMediaConstants").STATUS_IMG_THUMB_MAX_EDGE * height / width)
                        };
                    }
                }
                u.endSuccess();
                return {
                    type: o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE,
                    mediaBlob: images.blob,
                    mimetype: images.blob?.type,
                    fullWidth: width,
                    fullHeight: height,
                    preview: C,
                    fullPreviewData: v,
                    fullPreviewSize
                };
            } catch (error) {
                u.endFailWithError(error instanceof Error ? error.name : "processRawImageError", error instanceof Error ? error.message : String(error));
                throw error;
            }
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.forceToBlob();
            const n = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("sticker", t);
            try {
                const a = yield o("WAWebImageUtils").rotateAndResize(t, o("WAWebABProps").getABPropConfigValue("web_image_max_edge"), o("WAWebImageUtils").BLOB, {
                    transparency: true
                });
                const { height, images, width } = a;
                if (images == null || images.blob == null) {
                    throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad;
                }
                const u = yield o("WAWebImageUtils").toWebpSticker(images.blob);
                const c = yield r("WAWebMediaOpaqueData").createFromData(u, u.type);
                n.endSuccess();
                return {
                    type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                    mediaBlob: c,
                    mimetype: u.type,
                    fullWidth: width,
                    fullHeight: height
                };
            } catch (error) {
                n.endFailWithError(error instanceof Error ? error.name : "processRawStickerError", error instanceof Error ? error.message : String(error));
                throw error;
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ _mimetype, accessibilityLabel, asGif, asPtt, gifAttribution, opaqueData, precomputedFields, resetMediaPreview, setMediaPreview, setMimeType, setProgressPercentage }) {
            let C = false;
            try {
                let v = opaqueData.forceToBlob();
                const S = v instanceof File ? v.name : "";
                const R = new (o("WAWebVideoTranscoderWamEvent")).VideoTranscoderWamEvent({
                    sourceHeight: precomputedFields?.fullHeight,
                    sourceWidth: precomputedFields?.fullWidth,
                    sourceDuration: precomputedFields?.duration,
                    sourceFileSize: opaqueData.size(),
                    sourceFormat: asGif === true ? o("WAWebWamEnumVideoTranscoderSourceFormatType").VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.GIF : o("WAWebWamEnumVideoTranscoderSourceFormatType").VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE.VIDEO,
                    sourceMimeType: v.type,
                    sourceFileExtension: S.split(".").pop()
                });
                const L = (n("cr:10296") == null ? undefined : n("cr:10296").isWindowsHybridTranscoderEnabled()) ?? false;
                const E = v.type.startsWith("video/");
                const k = v.type === "video/mp4";
                const I = L && E && !k;
                R.startTranscoderT();
                let T = null;
                if (!I) {
                    let D = false;
                    const x = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl(E ? "video" : "audio", v);
                    let $;
                    if (E) {
                        $ = yield o("WAWebMediaAnalyzer").transcodeToMp4AndMp4RepairMux(v, !!asGif, x);
                    } else {
                        $ = yield o("WAWebMediaAnalyzer").checkAndRepairAudio(v, !!asGif, x);
                    }
                    if ($.success) {
                        const P = $.value;
                        T = P[0];
                        D = P[1];
                        x.endSuccess();
                        R.transcoderAlgorithm = D ? o("WAWebWamEnumVideoTranscoderAlgorithmType").VIDEO_TRANSCODER_ALGORITHM_TYPE.WASM_MP4_CHECK_AND_REPAIR : o("WAWebWamEnumVideoTranscoderAlgorithmType").VIDEO_TRANSCODER_ALGORITHM_TYPE.WEB_MEDIA_WORKER;
                    } else {
                        x.endFailWithError($.error.error, $.error.errorDetail);
                    }
                }
                if (I || !T && L) {
                    R.transcoderAlgorithm = o("WAWebWamEnumVideoTranscoderAlgorithmType").VIDEO_TRANSCODER_ALGORITHM_TYPE.HYBRID_BRIDGE;
                    const N = yield n("cr:10296") == null ? undefined : n("cr:10296").transcodeVideo({
                        file: v,
                        onProgress: setProgressPercentage,
                        resetMediaPreview,
                        setMediaPreview,
                        setMimeType
                    });
                    if (N != null) {
                        const M = N[0];
                        const w = N[1];
                        v = M;
                        C = w;
                        T = {
                            type: v.type,
                            file: v,
                            isGif: false
                        };
                    }
                }
                R.markTranscoderT();
                if (!T) {
                    R.set({
                        transcoderResult: o("WAWebWamEnumVideoTranscoderResultType").VIDEO_TRANSCODER_RESULT_TYPE.FAILED
                    });
                    R.commit();
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "processRawAudioVideo bad video file ",
                        ""
                    ])), v.type);
                    throw new (o("WAWebMediaFileErrors")).InvalidMediaCheckRepairFailedType;
                }
                const { type, file } = T;
                R.set({
                    targetFileSize: file.size
                });
                const O = asGif === true || T.isGif === true;
                e: {
                    const B = o("WAWebFileUtils").typeFromMimetype(type);
                    if (B === o("WAWebFileUtils").FILETYPE.VIDEO) {
                        if (asPtt) {
                            R.set({
                                transcoderResult: o("WAWebWamEnumVideoTranscoderResultType").VIDEO_TRANSCODER_RESULT_TYPE.FAILED
                            });
                            R.commit();
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "Assertion failed!"
                            ]))).sendLogs("media-fault: ptt became video");
                            throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType;
                        }
                        R.set({
                            targetFormat: o("WAWebWamEnumVideoTranscoderTargetFormatType").VIDEO_TRANSCODER_TARGET_FORMAT_TYPE.VIDEO,
                            transcoderResult: o("WAWebWamEnumVideoTranscoderResultType").VIDEO_TRANSCODER_RESULT_TYPE.SUCCEEDED
                        });
                        const W = {
                            type: o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO,
                            mediaBlob: file,
                            mimetype: type,
                            isGif: O,
                            gifAttribution: O ? gifAttribution || 0 : undefined,
                            accessibilityLabel,
                            size: file.size
                        };
                        if (precomputedFields && precomputedFields.duration != null && precomputedFields.fullHeight != null && precomputedFields.fullHeight !== 0 && precomputedFields.fullWidth != null && precomputedFields.fullWidth !== 0 && !r("isStringNullOrEmpty")(precomputedFields.preview)) {
                            const sourceDuration = precomputedFields.duration;
                            R.set({
                                sourceHeight: precomputedFields.fullHeight,
                                sourceWidth: precomputedFields.fullWidth,
                                sourceDuration
                            });
                            R.commit();
                            return babelHelpers.extends({}, W, {
                                fullWidth: precomputedFields.fullWidth,
                                fullHeight: precomputedFields.fullHeight,
                                preview: precomputedFields.preview,
                                duration: sourceDuration?.toString()
                            });
                        }
                        const U = yield o("WAWebImageUtils").generateVideoThumbsAndDuration({
                            file,
                            maxDimensions: [
                                o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE,
                                o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE
                            ],
                            debugHint: "processRawAudioVideo",
                            logContext: {
                                callsite: "PROCESS_RAW_AUDIO_VIDEO",
                                mediaType: O ? "GIF" : "VIDEO"
                            }
                        });
                        const { duration, thumbs } = U;
                        const G = thumbs[0];
                        const z = thumbs[1];
                        const j = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(r("WAWebURLUtils").parseDataURL(z.url).data);
                        R.set({
                            sourceHeight: G.fullHeight,
                            sourceWidth: G.fullWidth,
                            sourceDuration: duration
                        });
                        R.commit();
                        return babelHelpers.extends({}, W, {
                            fullWidth: G.fullWidth,
                            fullHeight: G.fullHeight,
                            preview: r("WAWebURLUtils").parseDataURL(G.url).data,
                            fullPreviewData: j,
                            duration: duration.toString()
                        });
                        break e;
                    }
                    if (B === o("WAWebFileUtils").FILETYPE.AUDIO) {
                        const X = precomputedFields?.duration ?? (yield o("WAWebFileUtils").getAudioDuration(file));
                        const waveform = precomputedFields?.waveform ?? (yield o("WAWebWaveformUtils").computeWaveform(file));
                        return {
                            type: asPtt ? o("WAWebMediaTypes").OUTWARD_TYPES.PTT : o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO,
                            mediaBlob: file,
                            mimetype: type,
                            duration: X.toString(),
                            waveform
                        };
                    }
                    if (B === o("WAWebFileUtils").FILETYPE.IMAGE || B === o("WAWebFileUtils").FILETYPE.DOCUMENT || B === o("WAWebFileUtils").FILETYPE.STICKER || B === o("WAWebFileUtils").FILETYPE.STICKER_PACK) {
                        R.set({
                            transcoderResult: o("WAWebWamEnumVideoTranscoderResultType").VIDEO_TRANSCODER_RESULT_TYPE.FAILED
                        });
                        R.commit();
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("media-fault: audio/video became other");
                        throw r("err")(`audio/video became ${type}`);
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${B}`);
                }
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "processRawAudioVideo error: ",
                    ""
                ])), error);
                if (C && resetMediaPreview != null) {
                    resetMediaPreview();
                }
                throw error;
            }
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const e_type = e.type;
            if (e_type) {
                if (e_type === "image/svg+xml") {
                    throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType(`disallowed mimetype ${e_type}`);
                }
                if (o("WAWebMimeTypes").DOC_MIMES === "*" || o("WAWebMimeTypes").DOC_MIMES.includes(e_type)) {
                    return e_type;
                }
                throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType(`disallowed mimetype ${e_type}`);
            } else {
                const a = Math.min(o("WAWebMimeTypes").MIMETYPE_DETERMINING_LENGTH, e.size);
                const i = yield h(e.slice(0, a));
                const l = new Uint8Array(i);
                if (o("WAWebMimeTypes").isMsCompoundFileBinaryFormat(l.subarray(0, 8))) {
                    let s;
                    if (t != null && (s = o("WAWebFileUtils").getMimeTypeForFilepath(t)) != null) {
                        return s;
                    }
                    return o("WAWebMimeTypes").MSCFB_MIME;
                }
                const u = o("WAWebFileTypeFromBytes").fileTypeFromBytes(l);
                if (u != null && u.mime) {
                    const c = o("WAWebMimeTypes").isAllowedDocumentMimetype(u.mime, t, true);
                    if (!r("isStringNullOrEmpty")(c)) {
                        return c;
                    }
                } else if (!r("isStringNullOrEmpty")(t)) {
                    const d = o("WAWebFileUtils").getMimeTypeForFilepath(t);
                    if (!r("isStringNullOrEmpty")(d)) {
                        return d;
                    }
                }
                throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType(`type: ${String(e.type)} name: ${String(t)}`);
            }
        });
        return N.apply(this, arguments);
    }
    function M(e, t, n, r, o, a) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, isVcardOverMmsDocument, i, l, s) {
            const u = e.forceToBlob();
            const c = o("WAWebMediaPreProcessQpl").startMediaPreProcessQpl("document", u);
            try {
                const _ = o("WAWebMediaCleanFileName").cleanFilename(u.name || (t ?? ""));
                const f = yield P(u, _);
                const g = isVcardOverMmsDocument ? o("WAWebFileUtils").blobToText(u) : null;
                const h = yield (p || (p = n("Promise"))).all([
                    o("WAWebDocumentUploadEnrichment").enrich(u, f, s),
                    g
                ]);
                const y = h[0];
                const C = h[1];
                const documentPreview = y.pdfImg;
                const v = documentPreview?.microThumbnail?.dataUrl ?? documentPreview?.thumbUrl;
                const S = r("isStringNullOrEmpty")(v) ? null : r("WAWebURLUtils").parseDataURL(v).data;
                const R = yield r("WAWebMediaOpaqueData").createFromData(u, f);
                c.endSuccess();
                return {
                    type: l,
                    mediaBlob: R,
                    mimetype: f,
                    filename: _ || undefined,
                    documentPreview,
                    preview: S,
                    fullPreviewData: documentPreview?.fullPreviewData,
                    fullPreviewSize: documentPreview ? {
                        width: documentPreview.width,
                        height: documentPreview.height
                    } : null,
                    pageCount: i ?? documentPreview?.pdfPages,
                    isPasswordProtected: y.isPasswordProtected,
                    isVcardOverMmsDocument,
                    parsedVcards: C ? o("WAWebVcardParsingUtils").parseMultiVcard(C) : null
                };
            } catch (error) {
                c.endFailWithError(error instanceof Error ? error.name : "processRawDocumentError", error instanceof Error ? error.message : String(error));
                throw error;
            }
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        const t = [];
        function n(e) {
            e.retain();
            t.push(e);
        }
        return o("WAPromiseCallSync").promiseCallSync(e, null, n).finally(()=>{
            for(let e = 0; e < t.length; e++){
                t[e].autorelease();
            }
        });
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebNetworkGetResponseIfOnline")({
                data: null,
                method: "GET",
                responseType: o("WAWebXHR").RESP_TYPE.ARRAY_BUFFER,
                url: e
            });
            if (t) {
                return (p || (p = n("Promise"))).resolve({
                    result: t.response,
                    status: t.status
                });
            }
            return (p || (p = n("Promise"))).resolve(null);
        });
        return O.apply(this, arguments);
    }
    function B() {
        return !!o("WAWebMediaLoad").canPlayOgg;
    }
    function W(e, t) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            t.retain();
            let n;
            let a;
            try {
                switch(e.type){
                    case o("WAWebMediaTypes").TYPE.VIDEO:
                    case o("WAWebMediaTypes").TYPE.PTV:
                        {
                            const i = t.forceToBlob();
                            const l = yield o("WAWebImageUtils").generateVideoThumbsAndDuration({
                                file: i,
                                maxDimensions: [
                                    o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE
                                ],
                                debugHint: "attachBlobAndGatherAndSetMetadata",
                                logContext: {
                                    callsite: "GATHER_AND_SET_METADATA",
                                    mediaType: e.type === o("WAWebMediaTypes").TYPE.PTV ? "PTV" : "VIDEO"
                                }
                            });
                            const s = l.thumbs;
                            const u = s[0];
                            const c = l.duration;
                            const d = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(r("WAWebURLUtils").parseDataURL(u.url).data);
                            n = {
                                mediaBlob: t,
                                renderableUrl: t.url(),
                                fullWidth: u.fullWidth,
                                fullHeight: u.fullHeight,
                                duration: c !== undefined ? `${Math.ceil(c)}` : undefined,
                                fullPreviewData: d
                            };
                            break;
                        }
                    case o("WAWebMediaTypes").TYPE.AUDIO:
                        {
                            const p = yield R(t);
                            p.retain();
                            n = {
                                mediaBlob: p,
                                renderableUrl: p.url()
                            };
                            a = function() {
                                return p.autorelease();
                            };
                            break;
                        }
                    default:
                        if (e.type === o("WAWebMediaTypes").TYPE.IMAGE || e.type === o("WAWebMediaTypes").TYPE.STICKER) {
                            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "object type: ",
                                ""
                            ])), e.type || "").sendLogs("Entering gatherAndSetMetadata (with OpaqueData) unexpectedly");
                        }
                        n = {
                            mediaBlob: t,
                            renderableUrl: t.url()
                        };
                }
                e.consolidate(n);
            } catch (error) {
                if (error instanceof o("WAWebMediaLoadErrors").MediaUnsupportedError) {
                    e.consolidate({
                        mediaBlob: t,
                        renderableUrl: t.url()
                    });
                } else {
                    throw error;
                }
            } finally{
                t.autorelease();
                if (a != null) {
                    a();
                }
            }
        });
        return q.apply(this, arguments);
    }
    function U(e) {
        return e === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO;
    }
    function V(e) {
        const t = e === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER;
        const n = e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.GIF || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_GIF || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PPIC || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTV || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTV || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.TEMPLATE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO;
        return t || n;
    }
    function H(e, t) {
        return new (p || (p = n("Promise")))(function(n) {
            const o = new Image;
            o.setAttribute("crossorigin", "anonymous");
            o.onload = function() {
                const e = t.map(({ height, imageFormat, imageFormatOptions, keepAspectRatio, minHeight, minWidth, width })=>{
                    if (minWidth != null && o.width < minWidth || minHeight != null && o.height < minHeight) {
                        return null;
                    }
                    const c = document.createElement("canvas");
                    const d = r("nullthrows")(c.getContext("2d"));
                    let m = 0;
                    let p = 0;
                    let _;
                    let f;
                    if (o.height > o.width) {
                        const g = o.height / o.width;
                        _ = width;
                        f = g * width;
                        p = -(f - height) / 2;
                    } else {
                        const h = o.width / o.height;
                        f = height;
                        _ = h * height;
                        m = -(_ - width) / 2;
                    }
                    if (keepAspectRatio === true) {
                        c.width = _;
                        c.height = f;
                    } else {
                        c.width = width;
                        c.height = height;
                    }
                    d.drawImage(o, m, p, _, f);
                    return {
                        dataUrl: c.toDataURL(imageFormat, imageFormatOptions).replace("data:image/jpeg;base64,", ""),
                        width: c.width,
                        height: c.height
                    };
                });
                n(e);
            };
            o.src = e;
        });
    }
    function G(e) {
        if (e) {
            if (e.fullPreviewData) {
                return e.fullPreviewData.url();
            }
            if (e.preview instanceof r("WAWebMediaOpaqueData")) {
                return e.preview.url();
            }
            return null;
        }
        return null;
    }
    l.getImageWidthHeight = f;
    l.getImageWidthHeightNoOpaque = g;
    l.opaqueDataToArrayBuffer = y;
    l.decodeWebpToRGBANoOpaque = C;
    l.parseWebpNoOpaque = v;
    l.getImageMetadata = L;
    l.processRawImage = k;
    l.processRawSticker = T;
    l.processRawAudioVideo = x;
    l.getRawDocumentMimetype = P;
    l.processRawDocument = M;
    l.fetchMedia = F;
    l.canPlayOgg = B;
    l.attachBlobAndGatherAndSetMetadata = W;
    l.shouldUseMediaCache = U;
    l.shouldUseLruMediaStore = V;
    l.getResizedThumbData = H;
    l.getHighestQualityThumbnailUrl = G;
}, 98);