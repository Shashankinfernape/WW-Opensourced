__d("WASmaxInUserNoticeUserNoticeServerError", [
    "WAResultOrError",
    "WASmaxInUserNoticeIQErrorInternalServerErrorMixin",
    "WASmaxInUserNoticeIQErrorRateOverlimitMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInUserNoticeIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: t.value
            });
        }
        const n = o("WASmaxInUserNoticeIQErrorRateOverlimitMixin").parseIQErrorRateOverlimitMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorInternalServerError",
            "IQErrorRateOverlimit"
        ], [
            t,
            n
        ]);
    }
    l.parseUserNoticeServerError = e;
}, 98);