__d("WAWebQuickReplyGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebQuickReplyEnum"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createQuickReplyCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = e;
    const m = clearCacheFor;
    const p = unsafeIdentityGetter;
    const _ = field("id");
    const f = field("count");
    const g = field("message");
    const h = field("shortcut");
    const y = computed(function([n]) {
        const r = o("WAWebQuickReplyEnum").QuickReplyTypes.cast(n) ?? o("WAWebQuickReplyEnum").QuickReplyTypes.TEXT;
        switch(r){
            case o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT:
                return o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT:
                return o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT:
                return o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT:
                return o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT;
            default:
                return o("WAWebQuickReplyEnum").QuickReplyTypes.TEXT;
        }
    }, [
        _
    ]);
    l.clearQuickReplyGetterCacheFor = m;
    l.getQuickReplyUnsafe = p;
    l.getCount = f;
    l.getMessage = g;
    l.getShortcut = h;
    l.getType = y;
}, 98);