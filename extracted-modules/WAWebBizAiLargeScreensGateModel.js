__d("WAWebBizAiLargeScreensGateModel", [
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
    l.BizAiLargeScreensGateEventBus = e;
    l.applyBizAiLargeScreensGate = u;
    l.isBizAiLargeScreensGateEnabled = c;
}, 98);