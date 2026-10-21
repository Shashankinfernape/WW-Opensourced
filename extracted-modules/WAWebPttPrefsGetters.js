__d("WAWebPttPrefsGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createPttPrefsCache
    });
    const e_field = e.field;
    const u = e_field("playbackRate");
    const c = e_field("outOfChatPlayerMessage");
    const d = e_field("playbackControlMessageId");
    const m = e_field("isOocPlayerClosedByUser");
    l.getPlaybackRate = u;
    l.getOutOfChatPlayerMessage = c;
    l.getPlaybackControlMessageId = d;
    l.getIsOocPlayerClosedByUser = m;
}, 98);