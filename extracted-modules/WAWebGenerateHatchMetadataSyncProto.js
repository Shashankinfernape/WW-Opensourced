__d("WAWebGenerateHatchMetadataSyncProto", [
    "WAWebGenerateHatchProtocolMessage",
    "cr:7454",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ json }) {
        const json_hatchMetadataSync = json.hatchMetadataSync;
        if (json_hatchMetadataSync == null || json_hatchMetadataSync.type !== "req") {
            throw r("err")("Missing req-typed hatchMetadataSync for hatch_metadata_sync message");
        }
        const l = o("WAWebGenerateHatchProtocolMessage").generateHatchProtocolMessage(json_hatchMetadataSync);
        const s = l.protocolMessage?.aiMetadataOperation?.hatchMetadataSync?.data;
        if (s != null) {
            if (n("cr:7454") != null) {
                n("cr:7454").recordOutbound(json_hatchMetadataSync.request, json_hatchMetadataSync.requestId, s);
            }
        }
        return l;
    }
    l.default = e;
}, 98);