__d("WAWebInteractiveBloksWidgetLogger", [
    "WAWebBizAiComponentInteractionWamEvent",
    "WAWebWamEnumBizAiRenderOutcomeType"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const a = e?.fallback;
        new (o("WAWebBizAiComponentInteractionWamEvent")).BizAiComponentInteractionWamEvent({
            bizAiRenderOutcome: o("WAWebWamEnumBizAiRenderOutcomeType").BIZ_AI_RENDER_OUTCOME_TYPE.FALLBACK,
            bizAiClientHasFallbackText: a != null && a !== "",
            bizAiComponentType: e?.type ?? "",
            bizAiMessageUuid: e?.uuid ?? "",
            bizAiErrorDetail: t ?? undefined
        }).commit();
    }
    l.logInteractiveBloksWidgetFallback = e;
}, 98);