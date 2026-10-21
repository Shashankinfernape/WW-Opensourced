__d("WAWebEventsGenerateEventCreationMessageProto", [], function(t, n, r, o, a, i) {
    function e({ contextInfo, json }) {
        const eventMessage = {
            description: json.eventDescription,
            isCanceled: json.isEventCanceled,
            location: json.eventLocation,
            name: json.eventName,
            startTime: json.eventStartTime,
            endTime: json.eventEndTime,
            joinLink: json.eventJoinLink,
            contextInfo: contextInfo ?? undefined,
            isScheduleCall: json.eventIsScheduledCall ?? undefined
        };
        return {
            eventMessage
        };
    }
    i.default = e;
}, 66);