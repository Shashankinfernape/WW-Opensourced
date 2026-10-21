__d("WebSession", [
    "FBLogger",
    "Random",
    "WebSessionDefaultTimeoutMs",
    "WebStorage"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 36;
    const u = 6;
    const c = s ** u;
    function d(e) {
        if (e == null || Number.isFinite(e) === false || e <= 0) {
            return null;
        }
        return e;
    }
    function m(e) {
        if (e == null) {
            return null;
        }
        const t = parseInt(e, 10);
        if (`${t}` !== e) {
            r("FBLogger")("web_session").warn("Expected the web session expiry time to parse as an integer. Found `%s`.", String(e));
            return null;
        }
        return d(t);
    }
    function p(e) {
        if (e == null) {
            return null;
        }
        if (e.length !== u) {
            r("FBLogger")("web_session").warn("Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.", u, e.length, e);
            return null;
        }
        if (/^[a-z0-9]+$/.test(e) === false) {
            r("FBLogger")("web_session").warn("Expected the web session ID to be a base-%d encoded string. Received `%s`.", s, e);
            return null;
        }
        return e;
    }
    function _(e) {
        if (e == null) {
            return null;
        }
        if (typeof e !== "string" && !(e instanceof String)) {
            r("FBLogger")("web_session").warn("A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.", e);
            return null;
        }
        const t = e.split(":");
        const n = t[0];
        const o = t[1];
        const expiryTime = m(o);
        const i = p(n);
        if (expiryTime == null || i == null) {
            return null;
        }
        return {
            expiryTime,
            id: i
        };
    }
    function f() {
        const e = Math.floor(o("Random").random() * c);
        const t = e.toString(s);
        return "0".repeat(u - t.length) + t;
    }
    let g = null;
    function h() {
        if (g == null) {
            g = f();
        }
        return g;
    }
    function y(t = Date.now()) {
        const n = (e || (e = r("WebStorage"))).getLocalStorageForRead();
        if (n == null) {
            return null;
        }
        try {
            const o = _(n.getItem("Session"));
            if (o && t < o.expiryTime) {
                return o;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    function C() {
        const t = (e || (e = r("WebStorage"))).getSessionStorageForRead();
        if (t == null) {
            return null;
        }
        const n = p(t.getItem("TabId"));
        if (n == null) {
            const o = (e || (e = r("WebStorage"))).getSessionStorage();
            if (o == null) {
                return null;
            }
            const a = f();
            e.setItemGuarded(o, "TabId", a);
            return a;
        }
        return n;
    }
    function b(t) {
        if (t !== undefined && d(t) == null) {
            r("FBLogger")("web_session").warn("`WebSession.extend()` was passed an invalid target expiry time `%s`.", t);
            return;
        }
        const n = Date.now();
        const o = t ?? n + r("WebSessionDefaultTimeoutMs");
        const a = y(n);
        if (!(a && a.expiryTime >= o || o <= n)) {
            const i = (e || (e = r("WebStorage"))).getLocalStorage();
            if (i != null) {
                const l = a == null ? f() : a.id;
                (e || (e = r("WebStorage"))).setItemGuarded(i, "Session", `${l}:${o}`);
            }
        }
    }
    function v() {
        return y()?.id;
    }
    function S() {
        const n = h();
        const r = v() ?? "";
        const o = C() ?? "";
        return `${r}:${o}:${n}`;
    }
    function R() {
        return h();
    }
    l.getTabId = C;
    l.extend = b;
    l.getSessionId = v;
    l.getId = S;
    l.getPageId_DO_NOT_USE = R;
}, 98);