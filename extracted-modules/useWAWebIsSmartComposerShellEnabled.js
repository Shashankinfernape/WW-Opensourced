__d("useWAWebIsSmartComposerShellEnabled", [
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiSmartComposerGating",
    "useWAWebBizAiWebSmartComposerAiListsGateEnabled"
], function(t, n, r, o, a, i, l) {
    function e() {
        "use no forget";
        const e = r("useWAWebBizAiWebSmartComposerAiListsGateEnabled")();
        const t = o("WAWebBizAiSmartComposerGating").isSmartComposerShellBaseEnabledWithJointGate(e);
        const n = o("WAWebBizAiAgentStatusUtils").useHasOnboardedAiAgent(t);
        return t && n;
    }
    l.default = e;
}, 98);