__d("CSSLoader", [
    "CSSLoaderConfig",
    "CSSPoller",
    "ResourceTimingsStore",
    "TimeSlice",
    "ifRequired"
], function(t, n, r, o, a, i, l) {
    let loadEventSupported = r("CSSLoaderConfig").loadEventSupported;
    let s;
    function u(t) {
        if (!s) {
            s = true;
            const n = document.createElement("link");
            n.onload = function() {
                loadEventSupported = true;
                if (n.parentNode) {
                    n.parentNode.removeChild(n);
                }
            };
            n.rel = "stylesheet";
            n.href = "data:text/css;base64,";
            t.appendChild(n);
        }
    }
    function c(e, t, n, o) {
        r("CSSPoller").startCSSPoll(e, t, n, o);
    }
    function d(t, n, o, a, i, l, s = false) {
        const d = r("ResourceTimingsStore").getUID("css", n);
        r("ResourceTimingsStore").annotate("css", d).addStringAnnotation("name", t).addStringAnnotation("source", n).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        r("ifRequired")("TimeSliceInteraction", function(e) {
            e.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", n).addStringAnnotation("name", t);
        });
        r("ResourceTimingsStore").measureRequestSent("css", d);
        const m = function() {
            r("ResourceTimingsStore").measureResponseReceived("css", d);
            a();
        };
        const p = r("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        if (s) {
            c(t, m, i, l);
        } else if (loadEventSupported !== true) {
            c(t, m, i, l);
            if (loadEventSupported === undefined) {
                u(o);
            }
        } else {
            l.onload = p.bind(undefined, function() {
                l.onload = l.onerror = null;
                m();
            });
            l.onerror = p.bind(undefined, function() {
                l.onload = l.onerror = null;
                i();
            });
        }
    }
    const m = {
        loadStyleSheet: function(t, n, r, o, a, i, l) {
            const e = document.createElement("link");
            e.rel = "stylesheet";
            e.type = "text/css";
            e.href = n;
            if (o) {
                e.crossOrigin = "anonymous";
            }
            if (a != null) {
                e.dataset.btmanifest = a;
            }
            d(t, n, r, i, l, e);
            r.appendChild(e);
        },
        setupEventListenersForPotentiallyLoadedCSS: function(t, n, r, o, a, i) {
            d(t, n, r, o, a, i, true);
        }
    };
    i.exports = m;
}, 34);