__d("UriNeedRawQuerySVChecker", [
    "PHPQuerySerializer",
    "URIBase",
    "UriNeedRawQuerySVConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = [
        "http",
        "https"
    ];
    function c(t) {
        if (t == null) {
            return false;
        }
        const n = t instanceof (e || (e = r("URIBase"))) ? t : (e || (e = r("URIBase"))).tryParse(t, s || (s = r("PHPQuerySerializer")));
        if (n == null) {
            return false;
        }
        const o = n.getProtocol();
        if (u.includes(o)) {
            return d(n.getDomain());
        }
        return false;
    }
    function d(t) {
        return t != null && r("UriNeedRawQuerySVConfig").uris.some((n)=>(e || (e = r("URIBase"))).isDomainSubdomainOfDomain(t, n, s || (s = r("PHPQuerySerializer"))));
    }
    l.isUriNeedRawQuery = c;
    l.isDomainNeedRawQuery = d;
}, 98);