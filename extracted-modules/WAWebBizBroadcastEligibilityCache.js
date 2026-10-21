__d("WAWebBizBroadcastEligibilityCache", [
    "WAWebUserPrefsStore",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    const e = "bb_eligibility_cache";
    function s(e) {
        const t = {};
        const n = c(e.bbPro);
        if (n != null) {
            t.bbPro = n;
        }
        const r = m(e.genai);
        if (r != null) {
            t.genai = r;
        }
        const o = p(e.marketingMessages);
        if (o != null) {
            t.marketingMessages = o;
        }
        const a = _(e.metaVerified);
        if (a != null) {
            t.metaVerified = a;
        }
        return t;
    }
    function u(e) {
        if (e === "ELIGIBLE_TO_ONBOARD" || e === "NOT_ELIGIBLE" || e === "ONBOARDED") {
            return e;
        }
        return null;
    }
    function c(e) {
        if (e == null || typeof e !== "object" || Array.isArray(e)) {
            return null;
        }
        const t = u(e.status);
        if (t == null) {
            return null;
        }
        return {
            status: t
        };
    }
    function d(e) {
        if (e === "SUCCESS" || e === "FAIL" || e === "PAUSED" || e === "WARNING") {
            return e;
        }
        return null;
    }
    function m(e) {
        if (e == null || typeof e !== "object" || Array.isArray(e)) {
            return null;
        }
        if (e.status === "SUCCESS" || e.status === "FAIL") {
            return {
                status: e.status
            };
        }
        return null;
    }
    function p(e) {
        if (e == null || typeof e !== "object" || Array.isArray(e)) {
            return null;
        }
        const t = d(e.status);
        if (t == null) {
            return null;
        }
        const n = {
            status: t
        };
        if (typeof e.expiration === "number") {
            n.expiration = e.expiration;
        }
        return n;
    }
    function _(e) {
        if (e == null || typeof e !== "object" || Array.isArray(e)) {
            return null;
        }
        const t = d(e.status);
        if (t == null) {
            return null;
        }
        const n = {
            status: t
        };
        if (typeof e.shouldShowPrivacyInterstitialToNewUsers === "boolean") {
            n.shouldShowPrivacyInterstitialToNewUsers = e.shouldShowPrivacyInterstitialToNewUsers;
        }
        return n;
    }
    function f() {
        const t = r("WAWebUserPrefsStore").getUser(e);
        if (t == null || typeof t !== "object" || Array.isArray(t)) {
            return null;
        }
        const { lastFailureAt: n, lastSuccessAt: o, result: a } = t;
        if (typeof o !== "number" || !isFinite(o) || n != null && (typeof n !== "number" || !isFinite(n)) || a == null || typeof a !== "object" || Array.isArray(a)) {
            return null;
        }
        return {
            lastFailureAt: n ?? null,
            lastSuccessAt: o,
            result: s(a)
        };
    }
    function g(t) {
        const n = {
            lastFailureAt: null,
            lastSuccessAt: Date.now(),
            result: t
        };
        r("WAWebUserPrefsStore").setUser(e, n, {
            shouldWriteToIdb: false
        });
    }
    function h() {
        const o = f();
        const a = {
            lastFailureAt: Date.now(),
            lastSuccessAt: o?.lastSuccessAt ?? 0,
            result: o?.result ?? {}
        };
        r("WAWebUserPrefsStore").setUser(e, a, {
            shouldWriteToIdb: false
        });
    }
    function y(e) {
        const t = Date.now();
        if (t - e.lastSuccessAt >= b()) {
            return false;
        }
        const n = e.result.marketingMessages;
        return !(n != null && n.status === "PAUSED" && n.expiration != null && t >= n.expiration * S());
    }
    function C({ lastFailureAt: t }) {
        if (t == null) {
            return false;
        }
        return Date.now() - t < v();
    }
    function b() {
        return r("justknobx")._("825");
    }
    function v() {
        return r("justknobx")._("2071");
    }
    function S() {
        return r("justknobx")._("2475");
    }
    function R() {
        return r("justknobx")._("2610");
    }
    function L() {
        r("WAWebUserPrefsStore").setUser(e, null, {
            shouldWriteToIdb: false
        });
    }
    l.readCache = f;
    l.writeCacheSuccess = g;
    l.writeCacheFailure = h;
    l.isCacheFresh = y;
    l.isInFailureBackoff = C;
    l.getEligibilityRefreshIntervalMs = b;
    l.getEligibilityFailureBackoffMs = v;
    l.isEligibilityCachingEnabled = R;
    l.clearCache = L;
}, 98);