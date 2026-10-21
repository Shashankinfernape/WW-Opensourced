__d("useWAWebGroupMetadataValues", [
    "WAWebGroupMetadataCollection",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return o("useWAWebCollectionValues").useCollectionValues(r("WAWebGroupMetadataCollection"), e, t);
    }
    function s(e, t) {
        return o("useWAWebCollectionValues").useOptionalCollectionValues(r("WAWebGroupMetadataCollection"), e, t);
    }
    function u(e, t) {
        return o("useWAWebCollectionValues").useCollectionValues(r("WAWebUnjoinedSubgroupMetadataCollection"), e, t);
    }
    l.useGroupMetadataValues = e;
    l.useOptionalGroupMetadataValues = s;
    l.useUnjoinedSubgroupMetadataValues = u;
}, 98);