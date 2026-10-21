__d("URIRFC3986", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");
    function l(t) {
        if (t.trim() === "") {
            return null;
        }
        const n = t.match(e);
        if (n == null) {
            return null;
        }
        const authority = n[2] ? n[2].substr(2) : null;
        const scheme = n[1] ? n[1].substr(0, n[1].length - 1) : null;
        const a = {
            uri: n[0] ? n[0] : null,
            scheme,
            authority,
            userinfo: n[3] ? n[3].substr(0, n[3].length - 1) : null,
            host: n[2] ? n[4] : null,
            port: n[5] && n[5].substr(1) ? parseInt(n[5].substr(1), 10) : null,
            path: n[6] ? n[6] : null,
            query: n[7] ? n[7].substr(1) : null,
            fragment: n[8] ? n[8].substr(1) : null,
            isGenericURI: authority === null && !!scheme
        };
        return a;
    }
    i.parse = l;
}, 66);