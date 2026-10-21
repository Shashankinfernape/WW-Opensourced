__d("WAWebNuxAction", [
    "Promise",
    "WAWebNoop",
    "WAWebNuxSync",
    "WAWebNuxSyncKey",
    "WAWebUserPrefsNuxPreferences"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return {
            views: 0
        };
    }
    function u(t, a = false) {
        const i = o("WAWebUserPrefsNuxPreferences").getNUX(t);
        const l = i ?? s();
        const u = o("WAWebUserPrefsNuxPreferences").getNuxMaxViews(t);
        const views = a ? u : l.views + 1;
        o("WAWebUserPrefsNuxPreferences").setNUX(t, {
            views
        });
        if (views >= u) {
            const d = o("WAWebNuxSyncKey").getNuxSyncKey(t);
            if (d != null) {
                return r("WAWebNuxSync").acknowledgeNux(d).then(r("WAWebNoop"));
            }
        }
        return (e || (e = n("Promise"))).resolve();
    }
    function c(e) {
        return u(e, true);
    }
    function d(t) {
        o("WAWebUserPrefsNuxPreferences").removeNUX(t);
        const a = o("WAWebNuxSyncKey").getNuxSyncKey(t);
        if (a != null) {
            return r("WAWebNuxSync").unAcknowledgeNux(a).then(r("WAWebNoop"));
        }
        return (e || (e = n("Promise"))).resolve();
    }
    l.viewNux = u;
    l.dismissNux = c;
    l.resetNux = d;
}, 98);