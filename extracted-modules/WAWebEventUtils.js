__d("WAWebEventUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebABProps",
    "WAWebEventResponseCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return o("WATimeUtils").castToUnixTime(Math.min(o("WATimeUtils").MAX_INT, e));
    }
    function c(e, t) {
        if (t != null && t !== 0) {
            return !o("WATimeUtils").isInFuture(u(t));
        }
        return !o("WATimeUtils").isInFuture(u(e));
    }
    function d(e) {
        const t = u(e);
        if (o("WATimeUtils").isInFuture(t)) {
            return o("WATimeUtils").secondsUntil(t) < 1800;
        }
        return o("WATimeUtils").unixTime() - t < 1440 * 60;
    }
    function m({ eventInvalidated, isEventCanceled, isEventPassed, isSentByMe }) {
        return eventInvalidated || isEventCanceled || isEventPassed && !isSentByMe;
    }
    function p(e) {
        const t = o("WATimeUtils").unixTime();
        const n = 1800;
        const r = 1440 * 60;
        let a = r;
        if (e != null && e > 0) {
            a = Math.max(60, Math.floor(e / 2));
        }
        const i = t + a;
        if (a >= n) {
            return o("WATimeUtils").castToUnixTime(Math.ceil(i / n) * n);
        }
        return o("WATimeUtils").castToUnixTime(i);
    }
    function _(e, t) {
        const n = 3600;
        const r = e + 2 * n;
        if (t != null && r > t) {
            return o("WATimeUtils").castToUnixTime(Math.max(e, t));
        }
        return o("WATimeUtils").castToUnixTime(r);
    }
    function f(e, t) {
        const n = r("WAWeb-moment")().format("YYYY-MM-DD");
        const a = e ? r("WAWeb-moment")().add(1, "year") : r("WAWeb-moment").unix(o("WATimeUtils").MAX_INT).subtract(2, "day");
        const i = t != null && t > 0 ? r("WAWeb-moment")().add(t, "seconds") : null;
        const l = i != null && i.isBefore(a) ? i : a;
        const s = l.format("YYYY-MM-DD");
        return [
            n,
            s
        ];
    }
    function g(e) {
        if (e != null) {
            if (e.includes("/video/")) {
                return "video";
            }
            return "voice";
        }
    }
    function h(e) {
        return g(e) === "video";
    }
    function y(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) {
            return false;
        }
        const t = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
        return !(t == null || t.isEventCanceled === true);
    }
    function C(e) {
        const t = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
        if (t == null) {
            return null;
        }
        return t.eventEndTime ?? (t.eventStartTime != null ? t.eventStartTime + 1800 : null);
    }
    function b(e, t) {
        const n = C(e);
        if (n == null) {
            return true;
        }
        return n <= t;
    }
    function v(e, t) {
        if (y(e)) {
            return !b(e, t);
        }
        return false;
    }
    function S(e) {
        try {
            const n = o("WAWebEventResponseCollection").EventResponseCollection.getModelsArray();
            const r = n.filter((t)=>t.parentMsgKey?.equals(e.id));
            const a = r.find((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e.sender));
            return a?.eventResponse ?? o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN;
        } catch (e) {
            return o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN;
        }
    }
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = o("WATimeUtils").unixTime();
                const n = o("WAWebABProps").getABPropConfigValue("schedule_call_show_upcoming_banner_time_interval_mins");
                const r = n * 60;
                const a = o("WAWebMsgCollection").MsgCollection.getModelsArray();
                const i = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getModelsArray();
                const l = a.filter((e)=>{
                    if (!v(e, t)) {
                        return false;
                    }
                    const n = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
                    if (n == null || n.eventJoinLink == null) {
                        return false;
                    }
                    if (n.eventStartTime != null) {
                        const a = n.eventStartTime - t;
                        if (a > r) {
                            return false;
                        }
                    }
                    const n_eventJoinLink = n.eventJoinLink;
                    const s = i.some((e)=>{
                        if (!o("WAWebMsgGetters").getIsCallLink(e)) {
                            return false;
                        }
                        const t = o("WAWebMsgGetters").getCallLinkToken(e);
                        if (t == null) {
                            return false;
                        }
                        return n_eventJoinLink.includes(t);
                    });
                    if (s) {
                        return false;
                    }
                    const u = S(e);
                    return u !== o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING;
                }).sort((e, t)=>{
                    const a = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
                    const i = o("WAWebFrontendMsgGetters").getAsEventCreation(t);
                    const l = a?.eventStartTime ?? 0;
                    const s = i?.eventStartTime ?? 0;
                    return l - s;
                });
                return l;
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to fetch upcoming events: ",
                    ""
                ])), String(error));
                return [];
            }
        });
        return L.apply(this, arguments);
    }
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = o("WATimeUtils").unixTime();
                const t = o("WAWebMsgCollection").MsgCollection.getModelsArray();
                const n = t.filter((t)=>{
                    if (!v(t, e)) {
                        return false;
                    }
                    const n = o("WAWebFrontendMsgGetters").getAsEventCreation(t);
                    return !(n == null || n.eventJoinLink == null);
                }).sort((e, t)=>{
                    const a = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
                    const i = o("WAWebFrontendMsgGetters").getAsEventCreation(t);
                    const l = a?.eventStartTime ?? 0;
                    const s = i?.eventStartTime ?? 0;
                    return l - s;
                });
                return n;
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to fetch upcoming events: ",
                    ""
                ])), String(error));
                return [];
            }
        });
        return k.apply(this, arguments);
    }
    l.eventTimeToUnixTime = u;
    l.shouldShowEventAsPassed = c;
    l.eventIsJoinable = d;
    l.shouldDisableInteractionForEvent = m;
    l.getInitialEventStartTime = p;
    l.getInitialEventEndTime = _;
    l.getEventDateBoundaries = f;
    l.getEventCallLinkType = g;
    l.isEventVideoCallLink = h;
    l.getUpcomingEventsForCallsTab = R;
    l.getUpcomingEvents = E;
}, 98);