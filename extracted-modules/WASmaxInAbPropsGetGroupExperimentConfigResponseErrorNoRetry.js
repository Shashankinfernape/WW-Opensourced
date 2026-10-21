__d("WASmaxInAbPropsGetGroupExperimentConfigResponseErrorNoRetry", [
    "WAResultOrError",
    "WASmaxInAbPropsIQErrorBadRequestOrFeatureNotImplementedMixinGroup",
    "WASmaxInAbPropsIQErrorResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInAbPropsIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInAbPropsIQErrorBadRequestOrFeatureNotImplementedMixinGroup").parseIQErrorBadRequestOrFeatureNotImplementedMixinGroup(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorIQErrorBadRequestOrFeatureNotImplementedMixinGroup: i.value
            }));
        }
        return i;
    }
    l.parseGetGroupExperimentConfigResponseErrorNoRetry = e;
}, 98);