__d("NetworkHeartbeat", [
    "clearTimeout",
    "getSameOriginTransport",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "/nw/";
    const s = 6400;
    let u = 100;
    let c = null;
    let d = 0;
    let m = null;
    let p = false;
    function _(t, n) {
        const o = r("getSameOriginTransport")();
        m = o;
        o.open("GET", e, true);
        o.onload = function() {
            if (m && m.status === 204) {
                p = true;
            }
            g(t);
        };
        o.onerror = function() {
            h(t, n);
        };
        o.ontimeout = function() {
            h(t, n);
        };
        o.send();
    }
    function f() {
        m = null;
        u = 100;
        d = 0;
        r("clearTimeout")(c);
    }
    function g(e) {
        f();
        e();
    }
    function h(e, t) {
        c = r("setTimeout")(function() {
            y(e, t, undefined, true);
        }, u);
        d++;
        if (u < s) {
            u = Math.min(u * 2 ** d, s);
        }
        t();
    }
    function y(e, t, n = function() {
        return true;
    }, r = false) {
        if (!p) {
            if (r || m == null && n()) {
                _(e, t);
            }
        }
    }
    function C() {
        return m != null;
    }
    l.maybeStartHeartbeat = y;
    l.isHeartbeatPending = C;
}, 98);