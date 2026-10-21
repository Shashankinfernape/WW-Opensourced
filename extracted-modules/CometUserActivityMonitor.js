__d("CometUserActivityMonitor", [
    "ErrorGuard",
    "ExecutionEnvironment",
    "SubscriptionsHandler",
    "UFI2UserActivityIdleTimeout",
    "UserActivity",
    "Visibility"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = [];
    let c = false;
    let d = (e || (e = r("ExecutionEnvironment"))).canUseDOM && r("UserActivity").isOnTab() && r("UserActivity").isActive(r("UFI2UserActivityIdleTimeout")) ? "ACTIVE" : "INACTIVE";
    const m = [];
    let p;
    function _(e) {
        c = true;
        m.push(...u);
        const t = ()=>{
            const t = m.shift();
            if (t != null) {
                (s || (s = r("ErrorGuard"))).applyWithGuard(function() {
                    return t(e);
                }, null, [], {
                    name: "CometUserActivityMonitor"
                });
            }
        };
        while(m.length){
            t();
        }
        c = false;
    }
    function f(e) {
        const t = d;
        d = e;
        if (t !== e) {
            _(e);
        }
    }
    function g() {
        return d;
    }
    const h = function() {
        if (p == null) {
            p = new (r("SubscriptionsHandler"));
            p.addSubscriptions(r("UserActivity").subscribe(function(e, { event }) {
                if (!(/^mouse(enter|leave|move|over|out)$/.test(event.type) && r("UserActivity").isOnTab() === false)) {
                    f("ACTIVE");
                }
            }), (()=>{
                const e = function() {
                    f("INACTIVE");
                };
                window.addEventListener("blur", e, {
                    passive: true
                });
                return {
                    remove: function() {
                        return window.removeEventListener(e);
                    }
                };
            })(), r("Visibility").addListener(r("Visibility").HIDDEN, function() {
                f("INACTIVE");
            }));
        }
    };
    function y(e) {
        u.push(e);
        if (c) {
            m.push(e);
        }
        let t = false;
        return {
            remove: function() {
                if (!t) {
                    const n = u.indexOf(e);
                    if (n !== -1) {
                        u.splice(n, 1);
                    }
                    if (c) {
                        const r = m.indexOf(e);
                        if (r !== -1) {
                            m.splice(r, 1);
                        }
                    }
                    t = true;
                }
            }
        };
    }
    if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        h();
    }
    l.getActivityState = g;
    l.init = h;
    l.subscribe = y;
}, 98);