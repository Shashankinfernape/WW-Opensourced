__d("useWAWebBusinessProfileValues", [
    "WAWebBusinessProfileCollection",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return o("useWAWebCollectionValues").useCollectionValues(o("WAWebBusinessProfileCollection").BusinessProfileCollection, e, t);
    }
    function s(e, t) {
        return o("useWAWebCollectionValues").useOptionalCollectionValues(o("WAWebBusinessProfileCollection").BusinessProfileCollection, e, t);
    }
    l.useBusinessProfileValues = e;
    l.useOptionalBusinessProfileValues = s;
}, 98);