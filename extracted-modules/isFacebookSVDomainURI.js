__d("isFacebookSVDomainURI", [
    "FBDomainsSVConfig.experimental"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "http",
        "https"
    ];
    function s(t) {
        if (e.indexOf(t.getProtocol()) === -1) {
            return false;
        }
        const n = r("FBDomainsSVConfig.experimental").domains[t.getDomain()];
        return n != null;
    }
    l.default = s;
}, 98);