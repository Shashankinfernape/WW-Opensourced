__d("ImageDownloadTrackerWWW", [
    "NetworkStatus",
    "Promise",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2;
    const u = 250;
    function c(t, o, a = undefined) {
        let i = 0;
        let l;
        return new (e || (e = n("Promise")))(function(e, n) {
            function c() {
                const l = new Image;
                l.onload = function() {
                    r("NetworkStatus").reportSuccess();
                    e();
                };
                l.onerror = function() {
                    const e = i <= s;
                    if (e) {
                        r("setTimeout")(c, u);
                    } else {
                        r("NetworkStatus").reportError();
                        n();
                    }
                };
                i++;
                o();
                if (a != null) {
                    l.crossOrigin = a;
                }
                l.src = t;
            }
            if (r("NetworkStatus").isOnline()) {
                c();
            } else {
                l = r("NetworkStatus").onChange(function({ online }) {
                    if (online) {
                        c();
                        l.remove();
                    }
                });
            }
        });
    }
    l.default = c;
}, 98);