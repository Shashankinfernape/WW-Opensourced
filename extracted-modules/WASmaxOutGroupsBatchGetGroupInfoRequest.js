__d("WASmaxOutGroupsBatchGetGroupInfoRequest", [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetServerMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ groupJid: t }) {
        const n = o("WASmaxJsx").smax("group", {
            jid: o("WAWap").GROUP_JID(t)
        });
        return n;
    }
    function s({ groupArgs: n, queryContext: r }) {
        const a = o("WASmaxOutGroupsBaseGetServerMixin").mergeBaseGetServerMixin(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("query", {
            context: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r)
        }, o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 10000))));
        return a;
    }
    l.makeBatchGetGroupInfoRequestQueryGroup = e;
    l.makeBatchGetGroupInfoRequest = s;
}, 98);