__d("useWAWebInMemoryMediaBlobCache", [
    "WAWebMediaInMemoryBlobCache",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect, useMemo, useSyncExternalStore } = s;
    function p(e) {
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.subscribe(e);
    }
    function useComponent(e) {
        const t = o("react-compiler-runtime").c(8);
        let n;
        if (t[0] !== e) {
            n = function() {
                return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(e);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = useSyncExternalStore(p, n);
        let i;
        e: {
            if (a) {
                o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.increaseUsageCount(e);
                let l;
                if (t[2] !== e) {
                    l = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.getOrCreateURL(e);
                    t[2] = e;
                    t[3] = l;
                } else {
                    l = t[3];
                }
                i = l;
                break e;
            }
            i = null;
        }
        const s = i;
        let u;
        let d;
        if (t[4] !== s || t[5] !== e) {
            u = function() {
                return function() {
                    if (s != null) {
                        o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.decreaseUsageCount(e);
                    }
                };
            };
            d = [
                e,
                s
            ];
            t[4] = s;
            t[5] = e;
            t[6] = u;
            t[7] = d;
        } else {
            u = t[6];
            d = t[7];
        }
        useEffect(u, d);
        return s;
    }
    l.default = useComponent;
}, 98);