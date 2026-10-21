__d("useWAWebNotificationsOptInModalTriggers", [
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebModalManager",
    "WAWebNotificationsMissedCallTracker",
    "WAWebNotificationsModalVariant",
    "WAWebNotificationsOptInGating",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebOpenNotificationsOptInModal",
    "WAWebUserPrefsNotifications",
    "WAWebWhatsNewGatingUtils",
    "WAWebWhatsNewNux",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d() {
        m();
        useF();
        g();
    }
    function m() {
        const e = o("react-compiler-runtime").c(3);
        const t = r("useLazyRef")(p);
        let n;
        let a;
        if (e[0] !== t) {
            n = function() {
                if (o("WAWebNotificationsOptInGating").isNotificationsOptInEligible(window.Notification?.permission)) {
                    const n = t.current;
                    n.onOrBefore(o("WAWebNotificationsModalVariant").POST_LOAD_OPT_IN_DELAY_MS, undefined);
                    return function() {
                        n.cancel();
                    };
                }
            };
            a = [
                t
            ];
            e[0] = t;
            e[1] = n;
            e[2] = a;
        } else {
            n = e[1];
            a = e[2];
        }
        useEffect(n, a);
    }
    function p() {
        return new (o("WAShiftTimer")).ShiftTimer(_);
    }
    function _() {
        if (o("WAWebNotificationsOptInGating").isNotificationsOptInEligible(window.Notification?.permission) && o("WAWebNotificationsOptInGating").shouldShowOptInModalNow()) {
            if (!(o("WAWebWhatsNewGatingUtils").isWhatsNewAutoModalEnabled() && o("WAWebWhatsNewNux").shouldShowWhatsNewNux(o("WAWebWhatsNewGatingUtils").getWhatsNewAutoModalCooldownDays()))) {
                if (o("WAWebNotificationsModalVariant").getNotificationsModalVariant() === o("WAWebNotificationsModalVariant").NotificationsModalVariant.TimeBased) {
                    C(o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.PostLoad);
                }
            }
        }
    }
    function useF() {
        const e = o("react-compiler-runtime").c(1);
        const tRef = useRef(null);
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = function() {
                if (o("WAWebNotificationsOptInGating").isNotificationsOptInEligible(window.Notification?.permission)) {
                    if (document.visibilityState === "hidden") {
                        tRef.current = o("WAWebChatCollection").ChatCollection.getUnreadCount();
                        return;
                    }
                    const n = tRef.current;
                    tRef.current = null;
                    const a = o("WAWebChatCollection").ChatCollection.getUnreadCount();
                    const i = o("WAWebNotificationsModalVariant").getNotificationsModalVariant();
                    const l = o("WAWebNotificationsModalVariant").shouldShowReturnToUnreadOptInModal({
                        variant: i,
                        hasNewUnreadWhileHidden: n != null && a > n,
                        hasOptInNuxBeenShown: !o("WAWebNotificationsOptInGating").shouldShowOptInModalNow()
                    });
                    if (l) {
                        C(o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedMessages, a - r("nullthrows")(n));
                    }
                }
            };
            e[0] = n;
        } else {
            n = e[0];
        }
        o("useWAWebListener").useListener(document, "visibilitychange", n);
    }
    function g() {
        o("useWAWebListener").useListener(document, "visibilitychange", h);
    }
    function h() {
        if (!document.hidden && o("WAWebNotificationsOptInGating").isNotificationsOptInEligible(window.Notification?.permission)) {
            const t = o("WAWebNotificationsModalVariant").getNotificationsModalVariant();
            const n = o("WAWebNotificationsModalVariant").shouldShowAfterMissedCallOptInModal({
                variant: t,
                getHasRecentMissedCallWhileHidden,
                hasOptInNuxBeenShown: !o("WAWebNotificationsOptInGating").shouldShowOptInModalNow()
            });
            if (n) {
                C(o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedCall);
            }
        }
    }
    function getHasRecentMissedCallWhileHidden() {
        return o("WAWebNotificationsMissedCallTracker").consumeRecentMissedCallWhileHidden(o("WATimeUtils").unixTime());
    }
    function C(e, missedCount) {
        o("WAWebModalManager").ModalManager.exists(function(n) {
            if (!n) {
                o("WAWebOpenNotificationsOptInModal").openNotificationsOptInModal(o("WAWebABProps").getABPropConfigValue("web_notifications_banner_new_logic_enabled"), e, {
                    missedCount,
                    onModalResolved: function() {
                        o("WAWebNuxAction").viewNux(o("WAWebNux").NUX.NOTIFICATIONS_OPT_IN);
                        o("WAWebUserPrefsNotifications").recordOptInModalShown();
                    }
                });
            }
        });
    }
    l.default = d;
}, 98);