__d("WAWebGenerateEncCommentMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        return {
            encCommentMessage: {
                targetMessageKey: o("WAWebE2EProtoUtils").encodeKey(json.targetMessageKey),
                encIv: json.encIv,
                encPayload: json.encPayload
            }
        };
    }
    l.default = e;
}, 98);