__d("getSameOriginTransport", [
    "ExecutionEnvironment",
    "FBLogger",
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "GHLNetworkLayer",
    "err",
    "getErrorSafe",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = null;
    let u = false;
    let c = false;
    function d() {
        if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM && !(e || (e = r("ExecutionEnvironment"))).isInWorker) {
            throw r("FBLogger")("comet_infra").mustfixThrow("getSameOriginTransport: Same origin transport unavailable in the server environment.");
        }
        try {
            if (s == null) {
                try {
                    const n = r("justknobx")._("3323") ? o("GHLNetworkLayer").getGHLXhr() : null;
                    if (n != null) {
                        s = n;
                    } else {
                        s = t.XMLHttpRequest;
                    }
                } catch (error) {
                    r("FBLogger")("ghl").warn("error while getGHLXhr in getSameOriginTransport: %s", r("getErrorSafe")(error).message);
                    s = t.XMLHttpRequest;
                }
            }
            if (!u) {
                try {
                    const a = r("justknobx")._("2694") && r("gkx")("5023");
                    if (r("justknobx")._("5589") && r("gkx")("23984") && ((a ? o("GHLDetectionUtilsPreludeSafe").isCallShimmedCrossRealm() : o("GHLDetectionUtils").isCallShimmed()) || o("GHLDetectionUtilsPreludeSafe").isCallBehaviorallyShimmed())) {
                        o("GHLDetectionUtilsPreludeSafe").restoreNativeCall();
                    }
                } catch (e) {}
                u = true;
            }
            if (!c) {
                try {
                    if (r("justknobx")._("340") && r("gkx")("999") && o("GHLDetectionUtilsPreludeSafe").isXHRResponseGetterShimmed()) {
                        o("GHLDetectionUtilsPreludeSafe").restoreNativeXHRGetters();
                    }
                } catch (e) {}
                c = true;
            }
            if (s == null) {
                throw r("err")("getSameOriginTransport: XMLHttpRequestSafe is null");
            }
            return new s;
        } catch (error) {
            throw r("err")("getSameOriginTransport: %s", r("getErrorSafe")(error).message);
        }
    }
    l.default = d;
}, 98);