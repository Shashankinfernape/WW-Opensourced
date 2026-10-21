__d("WAWebPrimaryButterbar.react", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackgroundSyncReporter",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebNotificationsFlowLoadable",
    "WAWebNotificationsM1Butterbar.react",
    "WAWebNotificationsOptInGating",
    "WAWebOfflineButterbar.react",
    "WAWebOfflineProgressButterbar.react",
    "WAWebPushNotificationsGatingUtils",
    "WAWebResumeButterbar.react",
    "WAWebSettingsFBT",
    "WAWebSettingsSyncBridge",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "WAWebTabOrder",
    "WAWebUpdater",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumOnboardSources",
    "WAWebWamEnumWebcButterbarActionType",
    "WAWebWamEnumWebcButterbarBbType",
    "WAWebWebcButterbarEventWamEvent",
    "WDSBanner.react",
    "WDSIconIcRefresh.react",
    "WDSIconIcSync.react",
    "cr:17163",
    "cr:474",
    "getErrorSafe",
    "react",
    "useWAWebButterbarVisibilityReport",
    "useWAWebIsStartupSkeletonVisible",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useRef, useState } = d;
    function f(e) {
        "use no forget";
        const { displayInfo, isHardRefresh, needsUpdate, notifyPermission, onEnableOfflineNotifications, onRequestPermissions, onShowNotifyDelay, onVisibilityChange, ref, showNotify, showResumeProgress } = e;
        const k = useState(o("WAWebSocketModel").Socket.stream);
        const I = k[0];
        const T = k[1];
        const D = r("useWAWebIsStartupSkeletonVisible")("chatlist");
        const x = function() {
            return !o("WAWebMuteCollection").MuteCollection.getGlobalNotificationsEnabled() && !o("WAWebMuteCollection").MuteCollection.getGlobalGroupNotificationsEnabled() && !o("WAWebMuteCollection").MuteCollection.getGlobalStatusNotificationsEnabled();
        };
        const $ = function() {
            return !o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications();
        };
        const P = useState(x);
        const N = P[0];
        const M = P[1];
        const w = useState($);
        const A = w[0];
        const F = w[1];
        const O = useState(function() {
            return o("WAWebNotificationsOptInGating").shouldShowNotificationSettingsV2Butterbar(true);
        });
        const B = O[0];
        const W = O[1];
        const q = useState(function() {
            return o("WAWebNotificationsOptInGating").shouldShowNotificationSettingsV2Butterbar();
        });
        const U = q[0];
        const V = q[1];
        const HRef = useRef(null);
        const G = useState(function() {
            return o("WAWebUserPrefsNotifications").getOfflineNotificationsBBStatus().isDismissed ?? false;
        });
        const z = G[0];
        const j = G[1];
        o("useWAWebListener").useListener(o("WAWebSocketModel").Socket, "change:stream", function() {
            T(o("WAWebSocketModel").Socket.stream);
        });
        o("useWAWebListener").useListener(o("WAWebMuteCollection").MuteCollection, "change:notificationsEnabled", function() {
            M(x());
            F($());
        });
        function KComponent() {
            let bbar_1 = null;
            let bbarType_1 = null;
            let delegatesReport_1 = false;
            let claimsSlotWithoutPainting_1 = false;
            if (n("cr:17163") != null && n("cr:17163").shouldShowBrokenHybrid2559Modal() && n("cr:474")) {
                return {
                    bbar: c.jsx(n("cr:474"), {}),
                    bbarType: null,
                    claimsSlotWithoutPainting: false,
                    delegatesReport: false
                };
            }
            const Component = r("WAWebResumeButterbar.react");
            switch(displayInfo){
                case o("WAWebStreamModel").StreamInfo.OFFLINE:
                    bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE;
                    bbar_1 = c.jsx(r("WAWebOfflineButterbar.react"), {}, "bbar");
                    break;
                case o("WAWebStreamModel").StreamInfo.OPENING:
                case o("WAWebStreamModel").StreamInfo.CONNECTING:
                    if (D) {
                        claimsSlotWithoutPainting_1 = true;
                        break;
                    }
                    bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.RESUME_CONNECTING;
                    bbar_1 = <Component key="bbar" onVisibilityChange={onVisibilityChange}/>;
                    delegatesReport_1 = true;
                    break;
                case o("WAWebStreamModel").StreamInfo.NORMAL:
                    if (r("WAWebEnvironment").isWindows && I === o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED) {
                        bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE;
                        bbar_1 = c.jsx(r("WAWebOfflineButterbar.react"), {}, "bbar");
                        break;
                    }
                    break;
                case o("WAWebStreamModel").StreamInfo.RESUMING:
                    {
                        bbarType_1 = null;
                        const Component = r("WDSBanner.react");
                        bbar_1 = <div className="x1380le5 xefnzgg x1uvdrpn x14mko6t"><Component type="warning" title={s._("Phone not connected")} body={s._("Make sure your phone has an active internet connection.")} actionText={s._("Learn more")} onAction={y}/></div>;
                        break;
                    }
                default:
                    break;
            }
            if (bbar_1 == null && showResumeProgress) {
                bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.RESUME_LOADING_MSGS_PROGRESS;
                bbar_1 = c.jsx(r("WAWebOfflineProgressButterbar.react"), {});
            }
            if (bbar_1 == null && needsUpdate && !r("WAWebEnvironment").isWindows && !isHardRefresh) {
                bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.UPDATE_DUE_TO_SOFT_MIN;
                const Component = r("WDSBanner.react");
                bbar_1 = <div className="x1380le5 xefnzgg x1uvdrpn x14mko6t"><Component key="bbar" ref={ref} type="default" title={s._("Refresh to update")} body={s._("A new version of WhatsApp is available.")} actionText={s._("Refresh")} icon={r("WDSIconIcRefresh.react")} onAction={function() {
                    HRef.current = null;
                    C(o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.UPDATE_DUE_TO_SOFT_MIN, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA);
                    h();
                }} tabOrder={o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR}/></div>;
            }
            let g = false;
            if (bbar_1 == null && window.Notification && !r("WAWebEnvironment").isWindows && (notifyPermission !== o("WAWebNotificationConstants").PERMISSION_ALLOWED || N)) {
                g = o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled");
            }
            if (bbar_1 == null) {
                const k = notifyPermission === o("WAWebNotificationConstants").PERMISSION_ALLOWED;
                const T = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
                const P = o("WAWebNotificationsOptInGating").shouldShowNotificationsOptInModal(notifyPermission);
                const w = !r("WAWebEnvironment").isWindows && !k;
                const messagesOff = w || N;
                const callsOff = w || A;
                const G = ()=>{
                    M(x());
                    F($());
                };
                const K = function() {
                    if (bbarType_1 != null) {
                        HRef.current = null;
                        C(bbarType_1, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_DISMISS);
                    }
                    o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
                        isDismissed: true,
                        lastDismissTime: o("WATimeUtils").unixTime()
                    });
                    V(false);
                    W(false);
                    G();
                };
                const QComponent = ()=>{
                    const Component = o("WAWebNotificationsFlowLoadable").NotificationsFlowLoadable;
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onEnd={function() {
                        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                        G();
                    }}/>);
                };
                const X = function() {
                    if (bbarType_1 != null) {
                        HRef.current = null;
                        C(bbarType_1, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA);
                    }
                    if (!r("WAWebEnvironment").isWindows) {
                        o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
                            offboardSource: null,
                            onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.WEB_NOTIFICATION_BUTTERBAR
                        });
                    }
                    if (N) {
                        b();
                    }
                    if (A) {
                        v();
                    }
                    G();
                    if (r("WAWebEnvironment").isWindows && N) {
                        QComponent();
                    }
                    if (!k && !r("WAWebEnvironment").isWindows) {
                        onRequestPermissions(g);
                    }
                };
                if (r("WAWebEnvironment").isWindows && T && B && (N || A)) {
                    bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION_DISABLED;
                    const Component = r("WAWebNotificationsM1Butterbar.react");
                    bbar_1 = <Component onDismiss={K} onAction={X} bannerVariant={4} callsOff={callsOff} messagesOff={messagesOff} ref={ref}/>;
                } else if (window.Notification && (o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(notifyPermission, g) || N || T && A) && U) {
                    if (P) {
                        bbarType_1 = null;
                    } else if (showNotify) {
                        bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION;
                        let bannerVariant = o("WAWebABProps").getABPropConfigValue("web_notifications_banner_variant");
                        const J = notifyPermission === o("WAWebNotificationConstants").PERMISSION_DENIED;
                        if (g && bannerVariant > 0 && T && (J || k && N) || T && callsOff && !messagesOff) {
                            bannerVariant = 4;
                            bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION_DISABLED;
                        }
                        const Component = r("WAWebNotificationsM1Butterbar.react");
                        bbar_1 = <Component onDismiss={K} onAction={X} bannerVariant={bannerVariant} callsOff={callsOff} messagesOff={messagesOff} ref={ref}/>;
                    } else {
                        claimsSlotWithoutPainting_1 = true;
                        onShowNotifyDelay();
                    }
                } else if (!showNotify && o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications() && window.Notification && notifyPermission !== o("WAWebNotificationConstants").PERMISSION_DENIED && bbar_1 == null) {
                    const Z = o("WAWebUserPrefsNotifications").getOfflineNotificationsBBStatus();
                    let firstSeenTime = Z.firstSeenTime;
                    const te = o("WAWebUserPrefsNotifications").getGlobalOfflineNotifications();
                    const Component = r("WDSBanner.react");
                    if (!z && (!te || notifyPermission === o("WAWebNotificationConstants").PERMISSION_DEFAULT)) {
                        if (firstSeenTime == null) {
                            firstSeenTime = o("WATimeUtils").unixTime();
                            o("WAWebUserPrefsNotifications").setOfflineNotificationsBBStatus({
                                isDismissed: false,
                                firstSeenTime
                            });
                        }
                        if (o("WATimeUtils").unixTime() - firstSeenTime <= 7 * o("WATimeUtils").DAY_SECONDS) {
                            bbarType_1 = o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION;
                            bbar_1 = <div className="x1380le5 xefnzgg x1uvdrpn x14mko6t"><Component key="bbar" type="default" icon={r("WDSIconIcSync.react")} title={s._("Turn on background sync")} body={o("WAWebSettingsFBT").offlineSyncSubtitle()} actionText={s._("Turn on")} onAction={function() {
                                HRef.current = null;
                                C(o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA);
                                o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
                                    offboardSource: null,
                                    onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.BACKGROUND_SYNC_BUTTERBAR
                                });
                                onEnableOfflineNotifications();
                            }} onDismiss={function() {
                                HRef.current = null;
                                C(o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.CLICK_DISMISS);
                                o("WAWebUserPrefsNotifications").setOfflineNotificationsBBStatus({
                                    isDismissed: true
                                });
                                j(true);
                            }}/></div>;
                        }
                    }
                }
            }
            return {
                bbar: bbar_1,
                bbarType: bbarType_1,
                claimsSlotWithoutPainting: claimsSlotWithoutPainting_1,
                delegatesReport: delegatesReport_1
            };
        }
        const Q = KComponent();
        const { bbar, bbarType, claimsSlotWithoutPainting, delegatesReport } = Q;
        useEffect(function() {
            const HRef_current = HRef.current;
            if (HRef_current !== bbarType) {
                if (HRef_current != null) {
                    C(HRef_current, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.AUTO_DISMISS);
                }
                HRef.current = bbarType;
                if (bbarType != null) {
                    C(bbarType, o("WAWebWamEnumWebcButterbarActionType").WEBC_BUTTERBAR_ACTION_TYPE.IMPRESSION);
                }
            }
        }, [
            bbarType
        ]);
        return <G3 isVisible={delegatesReport ? null : bbar != null || claimsSlotWithoutPainting} onVisibilityChange={onVisibilityChange}>{bbar}</G3>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function G3({ children, isVisible, onVisibilityChange }) {
        r("useWAWebButterbarVisibilityReport")(isVisible, onVisibilityChange);
        return children;
    }
    function h() {
        o("WAWebUpdater").Updater.restart();
    }
    function y() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getCannotConnectFaqUrl());
    }
    function C(webcButterbarType, webcButterbarAction) {
        new (o("WAWebWebcButterbarEventWamEvent")).WebcButterbarEventWamEvent({
            webcButterbarType,
            webcButterbarAction
        }).commit();
    }
    function b() {
        let e;
        (e = o("WAWebMuteCollection")).MuteCollection.setGlobalNotificationsEnabled(true);
        e.MuteCollection.setGlobalGroupNotificationsEnabled(true);
        e.MuteCollection.setGlobalStatusNotificationsEnabled(true);
        e.MuteCollection.setGlobalNotifications(true);
        S("isMessagesNotificationEnabled");
        S("isGroupMessageNotificationEnabled");
        S("isStatusNotificationEnabled");
    }
    function v() {
        o("WAWebMuteCollection").MuteCollection.setGlobalCallNotifications(true);
        S("isCallsNotificationEnabled");
    }
    function S(t) {
        o("WAWebSettingsSyncBridge").sendSettingChange(t, true).catch((n)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "butterbar: failed to sync notification setting ",
                ""
            ])), t).catching(r("getErrorSafe")(n)).sendLogs("butterbar-notification-setting-sync-failed");
        });
    }
    l.default = f;
}, 226);