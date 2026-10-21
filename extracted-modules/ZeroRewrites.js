__d("ZeroRewrites", [
    "URI",
    "ZeroRewriteRules",
    "getCrossOriginTransport",
    "getSameOriginTransport",
    "isFacebookURI"
], function(t, n, r, o, a, i) {
    let e;
    var l = {
        rewriteURI: function(t) {
            let e = t;
            if (!n("isFacebookURI")(e) || l._isWhitelisted(e)) {
                return e;
            }
            const r = l._getRewrittenSubdomain(e);
            if (r != null) {
                e = e.setSubdomain(r);
            }
            return e;
        },
        getTransportBuilderForURI: function(t) {
            if (l.isRewritten(t)) {
                return n("getCrossOriginTransport").withCredentials;
            }
            return n("getSameOriginTransport");
        },
        isRewriteSafe: function(r) {
            if (Object.keys(n("ZeroRewriteRules").rewrite_rules).length === 0 || !n("isFacebookURI")(r)) {
                return false;
            }
            const t = l._getCurrentURI().getDomain();
            const o = new (e || (e = n("URI")))(r).qualify().getDomain();
            return t === o || l.isRewritten(r);
        },
        isRewritten: function(t) {
            const e = t.getQualifiedURI();
            if (Object.keys(n("ZeroRewriteRules").rewrite_rules).length === 0 || !n("isFacebookURI")(e) || l._isWhitelisted(e)) {
                return false;
            }
            const r = e.getSubdomain();
            const o = l._getCurrentURI();
            const a = l._getRewrittenSubdomain(o);
            return e.getDomain() !== o.getDomain() && r === a;
        },
        _isWhitelisted: function(t) {
            let e = t.getPath();
            if (!e.endsWith("/")) {
                e += "/";
            }
            return n("ZeroRewriteRules").whitelist && n("ZeroRewriteRules").whitelist[e] === 1;
        },
        _getRewrittenSubdomain: function(t) {
            const e = t.getQualifiedURI().getSubdomain();
            return n("ZeroRewriteRules").rewrite_rules[e];
        },
        _getCurrentURI: function() {
            return new (e || (e = n("URI")))("/").qualify();
        }
    };
    a.exports = l;
}, null);