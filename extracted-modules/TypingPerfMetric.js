__d("TypingPerfMetric", [
    "WebAPIs",
    "clearTimeout",
    "performanceNow",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2000;
    function u(e) {
        return !!(e.code === "Space" && e.ctrlKey && e.metaKey || e.code === "Period" && e.getModifierState("OS"));
    }
    function c(e, t, n) {
        let o = null;
        let a = 0;
        let i = 0;
        let l = 0;
        let u = 0;
        let c = [];
        let d = null;
        const p = ()=>{
            if (a !== 0) {
                n({
                    allTimes: c,
                    averageTimeToRender: i,
                    keypresses: a,
                    max: l,
                    min: u
                });
            }
            a = 0;
            i = 0;
            l = 0;
            u = 0;
            c = [];
        };
        const _ = function() {
            o = null;
            p();
        };
        const f = m(e, ({ timestamps })=>{
            if (o == null) {
                o = e;
                if (t) {
                    t();
                }
            } else if (o !== e) {
                p();
                if (d != null) {
                    r("clearTimeout")(d);
                    d = null;
                }
                o = e;
                if (t) {
                    t();
                }
            }
            const f = timestamps.finalRAF - timestamps.keydown;
            if (f > 0) {
                a++;
                c.push(f);
                i = (i * (a - 1) + f) / a;
                if (f > l) {
                    l = f;
                }
                if (f < u || u === 0) {
                    u = f;
                }
            }
            if (d != null) {
                r("clearTimeout")(d);
            }
            d = r("setTimeoutAcrossTransitions")(_, s);
        });
        return function() {
            f();
            p();
            if (d != null) {
                r("clearTimeout")(d);
                d = null;
            }
            o = null;
        };
    }
    const d = {
        lastRequestedAnimationFrame: null
    };
    function m(t, n) {
        const a = 20;
        const i = new Float64Array(a);
        const l = new Float64Array(a);
        const s = new Float64Array(a);
        let c = -1;
        let m = -1;
        let mutations = 0;
        let _ = false;
        const f = function(n) {
            c = n.timeStamp;
            m = (e || (e = r("performanceNow")))();
            _ = u(n);
        };
        const g = function() {
            _ = true;
        };
        const h = function() {
            _ = true;
        };
        t.addEventListener("keydown", f);
        t.addEventListener("paste", g);
        t.addEventListener("cut", h);
        let y = false;
        const C = new MutationObserver(function(f) {
            if (_) {
                _ = false;
                c = -1;
                m = -1;
                return;
            }
            if (mutations >= a) {
                c = -1;
                m = -1;
                return;
            }
            const u = (e || (e = r("performanceNow")))();
            let g = false;
            for (const h of f){
                const C = h.type === "characterData" || h.type === "childList" && h.addedNodes.length !== 0 || h.type === "attributes" && h.target.nodeName === "INPUT" && h.attributeName === "value";
                if (!(!C || c === -1 || g)) {
                    i[mutations] = c;
                    l[mutations] = m;
                    s[mutations] = u;
                    c = -1;
                    m = -1;
                    mutations++;
                    g = true;
                    if (y) {
                        return;
                    }
                    d.lastRequestedAnimationFrame = o("WebAPIs").requestAnimationFrame(function(r) {
                        y = false;
                        const e = s[0];
                        if (r - e < 0) {
                            d.lastRequestedAnimationFrame = o("WebAPIs").requestAnimationFrame(function(r) {
                                for(let e = 0; e < mutations; e++){
                                    const o = i[e];
                                    const a = s[e];
                                    n({
                                        delta: r - o,
                                        element: t,
                                        firedOnSecondRAF: true,
                                        mutations,
                                        timestamps: {
                                            finalRAF: r,
                                            keydown: o,
                                            mutation: a
                                        }
                                    });
                                    i[e] = 0;
                                    l[e] = 0;
                                    s[e] = 0;
                                }
                                mutations = 0;
                            });
                        } else {
                            for(let a = 0; a < mutations; a++){
                                const u = i[a];
                                const c = s[a];
                                n({
                                    delta: r - u,
                                    element: t,
                                    firedOnSecondRAF: true,
                                    mutations,
                                    timestamps: {
                                        finalRAF: r,
                                        keydown: u,
                                        mutation: c
                                    }
                                });
                                i[a] = 0;
                                l[a] = 0;
                                s[a] = 0;
                            }
                            mutations = 0;
                        }
                    });
                    y = true;
                }
            }
        });
        C.observe(t, {
            attributeFilter: [
                "value"
            ],
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true
        });
        return function() {
            C.disconnect();
            t.removeEventListener("keydown", f);
            t.removeEventListener("paste", g);
            t.removeEventListener("cut", h);
            const d_lastRequestedAnimationFrame = d.lastRequestedAnimationFrame;
            if (d_lastRequestedAnimationFrame != null) {
                o("WebAPIs").cancelAnimationFrame(d_lastRequestedAnimationFrame);
            }
        };
    }
    l.measureAverageTypingPerformance = c;
}, 98);