__d("WAWebMain.react", [
    "Promise",
    "WAAbortError",
    "WAGetUserMedia",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebActionListener",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdaptiveLayoutConfig",
    "WAWebAdaptiveLayoutRoot.react",
    "WAWebAnimatedEmojiAssetLoader",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebAppContext.react",
    "WAWebAssetLoader",
    "WAWebAssetLoaderSingleton",
    "WAWebBizAiMetaOneDialogHost.react",
    "WAWebCanonicalMetrics",
    "WAWebChatCollection",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeLogger",
    "WAWebChatThemeValue",
    "WAWebChatlistPanelWrapper.react",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebCometRouterGating",
    "WAWebCometRouterMetaManager.react",
    "WAWebComposeBoxHasUnsavedChangesInEditModal",
    "WAWebConfirmPopup.react",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebConversationWrapper.react",
    "WAWebDeviceCapabilitiesBootstrap",
    "WAWebDrawerCoordination",
    "WAWebDrawerManager",
    "WAWebDrawerManager.react",
    "WAWebDrawerManagerContext",
    "WAWebDrawerManagerGlobalContext",
    "WAWebEligibilityLogging",
    "WAWebEmojiAssetLoader",
    "WAWebEmojiSetup",
    "WAWebErrorBoundary.react",
    "WAWebEventsWaitForBbEvent",
    "WAWebFbtCommon",
    "WAWebHasBlockingCallState",
    "WAWebInternDogfoodingModal.react",
    "WAWebKeyboardEventConstants",
    "WAWebKeyboardManager",
    "WAWebKeyboardShortcutsPopupLoadable",
    "WAWebKeyboardTopLevelHotKeys.react",
    "WAWebLocalStorage",
    "WAWebLoggerImpl",
    "WAWebModalManager",
    "WAWebMouseManager",
    "WAWebMsgCollection",
    "WAWebMusicGatingUtils",
    "WAWebMusicMsgPlayerHostLoadable.react",
    "WAWebNativeAdsExperimentInfoContext.react",
    "WAWebNavBarCometRouting",
    "WAWebNavBarTypes",
    "WAWebNavigationBar.react",
    "WAWebNoop",
    "WAWebNotificationManager.react",
    "WAWebNux",
    "WAWebODS",
    "WAWebOpenLastActiveChatAction",
    "WAWebOpenNotificationsSetting",
    "WAWebPageLoadLogging",
    "WAWebPipManager.react",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebRobotoVariableFontLoadable",
    "WAWebSafariLimited",
    "WAWebSettingsSyncListener.react",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "WAWebStrictMode.react",
    "WAWebThemeContext",
    "WAWebTosModalLoadable",
    "WAWebUA",
    "WAWebURLUtils",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUserPrefsNuxPreferences",
    "WAWebWamAppLaunchReporter",
    "WAWebWamTimeSpentLogger",
    "WAWebWhatsNewGatingUtils",
    "WAWebWhatsNewModal.react",
    "WAWebWindowsHybridBridgeInitiator",
    "WDSProfilePhotoRenderingMode",
    "WDSToastContainerID",
    "asyncToGeneratorRuntime",
    "cr:11133",
    "cr:12406",
    "cr:13156",
    "cr:13438",
    "cr:1347",
    "cr:17163",
    "cr:17194",
    "cr:17219",
    "cr:21198",
    "cr:21265",
    "cr:21419",
    "cr:22855",
    "cr:23046",
    "cr:593",
    "cr:6248",
    "cr:683",
    "getErrorSafe",
    "hero-tracing",
    "justknobx",
    "react",
    "stylex",
    "useCurrentRoute",
    "useLazyRef",
    "useWAWebActiveChat",
    "useWAWebAdjustableChatListWidth",
    "useWAWebExternalBetaOptIn",
    "useWAWebListener",
    "useWAWebNotificationsOptInModalTriggers",
    "useWAWebOnUnmount",
    "useWAWebRightDrawerExpanded",
    "useWAWebRightDrawerSettled"
], function(t, n, r, o, a, i, l) {
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
    const C = y || (y = o("react"));
    const b = y;
    const { useCallback, useEffect, useRef, useState, useSyncExternalStore } = b;
    const K1 = n("cr:13156")?.WAWebWindowsScalingControl;
    const I = n("cr:13438")?.WAWebWindowsHybridUserPrefsMigrationControl;
    const T = n("cr:17219") == null ? undefined : n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebMain);
    const D = T?.touchpadFix;
    D?.init();
    const x = "chatListWallpaperLastLogged";
    const $ = 30;
    const P = `screen and (min-width: ${o("WAWebAdaptiveLayoutConfig").WIDE_BREAKPOINT_PX}px)`;
    const N = window.matchMedia(P);
    function M(e) {
        if ((n("cr:11133") == null ? undefined : n("cr:11133")()) !== true || o("WAWebCmd").Cmd.isMainStreamReadyMd) {
            e();
            return;
        }
        r("WAWebEventsWaitForBbEvent")(o("WAWebCmd").Cmd, "main_stream_mode_ready_from_bridge").then(e).catch((e)=>{
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[startup] runWhenCommsReady wait failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("startup-run-when-comms-ready-failed");
        });
    }
    function w() {
        if (!o("WAWebCometRouterGating").isCometRouterIntegrationEnabled()) {
            o("WAWebModalManager").ModalManager.existsMedia(function(e) {
                if (e) {
                    o("WAWebModalManager").ModalManager.closeMedia();
                }
                window.history.pushState({}, "", window.location.href);
            });
        }
    }
    function A() {
        const e = o("WAWebComposeBoxHasUnsavedChangesInEditModal").hasUnsavedChangesInEditModal();
        const t = o("WAWebChatCollection").ChatCollection.some((e)=>e.isComposingWithUnsavedChanges());
        const n = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages();
        const a = o("WAWebMsgCollection").MsgCollection.some((e)=>e.pendingDeleteForMe);
        const i = r("WAWebHasBlockingCallState")();
        const l = e || t || n || a || i;
        if (l) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[hasPendingActions] edit=",
                " comp=",
                " unsent=",
                " pendDel=",
                " call=",
                ""
            ])), e, t, n, a, i);
        }
        return l;
    }
    const F = 60000;
    function O(e, yRef, DRef) {
        let i = e ? F : 0;
        yRef.current = new AbortController;
        const signal = yRef.current.signal;
        o("WAPromiseLoop").promiseLoop((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    yield o("WAPromiseDelays").delayMs(i);
                    if (signal.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    o("WAWebStreamModel").Stream.markUnavailable(30000);
                    yield new (h || (h = n("Promise")))(function(e) {
                        DRef.current = e;
                    });
                    if (signal.aborted) {
                        throw new (o("WAAbortError")).AbortError;
                    }
                    if (document.hasFocus()) {
                        o("WAWebStreamModel").Stream.markAvailable();
                    }
                    i = F;
                } catch (error) {
                    const t = r("getErrorSafe")(error);
                    if (t.name === o("WAAbortError").ABORT_ERROR) {
                        e();
                    } else {
                        throw error;
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).finally(()=>{
            yRef.current = null;
        });
    }
    const B = "xrbhvgu-B";
    const W = "x1h4ohyg-B";
    const q = {
        app: {
            position: "x1n2onr6",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            display: "x78zum5",
            width: "xh8yej3",
            height: "x5yr21d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            backgroundColor: "x1h3rtpe",
            backgroundRepeat: "x1w3jsh0",
            backgroundPosition: "xf8xn22",
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            transformOrigin: "x1g0ag68",
            animationName: "xcgwb2z",
            animationDuration: "x4afe7t",
            animationTimingFunction: "xu90me3",
            $$css: true
        },
        appNoAnimation: {
            animationName: "x10886xy",
            $$css: true
        },
        pane: {
            boxSizing: "x9f619",
            position: "x1n2onr6",
            zIndex: "xupqr0c",
            height: "x5yr21d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            transform: "x17dzmu4",
            "@media (display-mode: standalone)_borderTopWidth": "x1i1dayz",
            "@media (display-mode: standalone)_borderTopStyle": "x2ipvbc",
            "@media (display-mode: standalone)_borderTopColor": "xjdofhw",
            $$css: true
        },
        paneWindowsHybrid: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            $$css: true
        },
        navbarBorder: {
            borderInlineStartWidth: "xpilrb4",
            borderInlineStartStyle: "x1t7ytsu",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        },
        paneOne: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            zIndex: "x12xzxwr",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            "@media (display-mode: standalone)_borderStartStartRadius": "x570efc",
            $$css: true
        },
        paneOneWindowsHybrid: {
            borderStartStartRadius: "xyi3aci",
            $$css: true
        },
        paneOneDrawer: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            zIndex: "x1oy9qf3",
            $$css: true
        },
        paneOneDrawerWithNavBar: {
            marginInlineStart: "xevlxbw",
            $$css: true
        },
        paneBorderLeft: {
            borderInlineStartWidth: "xpilrb4",
            borderInlineStartStyle: "x1t7ytsu",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        },
        sidePaneMaxWidth: {
            flex: "x18dvir5",
            width: "xxljpkc",
            maxWidth: "xwfak60",
            $$css: true
        },
        rightDrawerIn: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            zIndex: "x1oy9qf3",
            maxWidth: "xwfak60",
            animationDuration: "x5hsz1j",
            animationName: "x17dq4o0",
            animationFillMode: "x10e4vud",
            $$css: true
        },
        rightDrawerSettled: {
            animationName: "x1a5igra",
            flexBasis: "x13cq9vo",
            $$css: true
        },
        sidePaneWidthWindowsHybrid: {
            flex: "x1dgx9ea",
            width: "xnnhin0",
            maxWidth: "x1dt7z5j",
            minWidth: "x1ugzxio",
            $$css: true
        },
        sidePane3WidthWindowsHybrid: {
            flex: "x18dvir5",
            maxWidth: "xbgkxdc",
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "x1v8p93f",
            $$css: true
        },
        sidePane3WidthWindowsHybridAdaptive: {
            "@media screen and (max-width: 1209px)_position": "xkg48ke",
            "@media screen and (max-width: 1209px)_insetInlineEnd": "xmcdse7",
            "@media screen and (max-width: 1209px)_height": "xqyb6ud",
            "@media screen and (max-width: 699px)_width": "x43vsqo",
            "@media screen and (max-width: 699px)_maxWidth": "x1cahy7i",
            $$css: true
        },
        appMinWidth: {
            minWidth: "x1ljrdzs",
            minHeight: "x1u03g8m",
            $$css: true
        },
        appSafariFix: {
            borderStartStartRadius: "xexe6ym",
            borderStartEndRadius: "xqayhte",
            borderEndEndRadius: "x4y79ep",
            borderEndStartRadius: "x2lnoga",
            $$css: true
        },
        paneThreeStandaloneTwoPanes: {
            borderTopWidth: "x1fkvrks",
            $$css: true
        },
        paneThreeNarrowBorder: {
            borderInlineStartWidth: "x2ydcri",
            borderInlineStartStyle: "x1873f8k",
            $$css: true
        },
        paneThreeAnimatingBorder: {
            borderInlineStartColor: "x1ppzqlz",
            $$css: true
        },
        paneOneResponsiveWidth: {
            flexGrow: "xck4lzl",
            flexShrink: "x1gluznb",
            flexBasis: "xahwd2o x10fiusa",
            maxWidth: "x1a0bplq xc995h1",
            $$css: true
        },
        paneThreeResponsiveWidth: {
            position: "x1xz51pm",
            insetInlineEnd: "xupwc73",
            height: "x1ma46kl",
            width: "xx9c7w5 xssin3l",
            maxWidth: "x13ug1e2 x1qwjhxz",
            $$css: true
        },
        paneThreeExpanded: {
            flexGrow: "x1c4vz4f x1rpc6iw",
            flexShrink: "x2lah0s xdq9etc",
            flexBasis: "x8g3yo6",
            animationName: "x17dq4o0 xhxhsad",
            position: "xkg48ke",
            insetInlineEnd: "xmcdse7",
            height: "xqyb6ud",
            width: "xaqfya9 xssin3l",
            maxWidth: "x1vsiv6l x1qwjhxz",
            $$css: true
        }
    };
    function U({ animate }) {
        const a = (n("cr:23046") == null ? undefined : n("cr:23046").isWindowsHybridEnabled()) === true;
        o("WAWebSettingsSyncListener.react").useSettingsSyncListener();
        useEffect(function() {
            if (n("cr:17163") != null && n("cr:17163").shouldShowBrokenHybrid2559Modal()) {
                if (n("cr:17163") != null) {
                    n("cr:17163").showBrokenHybrid2559Modal();
                }
                return;
            }
            if (n("cr:17194") != null && n("cr:17163") != null && n("cr:17163").shouldShowHybridRateTheAppPrompt()) {
                o("WAWebModalManager").ModalManager.open(C.jsx(n("cr:17194"), {}));
                return;
            }
            const cooldownDays = o("WAWebWhatsNewGatingUtils").getWhatsNewAutoModalCooldownDays();
            if (o("WAWebWhatsNewGatingUtils").shouldShowWhatsNewAutoModalOnLaunch(cooldownDays)) {
                const t = new AbortController;
                o("WAWebWhatsNewGatingUtils").resolveWhatsNewBizAgentEligible().then((bizAgentEligible)=>{
                    if (!t.signal.aborted) {
                        o("WAWebModalManager").ModalManager.open(C.jsx(r("WAWebWhatsNewModal.react"), {
                            cooldownDays,
                            bizAgentEligible
                        }));
                    }
                });
                return function() {
                    return t.abort();
                };
            }
        }, []);
        const iRef = useRef(null);
        const lRef = useRef(null);
        const sRef = useRef(null);
        const uRef = useRef(null);
        const cRef = useRef(null);
        const hRef = useRef(null);
        const yRef = useRef(null);
        const bRef = useRef(false);
        const DRef = useRef(null);
        r("useWAWebNotificationsOptInModalTriggers")();
        const P = r("useLazyRef")(function() {
            return new (o("WAShiftTimer")).ShiftTimer(function() {
                if (document.activeElement === document.body) {
                    const e = o("WAWebUim").UIM.Manager.getTop();
                    e?.requestFocus();
                }
            });
        });
        const N = useState(false);
        const A = N[0];
        const F = N[1];
        const B = useState(false);
        const W = B[0];
        const U = B[1];
        const j = useState(false);
        const K = j[0];
        const Q = j[1];
        const X = useState(false);
        const leftDrawerOpen = X[0];
        const J = X[1];
        const Z = r("useWAWebRightDrawerExpanded")();
        const ee = Z && A && !a;
        const te = r("useWAWebRightDrawerSettled")();
        const ne = te[0];
        const re = te[1];
        const onBlur = function() {
            P.current.debounce(10);
        };
        const ae = r("useWAWebActiveChat")();
        const conversationOpen = ae != null;
        const le = o("useWAWebAdjustableChatListWidth").useAdjustableChatListWidth(A, ae);
        const { leftDrawerStyle, mode, resizeHandle, rightDrawerStyle } = le;
        const me = useSyncExternalStore(G, z);
        const inert = ee && me;
        const _e = r("useCurrentRoute")();
        const fe = useState(function() {
            const e = _e?.url;
            if (e != null) {
                return o("WAWebNavBarCometRouting").getNavBarItemForRouteUrl(e);
            }
            return o("WAWebNavBarTypes").NavBarItems.Chats;
        });
        const activeNavBarItem = fe[0];
        const he = fe[1];
        const handleActiveNavBarItemUpdate = useCallback(function(e) {
            if (e !== activeNavBarItem) {
                o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
            }
            he(e);
        }, [
            activeNavBarItem
        ]);
        const onDrawerStateChange = useCallback(function(e, t) {
            o("WAWebDrawerCoordination").closeConflictingDrawer(e, t);
            if (e === "fullscreen") {
                if (t === "opened") {
                    Q(true);
                } else if (t === "closed" || t === "replaced") {
                    Q(false);
                }
            }
            if (e === "left" || e === "fullscreen") {
                if (t === "opened") {
                    if (e === "left") {
                        J(true);
                    }
                    uRef.current?.onLeftDrawerOpen();
                } else if (t === "closed") {
                    if (e === "left") {
                        J(false);
                    }
                    uRef.current?.onLeftDrawerClose();
                    handleActiveNavBarItemUpdate(o("WAWebNavBarTypes").NavBarItems.Chats);
                    if (activeNavBarItem !== o("WAWebNavBarTypes").NavBarItems.Chats) {
                        o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked();
                    }
                } else {
                    if (t === "replaced" && e === "left") {
                        J(true);
                    }
                }
            } else {
                if (e === "right") {
                    re(t);
                    if (t === "opened") {
                        bRef.current = false;
                        o("WAWebCmd").Cmd.onPanesWillChange(3);
                        F(true);
                        U(true);
                        o("WAWebCmd").Cmd.onPanesDidChange(3);
                    } else if (t === "closed" || t === "replaced") {
                        bRef.current = true;
                        U(true);
                        F(false);
                    }
                }
            }
        }, [
            activeNavBarItem,
            handleActiveNavBarItemUpdate,
            re
        ]);
        const onDrawerAnimationComplete = function() {
            U(false);
            if (A && bRef.current) {
                F(false);
            }
        };
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "set_active_nav_bar", handleActiveNavBarItemUpdate);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", useCallback(function(e) {
            if (activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.MetaAI && e?.threadId == null) {
                o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                handleActiveNavBarItemUpdate(o("WAWebNavBarTypes").NavBarItems.Chats);
            }
        }, [
            activeNavBarItem,
            handleActiveNavBarItemUpdate
        ]));
        const ve = useState(0);
        const Se = ve[0];
        const Re = ve[1];
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "rerender_app", function() {});
        const skipNode = function(t) {
            let c = false;
            const d = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")?.existsDrawer() ?? false;
            c = c || d && (uRef.current?.containsDOMNode(t) === true || lRef.current?.contains(t) === true);
            const m = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("mid")?.existsDrawer() ?? false;
            const hRef_current = hRef.current;
            c = c || m && !!(hRef_current != null && hRef_current.containsDOMNode(t));
            return c;
        };
        const Ee = function() {
            switch(o("WAWebConnModel").Conn.tos){
                case 1:
                case 2:
                    o("WAWebModalManager").ModalManager.open(C.jsx(o("WAWebTosModalLoadable").TosModalLoadable, {}), {
                        blockClose: true
                    });
                    break;
                case 3:
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "TOS (terms of service) stage number 3, logging out"
                    ])));
                    o("WAWebSocketModel").Socket.logout();
                    break;
                default:
                    break;
            }
        };
        const onShowKeyboardShortcuts = function(t) {
            let t_target = t.target;
            const n = (t)=>t instanceof HTMLElement && t.getAttribute("contentEditable") || t instanceof HTMLInputElement;
            for(let r = 0; r < 5; r++){
                if (n(t_target)) {
                    return;
                }
                t_target = t_target.parentNode;
            }
            if (o("WAWebKeyboardShortcutsPopupLoadable").KeyboardShortcutsPopupLoadable) {
                o("WAWebModalManager").ModalManager.open(C.jsx(o("WAWebKeyboardShortcutsPopupLoadable").KeyboardShortcutsPopupLoadable, {}));
            }
            t.preventDefault();
        };
        const Ie = ()=>{
            yRef.current?.abort();
        };
        o("WAWebLoggerImpl").Logger.setSkipLoggingForProdLowEndDevice();
        o("WAWebLoggerImpl").Logger.maybeUpdateLogCapacityFromABProp();
        o("WDSProfilePhotoRenderingMode").setWDSProfilePhotoRenderingMode("maybe-BaseImage");
        useEffect(function() {
            if (o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)) {
                document.body?.classList.add("smb-colors");
            }
            if (!o("WAWebAssetLoaderSingleton").AssetLoader.isAssetLoaded("bg-chat-beige")) {
                const t = o("WAWebThemeContext").THEME_ASSETS.lightRefreshed.find(({ id })=>id === "bg-chat-beige");
                if (t == null) {
                    return;
                }
                o("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(t, o("WAWebAssetLoader").LOAD_PRIORITY.THEME_ASSET_LOAD, false).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((e)=>{
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMain] UI refresh wallpaper asset load failed id=",
                        ""
                    ])), t.id).catching(r("getErrorSafe")(e)).sendLogs("asset-loader-wallpaper-load-failed");
                });
            }
            o("WAWebThemeContext").resetPwaTitlebarColor();
        }, []);
        o("WAWebRobotoVariableFontLoadable").useApplyRobotoFont();
        useEffect(function() {
            o("WAWebStreamModel").Stream.uiActive = true;
            if (document.hasFocus() && document.visibilityState !== "hidden") {
                if ((n("cr:11133") == null ? undefined : n("cr:11133")()) === true) {
                    M(function() {
                        if (document.hasFocus() && document.visibilityState !== "hidden") {
                            o("WAWebStreamModel").Stream.markAvailable();
                        }
                    });
                } else {
                    o("WAWebStreamModel").Stream.markAvailable();
                }
            }
            const platform = o("WAWebConnModel").Conn.platform;
            r("WAWebEmojiSetup")(o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(platform));
            o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(platform);
            r("WAWebKeyboardManager").menuBatchRenderWith(function() {
                r("WAWebKeyboardManager").trigger(`${r("WAWebKeyboardEventConstants").Event}:${r("WAWebKeyboardEventConstants").Events.LOGGED_IN}`);
            });
            O(true, yRef, DRef);
            if (o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled()) {
                if ((n("cr:11133") == null ? undefined : n("cr:11133")()) === true) {
                    M(function() {
                        o("WAWebAnimatedEmojiAssetLoader").initAnimatedEmojiAssets(platform).catch((e)=>{
                            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[startup] initAnimatedEmojiAssets failed"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("startup-init-animated-emoji-assets-failed");
                        });
                    });
                } else {
                    o("WAWebAnimatedEmojiAssetLoader").initAnimatedEmojiAssets(platform);
                }
            }
            Ee();
            if (o("WAWebUA").UA.isSafari && !o("WAGetUserMedia").getUserMedia && o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.SAFARI_LIMITED_SUPPORT)) {
                self.setTimeout(function() {
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}>{C.jsx(o("WAWebSafariLimited").SafariLimitedText, {})}</Component>);
                }, 250);
                o("WAWebUserPrefsNuxPreferences").setNUX(o("WAWebNux").NUX.SAFARI_LIMITED_SUPPORT, {
                    views: 1
                });
            }
            o("WAWebOpenNotificationsSetting").handleOpenNotificationsSettingDeeplink();
            T?.appActivationBridge?.initialize();
        }, []);
        useEffect(function() {
            o("WAWebWamAppLaunchReporter").getAppLaunchReporter()?.commitAppLaunchWamEvent();
            if (n("cr:6248") != null) {
                n("cr:6248").startLegacyNativeWebHangsMonitor();
            }
            o("WAWebPageLoadLogging").endPageLoadQpl(false);
            if (n("cr:21198") != null) {
                n("cr:21198").initPerformanceObserver({
                    longtask: {
                        enabled: r("justknobx")._("4665")
                    },
                    longAnimationFrame: {
                        enabled: false
                    }
                });
            }
            o("WAWebCanonicalMetrics").logCanonicalPageLoadMetrics();
            if (o("WAWebChatThemeGatingUtils").isChatThemeLoggingEnabled()) {
                r("WAWebEventsWaitForBbEvent")(o("WAWebChatCollection").ChatCollection, o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED).then(()=>{
                    try {
                        const e = Date.now();
                        const t = Number(r("WAWebLocalStorage") == null ? undefined : r("WAWebLocalStorage").getItem(x));
                        if (!Number.isFinite(t) || e - t >= $ * o("WATimeUtils").DAY_MILLISECONDS) {
                            const anyWallpaperApplied = o("WAWebChatCollection").ChatCollection.some((e)=>o("WAWebChatThemeValue").isWallpaperOverride(e.wallpaperValue) || o("WAWebChatThemeValue").isWallpaperOwningChatThemeId(e.chatThemeValue?.chatThemeId));
                            o("WAWebChatThemeLogger").logChatListWallpaperEvent({
                                anyWallpaperApplied,
                                chatThemesEnabled: o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
                            });
                            if (r("WAWebLocalStorage") != null) {
                                r("WAWebLocalStorage").setItem(x, e.toString());
                            }
                        }
                    } catch (e) {
                        o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "ChatListWallpaper logging failed"
                        ])));
                    }
                }).catch(r("WAWebNoop"));
            }
        }, []);
        r("useWAWebOnUnmount")(function() {
            P.current.cancel();
            r("WAWebKeyboardManager").menuBatchRenderWith(function() {
                r("WAWebKeyboardManager").trigger(`${r("WAWebKeyboardEventConstants").Event}:${r("WAWebKeyboardEventConstants").Events.LOGGED_OUT}`);
            });
            if (r("WAWebURLUtils").canMuckHistory() && !o("WAWebCometRouterGating").isCometRouterIntegrationEnabled()) {
                window.history.back();
            }
            o("WAWebStreamModel").Stream.uiActive = false;
            Ie();
        });
        const Te = r("WAWebURLUtils").canMuckHistory();
        o("useWAWebListener").useListener(Te ? window : null, "popstate", w);
        useEffect(function() {
            if (Te) {
                w();
            }
        }, []);
        useEffect(function() {
            const e = getComputedStyle(document.documentElement);
            if (!e.getPropertyValue("--WDS-accent")) {
                r("WAWebODS").incr("web.app.cssLoadError");
            }
        }, []);
        o("useWAWebListener").useListener(o("WAWebConnModel").Conn, "change:tos", Ee);
        o("useWAWebListener").useListener(document, "wheel", o("WAWebMouseManager").mouseWheelListener);
        const De = function() {
            DRef.current?.();
            DRef.current = null;
        };
        o("useWAWebListener").useListener(document, [
            "mousemove",
            "scroll",
            "keydown"
        ], De);
        o("useWAWebListener").useListener(window, [
            "focus",
            "resize"
        ], De);
        useEffect(function() {
            if ((n("cr:11133") == null ? undefined : n("cr:11133")()) === true) {
                M(function() {
                    o("WAWebDeviceCapabilitiesBootstrap").bootstrapDeviceCapabilities().catch((e)=>{
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[startup] bootstrapDeviceCapabilities failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("startup-bootstrap-device-capabilities-failed");
                    });
                });
            } else {
                o("WAWebDeviceCapabilitiesBootstrap").bootstrapDeviceCapabilities();
            }
        }, []);
        useEffect(function() {
            o("WAWebEligibilityLogging").eligibilityLogger.init();
        }, []);
        const xe = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
            three: A,
            two: !A,
            "app-animating": W
        }, (g || (g = r("stylex")))([
            q.app,
            !animate && q.appNoAnimation,
            !a && q.appMinWidth,
            o("WAWebUA").UA.isSafari && !o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa() && !a && q.appSafariFix
        ]));
        let $e;
        let Pe;
        if (n("cr:593") != null && a) {
            Pe = C.jsx(n("cr:593"), {});
        }
        o("useWAWebExternalBetaOptIn").useExternalBetaValidator();
        const Component = o("hero-tracing").HeroPagelet;
        const Component_1 = o("hero-tracing").HeroPagelet;
        const Ne = <div className="x10l6tqk x13vifvy x1o0tod x78zum5 xh8yej3 x5yr21d x6ikm8r x10wlt62 x47corl"><div className={o("WAWebClassnames").classnamesConvertMeToStylexPlease(g([
            q.paneOneDrawerWithNavBar,
            q.pane,
            q.paneOne,
            q.sidePaneMaxWidth,
            q.paneOneDrawer,
            !a && q.paneOneResponsiveWidth,
            a && [
                q.paneWindowsHybrid,
                q.paneOneWindowsHybrid,
                q.sidePaneWidthWindowsHybrid
            ],
            q.navbarBorder
        ]))} style={leftDrawerStyle} data-testid="drawer-left"><Component name="Left Drawer Manager" observeTextMutation>{VComponent}</Component></div><div {...babelHelpers.extends({}, {
            0: {
                className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr"
            },
            4: {
                className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk"
            },
            2: {
                className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr xevlxbw"
            },
            6: {
                className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk xevlxbw"
            },
            1: {
                className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr xyi3aci"
            },
            5: {
                className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk xyi3aci"
            },
            3: {
                className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr xevlxbw xyi3aci"
            },
            7: {
                className: "x9f619 x1n2onr6 x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xpilrb4 x1t7ytsu x1vb5itz x12xzxwr x178xt8z x13fuv20 xx42vgk xevlxbw xyi3aci"
            }
        }[!!a << 2 | !!(a && mode === "narrow") << 1 | !!(a && mode === "narrow" && ae) << 0], {
            "data-testid": "drawer-middle",
            children: <Component_1 name="Mid Drawer Manager" observeTextMutation>{H}</Component_1>
        })}/></div>;
        const Me = <div className="x10l6tqk x13vifvy x78zum5 x5yr21d x6ikm8r x10wlt62 x47corl x8qhkwt xdmgpyl x1oy9qf3" data-testid="drawer-fullscreen">{C.jsx(o("WAWebDrawerManager.react").DrawerManagerComponent, {
            direction: o("WAWebDrawerManager.react").Dir.FULLSCREEN
        })}</div>;
        const updateActiveNavBarItem = useCallback(function(e) {
            o("WAWebOpenLastActiveChatAction").cancelPendingLastActiveChatRestore();
            o("WAWebCmd").Cmd.closeActiveChat();
            handleActiveNavBarItemUpdate(e);
        }, [
            handleActiveNavBarItemUpdate
        ]);
        const Component_2 = r("WAWebStrictMode.react");
        const Ae = <Component_2>{C.jsx(o("WAWebNavigationBar.react").NavigationBar, {
            headerRef: sRef,
            activeNavBarItem,
            updateActiveNavBarItem
        })}</Component_2>;
        const Fe = C.jsx(r("WAWebChatlistPanelWrapper.react"), {
            leftDrawerStyle,
            resizeHandle,
            chatlistHeaderRef: lRef,
            handleActiveNavBarItemUpdate,
            chatlistPanelRef: uRef,
            leftPaneClassName: o("WAWebClassnames").classnamesConvertMeToStylexPlease({
                0: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc xwfak60 x18pi947",
                8: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1",
                4: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio",
                12: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio",
                2: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc xwfak60 x18pi947 xyi3aci",
                10: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1 xyi3aci",
                6: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xyi3aci",
                14: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xyi3aci",
                1: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc xwfak60 x18pi947 xlshs6z",
                9: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1 xlshs6z",
                5: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xlshs6z",
                13: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xlshs6z",
                3: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc xwfak60 x18pi947 xyi3aci xlshs6z",
                11: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18dvir5 xxljpkc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1a0bplq xc995h1 xyi3aci xlshs6z",
                7: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xyi3aci xlshs6z",
                15: "x9f619 x1n2onr6 x5yr21d x17dzmu4 x1i1dayz x2ipvbc xjdofhw x78zum5 xdt5ytf x12xzxwr x1plvlek xryxfnj x570efc x18pi947 xck4lzl x1gluznb xahwd2o x10fiusa x1dgx9ea xnnhin0 x1dt7z5j x1ugzxio xyi3aci xlshs6z"
            }[!a << 3 | !!a << 2 | !!(a && mode === "narrow" && ae) << 1 | !!K << 0])
        });
        const Component_3 = r("WAWebStrictMode.react");
        const Oe = <Component_3>{C.jsx(r("WAWebConversationWrapper.react"), {
            conversationRef: hRef,
            inert,
            paneTwoProps: {
                0: {
                    className: "x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2"
                },
                2: {
                    className: "x9f619 x1n2onr6 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xyi3aci"
                },
                1: {
                    className: "x9f619 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 x1n2onr6 x1bn48ul x1c6qshe x1bmet7 x1gwtva9 xbhnds0 x9gl56o"
                },
                3: {
                    className: "x9f619 xupqr0c x5yr21d x6ikm8r x10wlt62 x17dzmu4 x1i1dayz x2ipvbc xjdofhw xyyilfv x1iyjqo2 xyi3aci x1n2onr6 x1bn48ul x1c6qshe x1bmet7 x1gwtva9 xbhnds0 x9gl56o"
                }
            }[!!(a && mode === "narrow") << 1 | !!ee << 0]
        })}</Component_3>;
        const Component_4 = o("WAWebDrawerManager.react").DrawerManagerComponent;
        const Be = <div className={o("WAWebClassnames").classnamesConvertMeToStylexPlease(g([
            q.pane,
            q.paneBorderLeft,
            q.paneThreeNarrowBorder,
            !A && q.paneThreeStandaloneTwoPanes,
            A && W && q.paneThreeAnimatingBorder,
            A && q.rightDrawerIn,
            A && !a && ne && q.rightDrawerSettled,
            A && !a && q.paneThreeResponsiveWidth,
            A && a && [
                q.sidePane3WidthWindowsHybrid,
                q.sidePane3WidthWindowsHybridAdaptive
            ],
            a && mode === "narrow" && q.paneOneWindowsHybrid,
            ee && q.paneThreeExpanded
        ]))} style={rightDrawerStyle} ref={cRef} data-testid="drawer-right"><Component_4 direction={o("WAWebDrawerManager.react").Dir.RIGHT} onDrawerAnimationComplete={onDrawerAnimationComplete} animationDisabled/></div>;
        const We = K1 ? <K1/> : null;
        const qe = I ? <I/> : null;
        const Ue = o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled() ? C.jsx(o("WAWebMusicMsgPlayerHostLoadable.react").WAWebMusicMsgPlayerHostLoadable, {}) : null;
        const Ve = n("cr:21265") ? C.jsx(n("cr:21265"), {}) : null;
        const He = n("cr:21419") ? C.jsx(n("cr:21419"), {}) : null;
        const Ge = n("cr:22855") ? C.jsx(n("cr:22855"), {}) : null;
        const ze = n("cr:683") ? C.jsx(n("cr:683"), {}) : null;
        const je = n("cr:12406") ? C.jsx(n("cr:12406"), {}) : null;
        const Ke = <div id={`${r("WDSToastContainerID")}`} className="xixxii4 x191j7n5 xzwoauc xz4gtu xevlxbw xc9l9hb x47corl"/>;
        const Component_5 = o("WAWebErrorBoundary.react").ErrorBoundary;
        const Component_6 = r("WAWebAdaptiveLayoutRoot.react");
        const Component_7 = r("WAWebKeyboardTopLevelHotKeys.react");
        const Component_8 = o("WAWebUimUie.react").UIE;
        const Component_9 = o("WAWebAppContext.react").AppContextProvider;
        const Component_10 = o("WAWebDrawerManagerContext").DrawerManagerContextProvider;
        const Component_11 = o("WAWebNativeAdsExperimentInfoContext.react").NativeAdsExperimentInfoProvider;
        const Component_12 = o("WAWebActiveAccountInfoContext.react").ActiveAccountInfoProvider;
        return <Component_12><Component_11><Component_10 onDrawerStateChange={onDrawerStateChange}><Component_9 key={Se} rightDrawerOpen={A} activeNavBarItem={activeNavBarItem}><div data-testid="wa-web-main-screen" className="x78zum5 xdt5ytf x5yr21d">{Pe}<Component_8 uimState={o("WAWebUim").UIMState.INACTIVE} displayName="Main"><Component_7 className={xe} onBlur={onBlur} ref={iRef} onShowKeyboardShortcuts={onShowKeyboardShortcuts} skipNode={skipNode}>{C.jsx(r("WAWebNotificationManager.react"), {})}{o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() && C.jsx(r("WAWebCometRouterMetaManager.react"), {})}{We}{qe}{C.jsx(r("WAWebActionListener"), {
            activeNavBarItem,
            updateActiveNavBarItem
        })}<Component_5 name="time-spent-logger" sendLogs>{C.jsx(r("WAWebWamTimeSpentLogger"), {})}</Component_5>{C.jsx(r("WAWebInternDogfoodingModal.react"), {})}{$e}{Ae}{Me}{Ne}{a ? <><Component_6 mode={mode} conversationOpen={conversationOpen} leftDrawerOpen={leftDrawerOpen} rightDrawerOpen={A}>{Fe}{Oe}{Be}</Component_6>{C.jsx(o("WAWebPipManager.react").PiPManager, {})}{Ue}</> : <>{Fe}{Oe}{C.jsx(o("WAWebPipManager.react").PiPManager, {})}{Ue}{Be}</>}{Ve}{He}{Ge}{ze}{je}{C.jsx(r("WAWebBizAiMetaOneDialogHost.react"), {})}{Ke}</Component_7></Component_8></div></Component_9></Component_10></Component_11></Component_12>;
    }
    U.displayName = `${U.name} [from ${i.id}]`;
    function VComponent(e, t) {
        return <><div ref={e}>{C.jsx(o("WAWebDrawerManager.react").DrawerManagerComponent, {
            direction: o("WAWebDrawerManager.react").Dir.LEFT
        })}</div>{C.jsx(t, {})}</>;
    }
    VComponent.displayName = `${VComponent.name} [from ${i.id}]`;
    function H(e, t) {
        return <><div ref={e}>{C.jsx(o("WAWebDrawerManager.react").DrawerManagerComponent, {
            direction: o("WAWebDrawerManager.react").Dir.MID
        })}</div>{C.jsx(t, {})}</>;
    }
    H.displayName = `${H.name} [from ${i.id}]`;
    function G(e) {
        N.addListener(e);
        return function() {
            return N.removeListener(e);
        };
    }
    function z() {
        return N.matches;
    }
    l.hasPendingActions = A;
    l.MainComponent = U;
}, 98);