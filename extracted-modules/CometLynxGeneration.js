__d("CometLynxGeneration", [
    "CometClickIDParameterUtils",
    "ConstUriUtils",
    "LinkshimHandlerConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "c";
    const s = "ai";
    const u = "su";
    const c = "__tn__";
    let d = o("ConstUriUtils").getUri(r("LinkshimHandlerConfig").linkshim_path);
    if (d != null) {
        d = d.setDomain(r("LinkshimHandlerConfig").linkshim_host);
    }
    function m(e) {
        if (r("LinkshimHandlerConfig").always_use_https) {
            return "https";
        }
        if (e.getProtocol() === "http") {
            return "http";
        }
        return "https";
    }
    function p() {
        return d;
    }
    function _(t, n, a, i, l) {
        const d = m(t);
        let _ = p();
        if (_ != null) {
            _ = _.addQueryParams(new Map([
                [
                    r("LinkshimHandlerConfig").linkshim_url_param,
                    i === true ? t.toStringPreserveQuery() : t.toString()
                ],
                [
                    r("LinkshimHandlerConfig").linkshim_enc_param,
                    n
                ]
            ]));
        }
        if (_ != null) {
            _ = _.setProtocol(d);
        }
        const f = a?.trackingNodes;
        const g = a?.callbacks;
        const h = a?.adInfo;
        if (h != null && _ != null) {
            _ = _.addQueryParam(s, h);
        }
        if (f && f.length && _ != null) {
            _ = _.addQueryParam(c, f.join(""));
        }
        if (g && g.length && _ != null) {
            _ = _.addQueryParam(e, g);
        }
        if (_ != null && o("CometClickIDParameterUtils").shouldBlockClickIDForBMPOptout(l)) {
            _ = _.addQueryParam(u, "1");
        }
        return _ ?? t;
    }
    l.getLynxURIProtocol = m;
    l.getShimURI = p;
    l.getShimmedHref = _;
}, 98);