__d("WAWebOutContactGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createContactsCache
    });
    const { computed, field } = e;
    const c = field("phoneNumber");
    const d = field("fullName");
    const m = field("firstName");
    const p = computed(function([n, r, o]) {
        return n ?? r ?? o;
    }, [
        d,
        m,
        c
    ]);
    l.getPhoneNumber = c;
    l.getName = p;
}, 98);