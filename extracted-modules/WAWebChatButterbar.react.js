__d("WAWebChatButterbar.react", [
    "fbt",
    "WALogger",
    "WAShiftTimer",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBrigadingButterBar.react",
    "WAWebCmd",
    "WAWebDbUsageApiConst",
    "WAWebDrawerManager",
    "WAWebGuidePopup.react",
    "WAWebL10N",
    "WAWebLocaleManualUpdateButterbar.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebNoticeButterbar.react",
    "WAWebNoticeGetters",
    "WAWebNoticeModel",
    "WAWebNotificationConstants",
    "WAWebNotificationsFlowLoadable",
    "WAWebNotificationsOptInModalController",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeTypes",
    "WAWebPDFNLogging",
    "WAWebPrimaryButterbar.react",
    "WAWebStreamGetters",
    "WAWebSubscribePushManagerAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumUserNoticeEvent",
    "cr:5037",
    "cr:5735",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebButterbarVisibilityReport",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebNoticeValues",
    "useWAWebOnUnmount",
    "useWAWebStreamValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        container: {
            display: "x78zum5",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            flexDirection: "xdt5ytf",
            $$css: true
        }
    };
    const p = 10000;
    function _(t) {
        "use no forget";
        let i;
        const t_onVisibilityChange = t.onVisibilityChange;
        const u = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const _ = o("useWAWebStreamValues").useStreamValues([
            o("WAWebStreamGetters").getDisplayInfo,
            o("WAWebStreamGetters").getNeedsUpdate,
            o("WAWebStreamGetters").getIsHardRefresh
        ]);
        const displayInfo = _[0];
        const needsUpdate = _[1];
        const isHardRefresh = _[2];
        const b = o("useWAWebNoticeValues").useNoticeValues([
            (i = o("WAWebNoticeGetters")).getNoticeId,
            i.getBlocking,
            i.getBanner,
            i.getShouldShowButterBar
        ]);
        const v = b[0];
        const S = b[1];
        const R = b[2];
        const L = b[3];
        const shouldShow = L && v != null && R != null && S === false;
        const k = u_useState(window.Notification?.permission);
        const notifyPermission = k[0];
        const T = k[1];
        const D = u_useState(false);
        const showNotify = D[0];
        const $ = D[1];
        const P = u_useState(false);
        const N = P[0];
        const M = P[1];
        const w = u_useState(true);
        const isPrimaryVisible = w[0];
        const F = w[1];
        const O = u_useState(false);
        const isNoticeVisible = O[0];
        const W = O[1];
        const q = u_useState(false);
        const isLocaleUpdateVisible = q[0];
        const V = q[1];
        const H = u_useState(false);
        const isBrigadingVisible = H[0];
        const z = H[1];
        const j = u_useState({
            detected: false
        });
        const K = j[0];
        const Q = j[1];
        const X = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WABrigadingState");
        const Y = u_useState(X);
        const J = Y[0];
        const Z = Y[1];
        const ee = u_useState(function() {
            return false;
        });
        const te = ee[0];
        const ne = ee[1];
        const re = u_useState(function() {
            if (r("gkx")("26258")) {
                return null;
            }
            return h();
        });
        const alertType = re[0];
        const ae = re[1];
        const ie = r("useLazyRef")(function() {
            return new (o("WAShiftTimer")).ShiftTimer(function(e) {
                $(e);
            });
        });
        const le = u_useState(o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.ButterBar);
        const showResumeProgress = le[0];
        const ue = le[1];
        const onShowNotifyDelay = function() {
            ie.current.onOrBefore(p, true);
        };
        const onRequestPermissions = function(t, n) {
            o("WAWebNotificationsOptInModalController").requestNotificationsPermission(t, {
                showGuidePopup: n?.showGuidePopup,
                onPermissionResult: function(t) {
                    T(t);
                }
            });
        };
        const MeComponent = function() {
            if (window.Notification && notifyPermission === o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
                o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(true);
                o("WAWebSubscribePushManagerAction").handleOfflineNotifications(true);
                u();
                const t = s._("Background sync on");
                const n = s._("View");
                o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                    msg: t,
                    action: {
                        actionText: n,
                        onAction: function() {
                            const Component = o("WAWebNotificationsFlowLoadable").NotificationsFlowLoadable;
                            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                                descriptorType: "notifications"
                            } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>);
                        }
                    }
                }), o("WAWebToastManager").ToastPosition.LEFT);
            } else if (window.Notification && notifyPermission === o("WAWebNotificationConstants").PERMISSION_DEFAULT) {
                let r;
                const Component = (r = o("WAWebGuidePopup.react")).GuidePopup;
                o("WAWebModalManager").ModalManager.open(<Component messaging={r.Messaging.BACKGROUND_SYNC} onConfirm={r.guideConfirm} onCancel={r.notificationGuideLearnMore} type={r.GuidePopupType.GUIDE_ALLOW} featureSurface={r.FeatureSurface.NOTIFICATION}/>);
                window.Notification.requestPermission(function(e) {
                    o("WAWebModalManager").ModalManager.close();
                    T(e);
                    if (e === o("WAWebNotificationConstants").PERMISSION_ALLOWED) {
                        const t = o("WAWebMuteCollection").MuteCollection.getGlobalOfflineNotifications();
                        if (!t) {
                            o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(true);
                            o("WAWebSubscribePushManagerAction").handleOfflineNotifications(true);
                        }
                    }
                });
            } else {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-notif] failed: Notification unavailable/denied"
                ])));
            }
        };
        const pe = function() {
            const e = o("WAWebNoticeGetters").getNoticeId(r("WAWebNoticeModel"));
            if (o("WAWebNoticeGetters").getShouldShowButterBar(r("WAWebNoticeModel")) && e != null && o("WAWebNoticeGetters").getBanner(r("WAWebNoticeModel")) != null && o("WAWebNoticeGetters").getBlocking(r("WAWebNoticeModel")) === false) {
                if (!N) {
                    o("WAWebPDFNLogging").logUserNoticeEvent({
                        noticeId: e,
                        noticeContentVersion: r("WAWebNoticeModel").policyVersion,
                        noticeEvent: o("WAWebWamEnumUserNoticeEvent").USER_NOTICE_EVENT.BANNER_APPEAR
                    });
                    M(true);
                }
            }
        };
        const _e = function() {
            if (!r("gkx")("26258")) {
                ae(h());
            }
        };
        const fe = function() {
            M(false);
        };
        const ge = ()=>{
            ne(false);
        };
        r("useWAWebOnUnmount")(function() {
            ie.current.cancel();
        });
        o("useWAWebListener").useListener(r("WAWebNoticeModel"), "change:noticeId", fe);
        o("useWAWebListener").useListener(r("WAWebNoticeModel"), [
            "change:banner",
            "change:blocking"
        ], pe);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "handle_low_storage_butter_bar", _e);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "on_notification_permission_change", function() {
            T(window.Notification.permission);
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "on_brigading_state_change_from_bridge", function(e) {
            Z(e);
        });
        o("useWAWebListener").useListener(r("WAWebL10N"), "locale_changed_on_phone", function({ currentLocale, newLocale }) {
            Q(newLocale !== currentLocale ? {
                detected: true,
                newLocale
            } : {
                detected: false
            });
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, [
            "offline_progress_update_from_bridge",
            "offline_delivery_end_from_bridge"
        ], function() {
            ue(o("WAWebOfflineHandler").OfflineMessageHandler.getResumeUIProgressBarType() === o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.ButterBar);
        });
        const he = null;
        const ye = n("cr:5735") != null && alertType != null ? c.jsx(n("cr:5735"), {
            alertType
        }) : null;
        const Component = r("WAWebLocaleManualUpdateButterbar.react");
        const Ce = K.detected ? <Component locale={K.newLocale} onVisibilityChange={V}/> : null;
        const Component_1 = r("WAWebBrigadingButterBar.react");
        const be = J != null ? <Component_1 state={J} onDismiss={function() {
            o("WAWebUserPrefsGeneral").clearBrigadingstate();
            Z(null);
        }} onVisibilityChange={z}/> : null;
        r("useWAWebButterbarVisibilityReport")(g({
            isBrigadingVisible,
            isLocaleUpdateVisible,
            isNoticeVisible,
            isPrimaryVisible,
            isSchemaOverrideVisible: he != null,
            isStorageWarningVisible: ye != null
        }), t_onVisibilityChange);
        const Component_2 = r("WAWebNoticeButterbar.react");
        const Component_3 = r("WAWebPrimaryButterbar.react");
        const Component_4 = r("WAWebVelocityTransitionGroup");
        return <Component_4 transitionName="butterbar" xstyle={m.container} testid="chat-butterbar">{be}{he}{ye}{Ce}<Component_2 shouldShow={shouldShow} banner={R} onVisibilityChange={W}/><Component_3 displayInfo={displayInfo} needsUpdate={needsUpdate} isHardRefresh={isHardRefresh} showResumeProgress={showResumeProgress} showNotify={showNotify} notifyPermission={notifyPermission} onShowNotifyDelay={onShowNotifyDelay} onRequestPermissions={onRequestPermissions} onEnableOfflineNotifications={MeComponent} onVisibilityChange={F}/></Component_4>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_onVisibilityChange = e.onVisibilityChange;
        let r;
        if (t[0] !== e_onVisibilityChange) {
            r = <_ onVisibilityChange={e_onVisibilityChange}/>;
            t[0] = e_onVisibilityChange;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function g(e) {
        return e.isPrimaryVisible || e.isNoticeVisible || e.isSchemaOverrideVisible || e.isStorageWarningVisible || e.isLocaleUpdateVisible || e.isBrigadingVisible;
    }
    function h() {
        const e = o("WAWebUserPrefsGeneral").getStorageAlert();
        if (e === o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT) {
            return null;
        }
        return e;
    }
    l.default = f;
}, 226);