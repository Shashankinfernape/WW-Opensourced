__d("WAWebNotificationManager.react", [
    "WAWebAppContext.react",
    "WAWebCallNotificationBus",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebNavBarTypes",
    "WAWebNewsletterChatListUtils",
    "WAWebNotificationBackend",
    "WAWebNotificationIcon",
    "WAWebNotificationsCallNotification",
    "WAWebStreamGetters",
    "WAWebStreamModel",
    "WAWebVoipInitEventEmitter",
    "cr:8852",
    "react",
    "react-compiler-runtime",
    "useWAWebChatListChannelsListener",
    "useWAWebHatchApprovalNotifications",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useRef } = u;
    const m = n("cr:8852") ?? {};
    const m_WATaskbarController = m.WATaskbarController;
    function _() {
        const e = o("react-compiler-runtime").c(6);
        const tRef = useRef(null);
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = function() {
                let e;
                if (o("WAWebStreamGetters").getDisplayInfo(o("WAWebStreamModel").Stream) === o("WAWebStreamModel").StreamInfo.OFFLINE && !r("WAWebEnvironment").isWindows) {
                    e = -1;
                } else {
                    e = o("WAWebChatCollection").ChatCollection.getUnreadCount() + o("WAWebNewsletterChatListUtils").getChannelsTitleUnreadCount();
                }
                if (tRef.current !== e) {
                    tRef.current = e;
                    o("WAWebNotificationIcon").setTitleAndIcon(e);
                    if (m_WATaskbarController != null) {
                        m_WATaskbarController.UpdateTaskbarBadge(e);
                    }
                }
            };
            e[0] = n;
        } else {
            n = e[0];
        }
        const a = n;
        let i;
        let l;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = function() {
                a();
            };
            l = [];
            e[1] = i;
            e[2] = l;
        } else {
            i = e[1];
            l = e[2];
        }
        useEffect(i, l);
        o("useWAWebHatchApprovalNotifications").useWAWebHatchApprovalNotifications();
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "alert_new_msg", h);
        o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "alert_call", o("WAWebNotificationsCallNotification").showCallNotification);
        o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "cancel_call", g);
        o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "missed_call", o("WAWebNotificationsCallNotification").showMissedCallNotification);
        o("useWAWebListener").useListener(o("WAWebVoipInitEventEmitter").VoipInitEventEmitter, "voipInitSuccess", o("WAWebNotificationsCallNotification").preloadCallNotificationBadge);
        let s;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            s = [];
            e[3] = s;
        } else {
            s = e[3];
        }
        useEffect(f, s);
        let u;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                "add",
                "remove",
                "reset",
                "change:showUnreadInTitle"
            ];
            e[4] = u;
        } else {
            u = e[4];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, u, a);
        r("useWAWebChatListChannelsListener")("add remove reset change:showUnreadInTitle change:archive", a);
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:unreadCount", o("WAWebNotificationBackend").closeNotifications);
        let m;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                "change:info",
                "change:obscurity",
                "change:hasSynced"
            ];
            e[5] = m;
        } else {
            m = e[5];
        }
        o("useWAWebListener").useListener(o("WAWebStreamModel").Stream, m, a);
        const _ = o("WAWebAppContext.react").useAppContext();
        o("WAWebNotificationBackend").setAppContext(function() {
            return {
                isChatsSurfaceActive: _.activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Chats
            };
        });
        return null;
    }
    function f() {
        if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
            o("WAWebNotificationsCallNotification").preloadCallNotificationBadge();
        }
    }
    function g(e) {
        return o("WAWebNotificationsCallNotification").cancelCallNotification(e.wid, e.msgId);
    }
    function h(e) {
        return o("WAWebNotificationBackend").showMsgNotification(e);
    }
    l.default = _;
}, 98);