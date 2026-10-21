__d("CometLinkShimUtils", [
    "CometClickIDParameterUtils",
    "CometLynxGeneration",
    "ConstUriUtils",
    "LinkshimHandlerConfig",
    "Random",
    "gkx",
    "isLinkshimURI",
    "isRelativeURL",
    "isTrustedDestination",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (!r("LinkshimHandlerConfig").is_linkshim_supported || r("isRelativeURL")(e.toString())) {
            return false;
        }
        const t = e.getProtocol();
        if (t === "tel" || t !== "http" && t !== "https") {
            return false;
        }
        return !r("isTrustedDestination")(e);
    }
    const s = new RegExp("^(l|lm|h)\\..*$", "i");
    function u(e) {
        if (e.getProtocol() !== "http" || !r("isTrustedDestination")(e) || s.test(e.getDomain())) {
            return null;
        }
        return e.setProtocol("https");
    }
    function c(e) {
        const t = e.getQueryParams();
        const n = t.get("enc");
        if (String(n) !== "1") {
            return false;
        }
        return r("gkx")("22875");
    }
    const d = {
        href: "#",
        shimmed: false
    };
    function m(t, callbacks, trackingNodes, i, l, s, m, p, _) {
        if (t == null || t === "#") {
            return d;
        }
        let f = o("ConstUriUtils").getUri(t);
        if (f == null) {
            return d;
        }
        const g = c(f);
        let h = p ?? r("LinkshimHandlerConfig").link_react_default_hash;
        let adInfo = null;
        if (r("isLinkshimURI")(f) && !g) {
            const C = f.getQueryParams();
            const b = C.get(r("LinkshimHandlerConfig").linkshim_url_param);
            const v = C.get(r("LinkshimHandlerConfig").linkshim_enc_param);
            const S = o("ConstUriUtils").getUri(String(b));
            if (S != null) {
                const R = C.get("ai");
                if (typeof R === "string" && r("justknobx")._("6449")) {
                    adInfo = R;
                }
                f = S;
                if (p == null) {
                    h = String(v);
                }
            }
        }
        if (g) {
            const L = f.removeQueryParam("enc");
            if (L != null) {
                f = L;
            }
        }
        const click_ids = r("LinkshimHandlerConfig").click_ids;
        let clickIDAppended = false;
        if (click_ids != null && click_ids.length > 0) {
            let I = null;
            if (i != null) {
                I = i;
            } else {
                const T = Math.floor(r("Random").random() * click_ids.length);
                I = click_ids[T];
            }
            f = o("CometClickIDParameterUtils").appendClickIDQueryParam(f, I, _);
            clickIDAppended = true;
        }
        const aggr_ids = r("LinkshimHandlerConfig").aggr_ids;
        if (r("gkx")("18296") && aggr_ids != null && aggr_ids.length > 0) {
            let x = null;
            if (l != null) {
                x = l;
            } else {
                const $ = Math.floor(r("Random").random() * aggr_ids.length);
                x = aggr_ids[$];
            }
            f = o("CometClickIDParameterUtils").appendBRIDQueryParam(f, x);
        }
        const P = u(f);
        if (P != null) {
            f = P;
        }
        if (e(f) && s !== true && !g) {
            const N = o("CometLynxGeneration").getShimmedHref(f, h, {
                adInfo,
                callbacks,
                trackingNodes
            }, m, _);
            const M = r("LinkshimHandlerConfig").blocklisted_domains.some((e)=>f?.toString().includes(e));
            if (M) {
                return {
                    clickIDAppended,
                    href: N.toString(),
                    shimmed: true,
                    unshimmedHref: N.toString()
                };
            }
            return {
                clickIDAppended,
                ghlEncrypted: g,
                href: N.toString(),
                shimmed: true,
                unshimmedHref: m === true ? f.toStringPreserveQuery() : f.toString()
            };
        } else {
            return {
                clickIDAppended,
                ghlEncrypted: g,
                href: m === true ? f.toStringPreserveQuery() : f.toString(),
                shimmed: false
            };
        }
    }
    l.getLinkShimInfo = m;
    l.use_rel_no_referrer = r("LinkshimHandlerConfig").use_rel_no_referrer;
}, 98);