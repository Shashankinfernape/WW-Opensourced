__d("WAWebFetchImageBlobUrl", [
    "WAAbortError",
    "WAPromiseTimeout",
    "WAWebMimeTypes",
    "WAWebXHR",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    const e = 30000;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            let a;
            try {
                a = yield o("WAPromiseTimeout").promiseTimeout(o("WAWebXHR").get({
                    responseType: o("WAWebXHR").RESP_TYPE.ARRAY_BUFFER,
                    signal: n,
                    url: t
                }), e, "FetchImageBlobUrlTimeout");
            } catch (error) {
                throw c(error);
            }
            if (a.status < 200 || a.status >= 300) {
                throw r("err")("image blob url fetch failed with status %s", a.status);
            }
            const i = new Uint8Array(a.response);
            const l = window.URL.createObjectURL(new Blob([
                i
            ], {
                type: o("WAWebMimeTypes").getMediaMimeType("image", i)
            }));
            try {
                yield d(l);
                if (n.aborted) {
                    throw new (o("WAAbortError")).AbortError("aborted after decode");
                }
            } catch (error) {
                window.URL.revokeObjectURL(l);
                throw error;
            }
            return l;
        });
        return u.apply(this, arguments);
    }
    function c(error) {
        const t = r("getErrorSafe")(error);
        if (t === error) {
            return t;
        }
        return r("err")("image blob url request failed without a response");
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Image;
            t.src = e;
            yield t.decode();
        });
        return m.apply(this, arguments);
    }
    l.default = s;
}, 98);