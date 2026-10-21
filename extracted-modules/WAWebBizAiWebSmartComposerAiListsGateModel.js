__d("WAWebBizAiWebSmartComposerAiListsGateModel", [
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
    l.BizAiWebSmartComposerAiListsGateEventBus = e;
    l.applyBizAiWebSmartComposerAiListsGate = u;
    l.isBizAiWebSmartComposerAiListsGateEnabled = c;
}, 98);