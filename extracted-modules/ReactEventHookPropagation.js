__d("ReactEventHookPropagation", [], function(t, n, r, o, a, i) {
    "use strict";
    function e({ _stopEventHookPropagation: e__stopEventHookPropagation }, t) {
        return e__stopEventHookPropagation !== undefined && e__stopEventHookPropagation[t];
    }
    function l(e, t) {
        const n = e;
        let n__stopEventHookPropagation = n._stopEventHookPropagation;
        if (!n__stopEventHookPropagation) {
            n__stopEventHookPropagation = n._stopEventHookPropagation = {};
        }
        n__stopEventHookPropagation[t] = true;
    }
    i.hasEventHookPropagationStopped = e;
    i.stopEventHookPropagation = l;
}, 66);