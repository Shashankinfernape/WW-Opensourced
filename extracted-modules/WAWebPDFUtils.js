__d("WAWebPDFUtils", [
    "JSResourceForInteraction",
    "WABackoffUtils",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAPromiseProps",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMediaOpaqueData",
    "WAWebPDFWorkerSrc",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAPromiseLoop").promiseLoop(function(e, t, n) {
            const a = o("WAPromiseDelays").delayMs(o("WABackoffUtils").expBackoff(n, 120000, 0, 0));
            return r("JSResourceForInteraction")("pdfjs-dist").__setRef("WAWebPDFUtils").load().then((t)=>{
                t.GlobalWorkerOptions.workerSrc = o("WAWebPDFWorkerSrc").getWorkerSrc();
                e({
                    GlobalWorkerOptions: t.GlobalWorkerOptions,
                    getDocument: t.getDocument
                });
            }).catch(()=>a);
        });
    }
    function s(t) {
        const n = URL.createObjectURL(t);
        return e().then((e)=>e.getDocument({
                url: n,
                isEvalSupported: false
            }).promise);
    }
    function u(e) {
        return e.destroy();
    }
    function c(e, t) {
        const a = document.createElement("canvas");
        return e.getPage(t).then((e)=>{
            const viewport = e.getViewport({
                scale: 1
            });
            const canvasContext = a.getContext("2d");
            a.height = viewport.height;
            a.width = viewport.width;
            const r = {
                canvasContext,
                viewport
            };
            return e.render(r).promise;
        }).then(()=>{
            let e;
            return o("WAPromiseProps").promiseProps({
                blob: o("WAWebCanvasUtils").canvasToBlob(a),
                thumbnail: (e = o("WAWebImageUtils")).rotateAndResize(a, o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE, e.DATA_URL | e.CANVAS | e.BLOB),
                microThumbnail: o("WAWebCanvasUtils").generateMicroThumb(a, o("WAWebABProps").getABPropConfigValue("web_pdf_thumbnail_size_in_bytes"), {
                    mimetype: "image/jpeg",
                    maxAttempts: 10
                })
            });
        }).then((e)=>e).then((()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ blob, microThumbnail, thumbnail }) {
                const thumbnail_images = thumbnail.images;
                const { blob: blob_1, canvas, dataUrl } = thumbnail_images;
                if (canvas == null || blob_1 == null || dataUrl == null) {
                    throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad;
                }
                return {
                    url: URL.createObjectURL(blob),
                    thumbUrl: dataUrl,
                    width: canvas.width,
                    height: canvas.height,
                    fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(blob_1, "image/jpeg"),
                    fullPreviewSize: {
                        width: canvas.width,
                        height: canvas.height
                    },
                    pdfPages: e.numPages,
                    microThumbnail
                };
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    l.fileToPdf = s;
    l.releasePdf = u;
    l.pdfToImg = c;
}, 98);