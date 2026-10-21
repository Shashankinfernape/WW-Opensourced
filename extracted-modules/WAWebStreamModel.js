__d("WAWebStreamModel", [
    "$InternalEnum",
    "WALogger",
    "WAShiftTimer",
    "WAWebBackendEventBus",
    "WAWebBaseModel",
    "WAWebBuildConstants",
    "WAWebCallCollection",
    "WAWebEnvironment",
    "WAWebLockScreenResolver",
    "WAWebNetworkStatus",
    "WAWebPresenceChatAction",
    "WAWebPresenceCollection",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStreamTypes",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumWebcStreamModeCode",
    "WAWebWamPageLoadReporter",
    "WAWebWebcPageResumeWamEvent",
    "WAWebWebcStreamModeChangeWamEvent",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    const c = n("cr:17219") ?? {};
    const c_getWindowsBridge = c.getWindowsBridge;
    const m = n("$InternalEnum").Mirrored([
        "QR",
        "MAIN",
        "SYNCING",
        "OFFLINE",
        "CONFLICT",
        "PROXYBLOCK",
        "TOS_BLOCK",
        "SMB_TOS_BLOCK"
    ]);
    const p = 18000;
    const _ = 3000;
    const f = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.info = o("WAWebBaseModel").session(o("WAWebStreamTypes").StreamInfo.NORMAL);
            t.mode = o("WAWebBaseModel").session(m.SYNCING);
            t.obscurity = o("WAWebBaseModel").session(o("WAWebStreamTypes").Obscurity.HIDE);
            t.needsUpdate = o("WAWebBaseModel").session();
            t.isHardRefresh = o("WAWebBaseModel").session(false);
            t.lastSyncStart = o("WAWebBaseModel").session(v());
            t.needsManualDownload = o("WAWebBaseModel").session();
            t.couldForce = o("WAWebBaseModel").session();
            t.uiActive = o("WAWebBaseModel").session();
            t.isInConnectedCall = o("WAWebBaseModel").session(false);
            t.available = o("WAWebBaseModel").session(true);
            t.unavailableShiftTimer = o("WAWebBaseModel").session();
            t.unavailableAutoLockTimer = o("WAWebBaseModel").session();
            t.unavailableLogoutTimer = o("WAWebBaseModel").session();
            t.unobscureShiftTimer = o("WAWebBaseModel").session();
            t.resumeCount = o("WAWebBaseModel").session(0);
            t.phoneAuthed = o("WAWebBaseModel").session(false);
            t.hasSynced = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            const t = this;
            e.prototype.initialize.call(this);
            if (!o("WAWebUserPrefsMultiDevice").isRegistered()) {
                this.mode = m.QR;
            }
            if (window.document) {
                this.available = document.hasFocus();
            }
            this.unavailableShiftTimer = new (o("WAShiftTimer")).ShiftTimer(function() {
                return t.markUnavailable();
            });
            this.unobscureShiftTimer = new (o("WAShiftTimer")).ShiftTimer(function() {
                return t.unobscure();
            });
            this.unavailableAutoLockTimer = new (o("WAShiftTimer")).ShiftTimer(function() {
                if (o("WAWebUserPrefsScreenLock").getScreenLockDurationInSeconds() !== 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Stream:autoLockShiftTimer auto lock due to inactivity"
                    ])));
                    o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
                }
            });
            this.listenTo(o("WAWebSocketModel").Socket, "change:state", this.$StreamImpl$p_1);
            this.listenTo(o("WAWebSocketModel").Socket, "change:stream", this.$StreamImpl$p_1);
            this.listenTo(o("WAWebSocketModel").Socket, "change:hasSynced", this.$StreamImpl$p_1);
            this.hasSynced = o("WAWebSocketModel").Socket.hasSynced;
            this.listenTo(r("WAWebNetworkStatus"), "change:online", this.$StreamImpl$p_1);
            this.listenTo(this, "change:available", this.$StreamImpl$p_2);
            this.listenTo(this, "change:phoneAuthed", this.$StreamImpl$p_3);
            this.listenTo(this, "change:info", this.logPageResume);
            this.listenTo(this, "change:info", this.updateWamLog);
            this.listenTo(this, "change:mode", this.logModeChange);
            for (const n of [
                "change:available",
                "change:uiActive"
            ]){
                this.listenTo(this, n, this.updateCouldForce);
            }
            this.listenTo(r("WAWebCallCollection"), "change:activeCall", this.updateCouldForce);
            o("WAWebBackendEventBus").BackendEventBus.onSocketStreamDisconnected(function() {
                o("WAWebPresenceCollection").PresenceCollection.clearAllPresence();
            });
            this.listenTo(r("WAWebCallCollection"), "change:isInConnectedCall", this.$StreamImpl$p_4);
            if (window.document) {
                document.addEventListener("visibilitychange", function() {
                    return t.updateCouldForce();
                });
            }
            this.updateCouldForce();
        };
        t_prototype.delete = function() {};
        t_prototype.markAvailable = function() {
            this.unavailableShiftTimer.cancel();
            this.available = true;
        };
        t_prototype.markUnavailable = function(t) {
            if (t != null && t !== 0) {
                this.unavailableShiftTimer.onOrBefore(t);
            } else {
                this.unavailableShiftTimer.cancel();
                this.available = false;
            }
        };
        t_prototype.$StreamImpl$p_1 = function() {
            const info = C();
            const t = {
                info,
                mode: b(),
                phoneAuthed: o("WAWebSocketModel").Socket.stream !== o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED,
                hasSynced: o("WAWebSocketModel").Socket.hasSynced
            };
            if (info === o("WAWebStreamTypes").StreamInfo.NORMAL) {
                this.unobscureShiftTimer.cancel();
                t.obscurity = o("WAWebStreamTypes").Obscurity.HIDE;
            } else if (info === o("WAWebStreamTypes").StreamInfo.OFFLINE) {
                this.unobscureShiftTimer.cancel();
                t.obscurity = o("WAWebStreamTypes").Obscurity.OBSCURE;
            } else {
                e: {
                    const n = this.obscurity;
                    if (n === o("WAWebStreamTypes").Obscurity.HIDE) {
                        this.unobscureShiftTimer.onOrBefore(p);
                        break e;
                    }
                    if (n === o("WAWebStreamTypes").Obscurity.OBSCURE) {
                        this.unobscureShiftTimer.onOrBefore(_);
                        break e;
                    }
                    if (n === o("WAWebStreamTypes").Obscurity.SHOW) {
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
                }
            }
            this.set(t);
        };
        t_prototype.unobscure = function() {
            this.obscurity = o("WAWebStreamTypes").Obscurity.SHOW;
        };
        t_prototype.$StreamImpl$p_3 = function() {
            if (this.phoneAuthed) {
                if (r("WAWebEnvironment").isWindows) {
                    this.$StreamImpl$p_5();
                } else {
                    this.$StreamImpl$p_6();
                }
            }
        };
        t_prototype.$StreamImpl$p_6 = function() {
            this.sendAvailability(true);
        };
        t_prototype.$StreamImpl$p_5 = function() {
            let e;
            const t = c_getWindowsBridge == null || (e = c_getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebStreamModel)) == null || (e = e.nativeAppStateBridge) == null ? undefined : e.isMinimizedToTray();
            if (t != null) {
                if (t && !this.isInConnectedCall) {
                    o("WAWebPresenceChatAction").sendPresenceUnavailable();
                } else {
                    this.sendAvailability(false);
                }
            } else {
                this.sendAvailability(true);
            }
        };
        t_prototype.$StreamImpl$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const available = this.available;
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Stream:onAvailableUpdate user ",
                    ""
                ])), available ? "available" : "unavailable");
                const t = o("WAWebUserPrefsScreenLock").getScreenLockDurationInSeconds();
                if (!available && t !== 0) {
                    this.unavailableAutoLockTimer.onOrBefore(t * 1000);
                } else {
                    this.unavailableAutoLockTimer.cancel();
                }
                this.sendAvailability(false);
                if (!available) {
                    o("WAWebPresenceCollection").PresenceCollection.clearAllPresence();
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$StreamImpl$p_4 = function() {
            this.isInConnectedCall = r("WAWebEnvironment").isWindows && r("WAWebCallCollection").isInConnectedCall;
            this.sendAvailability(true);
        };
        t_prototype.sendAvailability = function(t) {
            if (t || this.uiActive || this.isInConnectedCall) {
                if (this.available || this.isInConnectedCall) {
                    o("WAWebPresenceChatAction").sendPresenceAvailable();
                } else {
                    o("WAWebPresenceChatAction").sendPresenceUnavailable();
                }
            }
        };
        t_prototype.updateCouldForce = function() {
            this.couldForce = (!this.uiActive || !this.available && document.hidden) && !r("WAWebCallCollection").activeCall;
        };
        t_prototype.logPageResume = function() {
            if (this.info === o("WAWebStreamTypes").StreamInfo.RESUMING) {
                this.resumeCount++;
                new (o("WAWebWebcPageResumeWamEvent")).WebcPageResumeWamEvent({
                    webcResumeCount: this.resumeCount
                }).commit();
            }
        };
        t_prototype.updateWamLog = function() {
            const infoNormal = this.info === o("WAWebStreamTypes").StreamInfo.NORMAL;
            o("WAWebWamPageLoadReporter").streamInfoChange({
                info: this.info,
                infoNormal,
                socketSequence: 1
            });
            if (infoNormal) {
                this.stopListening(this, "change:info", this.updateWamLog);
            }
        };
        t_prototype.logModeChange = function() {
            if (this.mode === m.SYNCING) {
                this.lastSyncStart = v();
            }
            new (o("WAWebWebcStreamModeChangeWamEvent")).WebcStreamModeChangeWamEvent({
                webcStreamMode: g(this.mode)
            }).commit();
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    f.Proxy = "stream";
    function g(mode) {
        switch(mode){
            case m.QR:
                return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.QR;
            case m.MAIN:
                return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.MAIN;
            case m.SYNCING:
                return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.SYNCING;
            case m.OFFLINE:
                return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.OFFLINE;
            case m.CONFLICT:
                return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.CONFLICT;
            case m.PROXYBLOCK:
                return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.PROXYBLOCK;
            case m.TOS_BLOCK:
            case m.SMB_TOS_BLOCK:
                return o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE.TOS_BLOCK;
        }
    }
    const h = o("WAWebBaseModel").defineModel(f);
    const y = new h({
        id: "1"
    });
    function C() {
        const e = false;
        if ((e || r("gkx")("26256")) && !r("WAWebNetworkStatus").online && r("WAWebNetworkStatus").simulatedOfflineConditions) {
            return o("WAWebStreamTypes").StreamInfo.OFFLINE;
        }
        switch(o("WAWebSocketModel").Socket.state){
            case o("WAWebSocketConstants").SOCKET_STATE.OPENING:
                if (r("WAWebNetworkStatus").online) {
                    return o("WAWebStreamTypes").StreamInfo.OPENING;
                }
                return o("WAWebStreamTypes").StreamInfo.OFFLINE;
            case o("WAWebSocketConstants").SOCKET_STATE.PAIRING:
                if (o("WAWebSocketModel").Socket.hasSynced) {
                    return o("WAWebStreamTypes").StreamInfo.RESUMING;
                }
                return o("WAWebStreamTypes").StreamInfo.PAIRING;
            case o("WAWebSocketConstants").SOCKET_STATE.CONNECTED:
                if (o("WAWebSocketModel").Socket.stream !== o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED && !o("WAWebSocketModel").Socket.hasSynced) {
                    return o("WAWebStreamTypes").StreamInfo.SYNCING;
                }
                return o("WAWebStreamTypes").StreamInfo.NORMAL;
            case o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED:
            case o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK:
            default:
                return o("WAWebStreamTypes").StreamInfo.NORMAL;
        }
    }
    function b() {
        let e = false;
        e = o("WAWebUserPrefsMultiDevice").isRegistered();
        if (!e && o("WAWebSocketModel").Socket.state !== o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK) {
            return m.QR;
        }
        const hasSynced = o("WAWebSocketModel").Socket.hasSynced;
        if (hasSynced && e && o("WAWebBuildConstants").WINDOWS_OFFLINE) {
            return m.MAIN;
        }
        switch(o("WAWebSocketModel").Socket.state){
            case o("WAWebSocketConstants").SOCKET_STATE.PROXYBLOCK:
                return m.PROXYBLOCK;
            case o("WAWebSocketConstants").SOCKET_STATE.CONFLICT:
                return m.CONFLICT;
            case o("WAWebSocketConstants").SOCKET_STATE.TOS_BLOCK:
                return m.TOS_BLOCK;
            case o("WAWebSocketConstants").SOCKET_STATE.SMB_TOS_BLOCK:
                return m.SMB_TOS_BLOCK;
            case o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED:
                return m.SYNCING;
            case o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE:
            case o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED:
                return m.QR;
            case o("WAWebSocketConstants").SOCKET_STATE.OPENING:
                if (!r("WAWebNetworkStatus").online && !o("WAWebSocketModel").Socket.hasSynced) {
                    return m.OFFLINE;
                }
            default:
                if (hasSynced || o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED) {
                    return m.MAIN;
                }
                return m.SYNCING;
        }
    }
    function v() {
        return Math.floor(window.performance.now());
    }
    l.StreamInfo = o("WAWebStreamTypes").StreamInfo;
    l.StreamMode = m;
    l.Stream = y;
}, 98);