__d("WAWebTPPreloadingUtils", [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebMimeTypes",
    "WAWebMsgQueryUtils",
    "WAWebMsgType",
    "WAWebTPIframeUtils",
    "WAWebTPPdfViewerGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u = false;
    let c = false;
    function d() {
        u = false;
        c = false;
    }
    const m = 50;
    const p = 100;
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (u) {
                return true;
            }
            if (!o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabled() || !o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerPreloadEnabled()) {
                return false;
            }
            if (!o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                if (!c) {
                    c = true;
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Deferring WebTP iframe preload until offline delivery ends"
                    ])));
                    const r = function() {
                        c = false;
                        _(t, n);
                    };
                    o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(r);
                }
                return false;
            }
            const { source, appStartLimit } = n;
            const l = appStartLimit === undefined ? p : appStartLimit;
            const n_inChatLimit = n.inChatLimit;
            const f = n_inChatLimit === undefined ? m : n_inChatLimit;
            const n_force = n.force;
            const y = n_force === undefined ? false : n_force;
            let C = false;
            if (y) {
                C = true;
            } else {
                const b = yield g(t, f, l);
                C = b.some((e)=>e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && e.mimetype != null && o("WAWebMimeTypes").isPdfDocument(e.mimetype));
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Preloading WebTP iframe for PDFs: ",
                ""
            ])), C);
            if (C) {
                o("WAWebTPIframeUtils").preloadWebTPIframeIfEnabled("application/pdf", source);
                u = true;
                return true;
            }
            return false;
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e) {
                const r = e.msgs.last();
                return o("WAWebMsgQueryUtils").getAllDocsMsgs({
                    count: t,
                    direction: "before",
                    msgKey: r?.id
                });
            }
            return o("WAWebMsgQueryUtils").getAllDocsMsgs({
                count: n
            });
        });
        return h.apply(this, arguments);
    }
    l.__resetPreloadingStateForTests = d;
    l.maybePreloadWebTPIframeForPDFs = _;
}, 98);