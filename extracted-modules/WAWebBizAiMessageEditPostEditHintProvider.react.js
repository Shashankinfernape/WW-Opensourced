__d("WAWebBizAiMessageEditPostEditHintProvider.react", [
    "WAWebBizAiAgentGating",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiMessageEditEducationState",
    "WAWebBizAiMessageEditPostEditHintContext",
    "WAWebBizAiWebEditingCoachingGateModel",
    "WAWebCmd",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useSyncExternalStore = e.useSyncExternalStore;
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { children, isEnabled } = e;
        const i = e_useSyncExternalStore(o("WAWebBizAiMessageEditEducationState").subscribeToActivePostEditHint, o("WAWebBizAiMessageEditEducationState").getActivePostEditHint);
        let l;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebBizAiLargeScreensGateModel").BizAiLargeScreensGateEventBus,
                o("WAWebBizAiWebEditingCoachingGateModel").BizAiWebEditingCoachingGateEventBus,
                o("WAWebCmd").Cmd
            ];
            c = [
                "updated",
                "on_ab_props_update_from_bridge"
            ];
            t[0] = l;
            t[1] = c;
        } else {
            l = t[0];
            c = t[1];
        }
        r("useWAWebEventTargetValue")(l, c, d);
        let m;
        if (t[2] !== i || t[3] !== isEnabled) {
            m = isEnabled && i != null && o("WAWebBizAiAgentGating").isAiAgentMessageEditingEnabled() ? i : null;
            t[2] = i;
            t[3] = isEnabled;
            t[4] = m;
        } else {
            m = t[4];
        }
        const p = m;
        let _;
        if (t[5] !== children || t[6] !== p) {
            const Component = r("WAWebBizAiMessageEditPostEditHintContext").Provider;
            _ = <Component value={p}>{children}</Component>;
            t[5] = children;
            t[6] = p;
            t[7] = _;
        } else {
            _ = t[7];
        }
        return _;
    }
    function d() {
        return {};
    }
    l.default = c;
}, 98);