__d("WAWebBotProfileFetchPause", [], function(t, n, r, o, a, i) {
    const e = 86400000;
    const l = new Set([
        5171003,
        5171004
    ]);
    function s(e) {
        return (e ?? []).some(({ code })=>l.has(code));
    }
    function u(t) {
        return t + e;
    }
    function c(e, t) {
        return e != null && t < e;
    }
    i.BOT_PROFILE_FETCH_PAUSE_MS = e;
    i.isPausingBotProfileErrorCode = s;
    i.getBotProfileFetchPauseUntilMs = u;
    i.isBotProfileFetchPaused = c;
}, 66);