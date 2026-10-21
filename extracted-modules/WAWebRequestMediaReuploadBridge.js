__d("WAWebRequestMediaReuploadBridge", [
    "WAWebProtobufsMmsRetry.pb",
    "WAWebRequestMediaReuploadManager"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebRequestMediaReuploadManager").RequestMediaReuploadManager.requestMediaReupload(e).then(({ directPath, result })=>({
                status: s(result),
                directPath,
                isMD: true
            }));
    }
    function s(result) {
        if (result != null) {
            switch(result){
                case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.SUCCESS:
                    return 200;
                case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.NOT_FOUND:
                case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.DECRYPTION_ERROR:
                    return 404;
                case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.GENERAL_ERROR:
                    return 500;
            }
        }
        return 500;
    }
    l.default = e;
}, 98);