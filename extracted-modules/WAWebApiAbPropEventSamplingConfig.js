__d("WAWebApiAbPropEventSamplingConfig", [
    "Promise",
    "WAWebBoolFunc",
    "WAWebModelStorageInitialize",
    "WAWebModelStorageUtils",
    "WAWebSchemaAbPropEventSamplingConfig"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return o("WAWebModelStorageInitialize").initializeWithoutGKs().then(()=>o("WAWebSchemaAbPropEventSamplingConfig").getAbpropEventSamplingConfigsTable().all().then((e)=>e));
    }
    function u(t) {
        if (t == null || t.length === 0) {
            return (e || (e = n("Promise"))).resolve(false);
        }
        const r = [];
        t.forEach((e)=>{
            r.push({
                eventCode: e.eventCode,
                samplingWeight: e.samplingWeight
            });
        });
        return o("WAWebModelStorageUtils").getStorage().lock([
            "abprop-event-sampling-configs"
        ], function([t]) {
            return t.clear().then(()=>t.bulkCreate(r).then(o("WAWebBoolFunc").returnTrue));
        });
    }
    l.getEventSamplingConfigs = s;
    l.updateEventSamplingConfigs = u;
}, 98);