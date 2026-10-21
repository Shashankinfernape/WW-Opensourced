__d("WAWebSharableEventNotificationConstants", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    let e;
    const l = (e = n("$InternalEnum")).Mirrored([
        "Invite",
        "Update",
        "Rsvp",
        "Delete",
        "Reminder",
        "InviteRemove",
        "Suspended"
    ]);
    const s = e.Mirrored([
        "EventStartingSoon",
        "EventStarted"
    ]);
    const u = e.Mirrored([
        "FifteenMinutes",
        "ThirtyMinutes",
        "OneHour",
        "OneDay"
    ]);
    function c(e) {
        if (e <= 22) {
            return u.FifteenMinutes;
        }
        if (e <= 45) {
            return u.ThirtyMinutes;
        }
        if (e <= 720) {
            return u.OneHour;
        }
        return u.OneDay;
    }
    const d = e.Mirrored([
        "Going",
        "Maybe",
        "NotGoing",
        "NoResponse"
    ]);
    const m = e.Mirrored([
        "Active",
        "Canceled",
        "Suspended"
    ]);
    const p = e.Mirrored([
        "DeletedByHost",
        "Expired"
    ]);
    const _ = new Set([
        l.Update,
        l.Rsvp,
        l.Delete
    ]);
    function f(e) {
        return _.has(e);
    }
    function g(e) {
        if (e === l.Invite) {
            return "invite";
        }
        if (e === l.Update) {
            return "update";
        }
        if (e === l.Rsvp) {
            return "rsvp";
        }
        if (e === l.Delete) {
            return "delete";
        }
        if (e === l.Reminder) {
            return "reminder";
        }
        if (e === l.InviteRemove) {
            return "inviteRemove";
        }
        if (e === l.Suspended) {
            return "suspended";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    i.SharableEventNotificationType = l;
    i.SharableEventReminderType = s;
    i.SharableEventReminderLeadTimeBucket = u;
    i.nearestReminderBucket = c;
    i.SharableEventNotificationRsvpStatus = d;
    i.SharableEventStatus = m;
    i.SharableEventDeleteReason = p;
    i.isSenderAttributed = f;
    i.getIdentifierTag = g;
}, 66);