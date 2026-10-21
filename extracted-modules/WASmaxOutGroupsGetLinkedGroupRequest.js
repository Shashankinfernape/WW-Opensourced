__d("WASmaxOutGroupsGetLinkedGroupRequest", [
    "WASmaxJsx",
    "WASmaxOutGroupsBaseGetGroupMixin",
    "WASmaxOutGroupsQueryLinkedGroupMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxOutGroupsQueryLinkedGroupMixin").mergeQueryLinkedGroupMixin(o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(o("WASmaxJsx").smax("iq", null), e), e);
        return t;
    }
    l.makeGetLinkedGroupRequest = e;
}, 98);