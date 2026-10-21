__d("WAWebCallLinkAutoJoinConsent", [
    "WALogger",
    "WATimeUtils",
    "WAWebCallLinkODS",
    "WAWebSessionStorage"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = "wa_web_call_link_auto_join_consent";
    const p = 2 * o("WATimeUtils").MINUTE_SECONDS * 1000;
    const _ = ":";
    function f(e) {
        const t = r("WAWebSessionStorage");
        if (t == null) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRecordFailedODS();
            return;
        }
        const n = T();
        try {
            t.setItem(m, `${Date.now()}${_}${e}`);
        } catch (e) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRecordFailedODS();
            return;
        }
        if (n) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRecordDuplicatePressODS();
        }
        o("WAWebCallLinkODS").logCallLinkAutoJoinRecordedODS();
    }
    function g(e, t) {
        if (e === true) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS("links-disabled");
            y(t);
        }
    }
    function h(e, t) {
        if (e === true) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS("existing-call");
            y(t);
        }
    }
    function y(e) {
        if (D(E(), e) !== "token-mismatch") {
            L();
        }
    }
    function C() {
        o("WAWebCallLinkODS").logCallLinkAutoJoinJoinAttemptedODS();
    }
    function b() {
        if (T()) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinPendingAtStartupODS();
        }
    }
    function v() {
        if (T()) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS("not-call-link-launch");
        }
        L();
    }
    function S(e, t) {
        if (e !== true) {
            return false;
        }
        const n = D(E(), t);
        if (n !== "token-mismatch") {
            L();
        }
        if (n != null) {
            R(n);
            o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS(n);
            return false;
        }
        o("WAWebCallLinkODS").logCallLinkAutoJoinGrantedODS();
        return true;
    }
    function R(t) {
        e: {
            if (t === "no-consent") {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — no Join press recorded in this tab"
                ]))).sendLogs("call-link-auto-join-no-consent");
                break e;
            }
            if (t === "storage-read-failed") {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — session storage could not be read"
                ]))).sendLogs("call-link-auto-join-storage-read-failed");
                break e;
            }
            if (t === "token-mismatch") {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — recorded Join was for another call link"
                ]))).sendLogs("call-link-auto-join-token-mismatch");
                break e;
            }
            if (t === "expired") {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — recorded Join expired"
                ]))).sendLogs("call-link-auto-join-expired");
                break e;
            }
            if (t === "malformed") {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — stored Join record unreadable"
                ]))).sendLogs("call-link-auto-join-malformed");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        }
    }
    function L() {
        try {
            if (r("WAWebSessionStorage") != null) {
                r("WAWebSessionStorage").removeItem(m);
            }
        } catch (e) {}
    }
    function E() {
        const e = r("WAWebSessionStorage");
        if (e == null) {
            return {
                available: false,
                raw: null
            };
        }
        try {
            return {
                available: true,
                raw: e.getItem(m)
            };
        } catch (e) {
            return {
                available: false,
                raw: null
            };
        }
    }
    function k(e) {
        const t = e.indexOf(_);
        if (t < 0) {
            return null;
        }
        const recordedAt = parseInt(e.slice(0, t), 10);
        if (Number.isNaN(recordedAt)) {
            return null;
        }
        return {
            recordedAt,
            token: e.slice(t + 1)
        };
    }
    function I(recordedAt) {
        const t = Date.now() - recordedAt;
        return t >= 0 && t < p;
    }
    function T() {
        const e = E();
        if (e.raw == null) {
            return false;
        }
        const t = k(e.raw);
        return t != null && I(t.recordedAt);
    }
    function D(e, t) {
        if (!e.available) {
            return "storage-read-failed";
        }
        const e_raw = e.raw;
        if (e_raw == null) {
            return "no-consent";
        }
        const r = k(e_raw);
        if (r == null) {
            return "malformed";
        }
        if (r.token !== t) {
            return "token-mismatch";
        }
        if (I(r.recordedAt)) {
            return null;
        }
        return "expired";
    }
    l.AUTO_JOIN_CONSENT_TTL_MS = p;
    l.recordAutoJoinConsent = f;
    l.dropAutoJoinConsentRefusedByGate = g;
    l.dropAutoJoinConsentRefusedByExistingCall = h;
    l.reportAutoJoinAttempted = C;
    l.reportAutoJoinPendingAtStartup = b;
    l.dropAutoJoinConsentAtLaunch = v;
    l.consumeAutoJoinConsent = S;
    l.clearAutoJoinConsent = L;
}, 98);