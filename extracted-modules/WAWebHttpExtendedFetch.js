__d("WAWebHttpExtendedFetch", [
    "$InternalEnum",
    "Promise",
    "WAAbortError",
    "WAArrayBufferUtils",
    "WAWebHttpErrors",
    "WAWebHttpParseHeaders",
    "WAWebNoop",
    "WAWebPonyfillsHeaders",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum")({
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
    });
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = {}) {
            try {
                return yield d(e, t);
            } catch (e) {
                const n = r("getErrorSafe")(e);
                throw n.name === o("WAAbortError").ABORT_ERROR ? new (o("WAAbortError")).AbortError : n instanceof o("WAWebHttpErrors").HttpNetworkError ? n : new (o("WAWebHttpErrors")).HttpNetworkError(n.message);
            }
        });
        return c.apply(this, arguments);
    }
    function d(t, a = {}) {
        return new (e || (e = n("Promise")))(function(i, l) {
            let u;
            if ((u = a.signal) != null && u.aborted) {
                l(new DOMException("The operation was aborted.", "AbortError"));
                return;
            }
            const c = new XMLHttpRequest;
            if (a.signal) {
                const d = a.signal;
                d.addEventListener("abort", function e() {
                    d.removeEventListener("abort", e);
                    c.onreadystatechange = r("WAWebNoop");
                    c.abort();
                    l(new DOMException("The operation was aborted.", "AbortError"));
                });
            }
            const m = a;
            const { onData: p, onProgress: _ } = m;
            if (_ != null || p) {
                (a.method?.toLowerCase() === "post" && c.upload != null ? c.upload : c).onprogress = function(e) {
                    if (p) {
                        p(e, c.responseText);
                    }
                    if (_) {
                        _(e);
                    }
                };
            }
            const g = a;
            const h = g.onHeadersReceived;
            c.onreadystatechange = function() {
                if (c.readyState === s.UNSENT) {
                    l(r("err")("fetch error: not sent"));
                    return;
                } else if (c.readyState === s.HEADERS_RECEIVED && h != null) {
                    h(new (r("WAWebPonyfillsHeaders"))(r("WAWebHttpParseHeaders")(c.getAllResponseHeaders())));
                    return;
                } else if (c.readyState === s.DONE) {
                    if (c.status == null) {
                        l(r("err")("fetch error: no status"));
                        return;
                    }
                    if (c.status === 0 || c.status >= 12000) {
                        l(r("err")(`fetch error: unexpected status ${c.status}`));
                        return;
                    }
                    i(R());
                }
            };
            c.onerror = function() {
                return l(r("err")("fetch error: error"));
            };
            c.ontimeout = function() {
                l(new (o("WAWebHttpErrors")).HttpTimedOutError("fetch error: timedout"));
            };
            c.withCredentials = a.credentials === "include";
            if (a.timeout != null) {
                c.timeout = a.timeout;
            }
            const y = a.method;
            c.open(y != null && y !== "" ? y : "get", t.toString(), true);
            const C = new (r("WAWebPonyfillsHeaders"))(a.headers || {});
            for (const b of C.keys()){
                const v = C.get(b);
                if (v != null) {
                    c.setRequestHeader(b, v);
                }
            }
            if (p) {
                c.overrideMimeType("text/plain; charset=x-user-defined");
            } else {
                c.responseType = "arraybuffer";
            }
            const S = a.body;
            c.send(S != null && S !== "" ? S : null);
            function R() {
                const t = new (r("WAWebPonyfillsHeaders"))(r("WAWebHttpParseHeaders")(c.getAllResponseHeaders()));
                return babelHelpers.extends({
                    ok: c.status >= 200 && c.status < 300,
                    statusText: c.statusText,
                    status: c.status,
                    url: c.responseURL
                }, L(), {
                    blob: function() {
                        return (e || (e = n("Promise"))).resolve(new Blob([
                            c.response
                        ], {
                            type: t.get("content-type") || ""
                        }));
                    },
                    clone: R,
                    headers: t
                });
            }
            function L() {
                if (p) {
                    return {
                        text: function() {
                            return (e || (e = n("Promise"))).resolve(c.responseText);
                        },
                        json: function() {
                            return (e || (e = n("Promise"))).resolve(JSON.parse(c.responseText));
                        },
                        arrayBuffer: function() {
                            return o("WAArrayBufferUtils").largeStringToArrayBuffer(c.responseText);
                        }
                    };
                }
                return {
                    text: function() {
                        return E();
                    },
                    json: (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            const e = yield E();
                            return JSON.parse(e);
                        });
                        function t() {
                            return e.apply(this, arguments);
                        }
                        return t;
                    })(),
                    arrayBuffer: function() {
                        return c.response;
                    }
                };
            }
            function E() {
                return (e || (e = n("Promise"))).resolve(String.fromCharCode(...Array.from(new Uint8Array(c.response))));
            }
        });
    }
    l.extendedFetch = u;
    l.sharedFetch = d;
}, 98);