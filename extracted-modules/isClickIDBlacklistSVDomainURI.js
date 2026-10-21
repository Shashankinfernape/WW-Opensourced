__d("isClickIDBlacklistSVDomainURI", [
    "ClickIDDomainBlacklistSVConfig.experimental"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "http",
        "https"
    ];
    function s(t) {
        if (e.includes(t.getProtocol())) {
            return r("ClickIDDomainBlacklistSVConfig.experimental").domains.some((e)=>{
                if (t.isSubdomainOfDomain(e)) {
                    return true;
                }
                if (!e.includes(".")) {
                    const n = t.getDomain().split(".");
                    return n.includes(e);
                }
                return false;
            });
        }
        return false;
    }
    i.exports = s;
}, 34);