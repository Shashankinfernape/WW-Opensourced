__d("WAWebGroupABPropsGlobals", [
    "WAWebABPropsExpoKeyUtils",
    "WAWebDebounce",
    "WAWebNetworkStatus",
    "WAWebWefrGroupClientExposureWamEvent",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    const e = 1000;
    const s = new Map;
    const u = new Map;
    function c(e) {
        const t = s.get(e);
        if (!(t == null || t.size === 0)) {
            const n = o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(t);
            const r = u.get(e);
            if (r !== n) {
                f(e, n);
                u.set(e, n);
            }
        }
    }
    function d(e) {
        if (r("justknobx")._("1964")) {
            r("WAWebNetworkStatus").waitIfOffline().then(()=>{
                new (o("WAWebWefrGroupClientExposureWamEvent")).WefrGroupClientExposureWamEvent(e).commit();
            });
        } else {
            new (o("WAWebWefrGroupClientExposureWamEvent")).WefrGroupClientExposureWamEvent(e).commit();
        }
    }
    function m() {
        for (const [t, n] of s){
            if (n.size !== 0) {
                const r = o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(n);
                d({
                    exposureKey: r,
                    groupJid: t,
                    sentWithDaily: true
                });
            }
        }
    }
    const p = new Map;
    function _(t) {
        let n = p.get(t);
        if (n == null) {
            n = r("WAWebDebounce")(function(e, t) {
                d({
                    exposureKey: t,
                    groupJid: e,
                    sentWithDaily: false
                });
            }, e);
            p.set(t, n);
        }
        return n;
    }
    function f(e, t) {
        const n = _(e);
        n(e, t);
    }
    l.GROUP_EXPOSURE_PULSE_DEBOUNCE_MS = e;
    l.groupExposureKeys = s;
    l.updateGroupExpoKey = c;
    l.logGroupExposurePulseEventFromDailyStatsTask = m;
}, 98);