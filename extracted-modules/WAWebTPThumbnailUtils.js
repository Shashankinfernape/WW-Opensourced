__d("WAWebTPThumbnailUtils", [
    "Promise",
    "WAAbortError",
    "WAWebCryptoCalculateFilehash",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPdfViewerQpl",
    "WAWebTPThumbnailRenderer",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "webtp-iframe-thumbnail";
    const u = "webtp-iframe-pdf-viewer";
    const c = "webtp-iframe-inline-sharer";
    function d(e, t) {
        const r = document.getElementById(t);
        if (r instanceof HTMLIFrameElement) {
            return r;
        }
        const o = document.createElement("iframe");
        o.setAttribute("id", t);
        o.setAttribute("data-testid", t);
        o.removeAttribute("sandbox");
        o.removeAttribute("credentialless");
        o.src = e;
        o.sandbox.add("allow-scripts", "allow-same-origin");
        o.style.display = "none";
        return o;
    }
    function m(e) {
        if (!e.parentElement) {
            document.body.appendChild(e);
            e.onerror = function() {
                e.remove();
            };
            e.onload = function() {
                if (e.id === u || e.id === c) {
                    e.remove();
                }
                if (e.id === s && _.getReferenceNumber() <= 0) {
                    e.remove();
                }
            };
        }
    }
    class p {
        constructor(){
            this.$1 = 0;
        }
        getReferenceNumber() {
            return this.$1;
        }
        getIframe() {
            const e = this;
            this.$1++;
            const t = document.getElementById(s);
            if (t instanceof HTMLIFrameElement) {
                return t;
            }
            const n = o("WAWebTPFrameUrlBuilder").getWAWebTPThumbnailUrl();
            const r = d(n, s);
            m(r);
            r.onerror = function() {
                r.remove();
                e.$1 = 0;
            };
            r.onload = function() {
                if (e.$1 <= 0) {
                    r.remove();
                }
            };
            return r;
        }
        release() {
            if (!(this.$1 <= 0) && (this.$1--, this.$1 === 0)) {
                const e = document.getElementById(s);
                if (e instanceof HTMLIFrameElement) {
                    e.remove();
                }
            }
        }
    }
    var _ = new p;
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ file, fileName, options, signal }) {
            if (!o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled()) {
                return (e || (e = n("Promise"))).reject(r("err")("WebTP PDF thumbnail renderer is not enabled"));
            }
            const u = yield o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(file);
            o("WAWebTPLoggingUtils").logThumbnailRenderAttemptEvent(u, file.size);
            const c = new (o("WAWebTPPdfViewerQpl")).WebTPPdfViewerQpl;
            c.initialize("thumbnail");
            c.renderThumbnailStart();
            const d = _.getIframe();
            const m = new (o("WAWebTPThumbnailRenderer")).WAWebTPThumbnailRenderer(d);
            let p = null;
            const f = new (e || (e = n("Promise")))(function(e, t) {
                p = t;
            });
            const g = function() {
                if (p != null) {
                    p(new (o("WAAbortError")).AbortError("Render thumbnail aborted"));
                }
            };
            if (signal != null) {
                if (signal.aborted) {
                    g();
                } else {
                    signal.addEventListener("abort", g);
                }
            }
            m.listen("QPL", function(e) {
                e.forEach(({ data, pointName, timestamp })=>{
                    c.addIframePoint(pointName, timestamp, data);
                });
            });
            m.listen("APP_READY", function() {
                c.appReady();
            });
            m.listen("APP_ERROR", function() {
                c.appError();
            });
            try {
                const h = yield (e || (e = n("Promise"))).race([
                    m.getThumbnail({
                        file,
                        fileName,
                        width: options.width,
                        height: options.height
                    }),
                    f
                ]);
                o("WAWebTPLoggingUtils").logThumbnailTelemetryDataEvent(h.perfData, u, file.size, h.sdkVersion);
                c.renderThumbnailEnd();
                return {
                    thumbnail: h.thumbnail,
                    numPages: h.numPages,
                    perfData: h.perfData
                };
            } catch (error) {
                o("WAWebTPLoggingUtils").logThumbnailRenderErrorEvent(error, u, file.size);
                c.renderThumbnailError();
                throw error;
            } finally{
                signal?.removeEventListener("abort", g);
                m.destroy();
                _.release();
            }
        });
        return g.apply(this, arguments);
    }
    l.WEBTP_THUMBNAIL_IFRAME_ID = s;
    l.WEBTP_VIEWER_IFRAME_ID = u;
    l.WEBTP_INLINE_SHARER_IFRAME_ID = c;
    l.getSandboxIframe = d;
    l.appendToDocumentBody = m;
    l.renderWebTPThumbnailIfEnabled = f;
}, 98);