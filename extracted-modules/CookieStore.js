__d("CookieStore", [
    "CookieCoreLoggingConfig",
    "FBLogger",
    "Random",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES != null ? window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES() : null;
    const u = {
        set: function(t) {
            document.cookie = t;
        },
        get: function() {
            return document.cookie;
        }
    };
    function c() {
        return s ?? u;
    }
    function d(e, t, n, r, o, a, i, l) {
        return `${t}=${encodeURIComponent(n)}; ${a !== 0 && a !== undefined && a !== null ? `expires=${new Date(e + a).toUTCString()}; ` : ""}path=${r}; domain=${o}${i ? "; secure" : ""}${l ? `; SameSite=${l}` : ""}`;
    }
    function m(e, t, n) {
        return `${e}=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=${t}; domain=${n}`;
    }
    function p() {
        if (r("CookieCoreLoggingConfig").sampleRate > 0) {
            const t = (e || (e = r("performanceNow")))();
            const n = c().get();
            const o = e() - t;
            const a = o > r("CookieCoreLoggingConfig").maximumIgnorableStallMs && r("Random").coinflip(1 / r("CookieCoreLoggingConfig").sampleRate);
            if (a) {
                r("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(o)).warn("Cookie read exceeded %s milliseconds.", r("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            }
            return n;
        } else {
            return c().get();
        }
    }
    class _ {
        constructor(){
            this.$1 = 0;
        }
        setCookie(t, n, r, o, a, i, l, s) {
            c().set(d(t, n, r, o, a, i, l, s));
        }
        clearCookie(t, n, r) {
            c().set(m(t, n, r));
        }
        getCookie(t) {
            this.$1++;
            const n = p()?.match(`(?:^|;\\s*)${t}=(.*?)(?:;|\$)`);
            if (n) {
                return decodeURIComponent(n[1]);
            }
            return null;
        }
    }
    const f = 10 * 1000;
    class g {
        constructor(){
            this.$1 = {};
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = 0;
        }
        setCookie(updated, n, r, o, a, i, l, s) {
            c().set(d(updated, n, r, o, a, i, l, s));
            this.$1[n] = {
                value: r,
                updated
            };
        }
        clearCookie(t, n, r) {
            c().set(m(t, n, r));
            this.$1[t] = {
                value: null,
                updated: Date.now()
            };
        }
        getCookie(t) {
            const e = this.$5(t);
            const e_cookie = e.cookie;
            return e_cookie;
        }
        $5(t) {
            const e = Date.now();
            const n = this.$1[t];
            if (n) {
                if (n.updated + f < e) {
                    this.$6();
                    return {
                        cookie: this.$5(t).cookie,
                        hit: false
                    };
                }
                this.$3++;
                return {
                    cookie: n.value,
                    hit: true
                };
            }
            if (this.$2 + f < e) {
                this.$6();
                return {
                    cookie: this.$5(t).cookie,
                    hit: false
                };
            }
            this.$3++;
            return {
                cookie: null,
                hit: true
            };
        }
        $6() {
            this.$4++;
            const n = p()?.split(";") ?? [];
            this.$2 = Date.now();
            this.$1 = {};
            for (const r of n){
                const o = r.match("\\s*([^=]+)=(.*)");
                if (o) {
                    this.$1[o[1]] = {
                        value: decodeURIComponent(o[2]),
                        updated: this.$2
                    };
                }
            }
        }
    }
    function h() {
        return new _;
    }
    l.newCookieStore = h;
    l.CookieCacheForTest = g;
    l.CookieStoreSlowForTest = _;
}, 98);