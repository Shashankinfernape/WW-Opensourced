__d("VisualCompletionTraceObserver", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = [];
    let l = [];
    const s = {
        subscribe: function(n) {
            e.push(n);
        },
        subscribeStart: function(t) {
            l.push(t);
        },
        unsubscribe: function(n) {
            e = e.filter((e)=>e !== n);
        },
        unsubscribeStart: function(t) {
            l = l.filter((e)=>e !== t);
        },
        emit: function(n) {
            e.forEach((e)=>e(n));
        },
        emitStart: function(t) {
            l.forEach((e)=>e(t));
        }
    };
    i.default = s;
}, 66);