__d("WAWebBizAiWebEditingCoachingGateModel", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WAWebEventEmitter"));
    let s = false;
    function u(t) {
        if (s !== t) {
            s = t;
            e.trigger("updated");
        }
    }
    function c() {
        return s;
    }
    l.BizAiWebEditingCoachingGateEventBus = e;
    l.applyBizAiWebEditingCoachingGate = u;
    l.isBizAiWebEditingCoachingGateEnabled = c;
}, 98);