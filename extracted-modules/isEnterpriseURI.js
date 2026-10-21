__d("isEnterpriseURI", [], function(t, n, r, o, a, i) {
    function e(e) {
        if (e.isEmpty() && e.toString() !== "#" || !e.getDomain() && !e.getProtocol() || e.getProtocol() !== "https") {
            return false;
        }
        return e.getDomain().includes("facebookenterprise.com") || e.getDomain().includes("metaenterprise.com");
    }
    i.default = e;
}, 66);