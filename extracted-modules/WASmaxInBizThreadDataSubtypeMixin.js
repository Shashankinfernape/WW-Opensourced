__d("WASmaxInBizThreadDataSubtypeMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrString(e, "notif_sub_type");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                notifSubType: t.value
            });
        }
        return t;
    }
    l.parseSubtypeMixin = e;
}, 98);