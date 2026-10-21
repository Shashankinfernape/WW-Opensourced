__d("WAWebSocketModel", [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebAddMeContactAction",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBaseModel",
    "WAWebCanonicalUtils",
    "WAWebClearCredentials",
    "WAWebConnModel",
    "WAWebDbErrors",
    "WAWebDeleteAllCacheStorage",
    "WAWebEnvironment",
    "WAWebFeatureDetectionDetermineIncognito",
    "WAWebGroupABPropsCache",
    "WAWebInvocationInterface",
    "WAWebLocalStorage",
    "WAWebLogStorageSizeForCrash",
    "WAWebLogoutReasonConstants",
    "WAWebMediaStore",
    "WAWebNetworkStatus",
    "WAWebReleaseToEventLoop",
    "WAWebReloadAfterLogout",
    "WAWebSentinel",
    "WAWebSocketConstants",
    "WAWebSocketLogoutStorageUtils",
    "WAWebSocketLogoutUtils",
    "WAWebSubscribePushManagerAction",
    "WAWebSyncBootstrap",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "err",
    "getErrorSafe",
    "gkx",
    "nullthrows",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
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
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    const W = r("requireDeferred")("WAWebClearAppStates").__setRef("WAWebSocketModel");
    const q = [
        (B = o("WAWebLogoutReasonConstants")).LogoutReason.WebFailAddChat,
        B.LogoutReason.WebFailEncSalt,
        B.LogoutReason.WebFailOfflineResume,
        B.LogoutReason.WebFailStorageInitialization
    ];
    const U = 5000;
    const V = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.socket = o("WAWebBaseModel").session();
            e.launchGeneration = o("WAWebBaseModel").session(0);
            e.backoffGeneration = o("WAWebBaseModel").session(0);
            e.hasSynced = o("WAWebBaseModel").session();
            e.state = o("WAWebBaseModel").session(o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED);
            e.stream = o("WAWebBaseModel").session(o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED);
            e.isIncognito = o("WAWebBaseModel").session();
            e.retryTimestamp = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            const t = this;
            let a;
            this.clearAppStatesDeferred = W.load();
            o("WAWebLogStorageSizeForCrash").initStorageSizeCrashLogging();
            this.listenTo(this, "change:state", function() {
                return t.$SocketImpl$p_1();
            });
            this.listenTo(this, "change:stream", function() {
                return t.$SocketImpl$p_2();
            });
            o("WAWebReleaseToEventLoop").releaseToEventLoop().then(r("WAWebFeatureDetectionDetermineIncognito")).then((e)=>{
                t.isIncognito = e;
            });
            (a = o("WAWebBackendEventBus")).BackendEventBus.onSetSocketState(function(e) {
                t.state = e;
            });
            a.BackendEventBus.onOpenSocketStream(function() {
                r("WAWebNetworkStatus").online = true;
                r("WAWebNetworkStatus").checkOnline();
                t.openStream().catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[open socket stream] failed to open stream"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("socket-model-failed-to-open-stream");
                });
                if (t.hasSynced) {
                    t.set({
                        stream: o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED
                    });
                }
            });
            a.BackendEventBus.onSocketStreamDisconnected(function() {
                t.set({
                    stream: o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED
                });
                r("WAWebNetworkStatus").checkOnline();
            });
            a.BackendEventBus.onCriticalSyncDone(function() {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ws2] observed on_critical_sync_done"
                ])));
                t.$SocketImpl$p_3();
            });
            a.BackendEventBus.onMainStreamModeReady(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ws2] observed main_stream_mode_ready"
                ])));
                if (!(yield o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced())) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[ws2] did not meet conditions to move to main screen"
                    ])));
                    return;
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[ws2] moving to main screen from main_stream_mode_ready"
                ])));
                t.set({
                    hasSynced: true,
                    stream: o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED
                });
                if (o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid] self LID is null when main app unlocked"
                    ]))).sendLogs("self-lid-null-on-refresh");
                }
            }));
            a.BackendEventBus.onSocketStreamDisconnected(function() {
                t.stream = o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED;
            });
        };
        a_prototype.reconnect = function() {
            o("WAWebBackendEventBus").BackendEventBus.triggerReconnectSocket();
        };
        a_prototype.takeover = function() {
            throw r("err")("Takeover called without conflict!");
        };
        a_prototype.clearCredentialsAndStoredData = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(reason, t) {
                o("WAWebBackendApi").frontendFireAndForget("triggerLogoutDiagnosticFromBridge", {
                    reason
                });
                let a = false;
                if (r("WAWebEnvironment").isWindows) {
                    let i;
                    const l = n("cr:17219") == null || (i = n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebSocketModel)) == null ? undefined : i.getClientKeyBridge();
                    if (l != null) {
                        try {
                            yield o("WAPromiseTimeout").promiseTimeout(l.clearClientKey(), 5000);
                        } catch (error) {
                            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "clearCredentials: native logout failed"
                            ]))).catching(r("getErrorSafe")(error)).tags("logout").sendLogs("native-clear-credentials-failed");
                        }
                    }
                }
                if (reason != null && q.includes(reason)) {
                    a = true;
                }
                o("WAWebSocketLogoutUtils").setLogoutDirtyBit();
                const s = z("clear_credentials", reason);
                try {
                    a = yield this.clearCredentials();
                } finally{
                    self.clearTimeout(s);
                }
                if (o("WAWebSocketLogoutUtils").hasDirtyBitSet()) {
                    a = true;
                    const u = o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "clearCredentials: dirty bit is still set"
                    ]))).tags("logout");
                    if (!r("gkx")("26258")) {
                        u.sendLogs("Logout clearCredentials failed");
                    }
                }
                o("WAWebSubscribePushManagerAction").unsubscribePushManager();
                o("WAWebBackendApi").frontendFireAndForget("updatePeriodicBackgroundSyncRegistration", {
                    forceUnregister: true
                });
                o("WAWebSocketLogoutUtils").setLogoutDirtyBit();
                const c = z("destroy_storage", reason);
                try {
                    yield o("WAWebSocketLogoutStorageUtils").destroyStorage();
                } catch (error) {
                    a = true;
                    if (r("gkx")("26258")) {
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "destroyStorage: failed with error"
                        ]))).catching(r("getErrorSafe")(error)).tags("logout");
                    } else {
                        o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "destroyStorage: failed with error"
                        ]))).catching(r("getErrorSafe")(error)).tags("logout").sendLogs("Logout destroyStorage failed");
                    }
                } finally{
                    self.clearTimeout(c);
                }
                o("WAWebABPropsCache").clearABPropConfigs();
                o("WAWebGroupABPropsCache").clearGroupABPropConfigs();
                if (!a) {
                    o("WAWebSocketLogoutUtils").removeLogoutDirtyBit();
                }
                o("WAWebReloadAfterLogout").reloadAfterLogout(a, reason, t);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.logout = function(t) {
            const e = this;
            if (t === undefined) {
                t = o("WAWebLogoutReasonConstants").LogoutReason.UserInitiated;
            }
            o("WAWebCanonicalUtils").setCanonicalReloadPending(false);
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").removeItem("WebEncKeySalt");
            }
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").removeItem("WANoiseInfo");
            }
            o("WAWebInvocationInterface").get().setLogoutState(true).catch((e)=>{
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket model] failed to set logout state"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("socket-model-set-logout-state-failed");
            });
            o("WAWebBackendEventBus").BackendEventBus.triggerStartingLogout();
            if (!r("gkx")("26258")) {
                try {
                    throw r("err")("Non Error - WS2 logout, thrown only for getting logout stack trace");
                } catch (error) {
                    const a = r("getErrorSafe")(error);
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "WS2 logout debug, reason: ",
                        ", stack: \n ",
                        ""
                    ], [
                        "WS2 logout debug, reason: ",
                        ", stack: \\n ",
                        ""
                    ])), t, a.stack).verbose();
                }
            }
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "ws2:user logged out"
            ])));
            let i = (O || (O = n("Promise"))).resolve();
            const l = 0;
            const s = 20;
            const u = Math.min(s, Math.max(l, o("WAWebABProps").getABPropConfigValue("syncd_sentinel_timeout_seconds")));
            i = o("WAPromiseTimeout").promiseTimeout(r("WAWebSentinel")(), u * 1000).catch(()=>o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2: multi-device logout sentinel patch failed"
                ]))));
            const c = 3;
            o("WAPromiseTimeout").promiseTimeout(i.then(()=>o("WAWebSocketLogoutUtils").sendCurrentLogout(t)).catch((()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "ws2: [logout error] sendCurrentLogoutPromise errored"
                    ]))).catching(r("getErrorSafe")(n));
                    yield e.clearCredentialsAndStoredData(t);
                    o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })()), c * 1000, `network request took more than ${c} seconds`).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield e.clearCredentialsAndStoredData(t);
                if (e.state === o("WAWebSocketConstants").SOCKET_STATE.OPENING) {
                    e.trigger("change:state");
                }
                o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
            })).catch((()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "ws2: [logout] sentinel or sendCurrentLogout timed out"
                    ]))).catching(r("getErrorSafe")(n));
                    yield e.clearCredentialsAndStoredData(t);
                    o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })()).finally(()=>{
                o("WAWebInvocationInterface").get().setLogoutState(false).catch((e)=>{
                    o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket model] failed to set logout state"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("socket-model-set-logout-state-failed");
                });
            });
        };
        a_prototype.summary = function() {
            o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "ws:summary --------------------------------"
            ])));
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "ws state           ",
                ""
            ])), this.state);
            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "wd online:         ",
                ""
            ])), String(navigator.onLine));
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "ws socket id:      ",
                ""
            ])), this.socket ? this.socket.id : "n/a");
            if (!r("gkx")("26258")) {
                r("WAWebSyncBootstrap").getCriticalSyncDebugSummary().then((e)=>{
                    o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ""
                    ])), e);
                });
            }
        };
        a_prototype.$SocketImpl$p_1 = function() {
            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                "ws2:state change: ",
                ""
            ])), this.state);
        };
        a_prototype.$SocketImpl$p_2 = function() {
            o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                "ws2:stream change: ",
                ""
            ])), this.stream);
            if (this.stream === o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED) {
                this.unset("resumePromise");
            }
        };
        a_prototype.$SocketImpl$p_3 = function() {
            o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                "[ws2] moving to main screen from onCriticalSyncDone"
            ])));
            this.set({
                hasSynced: true,
                stream: o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED
            });
        };
        a_prototype.openStream = function() {
            const e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            if (e) {
                let t;
                (t = o("WAWebConnModel")).Conn.blockStoreAdds = false;
                t.Conn.id = "1";
                t.Conn.trigger("me_ready");
                t.Conn.meReadyTriggered = true;
                return o("WAWebAddMeContactAction").addMeToContacts(e);
            }
            return (O || (O = n("Promise"))).resolve();
        };
        a_prototype.clearCredentials = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                r("WAWebUserPrefsStore").updatePreservedUserKeys();
                let e = false;
                try {
                    e = yield this.clearState();
                } catch (t) {
                    e = true;
                }
                const t = yield r("WAWebClearCredentials")();
                return e || t;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.clearState = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                    "ws2:clearState"
                ])));
                let e = false;
                this.unset("hasSynced");
                try {
                    yield r("nullthrows")((yield this.clearAppStatesDeferred))();
                } catch (error) {
                    e = true;
                    const t = r("getErrorSafe")(error);
                    if (error instanceof o("WAWebDbErrors").DbOnLogoutAbort) {
                        o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                            "ws2:clearState failed due to DB operations aborted: ",
                            ""
                        ])), t.stack);
                    } else {
                        o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                            "ws2:clearState error"
                        ]))).catching(t).sendLogs("clear_session_app_state");
                    }
                }
                try {
                    yield j();
                } catch (error) {
                    e = true;
                    const n = r("getErrorSafe")(error);
                    if (error instanceof o("WAWebDbErrors").DbOnLogoutAbort) {
                        o("WALogger").WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                            "ws2:clearState failed due to DB operations aborted: ",
                            ""
                        ])), n.stack);
                    } else {
                        o("WALogger").ERROR(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                            "ws2:clearState error"
                        ]))).catching(n).sendLogs("clear_persistent_app_state");
                    }
                }
                return e;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebBaseModel").BaseModel);
    const H = o("WAWebBaseModel").defineModel(V);
    const G = new H;
    function z(e, reason) {
        return self.setTimeout(function() {
            const n = o("WALogger").ERROR(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                "logout cleanup stalled: stage=",
                ", reason=",
                ", elapsed_threshold_ms=",
                ""
            ])), e, reason ?? "unknown", U).tags("logout");
            if (!r("gkx")("26258")) {
                n.sendLogs("logout-cleanup-stalled");
            }
        }, U);
    }
    function j() {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (O || (O = n("Promise"))).allSettled([
                r("WAWebDeleteAllCacheStorage")(),
                o("WAWebMediaStore").LruMediaStore.clear()
            ]);
            e.forEach((e)=>{
                if (e.status === "rejected") {
                    throw e.reason instanceof Error ? e.reason : r("err")(String(e.reason));
                }
            });
        });
        return K.apply(this, arguments);
    }
    l.Socket = G;
}, 98);