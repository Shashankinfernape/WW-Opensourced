__d("WAWebSharableEventGatingUtils", [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e = n("$InternalEnum"))({
        Futureproof: 0,
        FutureproofCustomText: 1,
        FullBubble: 2
    });
    function u() {
        return o("WAWebABProps").getABPropConfigValue("events_v2_invitation_message_version");
    }
    function c() {
        return u() > Number(s.Futureproof);
    }
    function d() {
        return u() >= Number(s.FullBubble);
    }
    const m = e({
        MessageBubble: 1,
        MessageContextMenu: 2,
        EventDetails: 4,
        RsvpConfirmation: 8
    });
    function p(e) {
        const t = Number(e);
        const n = o("WAWebABProps").getABPropConfigValue("enable_events_v2_add_to_calendar");
        return Math.floor(n / t) % 2 === 1;
    }
    const _ = e({
        EventsList: 1,
        IndividualChatAttachmentTray: 2,
        GroupChatAttachmentTray: 4,
        NewChat: 8,
        IndividualChatDateDetector: 16,
        GroupChatDateDetector: 32
    });
    function f(e) {
        const t = Number(e);
        const n = o("WAWebABProps").getABPropConfigValue("enable_events_v2_entry_points_creation");
        return Math.floor(n / t) % 2 === 1;
    }
    const g = e({
        EventsList: 1,
        CallsTabHScroll: 2,
        NewCallPicker: 4,
        GroupChat: 8,
        IndividualChat: 16
    });
    function h(e) {
        const t = Number(e);
        const n = o("WAWebABProps").getABPropConfigValue("enable_scheduled_calls_v2_entry_points_creation");
        return Math.floor(n / t) % 2 === 1;
    }
    function y() {
        return o("WAWebABProps").getABPropConfigValue("events_v2_enable_notifications") === true;
    }
    function C() {
        return o("WAWebABProps").getABPropConfigValue("enable_events_v2_on_companion") === true;
    }
    function b() {
        return o("WAWebABProps").getABPropConfigValue("enable_events_v2_invite_message_with_datetime") === true;
    }
    function v(e, t) {
        const n = o("WATimeUtils").unixTime();
        if (t != null && n > t) {
            return true;
        }
        if (e == null) {
            return false;
        }
        const r = o("WAWebABProps").getABPropConfigValue("events_v2_hide_add_to_calendar_post_start_window_sec");
        return n >= e + r;
    }
    l.SharableEventInviteReceivingVersion = s;
    l.isSharableEventInviteReceiveEnabled = c;
    l.shouldRenderSharableEventInviteBubble = d;
    l.SharableEventAddToCalendarEntryPoint = m;
    l.isSharableEventAddToCalendarEnabled = p;
    l.SharableEventCreationEntryPoint = _;
    l.isSharableEventCreationEnabled = f;
    l.SharableScheduledCallCreationEntryPoint = g;
    l.isSharableScheduledCallCreationEnabled = h;
    l.isSharableEventNotificationsEnabled = y;
    l.isEventsV2OnCompanionEnabled = C;
    l.isSharableEventInviteDatetimeEnabled = b;
    l.isAddToCalendarHiddenByEventTime = v;
}, 98);