__d("WAWebTextStatusUtils", [
    "WATimeUtils",
    "WAWebTextStatusGatingUtils",
    "fbs"
], function(t, n, r, o, a, i, l) {
    const e = -1;
    const s = -3;
    function u(t) {
        return t == null || t === e;
    }
    const c = 50;
    const d = -2;
    const m = 0;
    function p(e) {
        return e != null && e >= 0;
    }
    function _(t, n) {
        if (t === m && (n == null || n === e || n === d)) {
            return d;
        }
        return t;
    }
    const f = null;
    const g = null;
    const h = null;
    const y = -1;
    function C({ textStatusEmoji, textStatusEphemeralDuration, textStatusExpiryTs, textStatusLastUpdateTime, textStatusString }) {
        const l = textStatusEphemeralDuration === y || textStatusExpiryTs != null && o("WATimeUtils").unixTime() < textStatusExpiryTs;
        const s = !!(textStatusString != null && textStatusString.trim()) || !!textStatusEmoji;
        const u = textStatusLastUpdateTime !== m;
        return u && l && s;
    }
    function b(e) {
        return e != null && e !== y;
    }
    function v({ textStatusEmoji, textStatusEphemeralDuration, textStatusExpiryTs, textStatusLastUpdateTime, textStatusString }) {
        return !(!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() || textStatusLastUpdateTime === e || textStatusLastUpdateTime === d || textStatusLastUpdateTime === s || !C({
            textStatusEmoji,
            textStatusEphemeralDuration,
            textStatusExpiryTs,
            textStatusLastUpdateTime,
            textStatusString
        }));
    }
    function S(e) {
        return e.status === undefined;
    }
    function R(e) {
        const t = r("fbs")._("Hey there! I am using WhatsApp.").toString();
        return e.isValidTextStatus() && e.status !== t;
    }
    l.TEXT_STATUS_NOT_FETCHED = e;
    l.TEXT_STATUS_NOT_AUTHORIZED = s;
    l.isTextStatusNotFetched = u;
    l.SUGGESTIONS_MAX_COUNT = c;
    l.TEXT_STATUS_NEVER_HAD = d;
    l.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL = m;
    l.hasEverHadTextStatus = p;
    l.resolveTextStatusUpdateTime = _;
    l.CLEAR_TEXT_STATUS_STRING_VAL = f;
    l.CLEAR_TEXT_STATUS_EMOJI_VAL = g;
    l.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL = h;
    l.TEXT_STATUS_DURATION_INFINITE = y;
    l.hasTextStatusSet = C;
    l.isEphemeralTextStatus = b;
    l.shouldDisplayTextStatus = v;
    l.isLegacyAboutNotFetched = S;
    l.hasCustomAboutSet = R;
}, 226);