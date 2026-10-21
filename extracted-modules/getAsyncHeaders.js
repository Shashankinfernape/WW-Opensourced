__d("getAsyncHeaders", [
    "BDHeaderConfig",
    "LSD",
    "ZeroCategoryHeader",
    "isFacebookURI",
    "requireWeak"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = {};
        const n = r("isFacebookURI")(e);
        if (n && r("ZeroCategoryHeader").value) {
            t[r("ZeroCategoryHeader").header] = r("ZeroCategoryHeader").value;
        }
        const o = s(e);
        if (o != null && o !== "") {
            t["X-FB-LSD"] = o;
        }
        const a = u(e);
        if (a != null && a !== "") {
            t["X-ASBD-ID"] = a;
        }
        r("requireWeak")("MessengerPWAVersionForUserAgent", function(n) {
            const r = n();
            if (r != null && !c(e)) {
                t["x-fb-pwa"] = `${r}`;
            }
        });
        return t;
    }
    function s(e) {
        if (c(e)) {
            return null;
        }
        return r("LSD").token;
    }
    function u(e) {
        if (c(e)) {
            return null;
        }
        return o("BDHeaderConfig").ASBD_ID;
    }
    function c(e) {
        const o = d()?.location?.origin ?? window?.location?.origin;
        if (o == null) {
            return true;
        }
        return !e.toString().startsWith("/") && e.getOrigin() !== o;
    }
    function d() {
        if (typeof document !== "undefined") {
            return document;
        }
        return null;
    }
    l.default = e;
}, 98);