__d("Scheduler-profiling.classic", [
    "SchedulerFeatureFlags"
], function(t, n, r, o, a, i) {
    "use strict";
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    }
    const enableRequestPaint = n("SchedulerFeatureFlags").enableRequestPaint;
    function l(e, t) {
        let e_length = e.length;
        e.push(t);
        e: while(e_length > 0){
            const r = e_length - 1 >>> 1;
            const o = e[r];
            if (c(o, t) > 0) {
                e[r] = t;
                e[e_length] = o;
                e_length = r;
            } else {
                break e;
            }
        }
    }
    function s(e) {
        if (e.length === 0) {
            return null;
        }
        return e[0];
    }
    function u(e) {
        if (e.length === 0) {
            return null;
        }
        const t = e[0];
        const n = e.pop();
        if (n !== t) {
            e[0] = n;
            e: for(let r = 0, o = e.length, a = o >>> 1; r < a;){
                const i = 2 * (r + 1) - 1;
                const l = e[i];
                const s = i + 1;
                const u = e[s];
                if (c(l, n) < 0) {
                    if (s < o && c(u, l) < 0) {
                        e[r] = u;
                        e[s] = n;
                        r = s;
                    } else {
                        e[r] = l;
                        e[i] = n;
                        r = i;
                    }
                } else if (s < o && c(u, n) < 0) {
                    e[r] = u;
                    e[s] = n;
                    r = s;
                } else {
                    break e;
                }
            }
        }
        return t;
    }
    function c(e, t) {
        const n = e.sortIndex - t.sortIndex;
        if (n !== 0) {
            return n;
        }
        return e.id - t.id;
    }
    i.unstable_now = undefined;
    if (typeof performance === "object" && typeof performance.now === "function") {
        const d = performance;
        i.unstable_now = function() {
            return d.now();
        };
    } else {
        const p = Date.now();
        i.unstable_now = function() {
            return Date.now() - p;
        };
    }
    const _ = [];
    const f = [];
    let g = 1;
    let h = null;
    let y = 3;
    let C = false;
    let b = false;
    let v = false;
    let S = false;
    const R = typeof setTimeout === "function" ? setTimeout : null;
    const L = typeof clearTimeout === "function" ? clearTimeout : null;
    const E = typeof setImmediate !== "undefined" ? setImmediate : null;
    function k(e) {
        for(let t = s(f); t !== null;){
            if (t.callback === null) {
                u(f);
            } else if (t.startTime <= e) {
                u(f);
                t.sortIndex = t.expirationTime;
                l(_, t);
            } else {
                break;
            }
            t = s(f);
        }
    }
    function I(e) {
        v = false;
        k(e);
        if (!b) {
            if (s(_) !== null) {
                b = true;
                if (!T) {
                    T = true;
                    M();
                }
            } else {
                const t = s(f);
                if (t !== null) {
                    F(I, t.startTime - e);
                }
            }
        }
    }
    var T = false;
    let D = -1;
    let x = 10;
    let $ = -1;
    function P() {
        if (enableRequestPaint && S) {
            return true;
        }
        return !(i.unstable_now() - $ < x);
    }
    function N() {
        if (enableRequestPaint) {
            S = false;
        }
        if (T) {
            let t = i.unstable_now();
            $ = t;
            let n = true;
            try {
                e: {
                    b = false;
                    if (v) {
                        v = false;
                        L(D);
                        D = -1;
                    }
                    C = true;
                    const r = y;
                    try {
                        t: {
                            k(t);
                            for(h = s(_); h !== null && !(h.expirationTime > t && P());){
                                const o = h.callback;
                                if (typeof o === "function") {
                                    h.callback = null;
                                    y = h.priorityLevel;
                                    const a = o(h.expirationTime <= t);
                                    t = i.unstable_now();
                                    if (typeof a === "function") {
                                        h.callback = a;
                                        k(t);
                                        n = true;
                                        break t;
                                    }
                                    if (h === s(_)) {
                                        u(_);
                                    }
                                    k(t);
                                } else {
                                    u(_);
                                }
                                h = s(_);
                            }
                            if (h !== null) {
                                n = true;
                            } else {
                                const l = s(f);
                                if (l !== null) {
                                    F(I, l.startTime - t);
                                }
                                n = false;
                            }
                        }
                        break e;
                    } finally{
                        h = null;
                        y = r;
                        C = false;
                    }
                    n = undefined;
                }
            } finally{
                if (n) {
                    M();
                } else {
                    T = false;
                }
            }
        }
    }
    var M;
    if (typeof E === "function") {
        M = function() {
            E(N);
        };
    } else if (typeof MessageChannel !== "undefined") {
        const w = new MessageChannel;
        const A = w.port2;
        w.port1.onmessage = N;
        M = function() {
            A.postMessage(null);
        };
    } else {
        M = function() {
            R(N, 0);
        };
    }
    function F(e, t) {
        D = R(function() {
            e(i.unstable_now());
        }, t);
    }
    i.unstable_IdlePriority = 5;
    i.unstable_ImmediatePriority = 1;
    i.unstable_LowPriority = 4;
    i.unstable_NormalPriority = 3;
    i.unstable_Profiling = null;
    i.unstable_UserBlockingPriority = 2;
    i.unstable_cancelCallback = function(e) {
        e.callback = null;
    };
    i.unstable_forceFrameRate = function(e) {
        if (!(e < 0 || e > 125)) {
            x = e > 0 ? Math.floor(1000 / e) : 10;
        }
    };
    i.unstable_getCurrentPriorityLevel = function() {
        return y;
    };
    i.unstable_next = function(e) {
        switch(y){
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = y;
        }
        const n = y;
        y = t;
        try {
            return e();
        } finally{
            y = n;
        }
    };
    i.unstable_requestPaint = function() {
        if (enableRequestPaint) {
            S = true;
        }
    };
    i.unstable_runWithPriority = function(e, t) {
        switch(e){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3;
        }
        const n = y;
        y = e;
        try {
            return t();
        } finally{
            y = n;
        }
    };
    i.unstable_scheduleCallback = function(priorityLevel, callback, n) {
        const r = i.unstable_now();
        if (typeof n === "object" && n !== null) {
            n = n.delay;
            n = typeof n === "number" && n > 0 ? r + n : r;
        } else {
            n = r;
        }
        switch(priorityLevel){
            case 1:
                var expirationTime = -1;
                break;
            case 2:
                expirationTime = 250;
                break;
            case 5:
                expirationTime = 1073741823;
                break;
            case 4:
                expirationTime = 10000;
                break;
            default:
                expirationTime = 5000;
        }
        expirationTime = n + expirationTime;
        priorityLevel = {
            id: g++,
            callback,
            priorityLevel,
            startTime: n,
            expirationTime,
            sortIndex: -1
        };
        if (n > r) {
            priorityLevel.sortIndex = n;
            l(f, priorityLevel);
            if (s(_) === null && priorityLevel === s(f)) {
                if (v) {
                    L(D);
                    D = -1;
                } else {
                    v = true;
                }
                F(I, n - r);
            }
        } else {
            priorityLevel.sortIndex = expirationTime;
            l(_, priorityLevel);
            if (!(b || C)) {
                b = true;
                if (!T) {
                    T = true;
                    M();
                }
            }
        }
        return priorityLevel;
    };
    i.unstable_shouldYield = P;
    i.unstable_wrapCallback = function(e) {
        const t = y;
        return function() {
            const n = y;
            y = t;
            try {
                return e.apply(this, arguments);
            } finally{
                y = n;
            }
        };
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }
}, null);