__d("WAWebUnknownUserRecoveryStore", [
    "WATimeUtils",
    "WAWebPersistedPrefObject",
    "WAWebUserPrefsKeys"
], function(t, n, r, o, a, i, l) {
    const e = 150;
    const s = 50;
    function u(e, t, n) {
        const r = p();
        const day = g(n);
        const i = r.day === day ? r.dailyCount : 0;
        if (i >= s || !m(r, e, t, n)) {
            return false;
        }
        o("WAWebPersistedPrefObject").writePersistedPrefObject(o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_USYNC_RECOVERY, {
            lids: r.lids,
            day,
            dailyCount: i + 1
        });
        return true;
    }
    function c(e, t) {
        const r = p();
        const a = babelHelpers.extends({}, r.lids, {
            [e.toString()]: t
        });
        h(a);
        o("WAWebPersistedPrefObject").writePersistedPrefObject(o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_USYNC_RECOVERY, {
            lids: a,
            day: r.day,
            dailyCount: r.dailyCount
        });
    }
    function d(e) {
        const t = p();
        if (t.day === g(e) && t.dailyCount > 0) {
            o("WAWebPersistedPrefObject").writePersistedPrefObject(o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_USYNC_RECOVERY, {
                lids: t.lids,
                day: t.day,
                dailyCount: t.dailyCount - 1
            });
        }
    }
    function m(e, t, n, r) {
        const o = e.lids[t.toString()];
        if (o == null) {
            return true;
        }
        if (n < 0) {
            return false;
        }
        if (r < o) {
            return true;
        }
        return r - o >= n;
    }
    function p() {
        return o("WAWebPersistedPrefObject").readPersistedPrefObject(o("WAWebUserPrefsKeys").KEYS.UNKNOWN_USER_USYNC_RECOVERY, _, "unknown-user-usync-recovery-malformed") ?? f();
    }
    function _({ dailyCount, day, lids }) {
        if (typeof lids !== "object" || lids == null || typeof day !== "number" || typeof dailyCount !== "number") {
            return null;
        }
        const o = {};
        for (const a of Object.keys(lids)){
            const i = lids[a];
            if (typeof i === "number") {
                o[a] = i;
            }
        }
        return {
            lids: o,
            day,
            dailyCount
        };
    }
    function f() {
        return {
            lids: {},
            day: 0,
            dailyCount: 0
        };
    }
    function g(e) {
        return Math.floor(e / o("WATimeUtils").DAY_SECONDS);
    }
    function h(t) {
        const n = Object.keys(t);
        const r = n.length - e;
        if (!(r <= 0)) {
            const o = n.sort((e, n)=>t[e] - t[n]);
            for(let a = 0; a < r; a++){
                delete t[o[a]];
            }
        }
    }
    l.MAX_TRACKED_LIDS = e;
    l.MAX_USYNC_FETCHES_PER_DAY = s;
    l.tryReserveUsyncFetch = u;
    l.commitUsyncFetched = c;
    l.releaseUsyncReservation = d;
}, 98);