__d("WASmaxInAbPropsGetExperimentConfigResponseSuccess", [
    "WAResultOrError",
    "WASmaxInAbPropsConfigs",
    "WASmaxInAbPropsEnums",
    "WASmaxInAbPropsIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "prop");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInAbPropsConfigs").parseConfigs(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                configs: n.value
            });
        }
        return n;
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "erid");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytesRange(e, 1, 100);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function u(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "props");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalChildWithTag(t, "erid", s);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, a.value, "protocol", "1");
        if (!l.success) {
            return l;
        }
        const u = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, a.value, "ab_key");
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, a.value, "hash");
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, a.value, "refresh", 0, void 0);
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, a.value, "refresh_id", 0, void 0);
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, a.value, "delta_update", o("WASmaxInAbPropsEnums").ENUM_FALSE_TRUE);
        if (!p.success) {
            return p;
        }
        const _ = o("WASmaxInAbPropsIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (!_.success) {
            return _;
        }
        const f = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "prop", 0, 1 / 0, e);
        if (f.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                propsProtocol: l.value,
                propsAbKey: u.value,
                propsHash: c.value,
                propsRefresh: d.value,
                propsRefreshId: m.value,
                propsDeltaUpdate: p.value
            }, _.value, {
                erid: i.value,
                propsProp: f.value
            }));
        }
        return f;
    }
    l.parseGetExperimentConfigResponseSuccessPropsProp = e;
    l.parseGetExperimentConfigResponseSuccessErid = s;
    l.parseGetExperimentConfigResponseSuccess = u;
}, 98);