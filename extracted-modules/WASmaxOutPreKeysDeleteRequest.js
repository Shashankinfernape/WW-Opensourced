__d("WASmaxOutPreKeysDeleteRequest", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutPreKeysClientRequestMixin",
    "WASmaxOutPreKeysSetOpDeleteMixin"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WASmaxJsx").smax("list", null);
        return e;
    }
    function s() {
        const e = o("WASmaxJsx").smax("pq_list", null);
        return e;
    }
    function u({ hasList, hasPqList }) {
        const a = o("WASmaxOutPreKeysSetOpDeleteMixin").mergeSetOpDeleteMixin(o("WASmaxOutPreKeysClientRequestMixin").mergeClientRequestMixin(o("WASmaxJsx").smax("iq", {
            type: "set"
        }, o("WASmaxChildren").HAS_OPTIONAL_CHILD(e, hasList), o("WASmaxChildren").HAS_OPTIONAL_CHILD(s, hasPqList))));
        return a;
    }
    l.makeDeleteRequestList = e;
    l.makeDeleteRequestPqList = s;
    l.makeDeleteRequest = u;
}, 98);