__d("WATaskScheduler", [
    "Promise",
    "WALogger",
    "WAPromiseBackoffs",
    "WAResolvable",
    "WATimeUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = "no_reschedule";
    const b = (()=>{
        function t(e) {
            this.$1 = false;
            this.$2 = {};
            this.$3 = {};
            this.$4 = {};
            this.$5 = new Map;
            this.$6 = e.scheduledTimeResolver;
        }
        const r = t.prototype;
        r.$7 = function(r) {
            const t = this;
            const a = this.$5.get(r);
            if (a == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Tried to start task ",
                    " before registering its implementation"
                ])), r);
                return;
            }
            const i = function(t) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "taskScheduler: failed to get scheduled time for task ",
                    ""
                ])), r).sendLogs("task-scheduler-get-scheduled-time-failed");
            };
            const l = function(i) {
                const e = i == null;
                const l = !e && i === o("WATimeUtils").DEFAULT_UNIXTIME;
                if (l) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Task ",
                        " deactivated"
                    ])), r);
                    return;
                }
                let s = i == null ? 0 : i * 1000 - o("WATimeUtils").unixTimeMs();
                s = Math.max(0, s);
                s = Math.min(s, ~(1 << 31));
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Scheduling task ",
                    " in ",
                    "ms"
                ])), r, s);
                t.$4[r] = setTimeout(()=>{
                    delete t.$4[r];
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Firing task ",
                        ""
                    ])), r);
                    a(e).then((e)=>{
                        if (e === "no_reschedule") {
                            return new (y || (y = n("Promise")))(function() {});
                        }
                        let a;
                        if (e === o("WATimeUtils").DEFAULT_UNIXTIME) {
                            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "Task ",
                                " complete, deactivating"
                            ])), r);
                            delete t.$3[r];
                            a = o("WATimeUtils").DEFAULT_UNIXTIME;
                        } else if (e >= 0) {
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "Task ",
                                " complete, waiting ",
                                ""
                            ])), r, e);
                            delete t.$3[r];
                            a = o("WATimeUtils").futureUnixTime(e);
                        } else {
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "Task ",
                                " will try again later"
                            ])), r);
                            a = t.$8(r);
                        }
                        return t.$6.set(r, a);
                    }).then(()=>{
                        t.$7(r);
                        if (t.$2[r]) {
                            t.$2[r].forEach((e)=>e());
                            delete t.$2[r];
                        }
                    }).catch((e)=>{
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "Task ",
                            " failed, try again later: ",
                            ""
                        ])), r, String(e));
                        return t.$6.set(r, t.$8(r)).then(()=>{
                            t.$7(r);
                        });
                    });
                }, s);
            };
            this.$6.get(r).then(l).catch(i);
        };
        r.$8 = function(t) {
            if (!this.$3[t]) {
                this.$3[t] = o("WAPromiseBackoffs").createTimer({
                    jitter: 0.1,
                    max: o("WATimeUtils").HOUR_SECONDS * 1000,
                    algo: {
                        type: "fibonacci",
                        first: 1000,
                        second: 2000
                    }
                });
            }
            return o("WATimeUtils").futureUnixTime(Math.round(this.$3[t]() / 1000));
        };
        r.$9 = function(t, n) {
            if (!this.$2[t]) {
                this.$2[t] = [];
            }
            this.$2[t].push(n);
        };
        r.awaitTaskPromise = function(t) {
            const e = this;
            return new (y || (y = n("Promise")))(function(n) {
                e.$9(t, n);
            });
        };
        r.reschedule = function(t, n) {
            if (this.$1) {
                this.$6.set(t, n);
                if (this.$4[t] != null) {
                    clearTimeout(this.$4[t]);
                }
                this.$7(t);
            } else {
                this.$6.set(t, n);
            }
        };
        r.registerTask = function(t, n) {
            if (!this.$1) {
                this.$1 = true;
            }
            this.$5.set(t, n);
            this.$7(t);
        };
        r.getScheduledTime = function(t) {
            return this.$6.get(t);
        };
        return t;
    })();
    let v = null;
    const S = new (o("WAResolvable")).Resolvable;
    function R(e) {
        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
            "startScheduler invoked"
        ])));
        if (!v) {
            v = new b(e);
            S.resolve();
        }
    }
    function L(e, t) {
        const n = T("reschedule");
        n.reschedule(e, t);
    }
    function E(e, t) {
        if (S.resolveWasCalled()) {
            L(e, t);
        } else {
            S.promise.then(()=>{
                L(e, t);
            }).catch((t)=>{
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "taskScheduler: reschedule eventually failed for task ",
                    ""
                ])), e).sendLogs("task-scheduler-reschedule-failed");
            });
        }
    }
    function k(e) {
        E(e, o("WATimeUtils").unixTime());
    }
    function I(e, t) {
        const n = T("registerTask");
        n.registerTask(e, t);
    }
    function T(e) {
        if (v) {
            return v;
        }
        throw r("err")(`TaskScheduler::${e} called before startScheduler`);
    }
    l.DO_NOT_RESCHEDULE = C;
    l.startScheduler = R;
    l.reschedule = E;
    l.rescheduleNow = k;
    l.registerTask = I;
}, 98);