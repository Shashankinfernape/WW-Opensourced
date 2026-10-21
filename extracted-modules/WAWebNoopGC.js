__d("WAWebNoopGC", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = false;
    let l = false;
    function s() {
        if (!e) {
            const n = window?.gc;
            if (typeof n === "function") {
                try {
                    const r = function() {
                        if (!l) {
                            n.call(window);
                        }
                    };
                    r.toString = function() {
                        return "function gc() { [native code] }";
                    };
                    window.gc = r;
                    e = true;
                } catch (e) {}
            }
        }
    }
    function u() {
        l = true;
    }
    i.installGCNoopWrapper = s;
    i.enableGCNoop = u;
}, 66);