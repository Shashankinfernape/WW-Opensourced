__d("Log", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = -1;
    const l = {
        DEBUG: 3,
        INFO: 2,
        WARNING: 1,
        ERROR: 0
    };
    const s = function(n, r, o, ...a) {
        let l = 0;
        const s = o.replace(/%s/g, ()=>String(a[l++]));
        const window_console = window.console;
        if (window_console && e >= r) {
            window_console[n in window_console ? n : "log"](s);
        }
    };
    function u(t) {
        e = t;
    }
    const c = s.bind(null, "debug", l.DEBUG);
    const d = s.bind(null, "info", l.INFO);
    const m = s.bind(null, "warn", l.WARNING);
    const p = s.bind(null, "error", l.ERROR);
    i.Level = l;
    i.log = s;
    i.setLevel = u;
    i.debug = c;
    i.info = d;
    i.warn = m;
    i.error = p;
}, 66);