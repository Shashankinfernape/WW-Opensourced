__d("WAWebBizAiHandoffRemovalTimingModel", [
    "WALogger",
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (r("WAWebEventEmitter"));
    let u = "IMMEDIATELY";
    function c() {
        return u;
    }
    function d(e) {
        if (e !== u) {
            u = e;
            s.trigger("updated");
        }
    }
    function m(t) {
        if (t == null) {
            return "IMMEDIATELY";
        }
        const n = String(t);
        if (n === "AFTER_24H_REPLY") {
            return "AFTER_24H_REPLY";
        }
        if (n !== "IMMEDIATELY") {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unrecognized handoff removal timing: ",
                ""
            ])), n).sendLogs("biz-ai-handoff-removal-timing-unknown");
        }
        return "IMMEDIATELY";
    }
    l.BizAiHandoffRemovalTimingEventBus = s;
    l.getHandoffRemovalTiming = c;
    l.applyHandoffRemovalTiming = d;
    l.toHandoffRemovalTiming = m;
}, 98);