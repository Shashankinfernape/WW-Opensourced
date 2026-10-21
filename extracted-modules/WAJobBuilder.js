__d("WAJobBuilder", [
    "Promise",
    "WAPersistedJobManager",
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function e(e) {
            this.steps = e;
        }
        const t = e.prototype;
        t.step = function(t, n) {
            return this.$1(t, typeof n === "function" ? {
                code: n
            } : n);
        };
        t.$1 = function(n, { code: t, requirements: a, stopRetryIf: i }) {
            let l = d(a, t, i);
            if (i) {
                const { appCrashed: s, onStopRetry: u, timePassedSeconds: p } = i;
                const _ = d(null, m(u), i);
                if (p != null) {
                    l = c(function(e, t, { jobStartTime: r }) {
                        return o("WATimeUtils").happenedWithin(r, p);
                    }, l, _);
                }
                if (s) {
                    l = c(function(e, t, { afterCrash: r }) {
                        return !r;
                    }, l, _);
                }
            }
            return new e([].concat(this.steps, [
                {
                    stepName: n,
                    info: l
                }
            ]));
        };
        t.finalStep = function(t, n) {
            const e = this.step(t, n);
            return {
                end: function() {
                    return e.steps;
                }
            };
        };
        return e;
    })();
    function u() {
        return new s([]);
    }
    function c(e, t, n) {
        return function(r, o, a) {
            if (e(r, o, a)) {
                return t(r, o, a);
            }
            return n(r, o, a);
        };
    }
    function d(e, t, n) {
        const r = {
            requirements: e,
            code: t,
            stopRetryIf: n
        };
        return function() {
            return r;
        };
    }
    function m(t) {
        return function(r, a, i) {
            return (e || (e = n("Promise"))).resolve(t(r, a, i)).then((e)=>{
                if (e instanceof o("WAPersistedJobManager").InterruptJob) {
                    return e;
                }
                return new (o("WAPersistedJobManager")).InterruptJob(e);
            });
        };
    }
    l.JobBuilder = s;
    l.definePersistedJob = u;
}, 98);