__d("WAWebLoggerImpl", [
    "Promise",
    "WALogger",
    "WAMemoizeConditionally",
    "WAOnceWithReset",
    "WAShiftTimer",
    "WAStorageEstimator",
    "WAWebABProps",
    "WAWebLoggerFormatMessage",
    "WAWebLoggerOptimizer",
    "WAWebLoggerUtils",
    "WAWebLowEndDeviceApi",
    "WAWebNoop",
    "WAWebNormalizeStack",
    "WAWebSessionStorage",
    "WAWebWAWCStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = "trace";
    const f = "unhandled-rejection: Element not found. (0x80070490)";
    const g = "0x80070490";
    const h = 604800000;
    const y = 86400000 * 30;
    const C = 5000;
    const b = 150000;
    const v = 3 * 1024 * 1024;
    const S = 60 * 1024 * 1024;
    const R = r("gkx")("26258") ? C : b;
    const L = r("gkx")("26258") ? v : S;
    const E = 1024;
    const k = 500;
    const I = 200;
    const T = "wa_web_logger_session_start";
    const D = "LTSXOo+_*-=.<^!#?".split("");
    function x() {
        return D[Math.round(Math.random() * (D.length - 1))];
    }
    const $ = x() + x() + x() + x();
    const P = {};
    P[P.ALL = 0] = "all";
    P[P.INFO = 1] = "info";
    P[P.LOG = 2] = "log";
    P[P.WARN = 3] = "warn";
    P[P.ERROR = 4] = "error";
    P[P.OFF = 5] = "off";
    const N = (()=>{
        function t(t) {
            const a = this;
            const { logCapacityInDatabase: i, logsDBProvider: l, processTag: m } = t;
            this.localCursor = 0;
            this.writeFrom = 0;
            this.pending = void 0;
            this.timer = new (o("WAShiftTimer")).ShiftTimer(function() {
                return a.$1();
            });
            this.runningTimestamp = 0;
            this.isTakeOver = false;
            this.shouldSkipLoggingForProdLowEndDevice = false;
            this.$2 = false;
            this.$3 = Date.now();
            this.$4 = r("gkx")("26258") ? null : F(this.$3);
            this.$5 = r("gkx")("16623");
            this.$6 = L;
            this.$7 = 0;
            this.$8 = new Array(k);
            this.$9 = 0;
            this.$10 = 0;
            this.$11 = false;
            this.maybeUpdateLogCapacityFromABProp = r("WAOnceWithReset")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (r("gkx")("26258")) {
                    let t = o("WAWebABProps").getABPropConfigValue("web_log_capacity_override");
                    if ((t === 0 || t == null) && o("WAWebABProps").getABPropConfigValue("enable_web_log_download")) {
                        t = b;
                    }
                    if (!(t === 0 || t == null)) {
                        a.$11 = true;
                        if (o("WAWebLowEndDeviceApi").isLowEndDevice()) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[logger] Skipping log capacity increase for low-end device"
                            ])));
                            return;
                        }
                        try {
                            const n = yield o("WAStorageEstimator").estimateStorage();
                            if (n.success) {
                                const i = n.value;
                                const { quota: l, usage: m } = i;
                                const p = (l - m) / (1024 * 1024);
                                if (p < E) {
                                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "[logger] Skipping log capacity increase due to low storage: ",
                                        "MB available"
                                    ])), p.toFixed(0));
                                    return;
                                }
                            } else {
                                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "[logger] Skipping log capacity increase - could not estimate storage"
                                ])));
                                return;
                            }
                        } catch (e) {
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[logger] Skipping log capacity increase due to storage check failure: ",
                                ""
                            ])), String(e));
                            return;
                        }
                        const _ = Math.min(t, b);
                        if (_ > a.logCapacityInDatabase) {
                            const f = Date.now();
                            a.$13(_);
                            if (a.$5 && _ === b) {
                                a.$6 = S;
                            }
                            const g = Date.now() - f;
                            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[logger] Log capacity increased to ",
                                " via AB prop (resize took ",
                                "ms)"
                            ])), _, g);
                        }
                    }
                }
            }));
            this.log = r("WAMemoizeConditionally")(function(e, t = false, n, o, i) {
                return function(l, ...u) {
                    const d = r("WAWebLoggerFormatMessage")(l, u, !t);
                    a.logImpl(e, d, n, o, i);
                    return d;
                };
            }, function(e, t, n, r, o) {
                if (n || o) {
                    return null;
                }
                return String(e) + String(!!t) + String(!!r);
            });
            this.logsDBProvider = l;
            this.logCapacityInDatabase = i;
            this.logs = new Array(i);
            this.microStep = 1 / this.logCapacityInDatabase;
            this.processTag = m;
        }
        const a = t.prototype;
        a.setSkipLoggingForProdLowEndDevice = function() {
            const e = (r("gkx")("26258") || r("gkx")("17565")) && o("WAWebLowEndDeviceApi").shouldReduceLogsForLowEndDevice();
            if (e) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Disabling logs due to low-end device"
                ])));
            }
            this.shouldSkipLoggingForProdLowEndDevice = e;
        };
        a.$13 = function(t) {
            if (!(t <= this.logCapacityInDatabase)) {
                this.$2 = true;
                try {
                    for(var e = [].concat(this.logs.slice(this.writeFrom, this.logCapacityInDatabase), this.logs.slice(0, this.writeFrom)).filter((e)=>e != null), n = new Array(t), r = 0; r < e.length; r++){
                        n[r] = e[r];
                    }
                    this.logs = n;
                    this.logCapacityInDatabase = t;
                    this.localCursor = e.length;
                    this.writeFrom = 0;
                    this.microStep = 1 / t;
                } finally{
                    this.$2 = false;
                }
            }
        };
        a.$14 = function(t) {
            if (t.e === true) {
                const e = this.$8[this.$9];
                if (e != null) {
                    this.$15(-e.m.length);
                }
                this.$8[this.$9] = t;
                this.$15(t.m.length);
                this.$9 = (this.$9 + 1) % k;
                if (this.$10 < k) {
                    this.$10++;
                }
            }
        };
        a.$15 = function(t) {
            if (this.$5) {
                this.$7 += t;
            }
        };
        a.$16 = function(t, n) {
            const e = this.logs[t];
            if (e != null) {
                if (n && this.$11) {
                    this.$14(e);
                }
                this.$15(-e.m.length);
                this.logs[t] = void 0;
            }
        };
        a.$17 = function() {
            if (this.$10 !== 0) {
                const e = (this.$9 - this.$10 + k) % k;
                const t = this.$8[e];
                if (t != null) {
                    this.$15(-t.m.length);
                    this.$8[e] = void 0;
                }
                this.$10--;
            }
        };
        a.$18 = function() {
            if (!(!this.$5 || this.$7 <= this.$6)) {
                for(const e = (this.localCursor - 1 + this.logCapacityInDatabase) % this.logCapacityInDatabase; this.$7 > this.$6 && this.logs[this.writeFrom] != null && this.writeFrom !== e;){
                    this.$16(this.writeFrom, true);
                    this.writeFrom = (this.writeFrom + 1) % this.logCapacityInDatabase;
                }
                while(this.$7 > this.$6 && this.$10 > 0){
                    this.$17();
                }
            }
        };
        a.logImpl = function(t, n, a, i, l) {
            if (!this.$2 && !(t <= P.LOG && this.shouldSkipLoggingForProdLowEndDevice)) {
                const e = Date.now();
                const s = w(e);
                if (!r("gkx")("26258")) {
                    try {
                        if (t === P.ERROR && this.$12) {
                            this.$12(n);
                        }
                    } catch (e) {}
                }
                let u = "";
                if (a) {
                    if (l != null && l.includes(_)) {
                        u = `
${a.stack.split("\n").slice(3).join("\n")}`;
                    } else {
                        u = `
${o("WAWebNormalizeStack").normalizeStack(a, true)}`;
                    }
                }
                const c = [
                    M(t),
                    i === true && !o("WAWebLoggerUtils").isWaitingForUpload() ? "sendlogs" : null
                ].concat(l ?? [], [
                    this.processTag
                ]).filter(Boolean).map((e)=>`[${e}]`).join("");
                const d = `${$} ${s}${c ? `${c} ` : ""}${n}${u}`;
                if (this.logs[this.localCursor] != null) {
                    this.$16(this.localCursor, true);
                }
                const m = t === P.ERROR;
                this.logs[this.localCursor] = m ? {
                    m: d,
                    t: e,
                    e: true
                } : {
                    m: d,
                    t: e
                };
                this.$15(d.length);
                this.localCursor = (this.localCursor + 1) % this.logCapacityInDatabase;
                if (this.logs[this.localCursor] != null) {
                    this.writeFrom = this.localCursor;
                }
                this.$18();
                if (!this.isTakeOver) {
                    this.timer.debounceAndCap(250, 1000);
                }
            }
        };
        a.$1 = function() {
            const e = this;
            if (!(this.pending || this.logs[this.writeFrom] == null || this.isTakeOver)) {
                this.pending = this.logsDBProvider().then((t)=>t.transaction("rw", t.logs, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        let n;
                        let r = yield t.logs.orderBy("count").last();
                        if (!r) {
                            r = yield t.logs.orderBy("timestamp").last();
                        }
                        let o = r ? r.line + 1 : 0;
                        let a = (n = r) != null && n.count ? r.count + 1 : o;
                        const i = [];
                        while(e.logs[e.writeFrom] != null){
                            const l = e.logs[e.writeFrom];
                            e.$16(e.writeFrom, false);
                            e.writeFrom = (e.writeFrom + 1) % e.logCapacityInDatabase;
                            e.runningTimestamp = l.t <= e.runningTimestamp ? e.runningTimestamp + e.microStep : l.t;
                            i.push({
                                line: o++ % e.logCapacityInDatabase,
                                log: l.m,
                                timestamp: e.runningTimestamp,
                                count: a++
                            });
                        }
                        yield t.logs.bulkPut(i);
                    }))).then(()=>{
                    if (e.logs[e.writeFrom] != null) {
                        e.timer.debounceAndCap(250, 1000);
                    }
                }).catch((t)=>{
                    if (!r("gkx")("26258") && e.$12) {
                        e.$12(r("getErrorSafe")(t).message);
                    }
                }).finally(()=>{
                    e.pending = void 0;
                });
            }
        };
        a.getSessionStartTime = function() {
            return this.$3;
        };
        a.getPreviousSessionTimeRange = function() {
            const e = this.$4;
            const t = this.$3;
            if (e == null || e >= t) {
                return null;
            }
            return {
                fromTimestamp: e,
                toTimestamp: t
            };
        };
        a.getLogs = function(t = false, a, i) {
            const e = this;
            if (a === void 0) {
                a = Date.now() - h;
            }
            if (i === void 0) {
                i = 1 / 0;
            }
            const l = Math.max(a, Date.now() - y);
            const s = [];
            if (this.pending) {
                s.push(this.pending);
            }
            if (this.timer.isScheduled()) {
                this.timer.forceRunNow();
                if (this.pending) {
                    s.push(this.pending);
                }
            }
            return (p || (p = n("Promise"))).all(s).then(()=>e.logsDBProvider()).then((e)=>o("WAWebLoggerOptimizer").getTimeboxedAndTrimmedLogs(e, l, t, i)).then((t)=>{
                const n = [];
                if (e.$10 > 0) {
                    const r = (e.$9 - e.$10 + k) % k;
                    for(let o = 0; o < e.$10; o++){
                        const a = e.$8[(r + o) % k];
                        if (a != null && O(a.t, l, i)) {
                            n.push(a);
                        }
                    }
                }
                if (n.length === 0) {
                    return t.map((e)=>e.log);
                }
                const s = [];
                for(var u = 0, c = 0; u < n.length && c < t.length;){
                    if (n[u].t <= t[c].timestamp) {
                        s.push(n[u].m);
                        u++;
                    } else {
                        s.push(t[c].log);
                        c++;
                    }
                }
                while(u < n.length){
                    s.push(n[u].m);
                    u++;
                }
                while(c < t.length){
                    s.push(t[c].log);
                    c++;
                }
                return s;
            }).catch((t)=>{
                if (!r("gkx")("26258") && e.$12) {
                    e.$12(r("getErrorSafe")(t).message);
                }
                return e.logs.filter(Boolean).map((e)=>e.m);
            });
        };
        a.clearLogs = function() {
            const e = this;
            return this.logsDBProvider().then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    yield e.logs.clear();
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()).catch(r("WAWebNoop")).finally(()=>{
                e.localCursor = 0;
                e.writeFrom = 0;
                e.logs = new Array(e.logCapacityInDatabase);
                if (e.$5) {
                    e.$8 = new Array(k);
                    e.$9 = 0;
                    e.$10 = 0;
                    e.$7 = 0;
                }
            });
        };
        a.logUncaughtError = function(t, n) {
            const e = t instanceof Error && t.stack ? t : void 0;
            let o;
            if (e) {
                o = String(t);
            } else {
                o = n ? `unhandled-rejection: ${String(t)}` : `Error: ${String(t)}`;
            }
            if (n != null && !(t instanceof Error) && t != null && typeof t === "object") {
                try {
                    const a = Object.keys(t).slice(0, 3);
                    if (a.length > 0) {
                        o += `; keys: ${a.join(", ")}`;
                    }
                } catch (e) {}
                try {
                    const i = Reflect.get(t, "methodName");
                    if (i != null) {
                        o += `; methodName: ${String(i)}`;
                    }
                } catch (e) {}
                const l = B(t);
                if (l != null) {
                    o += `; error: ${l}`;
                    if (l.endsWith(`${g})`)) {
                        o = f;
                    }
                }
            }
            this.logImpl(P.ERROR, o, e, true, [
                "uncaught"
            ]);
            r("gkx")("26258") || e != null;
            if (n != null) {
                const s = String(n);
                this.logImpl(P.WARN, s);
                r("gkx")("26258");
            }
            return o;
        };
        a.onTakeOver = function() {
            this.isTakeOver = true;
        };
        a.registerErrorNotificationListener = function(t) {
            this.$12 = t;
        };
        return t;
    })();
    function M(e) {
        if (e === 1 || e === 2 || e === 3 || e === 4) {
            return P[e];
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function w(e) {
        const t = new Date(e);
        const n = A(t.getMonth() + 1, 2);
        const r = A(t.getDate(), 2);
        const o = A(t.getHours(), 2);
        const a = A(t.getMinutes(), 2);
        const i = A(t.getSeconds(), 2);
        const l = A(t.getMilliseconds(), 3);
        return `${t.getFullYear()}-${n}-${r} ${o}:${a}:${i}.${l}:`;
    }
    function A(e, t) {
        return String(e).padStart(t, "0");
    }
    function F(e) {
        try {
            const t = r("WAWebSessionStorage") == null ? void 0 : r("WAWebSessionStorage").getItem(T);
            if (r("WAWebSessionStorage") != null) {
                r("WAWebSessionStorage").setItem(T, String(e));
            }
            if (t == null) {
                return null;
            }
            const n = parseInt(t, 10);
            if (Number.isNaN(n)) {
                return null;
            }
            return n;
        } catch (e) {
            return null;
        }
    }
    function O(e, t, n) {
        return e >= t && e < n;
    }
    function B(e) {
        try {
            if (!Object.hasOwn(e, "parameters")) {
                return;
            }
            const t = Reflect.get(e, "parameters");
            if (t == null || typeof t !== "object" || !Object.hasOwn(t, "error")) {
                return;
            }
            const n = Reflect.get(t, "error");
            if (typeof n !== "string") {
                return void 0;
            }
            return n.replace(/[\r\n]+/g, " ").slice(0, I);
        } catch (e) {
            return;
        }
    }
    const W = new N({
        logCapacityInDatabase: R,
        logsDBProvider: function() {
            return r("WAWebWAWCStorage").idb();
        }
    });
    const q = W.log;
    l.STACK_TRACE_TAG = _;
    l.LoggerImpl = N;
    l.Logger = W;
    l.log = q;
}, 98);