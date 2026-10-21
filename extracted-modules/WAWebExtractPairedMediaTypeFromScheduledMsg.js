__d("WAWebExtractPairedMediaTypeFromScheduledMsg", [
    "WAWebGetScheduledMsgContextInfo",
    "WAWebPairedMediaTypeProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebGetScheduledMsgContextInfo").getScheduledMsgContextInfo(e);
        if (t == null) {
            return {};
        }
        const pairedMediaType = o("WAWebPairedMediaTypeProtoUtils").pairedMediaTypeFromProto(t.pairedMediaType);
        if (pairedMediaType != null) {
            return {
                pairedMediaType
            };
        }
        return {};
    }
    l.extractPairedMediaTypeFromScheduledMsg = e;
}, 98);