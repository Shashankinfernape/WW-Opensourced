__d("WAWebBotCertificateRevocationService", [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebCertificateUtils",
    "WAWebMexFetchBotCertificateRevocationList",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "[bot-signature-crl]";
    const u = 21600000;
    const c = 1440 * 60 * 1000;
    const d = 1000;
    const m = 987 * 1000;
    const p = 10;
    const _ = {
        revokedSerialNumbers: new Set,
        lastFetchTime: null,
        nextUpdateTime: null,
        refreshTimerId: null,
        preFetchTimerId: null,
        abortController: null
    };
    function f(e, t) {
        if (_.lastFetchTime == null) {
            return "crl_unavailable";
        }
        if (_.nextUpdateTime != null && t > _.nextUpdateTime) {
            return "crl_stale";
        }
        if (_.revokedSerialNumbers.has(e)) {
            return "revoked";
        }
        return "valid";
    }
    function g(e, t) {
        return f(e, t) !== "valid";
    }
    function h(e) {
        return !(_.lastFetchTime == null || _.nextUpdateTime != null && e > _.nextUpdateTime);
    }
    function y() {
        if (_.refreshTimerId == null) {
            b();
            _.refreshTimerId = self.setInterval(function() {
                b();
            }, u);
        }
    }
    function C(e, t) {
        _.revokedSerialNumbers = new Set(e);
        _.lastFetchTime = Date.now();
        _.nextUpdateTime = t;
        L(t);
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (_.abortController != null) {
                _.abortController.abort();
            }
            const t = new AbortController;
            _.abortController = t;
            try {
                yield o("WAExponentialBackoff").exponentialBackoff({
                    minTimeout: d,
                    maxTimeout: m,
                    retries: p,
                    signal: t.signal
                }, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            yield S(t.signal);
                        } catch (t) {
                            return e(t instanceof Error ? t : r("err")(String(t)));
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            } catch (t) {
                if (t instanceof Error && t.name === "AbortError") {
                    return;
                }
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " CRL refresh failed after retries"
                ])), s).catching(t instanceof Error ? t : r("err")(String(t))).sendLogs("bot-sig-crl-refresh-exhausted");
            } finally{
                if (_.abortController === t) {
                    _.abortController = null;
                }
            }
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebMexFetchBotCertificateRevocationList").mexFetchBotCertificateRevocationList();
            const { crl: n, nextUpdateMs: a } = t;
            if (!e.aborted) {
                if (n == null) {
                    throw r("err")("CRL response has null crl field");
                }
                const i = yield o("WAWebCertificateUtils").parseCrlSerialNumbers(n);
                if (!e.aborted) {
                    if (i == null) {
                        throw r("err")("Failed to parse CRL binary");
                    }
                    C(i, a);
                }
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        if (_.preFetchTimerId != null) {
            self.clearTimeout(_.preFetchTimerId);
            _.preFetchTimerId = null;
        }
        const t = e - c;
        const n = Math.max(0, t - Date.now());
        if (n > 0 && n < u) {
            _.preFetchTimerId = self.setTimeout(function() {
                b();
            }, n);
        }
    }
    function E() {
        _.revokedSerialNumbers = new Set;
        _.lastFetchTime = null;
        _.nextUpdateTime = null;
        if (_.refreshTimerId != null) {
            self.clearInterval(_.refreshTimerId);
            _.refreshTimerId = null;
        }
        if (_.abortController != null) {
            _.abortController.abort();
            _.abortController = null;
        }
        if (_.preFetchTimerId != null) {
            self.clearTimeout(_.preFetchTimerId);
            _.preFetchTimerId = null;
        }
    }
    l.checkCertificateRevocationStatus = f;
    l.isCertificateRevoked = g;
    l.isCrlFresh = h;
    l.startPeriodicCrlRefresh = y;
    l.updateCrlData = C;
    l.resetCrlStateForTesting = E;
}, 98);