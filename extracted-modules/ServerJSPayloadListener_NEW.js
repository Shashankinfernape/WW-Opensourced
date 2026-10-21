__d("ServerJSPayloadListener_NEW", [
    "FBLogger",
    "GHLTypenameRestore",
    "ServerJS",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (e instanceof HTMLScriptElement) {
            const a = e.dataset.contentLen;
            if (!(e.dataset.processed || e.textContent.length.toString() !== a)) {
                e.dataset.processed = "1";
                const i = e.nonce ?? e.getAttribute("nonce");
                if (i !== t) {
                    r("FBLogger")("serverjs_listener").warn("ServerJS payload nonce validation failed: %s v/s %s", i, t);
                    if (window.Env?.sjsNonceEnforce === true) {
                        return;
                    }
                }
                let s = null;
                try {
                    s = JSON.parse(e.textContent);
                    if (s == null) {
                        throw r("err")("ServerJS payload marked with data-sjs was parsed as null");
                    }
                    o("GHLTypenameRestore").restoreAllTypenames(s, e.textContent);
                    new (r("ServerJS"))().handle(s);
                } catch (error) {
                    r("FBLogger")("serverjs_listener").catching(r("getErrorSafe")(error)).mustfix("ServerJS based data-sjs payload failed to parse and execute.");
                }
            }
        }
    }
    function s() {
        if (t.document != null && !(!window.Env || !window.Env.sjsListenerNew)) {
            const o = document.querySelectorAll("script[data-sjs]:not([data-processed])");
            const a = window.Env?.sjsNonce ?? "undefined";
            for (const i of o){
                e(i, a);
            }
        }
    }
    l.process = s;
}, 99);