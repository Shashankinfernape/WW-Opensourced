__d("NetworkStatusImpl", [
    "NetworkHeartbeat",
    "justknobx",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    const u = [];
    const c = typeof window !== "undefined" ? window : self;
    let online = c?.navigator?.onLine;
    const m = 2;
    const p = 5000;
    let _ = [];
    let f = [];
    let g = 0;
    const h = true;
    const y = false;
    let C = false;
    var b = function() {
        L(h, true);
    };
    var v = function() {
        L(y, true);
    };
    function S() {
        const e = u.slice();
        e.forEach((e)=>{
            e({
                online
            });
        });
    }
    function R(e) {
        const t = u.indexOf(e);
        if (t > -1) {
            u.splice(t, 1);
        }
    }
    function L(e, t = false) {
        const n = online === e;
        const r = !t && e === h && o("NetworkHeartbeat").isHeartbeatPending();
        if (!(n || r)) {
            C = C || e === y;
            online = e;
            if (!online) {
                o("NetworkHeartbeat").maybeStartHeartbeat(b, v);
            }
            S();
        }
    }
    function E() {
        const e = (s || (s = r("performanceNow")))();
        _ = _.filter((t)=>k(t.startTime, e));
        f = f.filter((t)=>k(t.startTime, e));
        return f.length / _.length < m;
    }
    var k = (t, n)=>t > n - p;
    function I() {
        return online;
    }
    function T(e) {
        u.push(e);
        let t = false;
        return {
            remove: function() {
                if (!t) {
                    t = true;
                    R(e);
                }
            }
        };
    }
    function D() {
        const e = (s || (s = r("performanceNow")))();
        _.push({
            startTime: e
        });
        o("NetworkHeartbeat").maybeStartHeartbeat(b, v, E);
    }
    function x() {
        const e = (s || (s = r("performanceNow")))();
        f.push({
            startTime: e
        });
        if (!k(g, e)) {
            f = f.filter((t)=>k(t.startTime, e));
            g = e;
        }
    }
    function $() {
        return C;
    }
    if (!online && r("justknobx")._("4216")) {
        o("NetworkHeartbeat").maybeStartHeartbeat(b, v);
    }
    c.addEventListener("online", function() {
        L(h);
    });
    c.addEventListener("offline", function() {
        L(y);
    });
    l.isOnline = I;
    l.onChange = T;
    l.reportError = D;
    l.reportSuccess = x;
    l.wasOffline = $;
}, 98);