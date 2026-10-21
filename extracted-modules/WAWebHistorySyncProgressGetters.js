__d("WAWebHistorySyncProgressGetters", [
    "WAWebGetters"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({});
    const { computed, field } = e;
    const c = field("remainingPausedSeconds");
    const d = field("realProgress");
    const m = field("fakeProgress");
    const p = field("incomplete");
    const _ = computed(function([t]) {
        return t != null;
    }, [
        c
    ]);
    const f = computed(function([t, n]) {
        if (t == null) {
            return null;
        }
        return Math.min(t + n, 100);
    }, [
        d,
        m
    ]);
    const g = computed(function([t, n, r]) {
        return n && (t == null || t < 100) && (r == null || r > 0);
    }, [
        d,
        p,
        c
    ]);
    l.getPaused = _;
    l.getProgress = f;
    l.getInProgress = g;
}, 98);