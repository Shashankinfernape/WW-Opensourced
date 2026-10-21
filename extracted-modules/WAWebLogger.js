__d("WAWebLogger", [
    "ErrorNormalizeUtils",
    "WATagsLogger",
    "WAWebABProps",
    "WAWebFBLogger",
    "WAWebLogLineSanitizer",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "cr:1106",
    "cr:35483",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("cr:1106") != null ? n("cr:1106") : n("cr:35483");
    function s() {
        return !r("gkx")("26258") || r("gkx")("26259");
    }
    let u;
    let c;
    function d() {
        const e = o("WAWebABProps").getABPropConfigValue("wa_web_console_log_level");
        if (e < 1 || e > 4) {
            return 1000;
        }
        return e;
    }
    function m(e) {
        if (e === "ERROR" || e === "CATCHING") {
            return {
                level: 4,
                consoleFunction: d() <= 4 ? console.error : r("WAWebNoop")
            };
        }
        if (e === "WARN") {
            return {
                level: 3,
                consoleFunction: d() <= 3 ? console.warn : r("WAWebNoop")
            };
        }
        if (e === "COUNT") {
            return {
                level: 2,
                consoleFunction: d() <= 2 ? console.count : r("WAWebNoop")
            };
        }
        if (e === "LOG") {
            return {
                level: 2,
                consoleFunction: d() <= 2 ? console.log : r("WAWebNoop")
            };
        }
        if (e === "DEV_XMPP" || e === "DEV") {
            return {
                level: 1,
                consoleFunction: d() <= 1 ? console.info : r("WAWebNoop")
            };
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function p(t, n, ...a) {
        const r = m(t);
        if (e == null) {
            r.consoleFunction(...[
                n
            ].concat(a));
            return;
        }
        const l = e.getLogFilterPattern();
        if (l == null) {
            r.consoleFunction(...[
                n
            ].concat(a));
            return;
        }
        const s = e.processLogWithContext(t, n, a, r.consoleFunction);
        if (s === "matched") {
            const u = e.formatLogWithHighlight(l, n);
            if (u != null) {
                r.consoleFunction(...[
                    u.format
                ].concat(u.styles, a));
            } else {
                r.consoleFunction(...[
                    n
                ].concat(a));
            }
        } else if (s === "context_after") {
            const c = e.getContextStyle();
            r.consoleFunction(...[
                `%c${n}`,
                c
            ].concat(a));
        } else {
            e.recordFilteredLog(t, n);
        }
    }
    function _(e) {
        if (!r("gkx")("5943")) {
            const t = m(e.level);
            const n = o("WAWebLoggerImpl").Logger.log(t.level)(...[
                e.template
            ].concat(e.expressions));
            if (s()) {
                p(e.level, n);
            }
        }
    }
    function f(e, reason, fileId) {
        const a = e.expressions.find((e)=>e instanceof Error);
        const tags = [];
        if (e.tags != null) {
            tags.push(...e.tags.map((e)=>String(e)));
        }
        if (e.sendLogs?.sampling != null) {
            tags.push("sampling");
        }
        const formatString = e.template.join("%s");
        const sanitizedExpressions = e.expressions.map((e)=>{
            if (e instanceof Error) {
                return "";
            }
            return o("WAWebLogLineSanitizer").sanitizeLine(String(e));
        });
        c({
            reason,
            fileId,
            formatString,
            sanitizedExpressions,
            tags,
            error: a instanceof Error ? a : null
        });
    }
    function g(e) {
        let n = o("WAWebFBLogger").WAWebFBLogger().tags(e.tags);
        if (e.error != null) {
            n = n.catching(e.error);
        } else {
            n = n.blameToPreviousFrame().blameToPreviousFrame();
        }
        if (e.fileId != null) {
            n = n.addMetadata("WA_WEB", "FILE_ID", e.fileId);
        }
        n.mustfix(...[
            `${e.formatString} (${e.reason})`
        ].concat(e.sanitizedExpressions));
    }
    const h = {
        info: function(t, n, r) {
            _(r);
        },
        count: function(t, n, r) {
            _(r);
        },
        debug: function(t, n, r) {
            if (s()) {
                _(r);
            }
        },
        logRestricted: function(t, n, r) {
            if (s()) {
                _(r);
            }
        },
        error: function(t, n, r, o) {
            _(o);
        },
        warn: function(t, n, r) {
            _(r);
        },
        devConsole: function(t, n, o, ...args) {
            if (!r("gkx")("5943") && s()) {
                for(var e = arguments.length, a = new Array(e > 3 ? e - 3 : 0), i = 3; i < e; i++){
                    a[i - 3] = arguments[i];
                }
                p(...[
                    t,
                    `${n} devConsole:`
                ].concat(a));
            }
        },
        sendLogs: function(t) {
            if (!((t.level === "DEV" || t.level === "DEV_XMPP") && r("gkx")("26258"))) {
                const d = m(t.level);
                const _ = t.expressions.find((e)=>e instanceof Error);
                const g = r("ErrorNormalizeUtils").normalizeError(_ ?? r("err")("created for stack trace"));
                const h = _ ? [] : [
                    o("WAWebLoggerImpl").STACK_TRACE_TAG
                ];
                const y = o("WAWebLoggerImpl").Logger.log(d.level, t.verbose, g, false, h)(...[
                    t.template
                ].concat(t.expressions));
                if (s() && !r("gkx")("5943")) {
                    p(t.level, y);
                }
                const C = o("WAWebLoggerImpl").Logger.log(d.level, t.verbose, undefined, true, t.tags)(...[
                    t.template
                ].concat(t.expressions));
                if (s() && !r("gkx")("5943")) {
                    p(t.level, C);
                }
                const b = t.sendLogs?.reason ?? "www_sendlogs_undefined";
                const v = u(b, {
                    sampling: t.sendLogs?.sampling,
                    tags: t.tags,
                    sendLogsType: t.sendLogs?.sendLogsType,
                    separateEmployeeLog: t.sendLogs?.separateEmployeeLog,
                    employeeSampling: t.sendLogs?.employeeSampling
                });
                v.catch((e)=>{});
                if (r("gkx")("16915")) {
                    v.then((e)=>{
                        f(t, b, e);
                    }).catch(()=>{
                        f(t, b, null);
                    });
                }
            }
        }
    };
    function y(e, t) {
        u = e;
        c = t;
        o("WATagsLogger").initializeWaLogger(h);
    }
    l.logToFBLoggerLocal = g;
    l.initializeWAWebLogger = y;
}, 98);