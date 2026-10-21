__d("TypingPerfMetric.experimental", [
    "clearTimeout",
    "performanceNow",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2000;
    const u = new Set([
        "insertText",
        "insertCompositionText",
        "insertFromComposition",
        "insertLineBreak",
        "insertParagraph",
        "deleteCompositionText",
        "deleteContentBackward",
        "deleteByComposition",
        "deleteContent",
        "deleteContentForward",
        "deleteWordBackward",
        "deleteWordForward",
        "deleteHardLineBackward",
        "deleteSoftLineBackward",
        "deleteHardLineForward",
        "deleteSoftLineForward"
    ]);
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
        const f = m(e, (n)=>{
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
            if (n > 0) {
                a++;
                c.push(n);
                i = (i * (a - 1) + n) / a;
                if (n > l) {
                    l = n;
                }
                if (n < u || u === 0) {
                    u = n;
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
        lastSetTimeout: null
    };
    function m(t, n) {
        let o = false;
        const a = ()=>{
            const t = (e || (e = r("performanceNow")))();
            d.lastSetTimeout = window.setTimeout(function() {
                if (o) {
                    o = false;
                    return;
                }
                const a = (e || (e = r("performanceNow")))();
                n(a - t);
            }, 0);
        };
        const i = function(t) {
            if (!u.has(t.inputType) || o) {
                o = false;
                return;
            }
            a();
        };
        const l = function({ keyCode }) {
            if (keyCode === 8 || keyCode === 13) {
                a();
            }
        };
        const s = function() {
            o = true;
        };
        const c = function() {
            o = true;
        };
        t.addEventListener("keydown", l, true);
        t.addEventListener("beforeinput", i, true);
        t.addEventListener("paste", s, true);
        t.addEventListener("cut", c, true);
        return function() {
            t.removeEventListener("keydown", l, true);
            t.removeEventListener("beforeinput", i, true);
            t.removeEventListener("paste", s, true);
            t.removeEventListener("cut", c, true);
            const d_lastSetTimeout = d.lastSetTimeout;
            if (d_lastSetTimeout != null) {
                r("clearTimeout")(d_lastSetTimeout);
            }
        };
    }
    l.measureAverageTypingPerformance = c;
}, 98);