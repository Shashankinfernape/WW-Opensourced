__d("WAWebMediaHostsStaleness", [], function(t, n, r, o, a, i) {
    function e(e) {
        if (e == null) {
            return true;
        }
        return new Date >= e.authExpirationTime;
    }
    function l(e) {
        if (e == null || new Date >= e.hostsRefreshTime) {
            return true;
        }
        const { authTTL: t, queryStartTime: n } = e;
        const r = Math.floor(t * 0.8);
        const o = new Date(n.getTime() + r);
        return new Date >= o;
    }
    i.isExpiredOrMissing = e;
    i.needsRefresh = l;
}, 66);