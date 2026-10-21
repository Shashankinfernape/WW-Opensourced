__d("WAWebNetworkType", [], function(t, n, r, o, a, i) {
    function e() {
        const e = navigator;
        if (e.connection != null && typeof e.connection.effectiveType === "string") {
            return e.connection.effectiveType;
        }
        return null;
    }
    i.getEffectiveNetworkType = e;
}, 66);