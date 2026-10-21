__d("WAWebPwaDocumentMetadataUtils", [
    "WAWebNoop",
    "WAWebRuntimeEnvironmentUtils"
], function(t, n, r, o, a, i, l) {
    let e = "";
    let s = -1;
    let u;
    if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        e = document.title;
    }
    function c(t = null) {
        if (t != null) {
            e = t;
        }
        d(e);
    }
    function d(e, t = false) {
        if (g() && !t) {
            document.title = " ";
        } else {
            self.clearTimeout(u);
            document.title += " ";
            u = self.setTimeout(function() {
                document.title = e;
            }, 0);
        }
    }
    const m = 2000;
    const p = 60000;
    function _(t) {
        let n = false;
        let r = false;
        const o = self.setInterval(function() {
            n = !n;
            const r = n ? t : e;
            d(r, true);
        }, m);
        const a = function() {
            if (!r) {
                r = true;
                self.clearInterval(o);
                self.clearTimeout(i);
                d(e, true);
            }
        };
        var i = self.setTimeout(a, p);
        return a;
    }
    function f(e) {
        if (e != null) {
            s = e;
        }
        if (g != null && g() && "setAppBadge" in navigator) {
            if (s === -1 || s === 0) {
                if (navigator.clearAppBadge != null) {
                    navigator.clearAppBadge().catch(r("WAWebNoop"));
                }
            } else if (navigator.setAppBadge != null) {
                navigator.setAppBadge(s).catch(r("WAWebNoop"));
            }
        }
    }
    function g() {
        if ("matchMedia" in self) {
            return window.matchMedia("(display-mode: standalone)").matches;
        }
        return false;
    }
    l.setDocumentTitle = c;
    l.startDocumentTitleFlash = _;
    l.setAppBadge = f;
    l.isCurrentWebSessionInsidePwa = g;
}, 98);