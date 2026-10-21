__d("WAWebVoipJsonParserPayloads", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "Call",
        "JoinableCall"
    ]);
    const l = n("$InternalEnum")({
        Create: 1,
        Update: 2,
        Delete: 3
    });
    i.FieldstatsPayloadType = e;
    i.UpdateJoinableCallLogType = l;
}, 66);