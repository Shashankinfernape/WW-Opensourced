__d("WAOneQueue", [
    "NativeSchedulerTickStrategy",
    "Promise",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WAComms",
    "WAOfflineUtils",
    "WAPubSub",
    "WAResolvable",
    "WAShiftTimer",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
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
    let C;
    let b;
    const v = 60000;
    const S = o("WATagsLogger").TAGS([
        "OneQueue"
    ]);
    const R = (()=>{
        function t(t) {
            const n = this;
            const { castAcks, context, danglingQueue, enqueuePriority, flushables, mode, promotionTimeoutMs, pullMode, schedulerLifecycleListener, schedulerName } = t;
            this.$1 = o("WAPubSub").simplePubSub();
            this.$2 = [];
            this.$3 = [];
            this.$7 = {};
            this.$8 = [];
            this.$9 = 0;
            this.$12 = [];
            this.$13 = new (o("WAResolvable")).Resolvable;
            const _ = o("TaskScheduler").taskScheduler(schedulerName, {
                concurrency: 1,
                failOnTimeout: true,
                promotionTimeoutMs,
                timeoutMs: 15000
            }, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
            _.setLifecycleListener(schedulerLifecycleListener);
            this.$14 = _;
            this.$15 = enqueuePriority;
            this.$16 = danglingQueue;
            this.$4 = mode;
            this.$11 = context;
            this.$17 = castAcks;
            this.$12 = flushables;
            this.$6 = pullMode;
            this.$5 = new (o("WAShiftTimer")).ShiftTimer(function() {
                n.$14.run(function() {
                    return n.$18();
                }, {
                    name: "flush_by_timer"
                }).promise.catch((t)=>{
                    S.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while processing flush_by_timer: ",
                        ""
                    ])), t);
                });
            });
        }
        const t_prototype = t.prototype;
        t_prototype.$19 = function({ fn, name, priority }) {
            S.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Enqueuing ",
                " offline: ",
                ""
            ])), name, this.$4 !== o("WAOfflineUtils").ServerRPCMode.ONLINE);
            return this.$14.run(function() {
                return fn();
            }, {
                name,
                priority
            }).promise;
        };
        t_prototype.subscribe = function(t) {
            return this.$1.subscribe(t);
        };
        t_prototype.getMode = function() {
            return this.$4;
        };
        t_prototype.handleStanza = function(t, n) {
            const e = this;
            const $10 = this.$10;
            return this.$19({
                fn: function() {
                    return e.$20(t, n, $10);
                },
                name: `${n.tag}_process_stanza`,
                priority: n.tag === "receipt" && n.offline == null ? o("TaskSchedulerPriority").NORMAL_PRIORITY : o("TaskSchedulerPriority").BLOCKING_PRIORITY
            }).then(()=>"NO_ACK");
        };
        t_prototype.handleOfflineStartStanza = function(offlineStats) {
            if (offlineStats.count !== 0) {
                if (this.$13.resolveWasCalled()) {
                    this.$13 = new (o("WAResolvable")).Resolvable;
                }
                this.$4 = o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME;
                this.$1.publish({
                    type: "offline-start",
                    offlineStats
                });
                this.$9 = offlineStats.count;
                this.$5.onOrAfter(v);
                this.$6.offlineStart();
            }
        };
        t_prototype.handleOfflineEndStanza = function(t) {
            const e = this;
            return this.$19({
                fn: function() {
                    if (t != null && t !== e.$10) {
                        S.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Offline queue end of a replaced connection"
                        ])));
                        return e.$18("endOfOQ");
                    }
                    e.$5.cancel();
                    e.$6.clear();
                    if (e.$10 !== o("WAComms").getComms()?.socketId) {
                        return S.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Offline queue end received while the connection gets dropped"
                        ]))), e.$18("endOfOQ");
                    }
                    return S.LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Offline queue end"
                    ]))), e.$18("endOfOQ").then(()=>{
                        e.$4 = o("WAOfflineUtils").ServerRPCMode.ONLINE;
                        e.$21();
                        e.$13.resolve();
                        e.$1.publish({
                            type: "offline-end"
                        });
                    });
                },
                name: "offline_end",
                priority: this.$15
            }).then(()=>{
                const t = e.$8;
                e.$8 = [];
                t.forEach((e)=>e());
            });
        };
        t_prototype.$21 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    yield this.$16.clear();
                } catch (error) {
                    S.ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while clearing the dangling queue: ",
                        ""
                    ])), error);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.waitForWAInfraOfflineSyncEnd = function() {
            return this.$13.promise;
        };
        t_prototype.newConnection = function() {
            this.$10 = o("WAComms").getComms()?.socketId;
        };
        t_prototype.connectionDropped = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                S.WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Drop offline queue as per loosing connection"
                ])));
                this.$10 = null;
                this.$6.clear();
                yield this.$19({
                    name: "flush_on_connection_drop",
                    fn: function() {
                        return e.$18();
                    },
                    priority: o("TaskSchedulerPriority").BLOCKING_PRIORITY
                });
                this.$1.publish({
                    type: "connection-lost"
                });
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$22 = function(t, serverTs) {
            if (t != null) {
                this.$1.publish({
                    type: "offline-entity",
                    serverTs,
                    offline: t
                });
                this.$6.stanzaReceived(t);
                this.$5.cancel();
                this.$5.onOrAfter(v);
            }
        };
        t_prototype.$20 = function(t, r, socketId) {
            const a = this;
            const { offline, serverTs, tag } = r;
            this.$22(offline, serverTs);
            S.LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "Processing stanza with tag ",
                ""
            ])), tag);
            this.$7[tag] = (this.$7[tag] ?? 0) + 1;
            return (b || (b = n("Promise"))).resolve(t(this.$11)).then((response)=>{
                S.LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Processing stanza with tag ",
                    " is done"
                ])), tag);
                if (L(response)) {
                    a.$2.push({
                        response,
                        socketId
                    });
                } else {
                    a.$2.push({
                        response,
                        socketId
                    });
                }
                return response;
            }).then(()=>{
                if (offline != null) {
                    a.$6.stanzaProcessed();
                }
                return a.$23();
            });
        };
        t_prototype.$23 = function() {
            if (this.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME) {
                if (this.$6.shouldFlash()) {
                    return this.$18();
                }
                return (b || (b = n("Promise"))).resolve();
            }
            return this.$18();
        };
        t_prototype.$18 = function(t) {
            const e = this;
            S.LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "Flushing protocol queue"
            ])));
            let count = 0;
            Object.entries(this.$7).forEach(([t, n])=>{
                count += n;
            });
            this.$7 = {};
            return this.$12.reduce((acc, item)=>acc.then(()=>item.flush(e.$11, S, e.$4, t)), (b || (b = n("Promise"))).resolve()).then(()=>{
                S.LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Acking"
                ])));
                return e.$24();
            }).finally(()=>{
                if (e.$4 === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME) {
                    e.$1.publish({
                        type: "offline-processed",
                        count
                    });
                }
            });
        };
        t_prototype.isPendingAcksEmpty = function() {
            return this.$2.length === 0 && this.$3.length === 0;
        };
        t_prototype.$24 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = [].concat(this.$3, this.$2);
                S.LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "Cast stanzas ",
                    ""
                ])), e.length);
                this.$2 = [];
                this.$3 = [];
                try {
                    yield this.$17(e, this.$4);
                } catch (error) {
                    const t = r("getErrorSafe")(error);
                    S.ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while casting ack: ",
                        ""
                    ])), t.toString());
                    throw t;
                }
                return (b || (b = n("Promise"))).resolve();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.enqueue = function(t, r) {
            const e = this;
            const r_afterInit = r.afterInit;
            const i = r_afterInit === undefined ? false : r_afterInit;
            const { flush, operationType, priority } = r;
            const priority_1 = priority === undefined ? this.$15 : priority;
            const d = ()=>e.$19({
                    name: operationType,
                    fn: ((e)=>{
                        function t() {
                            return e.apply(this, arguments);
                        }
                        t.toString = function() {
                            return e.toString();
                        };
                        return t;
                    })(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        const n = yield t(e.$11);
                        if (flush) {
                            yield e.$18();
                        }
                        return n;
                    })),
                    priority: priority_1
                });
            if (i && this.$4 !== o("WAOfflineUtils").ServerRPCMode.ONLINE) {
                const m = new (o("WAResolvable")).Resolvable;
                this.$8.push(function() {
                    d().then((e)=>m.resolve(e)).catch((e)=>m.reject(e));
                });
                return m.promise;
            }
            return d();
        };
        return t;
    })();
    function L(response) {
        return !(response === "NO_ACK" || response === "CLOSE_SOCKET");
    }
    l.WAOneQueue = R;
}, 98);