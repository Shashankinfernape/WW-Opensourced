__d("useWAWebTextStatusValues", [
    "WAWebTextStatusCollection",
    "react-compiler-runtime",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const a = o("react-compiler-runtime").c(2);
        const isStrong = n?.isStrong ?? true;
        let l;
        if (a[0] !== isStrong) {
            l = {
                isStrong
            };
            a[0] = isStrong;
            a[1] = l;
        } else {
            l = a[1];
        }
        return o("useWAWebCollectionValues").useCollectionValues(o("WAWebTextStatusCollection").TextStatusCollection, e, t, l);
    }
    l.useTextStatusValues = e;
}, 98);