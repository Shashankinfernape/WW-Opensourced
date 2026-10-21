__d("CPUPressure", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "PressureObserver" in window;
    const l = new Set;
    let s = false;
    let u = "nominal";
    function c() {
        return u;
    }
    function d() {
        if (!s) {
            if (e) {
                try {
                    const t = new window.PressureObserver(function(e) {
                        e.forEach((e)=>{
                            u = e.state;
                            l.forEach((t)=>{
                                t(e);
                            });
                        });
                    });
                    t.observe("cpu", {
                        sampleInterval: 1000
                    });
                } catch (e) {}
            }
            s = true;
        }
    }
    function m(t) {
        if (e) {
            l.add(t);
            return function() {
                l.delete(t);
            };
        }
        return function() {};
    }
    i.canUseCPUPressureAPI = e;
    i.getCurrentState = c;
    i.init = d;
    i.subscribe = m;
}, 66);