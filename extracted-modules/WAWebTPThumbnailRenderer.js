__d("WAWebTPThumbnailRenderer", [
    "Promise",
    "WACustomError",
    "WAWebABProps",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPWhatsAppNetBridge",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("justknobx")._("2857") || 15000;
    function u() {
        if (o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()) {
            return r("justknobx")._("5486") || 60000;
        }
        return o("WAWebABProps").getABPropConfigValue("wa_webtp_thumbnail_renderer_timeout_ms") ?? s;
    }
    const c = (()=>{
        function t(e) {
            this.$1 = new (o("WAWebTPWhatsAppNetBridge")).WAWebTPWhatsAppNetBridge(e);
        }
        const t_prototype = t.prototype;
        t_prototype.listen = function(t, n) {
            return this.$1.listen(t, n);
        };
        t_prototype.getThumbnail = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                const i = r("WAWebPonyfillsCryptoRandomUUID")();
                return new (e || (e = n("Promise")))((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                        let r = null;
                        var l = a.$1.listen("RENDER_PDF_THUMBNAIL_RESPONSE", function(t) {
                            if (t.requestId === i) {
                                if (r != null) {
                                    window.clearTimeout(r);
                                }
                                l();
                                if (t.success) {
                                    e(t);
                                } else {
                                    n(t.error);
                                }
                            }
                        });
                        const s = u();
                        r = window.setTimeout(function() {
                            l();
                            n(new (o("WACustomError")).TimeoutError(`RENDER_PDF_THUMBNAIL_RESPONSE, timeoutMs: ${s}`));
                        }, s);
                        const c = babelHelpers.extends({}, t, {
                            requestId: i
                        });
                        a.$1.publishWhenReady("RENDER_PDF_THUMBNAIL", c).catch((e)=>{
                            if (r != null) {
                                window.clearTimeout(r);
                            }
                            l();
                            n(e);
                        });
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                })());
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.destroy = function() {
            this.$1.destroy();
        };
        return t;
    })();
    l.getPdfThumbnailTimeoutMs = u;
    l.WAWebTPThumbnailRenderer = c;
}, 98);