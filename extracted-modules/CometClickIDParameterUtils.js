__d("CometClickIDParameterUtils", [
    "ConstUriUtils",
    "isCdnURI",
    "isClickIDBlacklistSVDomainURI",
    "isClickIDBlocklistSVUrlPath",
    "isClickIDBlocklistSVUrlPrefix",
    "isFacebookSVDomainURI",
    "isFacebookURI",
    "isFbDotComURI"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const s = "fbclid";
    const u = "brid";
    const c = "doubleclick.net";
    const d = {
        [c]: [
            {
                extractor: function(t) {
                    const e = t.getQueryString();
                    if (e != null && e.startsWith("http")) {
                        return o("ConstUriUtils").getUri(e);
                    }
                    return null;
                },
                injector: function(t, n, r) {
                    const e = n.addQueryParam(s, r);
                    if (e != null) {
                        const o = new Map;
                        o.set(e.toString(), null);
                        const a = t.replaceQueryParams(o);
                        if (a != null) {
                            return a;
                        }
                    }
                    return t;
                }
            }
        ]
    };
    function m(e) {
        return e.getOrigin() !== "://";
    }
    function p(e) {
        const t = Object.keys(d).filter((t)=>e.getDomain().endsWith(t));
        const n = t[0] || null;
        const r = n != null ? d[n] : null;
        if (r == null) {
            return null;
        }
        const o = r.map((t)=>{
            const uri = t.extractor(e);
            if (uri == null) {
                return null;
            }
            return {
                injector: t.injector,
                uri
            };
        }).filter((e)=>e != null);
        return o[0] || null;
    }
    function _(e) {
        const t = r("isClickIDBlacklistSVDomainURI")(e);
        const n = r("isClickIDBlocklistSVUrlPath")(e);
        if (t || n) {
            return true;
        }
        const o = r("isClickIDBlocklistSVUrlPrefix")(e);
        if (o) {
            return true;
        }
        const a = p(e);
        if (a != null) {
            return _(a.uri);
        }
        return false;
    }
    function f(e) {
        return !r("isFacebookURI")(e) && !r("isFacebookSVDomainURI")(e) && !r("isCdnURI")(e) && !r("isFbDotComURI")(e) && m(e) && [
            "http",
            "https"
        ].includes(e.getProtocol()) && !_(e);
    }
    function g(e, t) {
        const n = p(e);
        if (n != null) {
            return n.injector(e, n.uri, t);
        }
        const r = e.addQueryParam(s, t);
        return r ?? e;
    }
    function h(e) {
        if (e == null) {
            return false;
        }
        return e.includes("/marketplace/np/");
    }
    function y(e) {
        return h(e);
    }
    function C(e, t, n) {
        if (f(e)) {
            if (y(n)) {
                return e;
            }
            return g(e, t);
        }
        return e;
    }
    function b(e, t) {
        const n = p(e);
        if (n != null) {
            return n.injector(e, n.uri, t);
        }
        const r = e.addQueryParam(u, t);
        return r ?? e;
    }
    function v(e, t) {
        if (f(e)) {
            return b(e, t);
        }
        return e;
    }
    l.shouldBlockClickIDForBMPOptout = y;
    l.appendClickIDQueryParam = C;
    l.appendBRIDQueryParam = v;
}, 98);