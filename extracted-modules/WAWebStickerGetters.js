__d("WAWebStickerGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createStickerCache
    });
    const { clearCacheFor, field, unsafeIdentityGetter } = e;
    const root = unsafeIdentityGetter;
    const m = o("WAWebGetters").createGetterFactories({
        root,
        createCache: o("WAWebGettersCaches").createFrontendStickerCache
    });
    const { clearCacheFor: clearCacheFor_1, field: field_1 } = m;
    function f(e) {
        clearCacheFor(e);
        clearCacheFor_1(e);
    }
    const g = field("id");
    const h = field("filehash");
    const y = field("isCreateButton");
    const C = field("isPlaceholder");
    const b = field("mimetype");
    const v = field("stickerAudio");
    const S = field_1("mediaData");
    l.getStickerUnsafe = root;
    l.clearStickerGetterCacheFor = f;
    l.getId = g;
    l.getFilehash = h;
    l.getIsCreateButton = y;
    l.getIsPlaceholder = C;
    l.getMimetype = b;
    l.getStickerAudio = v;
    l.getMediaData = S;
}, 98);