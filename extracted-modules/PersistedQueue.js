__d("PersistedQueue", [
    "AnalyticsCoreData",
    "BaseEventEmitter",
    "ExecutionEnvironment",
    "Run",
    "WebStorage",
    "WebStorageMutex",
    "cr:8958",
    "err",
    "guid",
    "nullthrows",
    "performanceAbsoluteNow",
    "requestAnimationFrame"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = 86400000;
    const m = 30 * 1000;
    const p = new (r("BaseEventEmitter"));
    let _;
    function f(t = false) {
        if (_ === undefined) {
            let n;
            if ((n = (e || (e = r("AnalyticsCoreData"))).queue_activation_experiment) != null && n && t) {
                try {
                    return (s || (s = r("WebStorage"))).getLocalStorageForRead();
                } catch (e) {
                    return null;
                }
            }
            const o = "check_quota";
            try {
                const a = (s || (s = r("WebStorage"))).getLocalStorage();
                if (a) {
                    a.setItem(o, o);
                    a.removeItem(o);
                    _ = a;
                } else {
                    _ = null;
                }
            } catch (e) {
                _ = null;
            }
        }
        return _;
    }
    function g(e) {
        const { prev, next } = e;
        if (next) {
            next.prev = prev;
        }
        if (prev) {
            prev.next = next;
        }
        e.next = null;
        e.prev = null;
    }
    function h(item) {
        return {
            item,
            next: null,
            prev: null
        };
    }
    function y(e, t) {
        return `${e}^\$${t?.queueNameSuffix ?? ""}`;
    }
    const C = {};
    const b = {};
    const v = {};
    let S = false;
    const R = (()=>{
        function e(e, t) {
            const o = this;
            this.$7 = 0;
            this.$3 = e;
            this.$5 = t?.queueNameSuffix ?? "";
            this.$4 = y(e, t);
            this.$11 = `${this.$4}^\$${r("guid")()}`;
            this.$14 = false;
            if (t) {
                this.$8 = t.max_age_in_ms ?? d;
                this.$12 = t.migrate;
                this.$13 = t.onLoad;
            } else {
                this.$8 = d;
            }
            this.$9 = [
                p.addListener("active", function() {
                    if (o.$10 != null || !o.$14) {
                        o.$14 = true;
                        o.$10 = null;
                        o.$15();
                    }
                }),
                p.addListener("inactive", function() {
                    if (o.$10 == null) {
                        o.$10 = Date.now();
                        o.$16();
                    }
                })
            ];
            if ((u || (u = r("ExecutionEnvironment"))).canUseDOM || (u || (u = r("ExecutionEnvironment"))).isInWorker) {
                r("requestAnimationFrame")(function() {
                    return o.$15();
                });
            }
        }
        const e_prototype = e.prototype;
        e_prototype.isActive = function() {
            const $10 = this.$10;
            if ($10 == null) {
                return true;
            }
            if (Date.now() - $10 > m) {
                this.$10 = null;
                p.emit("active", null);
                return true;
            }
            return false;
        };
        e_prototype.$15 = function() {
            this.$17();
            this.$18();
        };
        e_prototype.$16 = function() {
            this.$19();
        };
        e_prototype.getFullName = function() {
            return this.$4;
        };
        e_prototype.getQueueNameSuffix = function() {
            return this.$5;
        };
        e.isQueueActivateExperiment = function() {
            return S;
        };
        e.setOnQueueActivateExperiment = function() {
            S = true;
        };
        e.create = function(n, o) {
            const t = y(n, o);
            if (t in C) {
                throw r("err")(`Duplicate queue created: ${n}`);
            }
            const a = new e(n, o);
            C[t] = a;
            if (v[n]) {
                v[n].push(a);
            } else {
                v[n] = [
                    a
                ];
            }
            const i = b[n];
            if (i) {
                a.setHandler(i);
            }
            return a;
        };
        e.setHandler = function(t, n) {
            if (v[t]) {
                const e = v[t];
                for (const r of e){
                    r.setHandler(n);
                }
            }
            b[t] = n;
        };
        e_prototype.destroy = function() {
            this.$9.forEach((e)=>e.remove());
        };
        e.destroy = function(t, n) {
            const e = y(t, n);
            C[e].destroy();
            delete C[e];
        };
        e_prototype.setHandler = function(t) {
            this.$6 = t;
            this.$18();
            return this;
        };
        e_prototype.$18 = function() {
            if (this.$7 > 0 && this.$6) {
                this.$6(this);
            }
        };
        e_prototype.length = function() {
            return this.$7;
        };
        e_prototype.enumeratedLength = function() {
            return this.$20().length;
        };
        e.isPersistenceAllowed = function() {
            const e = f();
            return !!e;
        };
        e.getSuffixesForKey = function(t) {
            const e = [];
            try {
                const n = f(true);
                if (!n) {
                    return e;
                }
                const r = `${t}^\$`;
                for(let o = 0; o < n.length; o++){
                    const a = n.key(o);
                    if (typeof a === "string" && a.startsWith("mutex_falco_")) {
                        n.removeItem(a);
                    } else if (typeof a === "string" && a.startsWith(r)) {
                        const i = a.split("^$");
                        if (i.length > 2) {
                            const l = i[1];
                            e.push(l);
                        } else {
                            e.push("");
                        }
                    }
                }
            } catch (e) {}
            return e;
        };
        e_prototype.$17 = function() {
            const e = this;
            const t = f(true);
            if (t) {
                const o = `${this.$4}^\$`;
                const a = new (r("WebStorageMutex"))(o);
                const i = this.$12;
                const l = this.$13;
                a.lock(function(a) {
                    const s = Date.now() - e.$8;
                    try {
                        for(let u = 0; u < t.length; u++){
                            const c = t.key(u);
                            if (typeof c === "string" && c.startsWith(o)) {
                                const d = t.getItem(c);
                                t.removeItem(c);
                                if (d != null && d.startsWith("{")) {
                                    const m = n("cr:8958").parse(r("nullthrows")(d));
                                    if (m.ts > s) {
                                        try {
                                            for (const p of m.items){
                                                let _ = i != null ? i(p) : p;
                                                _ = l != null ? l(p) : p;
                                                e.$21(_);
                                            }
                                        } catch (e) {}
                                    }
                                }
                            }
                        }
                    } catch (e) {}
                    a.unlock();
                    e.$18();
                });
            }
        };
        e_prototype.$19 = function() {
            const e = f();
            if (e) {
                const t = this.$20();
                if (t.length === 0) {
                    if (e.getItem(this.$11) != null) {
                        e.removeItem(this.$11);
                    }
                    return;
                }
                (s || (s = r("WebStorage"))).setItemGuarded(e, this.$11, n("cr:8958").stringify({
                    items: t.map((e)=>e),
                    ts: (c || (c = r("performanceAbsoluteNow")))()
                }));
            }
        };
        e_prototype.$20 = function() {
            let e = this.$1;
            const t = [];
            if (!e) {
                return t;
            }
            do {
                t.push(r("nullthrows")(e).item);
            }while (e = e?.prev)
            return t.reverse();
        };
        e_prototype.markItemAsCompleted = function(t) {
            const t_prev = t.prev;
            g(t);
            if (this.$1 === t) {
                this.$1 = t_prev;
            }
            this.$7--;
            if (!this.isActive()) {
                this.$19();
            }
        };
        e_prototype.markItemAsFailed = function(t) {
            g(t);
            const e = this.$2;
            if (e) {
                const n = e.prev;
                if (n) {
                    n.next = t;
                    t.prev = n;
                }
                t.next = e;
                e.prev = t;
            }
            this.$2 = t;
            if (this.isActive()) {
                this.$18();
            }
        };
        e_prototype.markItem = function(t, n) {
            if (n) {
                this.markItemAsCompleted(t);
            } else {
                this.markItemAsFailed(t);
            }
        };
        e_prototype.$21 = function(t) {
            const e = h(t);
            const n = this.$1;
            if (n) {
                n.next = e;
                e.prev = n;
            }
            this.$1 = e;
            if (!this.$2) {
                this.$2 = e;
            }
            this.$7++;
        };
        e_prototype.wrapAndEnqueueItem = function(t) {
            this.$21(t);
            if (this.isActive()) {
                this.$18();
            } else {
                this.$19();
            }
        };
        e_prototype.dequeueItem = function() {
            if (this.$10 != null) {
                return null;
            }
            const e = this.$2;
            if (e) {
                this.$2 = e.next;
                return e;
            }
            return null;
        };
        return e;
    })();
    R.eventEmitter = p;
    if ((u || (u = r("ExecutionEnvironment"))).canUseDOM) {
        var L = o("Run").maybeOnBeforeUnload(function() {
            p.emit("inactive", null);
            L?.remove();
        }, false);
        if (!L) var E = o("Run").onUnload(function() {
            p.emit("inactive", null);
            E.remove();
        });
    }
    l.default = R;
}, 98);