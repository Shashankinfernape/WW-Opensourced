__d("WAWebNotificationsModalVariant", [
    "$InternalEnum",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        Banner: 0,
        TimeBased: 1,
        EventBased: 2
    });
    const s = n("$InternalEnum")({
        PostLoad: "post_load",
        MissedMessages: "missed_messages",
        MissedCall: "missed_call"
    });
    function u() {
        return e.cast(o("WAWebABProps").getABPropConfigValue("wa_web_notifications_modal_variants")) ?? e.Banner;
    }
    function c() {
        return u() !== e.Banner;
    }
    const d = 180 * 1000;
    function m({ hasNewUnreadWhileHidden, hasOptInNuxBeenShown, variant }) {
        return variant === e.EventBased && hasNewUnreadWhileHidden && !hasOptInNuxBeenShown;
    }
    function p({ getHasRecentMissedCallWhileHidden, hasOptInNuxBeenShown, variant }) {
        return variant === e.EventBased && !hasOptInNuxBeenShown && getHasRecentMissedCallWhileHidden();
    }
    l.NotificationsModalVariant = e;
    l.NotificationsOptInModalCopy = s;
    l.getNotificationsModalVariant = u;
    l.isNotificationsOptInModalVariant = c;
    l.POST_LOAD_OPT_IN_DELAY_MS = d;
    l.shouldShowReturnToUnreadOptInModal = m;
    l.shouldShowAfterMissedCallOptInModal = p;
}, 98);