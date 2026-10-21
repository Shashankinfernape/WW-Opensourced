__d("WAWebSyncdRequestBuilderTypesConverter", [
    "WAWebProtobufSyncAction.pb",
    "decodeProtobuf",
    "encodeProtobuf",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, operation) {
        return e.map((e)=>{
            const value = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, e.binarySyncData).value;
            const binarySyncAction = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, r("nullthrows")(value)).readBuffer();
            return {
                collection: e.collection,
                index: e.index,
                binarySyncAction,
                operation,
                version: e.version,
                timestamp: e.timestamp,
                action: e.action
            };
        });
    }
    l.syncActionsToPendingMutations = e;
}, 98);