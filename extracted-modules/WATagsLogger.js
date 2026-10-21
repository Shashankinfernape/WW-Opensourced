__d("WATagsLogger", [
    "FBLogger",
    "Promise",
    "WALoggerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = new (s || (s = n("Promise")))(function(e) {
        u = e;
    });
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield c;
        });
        return m.apply(this, arguments);
    }
    let p = null;
    function _(e) {
        p = e;
        u?.();
        u = null;
    }
    const f = {
        count: function() {},
        debug: function() {},
        info: function() {},
        logRestricted: function() {},
        warn: function() {},
        error: function() {},
        devConsole: function() {}
    };
    function g() {
        return p ?? (r("FBLogger")("wmi").mustfix("WALogger called before initialization"), f);
    }
    function h(e) {
        return {
            TAGS: function(n) {
                return h([].concat(e, n));
            },
            COUNT: function(n, ...r) {
                const i = o("WALoggerUtils").rebuildTemplate(n, r);
                const l = {
                    level: "COUNT",
                    template: n,
                    expressions: r,
                    logString: i
                };
                g().count(i, e, l);
                return y(l);
            },
            DEV: function(n, ...r) {
                const i = o("WALoggerUtils").rebuildTemplate(n, r);
                const l = {
                    level: "DEV",
                    template: n,
                    expressions: r,
                    logString: i
                };
                g().debug(i, e, l);
                return y(l);
            },
            DEV_XMPP: function(n, ...r) {
                const i = o("WALoggerUtils").rebuildTemplate(n, r);
                const l = {
                    level: "DEV_XMPP",
                    template: n,
                    expressions: r,
                    logString: i
                };
                g().logRestricted(i, e, l);
                return y(l);
            },
            LOG: function(n, ...r) {
                const i = o("WALoggerUtils").rebuildTemplate(n, r);
                const l = {
                    level: "LOG",
                    template: n,
                    expressions: r,
                    logString: i
                };
                g().info(i, e, l);
                return y(l);
            },
            WARN: function(n, ...r) {
                const i = o("WALoggerUtils").rebuildTemplate(n, r);
                const l = {
                    level: "WARN",
                    template: n,
                    expressions: r,
                    logString: i
                };
                g().warn(i, e, l);
                return y(l);
            },
            ERROR: function(n, ...r) {
                const i = o("WALoggerUtils").rebuildTemplate(n, r);
                const l = {
                    level: "ERROR",
                    template: n,
                    expressions: r,
                    logString: i
                };
                let s = void 0;
                for (const u of r){
                    if (u instanceof Error) {
                        s = u;
                        break;
                    }
                }
                if (s != null) {
                    g().error(i, e, s, l);
                } else {
                    g().error(i, e, void 0, l);
                }
                return y(l);
            },
            CATCHING: function(n, ...r) {
                const i = o("WALoggerUtils").rebuildTemplate(n, r);
                const l = {
                    level: "CATCHING",
                    template: n,
                    expressions: r,
                    logString: i
                };
                g().error(i, e, void 0, l);
                return y(l);
            },
            EXPECTED_ERROR: function(n, ...r) {
                const i = o("WALoggerUtils").rebuildTemplate(n, r);
                const l = {
                    level: "ERROR",
                    template: n,
                    expressions: r,
                    logString: i,
                    tags: [].concat(e)
                };
                return y(l);
            }
        };
    }
    function y(t) {
        return {
            verbose: function() {
                t.verbose = true;
                return y(t);
            },
            color: function(n) {
                t.color = n;
                return y(t);
            },
            devConsole: function(...r) {
                g().devConsole(t.level, t.logString, [], ...r);
                return y(t);
            },
            sendLogs: function(r, o) {
                if (g().sendLogs != null) {
                    t.sendLogs = {
                        reason: r,
                        sampling: o?.sampling,
                        sendLogsType: o?.sendLogsType,
                        separateEmployeeLog: o?.separateEmployeeLog,
                        employeeSampling: o?.employeeSampling
                    };
                    g().sendLogs?.(t);
                } else if (t.level !== "ERROR" && t.level !== "CATCHING") {
                    return h([]).ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] ",
                        ""
                    ])), r, t.logString);
                }
                return y(t);
            },
            tags: function(...n) {
                t.tags = n;
                if (g().tags != null) {
                    g().tags?.(n);
                }
                return y(t);
            },
            expect: function(n) {
                if (t.level !== "ERROR") {
                    return y(t);
                }
                let s = void 0;
                for (const u of t.expressions){
                    if (u instanceof Error) {
                        s = u;
                        break;
                    }
                }
                const c = s?.message ?? s?.name ?? s?.description;
                for (const d of n){
                    if (c != null && c.includes(d)) {
                        g().error(t.logString, [].concat(t.tags ?? [], [
                            "expected-error-log"
                        ]), s ?? void 0, t);
                        return y(t);
                    }
                }
                g().error(t.logString, t?.tags ?? [], s ?? void 0, t);
                return y(t);
            },
            catching: function(n) {
                t.expressions.push(n);
                return y(t);
            }
        };
    }
    l.whenReady = d;
    l.initializeWaLogger = _;
    l.TAGS = h;
    l.getWaLoggerAdditionalOptions = y;
}, 98);