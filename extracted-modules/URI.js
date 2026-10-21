__d("URI", [
    "Env",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "ReloadPage",
    "URIBase",
    "UriNeedRawQuerySVChecker",
    "cr:1078",
    "cr:1080",
    "ifRequired",
    "isFacebookURI",
    "memoize",
    "memoizeStringOnly",
    "unqualifyURI"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("memoize")(function() {
        return new m(window.location.href);
    });
    function d() {
        return r("ifRequired")("PageTransitions", function(e) {
            if (e.isInitialized()) {
                return e;
            }
        });
    }
    var m = ((a)=>{
        function i(t, n, i) {
            const l = o("UriNeedRawQuerySVChecker").isUriNeedRawQuery(t) ? r("PHPQuerySerializerNoEncoding") : e || (e = r("PHPQuerySerializer"));
            return a.call(this, t, l, n, i) || this;
        }
        babelHelpers.inheritsLoose(i, a);
        const i_prototype = i.prototype;
        i_prototype.setPath = function(t) {
            this.path = t;
            return a.prototype.setPath.call(this, t);
        };
        i_prototype.getPath = function() {
            const e = a.prototype.getPath.call(this);
            return e && e.replace(/^\/+/, "/");
        };
        i_prototype.setProtocol = function(t) {
            this.protocol = t;
            return a.prototype.setProtocol.call(this, t);
        };
        i_prototype.setDomain = function(t) {
            this.domain = t;
            return a.prototype.setDomain.call(this, t);
        };
        i_prototype.setPort = function(t) {
            this.port = t;
            return a.prototype.setPort.call(this, t);
        };
        i_prototype.setFragment = function(t) {
            this.fragment = t;
            return a.prototype.setFragment.call(this, t);
        };
        i_prototype.stripTrailingSlash = function() {
            this.setPath(this.getPath().replace(/\/$/, ""));
            return this;
        };
        i_prototype.addTrailingSlash = function() {
            const e = this.getPath();
            if (e.length > 0 && e[e.length - 1] !== "/") {
                this.setPath(`${e}/`);
            }
            return this;
        };
        i_prototype.valueOf = function() {
            return this.toString();
        };
        i_prototype.getRegisteredDomain = function() {
            if (!this.getDomain()) {
                return "";
            }
            if (!r("isFacebookURI")(this)) {
                return null;
            }
            const e = this.getDomain().split(".");
            let t = e.indexOf("facebook");
            if (t === -1) {
                t = e.indexOf("workplace");
            }
            return e.slice(t).join(".");
        };
        i_prototype.getUnqualifiedURI = function() {
            return r("unqualifyURI")(new i(this));
        };
        i_prototype.getQualifiedURI = function() {
            return new i(this).qualify();
        };
        i_prototype.isSameOrigin = function(t) {
            let e = t;
            if (e == null) {
                e = c();
            } else if (!(e instanceof i)) {
                e = new i(e.toString());
            }
            return a.prototype.isSameOrigin.call(this, e);
        };
        i.goURIOnNewWindow = function(t) {
            i.goURIOnWindow(t, window.open("", "_blank"), true);
        };
        i.goURIOnWindow = function(t, n, r = false, o = false) {
            i.goURIOnWindowWithReference(t, n, r, o);
        };
        i.goURIOnWindowWithReference = function(n, a, l = false, u = false) {
            const e = new i(n);
            let c = l;
            const d = !a || a === window;
            if ((s || (s = r("Env"))).isCQuick && r("isFacebookURI")(e) && d) {
                const m = {
                    cquick: (s || (s = r("Env"))).iframeKey,
                    ctarget: s.iframeTarget,
                    cquick_token: s.iframeToken
                };
                e.addQueryData(m);
                c = false;
            }
            const p = e.toString();
            const _ = a || window;
            const f = window.location.href === p && _ === window;
            if (!c && t.PageTransitions) {
                t.PageTransitions.go(p, u);
            } else if (f) {
                o("ReloadPage").now();
            } else if (u) {
                _.location.replace(p);
            } else {
                _.location.href = p;
            }
            return _;
        };
        i_prototype.go = function(t, r) {
            if (n("cr:1078")) {
                n("cr:1078")(this, t, r);
                return;
            }
            if (n("cr:1080")) {
                n("cr:1080")("uri.go");
            }
            i.go(this, t, r);
        };
        i.tryParseURI = function(n) {
            const t = (u || (u = r("URIBase"))).tryParse(n, e || (e = r("PHPQuerySerializer")));
            if (t) {
                return new i(t);
            }
            return null;
        };
        i.isValidURI = function(n) {
            return (u || (u = r("URIBase"))).isValid(n, e || (e = r("PHPQuerySerializer")));
        };
        i.getRequestURI = function(t = true, n = false) {
            if (t) {
                const e = d();
                if (e) {
                    return e.getCurrentURI(!!n).getQualifiedURI();
                }
            }
            return new i(window.location.href);
        };
        i.getMostRecentURI = function() {
            const e = d();
            if (e) {
                return e.getMostRecentURI().getQualifiedURI();
            }
            return new i(window.location.href);
        };
        i.getNextURI = function() {
            const e = d();
            if (e) {
                return e.getNextURI().getQualifiedURI();
            }
            return new i(window.location.href);
        };
        i.encodeComponent = function(t) {
            return encodeURIComponent(t).replace(/%5D/g, "]").replace(/%5B/g, "[");
        };
        i.decodeComponent = function(t) {
            return decodeURIComponent(t.replace(/\+/g, " "));
        };
        i.normalize = function(t) {
            if (t != null && typeof t === "string") {
                return this.normalizeString(t);
            }
            return new i(t).toString();
        };
        return i;
    })(u || (u = r("URIBase")));
    m.go = function(e, t, r) {
        if (n("cr:1080")) {
            n("cr:1080")("URI.go");
        }
        m.goURIOnWindow(e, window, t, r);
    };
    m.normalizeString = r("memoizeStringOnly")(function(e) {
        return new m(e).toString();
    });
    m.expression = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
    m.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
    l.default = m;
}, 98);