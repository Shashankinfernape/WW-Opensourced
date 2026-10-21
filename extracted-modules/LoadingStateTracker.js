__d("LoadingStateTracker", [
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionUtil",
    "WebAPIs",
    "clearInterval",
    "performanceNow",
    "setInterval"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t(e) {
            const t = this;
            this.$1 = new (r("IteratableElementWeakMap"));
            this.loadingStateObserver = null;
            this.$2 = [];
            this.pendingLoadingElements = new (r("IteratableElementWeakMap"));
            this.visibleLoadingElements = new (r("IteratableElementWeakSet"));
            this.$4 = 0;
            this.$5 = null;
            this.$6 = null;
            this.$7 = 0;
            this.loadingStateObserverCallback = function(e) {
                Array.from(e).forEach((e)=>{
                    if (o("WebAPIs").intersectionObserverEntryIsVisible(e)) {
                        t.loadingElementAdded(e.target);
                        t.$3.logLoadingElementStart(e.target, e.boundingClientRect, e.time);
                        t.visibleLoadingElements.add(e.target);
                        t.$3.addFirstMarkerPoint("loadingState_start", e.time);
                        t.$3.addFirstMarkerPoint("firstPaint", e.time, {
                            mutationType: "loadingState"
                        });
                    } else {
                        t.loadingElementRemoved(e.target);
                    }
                });
            };
            this.$3 = e;
            if (o("WebAPIs").IntersectionObserver) {
                this.loadingStateObserver = new (o("WebAPIs")).IntersectionObserver(this.loadingStateObserverCallback);
            }
        }
        const t_prototype = t.prototype;
        t_prototype.loadingElementRemoved = function(n) {
            const t = this.pendingLoadingElements.get(n);
            if (t != null) {
                const o = this.$3.stateLog.get(t);
                if (o != null) {
                    o[1] = (e || (e = r("performanceNow")))();
                }
                this.$3.logLoadingElementEnd(n, (e || (e = r("performanceNow")))());
                this.pendingLoadingElements.delete(n);
                if (this.visibleLoadingElements.has(n)) {
                    this.visibleLoadingElements.delete(n);
                    this.$3.addMarkerPoint("loadingState_end", (e || (e = r("performanceNow")))());
                }
                this.$3.attemptMeasurementFromLoadingStateTracker();
            }
        };
        t_prototype.loadingElementAdded = function(n) {
            if (!this.$3.reported) {
                const t = `loadingState_${this.$4++}`;
                this.pendingLoadingElements.set(n, t);
                this.$3.stateLog.set(t, [
                    (e || (e = r("performanceNow")))(),
                    -1
                ]);
                if (this.$3.config.enable_background_loading_state_polling === true && this.$5 == null && o("VisibilityAPI").isVisibilityHidden()) {
                    this.$8();
                }
            }
        };
        t_prototype.waitLoadingState = function(t) {
            const e = this;
            if (this.$3.reported) {
                return function() {};
            }
            const n = this.$1.get(t);
            if (n) {
                return function() {
                    n();
                    e.loadingElementRemoved(t);
                };
            }
            if (o("VisualCompletionUtil").shouldIgnoreMutation(t, this.$3)) {
                return function() {};
            }
            if (this.$3.config.bypass_detached_element === true && t.isConnected === false) {
                return function() {};
            }
            if (this.loadingStateObserver) {
                this.loadingStateObserver.observe(t);
            }
            if (o("VisibilityAPI").canUseVisibilityAPI && !o("VisibilityAPI").isVisibilityHidden() || o("VisualCompletionUtil").isInAboveTheFold(t, this.$3)) {
                this.loadingElementAdded(t);
            }
            const r = function() {
                if (e.loadingStateObserver) {
                    e.loadingStateObserver.unobserve(t);
                }
                e.$1.delete(t);
            };
            this.$1.set(t, r);
            return function() {
                r();
                e.loadingElementRemoved(t);
            };
        };
        t_prototype.hasLoadingStateUnmountCallback = function(t) {
            return this.$1.has(t);
        };
        t_prototype.forEachLoadingStateUnmountCallback = function(t) {
            this.$1.forEach(t);
        };
        t_prototype.clearLoadingStateUnmountCallbacks = function() {
            this.$1.clear();
        };
        t_prototype.addTailLoadLoadingStateObserver = function(t) {
            this.$2.push(t);
        };
        t_prototype.disconnectTailLoadLoadingStateObservers = function() {
            this.$2.forEach((e)=>{
                if (e) {
                    e.disconnect();
                }
            });
        };
        t_prototype.initBackgroundPolling = function() {
            const e = this;
            if (this.$3.config.enable_background_loading_state_polling === true && o("VisibilityAPI").canUseVisibilityAPI) {
                this.$6 = o("VisibilityState").subscribe(function(t, n) {
                    if (n) {
                        e.$8();
                    } else {
                        e.$9();
                    }
                });
                if (o("VisibilityAPI").isVisibilityHidden()) {
                    this.$8();
                }
            }
        };
        t_prototype.$8 = function() {
            const e = this;
            if (this.$5 == null) {
                const n = this.pendingLoadingElements.size();
                if (n !== 0) {
                    this.$7 = n;
                    this.$5 = r("setInterval")(function() {
                        e.$10();
                    }, t.BACKGROUND_POLLING_INTERVAL_MS);
                }
            }
        };
        t_prototype.$9 = function() {
            if (this.$5 != null) {
                r("clearInterval")(this.$5);
                this.$5 = null;
            }
        };
        t_prototype.$10 = function() {
            if (this.$3.reported) {
                this.$9();
                return;
            }
            const t = (e || (e = r("performanceNow")))();
            const n = [];
            let a = 0;
            for (const [l, s] of this.pendingLoadingElements.entries()){
                a++;
                if (l.isConnected === false) {
                    n.push({
                        element: l,
                        reason: "detached"
                    });
                    continue;
                }
                if (!o("VisualCompletionUtil").isInAboveTheFold(l, this.$3)) {
                    n.push({
                        element: l,
                        reason: "outside_viewport"
                    });
                }
            }
            for (const u of n){
                const { element, reason } = u;
                this.$3.addMarkerPoint(`bg_poll_loading_removed_${reason}`, t);
                this.loadingElementRemoved(element);
            }
            const m = this.pendingLoadingElements.size();
            if (m === 0 && this.$7 > 0 && a < this.$7) {
                this.$3.addMarkerPoint("bg_poll_loading_gc", t);
                this.$3.attemptMeasurementFromLoadingStateTracker();
            }
            this.$7 = m;
            if (m === 0) {
                this.$9();
            }
        };
        t_prototype.disconnect = function() {
            this.$9();
            if (this.$6 != null) {
                this.$6();
                this.$6 = null;
            }
            if (this.loadingStateObserver) {
                this.loadingStateObserver.disconnect();
            }
        };
        return t;
    })();
    s.BACKGROUND_POLLING_INTERVAL_MS = 200;
    l.default = s;
}, 98);