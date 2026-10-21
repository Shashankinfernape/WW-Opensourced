__d("WAWebTPIframeUtils", [
    "WAWebPonyfillsIdleCallback",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPThumbnailUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    let s = null;
    let u = null;
    function c(t) {
        if (!(!o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled() || e)) {
            e = true;
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                const e = o("WAWebTPFrameUrlBuilder").getWAWebTPThumbnailUrl();
                const t = o("WAWebTPThumbnailUtils").getSandboxIframe(e, o("WAWebTPThumbnailUtils").WEBTP_THUMBNAIL_IFRAME_ID);
                o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
            });
        }
    }
    function d() {
        if (s != null) {
            o("WAWebPonyfillsIdleCallback").cancelIdleCallback(s);
            s = null;
            return;
        }
        const e = document.getElementById(o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID);
        if (e instanceof HTMLIFrameElement) {
            e.remove();
        }
    }
    function m(e, t) {
        if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e)) {
            u = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                u = null;
                const e = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl();
                const t = o("WAWebTPThumbnailUtils").getSandboxIframe(e, o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID);
                o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
            });
        }
    }
    function p() {
        if (u != null) {
            o("WAWebPonyfillsIdleCallback").cancelIdleCallback(u);
            u = null;
            return;
        }
        const e = document.getElementById(o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID);
        if (e instanceof HTMLIFrameElement) {
            e.remove();
        }
    }
    function _(e, t) {
        if (o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e)) {
            s = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                s = null;
                const e = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl();
                const t = o("WAWebTPThumbnailUtils").getSandboxIframe(e, o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID);
                o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
            });
        }
    }
    l.getSandboxIframe = o("WAWebTPThumbnailUtils").getSandboxIframe;
    l.renderWebTPThumbnailIfEnabled = o("WAWebTPThumbnailUtils").renderWebTPThumbnailIfEnabled;
    l.preloadWebTPThumbnailRendererIfEnabled = c;
    l.removePreloadedIframe = d;
    l.preloadWebTPInlineSharerIframeIfEnabled = m;
    l.removePreloadedInlineSharerIframe = p;
    l.preloadWebTPIframeIfEnabled = _;
}, 98);