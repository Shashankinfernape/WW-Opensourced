__d("WAWebVoipTsLogger", [
    "WALogger",
    "WAWebBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u = null;
    let c = null;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (c != null) {
                return c;
            }
            const e = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
            c = e;
            return c;
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (u != null) {
                return u;
            }
            const r = yield d();
            const WEB_SCTP_ICE_CONNECTION_START = r.getTsLoggerEventIdWebSctpIceConnectionStart();
            const WEB_SCTP_ICE_CONNECTION_COMPLETE = r.getTsLoggerEventIdWebSctpIceConnectionComplete();
            const WEB_SCTP_ICE_CONNECTION_FAILED = r.getTsLoggerEventIdWebSctpIceConnectionFailed();
            const WEB_WEBTRANSPORT_CONNECTION_START = r.getTsLoggerEventIdWebWebtransportConnectionStart?.() ?? null;
            const WEB_WEBTRANSPORT_CONNECTION_COMPLETE = r.getTsLoggerEventIdWebWebtransportConnectionComplete?.() ?? null;
            const WEB_WEBTRANSPORT_CONNECTION_FAILED = r.getTsLoggerEventIdWebWebtransportConnectionFailed?.() ?? null;
            const m = {
                WEB_SCTP_ICE_CONNECTION_START,
                WEB_SCTP_ICE_CONNECTION_COMPLETE,
                WEB_SCTP_ICE_CONNECTION_FAILED,
                WEB_WEBTRANSPORT_CONNECTION_START,
                WEB_WEBTRANSPORT_CONNECTION_COMPLETE,
                WEB_WEBTRANSPORT_CONNECTION_FAILED
            };
            u = m;
            return m;
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (c != null) {
                try {
                    const t = yield d();
                    t.tsLoggerReset();
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [TsLogger] Error resetting ts_logger: ",
                        ""
                    ])), error);
                }
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, t, n) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = false) {
            try {
                const r = yield d();
                const a = r.tsLoggerLogEventStringData(e, t, n);
                return a === 0 || a === 70020;
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [TsLogger] Error logging string event ",
                    ": ",
                    ""
                ])), e, error);
                return false;
            }
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield f();
            c = null;
            u = null;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return `${e.ip}:${e.port}`;
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield p();
            const n = v(e);
            yield h(t.WEB_SCTP_ICE_CONNECTION_START, n);
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield p();
            const n = v(e);
            yield h(t.WEB_SCTP_ICE_CONNECTION_COMPLETE, n);
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = 1) {
            const n = yield p();
            const r = `${v(e)},${t}`;
            yield h(n.WEB_SCTP_ICE_CONNECTION_FAILED, r);
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield p();
            const t_WEB_WEBTRANSPORT_CONNECTION_START = t.WEB_WEBTRANSPORT_CONNECTION_START;
            if (t_WEB_WEBTRANSPORT_CONNECTION_START != null) {
                yield h(t_WEB_WEBTRANSPORT_CONNECTION_START, e);
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield p();
            const t_WEB_WEBTRANSPORT_CONNECTION_COMPLETE = t.WEB_WEBTRANSPORT_CONNECTION_COMPLETE;
            if (t_WEB_WEBTRANSPORT_CONNECTION_COMPLETE != null) {
                yield h(t_WEB_WEBTRANSPORT_CONNECTION_COMPLETE, e);
            }
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = 1) {
            const n = yield p();
            const n_WEB_WEBTRANSPORT_CONNECTION_FAILED = n.WEB_WEBTRANSPORT_CONNECTION_FAILED;
            if (n_WEB_WEBTRANSPORT_CONNECTION_FAILED != null) {
                yield h(n_WEB_WEBTRANSPORT_CONNECTION_FAILED, `${e},${t}`);
            }
        });
        return N.apply(this, arguments);
    }
    l.cleanup = C;
    l.logIceConnectionStart = S;
    l.logIceConnectionComplete = L;
    l.logIceConnectionFailed = k;
    l.logWebtransportConnectionStart = T;
    l.logWebtransportConnectionComplete = x;
    l.logWebtransportConnectionFailed = P;
}, 98);