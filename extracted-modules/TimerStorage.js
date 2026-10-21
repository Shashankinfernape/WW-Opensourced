__d("TimerStorage", [], function(t, n, r, o, a, i) {
    const e = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    const l = {};
    Object.keys(e).forEach((e)=>l[e] = {});
    const s = babelHelpers.extends({}, e, {
        set: function(t, n) {
            l[t][n] = true;
        },
        unset: function(t, n) {
            delete l[t][n];
        },
        clearAll: function(t, n) {
            Object.keys(l[t]).forEach(n);
            l[t] = {};
        },
        getStorages: function() {
            return {};
        }
    });
    i.default = s;
}, 66);