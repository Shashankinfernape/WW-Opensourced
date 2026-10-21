__d("WAWebAppMutexCore", [
    "fbt",
    "Promise",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebAlarm",
    "WAWebCallCollection",
    "WAWebEventsWaitForEvent",
    "WAWebPageLoadLogging",
    "WAWebUserPrefsTabMutex",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
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
    let v;
    let S;
    let R;
    const L = 600000;
    const E = {
        INIT: "init",
        PING: "ping",
        PONG: "pong",
        TAKEOVER: "local-takeover",
        CHECK_ACTIVE_CALL: "check-active-call",
        ACTIVE_CALL_RESPONSE: "active-call-response",
        FOCUS_REQUEST: "focus-request"
    };
    const k = (()=>{
        function t(e) {
            const t = this;
            this.$3 = false;
            this.$4 = true;
            this.$5 = new (o("WAResolvable")).Resolvable;
            this.$6 = false;
            this.$9 = function() {
                t.$11();
                const e = Date.now();
                o("WAWebUserPrefsTabMutex").setMutex(t.$1 = `${E.INIT}_${e}`);
                t.$2 = r("WAWebAlarm").setLocalTimeout(t.$9, e + L);
            };
            this.$7 = e;
        }
        const a = t.prototype;
        a.hasShownCallTakeoverModal = function() {
            return this.$6;
        };
        a.waitForCompletion = function() {
            return this.$5.promise;
        };
        a.setShouldLaunchSocket = function(t) {
            this.$4 = t;
        };
        a.init = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t = 0) {
                if (!this.$3) {
                    o("WAWebPageLoadLogging").startPageLoadQplMeasure("acquire_mutex");
                    this.$3 = true;
                }
                const n = t + 1;
                if (n > 3) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[app] AppMutex init generation: ",
                        ""
                    ])), n);
                    return true;
                }
                const r = o("WAWebUserPrefsTabMutex").getNoTakeover();
                o("WAWebUserPrefsTabMutex").setNoTakeover();
                const a = yield this.$8();
                if (a) {
                    this.$9();
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure("acquire_mutex");
                    if (this.$4) {
                        yield this.$7.onAcquired();
                    }
                    this.$5.resolve();
                    this.$7.onAcquiredComplete?.();
                    return false;
                }
                if (this.$7.shouldPreventTakeoverOnActiveCall()) {
                    const s = yield this.$10();
                    if (s) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "app:init: Other tab has active call, setting flag"
                        ])));
                        this.$6 = true;
                        return true;
                    }
                }
                if (r) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[app] AppMutex init no take over"
                    ])));
                    return true;
                }
                throw n;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a.takeoverLocal = function(t) {
            const e = this;
            if (o("WAWebUserPrefsTabMutex").getMutex()) {
                o("WAWebPageLoadLogging").startPageLoadQplMeasure("mutex_takeover");
                o("WAWebUserPrefsTabMutex").setMutex(E.TAKEOVER);
                return o("WAPromiseTimeout").promiseTimeout(r("WAWebEventsWaitForEvent")(window, "storage", o("WAWebUserPrefsTabMutex").takeoverFilter), 30000, "takeoverLocalTimeout").then((n)=>{
                    o("WAWebUserPrefsTabMutex").removeMutex();
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure("mutex_takeover");
                    return e.init(t);
                }).catch(o("WAFilteredCatch").filteredCatch(o("WACustomError").TimeoutError, function() {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[app] takeoverLocal timeout"
                    ])));
                    o("WAWebUserPrefsTabMutex").removeMutex();
                    o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                        mutex_takeover_timeout: true
                    });
                    o("WAWebPageLoadLogging").endPageLoadQplMeasure("mutex_takeover");
                    return e.init(t);
                })).finally(()=>{
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[mutex] shut down an existing instance of WA Web"
                    ])));
                });
            }
            return this.init(t);
        };
        a.unloadMutex = function() {
            const e = o("WAWebUserPrefsTabMutex").getMutex();
            if (e && this.$1 && e.includes(this.$1)) {
                o("WAWebUserPrefsTabMutex").removeMutex();
            }
        };
        a.storagePong = function(t) {
            if (o("WAWebUserPrefsTabMutex").mutexFilter(t)) {
                const e = o("WAWebUserPrefsTabMutex").parseMutex(t.newValue);
                if (e) {
                    if (e === E.TAKEOVER) {
                        this.$11();
                        o("WAWebUserPrefsTabMutex").localTakeoverSuccess();
                        return true;
                    }
                    if (e.indexOf(E.PING) === 0) {
                        o("WAWebUserPrefsTabMutex").setMutex(E.PONG + Math.random());
                    } else if (e.indexOf(E.CHECK_ACTIVE_CALL) === 0) {
                        if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
                            const n = r("WAWebCallCollection").activeCall != null;
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "app:storagePong: responding to active call check, hasCall: ",
                                ""
                            ])), n);
                            o("WAWebUserPrefsTabMutex").setMutex(`${E.ACTIVE_CALL_RESPONSE}_${String(n)}`);
                        }
                    } else {
                        if (e.indexOf(E.FOCUS_REQUEST) === 0 && o("WAWebVoipGatingUtils").isCallingEnabled()) {
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "app:storagePong: received focus request, focusing window"
                            ])));
                            this.$12();
                        }
                    }
                }
            }
        };
        a.$11 = function() {
            if (this.$2 != null) {
                r("WAWebAlarm").clearTimeout(this.$2);
            }
        };
        a.$8 = function() {
            let e = o("WAWebUserPrefsTabMutex").getMutex();
            if (e) {
                o("WAWebPageLoadLogging").startPageLoadQplMeasure("mutex_ping");
                e += "";
                let t = 1000;
                if (e.indexOf("_") > 0) {
                    const a = e.split(".");
                    const i = parseInt(a[a.length - 1], 10);
                    if (Number.isFinite(i)) {
                        const l = Date.now() - L * 1.5;
                        if (i < l) {
                            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[app] _pingForOtherLocalSession stale mutex"
                            ])));
                            t = 1000;
                        }
                    }
                }
                const s = o("WAPromiseTimeout").promiseTimeout(r("WAWebEventsWaitForEvent")(window, "storage", o("WAWebUserPrefsTabMutex").mutexFilter), t, "waitForOtherLocalSessionTimeout").then(()=>{
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[app] _pingForOtherLocalSession other session is alive"
                    ])));
                    return false;
                }).catch(o("WAFilteredCatch").filteredCatch(o("WACustomError").TimeoutError, function() {
                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[app] _pingForOtherLocalSession mutex timeout after ",
                        "ms"
                    ])), t);
                    o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                        mutex_ping_timeout: true
                    });
                    return true;
                }));
                s.finally(()=>o("WAWebPageLoadLogging").endPageLoadQplMeasure("mutex_ping"));
                o("WAWebUserPrefsTabMutex").setMutex(E.PING + Math.random());
                return s;
            }
            return (R || (R = n("Promise"))).resolve(true);
        };
        a.$10 = function() {
            const e = o("WAWebUserPrefsTabMutex").getMutex();
            if (!e) {
                return (R || (R = n("Promise"))).resolve(false);
            }
            const t = o("WAPromiseTimeout").promiseTimeout(r("WAWebEventsWaitForEvent")(window, "storage", function(e) {
                return o("WAWebUserPrefsTabMutex").mutexFilter(e) && e.newValue != null && e.newValue.indexOf(E.ACTIVE_CALL_RESPONSE) >= 0;
            }), 2000, "checkActiveCallTimeout").then((e)=>{
                const n = o("WAWebUserPrefsTabMutex").parseMutex(e.newValue ?? "");
                if (n && n.indexOf(E.ACTIVE_CALL_RESPONSE) === 0) {
                    const r = n.split("_")[1] === "true";
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "app:_checkForActiveCallInOtherTab other tab hasCall: ",
                        ""
                    ])), r);
                    return r;
                }
                return false;
            }).catch(o("WAFilteredCatch").filteredCatch(o("WACustomError").TimeoutError, function() {
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "app:_checkForActiveCallInOtherTab timeout"
                ])));
                return false;
            }));
            o("WAWebUserPrefsTabMutex").setMutex(E.CHECK_ACTIVE_CALL + Math.random());
            return t;
        };
        a.requestFocusOnOtherTab = function() {
            const e = this;
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "app:requestFocusOnOtherTab requesting notif permission"
            ])));
            if (Notification !== void 0 && Notification.permission === "default") {
                Notification.requestPermission().then(()=>{
                    e.$13();
                }).catch((t)=>{
                    o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[app] Failed to request notification permission: ",
                        ""
                    ])), t);
                    e.$13();
                });
            } else {
                this.$13();
            }
        };
        a.$13 = function() {
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "app:requestFocusOnOtherTab sending focus request"
            ])));
            o("WAWebUserPrefsTabMutex").setMutex(E.FOCUS_REQUEST + Math.random());
        };
        a.$12 = function() {
            if (Notification !== void 0 && Notification.permission === "granted") {
                this.$14();
            }
        };
        a.$14 = function() {
            const e = new Notification(s._("WhatsApp Web").toString(), {
                body: s._("You have an active call in this window").toString(),
                requireInteraction: true,
                tag: "wa-web-call-active"
            });
            e.onclick = function() {
                window.focus();
                e.close();
            };
            window.setTimeout(function() {
                e.close();
            }, 5000);
        };
        return t;
    })();
    l.WAWebAppMutexCore = k;
}, 226);