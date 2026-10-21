__d("WASmaxInAbPropsGetGroupExperimentConfigResponseSuccess", [
    "WAResultOrError",
    "WASmaxInAbPropsExperimentOrSamplingConfigMixinGroup",
    "WASmaxInAbPropsIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "prop");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInAbPropsExperimentOrSamplingConfigMixinGroup").parseExperimentOrSamplingConfigMixinGroup(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                experimentOrSamplingConfigMixinGroup: n.value
            });
        }
        return n;
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "props");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, a.value, "ab_key");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, a.value, "hash");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, a.value, "refresh", 0, undefined);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, a.value, "refresh_id", 0, undefined);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxInAbPropsIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "prop", 0, Infinity, e);
        if (d.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                propsAbKey: i.value,
                propsHash: l.value,
                propsRefresh: s.value,
                propsRefreshId: u.value
            }, c.value, {
                propsProp: d.value
            }));
        }
        return d;
    }
    l.parseGetGroupExperimentConfigResponseSuccessPropsProp = e;
    l.parseGetGroupExperimentConfigResponseSuccess = s;
}, 98);