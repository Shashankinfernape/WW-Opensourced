__d("WAWebVoipGpuDeviceLiveness", [
    "Promise",
    "WAWebNoop",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, o) {
            t.catch(r("WAWebNoop"));
            let a = null;
            const i = new (e || (e = n("Promise")))(function(e, t) {
                a = self.setTimeout(function() {
                    t(new u(`${o.label}: timed out after ${o.timeoutMs}ms`));
                }, o.timeoutMs);
            });
            const l = [
                t,
                i
            ];
            const o_lostPromise = o.lostPromise;
            if (o_lostPromise != null) {
                const d = o_lostPromise.then(()=>{
                    throw new s(`${o.label}: device lost`);
                });
                d.catch(r("WAWebNoop"));
                l.push(d);
            }
            try {
                return yield (e || (e = n("Promise"))).race(l);
            } finally{
                if (a != null) {
                    self.clearTimeout(a);
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.DeviceLostError = s;
    l.DeviceLivenessTimeoutError = u;
    l.withDeviceLiveness = c;
}, 98);