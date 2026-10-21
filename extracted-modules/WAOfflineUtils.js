__d("WAOfflineUtils", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "INIT",
        "OFFLINE_RESUME",
        "ONLINE"
    ]);
    const l = n("$InternalEnum")({
        Initializing: "initializing",
        Failed: "failed",
        Processing: "processing",
        Complete: "complete"
    });
    i.ServerRPCMode = e;
    i.WAClientInfraOfflineProgress = l;
}, 66);