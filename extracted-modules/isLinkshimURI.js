__d("isLinkshimURI", [
    "LinkshimHandlerConfig",
    "isBarcelonaURI",
    "isFacebookURI",
    "isMessengerDotComURI",
    "isWhatsAppLinkshimURI"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("LinkshimHandlerConfig").linkshim_host.split(".");
    const s = e[e.length - 1];
    function u(e) {
        const t = e.getPath();
        if ((t === "/l.php" || t.indexOf("/si/ajax/l/") === 0 || t.indexOf("/l/") === 0 || t.indexOf("l/") === 0) && (r("isFacebookURI")(e) || r("isMessengerDotComURI")(e)) || t === "/linkshim" && r("isBarcelonaURI")(e) || t === "/l" && r("isWhatsAppLinkshimURI")(e)) {
            return true;
        }
        if (t === r("LinkshimHandlerConfig").linkshim_path && e.isSubdomainOfDomain(s)) {
            const n = e.getQueryData();
            if (n[r("LinkshimHandlerConfig").linkshim_enc_param] != null && n[r("LinkshimHandlerConfig").linkshim_url_param] != null) {
                return true;
            }
        }
        return false;
    }
    l.default = u;
}, 98);