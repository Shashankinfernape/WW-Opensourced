__d("WAWebThemeSession", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WAWebEventEmitter"));
    let s = false;
    function u(t) {
        if (s !== t) {
            s = t;
            e.trigger("change", t);
        }
    }
    function c() {
        return s;
    }
    function d(t) {
        e.on("change", t);
        return function() {
            e.off("change", t);
        };
    }
    l.updateIsDarkTheme = u;
    l.getIsDarkTheme = c;
    l.subscribeToThemeChanges = d;
}, 98);