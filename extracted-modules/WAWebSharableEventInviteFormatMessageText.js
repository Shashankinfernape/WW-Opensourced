__d("WAWebSharableEventInviteFormatMessageText", [
    "fbt",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebSharableEventInviteCoerceTimestampSeconds",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg, options }) {
        const a = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsSharableEventInvite(msg));
        if (options.formatAsLastMsg === true) {
            if (o("WAWebMsgGetters").getIsSentByMe(msg)) {
                return s._("sent an event invitation: {event-title}", [
                    s._param("event-title", a.sharableEventInviteTitle)
                ]);
            }
            return s._("invited you to an event: {event-title}", [
                s._param("event-title", a.sharableEventInviteTitle)
            ]);
        }
        const i = r("WAWebSharableEventInviteCoerceTimestampSeconds")(a.sharableEventInviteStartTime);
        if (i != null) {
            return s._("{event-title} • {event-time}", [
                s._param("event-title", a.sharableEventInviteTitle),
                s._param("event-time", o("WAWebFormatEventDateString").getEventDateStringFor(i))
            ]);
        }
        return a.sharableEventInviteTitle;
    }
    l.default = e;
}, 226);