__d("TaskScheduler", [
    "Promise",
    "TaskSchedulerError",
    "TaskSchedulerPriority",
    "TaskSchedulerTypes",
    "WAResolvable",
    "WATimeUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = 0;
    const u = (()=>{
        function t(e, t, n) {
            this.$1 = new Map;
            this.$2 = new Map;
            this.$3 = [
                new Set,
                new Set,
                new Set,
                new Set
            ];
            this.$4 = null;
            this.name = e;
            this.config = t;
            this.$5 = n;
        }
        const t_prototype = t.prototype;
        t_prototype.yield = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = e ?? o("TaskSchedulerPriority").NORMAL_PRIORITY;
                const r = `${this.name}:yield:${s++}`;
                const a = o("WATimeUtils").performanceAbsoluteNow();
                const i = new (o("WAResolvable")).Resolvable;
                const l = function() {
                    i.resolve();
                    const e = o("WATimeUtils").performanceAbsoluteNow();
                    t.$6({
                        name: "yield",
                        taskId: r,
                        time: e,
                        totalTimeMs: e - a,
                        type: "completed"
                    });
                    t.$7(r, o("TaskSchedulerTypes").RunState.COMPLETED);
                    t.maybeStartTask();
                };
                const u = {
                    entryTime: a,
                    id: r,
                    name: "yield",
                    originalPriority: n,
                    priority: n,
                    promotionTimerId: null,
                    rejectFn: function(t) {
                        i.reject(t);
                    },
                    startFn: l,
                    state: o("TaskSchedulerTypes").RunState.PENDING,
                    stuckTimerId: null
                };
                this.$1.set(r, u);
                this.$3[n].add(r);
                this.$6({
                    name: "yield",
                    priority: n,
                    taskId: r,
                    time: a,
                    type: "queued"
                });
                this.maybeStartTask();
                yield i.promise;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.run = function(r, a) {
            const l = this;
            const u = a?.name ?? "anonymous";
            const c = a?.priority ?? o("TaskSchedulerPriority").NORMAL_PRIORITY;
            const d = `${this.name}:${u}:${s++}`;
            const m = new (o("WAResolvable")).Resolvable;
            const entryTime = o("WATimeUtils").performanceAbsoluteNow();
            const _ = function() {
                let t;
                try {
                    t = r();
                } catch (error) {
                    t = (e || (e = n("Promise"))).reject(error);
                }
                if (l.config.timeoutMs != null) {
                    g.stuckTimerId = globalThis.setTimeout(function() {
                        l.$8(g.id);
                    }, l.config.timeoutMs);
                }
                t.then((e)=>{
                    const t = l.$1.get(d);
                    if (t == null) {
                        if (g.state === o("TaskSchedulerTypes").RunState.RUNNING && l.config.failOnTimeout !== true) {
                            g.state = o("TaskSchedulerTypes").RunState.COMPLETED;
                            m.resolve(e);
                        }
                        return;
                    }
                    if (t.state === o("TaskSchedulerTypes").RunState.RUNNING) {
                        m.resolve(e);
                        const n = o("WATimeUtils").performanceAbsoluteNow();
                        l.$6({
                            name: u,
                            taskId: d,
                            time: n,
                            totalTimeMs: n - entryTime,
                            type: "completed"
                        });
                        l.$7(d, o("TaskSchedulerTypes").RunState.COMPLETED);
                        l.maybeStartTask();
                    }
                }, (e)=>{
                    const t = l.$1.get(d);
                    if (t == null) {
                        if (g.state === o("TaskSchedulerTypes").RunState.RUNNING && l.config.failOnTimeout !== true) {
                            g.state = o("TaskSchedulerTypes").RunState.FAILED;
                            m.reject(e);
                        }
                        return;
                    }
                    if (t.state === o("TaskSchedulerTypes").RunState.RUNNING) {
                        m.reject(e);
                        const n = o("WATimeUtils").performanceAbsoluteNow();
                        l.$6({
                            error: e,
                            name: u,
                            taskId: d,
                            time: n,
                            totalTimeMs: n - entryTime,
                            type: "failed"
                        });
                        l.$7(d, o("TaskSchedulerTypes").RunState.FAILED);
                        l.maybeStartTask();
                    }
                });
            };
            const rejectFn = function(t) {
                m.reject(t);
            };
            var g = {
                entryTime,
                id: d,
                name: u,
                originalPriority: c,
                priority: c,
                promotionTimerId: null,
                rejectFn,
                startFn: _,
                state: o("TaskSchedulerTypes").RunState.PENDING,
                stuckTimerId: null
            };
            this.$1.set(d, g);
            this.$3[c].add(d);
            if (this.config.promotionTimeoutMs != null && c > o("TaskSchedulerPriority").BLOCKING_PRIORITY) {
                this.$9(g);
            }
            this.$6({
                metrics: a?.metrics,
                name: u,
                priority: c,
                taskId: d,
                time: o("WATimeUtils").performanceAbsoluteNow(),
                type: "queued"
            });
            this.maybeStartTask();
            return {
                cancel: function() {
                    return l.$10(d);
                },
                id: d,
                name: u,
                promise: m.promise,
                promote: function(t) {
                    return l.$11(d, t);
                }
            };
        };
        t_prototype.maybeStartTask = function() {
            for(let t = d.getGlobalHighestActivePriority() ?? o("TaskSchedulerPriority").BACKGROUND_PRIORITY, n = o("TaskSchedulerPriority").BLOCKING_PRIORITY; n <= t && this.$2.size < this.config.concurrency; n++){
                const r = this.$3[n];
                if (r.size !== 0) {
                    for (const a of r){
                        const i = this.$1.get(a);
                        if (i == null) {
                            r.delete(a);
                            continue;
                        }
                        if (i.state !== o("TaskSchedulerTypes").RunState.PENDING) {
                            r.delete(a);
                            continue;
                        }
                        r.delete(a);
                        this.$12(i);
                        return;
                    }
                }
            }
        };
        t_prototype.$12 = function(t) {
            this.$2.set(t.id, t.priority);
            t.state = o("TaskSchedulerTypes").RunState.RUNNING;
            const e = o("WATimeUtils").performanceAbsoluteNow();
            this.$6({
                name: t.name,
                priority: t.priority,
                taskId: t.id,
                time: e,
                type: "granted",
                waitTimeMs: e - t.entryTime
            });
            this.$5.tick(t.priority).then(t.startFn);
        };
        t_prototype.$8 = function(t) {
            const e = this.$1.get(t);
            if (e != null && e.state === o("TaskSchedulerTypes").RunState.RUNNING) {
                this.$13(e);
                this.maybeStartTask();
            }
        };
        t_prototype.$13 = function(t) {
            const e = o("WATimeUtils").performanceAbsoluteNow();
            this.$6({
                name: t.name,
                taskId: t.id,
                time: e,
                totalTimeMs: e - t.entryTime,
                type: "stuck"
            });
            this.$2.delete(t.id);
            this.$1.delete(t.id);
            if (t.promotionTimerId != null) {
                globalThis.clearTimeout(t.promotionTimerId);
                t.promotionTimerId = null;
            }
            if (this.config.failOnTimeout === true) {
                t.state = o("TaskSchedulerTypes").RunState.STUCK;
                t.rejectFn(new (o("TaskSchedulerError")).TaskSchedulerTimeoutError(this.name, t.id));
            }
            d.notifyActivePriorityChanged(this.name);
        };
        t_prototype.$10 = function(t) {
            const e = this.$1.get(t);
            if (e == null || e.state !== o("TaskSchedulerTypes").RunState.PENDING) {
                return false;
            }
            this.$7(t, o("TaskSchedulerTypes").RunState.CANCELLED);
            return true;
        };
        t_prototype.$7 = function(t, n) {
            const e = this.$1.get(t);
            if (e != null && (this.$1.delete(t), e.stuckTimerId != null && (self.clearTimeout(e.stuckTimerId), e.stuckTimerId = null), e.promotionTimerId != null && (self.clearTimeout(e.promotionTimerId), e.promotionTimerId = null), !(e.state === o("TaskSchedulerTypes").RunState.COMPLETED || e.state === o("TaskSchedulerTypes").RunState.FAILED || e.state === o("TaskSchedulerTypes").RunState.STUCK || e.state === o("TaskSchedulerTypes").RunState.CANCELLED))) {
                const r = this.$2.has(t);
                this.$2.delete(t);
                this.$3[e.priority].delete(t);
                e.state = n;
                if (r) {
                    d.notifyActivePriorityChanged(this.name);
                }
            }
        };
        t_prototype.getHighestActivePriority = function() {
            let e = null;
            this.$2.forEach((t)=>{
                if (e == null || t < e) {
                    e = t;
                }
            });
            return e;
        };
        t_prototype.$11 = function(t, n) {
            const e = this.$1.get(t);
            if (e == null || e.state !== o("TaskSchedulerTypes").RunState.PENDING || n >= e.priority) {
                return false;
            }
            this.$14(e, n);
            this.maybeStartTask();
            return true;
        };
        t_prototype.$14 = function(t, n) {
            const t_priority = t.priority;
            if (!(n >= t_priority)) {
                this.$3[t_priority].delete(t.id);
                t.priority = n;
                this.$3[n].add(t.id);
                this.$6({
                    from: t_priority,
                    name: t.name,
                    taskId: t.id,
                    time: o("WATimeUtils").performanceAbsoluteNow(),
                    to: n,
                    type: "promoted"
                });
            }
        };
        t_prototype.$9 = function(t) {
            const e = this;
            if (this.config.promotionTimeoutMs != null && t.promotionTimerId == null) {
                t.promotionTimerId = globalThis.setTimeout(function() {
                    if (t.state === o("TaskSchedulerTypes").RunState.PENDING) {
                        t.promotionTimerId = null;
                        e.$14(t, o("TaskSchedulerPriority").NORMAL_PRIORITY);
                        e.maybeStartTask();
                    }
                }, this.config.promotionTimeoutMs);
            }
        };
        t_prototype.setLifecycleListener = function(t) {
            this.$4 = t;
        };
        t_prototype.$6 = function(t) {
            this.$4?.(t);
        };
        t_prototype.destroy = function() {
            this.$1.forEach((e)=>{
                if (e.stuckTimerId != null) {
                    globalThis.clearTimeout(e.stuckTimerId);
                }
                if (e.promotionTimerId != null) {
                    globalThis.clearTimeout(e.promotionTimerId);
                }
            });
            this.$1.clear();
            this.$2.clear();
            for (const e of this.$3){
                e.clear();
            }
            d.unregister(this.name);
        };
        return t;
    })();
    class c {
        constructor(){
            this.$1 = new Map;
        }
        getGlobalHighestActivePriority() {
            let e = null;
            this.$1.forEach((t)=>{
                const n = t.getHighestActivePriority();
                if (n != null && (e == null || n < e)) {
                    e = n;
                }
            });
            return e;
        }
        notifyActivePriorityChanged(t) {
            this.$1.forEach((e, n)=>{
                if (n !== t) {
                    e.maybeStartTask();
                }
            });
        }
        register(t, n) {
            this.$1.set(t, n);
        }
        unregister(t) {
            this.$1.delete(t);
        }
        get(t) {
            return this.$1.get(t);
        }
    }
    var d = new c;
    function m(e, t, n) {
        const r = d.get(e);
        if (r) {
            return r;
        }
        const o = new u(e, t, n);
        d.register(e, o);
        return o;
    }
    l.taskScheduler = m;
}, 98);