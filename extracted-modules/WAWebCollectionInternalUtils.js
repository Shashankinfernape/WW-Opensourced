__d("WAWebCollectionInternalUtils", [
    "WAWebCollectionUtils"
], function(t, n, r, o, a, i, l) {
    const e = function(t) {
        if (t != null && typeof t === "function" && "kind" in t && o("WAWebCollectionUtils").CollectionMethodKind.isValid(t.kind)) {
            return t;
        }
        return null;
    };
    function s(t) {
        let n = null;
        for (const r of Object.keys(t)){
            const a = e(t[r]);
            if (a) {
                e: {
                    if (a.kind === o("WAWebCollectionUtils").CollectionMethodKind.Aggregate) {
                        if (!n) {
                            n = [];
                        }
                        n.push(a);
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${a.kind}`);
                }
            }
        }
        return {
            aggregate: n
        };
    }
    l.groupMethodsByKind = s;
}, 98);