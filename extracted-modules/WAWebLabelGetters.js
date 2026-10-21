__d("WAWebLabelGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebListUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createLabelsCache
    });
    const { computed, field } = e;
    const c = field("colorIndex");
    const d = field("color");
    const m = computed(function([t, n]) {
        if (n != null) {
            return o("WAWebListUtils").colorIndexToHex(n);
        }
    }, [
        d,
        c
    ]);
    l.getHexColor = m;
}, 98);