__d("WAWebCTWADataSharingModel", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = 1;
    const s = 2;
    let u = null;
    let c = null;
    const d = new (r("WAWebEventEmitter"));
    const setValue = function(t, n) {
        u = t;
        if (n != null) {
            c = n;
        }
        d.trigger("update", u);
    };
    function getValue() {
        return u;
    }
    function getVersion() {
        return c ?? e;
    }
    const subscribeForUpdates = function(t) {
        d.on("update", t);
    };
    const unsubscribeFromUpdates = function(t) {
        d.off("update", t);
    };
    const resetForTests = function() {
        u = null;
        c = null;
    };
    const y = {
        subscribeForUpdates,
        unsubscribeFromUpdates,
        setValue,
        getValue,
        getVersion,
        resetForTests
    };
    l.BASE_DISCLOSURE_VERSION = e;
    l.EPD_DISCLOSURE_VERSION = s;
    l.CTWADataSharingModel = y;
}, 98);