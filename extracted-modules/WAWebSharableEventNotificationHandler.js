__d("WAWebSharableEventNotificationHandler", [
    "WALogger",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventNotificationConstants",
    "WAWebSharableEventResolveSender",
    "WAWebSharableEventShowNotificationBridge",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(event_status) {
        switch(event_status){
            case "ACTIVE":
                return o("WAWebSharableEventNotificationConstants").SharableEventStatus.Active;
            case "CANCELED":
                return o("WAWebSharableEventNotificationConstants").SharableEventStatus.Canceled;
            case "SUSPENDED":
                return o("WAWebSharableEventNotificationConstants").SharableEventStatus.Suspended;
            default:
                return null;
        }
    }
    function _(rsvp_status) {
        switch(rsvp_status){
            case "GOING":
                return o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.Going;
            case "MAYBE":
                return o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.Maybe;
            case "NOT_GOING":
                return o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.NotGoing;
            case "NO_RESPONSE":
                return o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.NoResponse;
            default:
                return null;
        }
    }
    function f(delete_reason) {
        switch(delete_reason){
            case "DELETED_BY_HOST":
                return o("WAWebSharableEventNotificationConstants").SharableEventDeleteReason.DeletedByHost;
            case "EXPIRED":
                return o("WAWebSharableEventNotificationConstants").SharableEventDeleteReason.Expired;
            default:
                return null;
        }
    }
    function g(reminder_type) {
        if (reminder_type === "EVENT_STARTED") {
            return o("WAWebSharableEventNotificationConstants").SharableEventReminderType.EventStarted;
        }
        return o("WAWebSharableEventNotificationConstants").SharableEventReminderType.EventStartingSoon;
    }
    function h(t, n, eventId) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][mex][",
                "] self-initiated-skip eventId=",
                ""
            ])), t, eventId);
            return true;
        }
        return false;
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ body, eventId, senderWid, title, type }) {
            yield o("WAWebSharableEventShowNotificationBridge").showSharableEventNotificationFromBackend({
                eventId,
                title,
                body,
                senderWidString: senderWid.toString()
            }, type);
        });
        return C.apply(this, arguments);
    }
    const b = 60;
    function v(startTsSec) {
        if (startTsSec == null) {
            return 0;
        }
        const t = Math.floor(Date.now() / 1000);
        const n = Math.max(0, startTsSec - t);
        return Math.floor(n / b);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ apply, extract, response, scope }) {
            if (!o("WAWebSharableEventGatingUtils").isSharableEventNotificationsEnabled()) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] notifications-disabled-ack-only"
                ])), scope);
                return;
            }
            const l = extract(response);
            if (l == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] response-extract-failed"
                ])), scope);
                return;
            }
            try {
                yield apply(l);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] apply eventId=",
                    ""
                ])), scope, l.eventId);
            } catch (error) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][mex][",
                    "] apply failed"
                ])), scope).catching(r("getErrorSafe")(error)).sendLogs("sharable-event-mex-apply-failed");
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return S({
                scope: "invite",
                response: t,
                extract: function(t) {
                    const eventId = t.xwa2_notify_event_on_invite?.event_id;
                    if (eventId == null) {
                        return null;
                    }
                    return {
                        eventId
                    };
                },
                apply: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {});
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            });
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return S({
                scope: "update",
                response: t,
                extract: function({ xwa2_notify_event_on_update }) {
                    return {
                        eventId: xwa2_notify_event_on_update.event_id,
                        eventName: xwa2_notify_event_on_update.event_name,
                        creatorLid: xwa2_notify_event_on_update.creator_lid,
                        eventStatus: p(xwa2_notify_event_on_update.event_status)
                    };
                },
                apply: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const e_eventName = e.eventName;
                        if (e.eventStatus === o("WAWebSharableEventNotificationConstants").SharableEventStatus.Suspended) {
                            yield o("WAWebSharableEventShowNotificationBridge").showSharableEventNotificationFromBackend({
                                eventId: e.eventId,
                                title: "",
                                body: {
                                    kind: "suspended"
                                },
                                senderWidString: null
                            }, o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Suspended);
                            return;
                        }
                        if (!(e.eventStatus !== o("WAWebSharableEventNotificationConstants").SharableEventStatus.Active || e_eventName == null)) {
                            const n = o("WAWebSharableEventResolveSender").normalizeSharableEventSenderLid(e.creatorLid);
                            if (!h("update", n, e.eventId)) {
                                yield y({
                                    type: o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Update,
                                    eventId: e.eventId,
                                    title: e_eventName,
                                    body: {
                                        kind: "update",
                                        eventName: e_eventName
                                    },
                                    senderWid: n
                                });
                            }
                        }
                    });
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            });
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return S({
                scope: "rsvp",
                response: t,
                extract: function({ xwa2_notify_event_on_rsvp }) {
                    return {
                        eventId: xwa2_notify_event_on_rsvp.event_id,
                        eventName: xwa2_notify_event_on_rsvp.event_name,
                        inviteeLid: xwa2_notify_event_on_rsvp.invitee_lid,
                        rsvpStatus: _(xwa2_notify_event_on_rsvp.rsvp_status)
                    };
                },
                apply: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const { eventName, rsvpStatus } = e;
                        if (!(eventName == null || rsvpStatus == null || rsvpStatus === o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.NoResponse)) {
                            const r = o("WAWebSharableEventResolveSender").normalizeSharableEventSenderLid(e.inviteeLid);
                            if (!h("rsvp", r, e.eventId)) {
                                yield y({
                                    type: o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Rsvp,
                                    eventId: e.eventId,
                                    title: eventName,
                                    body: {
                                        kind: "rsvp",
                                        eventName,
                                        rsvp: rsvpStatus
                                    },
                                    senderWid: r
                                });
                            }
                        }
                    });
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            });
        });
        return D.apply(this, arguments);
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return S({
                scope: "delete",
                response: t,
                extract: function({ xwa2_notify_event_on_delete }) {
                    return {
                        eventId: xwa2_notify_event_on_delete.event_id,
                        eventName: xwa2_notify_event_on_delete.event_name,
                        creatorLid: xwa2_notify_event_on_delete.creator_lid,
                        deleteReason: f(xwa2_notify_event_on_delete.delete_reason)
                    };
                },
                apply: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const e_eventName = e.eventName;
                        if (e_eventName != null) {
                            if (e.deleteReason === o("WAWebSharableEventNotificationConstants").SharableEventDeleteReason.Expired) {
                                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[sharable_event][mex][",
                                    "] expired-skip eventId=",
                                    ""
                                ])), "delete", e.eventId);
                                return;
                            }
                            const n = o("WAWebSharableEventResolveSender").normalizeSharableEventSenderLid(e.creatorLid);
                            if (!h("delete", n, e.eventId)) {
                                yield y({
                                    type: o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Delete,
                                    eventId: e.eventId,
                                    title: e_eventName,
                                    body: {
                                        kind: "delete",
                                        eventName: e_eventName
                                    },
                                    senderWid: n
                                });
                            }
                        }
                    });
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            });
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return S({
                scope: "reminder",
                response: t,
                extract: function({ xwa2_notify_event_on_reminder }) {
                    return {
                        eventId: xwa2_notify_event_on_reminder.event_id,
                        eventName: xwa2_notify_event_on_reminder.event_name,
                        startTsSec: xwa2_notify_event_on_reminder.start_ts_sec,
                        reminderType: g(xwa2_notify_event_on_reminder.reminder_type)
                    };
                },
                apply: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const { eventName, reminderType } = e;
                        if (!(eventName == null || reminderType == null)) {
                            yield o("WAWebSharableEventShowNotificationBridge").showSharableEventNotificationFromBackend({
                                eventId: e.eventId,
                                title: eventName,
                                body: {
                                    kind: "reminder",
                                    reminderType,
                                    minutesUntilStart: v(e.startTsSec)
                                },
                                senderWidString: null
                            }, o("WAWebSharableEventNotificationConstants").SharableEventNotificationType.Reminder);
                        }
                    });
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            });
        });
        return N.apply(this, arguments);
    }
    function M(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return S({
                scope: "invite-remove",
                response: t,
                extract: function({ xwa2_notify_event_on_invite_remove }) {
                    return {
                        eventId: xwa2_notify_event_on_invite_remove.event_id,
                        eventName: xwa2_notify_event_on_invite_remove.event_name,
                        inviteeLid: xwa2_notify_event_on_invite_remove.removed_lid
                    };
                },
                apply: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {});
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            });
        });
        return w.apply(this, arguments);
    }
    l.mexHandleSharableEventInviteNotification = L;
    l.mexHandleSharableEventUpdateNotification = k;
    l.mexHandleSharableEventRsvpNotification = T;
    l.mexHandleSharableEventDeleteNotification = x;
    l.mexHandleSharableEventReminderNotification = P;
    l.mexHandleSharableEventInviteRemoveNotification = M;
}, 98);