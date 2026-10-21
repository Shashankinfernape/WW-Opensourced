__d("useWAWebProfilePicThumbValues", [
    "WAWebProfilePicThumbCollection",
    "react-compiler-runtime",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("react-compiler-runtime").c(1);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                isStrong: true
            };
            n[0] = r;
        } else {
            r = n[0];
        }
        return o("useWAWebCollectionValues").useCollectionValues(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection, e, t, r);
    }
    function s(e, t) {
        const n = o("react-compiler-runtime").c(1);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                isStrong: true
            };
            n[0] = r;
        } else {
            r = n[0];
        }
        return o("useWAWebCollectionValues").useOptionalCollectionValues(o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection, e, t, r);
    }
    l.useProfilePicThumbValues = e;
    l.useOptionalProfilePicThumbValues = s;
}, 98);