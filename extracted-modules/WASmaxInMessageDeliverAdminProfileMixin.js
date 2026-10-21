__d("WASmaxInMessageDeliverAdminProfileMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "name");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentString(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "direct_path");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                directPath: r.value
            });
        }
        return r;
    }
    function u(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "admin_profile");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(t, "name", e);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(t, "picture", s);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, t, "id");
        if (i.success) {
            return o("WAResultOrError").makeResult({
                id: i.value,
                name: r.value,
                picture: a.value
            });
        }
        return i;
    }
    l.parseAdminProfileName = e;
    l.parseAdminProfilePicture = s;
    l.parseAdminProfileMixin = u;
}, 98);