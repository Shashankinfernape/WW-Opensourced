__d("WAWebTPWhatsAppNetBridge", [
    "Promise",
    "WAWebTPBridge",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerQpl",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "whatsapp.net";
    const timeoutMs = r("justknobx")._("5486");
    const c = ((t)=>{
        function a(e) {
            let n;
            const a = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl();
            const e_contentWindow = e.contentWindow;
            if (e_contentWindow == null) {
                throw r("err")("WebTP bridge requires an iframe attached to the DOM");
            }
            n = t.call(this, e_contentWindow, new URL(a).origin, s) || this;
            n.$WAWebTPWhatsAppNetBridge$p_1 = n.$WAWebTPWhatsAppNetBridge$p_2();
            return n;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.$WAWebTPWhatsAppNetBridge$p_2 = function() {
            const t = this;
            return new (e || (e = n("Promise")))(function(e, n) {
                t.listenOnce("APP_READY", function() {
                    o("WAWebTPPdfViewerQpl").pdfViewerQpl.appReady();
                    e();
                }, {
                    timeoutMs,
                    onTimeout: function(t) {
                        n(t);
                    }
                });
                t.publish("GET_APP_READY", {});
            });
        };
        a_prototype.publishWhenReady = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                yield this.$WAWebTPWhatsAppNetBridge$p_1;
                return this.publish(e, t, n);
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebTPBridge").WAWebTPBridge);
    l.WAWebTPWhatsAppNetBridge = c;
}, 98);