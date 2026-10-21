__d("WAWebMetaAiWaffleAuthTokenCache", [
    "WALogger",
    "WAWebMetaAiWaffleAuthToken",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const ttlMs = 900000;
    const u = 2 * ttlMs;
    let c = null;
    let d = 0;
    let m = 0;
    let hasAttemptedBuild = false;
    let buildCount = 0;
    let f = null;
    let g = 0;
    function h() {
        return Date.now() - m >= ttlMs;
    }
    function y() {
        if ((!hasAttemptedBuild || h()) && f == null) {
            C();
        }
        return c;
    }
    function C() {
        if (f != null) {
            return f;
        }
        const t = g;
        f = o("WAWebMetaAiWaffleAuthToken").buildMetaAiWaffleAuthTokenBlob().then((e)=>{
            if (t === g) {
                m = Date.now();
                hasAttemptedBuild = true;
                if (!(e == null && c != null && Date.now() - d < u)) {
                    c = e;
                    d = m;
                    if (e != null) {
                        buildCount++;
                    }
                }
            }
        }).catch((n)=>{
            if (t === g) {
                m = Date.now();
                hasAttemptedBuild = true;
            }
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Meta AI auth-token cache refresh failed"
            ]))).catching(r("getErrorSafe")(n)).sendLogs("waffle-metaai-auth-token-cache-refresh-failed", {
                sampling: 0.01
            });
        }).finally(()=>{
            f = null;
        });
        return f;
    }
    function b() {
        return {
            ageMs: c != null ? Date.now() - d : null,
            blobLength: c?.length,
            buildCount,
            hasAttemptedBuild,
            isStale: c != null && h(),
            lastAttemptAgeMs: hasAttemptedBuild ? Date.now() - m : null,
            refreshInFlight: f != null,
            ttlMs
        };
    }
    function v() {
        c = null;
        d = 0;
        m = 0;
        hasAttemptedBuild = false;
        g++;
    }
    l.getCachedMetaAiWaffleAuthTokenBlob = y;
    l.refreshMetaAiWaffleAuthTokenBlob = C;
    l.getMetaAiWaffleAuthTokenBlobCacheStateForDebug = b;
    l.clearMetaAiWaffleAuthTokenBlobCache = v;
}, 98);