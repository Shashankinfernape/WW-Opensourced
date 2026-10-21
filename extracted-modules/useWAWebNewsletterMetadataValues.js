__d("useWAWebNewsletterMetadataValues", [
    "WAWebNewsletterMetadataCollection",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return o("useWAWebCollectionValues").useCollectionValues(r("WAWebNewsletterMetadataCollection"), e, t, n);
    }
    function s(e, t, n) {
        return o("useWAWebCollectionValues").useOptionalCollectionValues(r("WAWebNewsletterMetadataCollection"), e, t, n);
    }
    l.useNewsletterMetadataValues = e;
    l.useOptionalNewsletterMetadataValues = s;
}, 98);