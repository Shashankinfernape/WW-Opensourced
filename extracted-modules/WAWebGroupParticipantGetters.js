__d("WAWebGroupParticipantGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createGroupParticipantCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("isAdmin");
    l.clearGroupParticipantGetterCacheFor = c;
    l.getIsAdmin = d;
}, 98);