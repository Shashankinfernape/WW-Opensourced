__d("WAWebAppUI", [
    "fbt",
    "WAWebAppMutex",
    "WAWebAppScreenTypes",
    "WAWebBizBroadcastProDownloadProgressHost.react",
    "WAWebBizBroadcastProReminderHost.react",
    "WAWebConflict.react",
    "WAWebConnModel",
    "WAWebContextMenuManager.react",
    "WAWebEmojiAssetLoaderCompletionTracker",
    "WAWebErrorBoundary.react",
    "WAWebErrorBoundaryPopup.react",
    "WAWebFavicon.react",
    "WAWebFbtCommon",
    "WAWebLinkDeviceScreen.react",
    "WAWebLockScreenLoadable",
    "WAWebLogoutLoadingScreen.react",
    "WAWebModal.react",
    "WAWebModalManagerImplWrapper.react",
    "WAWebNativeCameraQRLinkedDeviceUtils",
    "WAWebNoop",
    "WAWebProxied.react",
    "WAWebSocketModel",
    "WAWebStartup.react",
    "WAWebTempBanScreen.react",
    "WAWebToastManagerImplLoadable",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "cr:11133",
    "cr:8094",
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function C3() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Service unavailable");
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebModal.react").Modal;
            n = <Component title={t} cover>{s._("We're having trouble connecting to WhatsApp. Please try again in a few minutes.")}</Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function D3() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Computer not connected");
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebModal.react").Modal;
            n = <Component title={t} cover>{s._("Make sure your computer has an active internet connection.")}</Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function m({ Main: t, animate: a, contextMenuRef: i, handleReadyForMainScreen: l, mdReloadPageOnTakeOver: m, screen: p, state: _ }) {
        const f = p;
        const Component = o("WAWebFavicon.react").ErrorFavicon;
        const Component_1 = o("WAWebFavicon.react").DefaultFavicon;
        const Component_2 = o("WAWebFavicon.react").DefaultFavicon;
        const Component_3 = r("WAWebStartup.react");
        const Component_4 = o("WAWebFavicon.react").DefaultFavicon;
        const Component_5 = o("WAWebFavicon.react").ErrorFavicon;
        const Component_6 = o("WAWebFavicon.react").ErrorFavicon;
        const Component_7 = r("WAWebConflict.react");
        const Component_8 = o("WAWebFavicon.react").ErrorFavicon;
        const Component_9 = o("WAWebFavicon.react").DefaultFavicon;
        switch(p){
            case o("WAWebAppScreenTypes").AppScreen.ANOTHER_SESSION:
                {
                    let g;
                    let h;
                    if (_.takingOver) {
                        g = r("WAWebNoop");
                        h = s._("Connecting…");
                    } else {
                        g = function() {
                            m();
                        };
                        h = s._("Use here");
                    }
                    const y = window.open.bind(window, "https://www.whatsapp.com/", "_self");
                    const Component = r("WAWebConflict.react");
                    const Component_1 = o("WAWebFavicon.react").ErrorFavicon;
                    return {
                        appScreenUI: [
                            {
                                ui: <Component_1><Component cancelText={r("WAWebFbtCommon")("Close")} onCancel={y} okText={h} onOK={g}>{s._("WhatsApp is open in another window. Click \"Use here\" to use WhatsApp in this window.")}</Component></Component_1>,
                                errorBoundaryName: f
                            }
                        ],
                        requiresBackendCheck: false
                    };
                }
            case o("WAWebAppScreenTypes").AppScreen.CALL_TAKEOVER_PREVENTION:
                {
                    const C = window.open.bind(window, "https://www.whatsapp.com/", "_self");
                    const Component = r("WAWebConflict.react");
                    const Component_1 = o("WAWebFavicon.react").ErrorFavicon;
                    return {
                        appScreenUI: [
                            {
                                ui: <Component_1><Component cancelText={r("WAWebFbtCommon")("Close")} onCancel={C} okText={s._("Notify other tab")} onOK={function() {
                                    r("WAWebAppMutex").requestFocusOnOtherTab();
                                }}>{s._("You are currently in a call in another window or tab. Click \"Notify Other Tab\" to send a notification that will bring that window to the front.")}</Component></Component_1>,
                                errorBoundaryName: f
                            }
                        ],
                        requiresBackendCheck: false
                    };
                }
            case o("WAWebAppScreenTypes").AppScreen.SERVICE_UNAVAILABLE:
                return {
                    appScreenUI: [
                        {
                            ui: <Component><C3/></Component>,
                            errorBoundaryName: f
                        }
                    ],
                    requiresBackendCheck: false
                };
            case o("WAWebAppScreenTypes").AppScreen.TEMP_BAN:
                return {
                    appScreenUI: [
                        {
                            ui: u.jsx(r("WAWebTempBanScreen.react"), {
                                banData: _.temporaryBan
                            }),
                            errorBoundaryName: f
                        }
                    ],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.QR:
                return {
                    appScreenUI: [
                        {
                            ui: <Component_1>{o("WAWebNativeCameraQRLinkedDeviceUtils").isNativeCameraQRLinkedDeviceTest() && u.jsx(o("WAWebToastManagerImplLoadable").ToastManagerImplLoadable, {})}</Component_1>,
                            errorBoundaryName: "root-toast-manager"
                        },
                        {
                            ui: u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, {
                                type: o("WAWebModalManagerImplWrapper.react").ModalType
                            }, "modal-manager"),
                            errorBoundaryName: "qr-screen-modal-manager"
                        },
                        {
                            ui: <Component_2>{n("cr:8094") ? u.jsx(n("cr:8094"), {
                                apiCmd: _.apiCmd
                            }) : u.jsx(r("WAWebLinkDeviceScreen.react"), {
                                apiCmd: _.apiCmd
                            }, "qr-code")}</Component_2>,
                            errorBoundaryName: n("cr:8094") ? "windows-link-screen-wrapper" : "link-device-screen"
                        }
                    ],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.STARTUP:
            case o("WAWebAppScreenTypes").AppScreen.SYNCING:
                if (n("cr:11133") != null && n("cr:11133")()) {
                    return {
                        appScreenUI: [],
                        requiresBackendCheck: true
                    };
                }
                return {
                    appScreenUI: [
                        {
                            ui: <Component_4><Component_3 initialLoadState={_.initialLoadState} onReady={l}/></Component_4>,
                            errorBoundaryName: f
                        }
                    ],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.OFFLINE:
                return {
                    appScreenUI: [
                        {
                            ui: <Component_5><D3/></Component_5>,
                            errorBoundaryName: f
                        }
                    ],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.PROXYBLOCK:
                return {
                    appScreenUI: [
                        {
                            ui: <Component_6>{u.jsx(r("WAWebProxied.react"), {})}</Component_6>,
                            errorBoundaryName: f
                        }
                    ],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.CONFLICT:
                return {
                    appScreenUI: [
                        {
                            ui: <Component_8><Component_7 cancelText={s._("Log out")} onCancel={function() {
                                return o("WAWebSocketModel").Socket.logout();
                            }} okText={s._("Use here")} onOK={function() {
                                return o("WAWebSocketModel").Socket.takeover();
                            }}>{s._("WhatsApp is open on another computer or browser. Click \"Use here\" to use WhatsApp in this window.")}</Component_7></Component_8>,
                            errorBoundaryName: f
                        }
                    ],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.TOS_BLOCK:
                return {
                    appScreenUI: [],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.SMB_TOS_BLOCK:
                return {
                    appScreenUI: [],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.LOGOUT:
                return {
                    appScreenUI: [
                        {
                            ui: <Component_9>{u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, {
                                type: o("WAWebModalManagerImplWrapper.react").ModalType
                            }, "modal-manager")}{u.jsx(r("WAWebLogoutLoadingScreen.react"), {}, "logout")}</Component_9>,
                            errorBoundaryName: f
                        }
                    ],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.SCREEN_LOCK:
                return {
                    appScreenUI: [
                        {
                            ui: u.jsx(o("WAWebLockScreenLoadable").LockScreenLoadable, {}),
                            errorBoundaryName: f
                        }
                    ],
                    requiresBackendCheck: true
                };
            case o("WAWebAppScreenTypes").AppScreen.MAIN:
                {
                    let b;
                    let v;
                    const S = r("nullthrows")(t);
                    const R = S.MainComponent;
                    const Component = (v = o("WAWebContextMenuManager.react")).ContextMenuManager;
                    const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
                    const Component_2 = o("WAWebEmojiAssetLoaderCompletionTracker").InitialEmojisCompletionContext.Provider;
                    return {
                        appScreenUI: [
                            {
                                ui: u.jsx(o("WAWebToastManagerImplLoadable").ToastManagerImplLoadable, {}),
                                errorBoundaryName: "root-toast-manager"
                            },
                            {
                                ui: u.jsx(r("WAWebBizBroadcastProDownloadProgressHost.react"), {}, "bb-pro-download-progress-host"),
                                errorBoundaryName: "bb-pro-download-progress-host"
                            },
                            {
                                ui: u.jsx(r("WAWebBizBroadcastProReminderHost.react"), {}, "bb-pro-reminder-host"),
                                errorBoundaryName: "bb-pro-reminder-host"
                            },
                            {
                                ui: u.jsx((b = o("WAWebModalManagerImplWrapper.react")).ModalManagerImplWrapper, {
                                    contextMenuRef: i,
                                    type: b.ModalType
                                }, "main-modal-manager"),
                                errorBoundaryName: "main-modal-manager"
                            },
                            {
                                ui: <b.ModalManagerImplWrapper key="media-modal-manager" contextMenuRef={i} type={b.MediaType}/>,
                                errorBoundaryName: "media-modal-manager"
                            },
                            {
                                ui: <b.ModalManagerImplWrapper key="support-modal-manager" contextMenuRef={i} type={b.SupportType}/>,
                                errorBoundaryName: "support-modal-manager"
                            },
                            {
                                ui: <b.ModalManagerImplWrapper key="alert-modal-manager" type={b.AlertType}/>,
                                errorBoundaryName: "alert-modal-manager"
                            },
                            {
                                ui: <div key="expressions-panel-container" id="expressions-panel-container"/>,
                                errorBoundaryName: "expressions-panel-container"
                            },
                            {
                                ui: <Component key="context-menu-manager" ref={i} type={v.Type.MENU}/>,
                                errorBoundaryName: "context-menu-manager"
                            },
                            {
                                ui: <v.ContextMenuManager key="tooltip-manager" type={v.Type.TOOLTIP}/>,
                                errorBoundaryName: "tooltip-manager"
                            },
                            {
                                ui: u.jsx(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowPortalContainer, {}, "voip-popout-portal-container"),
                                errorBoundaryName: "voip-popout-portal-container"
                            },
                            {
                                ui: u.jsx(o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipPortalContainer, {}, "voip-document-picture-in-picture-portal-container"),
                                errorBoundaryName: "voip-document-picture-in-picture-portal-container"
                            },
                            {
                                ui: <Component_2 key="main" value={o("WAWebEmojiAssetLoaderCompletionTracker").emojiCompletionTracker}><Component_1 name="app-wrapper-main-component" type="fatal" fallback={o("WAWebErrorBoundaryPopup.react").errorBoundaryPopupFallback} sendLogs><R conn={o("WAWebConnModel").Conn} animate={a}/></Component_1></Component_2>,
                                errorBoundaryName: "app-wrapper-main-component"
                            }
                        ],
                        requiresBackendCheck: true
                    };
                }
        }
    }
    l.getAppUI = m;
}, 226);