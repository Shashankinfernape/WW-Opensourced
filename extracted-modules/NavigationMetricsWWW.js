__d("NavigationMetricsWWW", [
    "Arbiter",
    "BigPipeInstance",
    "NavigationMetricsCore",
    "PageEvents",
    "performance"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = "0";
    r("NavigationMetricsCore").getFullPageLoadLid = function() {
        return s;
    };
    r("NavigationMetricsCore").siteInit(function(t) {
        const n = new t;
        let o = true;
        r("Arbiter").subscribe(r("BigPipeInstance").Events.init, function(e, a) {
            const i = o ? n : new t;
            if (o) {
                s = a.lid;
            }
            o = false;
            i.setServerLID(a.lid);
            const a_arbiter = a.arbiter;
            a_arbiter.subscribe(r("BigPipeInstance").Events.tti, function(e, { ts }) {
                i.setTTI(ts);
            });
            a_arbiter.subscribe(r("PageEvents").AJAXPIPE_SEND, function(e, { ts }) {
                i.setRequestStart(ts);
            });
            a_arbiter.subscribe(r("PageEvents").AJAXPIPE_ONLOAD, function(e, { ts }) {
                i.setE2E(ts).doneNavigation();
            });
            a_arbiter.subscribe(r("BigPipeInstance").Events.displayed, function(e, { ts }) {
                i.setDisplayDone(ts);
            });
            a_arbiter.subscribe(r("BigPipeInstance").Events.loaded, function(e, { ts }) {
                i.setAllPageletsLoaded(ts);
            });
        });
        r("Arbiter").subscribe(r("PageEvents").BIGPIPE_ONLOAD, function(t, { ts }) {
            o = false;
            n.setRequestStart((e || (e = r("performance"))).timing && (e || (e = r("performance"))).timing.navigationStart).setE2E(ts).doneNavigation();
        });
    });
    l.default = r("NavigationMetricsCore");
}, 98);