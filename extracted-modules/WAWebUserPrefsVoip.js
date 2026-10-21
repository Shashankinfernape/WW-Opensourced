__d("WAWebUserPrefsVoip", [
    "WATimeUtils",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = "calls_tab_last_seen";
    const s = "selected_audio_input_device";
    const u = "selected_audio_output_device";
    const c = "selected_video_input_device";
    const d = "last_call_rating_time";
    const m = "sctp_prewarm_slow";
    const p = -1;
    function _() {
        const t = r("WAWebUserPrefsStore").get(e);
        if (typeof t === "number") {
            return t;
        }
        return 0;
    }
    function f() {
        const t = o("WATimeUtils").unixTime();
        r("WAWebUserPrefsStore").set(e, t);
    }
    function g() {
        const e = r("WAWebUserPrefsStore").get(s);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function h(e) {
        r("WAWebUserPrefsStore").set(s, e);
    }
    function y() {
        const e = r("WAWebUserPrefsStore").get(u);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function C(e) {
        r("WAWebUserPrefsStore").set(u, e);
    }
    function b() {
        const e = r("WAWebUserPrefsStore").get(c);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function v(e) {
        r("WAWebUserPrefsStore").set(c, e);
    }
    let S = null;
    function R() {
        return S;
    }
    function L(e) {
        S = e;
    }
    function E() {
        S = null;
    }
    let k = null;
    function I() {
        return k;
    }
    function T(e) {
        k = e;
    }
    function D() {
        k = null;
    }
    function x() {
        const e = r("WAWebUserPrefsStore").get(d);
        if (typeof e === "number") {
            return e;
        }
        return null;
    }
    function $(e) {
        r("WAWebUserPrefsStore").set(d, e);
    }
    function P() {
        const e = r("WAWebUserPrefsStore").get(m);
        if (e == null || typeof e !== "object" || typeof e.ms !== "number" || typeof e.at !== "number") {
            return null;
        }
        return {
            ms: e.ms,
            at: e.at
        };
    }
    function N(e) {
        const t = {
            ms: Math.round(e),
            at: o("WATimeUtils").unixTime()
        };
        r("WAWebUserPrefsStore").set(m, t);
    }
    l.SCTP_PREWARM_FAILED_MS = p;
    l.getCallsTabLastSeenTimestamp = _;
    l.setCallsTabLastSeenTimestamp = f;
    l.getSelectedAudioInputDevice = g;
    l.setSelectedAudioInputDevice = h;
    l.getSelectedAudioOutputDevice = y;
    l.setSelectedAudioOutputDevice = C;
    l.getSelectedVideoInputDevice = b;
    l.setSelectedVideoInputDevice = v;
    l.getLandingPageVideoDeviceId = R;
    l.setLandingPageVideoDeviceId = L;
    l.clearLandingPageVideoDeviceId = E;
    l.getLandingPageColorIndex = I;
    l.saveLandingPageColorIndex = T;
    l.clearLandingPageColorIndex = D;
    l.getLastCallRatingTime = x;
    l.setLastCallRatingTime = $;
    l.getSctpPrewarmSlowRecord = P;
    l.markSctpPrewarmSlow = N;
}, 98);