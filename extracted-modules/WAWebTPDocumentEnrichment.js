__d("WAWebTPDocumentEnrichment", [
    "Promise",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMediaOpaqueData",
    "WAWebTPThumbnailUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        return new (e || (e = n("Promise")))(function(e, n) {
            const r = new Image;
            r.onload = function() {
                return e(r);
            };
            r.onerror = function() {
                return n(new (o("WAWebMediaFileErrors")).MediaFileFailedLoad(t));
            };
            r.src = t;
        });
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            const a = yield o("WAWebTPThumbnailUtils").renderWebTPThumbnailIfEnabled({
                file: e,
                fileName: "",
                options: {
                    width: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
                    height: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE
                },
                signal: t
            });
            const { numPages, thumbnail } = a;
            const u = new Blob([
                thumbnail.slice()
            ], {
                type: "image/jpeg"
            });
            const c = URL.createObjectURL(u);
            const d = yield s(c);
            const m = document.createElement("canvas");
            m.width = d.naturalWidth;
            m.height = d.naturalHeight;
            const p = r("nullthrows")(m.getContext("2d"));
            p.drawImage(d, 0, 0);
            const _ = yield (n = o("WAWebImageUtils")).rotateAndResize(m, o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE, n.DATA_URL | n.CANVAS | n.BLOB);
            const { height, images, width } = _;
            m.width = 0;
            m.height = 0;
            const { blob, canvas, dataUrl } = images;
            if (canvas == null || blob == null || dataUrl == null) {
                throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad;
            }
            const microThumbnail = yield o("WAWebCanvasUtils").generateMicroThumb(canvas, o("WAWebABProps").getABPropConfigValue("web_pdf_thumbnail_size_in_bytes"), {
                mimetype: "image/jpeg",
                maxAttempts: 10
            });
            const S = yield r("WAWebMediaOpaqueData").createFromData(blob, "image/jpeg");
            return {
                url: c,
                thumbUrl: dataUrl,
                width,
                height,
                fullPreviewData: S,
                fullPreviewSize: {
                    width,
                    height
                },
                pdfPages: numPages,
                microThumbnail
            };
        });
        return c.apply(this, arguments);
    }
    l.enrichPdfViaWebTP = u;
}, 98);