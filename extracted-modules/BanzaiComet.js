__d("BanzaiComet", [
    "BanzaiAdapterComet",
    "BanzaiCompressionUtils",
    "BanzaiConsts",
    "BanzaiLazyQueue",
    "BanzaiUtils",
    "CurrentAppID",
    "CurrentUser",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "Promise",
    "Run",
    "Visibility",
    "WebSession",
    "clearTimeout",
    "justknobx",
    "performanceAbsoluteNow",
    "setInterval",
    "setTimeout",
    "setTimeoutCometLoggingPriWithFallback",
    "setTimeoutCometSpeculativeWithFallback"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = {
        basic: [],
        vital: []
    };
    const p = [];
    const _ = {
        basic: null,
        vital: null
    };
    const f = {
        basic: null,
        vital: null
    };
    const g = new Map;
    let h;
    const y = {
        basic: 0,
        vital: 0
    };
    const C = {
        basic: 0,
        vital: 0
    };
    let triggerRoute = null;
    function v() {
        return (s || (s = r("ExecutionEnvironment"))).isInSharedWorker || (s || (s = r("ExecutionEnvironment"))).isInWorker && typeof DedicatedWorkerGlobalScope === "function" && self instanceof DedicatedWorkerGlobalScope;
    }
    function S() {
        return v() && r("justknobx")._("6180");
    }
    function R() {
        if (S()) {
            return r("justknobx")._("6181");
        }
        return null;
    }
    function L(e) {
        y[e]++;
        C[e] = (u || (u = r("performanceAbsoluteNow")))() + Math.min((c || (c = r("BanzaiConsts"))).VITAL_WAIT * 2 ** (y[e] - 1), r("justknobx")._("6182"));
    }
    var E = {
        _expiredBatchMap: function() {
            const e = (u || (u = r("performanceAbsoluteNow")))();
            for (const t of g.entries()){
                const n = t[1];
                if (n.expiryTime <= e) {
                    const i = n.posts[0];
                    const l = i.__meta.priority ?? (c || (c = r("BanzaiConsts"))).BASIC;
                    E._getPostBuffer(l).push(...n.posts);
                    g.delete(t[0]);
                }
            }
            if (g.size > 0) {
                h = r("setTimeout")(E._expiredBatchMap, (c || (c = r("BanzaiConsts"))).BATCH_TIMEOUT);
            }
        },
        _flushBatchMap: function() {
            r("clearTimeout")(h);
            h = null;
            for (const e of g.values()){
                const o = e.posts[0];
                const a = o.__meta.priority ?? (c || (c = r("BanzaiConsts"))).BASIC;
                E._getPostBuffer(a).push(...e.posts);
            }
            g.clear();
        },
        _flushLazyQueue: function() {
            r("BanzaiLazyQueue").flushQueue().forEach((e)=>E.post(...e));
        },
        _gatherWadsAndPostsFromBuffer: function(t, n, keepRetryable, a, i, sendMinimumOnePost) {
            const e = {
                currentSize: 0,
                keepRetryable,
                overlimit: false,
                sendMinimumOnePost,
                wadMap: new Map
            };
            const s = i[a].filter((o)=>r("BanzaiUtils").filterPost(o, t, n, e));
            if (!e.overlimit && a === "vital") {
                i.basic = i.basic.filter((o)=>r("BanzaiUtils").filterPost(o, t, n, e));
            }
            return s;
        },
        _getPostBuffer: function(t) {
            if (t == null) {
                return m.basic;
            }
            return m[t] || [];
        },
        _handleBatchPost: function(t, n, o) {
            if (o == null) {
                return false;
            }
            const e = t[2];
            const a = t[0];
            const i = g.get(a);
            if (i != null && i.expiryTime <= e) {
                E._getPostBuffer(n).push(...i.posts);
                g.delete(a);
                return false;
            }
            if (i != null && i.expiryTime > e) {
                i.posts.push(t);
                return true;
            }
            const s = {
                expiryTime: e + o,
                posts: [
                    t
                ]
            };
            g.set(a, s);
            if (h == null || h === 0) {
                h = r("setTimeout")(E._expiredBatchMap, (c || (c = r("BanzaiConsts"))).BATCH_TIMEOUT);
            }
            return true;
        },
        _handlePostPreflightChecks: function(t, n, o) {
            if (E.adapter.config.disabled === true || !(s || (s = r("ExecutionEnvironment"))).canUseDOM && !(s || (s = r("ExecutionEnvironment"))).isInWorker || r("BanzaiAdapterComet").config.disabled === true) {
                return true;
            }
            const blacklist = r("BanzaiAdapterComet").config.blacklist;
            return blacklist != null && typeof blacklist.indexOf === "function" && blacklist.indexOf(t) !== -1;
        },
        _handleSignalPost: function(t, n, a) {
            if (!a) {
                return false;
            }
            const e = t;
            e.__meta.status = (c || (c = r("BanzaiConsts"))).POST_INFLIGHT;
            const i = [
                {
                    app_id: o("CurrentAppID").getAppID(),
                    posts: [
                        t
                    ],
                    trigger: t[0],
                    user: r("CurrentUser").getPossiblyNonFacebookUserID(),
                    webSessionId: o("WebSession").getId()
                }
            ];
            r("BanzaiAdapterComet").send(E._prepForTransit(i), function() {
                e.__meta.status = (c || (c = r("BanzaiConsts"))).POST_SENT;
                if (e.__meta.callback != null) {
                    e.__meta.callback();
                }
            }, function(e) {
                r("BanzaiUtils").retryPost(t, e, m[n], R());
            }, true);
            return !e.__meta.retry;
        },
        _initialize: function() {
            const e = [
                (c || (c = r("BanzaiConsts"))).VITAL,
                c.BASIC
            ];
            if ((s || (s = r("ExecutionEnvironment"))).canUseDOM) {
                r("setInterval")(function() {
                    E._flushLazyQueue();
                }, (c || (c = r("BanzaiConsts"))).ENSURE_LAZY_QUEUE_FLUSH_TIMEOUT);
                if (r("Visibility").isSupported()) {
                    let t;
                    (t = r("Visibility")).addListener(t.HIDDEN, function() {
                        E._flushLazyQueue();
                        e.forEach((e)=>{
                            if (E._getPostBuffer(e).length > 0) {
                                E._tryToSendViaBeacon(e);
                            }
                        });
                        E._store();
                    });
                    t.addListener(t.VISIBLE, function() {
                        E._flushLazyQueue();
                        e.forEach((e)=>{
                            E._tryToSendViaBeacon(e);
                        });
                        E._restore();
                    });
                } else {
                    E.adapter.setHooks(E);
                }
                o("Run").onBeforeUnload(function() {
                    E._flushLazyQueue();
                    E._flushBatchMap();
                    E._sendBeacon((c || (c = r("BanzaiConsts"))).VITAL);
                    E._sendBeacon(c.BASIC);
                }, false);
                E.adapter.setUnloadHook(E);
                o("Run").onAfterLoad(function() {
                    E._restore();
                });
            } else {
                if ((s || (s = r("ExecutionEnvironment"))).isInWorker) {
                    self.addEventListener("force-flush-logs", function() {
                        E.flush();
                        E._flushLazyQueue();
                        E._flushBatchMap();
                    });
                }
            }
        },
        _isShutdown: false,
        _prepForTransit: function(t) {
            const e = new FormData;
            e.append("ts", String(Date.now()));
            const n = r("BanzaiCompressionUtils").outOfBandsPosts(t);
            Object.keys(n).forEach((t)=>{
                e.append(t, n[t]);
            });
            e.append("q", JSON.stringify(t));
            return e;
        },
        _prepWadForTransit: function(t) {
            r("BanzaiCompressionUtils").compressWad(t, r("BanzaiAdapterComet").preferredCompressionMethod());
        },
        _prepWadForTransitAsync: function(t) {
            return r("BanzaiCompressionUtils").compressWadAsync(t, r("BanzaiAdapterComet").preferredCompressionMethod());
        },
        _restore: function() {
            const e = function(t) {
                const t___meta = t.__meta;
                const n = t___meta.priority === (c || (c = r("BanzaiConsts"))).VITAL ? (c || (c = r("BanzaiConsts"))).VITAL : (c || (c = r("BanzaiConsts"))).BASIC;
                E._getPostBuffer(n).push(t);
            };
            const t = r("BanzaiAdapterComet").getStorage();
            (d || (d = r("ErrorGuard"))).applyWithGuard(t.restore, t, [
                e
            ]);
            E._schedule((c || (c = r("BanzaiConsts"))).VITAL_WAIT, c.VITAL);
        },
        _schedule: function(t, n) {
            if (n == null) {
                return false;
            }
            const e = function() {
                f[n] = null;
                _[n] = null;
                if ((u || (u = r("performanceAbsoluteNow")))() < C[n]) {
                    E._schedule(0, n);
                    return;
                }
                E._sendWithCallbacks(n, null, null);
            };
            const o = (u || (u = r("performanceAbsoluteNow")))();
            const a = Math.max(t, C[n] - o);
            const i = o + a;
            if (_[n] == null || i < _[n]) {
                _[n] = i;
                if (f[n] !== null) {
                    r("clearTimeout")(f[n]);
                }
                if (n === (c || (c = r("BanzaiConsts"))).VITAL) {
                    f.vital = r("setTimeoutCometLoggingPriWithFallback")(e, a);
                } else {
                    f.basic = r("setTimeoutCometSpeculativeWithFallback")(e, a);
                }
                return true;
            }
            return false;
        },
        _sendBeacon: function(t) {
            if (E._getPostBuffer(t).length > 0) {
                E._tryToSendViaBeacon(t);
            }
        },
        _sendWithCallbacks: function(o, a, i) {
            if (m[o].length > 0) {
                E._schedule(o === "vital" ? (c || (c = r("BanzaiConsts"))).VITAL_WAIT : (c || (c = r("BanzaiConsts"))).BASIC_WAIT_COMET, o);
            }
            if (!r("BanzaiAdapterComet").readyToSend()) {
                if (i) {
                    i();
                }
                return;
            }
            const t = r("BanzaiAdapterComet").getStorage();
            (d || (d = r("ErrorGuard"))).applyWithGuard(t.flush, t, [
                E._restore
            ]);
            r("BanzaiAdapterComet").inform((c || (c = r("BanzaiConsts"))).SEND);
            const l = [];
            const s = [];
            m[o] = E._gatherWadsAndPostsFromBuffer(l, s, true, o, m, true);
            if (l.length <= 0) {
                r("BanzaiAdapterComet").inform((c || (c = r("BanzaiConsts"))).OK);
                if (a) {
                    a();
                }
                return;
            }
            l[0].trigger = triggerRoute;
            triggerRoute = null;
            l.forEach((e)=>e.send_method = "ajax");
            p.push(...s);
            (e || (e = n("Promise"))).all(l.map(E._prepWadForTransitAsync)).finally(()=>{
                if (!E._isShutdown) {
                    s.forEach((e)=>{
                        const t = p.indexOf(e);
                        if (t === -1) {
                            r("FBLogger")("comet_infra").mustfix("inflight post not found in inPreparationPosts");
                            return;
                        }
                        p.splice(t, 1);
                    });
                    r("BanzaiAdapterComet").send(E._prepForTransit(l), function() {
                        y[o] = 0;
                        C[o] = 0;
                        s.forEach((e)=>{
                            const t = e;
                            t.__meta.status = (c || (c = r("BanzaiConsts"))).POST_SENT;
                            if (typeof t.__meta.callback === "function") {
                                t.__meta.callback();
                            }
                        });
                        if (a) {
                            a();
                        }
                    }, function(e) {
                        const t = R();
                        s.forEach((n)=>{
                            r("BanzaiUtils").retryPost(n, e, m[o], t);
                        });
                        if (S()) {
                            L(o);
                        }
                        E._store();
                        if (i) {
                            i();
                        }
                    });
                }
            });
        },
        _store: function() {
            const e = r("BanzaiAdapterComet").getStorage();
            (d || (d = r("ErrorGuard"))).applyWithGuard(e.store, e, [
                m[(c || (c = r("BanzaiConsts"))).VITAL]
            ]);
            d.applyWithGuard(e.store, e, [
                m[c.BASIC]
            ]);
        },
        _testState: function() {
            return {
                postBuffer: m.basic,
                triggerRoute
            };
        },
        _tryToSendViaBeacon: function(n) {
            if (!(navigator && navigator.sendBeacon)) {
                return false;
            }
            let e = true;
            const o = [];
            const a = [];
            m[n] = E._gatherWadsAndPostsFromBuffer(o, a, false, n, m, false);
            if (o.length <= 0) {
                return false;
            }
            o.forEach((e)=>e.send_method = "beacon");
            o.map(E._prepWadForTransit);
            const i = E._prepForTransit(o);
            const l = E.adapter.getEndPointUrl(true);
            const s = t.navigator.sendBeacon(l, i);
            if (!s) {
                e = false;
                a.forEach((e)=>{
                    r("BanzaiUtils").resetPostStatus(e);
                    E._getPostBuffer(n).push(e);
                });
            }
            return e;
        },
        _unload: function() {
            E._flushLazyQueue();
            E._flushBatchMap();
            r("BanzaiAdapterComet").cleanup();
            r("BanzaiAdapterComet").inform((c || (c = r("BanzaiConsts"))).SHUTDOWN);
            E._isShutdown = true;
            p.forEach((e)=>{
                const priority = e.__meta.priority;
                r("BanzaiUtils").retryPost(e, 444, E._getPostBuffer(priority ?? (c || (c = r("BanzaiConsts"))).VITAL));
            });
            E._sendBeacon(c.VITAL);
            E._sendBeacon(c.BASIC);
            E._store();
        },
        _validateRouteAndSize: function(t, n) {
            if (!t) {
                r("FBLogger")("banzai").blameToPreviousFrame().blameToPreviousFrame().mustfix("BanzaiComet.post called without specifying a route");
            }
            return (JSON.stringify(n) ?? "").length;
        },
        BASIC: {
            delay: (c || (c = r("BanzaiConsts"))).BASIC_WAIT
        },
        BASIC_WAIT: c.BASIC_WAIT,
        ERROR: c.ERROR,
        EXPIRY: undefined,
        OK: c.OK,
        SEND: c.SEND,
        SHUTDOWN: c.SHUTDOWN,
        VITAL: {
            delay: c.VITAL_WAIT
        },
        VITAL_WAIT: c.VITAL_WAIT,
        adapter: r("BanzaiAdapterComet"),
        canUseNavigatorBeacon: function() {
            return !!(navigator && navigator.sendBeacon && r("BanzaiAdapterComet").isOkToSendViaBeacon());
        },
        flush: function(t, n) {
            E.flushHelper((c || (c = r("BanzaiConsts"))).VITAL, t, n);
            E.flushHelper(c.BASIC, t, n);
        },
        flushHelper: function(t, n, o) {
            _[t] = null;
            if (f[t] !== null) {
                r("clearTimeout")(f[t]);
                f[t] = null;
            }
            E._sendWithCallbacks(t, n, o);
        },
        isEnabled: function(t) {
            return !!(r("BanzaiAdapterComet").config.gks && r("BanzaiAdapterComet").config.gks[t]);
        },
        post: function(t, n, o) {
            E._flushLazyQueue();
            if (!E._handlePostPreflightChecks(t, n, o)) {
                const i = t.split(":");
                if (!((r("BanzaiAdapterComet").config.known_routes || []).indexOf(i[0]) === -1 && (r("BanzaiAdapterComet").config.should_log_unknown_routes === true && r("FBLogger")("banzai").blameToPreviousFrame().mustfix(`Attempted to post to invalid Banzai route '${t}'. This call site should be cleaned up.`), r("BanzaiAdapterComet").config.should_drop_unknown_routes === true))) {
                    const l = E._validateRouteAndSize(t, n);
                    const s = o || {};
                    const d = r("BanzaiUtils").wrapData(t, n, (u || (u = r("performanceAbsoluteNow")))(), s.retry, l);
                    const m = d;
                    if (s.callback) {
                        m.__meta.callback = s.callback;
                    }
                    if (s.compress != null) {
                        m.__meta.compress = s.compress;
                    }
                    const p = s.delay ?? (c || (c = r("BanzaiConsts"))).BASIC_WAIT_COMET;
                    const _ = p > (c || (c = r("BanzaiConsts"))).VITAL_WAIT ? (c || (c = r("BanzaiConsts"))).BASIC : (c || (c = r("BanzaiConsts"))).VITAL;
                    m.__meta.priority = _;
                    if (!E._handleSignalPost(d, _, s.signal ?? false)) {
                        if (!E._handleBatchPost(d, _, s.batch)) {
                            E._getPostBuffer(_).push(d);
                            if (E._schedule(p, _) || triggerRoute == null) {
                                triggerRoute = t;
                            }
                        }
                    }
                }
            }
        },
        postsCount: new Map,
        subscribe: r("BanzaiAdapterComet").subscribe
    };
    E._initialize();
    l.default = E;
}, 98);