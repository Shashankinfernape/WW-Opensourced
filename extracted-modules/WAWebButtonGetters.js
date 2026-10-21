__d("WAWebButtonGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createButtonCache
    });
    const { field, unsafeIdentityGetter } = e;
    const d = o("WAWebGetters").createGetterFactories({
        root: unsafeIdentityGetter,
        createCache: o("WAWebGettersCaches").createFrontendButtonCache
    });
    const d_field = d.field;
    const p = field("id");
    const _ = field("displayText");
    const f = d_field("selected");
    l.getId = p;
    l.getDisplayText = _;
    l.getSelected = f;
}, 98);