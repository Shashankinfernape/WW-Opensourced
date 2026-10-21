__d("WAWebBotProfileFreshness", [], function(t, n, r, o, a, i) {
    const e = 86400000;
    function l(t, n, r = e) {
        if (t == null || t.groupTosRequirements === undefined) {
            return true;
        }
        const t_lastFetchedTimeMs = t.lastFetchedTimeMs;
        if (t_lastFetchedTimeMs == null) {
            return true;
        }
        return n - t_lastFetchedTimeMs > r;
    }
    i.BOT_PROFILE_TTL_MS = e;
    i.isBotProfileStale = l;
}, 66);