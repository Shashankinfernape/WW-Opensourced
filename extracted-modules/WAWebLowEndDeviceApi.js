__d("WAWebLowEndDeviceApi", [
    "WAWebABProps",
    "WAWebBrowserApi",
    "WAWebCurrentUser"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    const s = new Map;
    function u() {
        const t = o("WAWebABProps").getABPropConfigValue("web_low_end_device_level");
        if (e.has(t)) {
            return e.get(t) ?? false;
        }
        const r = d(t);
        e.set(t, r);
        return r;
    }
    function c() {
        const e = o("WAWebABProps").getABPropConfigValue("web_low_end_device_level");
        if (s.has(e)) {
            return s.get(e) ?? false;
        }
        let n = d(e);
        if (n && !o("WAWebCurrentUser").isEmployee() && Math.random() < 0.1) {
            n = false;
        }
        s.set(e, n);
        return n;
    }
    function d(e) {
        const t = o("WAWebBrowserApi").getMemClass();
        const n = o("WAWebBrowserApi").getNumCpu();
        const r = n != null && n <= 2;
        const a = n != null && n <= 4;
        const i = t != null && t <= 4000;
        const l = t != null && t < 4000;
        switch(e){
            case 1:
                return r || l && a;
            case 2:
                return r || i && a;
            case 3:
                return a || i;
            default:
                return false;
        }
    }
    l.isLowEndDeviceCache = e;
    l.shouldReduceLogsCache = s;
    l.isLowEndDevice = u;
    l.shouldReduceLogsForLowEndDevice = c;
}, 98);