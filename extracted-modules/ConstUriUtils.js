__d("ConstUriUtils", [
    "CometLruCache",
    "ConstUriUtilsGating",
    "ExecutionEnvironment",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "URIRFC3986",
    "URISchemes",
    "UriNeedRawQuerySVConfig",
    "isSameOrigin",
    "nullthrows",
    "structuredClone"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = o("CometLruCache").create(5000);
    const m = new RegExp("(^|\\.)facebook\\.com$", "i");
    const p = new RegExp("(^|\\.)messenger\\.com$", "i");
    const _ = new RegExp("(^|\\.)instagram\\.com$", "i");
    const f = new RegExp("(^|\\\\.)meta\\\\.(com|ai)$", "i");
    const g = new RegExp("(^|\\.)threads\\.com$", "i");
    const h = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
    const y = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]");
    const C = r("UriNeedRawQuerySVConfig").uris.map((e)=>({
            domain: e,
            valid: k(e)
        }));
    const b = [];
    const v = [];
    function S(queryParams, t) {
        const n = {};
        if (queryParams != null) {
            for (const o of queryParams.entries()){
                n[o[0]] = o[1];
            }
        } else {
            r("FBLogger")("ConstUriUtils").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");
        }
        return t.serialize(n);
    }
    function R(e, t, n) {
        let o = c || (c = r("PHPQuerySerializer"));
        if ([
            "http",
            "https"
        ].includes(t) && L(e)) {
            if (e.includes("doubleclick.net") && n != null && !n.startsWith("http")) {
                return o;
            }
            o = r("PHPQuerySerializerNoEncoding");
        }
        return o;
    }
    function L(e) {
        return e != null && C.some((t)=>t.valid && E(e, t.domain));
    }
    function E(e, t) {
        if (t === "" || e === "") {
            return false;
        }
        if (e.endsWith(t)) {
            const n = e.length - t.length - 1;
            if (n === -1 || e[n] === ".") {
                return true;
            }
        }
        return false;
    }
    function k(e) {
        return !y.test(e);
    }
    function I(e, t) {
        const n = t.protocol != null && t.protocol !== "" ? t.protocol : e.getProtocol();
        const r = t.domain != null ? R(t.domain, n) : e.getSerializer();
        const o = {
            domain: e.getDomain(),
            fragment: e.getFragment(),
            fragmentSeparator: e.hasFragmentSeparator(),
            isGeneric: e.isGeneric(),
            originalRawQuery: e.getOriginalRawQuery(),
            path: e.getPath(),
            port: e.getPort(),
            protocol: e.getProtocol(),
            queryParams: e.getQueryParams(),
            serializer: r,
            subdomain: e.getSubdomain()
        };
        const a = babelHelpers.extends({}, o, t);
        const i = t.queryParams != null && t.queryParams.size !== 0;
        return P.getUribyObject(a, i);
    }
    function T(e, t, n = false, r) {
        const o = e.protocol !== "" ? `${e.protocol}:${e.isGeneric ? "" : "//"}` : "";
        const a = e.domain !== "" ? e.domain : "";
        const i = e.port !== "" ? `:${e.port}` : "";
        const l = e.path !== "" ? e.path : o !== "" && o !== "mailto:" || a !== "" || i !== "" ? "/" : "";
        const s = D(a, e.originalRawQuery, e.queryParams, t, n, r ?? e.serializer);
        const u = s.length > 0 ? "?" : "";
        const c = e.fragment !== "" ? `#${e.fragment}` : "";
        const d = e.fragment === "" && e.fragmentSeparator ? "#" : "";
        return `${o}${a}${i}${l}${u}${s}${d}${c}`;
    }
    function D(e, originalRawQuery, queryParams, r, o = false, a) {
        if (!r && (o || L(e))) {
            return originalRawQuery ?? "";
        }
        return S(queryParams, a);
    }
    function x(t) {
        const r = t.trim();
        const a = (e || (e = o("URIRFC3986"))).parse(r) || {
            fragment: null,
            host: null,
            isGenericURI: false,
            query: null,
            scheme: null,
            userinfo: null
        };
        const i = a.host || "";
        const l = i.split(".");
        const s = l.length >= 3 ? l[0] : "";
        const u = R(i, a.scheme || "", a.query);
        const c = u.deserialize(a.query || "") || {};
        const d = new Map(Object.entries(c));
        const m = $({
            domain: i,
            fragment: a.fragment || "",
            fragmentSeparator: a.fragment === "",
            isGeneric: a.isGenericURI,
            originalRawQuery: a.query,
            path: a.path || "",
            port: a.port != null ? String(a.port) : "",
            protocol: (a.scheme || "").toLowerCase(),
            queryParams: d,
            serializer: u,
            subdomain: s,
            userInfo: a?.userinfo ?? ""
        }, t);
        return m;
    }
    function $(e, t, n = (u || (u = o("URISchemes"))).Options.INCLUDE_DEFAULTS, a) {
        const i = {
            components: babelHelpers.extends({}, e),
            error: "",
            valid: true
        };
        const i_components = i.components;
        if (!(u || (u = o("URISchemes"))).isAllowed(e.protocol, n, a)) {
            i.valid = false;
            i.error = `The URI protocol "${String(e.protocol)}" is not allowed.`;
            return i;
        }
        if (!k(e.domain || "")) {
            i.valid = false;
            i.error = `This is an unsafe domain ${String(e.domain)}`;
            return i;
        }
        i_components.port = e.port != null && String(e.port) || "";
        if (e.userInfo) {
            i.valid = false;
            i.error = `Invalid URI: (userinfo is not allowed in a URI ${String(e.userInfo)})`;
            return i;
        }
        const s = t != null && t !== "" ? t : T(i_components, false);
        if (i_components.domain === "" && i_components.path.indexOf("\\") !== -1) {
            i.valid = false;
            i.error = `Invalid URI: (no domain but multiple back-slashes ${s})`;
            return i;
        }
        if (!i_components.protocol && h.test(s)) {
            i.valid = false;
            i.error = `Invalid URI: (unsafe protocol-relative URI ${s})`;
            return i;
        }
        if (i_components.domain !== "" && i_components.path !== "" && !i_components.path.startsWith("/")) {
            i.valid = false;
            i.error = `Invalid URI: (domain and pathwhere path lacks leading slash ${s})`;
            return i;
        }
        if (i_components.protocol !== "" && i_components.protocol !== "file" && !i_components.isGeneric && !i_components.domain && i_components.path !== "") {
            r("FBLogger")("ConstUriUtils").warn(`invalid URI (protocol "${i_components.protocol}" with no domain)`);
            const c = o("ConstUriUtilsGating").enforceNoMissingDomain();
            if (c) {
                i.valid = false;
                i.error = `Invalid URI: (protocol ${i_components.protocol} with no domain)`;
                return i;
            }
        }
        return i;
    }
    var P = (()=>{
        function e(e) {
            this.queryParams = new Map;
            this.domain = e.domain;
            this.fragment = e.fragment;
            this.fragmentSeparator = !!e.fragmentSeparator;
            this.isGenericProtocol = !!e.isGeneric;
            this.path = e.path;
            this.originalRawQuery = e.originalRawQuery;
            this.port = e.port;
            this.protocol = e.protocol;
            this.queryParams = e.queryParams;
            this.serializer = e.serializer;
            this.subdomain = e.subdomain;
        }
        const e_prototype = e.prototype;
        e_prototype.addQueryParam = function(t, n) {
            if (t) {
                const e = this.getQueryParams();
                e.set(t, n);
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.addQueryParams = function(t) {
            if (t.size > 0) {
                const e = this.getQueryParams();
                t.forEach((t, n)=>{
                    e.set(n, t);
                });
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.addQueryParamString = function(t) {
            if (t) {
                const e = t.startsWith("?") ? t.slice(1) : t;
                const n = this.getQueryParams();
                e.split("&").map((e)=>{
                    const t = e.split("=");
                    const r = t[0];
                    const o = t[1];
                    n.set(r, o);
                });
                return I(this, {
                    queryParams: n
                });
            }
            return this;
        };
        e_prototype.addTrailingSlash = function() {
            const e = this.getPath();
            if (e.length > 0 && e[e.length - 1] !== "/") {
                return this.setPath(`${e}/`);
            }
            return this;
        };
        e_prototype.getDomain = function() {
            return this.domain;
        };
        e_prototype.getFragment = function() {
            return this.fragment;
        };
        e_prototype.getOrigin = function() {
            const e = this.getPort();
            return `${this.getProtocol()}://${this.getDomain()}${e ? `:${e}` : ""}`;
        };
        e_prototype.getOriginalRawQuery = function() {
            return this.originalRawQuery;
        };
        e_prototype.getPath = function() {
            return this.path;
        };
        e_prototype.getPort = function() {
            return this.port;
        };
        e_prototype.getProtocol = function() {
            return this.protocol.toLowerCase();
        };
        e_prototype.getQualifiedUri = function() {
            if (!this.getDomain()) {
                let n = (typeof window !== "undefined" ? window : self)?.location?.href;
                if (n == null) {
                    r("FBLogger")("ConstUriUtils").blameToPreviousFile().warn("Cannot get qualified URI for current URI as there is no current location");
                    return null;
                }
                if ((s || (s = r("ExecutionEnvironment"))).isInWorker && n.startsWith("blob:")) {
                    n = n.substring(5, n.length);
                }
                const o = n.slice(0, n.indexOf("/", n.indexOf(":") + 3));
                return e.getUri(o + this.toString());
            }
            return this;
        };
        e_prototype.getQueryParam = function(t) {
            const e = this.queryParams.get(t);
            if (typeof e === "string") {
                return e;
            }
            const n = JSON.stringify(e);
            if (n == null) {
                return n;
            }
            return JSON.parse(n);
        };
        e_prototype.getQueryData = function() {
            return Object.fromEntries(this.getQueryParams());
        };
        e_prototype.getQueryParams = function() {
            if (r("structuredClone") != null) {
                return r("structuredClone")(this.queryParams);
            }
            const e = JSON.stringify(Array.from(this.queryParams), function(e, t) {
                if (Array.isArray(t)) {
                    return {
                        __CUUArr: true,
                        value: babelHelpers.extends({}, t)
                    };
                }
                return t;
            });
            const t = JSON.parse(e, function(e, t) {
                if (t != null && typeof t === "object" && t.__CUUArr) {
                    return Object.keys(t.value).reduce((acc, key)=>{
                        acc[key] = t.value[key];
                        return acc;
                    }, []);
                }
                return t;
            });
            return new Map(t);
        };
        e_prototype.getQueryString = function(t = false) {
            return D(this.domain, this.originalRawQuery, this.queryParams, false, t, this.serializer);
        };
        e_prototype.getRegisteredDomain = function() {
            if (!this.getDomain()) {
                return "";
            }
            if (!this.isFacebookUri()) {
                return null;
            }
            const e = this.getDomain().split(".");
            let t = e.indexOf("facebook");
            if (t === -1) {
                t = e.indexOf("workplace");
            }
            return e.slice(t).join(".");
        };
        e_prototype.getSerializer = function() {
            return this.serializer;
        };
        e_prototype.getSubdomain = function() {
            return this.subdomain;
        };
        e_prototype.getUnqualifiedUri = function() {
            if (this.getDomain()) {
                const t = this.toString();
                return e.getUri(t.slice(t.indexOf("/", t.indexOf(":") + 3)));
            }
            return this;
        };
        e.getUri = function(n) {
            const t = n.trim();
            let o = d.get(t);
            if (o == null) {
                const a = x(t);
                if (a.valid) {
                    o = new e(a.components);
                    d.set(t, o);
                } else {
                    r("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(a.error);
                    return null;
                }
            }
            return o;
        };
        e.getUriOrThrow = function(n) {
            return r("nullthrows")(e.getUri(n));
        };
        e.getUribyObject = function(n, o) {
            const t = T(n, o);
            let a = d.get(t);
            if (a == null) {
                if (o) {
                    n.originalRawQuery = S(n.queryParams, n.serializer);
                }
                const i = $(n);
                if (i.valid) {
                    a = new e(i.components);
                    d.set(t, a);
                } else {
                    r("FBLogger")("ConstUri").mustfix(i.error);
                    return null;
                }
            }
            return a;
        };
        e_prototype.hasFragmentSeparator = function() {
            return this.fragmentSeparator;
        };
        e_prototype.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || this.queryParams.size > 0 || this.getFragment());
        };
        e_prototype.isFacebookUri = function() {
            const e = this.toString();
            if (e === "") {
                return false;
            }
            if (!this.getDomain() && !this.getProtocol()) {
                return true;
            }
            return [
                "https",
                "http"
            ].indexOf(this.getProtocol()) !== -1 && (m.test(this.getDomain()) || p.test(this.getDomain()) || _.test(this.getDomain()) || f.test(this.getDomain())) || g.test(this.getDomain());
        };
        e_prototype.isGeneric = function() {
            return this.isGenericProtocol;
        };
        e_prototype.isSameOrigin = function(t) {
            return r("isSameOrigin")(this, t);
        };
        e_prototype.isSubdomainOfDomain = function(n) {
            const t = e.getUri(n);
            return t != null && E(this.domain, n);
        };
        e_prototype.isSecure = function() {
            return this.getProtocol() === "https";
        };
        e_prototype.removeQueryParams = function(t) {
            if (Array.isArray(t) && t.length > 0) {
                const e = this.getQueryParams();
                t.map((t)=>e.delete(t));
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.removeQueryParam = function(t) {
            if (t) {
                const e = this.getQueryParams();
                e.delete(t);
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.removeSubdomain = function() {
            const e = this.getQualifiedUri();
            if (e == null) {
                return null;
            }
            const t = e.getDomain();
            let n = t.split(".");
            if (n.length >= 3) {
                n = n.slice(-2);
            }
            return I(e, {
                domain: n.join("."),
                subdomain: ""
            });
        };
        e_prototype.replaceQueryParam = function(t, n) {
            if (t) {
                const e = this.getQueryParams();
                e.set(t, n);
                return I(this, {
                    queryParams: e
                });
            }
            return this;
        };
        e_prototype.replaceQueryParams = function(t) {
            return I(this, {
                queryParams: t
            });
        };
        e_prototype.replaceQueryParamString = function(t) {
            if (t != null) {
                const e = t.startsWith("?") ? t.slice(1) : t;
                const n = this.getQueryParams();
                e.split("&").map((e)=>{
                    const t = e.split("=");
                    const r = t[0];
                    const o = t[1];
                    n.set(r, o);
                });
                return I(this, {
                    queryParams: n
                });
            }
            return this;
        };
        e_prototype.setDomain = function(t) {
            if (t) {
                const e = t.split(".");
                const n = e.length >= 3 ? e[0] : "";
                return I(this, {
                    domain: t,
                    subdomain: n
                });
            }
            return this;
        };
        e_prototype.setFragment = function(fragment) {
            if (fragment === "#") {
                return I(this, {
                    fragment: "",
                    fragmentSeparator: true
                });
            }
            return I(this, {
                fragment,
                fragmentSeparator: fragment !== ""
            });
        };
        e_prototype.setPath = function(path) {
            if (path != null) {
                return I(this, {
                    path
                });
            }
            return this;
        };
        e_prototype.setPort = function(port) {
            if (port) {
                return I(this, {
                    port
                });
            }
            return this;
        };
        e_prototype.setProtocol = function(protocol) {
            if (protocol) {
                return I(this, {
                    protocol
                });
            }
            return this;
        };
        e_prototype.setSecure = function(t) {
            return this.setProtocol(t ? "https" : "http");
        };
        e_prototype.setSubDomain = function(t) {
            if (t) {
                const e = this.getQualifiedUri();
                if (e == null) {
                    return null;
                }
                const n = e.getDomain();
                const r = n.split(".");
                if (r.length >= 3) {
                    r[0] = t;
                } else {
                    r.unshift(t);
                }
                return I(e, {
                    domain: r.join("."),
                    subdomain: t
                });
            }
            return this;
        };
        e_prototype.stripTrailingSlash = function() {
            return this.setPath(this.getPath().replace(/\/$/, ""));
        };
        e_prototype.qualifyDomain = function(t) {
            if (!this.getDomain()) {
                let e = t;
                if (e == null) {
                    e = this.getQualifiedUri();
                }
                if (e == null) {
                    return this;
                }
                return I(this, {
                    domain: e.getDomain(),
                    protocol: e.getProtocol()
                });
            }
            return this;
        };
        e.$1 = function(t) {
            let e = t;
            for (const n of b){
                e = n(e);
            }
            return e;
        };
        e.$2 = function(t, n) {
            let e = n;
            for (const r of v){
                e = r(t, e);
            }
            return e;
        };
        e_prototype.$3 = function(n, r = false) {
            return T({
                domain: e.$1(this.domain),
                fragment: this.fragment,
                fragmentSeparator: this.fragmentSeparator,
                isGeneric: this.isGenericProtocol,
                originalRawQuery: this.originalRawQuery,
                path: this.path,
                port: this.port,
                protocol: this.protocol,
                queryParams: e.$2(this.domain, this.queryParams),
                serializer: n,
                subdomain: this.subdomain,
                userInfo: ""
            }, false, r);
        };
        e_prototype.toStringRawQuery = function() {
            if (this.rawStringValue == null) {
                this.rawStringValue = this.$3(r("PHPQuerySerializerNoEncoding"));
            }
            return this.rawStringValue;
        };
        e_prototype.toString = function() {
            if (this.stringValue == null) {
                this.stringValue = this.$3(this.serializer);
            }
            return this.stringValue;
        };
        e_prototype.toStringPreserveQuery = function() {
            return this.$3(this.serializer, true);
        };
        e.isValidUri = function(n) {
            const t = d.get(n);
            if (t != null) {
                return true;
            }
            const r = x(n);
            if (r.valid) {
                d.set(n, new e(r.components));
                return true;
            }
            return false;
        };
        return e;
    })();
    function N(e) {
        if (e instanceof P) {
            return e;
        }
        return null;
    }
    function M(e) {
        b.push(e);
    }
    function w(e) {
        v.push(e);
    }
    const { getUri, getUriOrThrow, isValidUri } = P;
    l.isSubdomainOfDomain = E;
    l.isConstUri = N;
    l.registerDomainFilter = M;
    l.registerQueryParamsFilter = w;
    l.getUri = getUri;
    l.getUriOrThrow = getUriOrThrow;
    l.isValidUri = isValidUri;
}, 98);