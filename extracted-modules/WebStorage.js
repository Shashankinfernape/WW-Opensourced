__d("WebStorage", [
    "CookieConsent",
    "FBLogger",
    "err",
    "getErrorSafe",
    "isQuotaExceededError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = {};
    let u = {};
    const c = "localStorage";
    const d = "sessionStorage";
    let m = false;
    const p = typeof window !== "undefined" ? window : self;
    function _(t, n, o) {
        if ((e || (e = r("CookieConsent"))).isFirstPartyStorageAllowed()) {
            if (!Object.prototype.hasOwnProperty.call(t, o)) {
                t[o] = n(o);
            }
            return t[o];
        }
        if (!m) {
            r("FBLogger")("web_storage").warn("Failed to get %s because of missing cookie consent", o.toString());
            m = true;
        }
        return null;
    }
    function f(e) {
        try {
            return p[e];
        } catch (error) {
            r("FBLogger")("web_storage").warn("Failed to get storage for read %s", r("getErrorSafe")(error).message);
        }
        return null;
    }
    function g(e) {
        let t = null;
        try {
            t = p[e];
            if (t != null && typeof t.setItem === "function" && typeof t.removeItem === "function") {
                const n = `__test__${Date.now()}`;
                t.setItem(n, "");
                t.removeItem(n);
            } else {
                return null;
            }
        } catch (error) {
            if (o("isQuotaExceededError").isStorageQuotaExceededError(t, r("getErrorSafe")(error)) === false) {
                r("FBLogger")("web_storage").catching(r("getErrorSafe")(error)).warn("Failed to get WebStorage of type `%s`", e);
                return null;
            }
        }
        return t;
    }
    function h(e) {
        let t = null;
        try {
            t = p[e];
            if (t != null && typeof t.setItem === "function" && typeof t.removeItem === "function") {
                const n = `__test__${Date.now()}`;
                t.setItem(n, "");
                t.removeItem(n);
            }
        } catch (error) {
            if (o("isQuotaExceededError").isStorageQuotaExceededError(t, r("getErrorSafe")(error)) === true) {
                return true;
            }
        }
        return false;
    }
    function y(e) {
        const t = [];
        for(let n = 0; n < e.length; n++){
            t.push(e.key(n) || "");
        }
        return t;
    }
    function setItemGuarded(e, t, n) {
        if (e == null) {
            return r("err")("storage cannot be null");
        }
        let o = null;
        try {
            e.setItem(t, n);
        } catch (error) {
            const a = y(e).map((t)=>{
                const length = (e.getItem(t) || "").length;
                return `${t}(${length})`;
            });
            o = r("err")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", r("getErrorSafe")(error).name ? `${r("getErrorSafe")(error).name}: ` : "", t, n.length, a.join());
        }
        return o;
    }
    const b = {
        getLocalStorage: function() {
            return _(s, g, c);
        },
        getAllowlistedKeyFromLocalStorage: function(t) {
            return _(u, f, c)?.getItem(t);
        },
        getSessionStorage: function() {
            return _(s, g, d);
        },
        getAllowlistedKeyFromSessionStorage: function(t) {
            return _(u, f, d)?.getItem(t);
        },
        getLocalStorageForRead: function() {
            return _(u, f, c);
        },
        getSessionStorageForRead: function() {
            return _(u, f, d);
        },
        isLocalStorageQuotaExceeded: function() {
            return h(c);
        },
        isSessionStorageQuotaExceeded: function() {
            return h(d);
        },
        setItemGuarded,
        setAllowlistedKeyToLocalStorage: function(t, n, r) {
            return setItemGuarded(t, n, r);
        },
        clearCaches: function() {
            s = {};
            u = {};
        }
    };
    l.default = b;
}, 98);