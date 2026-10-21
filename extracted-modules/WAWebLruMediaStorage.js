__d("WAWebLruMediaStorage", [
    "WAWebLruMediaStorageUtils",
    "once"
], function(t, n, r, o, a, i, l) {
    const e = r("once")(function() {
        return o("WAWebLruMediaStorageUtils").getStorage().initialize();
    });
    l.initialize = e;
}, 98);