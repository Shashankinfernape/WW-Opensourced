__d("URIBase", [
    "ExecutionEnvironment",
    "PHPQuerySerializerNoEncoding",
    "URIAbstractBase",
    "URISchemes",
    "UriNeedRawQuerySVChecker",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n, o) {
        try {
            return r("URIAbstractBase").parse(e, t, n, o);
        } catch (error) {
            const a = r("getErrorSafe")(error);
            const i = new Error(r("err")(a.message));
            i.stack;
            throw i;
        }
    }
    const c = ((t)=>{
        function n(e, n, r, a) {
            let i;
            if (r === undefined) {
                r = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS;
            }
            i = t.call(this, e, n, r, a) || this;
            i.$URIBase$p_1 = n;
            u(i, e, true, n);
            return i;
        }
        babelHelpers.inheritsLoose(n, t);
        n.tryParse = function(t, r, a = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS, i) {
            const e = new n(null, r, a, i);
            if (u(e, t, false, r)) {
                return e;
            }
            return null;
        };
        n.isValid = function(t, r, a = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS, i) {
            return !!n.tryParse(t, r, a, i);
        };
        const n_prototype = n.prototype;
        n_prototype.setDomain = function(n) {
            try {
                t.prototype.setDomain.call(this, n);
            } catch (error) {
                const e = r("getErrorSafe")(error);
                const o = new Error(r("err")(e.message));
                o.stack;
                throw o;
            }
            return this;
        };
        n_prototype.getQualifiedURIBase = function() {
            return new n(this, this.$URIBase$p_1).qualify();
        };
        n_prototype.qualify = function() {
            if (!this.getDomain()) {
                let t = (typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
                    location: {
                        href: ""
                    }
                }).location.href;
                if ((e || (e = r("ExecutionEnvironment"))).isInWorker && t && t.startsWith("blob:")) {
                    t = t.substring(5, t.length);
                }
                const o = new n(t, this.$URIBase$p_1);
                this.setProtocol(o.getProtocol()).setDomain(o.getDomain()).setPort(o.getPort());
            }
            return this;
        };
        n_prototype.isSubdomainOfDomain = function(t) {
            const e = this.getDomain();
            return n.isDomainSubdomainOfDomain(e, t, this.$URIBase$p_1);
        };
        n.isDomainSubdomainOfDomain = function(t, r, o) {
            if (r === "" || t === "") {
                return false;
            }
            if (t.endsWith(r)) {
                const e = t.length;
                const a = r.length;
                const i = e - a - 1;
                if (e === a || t[i] === ".") {
                    const l = new n(null, o);
                    l.setDomain(r);
                    return n.isValid(l, o);
                }
            }
            return false;
        };
        n_prototype.toString = function() {
            return t.prototype.toString.call(this, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, r("PHPQuerySerializerNoEncoding"));
        };
        n_prototype.toStringRawQuery = function() {
            return t.prototype.toStringRawQuery.call(this, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, r("PHPQuerySerializerNoEncoding"));
        };
        n_prototype.toStringPreserveQuery = function() {
            return t.prototype.toStringPreserveQuery.call(this, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, r("PHPQuerySerializerNoEncoding"));
        };
        n_prototype.toStringStrictQueryEncoding = function() {
            return t.prototype.toStringStrictQueryEncoding.call(this, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery);
        };
        n_prototype.getQueryString = function(n = false) {
            return t.prototype.getQueryString.call(this, n, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, r("PHPQuerySerializerNoEncoding"));
        };
        return n;
    })(r("URIAbstractBase"));
    l.default = c;
}, 98);