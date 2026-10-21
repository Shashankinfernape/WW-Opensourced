__d("useWAWebIsBlobInMemoryCache", [
    "WAWebMediaInMemoryBlobCache",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useSyncExternalStore } = s;
    function d(e) {
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.subscribe(e);
    }
    function useM(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = function() {
                return e != null && o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(e);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return useSyncExternalStore(d, n);
    }
    l.default = useM;
}, 98);