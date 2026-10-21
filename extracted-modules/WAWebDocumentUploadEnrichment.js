__d("WAWebDocumentUploadEnrichment", [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebMimeTypes",
    "WAWebPDFUtils",
    "WAWebTPDocumentEnrichment",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPdfViewerQpl",
    "WAWebTPThumbnailRenderer"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return e != null && typeof e === "object" && "type" in e && typeof e.type === "string" && e.type === "PDFSecurityError";
    }
    const p = {
        pdfImg: null,
        isPasswordProtected: undefined
    };
    function _(e, t, r) {
        if (o("WAWebMimeTypes").previewType(t) !== "pdf" || r?.aborted === true) {
            return (d || (d = n("Promise"))).resolve(p);
        }
        const a = f(e, r);
        if (r == null) {
            return a;
        }
        return new (d || (d = n("Promise")))(function(e) {
            const t = function() {
                r.removeEventListener("abort", t);
                e(p);
            };
            r.addEventListener("abort", t);
            a.then((n)=>{
                r.removeEventListener("abort", t);
                e(n);
            }).catch(()=>{
                r.removeEventListener("abort", t);
                e(p);
            });
        });
    }
    function f(t, n) {
        if (o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled()) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[webtp] Using WebTP renderer for PDF thumbnail"
            ])));
            return o("WAPromiseTimeout").promiseTimeout(o("WAWebTPDocumentEnrichment").enrichPdfViaWebTP(t, n).then((e)=>({
                    pdfImg: e,
                    isPasswordProtected: false
                })).catch((e)=>{
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WebTP pdf thumbnail failed, falling back to PDF.js"
                ])));
                if (m(e)) {
                    return {
                        pdfImg: null,
                        isPasswordProtected: true
                    };
                }
                return p;
            }), o("WAWebTPThumbnailRenderer").getPdfThumbnailTimeoutMs(), "Document enrichment timeout").catch(()=>p);
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[webtp] Using default PDF.js renderer for PDF thumbnail"
        ])));
        const r = new (o("WAWebTPPdfViewerQpl")).WebTPPdfViewerQpl;
        r.initialize("pdfjs");
        r.renderThumbnailStart();
        return o("WAPromiseTimeout").promiseTimeout(g(t, n), o("WAWebTPThumbnailRenderer").getPdfThumbnailTimeoutMs(), "Document enrichment timeout").then((e)=>{
            r.renderThumbnailEnd();
            return {
                pdfImg: e,
                isPasswordProtected: undefined
            };
        }).catch(()=>{
            r.renderThumbnailError();
            return p;
        });
    }
    function g(e, t) {
        let n;
        return o("WAWebPDFUtils").fileToPdf(e).then((e)=>{
            n = e;
            if (t?.aborted === true) {
                return null;
            }
            return o("WAWebPDFUtils").pdfToImg(e, 1);
        }).catch((e)=>{
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "pdf preview generation failed"
            ])));
            return null;
        }).finally(()=>{
            if (n) {
                o("WAWebPDFUtils").releasePdf(n);
            }
        });
    }
    l.enrich = _;
}, 98);