__d("WAWebApp.react", [
    "fbt",
    "invariant",
    "MetaConfig",
    "Promise",
    "WAAbortError",
    "WAComms",
    "WALogger",
    "WAMemoizeOne",
    "WAPromiseTimeout",
    "WAShiftTimer",
    "WAWeb-moment",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebAlarm",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebApp.stylex",
    "WAWebAppMutex",
    "WAWebAppRootInteractionContext.react",
    "WAWebAppScreen",
    "WAWebAppScreenTypes",
    "WAWebAppUI",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
    "WAWebBrokerGlobalAppState",
    "WAWebCacheStorageOpenFailedPopupLoadable",
    "WAWebCallLinkAutoJoinConsent",
    "WAWebCallsOnlyGating",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebCmd",
    "WAWebColdLaunchDeeplink",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebCrashlog",
    "WAWebDeepLinkClickWamEvent",
    "WAWebDesktopSharerContext.react",
    "WAWebEmojiAssetLoaderCompletionTracker",
    "WAWebEnvironment",
    "WAWebErrorBoundary.react",
    "WAWebErrorBoundaryPopup.react",
    "WAWebEventsWaitForEvent",
    "WAWebEventsWaitForMain",
    "WAWebExternalLink.react",
    "WAWebFullScreenEntryPointContext",
    "WAWebGpcUoomAPI",
    "WAWebHardRefreshModalLoadable",
    "WAWebInitialStartupSplash",
    "WAWebKeyboardContext",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebLaunchSocket",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebLoggerImpl",
    "WAWebLogoutReasonConstants",
    "WAWebMediaWorkerProxy",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNoopGC",
    "WAWebPageLoadLogging",
    "WAWebPathfinder.react",
    "WAWebPathfinderLogger",
    "WAWebPopover.react",
    "WAWebPreLoginApiCmds",
    "WAWebPrivacyModeContext",
    "WAWebPwaEventListeners",
    "WAWebPwaManifest",
    "WAWebRobotoVariableFontLoadable",
    "WAWebSWBusInit",
    "WAWebSocketModel",
    "WAWebStartBackendWorker",
    "WAWebStorageCmd",
    "WAWebStorageQuotaExceededPopupLoadable",
    "WAWebStreamModel",
    "WAWebStylesEnv",
    "WAWebSystemTheme",
    "WAWebThemeContext",
    "WAWebUA",
    "WAWebURLUtils",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUnexpectedFatalErrorModal.react",
    "WAWebUpdater",
    "WAWebUpdaterUpdatePoll",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsScreenLock",
    "WAWebUserPrefsStore",
    "WAWebVoipRevalidateOngoingCallsOnResume",
    "WAWebWAWCStorage",
    "WAWebWamAppLaunchReporter",
    "WAWebWamFingerprintReporter",
    "WAWebWamOfflineResumeReporter",
    "WAWebWamPageLoadReporter",
    "WAWebWindowSizeProvider.react",
    "WAWebWindowsHybridBridgeInitiator",
    "WDSContextualLayer.react",
    "WDSThemes",
    "asyncToGeneratorRuntime",
    "cr:11133",
    "cr:16043",
    "cr:17219",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "stylex"
], function(t, n, r, o, a, i, l, s, u) {
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
    const M = N || (N = o("react"));
    const w = N;
    const { Component: A, createRef: F } = w;
    const O = r("requireDeferred")("WAWebEmojiAssetLoader").__setRef("WAWebApp.react");
    const B = r("requireDeferred")("WAWebEmojiAssetLoaderConfig").__setRef("WAWebApp.react");
    const W = r("requireDeferred")("WAWebMainWrapper").__setRef("WAWebApp.react");
    const q = n("cr:17219") ?? {};
    const U = q.getWindowsBridge;
    n("WAWebSWBusInit");
    const V = n("cr:16043") != null ? n("cr:16043") : {};
    const H = V.EntryPointContainer;
    const G = {};
    if ("gc" in window) {
        o("WAWebNoopGC").installGCNoopWrapper();
        o("WAWebNoopGC").enableGCNoop();
    }
    const z = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.MutexBlockStrategy) === 1;
    const j = [
        o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure,
        o("WAWebLogoutReasonConstants").LogoutReason.SyncdErrorDuringBootstrap,
        o("WAWebLogoutReasonConstants").LogoutReason.SyncdTimeout,
        o("WAWebLogoutReasonConstants").LogoutReason.HistorySyncTimeout,
        o("WAWebLogoutReasonConstants").LogoutReason.InvalidAdvStatus,
        o("WAWebLogoutReasonConstants").LogoutReason.AccountSyncError
    ];
    let K;
    function Q() {
        return K != null && K.hasPendingActions();
    }
    function X({ cmdAndData: t, isExternal: n, sessionId: r }) {
        const { data: a, resultType: i } = t;
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "main:execApiCmd:",
            ", external=",
            ""
        ])), i, n);
        if (K == null) {
            u(0, 56382);
        }
        if (i === "ADVERTISE" || i === "MANAGE_ADS" || i === "OPEN_CATALOG") {
            return false;
        }
        return K.execApiCmd({
            cmdData: t,
            isExternal: n,
            sessionId: r
        });
    }
    function Y(e) {
        for(let t = e; t;){
            const r = t instanceof HTMLElement && t.dataset?.nohandle;
            if (r) {
                return false;
            }
            t = t.parentElement;
        }
        return true;
    }
    function J() {
        o("WAWebSocketModel").Socket.summary();
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "Focus at time of upload:"
        ])));
        try {
            o("WAWebUim").UIM.pprint(true);
        } catch (e) {
            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "UIM Print Failed!"
            ])));
        }
        return {
            platform: o("WAWebConnModel").Conn.platform,
            ref: o("WAWebConnModel").Conn.ref
        };
    }
    const Z = ((e)=>{
        function t(...i_1) {
            let t;
            t = e.call(this, ...i_1) || this;
            t.contextMenuRef = F();
            t.animate = true;
            t.$1 = false;
            t.$2 = function(e) {
                if (!t.$1) {
                    t.$1 = true;
                    o("WAWebInitialStartupSplash").removeInitialStartupSplash({
                        animate: e
                    });
                }
            };
            t.$3 = function() {
                if (!((n("cr:11133") == null ? void 0 : n("cr:11133")()) !== true || t.$1)) {
                    const e = o("WAWebAppScreen").getScreen(t.state);
                    if (!(e === o("WAWebAppScreenTypes").AppScreen.STARTUP || e === o("WAWebAppScreenTypes").AppScreen.SYNCING)) {
                        const r = e === o("WAWebAppScreenTypes").AppScreen.MAIN;
                        t.$2(r);
                    }
                }
            };
            t.$4 = null;
            t.state = {
                mode: o("WAWebStreamModel").Stream.mode,
                anotherSession: false,
                takingOver: false,
                apiCmd: void 0,
                locale: r("WAWebL10N").getLocale(),
                mainLoaded: false,
                theme: o("WAWebThemeContext").getTheme(),
                systemThemeMode: o("WAWebUserPrefsGeneral").getSystemThemeMode(),
                isKeyboardUser: false,
                initialLoadState: {
                    initialLoadReady: false
                },
                startLogout: false,
                stayInSync: !o("WAWebSocketModel").Socket.hasSynced,
                screenLocked: false,
                temporaryBan: {
                    banned: false
                }
            };
            t.$14 = function(e) {
                if (t.state.isKeyboardUser !== e) {
                    t.setState({
                        isKeyboardUser: e
                    });
                }
            };
            t.$20 = [];
            t.$22 = {
                up: function() {
                    return t.$14(true);
                },
                down: function() {
                    return t.$14(true);
                },
                left: function() {
                    return t.$14(true);
                },
                right: function() {
                    return t.$14(true);
                },
                home: function() {
                    return t.$14(true);
                },
                end: function() {
                    return t.$14(true);
                },
                "command+up": function() {
                    return t.$14(true);
                },
                "command+down": function() {
                    return t.$14(true);
                },
                pageUp: function() {
                    return t.$14(true);
                },
                pageDown: function() {
                    return t.$14(true);
                },
                tab: function() {
                    return t.$14(true);
                },
                "shift+tab": function() {
                    return t.$14(true);
                },
                "shift+?": function() {
                    return t.$14(true);
                }
            };
            t.$6 = function(e) {
                const n = o("WAWebPwaEventListeners").resolvePwaLaunchCallLink(e, t.$4);
                if (n.type === "suppress-cold-launch-duplicate") {
                    t.$4 = null;
                    return;
                }
                if (n.type === "exec") {
                    t.$10(n.cmd);
                }
            };
            t.$8 = new (o("WAShiftTimer")).ShiftTimer(function(e) {
                if (e !== t.state.mode) {
                    t.setState({
                        mode: e
                    });
                }
            });
            t.$9 = function() {
                const n = o("WAWebStreamModel").Stream.mode;
                o("WAWebWamAppLaunchReporter").getAppLaunchReporter()?.initializeAppLaunchWamEvent(t.state.mode === o("WAWebStreamModel").StreamMode.SYNCING);
                if (t.state.mode === o("WAWebStreamModel").StreamMode.MAIN) {
                    t.$8.forceRunNow(n);
                    return;
                }
                t.$8.onOrBefore(0, n);
            };
            t.$25 = function(e) {
                if (e.detail !== 0) {
                    t.$14(false);
                }
                o("WAWebCmd").Cmd.windowMouseDown(e);
            };
            t.$26 = function(e) {
                o("WAWebCmd").Cmd.windowClick(e);
            };
            t.$13 = function(e) {
                const n = e.target;
                if (n && n.nodeName === "A") {
                    const a = n.getAttribute("href");
                    if (!r("isStringNullOrEmpty")(a) && Y(n)) {
                        const i = o("WAWebApiParse").parseAPICmd(a);
                        if (i.resultType === "BRAZIL_ADD_PIX_KEY") {
                            e.preventDefault();
                            return;
                        }
                        if (!(i.resultType === "INVALID" || i.resultType === "ADVERTISE" || i.resultType === "MANAGE_ADS" || i.resultType === "PAYMENT_LINK" || i.resultType === "OPEN_CATALOG" || i.resultType === "CALL_ACTIVE")) {
                            i.resultType;
                            const l = t.$24();
                            if (t.$23() && X({
                                cmdAndData: i,
                                isExternal: false,
                                sessionId: l
                            })) {
                                t.$27(i, l);
                                e.preventDefault();
                            }
                        }
                    }
                }
            };
            t.$27 = function(e, t) {
                if (e.resultType === o("WAWebApi").APICmd.GROUP_INVITE) {
                    new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent({
                        deepLinkHasPhoneNumber: false,
                        deepLinkHasText: true,
                        deepLinkRequirePinEntry: false
                    }).commit();
                } else if (e.resultType === o("WAWebApi").APICmd.MSG_SEND) {
                    if (!r("isStringNullOrEmpty")(e.data.username)) {
                        return;
                    }
                    const n = e.data.phone != null;
                    const a = e.data.text != null;
                    new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent({
                        deepLinkHasPhoneNumber: n,
                        deepLinkHasText: a,
                        deepLinkSessionId: t,
                        deepLinkRequirePinEntry: false
                    }).commit();
                } else {
                    if (e.resultType === o("WAWebApi").APICmd.CATALOG) {
                        new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent({
                            deepLinkHasPhoneNumber: true,
                            deepLinkHasText: false,
                            deepLinkRequirePinEntry: false
                        }).commit();
                    } else if (e.resultType === o("WAWebApi").APICmd.PRODUCT) {
                        new (o("WAWebDeepLinkClickWamEvent")).DeepLinkClickWamEvent({
                            deepLinkHasPhoneNumber: true,
                            deepLinkHasText: false,
                            deepLinkRequirePinEntry: false
                        }).commit();
                    }
                }
            };
            t.$19 = function(e) {
                if (t.state.theme !== e) {
                    const n = t.$7(e);
                    const a = function(t) {
                        o("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(t, o("WAWebAssetLoader").LOAD_PRIORITY.THEME_ASSET_LOAD, false).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((e)=>{
                            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[WAWebApp] setTheme asset load failed id=",
                                " theme=",
                                ""
                            ])), t.id, n).catching(r("getErrorSafe")(e)).sendLogs("asset-loader-theme-load-failed");
                        });
                    };
                    for (const i of o("WAWebThemeContext").THEME_ASSETS[n]){
                        a(i);
                    }
                    o("WAWebThemeContext").setTheme(e);
                    t.setState({
                        theme: e
                    });
                }
            };
            t.$7 = function(e) {
                switch(e){
                    case "light":
                        if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                            return "smbLight";
                        }
                        return "lightRefreshed";
                    case "dark":
                        if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                            return "smbDark";
                        }
                        return "darkRefreshed";
                    default:
                        return e;
                }
            };
            t.$28 = function(e) {
                o("WAWebUserPrefsGeneral").setSystemThemeMode(e);
                t.setState({
                    systemThemeMode: e
                });
            };
            t.$29 = function() {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] mdReloadPageOnTakeOver"
                ])));
                window.location.reload();
            };
            t.$30 = function() {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "DebouncedLoadingScreen: Ready for main screen"
                ])));
                o("WAWebPageLoadLogging").addPageLoadQplPoint("loading_screen_ready");
                t.setState({
                    stayInSync: false
                });
            };
            t.$31 = r("WAMemoizeOne")(function({ systemThemeMode: n, theme: r }) {
                return {
                    theme: r,
                    setTheme: t.$19,
                    systemThemeMode: n,
                    setSystemThemeMode: t.$28
                };
            });
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const a = t.prototype;
        a.componentDidMount = function() {
            const e = this;
            o("WAWebCrashlog").registerCrashlogUploadInformationalLoggingFunction(J);
            o("WAWebPwaEventListeners").registerPwaDisplayModeListener();
            o("WAWebPwaEventListeners").registerPwaInstallListener();
            this.$5();
            o("WAWebPwaEventListeners").registerPwaLaunchQueueConsumer(this.$6);
            o("WAWebPwaManifest").updatePwaManifestOnMacOS();
            o("WAWebABProps").getABPropConfigValue("wa_web_pre_chat_device_id_test");
            r("WAWebAppMutex").setShouldLaunchSocket(!z);
            if (z) {
                o("WAWebLaunchSocket").launchSocket(r("WAWebAppMutex").waitForCompletion());
            }
            const t = this.state.theme;
            o("WAWebThemeContext").applyThemeToUI(t);
            oe().then((n)=>{
                o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(n);
                const r = e.$7(t);
                o("WAWebAssetLoaderSingleton").AssetLoader.loadInitialAssets(o("WAWebThemeContext").THEME_ASSETS[r]);
            });
            ne().then(()=>{
                if (e.state.anotherSession) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[md takeover] session detected, abort main load"
                    ])));
                    return;
                }
                o("WAWebEventsWaitForMain").resolveMainLoaded();
                e.setState({
                    mainLoaded: true
                });
            }).then(()=>{
                if (o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
                    return null;
                }
                return (P || (P = n("Promise"))).all([
                    O.load(),
                    B.load(),
                    oe()
                ]);
            }).then((e)=>{
                if (e != null) {
                    const t = e[0];
                    const n = e[1];
                    const r = e[2];
                    o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(r);
                    o("WAWebAssetLoaderSingleton").AssetLoader.initEmojiAsset(t.emojiAssetMapCreator(n()));
                    o("WAWebEmojiAssetLoaderCompletionTracker").emojiCompletionTracker.resetPreloadState();
                    o("WAWebEmojiAssetLoaderCompletionTracker").emojiCompletionTracker.beginPreloadFallback();
                }
            });
            const a = this.props.listeners;
            a.add(o("WAWebCmd").Cmd, "initial_load_ready_from_bridge", function() {
                e.setState({
                    initialLoadState: {
                        initialHistorySyncComplete: o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete(),
                        initialLoadReady: true
                    }
                });
                o("WAWebWamFingerprintReporter").logFingerprintToWam();
            });
            a.add(o("WAWebStorageCmd").StorageCmd, "storage_not_enough_space", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(yield o("WAWebModalManager").ModalManager.existsAsync())) {
                    o("WAWebModalManager").ModalManager.open(M.jsx(o("WAWebStorageQuotaExceededPopupLoadable").StorageQuotaExceededPopupLoadable, {}), {
                        blockClose: true
                    });
                }
            }));
            a.add(o("WAWebStorageCmd").StorageCmd, "cache_storage_open_failed", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(yield o("WAWebModalManager").ModalManager.existsAsync())) {
                    o("WAWebModalManager").ModalManager.open(M.jsx(o("WAWebCacheStorageOpenFailedPopupLoadable").CacheStorageOpenFailedPopupLoadable, {}), {
                        blockClose: true
                    });
                }
            }));
            a.add(o("WAWebCmd").Cmd, "account_temporarily_banned_from_bridge", function(t) {
                let n;
                if (!(!((n = e.state.temporaryBan) != null && n.banned) && !(t != null && t.banned) && r("MetaConfig")._("351"))) {
                    e.setState({
                        temporaryBan: t
                    });
                }
            });
            o("WAWebVoipRevalidateOngoingCallsOnResume").initRevalidateOngoingCallsOnResume();
            a.add(o("WAWebCmd").Cmd, "offline_delivery_end_from_bridge", function() {
                o("WAWebMediaWorkerProxy").prewarmMediaWasmWorker("mp4RepairMux");
                o("WAWebGpcUoomAPI").checkAndTriggerUOOMMutation();
            });
            a.add(o("WAWebCmd").Cmd, "service_unavailable_503_from_bridge", function() {
                e.setState({
                    serviceUnavailable: true
                });
            });
            a.add(o("WAWebCmd").Cmd, "starting_logout_from_bridge", function() {
                e.setState({
                    startLogout: true
                });
            });
            a.add(o("WAWebCmd").Cmd, "unexpected_logout_modal_from_bridge", (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (!(yield o("WAWebModalManager").ModalManager.existsAsync())) {
                        if (e == null || !j.includes(e)) {
                            o("WAWebSocketModel").Socket.logout(e);
                            return;
                        }
                        const Component = r("WAWebUnexpectedFatalErrorModal.react");
                        o("WAWebModalManager").ModalManager.open(<Component reason={e}>{s._("You were logged out unexpectedly. Please report this issue.")}</Component>, {
                            blockClose: true
                        });
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineStartT();
            a.add(window, "beforeunload", function() {
                if (!(o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab != null && o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab())) {
                    r("WAWebAppMutex").unloadMutex();
                }
            });
            a.add(window, "unload", function() {
                if (!(o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab != null && o("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab())) {
                    r("WAWebAppMutex").unloadMutex();
                }
            });
            a.add(window, "storage", function(t) {
                const n = r("WAWebAppMutex").storagePong(t);
                if (n) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[md takeover] tab taken over. stopping comms"
                    ])));
                    if (o("WAComms").getComms()) {
                        o("WAComms").closeSocketAndPreventRetry();
                    }
                    o("WAWebStartBackendWorker").terminateBackendWorker();
                    o("WAWebLoggerImpl").Logger.onTakeOver();
                    e.setState({
                        takingOver: false,
                        anotherSession: true
                    });
                    e.$8.cancel();
                }
            });
            a.add(o("WAWebStreamModel").Stream, "change:mode", this.$9);
            if ((n("cr:11133") == null ? void 0 : n("cr:11133")()) === true) {
                a.add(o("WAWebSocketModel").Socket, "change:hasSynced", function() {
                    if (o("WAWebSocketModel").Socket.hasSynced === true && e.state.apiCmd != null) {
                        e.$10(e.state.apiCmd);
                    }
                });
            }
            a.add(o("WAWebCmd").Cmd, "open_lock_screen_modal", function() {
                e.setState({
                    screenLocked: true
                });
            });
            a.add(o("WAWebCmd").Cmd, "correct_passcode_lock_screen", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                e.setState({
                    screenLocked: false,
                    stayInSync: false
                });
            }));
            if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled() && o("WAWebUserPrefsInfoStore").waNoiseInfo.cachedPasscodeDerivedKey == null) {
                this.setState({
                    screenLocked: true
                });
            }
            if (r("WAWebURLUtils").canMuckHistory()) {
                const i = o("WAWebApiParse").parseAPICmd(window.location.href);
                o("WAWebCallLinkAutoJoinConsent").reportAutoJoinPendingAtStartup();
                if (i.resultType !== o("WAWebApi").APICmd.CALL_LINK) {
                    o("WAWebCallLinkAutoJoinConsent").dropAutoJoinConsentAtLaunch();
                }
                if (i.resultType !== o("WAWebApi").APICmd.INVALID && i.resultType !== o("WAWebApi").APICmd.APP_OPEN) {
                    o("WAWebColdLaunchDeeplink").markLaunchedFromDeeplink();
                }
                if (i.resultType !== o("WAWebApi").APICmd.INVALID && o("WAWebPreLoginApiCmds").PRE_LOGIN_API_CMDS.includes(i.resultType)) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "doing maybeExecApiCmd (pre-login)"
                    ])));
                    const u = i.data?.url;
                    this.$10(i);
                    window.history.replaceState({}, "", u ?? "/");
                } else {
                    o("WAWebABPropsCache").waitForABPropConfigsReady().then(()=>{
                        if (i.resultType !== o("WAWebApi").APICmd.INVALID && i.resultType !== o("WAWebApi").APICmd.ADVERTISE && i.resultType !== o("WAWebApi").APICmd.MANAGE_ADS && i.resultType !== o("WAWebApi").APICmd.MESSAGE_YOURSELF && i.resultType !== o("WAWebApi").APICmd.BIZ_AGENTS_ONBOARDING && i.resultType !== o("WAWebApi").APICmd.BIZ_BROADCAST_AUDIENCE_MODAL && i.resultType !== o("WAWebApi").APICmd.EDIT_PROFILE_PICTURE && i.resultType !== o("WAWebApi").APICmd.SET_ABOUT && i.resultType !== o("WAWebApi").APICmd.STATUS_POST && i.resultType !== o("WAWebApi").APICmd.PAYMENT_LINK && i.resultType !== o("WAWebApi").APICmd.OPEN_CATALOG && i.resultType !== o("WAWebApi").APICmd.CATALOG_LINKING_CHAT_PSA && i.resultType !== o("WAWebApi").APICmd.CTWA_ADS_DATA_SHARING && i.resultType !== o("WAWebApi").APICmd.NEW_CHAT && i.resultType !== o("WAWebApi").APICmd.NEW_CALL && i.resultType !== o("WAWebApi").APICmd.CHAT_OPEN && i.resultType !== o("WAWebApi").APICmd.CALL_ACTIVE && i.resultType !== o("WAWebApi").APICmd.APP_OPEN && i.resultType !== o("WAWebApi").APICmd.AVATAR_STICKERPACK) {
                            const n = i.data.url;
                            if (i.data?.url != null) {
                                delete i.data.url;
                            }
                            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                "doing maybeExecApiCmd (post-abprop-init)"
                            ])));
                            e.$10(i);
                            window.history.replaceState({}, "", n ?? "/");
                        }
                    });
                }
            }
            a.add(r("WAWebL10N"), "locale_change", function() {
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[app] componentDidMount:rerenderUI locale change"
                ])));
                o("WAWebClock").Clock.initIs24HourBasedOnLocale();
                e.animate = false;
                e.setState({
                    locale: `${r("WAWebL10N").getLocale()}#${r("WAWeb-moment").locale()}`
                });
            });
            this.$11();
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "[app] componentDidMount:visibilityState: ",
                ""
            ])), document.visibilityState);
            if (document.prerendering === true) {
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[app]  prerendering: waiting for page to activate"
                ])));
                r("WAWebEventsWaitForEvent")(document, "prerenderingchange").catch(()=>{
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[app] prerendering: prerenderingchange err"
                    ])));
                }).finally(()=>{
                    o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[app]  prerendering: page is active"
                    ])));
                    e.$12(0);
                });
            } else if (document.visibilityState !== "visible") {
                o("WAPromiseTimeout").promiseTimeout(r("WAWebEventsWaitForEvent")(document, "visibilitychange"), 5000).then(()=>e.$12(0)).catch(()=>e.$12(0));
            } else {
                this.$12(0);
            }
            this.props.listeners.add(window, "click", this.$13, {
                capture: true
            });
            this.props.listeners.add(window, "blur", function() {
                e.$14(false);
            });
            o("WAWebUpdaterUpdatePoll").updatePoll.poll(o("WAWebUpdaterUpdatePoll").checkForUpdates);
            this.$15();
            this.$16();
            this.$17();
            this.$18();
            document.createElement = ((e)=>function(t, n = {}) {
                    if (t.toLowerCase() === "iframe") {
                        o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                            "[iframe] added sandbox attrs for security"
                        ])));
                        const r = e(t, n);
                        r.sandbox = "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads";
                        if (o("WAWebUA").UA.hasCredentiallessIframeSupport) {
                            o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                                "[iframe] added credentialless attr"
                            ])));
                            r.credentialless = true;
                        }
                        return r;
                    }
                    return e(t, n);
                })(document.createElement.bind(document));
            this.props.listeners.add(r("WAWebSystemTheme"), "system_theme_change", function(t) {
                if (e.state.systemThemeMode) {
                    e.$19(t);
                }
            });
            a.add(o("WAWebStreamModel").Stream, "change:isHardRefresh", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!r("WAWebEnvironment").isWindows && o("WAWebStreamModel").Stream.isHardRefresh && o("WAWebAppScreen").getScreen(e.state) === o("WAWebAppScreenTypes").AppScreen.MAIN && !(yield o("WAWebModalManager").ModalManager.existsAsync())) {
                    o("WAWebModalManager").ModalManager.open(M.jsx(o("WAWebHardRefreshModalLoadable").HardRefreshModalLoadable, {}));
                }
            }));
            if ((n("cr:11133") == null ? void 0 : n("cr:11133")()) === true) {
                this.$3();
            } else {
                const c = document.getElementById("wa_web_initial_startup");
                if (c != null && c.parentNode) {
                    c.parentNode.removeChild(c);
                }
            }
        };
        a.$16 = function() {
            if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                document.body?.classList.add("smb-colors");
            }
        };
        a.$21 = function() {
            if (this.state.systemThemeMode === true) {
                if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                    return o("WDSThemes").WDSSMBSystemTheme;
                }
                return o("WDSThemes").WDSSystemTheme;
            }
            if (this.state.theme === "dark") {
                if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                    return o("WDSThemes").WDSSMBDarkTheme;
                }
                return o("WDSThemes").WDSDarkTheme;
            }
            if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                return o("WDSThemes").WDSSMBLightTheme;
            }
            return o("WDSThemes").WDSLightTheme;
        };
        a.$17 = function() {
            const e = document.documentElement;
            if (e != null) {
                const t = this.$21();
                const n = ($ || ($ = r("stylex")))(t).split(" ").filter(Boolean);
                if (this.$20.length > 0) {
                    e.classList.remove(...this.$20);
                }
                if (n.length > 0) {
                    e.classList.add(...n);
                }
                this.$20 = n;
            }
        };
        a.$18 = function() {
            o("WAWebRobotoVariableFontLoadable").applyRobotoFont();
        };
        a.componentDidUpdate = function(t, n) {
            this.$3();
            if (n.anotherSession === true && this.state.anotherSession === false) {
                r("WAWebWAWCStorage").openDB().catch((e)=>{
                    o("WALogger").WARN(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to open indexeddb: ",
                        ""
                    ])), String(e));
                });
            } else if (n.anotherSession === false && this.state.anotherSession === true) {
                r("WAWebWAWCStorage").idb().then((e)=>{
                    r("WAWebBrokerGlobalAppState").takeOver = true;
                    e.close();
                    o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[storage] closed due to take over"
                    ])));
                }).catch(r("WAWebNoop"));
            }
            this.$10(this.state.apiCmd);
            if (this.state.mode !== o("WAWebStreamModel").StreamMode.MAIN) {
                this.animate = true;
            }
            this.$17();
            this.$15();
        };
        a.componentWillUnmount = function() {
            this.$8.cancel();
        };
        a.$12 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
                const n = this;
                if (t && o("WAWebUpdater").Updater.shouldForceUpdateOnTakeOver()) {
                    o("WAWebUpdater").Updater.restart();
                }
                const a = t ? r("WAWebAppMutex").takeoverLocal(e) : r("WAWebAppMutex").init(e);
                const i = (yield a.catch((e)=>{
                    n.setState({
                        takingOver: true
                    });
                    return n.$12(e, true);
                })) === true;
                o("WAWebLoggerImpl").Logger.isTakeOver = o("WAWebLoggerImpl").Logger.isTakeOver || i;
                this.setState(function(e) {
                    return {
                        takingOver: false,
                        anotherSession: e.anotherSession || i
                    };
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$10 = function(t) {
            if (t && !(t.resultType === "ADVERTISE" || t.resultType === "MANAGE_ADS" || t.resultType === "OPEN_CATALOG")) {
                t.resultType;
                if (this.$23()) {
                    const e = this.$24();
                    X({
                        cmdAndData: t,
                        isExternal: true,
                        sessionId: e
                    });
                    if (this.state.apiCmd != null) {
                        this.setState({
                            apiCmd: null
                        });
                    }
                    return;
                }
                if (t !== this.state.apiCmd) {
                    this.setState({
                        apiCmd: t
                    });
                }
            }
        };
        a.$23 = function() {
            return K != null && o("WAWebAppScreen").getScreen(this.state) === o("WAWebAppScreenTypes").AppScreen.MAIN && ((n("cr:11133") == null ? void 0 : n("cr:11133")()) !== true || o("WAWebSocketModel").Socket.hasSynced === true);
        };
        a.$5 = function() {
            if (r("WAWebURLUtils").canMuckHistory()) {
                this.$4 = window.location.href;
            }
        };
        a.$15 = function() {
            if (this.state.mode !== o("WAWebStreamModel").StreamMode.SYNCING) {
                o("WAWebWamPageLoadReporter").logFirstRenderMountTimeOnce();
            }
        };
        a.$11 = function() {
            const e = this;
            r("WAWebAlarm").setLocalTimeout(function() {
                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[app] registerYesterdayTimer:rerenderUI relative timestamps"
                ])));
                o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "Local Clock: ",
                    ", Skew: ",
                    ""
                ])), Date.now(), o("WAWebClock").Clock.getSkew());
                o("WAWebCmd").Cmd.midnight();
                e.$11();
            }, r("WAWeb-moment")().endOf("day").valueOf());
        };
        a.$24 = function() {
            return Math.floor(2147483648 * Math.random()).toString();
        };
        a.render = function() {
            let e;
            const t = this.props.fullScreenEntryPoint;
            const n = o("WAWebAppScreen").getScreen(this.state);
            if (n === o("WAWebAppScreenTypes").AppScreen.MAIN && t != null && H != null) {
                return <H entryPointReference={t} props={G}/>;
            }
            const a = U == null || (e = U(r("WAWebWindowsHybridBridgeInitiator").WAWebApp)) == null ? void 0 : e.systemIntegrationsBridge;
            if (a != null) {
                if (a.updateCurrentWebAppScreen != null) {
                    a.updateCurrentWebAppScreen(n);
                }
            }
            o("WAWebWamPageLoadReporter").maybeLogInitialScreenRenderStart(n);
            const i = this.state.isKeyboardUser;
            const l = o("WAWebAppUI").getAppUI({
                Main: K,
                state: this.state,
                screen: n,
                contextMenuRef: this.contextMenuRef,
                animate: this.animate,
                handleReadyForMainScreen: this.$30,
                mdReloadPageOnTakeOver: this.$29
            });
            const { appScreenUI: s, requiresBackendCheck: u } = l;
            const c = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
                "app-wrapper-web": true,
                "safari-fix": o("WAWebStylesEnv").hasSafariFix,
                "os-mac": o("WAWebStylesEnv").isOSMac,
                "os-win": o("WAWebStylesEnv").isOSWin,
                "keyboard-user": i
            });
            if (u && K != null) {
                K.notificationBackend.shutdownAsNeeded();
            }
            const d = n === o("WAWebAppScreenTypes").AppScreen.STARTUP || n === o("WAWebAppScreenTypes").AppScreen.SYNCING;
            const m = d ? "loading-screen" : this.state.locale;
            const Component = o("WDSContextualLayer.react").WDSContextualLayer;
            const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
            const Component_2 = o("WAWebUimUie.react").UIE;
            const Component_3 = o("WAWebErrorBoundary.react").ErrorBoundary;
            const Component_4 = o("WAWebPrivacyModeContext").WAWebPrivacyModeProvider;
            const Component_5 = o("WAWebDesktopSharerContext.react").WAWebDesktopSharerProviderGate;
            const Component_6 = r("WAWebWindowSizeProvider.react");
            const Component_7 = r("WAWebKeyboardContext").Provider;
            const Component_8 = o("WAWebAppRootInteractionContext.react").WAWebAppRootInteractionContextProvider;
            const Component_9 = o("WAWebThemeContext").ThemeContext.Provider;
            return <Component_9 value={this.$31({
                theme: this.state.theme,
                systemThemeMode: this.state.systemThemeMode
            })}><Component_8>{o("WAWebPathfinderLogger").isPathfinderLoggingEnabled() ? M.jsx(r("WAWebPathfinder.react"), {}) : null}<Component_7 value={{
                isKeyboardUser: i,
                setIsKeyboardUser: this.$14
            }}><Component_6><Component_5><Component_4><Component_3 name="app-wrapper" type="fatal" fallback={o("WAWebErrorBoundaryPopup.react").errorBoundaryPopupFallback} sendLogs><Component_2 displayName="App" uimState={o("WAWebUim").UIMState.INACTIVE}><Component_1 key={m} handlers={this.$22} className={c} xstyle={o("WAWebApp.stylex").styles.wrapper} tabIndex={null} onMouseDownCapture={this.$25} onClickCapture={this.$26}><>{M.jsx(o("WAWebPopover.react").PopoverPortalBucket, {})}<Component>{s.map(({ errorBoundaryName: t, ui: n })=>{
                const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                return <Component key={t} name={t} fallback={s.length === 1 ? o("WAWebErrorBoundaryPopup.react").errorBoundaryPopupFallback : void 0}>{n}</Component>;
            })}</Component></></Component_1></Component_2></Component_3></Component_4></Component_5></Component_6></Component_7></Component_8></Component_9>;
        };
        return t;
    })(A);
    const Ee1 = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(Z);
    function te() {
        const e = o("react-compiler-runtime").c(2);
        const t = o("WAWebFullScreenEntryPointContext").useWAWebFullScreenEntryPoint();
        let n;
        if (e[0] !== t) {
            n = <Ee1 fullScreenEntryPoint={t}/>;
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function ne() {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (P || (P = n("Promise"))).all([
                W.load(),
                oe()
            ]);
            const t = e[0];
            const r = e[1];
            o("WAWebWamPageLoadReporter").mainScriptTimer.start();
            K = t(r);
            o("WAWebWamPageLoadReporter").mainScriptTimer.end();
        });
        return re.apply(this, arguments);
    }
    function oe() {
        if (o("WAWebConnModel").Conn.platform) {
            return (P || (P = n("Promise"))).resolve(o("WAWebConnModel").Conn.platform);
        }
        return new (P || (P = n("Promise")))(function(e) {
            const t = function() {
                const n = o("WAWebConnModel").Conn.platform;
                if (n != null) {
                    o("WAWebConnModel").Conn.off("change:platform", t);
                    e(n);
                }
            };
            o("WAWebConnModel").Conn.on("change:platform", t);
        });
    }
    l.hasPendingActions = Q;
    l.App = te;
}, 226);