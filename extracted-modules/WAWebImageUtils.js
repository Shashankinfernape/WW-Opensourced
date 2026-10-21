__d("WAWebImageUtils", [
    "Promise",
    "WACustomError",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseProps",
    "WAWebAddWebpMetadata",
    "WAWebCanvasUtils",
    "WAWebFileUtils",
    "WAWebImageGeometry",
    "WAWebMediaCacheCollection",
    "WAWebMediaCacheModel",
    "WAWebMediaJpeg",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebNoop",
    "WAWebPREGatingUtils",
    "WAWebStickerConstants",
    "WAWebThumbnailOutcomeLogger",
    "WAWebUA",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
    "nullthrows",
    "once"
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
    const h = ((e)=>{
        function t() {
            let n;
            n = e.call(this, t.message) || this;
            n.name = "BlackVideoThumbnailError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    h.message = "Generated video thumbnail is black";
    const y = ({ fullHeight, fullWidth, maxDimension, video })=>{
        const l = document.createElement("canvas");
        const s = o("WAWebImageGeometry").boundHeightWidth(fullHeight, fullWidth, maxDimension);
        const { height, width } = s;
        l.width = width;
        l.height = height;
        const d = r("nullthrows")(l.getContext("2d"));
        d.drawImage(video, 0, 0, width, height);
        const imageData = d.getImageData(0, 0, width, height);
        const p = l.toDataURL("image/jpeg");
        const thumb = {
            url: p,
            width,
            height,
            fullWidth,
            fullHeight
        };
        return {
            thumb,
            imageData
        };
    };
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const isBuggyVideoLoad = o("WAWebUA").UA.isBuggyVideoLoad;
            const reporter = R({
                context: e.logContext,
                isBuggyVideoLoad
            });
            try {
                return yield v({
                    isBuggyVideoLoad,
                    opts: e,
                    reporter
                });
            } catch (error) {
                reporter.reportError();
                throw error;
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isBuggyVideoLoad, opts, reporter }) {
            const { debugHint, file, maxDimensions, throwOnBlack } = opts;
            const C = throwOnBlack === undefined ? false : throwOnBlack;
            const b = yield o("WAWebMediaLoad").loadVideo(file);
            const { fullHeight, fullWidth, video } = b;
            if (isBuggyVideoLoad) {
                const L = 50;
                const E = 5000 / L;
                return o("WAExponentialBackoff").exponentialBackoff({
                    minTimeout: L,
                    maxTimeout: L,
                    retries: E,
                    signal: new AbortController().signal,
                    factor: 1
                }, function(t, a) {
                    const thumbs = [];
                    let c;
                    let d = 0;
                    for (c of maxDimensions){
                        const p = y({
                            video,
                            fullHeight,
                            fullWidth,
                            maxDimension: c
                        });
                        const { imageData, thumb } = p;
                        if (B(imageData)) {
                            if (a < E) {
                                if (a === 0) {
                                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "[generateVideoThumbsAndDuration] set currentTime=0"
                                    ])));
                                }
                                video.currentTime = 0;
                                return t(r("err")("retry"));
                            }
                            d++;
                            if (C) {
                                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[generateVideoThumbsAndDuration] thumb gen failed (",
                                    ")"
                                ])), debugHint).sendLogs(`thumbnail-generation-failed-${debugHint}`, {
                                    sampling: 0.001
                                });
                                reporter.reportChecked(d, a);
                                throw new h;
                            }
                        }
                        thumbs.push(thumb);
                    }
                    if (d > 0) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] ",
                            " thumb(s) failed (",
                            ")"
                        ])), d, debugHint).sendLogs(`thumbnail-generation-failed-${debugHint}`, {
                            sampling: 0.001
                        });
                    }
                    const L = {
                        duration: ~~video.seekable.end(0),
                        thumbs
                    };
                    o("WAWebMediaLoad").disposeVideo(video);
                    reporter.reportChecked(d, a);
                    return (g || (g = n("Promise"))).resolve(L);
                });
            }
            try {
                let k = 0;
                const thumbs = maxDimensions.map((e)=>{
                    const t = y({
                        video,
                        fullHeight,
                        fullWidth,
                        maxDimension: e
                    });
                    const { imageData, thumb } = t;
                    if (B(imageData) && (k++, C)) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[generateVideoThumbsAndDuration] thumb gen failed (",
                            ")"
                        ])), debugHint).sendLogs(`thumbnail-generation-failed-${debugHint}`, {
                            sampling: 0.001
                        });
                        reporter.reportChecked(k);
                        throw new h;
                    }
                    return thumb;
                });
                if (k > 0) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[generateVideoThumbsAndDuration] ",
                        " thumb(s) failed (",
                        ")"
                    ])), k, debugHint).sendLogs(`thumbnail-generation-failed-${debugHint}`, {
                        sampling: 0.001
                    });
                }
                const T = ~~video.seekable.end(0);
                reporter.reportChecked(k);
                return {
                    duration: T,
                    thumbs
                };
            } finally{
                o("WAWebMediaLoad").disposeVideo(video);
            }
        });
        return S.apply(this, arguments);
    }
    function R({ context, isBuggyVideoLoad }) {
        const a = self.performance.now();
        const branch = isBuggyVideoLoad ? "BUGGY_VIDEO_LOAD" : "NORMAL";
        const l = r("once")(o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome);
        return {
            reportChecked: function(n, r) {
                l({
                    branch,
                    checkPerformed: true,
                    context,
                    generationDurationMs: self.performance.now() - a,
                    isBlack: n > 0,
                    retryCount: r
                });
            },
            reportError: function() {
                l({
                    branch,
                    checkPerformed: false,
                    context,
                    generationDurationMs: self.performance.now() - a,
                    outcome: "ERROR"
                });
            }
        };
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ dHeight, dWidth, outputType = o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL, sHeight, src, sWidth, sX, sY, transparency = false }) {
            const _ = src instanceof HTMLCanvasElement ? src : yield o("WAWebMediaLoad").loadImage(src);
            const f = document.createElement("canvas");
            const g = r("nullthrows")(f.getContext("2d"));
            if (dWidth == null || dHeight == null) {
                f.height = sHeight;
                f.width = sWidth;
                g.drawImage(_, sX, sY, sWidth, sHeight);
            } else {
                f.height = dHeight;
                f.width = dWidth;
                g.drawImage(_, sX, sY, sWidth, sHeight, 0, 0, dWidth, dHeight);
            }
            const h = {};
            A(h, f, outputType, transparency);
            const y = yield o("WAPromiseProps").promiseProps(h);
            return {
                images: y,
                width: sWidth,
                height: sHeight
            };
        });
        return E.apply(this, arguments);
    }
    const k = new (o("WAWebMediaCacheCollection")).WAWebMediaResizeRotateCacheCollection;
    function I(e, t, n, r) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, outputType, i) {
            const l = e instanceof File ? {
                file: e,
                maxDimension: t,
                outputType,
                opts: i
            } : null;
            if (l != null) {
                const s = k.getModelsArray().find((e)=>e.isKeyEqual(l));
                const u = s?.value;
                if (s && u && s.isKeyEqual(l) && o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()) {
                    return (g || (g = n("Promise"))).resolve(u);
                }
            }
            const { fitToSquare = false, minDimension = 0, transparency = false } = i ?? {};
            const b = new ArrayBuffer(0);
            let v;
            let image;
            let buffer;
            if (e instanceof HTMLCanvasElement) {
                image = (g || (g = n("Promise"))).resolve(e);
                buffer = g.resolve(b);
            } else {
                v = window.URL.createObjectURL(e);
                image = o("WAWebMediaLoad").loadImage(v);
                buffer = o("WAWebFileUtils").blobToArrayBuffer(e).catch((e)=>{
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "ImageUtils::rotateAndResize error: ",
                        ""
                    ])), String(e));
                    return b;
                });
            }
            const L = o("WAPromiseProps").promiseProps({
                buffer,
                image
            }).then(({ buffer, image })=>{
                const l = document.createElement("canvas");
                const s = image instanceof HTMLImageElement && image.naturalWidth !== 0 ? image.naturalWidth : image.width;
                const u = image instanceof HTMLImageElement && image.naturalHeight !== 0 ? image.naturalHeight : image.height;
                const c = Math.max(s, u);
                const d = {};
                const m = o("WAWebImageGeometry").boundHeightWidth(u, s, t);
                let f;
                let g;
                let y = outputType & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB;
                if (buffer && y && s === m.width && u === m.height) {
                    try {
                        const b = o("WAWebMediaJpeg").cleanJPEG(buffer);
                        d.blob = b;
                        y = false;
                        f = s;
                        g = u;
                    } catch (error) {
                        const v = r("getErrorSafe")(error);
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Could not parse JPEG: ",
                            ""
                        ])), v.message);
                    }
                }
                if (y || outputType & ~o("WAWebMediaCacheModel").ImageOutputTypes.BLOB) {
                    l.width = m.width;
                    l.height = m.height;
                    if (!transparency) {
                        o("WAWebCanvasUtils").fillBackgroundWithGray(l);
                    }
                    const S = r("nullthrows")(l.getContext("2d"));
                    S.drawImage(image, 0, 0, l.width, l.height);
                    if (fitToSquare) {
                        o("WAWebCanvasUtils").square(l);
                        d.blob = undefined;
                    }
                    if (c < minDimension) {
                        o("WAWebCanvasUtils").scale(l, minDimension);
                        d.blob = undefined;
                    }
                    f = l.width;
                    g = l.height;
                    A(d, l, outputType, transparency);
                }
                return o("WAPromiseProps").promiseProps(d).then((e)=>({
                        width: f,
                        height: g,
                        images: e
                    }));
            }).finally(r("WAWebNoop"));
            const E = yield L;
            if (l != null && o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()) {
                const I = new (o("WAWebMediaCacheModel")).ResizeRotateMediaCache({
                    id: o("WAWebMediaCacheModel").ResizeRotateMediaCacheImpl.getStringKey(l),
                    key: l,
                    value: E
                });
                k.add(I);
            }
            return L;
        });
        return T.apply(this, arguments);
    }
    function D(e, t) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = yield e.arrayBuffer();
                const r = o("WAWebAddWebpMetadata").addWebpMetadata(n, t);
                const a = new Uint8Array(r);
                const i = new Blob([
                    a
                ], {
                    type: "image/webp"
                });
                return i;
            } catch (t) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "addMetadataToSticker: Unable to add metadata to Sticker"
                ]))).sendLogs("unable-to-add-sticker-metadata");
                return e;
            }
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = window.URL.createObjectURL(e);
                const n = yield o("WAWebMediaLoad").loadImage(t);
                window.URL.revokeObjectURL(t);
                const a = o("WAWebStickerConstants").STICKER_DIMENSION;
                const i = o("WAWebCanvasUtils").createCanvas(a, a);
                const l = r("nullthrows")(i.getContext("2d"));
                const s = o("WAWebImageGeometry").aspectRatioScaled(n.width / n.height, a);
                const { height, width } = s;
                const d = (a - width) / 2;
                const m = (a - height) / 2;
                l.drawImage(n, d, m, width, height);
                const p = yield o("WAWebCanvasUtils").canvasToWebp(i);
                const _ = yield D(p, {
                    isFirstParty: false,
                    isFromStickerMaker: true,
                    emojis: [],
                    stickerPackPublisher: "WhatsApp Sticker Maker",
                    stickerMakerSourceType: o("WAWebWebpMetadata").StickerMakerSourceType.WebStickerMaker
                });
                return _;
            } catch (error) {
                const g = r("getErrorSafe")(error);
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Webp sticker file generation failed: "
                ])));
                throw g;
            }
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield o("WAWebMediaLoad").loadImage(e);
                const n = document.createElement("canvas");
                n.width = t.naturalWidth;
                n.height = t.naturalHeight;
                const a = r("nullthrows")(n.getContext("2d"));
                o("WAWebCanvasUtils").fillBackgroundWithGray(n);
                a.drawImage(t, 0, 0);
                return o("WAWebCanvasUtils").canvasToBlob(n);
            } catch (t) {
                throw new (o("WAWebMediaLoadErrors")).MediaDragDropError("unable to render image", e);
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        if (!e) {
            return false;
        }
        const t = new Image;
        if (r("justknobx")._("1449")) {
            t.crossOrigin = "anonymous";
        }
        t.src = e;
        return !!t.complete;
    }
    function A(e, t, outputType, a = false) {
        const i = a ? "image/png" : "image/jpeg";
        if (!e.blob && outputType & o("WAWebMediaCacheModel").ImageOutputTypes.BLOB) {
            e.blob = o("WAWebCanvasUtils").canvasToBlob(t, i);
        }
        if ((e.dataUrl == null || e.dataUrl === "") && outputType & o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL) {
            e.dataUrl = (g || (g = n("Promise"))).resolve(t.toDataURL(i));
        }
        if (!e.canvas && outputType & o("WAWebMediaCacheModel").ImageOutputTypes.CANVAS) {
            e.canvas = (g || (g = n("Promise"))).resolve(t);
        }
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebMediaLoad").loadImage(e);
            const n = o("WAWebCanvasUtils").createCanvas(t.width, t.height);
            const a = r("nullthrows")(n.getContext("2d"));
            a.drawImage(t, 0, 0);
            return n;
        });
        return O.apply(this, arguments);
    }
    function B(imageData) {
        const e_data = imageData.data;
        for(let n = imageData.height, r = imageData.width, o = 0; o < n; o++){
            const a = Math.round(o * (r / n));
            const i = o * r + a;
            const l = i * 4;
            const s = e_data[l];
            if (s !== 0) {
                return false;
            }
            const u = e_data[l + 1];
            if (u !== 0) {
                return false;
            }
            const c = imageData.data[l + 2];
            if (c !== 0) {
                return false;
            }
            const d = imageData.data[l + 3];
            if (d !== 0 && d !== 255) {
                return false;
            }
        }
        return true;
    }
    l.DATA_URL = o("WAWebMediaCacheModel").ImageOutputTypes.DATA_URL;
    l.BLOB = o("WAWebMediaCacheModel").ImageOutputTypes.BLOB;
    l.CANVAS = o("WAWebMediaCacheModel").ImageOutputTypes.CANVAS;
    l.BlackVideoThumbnailError = h;
    l.generateVideoThumbsAndDuration = C;
    l.crop = L;
    l.rotateAndResize = I;
    l.toWebpSticker = $;
    l.urlToFile = N;
    l.isCached = w;
    l.base64ImageToCanvas = F;
}, 98);