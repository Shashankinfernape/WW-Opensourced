__d("XHRHttpError", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "HTTP_CLIENT_ERROR";
    const l = "HTTP_PROXY_ERROR";
    const s = "HTTP_SERVER_ERROR";
    const u = "HTTP_TRANSPORT_ERROR";
    const c = "HTTP_UNKNOWN_ERROR";
    function d(t, n) {
        if (n === 0) {
            const r = t.getProtocol();
            if (r === "file" || r === "ftp") {
                return null;
            }
            return u;
        } else {
            if (n >= 100 && n < 200) {
                return l;
            }
            if (n >= 200 && n < 300) {
                return null;
            }
            if (n >= 400 && n < 500) {
                return e;
            }
            if (n >= 500 && n < 600) {
                return s;
            }
            if (n >= 12001 && n < 12156) {
                return u;
            }
            return c;
        }
    }
    i.HTTP_CLIENT_ERROR = e;
    i.HTTP_PROXY_ERROR = l;
    i.HTTP_SERVER_ERROR = s;
    i.HTTP_TRANSPORT_ERROR = u;
    i.HTTP_UNKNOWN_ERROR = c;
    i.getErrorCode = d;
}, 66);