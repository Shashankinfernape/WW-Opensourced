__d("WAWebFrontendPresenceGetters", [
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebPresenceGetters"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebPresenceGetters").getPresenceUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendPresenceCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("chatstate");
    const m = field("forceDisplay");
    const p = field("groupOnlineCount");
    const _ = field("hasData");
    const f = field("isOnline");
    const g = field("recordingUserIds");
    const h = field("typingUserIds");
    const y = field("withholdDisplayStage");
    l.clearFrontendPresenceGetterCacheFor = c;
    l.getChatstate = d;
    l.getForceDisplay = m;
    l.getGroupOnlineCount = p;
    l.getHasData = _;
    l.getIsOnline = f;
    l.getRecordingUserIds = g;
    l.getTypingUserIds = h;
    l.getWithholdDisplayStage = y;
}, 98);