__d("WAWebXHR", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebNoop",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = {
        GET: "GET",
        POST: "POST",
        HEAD: "HEAD",
        PUT: "PUT"
    };
    const p = {
        ARRAY_BUFFER: "arraybuffer",
        BLOB: "blob",
        JSON: "json"
    };
    function _(e, t) {
        for(const n in t){
            e.setRequestHeader(n, t[n]);
        }
    }
    function f(t, a, i, l, p, f, g) {
        const h = new XMLHttpRequest;
        const y = new (d || (d = n("Promise")))(function(n, l) {
            h.onload = function(t) {
                if (h.readyState === 4) {
                    n(h);
                } else {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "xhr.request:onload"
                    ])));
                    l(t);
                }
            };
            h.onerror = function(e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "xhr.request:onerror"
                ])));
                l(e);
            };
            h.ontimeout = function(e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "xhr.request:ontimeout"
                ])));
                l(e);
            };
            if (f) {
                h.onprogress = f;
            }
            h.onabort = function(e) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "xhr.request:onabort"
                ])));
                l(e);
            };
            if (i instanceof FormData) {
                h.open(a || m.POST, t, true);
                if (p) {
                    h.responseType = p;
                }
                if (g) {
                    _(h, g);
                }
                h.send(i);
            } else if (i instanceof Object) {
                const d = r("WAWebURLUtils").build(t, i);
                h.open(a || m.GET, d, true);
                if (p) {
                    h.responseType = p;
                }
                if (g) {
                    _(h, g);
                }
                h.send();
            } else {
                h.open(a || m.GET, t, true);
                if (p) {
                    h.responseType = p;
                }
                if (g) {
                    _(h, g);
                }
                h.send();
            }
        });
        const C = r("WAPromiseRaceAbort")(y, l);
        C.catch(o("WAAbortError").catchAbort(function() {
            h.abort();
        })).catch(r("WAWebNoop"));
        return C;
    }
    function g({ customHeaders = null, responseType, signal, url }) {
        return f(url, m.GET, null, signal, responseType, undefined, customHeaders);
    }
    function h(e, t, n) {
        return f(e, m.POST, t, n);
    }
    l.VERB = m;
    l.RESP_TYPE = p;
    l.request = f;
    l.get = g;
    l.post = h;
}, 98);