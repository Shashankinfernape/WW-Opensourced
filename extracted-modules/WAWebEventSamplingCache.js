__d("WAWebEventSamplingCache", [
    "WAWebApiAbPropEventSamplingConfig",
    "WAWebEventSampling",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    let s = false;
    function u(t) {
        if (s) {
            return e.get(t);
        }
        return null;
    }
    function c() {
        o("WAWebEventSampling").setGetEventSamplingConfigValueImpl(u);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebApiAbPropEventSamplingConfig").getEventSamplingConfigs();
            t.forEach((t)=>{
                e.set(t.eventCode, t.samplingWeight);
            });
            s = true;
        });
        return m.apply(this, arguments);
    }
    l.initializeEventSamplingCache = c;
    l.updateEventSamplingFromStorage = d;
}, 98);