__d("WAWebSharableEventNotificationStrings", [
    "fbt",
    "WAWebSharableEventNotificationConstants"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        return ((e)=>{
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.kind === "update" && "eventName" in e) {
                const t = e.eventName;
                return c(t);
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.kind === "delete" && "eventName" in e) {
                const n = e.eventName;
                return d(n);
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.kind === "suspended") {
                return u();
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.kind === "rsvp" && "rsvp" in e && "eventName" in e) {
                const { rsvp, eventName } = e;
                return m(rsvp, eventName);
            }
            if ((typeof e === "object" && e !== null || typeof e === "function") && e.kind === "reminder" && "reminderType" in e && "minutesUntilStart" in e) {
                const { reminderType, minutesUntilStart } = e;
                return p(reminderType, minutesUntilStart);
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })(e);
    }
    function u() {
        return s._("Your event has been suspended for violating our policies").toString();
    }
    function c(e) {
        return s._("updated 🗓 {eventName}", [
            s._param("eventName", e)
        ]).toString();
    }
    function d(e) {
        return s._("canceled 🗓 {eventName}", [
            s._param("eventName", e)
        ]).toString();
    }
    function m(e, t) {
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.Going) {
            return s._("🗓 Going to {eventName}", [
                s._param("eventName", t)
            ]).toString();
        }
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.Maybe) {
            return s._("🗓 Maybe going to {eventName}", [
                s._param("eventName", t)
            ]).toString();
        }
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.NotGoing) {
            return s._("🗓 Not going to {eventName}", [
                s._param("eventName", t)
            ]).toString();
        }
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventNotificationRsvpStatus.NoResponse) {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function p(e, t) {
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventReminderType.EventStarted) {
            return s._("🗓 starts now").toString();
        }
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventReminderType.EventStartingSoon) {
            return _(o("WAWebSharableEventNotificationConstants").nearestReminderBucket(t));
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function _(e) {
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventReminderLeadTimeBucket.FifteenMinutes) {
            return f(15);
        }
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventReminderLeadTimeBucket.ThirtyMinutes) {
            return f(30);
        }
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventReminderLeadTimeBucket.OneHour) {
            return s._("🗓 starts in 1 hour").toString();
        }
        if (e === o("WAWebSharableEventNotificationConstants").SharableEventReminderLeadTimeBucket.OneDay) {
            return s._("🗓 starts in 1 day").toString();
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function f(e) {
        return s._("🗓 starts in {minutes} min", [
            s._param("minutes", e)
        ]).toString();
    }
    l.formatSharableEventBody = e;
    l.updateNotificationBody = c;
    l.deleteNotificationBody = d;
    l.rsvpHostNotificationBody = m;
    l.reminderNotificationBody = p;
}, 226);