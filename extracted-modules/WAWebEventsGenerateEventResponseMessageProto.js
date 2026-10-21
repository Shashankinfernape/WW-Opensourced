__d("WAWebEventsGenerateEventResponseMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const encEventResponseMessage = {
            eventCreationMessageKey: o("WAWebE2EProtoUtils").encodeKey(json.targetMessageKey),
            encPayload: json.encPayload,
            encIv: json.encIv
        };
        return {
            encEventResponseMessage
        };
    }
    l.default = e;
}, 98);