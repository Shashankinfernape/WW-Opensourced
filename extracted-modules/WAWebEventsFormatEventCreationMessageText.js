__d("WAWebEventsFormatEventCreationMessageText", [
    "fbt",
    "WAWebFormatEventDateString",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg, options }) {
        const a = r("nullthrows")(o("WAWebFrontendMsgGetters").getAsEventCreation(msg));
        if (options.formatAsLastMsg === true) {
            if (o("WAWebMsgGetters").getIsSentByMe(msg)) {
                return s._("created an event: {event-name}", [
                    s._param("event-name", a.eventName)
                ]);
            }
            return s._("invited you to an event: {event-name}", [
                s._param("event-name", a.eventName)
            ]);
        }
        const a_eventStartTime = a.eventStartTime;
        if (a_eventStartTime) {
            return s._("{event-name} • {event-time}", [
                s._param("event-name", a.eventName),
                s._param("event-time", o("WAWebFormatEventDateString").getEventDateStringFor(a_eventStartTime))
            ]);
        }
        return a.eventName;
    }
    l.default = e;
}, 226);