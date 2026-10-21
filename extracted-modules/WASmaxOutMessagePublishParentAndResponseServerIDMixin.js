__d("WASmaxOutMessagePublishParentAndResponseServerIDMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ metaParentServerId, metaResponseServerId }) {
        const r = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", {
            parent_server_id: o("WAWap").INT(metaParentServerId),
            response_server_id: o("WAWap").CUSTOM_STRING(metaResponseServerId)
        }));
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeParentAndResponseServerIDMixin = s;
}, 98);