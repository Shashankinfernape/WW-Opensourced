__d("getCometAsyncFetchResponse", [
    "CSRFGuard",
    "CometAsyncFetchError",
    "CometAsyncFetchResponse",
    "ConstUriUtils",
    "DTSG",
    "DTSG_ASYNC",
    "FBLogger",
    "NetworkStatus",
    "PHPQuerySerializer",
    "Promise",
    "XHRRequest",
    "canSendCredentialsForAsyncRequest",
    "cometAsyncRequestHeaders",
    "getAsyncParams",
    "getErrorSafe",
    "handleCometErrorCodeSideEffects",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 250;
    function c(t, a) {
        let i = 0;
        let l;
        return new (s || (s = n("Promise")))(function(n, s) {
            let c;
            const p = function(i, l) {
                if (a.ignoreResponse === true) {
                    return n();
                }
                let e;
                let u = i.trim();
                try {
                    if (o("CSRFGuard").exists(u)) {
                        u = o("CSRFGuard").clean(u);
                    }
                    e = JSON.parse(u);
                } catch (error) {
                    const c = r("getErrorSafe")(error);
                    if (u.startsWith("<")) {
                        r("FBLogger")("comet_infra").warn("Received non-JSON (HTML) response for uri %s. response: %s", t.toString(), u.substring(0, 1000));
                        s(new (r("CometAsyncFetchError"))(`Received non-JSON response for ${t.toString()}`, null, l, u.substring(0, 1000), "NonJSONResponse"));
                        return;
                    }
                    r("FBLogger")("comet_infra").mustfix("Unable to parse uri %s response. Error: %s, response: %s", t.toString(), c.message, u.substring(0, 1000));
                    s(c);
                    return;
                }
                if (m(t)) {
                    const _ = e?.dtsgToken;
                    const f = e?.dtsgAsyncGetToken;
                    if (_) {
                        o("DTSG").setToken(_);
                    }
                    if (f) {
                        o("DTSG_ASYNC").setToken(f);
                    }
                }
                if (e.error) {
                    r("handleCometErrorCodeSideEffects")(e.error, e.errorSummary, e.errorDescription, e.redirectTo, a.shouldShowErrorDialog);
                    s({
                        error: e.error,
                        errorMsg: e.errorDescription,
                        errorType: e.errorSummary,
                        redirectTo: e.redirectTo
                    });
                    return;
                }
                return n(new (r("CometAsyncFetchResponse"))(e, l));
            };
            p.includeHeaders = true;
            function _(e) {
                const t = a.retryCount != null && a.retryCount > 0 && i <= a.retryCount;
                if (t) {
                    r("setTimeout")(g, u);
                } else {
                    const n = new (r("CometAsyncFetchError"))(e.errorMsg, e.errorCode, e.errorRawResponseHeaders, e.errorRawTransport, e.errorType);
                    n.errorRawTransportStatus = e.errorRawTransportStatus;
                    return s(n);
                }
            }
            function f() {
                const e = new (r("CometAsyncFetchError"))(`Request to ${t} was aborted`, null, null, null, "Abort");
                return s(e);
            }
            function g() {
                if (a.abortSignal?.aborted === true) {
                    return f();
                }
                h();
                y();
            }
            function h() {
                if (c != null) {
                    c.abort();
                    c = null;
                }
            }
            function y() {
                const s = a.requestHeaders ?? {};
                const u = a.skipCustomHeaders !== true ? babelHelpers.extends({}, s, o("cometAsyncRequestHeaders").getHeaders()) : s;
                const m = Object.keys(u).reduce((acc, key)=>acc.setRequestHeader(key, u[key]), new (r("XHRRequest"))(t)).setMethod(a.method).setData(babelHelpers.extends({}, a.data, a.skipAsyncParams === true ? {} : r("getAsyncParams")(a.method, a.skipSRState ?? false))).setRawData(a.formData).setResponseHandler(p).setErrorHandler(_).setAbortHandler(f).setUploadProgressHandler(a.onUploadProgress).setDataSerializer((e || (e = r("PHPQuerySerializer"))).serialize);
                c = m;
                if (a.withCredentials === true && d(t)) {
                    m.setWithCredentials(true);
                }
                m.send();
                i++;
            }
            if (a.abortSignal) {
                a.abortSignal.onabort = function() {
                    h();
                };
            }
            if (r("NetworkStatus").isOnline()) {
                g();
            } else {
                l = r("NetworkStatus").onChange(function({ online }) {
                    if (online) {
                        g();
                        l.remove();
                    }
                });
            }
        });
    }
    function d(e) {
        const t = o("ConstUriUtils").getUri(e);
        if (t == null) {
            return false;
        }
        return r("canSendCredentialsForAsyncRequest")(t);
    }
    function m(e) {
        const t = o("ConstUriUtils").getUri(e);
        if (t == null) {
            return false;
        }
        if (!t.getProtocol() && !t.getDomain()) {
            return true;
        }
        return document.location.origin === t.getOrigin();
    }
    l.default = c;
}, 98);