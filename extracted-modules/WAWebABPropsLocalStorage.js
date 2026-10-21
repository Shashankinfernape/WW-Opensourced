__d("WAWebABPropsLocalStorage", [
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = 600;
    const s = 604800;
    const u = 86400;
    function c({ abKey: i, currentTime: l, hash: u, refresh: c }) {
        let m = null;
        if (c != null) {
            m = c;
            if (m < e) {
                m = e;
            } else if (m > s) {
                m = s;
            }
        }
        const p = d() || {};
        const _ = {
            abKey: i ?? p.abKey,
            hash: u ?? p.hash,
            refresh: m?.toString() ?? p.refresh,
            lastSyncTime: l
        };
        r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.ABPROPS, JSON.stringify(_));
    }
    function d() {
        const e = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").KEYS.ABPROPS);
        if (e == null) {
            return null;
        }
        return JSON.parse(e);
    }
    function m() {
        return d() != null;
    }
    function p() {
        const e = d();
        return e?.abKey;
    }
    function _() {
        const e = d();
        return e?.hash;
    }
    function f() {
        const t = d();
        return parseInt(t?.refresh ?? u, 10);
    }
    function g() {
        const e = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").KEYS.ABPROPS_REFRESH_ID);
        if (e == null) {
            h(0);
        }
        if (e == null) {
            return 0;
        }
        return parseInt(e, 10);
    }
    function h(e) {
        r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.ABPROPS_REFRESH_ID, String(e));
    }
    function y() {
        const e = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").UserPrefs.AbpropsWebRefreshId);
        if (e == null) {
            C(0);
        }
        if (e == null) {
            return 0;
        }
        return parseInt(e, 10);
    }
    function C(e) {
        r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").UserPrefs.AbpropsWebRefreshId, String(e));
    }
    function b() {
        const e = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_REFRESH_ID);
        if (e == null) {
            return 0;
        }
        return parseInt(e, 10);
    }
    function v(e) {
        r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_REFRESH_ID, String(e));
    }
    function S() {
        const e = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_EMERGENCY_PUSH_TIMESTAMP);
        if (e == null) {
            return null;
        }
        return parseInt(e, 10);
    }
    function R(e) {
        r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.GROUP_ABPROPS_EMERGENCY_PUSH_TIMESTAMP, String(e));
    }
    l.updateAttributesLocalStorage = c;
    l.isABPropsAfterFirstSync = m;
    l.getABKey = p;
    l.getHash = _;
    l.getRefresh = f;
    l.getRefreshId = g;
    l.setRefreshId = h;
    l.getWebRefreshId = y;
    l.setWebRefreshId = C;
    l.getGroupAbPropsRefreshId = b;
    l.setGroupAbPropsRefreshId = v;
    l.getGroupAbPropsEmergencyPushTimestamp = S;
    l.setGroupAbPropsEmergencyPushTimestamp = R;
}, 98);