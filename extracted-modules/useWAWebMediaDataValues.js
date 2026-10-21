__d("useWAWebMediaDataValues", [
    "WAWebStateUtils",
    "react-compiler-runtime",
    "useWAWebCollectionValues"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("react-compiler-runtime").c(2);
        let r;
        if (n[0] !== e) {
            r = o("WAWebStateUtils").unproxy(e);
            n[0] = e;
            n[1] = r;
        } else {
            r = n[1];
        }
        return o("useWAWebCollectionValues").useModelGetterValues(r, t);
    }
    function s(e, t) {
        const n = o("react-compiler-runtime").c(2);
        let r;
        if (n[0] !== e) {
            r = e == null ? e : o("WAWebStateUtils").unproxy(e);
            n[0] = e;
            n[1] = r;
        } else {
            r = n[1];
        }
        return o("useWAWebCollectionValues").useOptionalModelGetterValues(r, t);
    }
    l.useMediaDataValues = e;
    l.useOptionalMediaDataValues = s;
}, 98);