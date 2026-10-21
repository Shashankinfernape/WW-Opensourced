__d("URIAbstractBase", [
    "invariant",
    "FBLogger",
    "PHPStrictQuerySerializer",
    "URIRFC3986",
    "URISchemes",
    "err",
    "isSameOrigin",
    "setHostSubdomain"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = {
        deserialize: o("PHPStrictQuerySerializer").deserialize,
        serialize: o("PHPStrictQuerySerializer").serialize
    };
    const d = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]");
    const m = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
    const p = [];
    const _ = (()=>{
        function t(n, r, a = (e || (e = o("URISchemes"))).Options.INCLUDE_DEFAULTS, i) {
            if (!r) {
                s(0, 2966);
            }
            this.$9 = r;
            this.$7 = "";
            this.$1 = "";
            this.$6 = "";
            this.$5 = "";
            this.$3 = "";
            this.$4 = false;
            this.$8 = {};
            this.$2 = false;
            this.$12 = a;
            this.$13 = i;
            t.parse(this, n, true, r);
            this.$11 = false;
        }
        t.parse = function(a, i, l, s) {
            if (i == null || i === "") {
                return true;
            }
            if (i instanceof t) {
                a.setProtocol(i.getProtocol());
                a.setDomain(i.getDomain());
                a.setPort(i.getPort());
                a.setPath(i.getPath());
                a.setQueryData(s.deserialize(s.serialize(i.getQueryData())));
                a.setFragment(i.getFragment());
                a.setIsGeneric(i.getIsGeneric());
                a.setForceFragmentSeparator(i.getForceFragmentSeparator());
                a.setOriginalRawQuery(i.getOriginalRawQuery());
                a.setQueryParamModified(false);
                return true;
            }
            const c = i.toString().trim();
            const p = (u || (u = o("URIRFC3986"))).parse(c) || {
                fragment: null,
                scheme: null,
                query: null
            };
            if (!l && !(e || (e = o("URISchemes"))).isAllowed(p.scheme, a.$12, a.$13) || (a.setProtocol(p.scheme || ""), !l && d.test(p.host || ""))) {
                return false;
            }
            a.setDomain(p.host || "");
            a.setPort(p.port ?? "");
            a.setPath(p.path || "");
            if (l) {
                a.setQueryData(s.deserialize(p.query || "") || {});
            } else {
                try {
                    a.setQueryData(s.deserialize(p.query || "") || {});
                } catch (e) {
                    return false;
                }
            }
            a.setFragment(p.fragment || "");
            if (p.fragment === "") {
                a.setForceFragmentSeparator(true);
            }
            a.setIsGeneric(p.isGenericURI || false);
            a.setOriginalRawQuery(p.query);
            a.setQueryParamModified(false);
            if (p.userinfo !== null) {
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (userinfo is not allowed in a URI): ${c}`);
                }
                return false;
            }
            if (!a.getDomain() && a.getPath().indexOf("\\") !== -1) {
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (no domain but multiple back-slashes): ${c}`);
                }
                return false;
            }
            if (!c.startsWith("#") && !a.getProtocol() && m.test(c)) {
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (unsafe protocol-relative URLs): ${c}'`);
                }
                return false;
            }
            if (a.getDomain() && a.getPath() && !a.getPath().startsWith("/")) {
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (domain and path where path lacks leading slash): ${c}`);
                }
                return false;
            }
            if (a.getProtocol() && a.getProtocol() !== "file" && !a.getIsGeneric() && !a.getDomain() && a.getPath() !== "") {
                r("FBLogger")("uri").warn(`URI.parse: invalid URI (protocol "${a.getProtocol()}" with no domain)`);
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (protocol and path but no domain): ${c}`);
                }
                return false;
            }
            return true;
        };
        t.tryParse = function(n, r, o, a) {
            const e = new t(null, r, o, a);
            if (t.parse(e, n, false, r)) {
                return e;
            }
            return null;
        };
        t.isValid = function(n, r, o, a) {
            return !!t.tryParse(n, r, o, a);
        };
        const t_prototype = t.prototype;
        t_prototype.setProtocol = function(n) {
            if (!(e || (e = o("URISchemes"))).isAllowed(n, this.$12, this.$13)) {
                s(0, 11793, n);
            }
            this.$7 = n;
            return this;
        };
        t_prototype.getProtocol = function() {
            return (this.$7 || "").toLowerCase();
        };
        t_prototype.setSecure = function(t) {
            return this.setProtocol(t ? "https" : "http");
        };
        t_prototype.isSecure = function() {
            return this.getProtocol() === "https";
        };
        t_prototype.setDomain = function(t) {
            if (d.test(t)) {
                throw r("err")(`URI.setDomain: unsafe domain specified: ${t} for url ${this.toString()}`);
            }
            this.$1 = t;
            return this;
        };
        t_prototype.getDomain = function() {
            return this.$1;
        };
        t_prototype.setPort = function(t) {
            this.$6 = t;
            return this;
        };
        t_prototype.getPort = function() {
            return this.$6;
        };
        t_prototype.setPath = function(t) {
            this.$5 = t;
            return this;
        };
        t_prototype.getPath = function() {
            return this.$5;
        };
        t_prototype.addQueryData = function(t, n) {
            if (Object.prototype.toString.call(t) === "[object Object]") {
                Object.assign(this.$8, t);
            } else {
                this.$8[t] = n;
            }
            this.$11 = true;
            return this;
        };
        t_prototype.setQueryData = function(t) {
            this.$8 = t;
            this.$11 = true;
            return this;
        };
        t_prototype.getQueryData = function() {
            return this.$8;
        };
        t_prototype.setQueryString = function(t) {
            return this.setQueryData(this.$9.deserialize(t));
        };
        t_prototype.getQueryString = function(t = false, n = function() {
            return false;
        }, r = null) {
            return this.$14(false, t, n, r);
        };
        t_prototype.$14 = function(t = false, n = false, r = function() {
            return false;
        }, o = null) {
            if (!this.$11 && (n || r(this.getDomain()))) {
                return this.$10 ?? "";
            }
            return (t && o ? o : this.$9).serialize(this.getQueryData());
        };
        t_prototype.removeQueryData = function(t) {
            const e = Array.isArray(t) ? t : [
                t
            ];
            for(let n = 0, r = e.length; n < r; ++n){
                delete this.$8[e[n]];
            }
            this.$11 = true;
            return this;
        };
        t_prototype.setFragment = function(t) {
            this.$3 = t;
            this.setForceFragmentSeparator(false);
            return this;
        };
        t_prototype.getFragment = function() {
            return this.$3;
        };
        t_prototype.setForceFragmentSeparator = function(t) {
            this.$2 = t;
            return this;
        };
        t_prototype.getForceFragmentSeparator = function() {
            return this.$2;
        };
        t_prototype.setIsGeneric = function(t) {
            this.$4 = t;
            return this;
        };
        t_prototype.getIsGeneric = function() {
            return this.$4;
        };
        t_prototype.getOriginalRawQuery = function() {
            return this.$10;
        };
        t_prototype.setOriginalRawQuery = function(t) {
            this.$10 = t;
            return this;
        };
        t_prototype.setQueryParamModified = function(t) {
            this.$11 = t;
            return this;
        };
        t_prototype.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment());
        };
        t_prototype.toString = function(t = function() {
            return false;
        }, n = null) {
            return this.$15(false, false, t, n);
        };
        t_prototype.toStringRawQuery = function(t = function() {
            return false;
        }, n = null) {
            return this.$15(true, false, t, n);
        };
        t_prototype.toStringPreserveQuery = function(t = function() {
            return false;
        }, n = null) {
            return this.$15(false, true, t, n);
        };
        t_prototype.toStringStrictQueryEncoding = function(t = function() {
            return false;
        }) {
            return this.$15(true, false, t, c);
        };
        t_prototype.$15 = function(t = false, n = false, r = function() {
            return false;
        }, o = null) {
            let e = this;
            for(let a = 0; a < p.length; a++){
                e = p[a](e);
            }
            return e.$16(t, n, r, o);
        };
        t_prototype.$16 = function(t = false, n = false, r = function() {
            return false;
        }, o = null) {
            let e = "";
            const a = this.getProtocol();
            if (a) {
                e += `${a}:${this.getIsGeneric() ? "" : "//"}`;
            }
            const i = this.getDomain();
            if (i) {
                e += i;
            }
            const l = this.getPort();
            if (l) {
                e += `:${l}`;
            }
            const s = this.getPath();
            if (s) {
                e += s;
            } else if (e) {
                e += "/";
            }
            const u = this.$14(t, n, r, o);
            if (u) {
                e += `?${u}`;
            }
            const c = this.getFragment();
            if (c) {
                e += `#${c}`;
            } else if (this.getForceFragmentSeparator()) {
                e += "#";
            }
            return e;
        };
        t.registerFilter = function(t) {
            p.push(t);
        };
        t_prototype.getOrigin = function() {
            const e = this.getPort();
            return `${this.getProtocol()}://${this.getDomain()}${e ? `:${e}` : ""}`;
        };
        t_prototype.isSameOrigin = function(t) {
            return r("isSameOrigin")(this, t);
        };
        t_prototype.getQualifiedURIBase = function() {
            return new t(this, this.$9).qualify();
        };
        t_prototype.qualify = function() {
            if (!this.getDomain()) {
                const e = new t(window.location.href, this.$9);
                this.setProtocol(e.getProtocol()).setDomain(e.getDomain()).setPort(e.getPort());
            }
            return this;
        };
        t_prototype.setSubdomain = function(t) {
            const e = this.qualify();
            const n = e.getDomain();
            return this.setDomain(r("setHostSubdomain")(n, t));
        };
        t_prototype.getSubdomain = function() {
            if (!this.getDomain()) {
                return "";
            }
            const e = this.getDomain().split(".");
            if (e.length <= 2) {
                return "";
            }
            return e[0];
        };
        t_prototype.isSubdomainOfDomain = function(n) {
            const e = this.getDomain();
            return t.isDomainSubdomainOfDomain(e, n, this.$9);
        };
        t.isDomainSubdomainOfDomain = function(n, r, o) {
            if (r === "" || n === "") {
                return false;
            }
            if (n.endsWith(r)) {
                const e = n.length;
                const a = r.length;
                const i = e - a - 1;
                if (e === a || n[i] === ".") {
                    const l = new t(null, o);
                    l.setDomain(r);
                    return t.isValid(l, o);
                }
            }
            return false;
        };
        return t;
    })();
    l.default = _;
}, 98);