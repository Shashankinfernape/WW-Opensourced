__d("WAWebQuickActionLogging", [
    "WAWebWamEnumWebcQuickActionEventType",
    "WAWebWamEnumWebcQuickActionId",
    "WAWebWamEnumWebcQuickActionSurface",
    "WAWebWebcQuickActionWamEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {
        status: (e = o("WAWebWamEnumWebcQuickActionSurface")).WEBC_QUICK_ACTION_SURFACE.STATUS,
        channels: e.WEBC_QUICK_ACTION_SURFACE.CHANNELS,
        community_navigation: e.WEBC_QUICK_ACTION_SURFACE.COMMUNITY_NAVIGATION,
        chats: e.WEBC_QUICK_ACTION_SURFACE.CHATS,
        calls: e.WEBC_QUICK_ACTION_SURFACE.CALLS
    };
    const c = {
        text_status: (s = o("WAWebWamEnumWebcQuickActionId")).WEBC_QUICK_ACTION_ID.TEXT_STATUS,
        photo_video: s.WEBC_QUICK_ACTION_ID.PHOTO_VIDEO,
        create_channel: s.WEBC_QUICK_ACTION_ID.CREATE_CHANNEL,
        find_channels: s.WEBC_QUICK_ACTION_ID.FIND_CHANNELS,
        community_info: s.WEBC_QUICK_ACTION_ID.COMMUNITY_INFO,
        community_members: s.WEBC_QUICK_ACTION_ID.COMMUNITY_MEMBERS,
        community_settings: s.WEBC_QUICK_ACTION_ID.COMMUNITY_SETTINGS,
        community_new_group: s.WEBC_QUICK_ACTION_ID.COMMUNITY_NEW_GROUP,
        community_add_existing_group: s.WEBC_QUICK_ACTION_ID.COMMUNITY_EXISTING_GROUP,
        send_document: s.WEBC_QUICK_ACTION_ID.SEND_DOCUMENT,
        add_contact: s.WEBC_QUICK_ACTION_ID.ADD_CONTACT,
        ask_meta_ai: s.WEBC_QUICK_ACTION_ID.ASK_META_AI,
        start_call: s.WEBC_QUICK_ACTION_ID.START_CALL,
        go_to_calls: s.WEBC_QUICK_ACTION_ID.GO_TO_CALLS,
        new_call_link: s.WEBC_QUICK_ACTION_ID.NEW_CALL_LINK,
        open_dialer: s.WEBC_QUICK_ACTION_ID.OPEN_DIALER,
        schedule_call: s.WEBC_QUICK_ACTION_ID.SCHEDULE_CALL
    };
    const d = false;
    const m = new Set;
    const p = new Set;
    function _(e, t) {
        return `${e}:${t}`;
    }
    function f(e, t) {
        if (!m.has(e)) {
            m.add(e);
            const n = new (o("WAWebWebcQuickActionWamEvent")).WebcQuickActionWamEvent;
            n.webcQuickActionEventType = o("WAWebWamEnumWebcQuickActionEventType").WEBC_QUICK_ACTION_EVENT_TYPE.SURFACE_VIEW;
            n.webcQuickActionSurface = u[e];
            n.webcQuickActionNumVisible = t;
            n.webcQuickActionIsCustomized = d;
            n.commit();
        }
    }
    function g({ actionId, numActionsVisible, slotPosition, surface }) {
        b(surface, actionId, slotPosition, numActionsVisible);
    }
    function h(e, t) {
        b(e, t, null, null);
    }
    function y(e, t, n, r) {
        v(e, t, n, r);
    }
    function C(e, t) {
        v(e, t, null, null);
    }
    function b(e, t, n, r) {
        const a = _(e, t);
        if (!p.has(a)) {
            p.add(a);
            const i = new (o("WAWebWebcQuickActionWamEvent")).WebcQuickActionWamEvent;
            i.webcQuickActionEventType = o("WAWebWamEnumWebcQuickActionEventType").WEBC_QUICK_ACTION_EVENT_TYPE.IMPRESSION;
            i.webcQuickActionSurface = u[e];
            i.webcQuickActionId = c[t];
            if (n != null) {
                i.webcQuickActionSlotPosition = n;
            }
            if (r != null) {
                i.webcQuickActionNumVisible = r;
            }
            i.webcQuickActionIsCustomized = d;
            i.commit();
        }
    }
    function v(e, t, n, r) {
        const a = new (o("WAWebWebcQuickActionWamEvent")).WebcQuickActionWamEvent;
        a.webcQuickActionEventType = o("WAWebWamEnumWebcQuickActionEventType").WEBC_QUICK_ACTION_EVENT_TYPE.TAP;
        a.webcQuickActionSurface = u[e];
        a.webcQuickActionId = c[t];
        if (n != null) {
            a.webcQuickActionSlotPosition = n;
        }
        if (r != null) {
            a.webcQuickActionNumVisible = r;
        }
        a.webcQuickActionIsCustomized = d;
        a.commit();
    }
    l.logQuickActionSurfaceView = f;
    l.logQuickActionImpression = g;
    l.logQuickActionCtaImpression = h;
    l.logQuickActionTap = y;
    l.logQuickActionCtaTap = C;
}, 98);