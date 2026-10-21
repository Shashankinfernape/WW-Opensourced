__d("WAWebFalcoEventQueue", [
    "WALogger",
    "WAShiftTimer",
    "WAWebCanonicalUtils",
    "WAWebFalcoLoggerCache",
    "WAWebODS",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoModes",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 150;
    const d = 2000;
    const m = 50;
    const p = 200;
    let _ = [];
    let f = function() {
        return {};
    };
    function g(e, t) {
        r("WAWebODS").incr(`web.falco.shadow.${e}.${t}`);
    }
    function h(e) {
        f = e;
    }
    function y(t) {
        const n = o("WAWebWamFalcoABProps").getWamFalcoMode() === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING;
        const a = function() {
            const { critical: t, fields: a, name: l } = i;
            let u = {};
            let c = o("WAWebCanonicalUtils").isCanonicalPresent();
            try {
                u = f();
            } catch (t) {
                c = false;
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] canonical read failed at flush for ",
                    ""
                ])), l).catching(r("getErrorSafe")(t)).sendLogs("wam_falco_canonical_read_error", {
                    sampling: 0.1
                });
            }
            if (n) {
                r("WAWebODS").incr("web.falco.shadow.flush");
                g(l, "flush");
                if (!c) {
                    r("WAWebODS").incr("web.falco.shadow.flush_without_canonical");
                    g(l, "flush_without_canonical");
                }
            }
            try {
                const d = babelHelpers.extends({}, u, a);
                const m = o("WAWebFalcoLoggerCache").getFalcoLogger(l);
                if (t === true) {
                    m.logCritical(function() {
                        return d;
                    });
                } else {
                    m.logImmediately(function() {
                        return d;
                    });
                }
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] send failed for ",
                    ""
                ])), l).catching(r("getErrorSafe")(e)).sendLogs("wam_falco_send_error", {
                    sampling: 0.1
                });
            }
        };
        for (var i of t){
            a();
        }
    }
    function C(e) {
        b(e, 0);
    }
    function b(e, t) {
        const n = Math.min(t + p, e.length);
        y(e.slice(t, n));
        if (n < e.length) {
            self.setTimeout(function() {
                return b(e, n);
            }, 0);
        }
    }
    function v() {
        if (_.length !== 0) {
            const e = _;
            _ = [];
            y(e);
        }
    }
    const S = new (o("WAShiftTimer")).ShiftTimer(v);
    let R = false;
    function L() {
        if (!R) {
            R = true;
            self.addEventListener("beforeunload", v);
            self.addEventListener("pagehide", v);
        }
    }
    function E(e) {
        L();
        if (_.length >= d) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] queue overflow, dropping ",
                " oldest events"
            ])), m).sendLogs("wam_falco_queue_overflow", {
                sampling: 0.01
            });
            const t = _.splice(0, m);
            if (o("WAWebWamFalcoABProps").getWamFalcoMode() === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
                for (const n of t){
                    g(n.name, "evicted");
                }
            }
        }
        _.push(e);
        if (_.length >= c) {
            S.onOrBefore(0);
        } else {
            S.onOrBefore(o("WAWebWamFalcoABProps").getWamFalcoFlushIntervalMs());
        }
    }
    l.setCanonicalFieldsProvider = h;
    l.sendFalcoEventsNow = y;
    l.sendFalcoEventsChunked = C;
    l.drainFalcoQueue = v;
    l.enqueueFalcoEvent = E;
}, 98);