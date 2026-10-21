__d("WAWebBizAiResponseSettingsV2GateModel", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WAWebEventEmitter"));
    let s = false;
    function u(t) {
        s = t;
        e.trigger("updated");
    }
    function c() {
        return s;
    }
    l.BizAiResponseSettingsV2GateEventBus = e;
    l.applyBizAiResponseSettingsV2Gate = u;
    l.isBizAiResponseSettingsV2GateEnabled = c;
}, 98);