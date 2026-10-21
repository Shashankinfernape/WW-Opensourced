__d("CookieCore", [
    "CookieCoreConfig",
    "CookieDomain",
    "CookieStore"
], function(t, n, r, o, a, i, l) {
    const e = /_js_(.*)/;
    let s;
    function u() {
        if (!s) {
            s = o("CookieStore").newCookieStore();
        }
        return s;
    }
    function c() {
        return `.${r("CookieDomain").domain}`;
    }
    function d(e) {
        return window.self === window.top;
    }
    function m(e, t) {
        if (v(e)) {
            _(e, t, R(e), L(e), S(e), E(e));
        }
    }
    function p(e, t, n) {
        if (v(e)) {
            _(e, t, R(e), L(e), S(e), E(e), n);
        }
    }
    function _(e, t, n, r, o, a, i) {
        const l = Date.now();
        let s = n;
        if (s != null) {
            if (s > l) {
                s -= l;
            } else if (s === 1) {
                h(e, r, i);
                return;
            }
        }
        u().setCookie(l, e, t, r, i ?? c(), s, o, a);
    }
    function f(e, t) {
        if (d(e)) {
            m(e, t);
        }
    }
    function g(e, t, n, r, o, a) {
        if (d(e)) {
            _(e, t, n, r, o, null, a);
        }
    }
    function h(e, t = "/", n) {
        const r = t || "/";
        u().clearCookie(e, r, n ?? c());
    }
    function y(e) {
        if (v(e)) {
            return u().getCookie(e);
        }
        return null;
    }
    function C(e) {
        return {
            insecure: e.i || false,
            path: e.p != null && e.p !== "" ? e.p : "/",
            ttlSeconds: e.t || 0,
            sameSite: e.s || "None"
        };
    }
    function b(t) {
        if (r("CookieCoreConfig")[t] !== undefined) {
            return C(r("CookieCoreConfig")[t]);
        }
        const n = t.match(e);
        if (n && n.length > 1) {
            return b(n[1]);
        }
        return null;
    }
    function v(e) {
        return b(e) !== null;
    }
    function S(e) {
        const t = b(e);
        if (t == null) {
            return true;
        }
        return !t.insecure;
    }
    function R(e) {
        const t = b(e);
        if (t == null) {
            return null;
        }
        return t.ttlSeconds * 1000;
    }
    function L(e) {
        const t = b(e);
        if (t == null) {
            return "/";
        }
        return t.path;
    }
    function E(e) {
        const t = b(e);
        if (t == null || t.sameSite == null) {
            return null;
        }
        return t.sameSite;
    }
    l.set = m;
    l.setWithDomain_FOR_MESSENGER_LS_ONLY = p;
    l.setWithoutChecks = _;
    l.setIfFirstPartyContext = f;
    l.setWithoutChecksIfFirstPartyContext = g;
    l.clear = h;
    l.get = y;
}, 98);