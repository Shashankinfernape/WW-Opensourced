__d("WAWebAboutWamLogger", [
    "WAWebAboutConsumptionWamEvent",
    "WAWebAboutCreationWamEvent",
    "WAWebAboutInteractionWamEvent",
    "WAWebWamEnumAboutConsumptionSurfaceType",
    "WAWebWamEnumAboutEntrypointType",
    "WAWebWamEnumAboutPromptType",
    "WAWebWamEnumAboutRequestType",
    "WAWebWamEnumPresetType"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        share_thought: (e = o("WAWebWamEnumAboutPromptType")).ABOUT_PROMPT_TYPE.SHARE_A_THOUGHT,
        whats_happening: e.ABOUT_PROMPT_TYPE.WHATS_HAPPENING,
        current_mood: e.ABOUT_PROMPT_TYPE.CURRENT_MOOD,
        monday_motivation: e.ABOUT_PROMPT_TYPE.MONDAY_MOTIVATION
    };
    function u(e) {
        const r = e?.aboutPromptKey;
        new (o("WAWebAboutCreationWamEvent")).AboutCreationWamEvent({
            aboutDuration: e?.aboutDuration ?? 0,
            aboutEntrypoint: e?.aboutEntrypoint,
            aboutLength: e?.aboutLength ?? 1,
            aboutOverallT: e?.aboutOverallT,
            aboutPresetSelected: e?.aboutPresetSelected,
            aboutPrompt: r != null ? s[r] : undefined,
            aboutRequestType: e?.aboutRequestType,
            preset: e?.preset
        }).commit();
    }
    function c(e) {
        new (o("WAWebAboutConsumptionWamEvent")).AboutConsumptionWamEvent({
            aboutConsumptionSurface: e?.aboutConsumptionSurface
        }).commit();
    }
    function d(e) {
        new (o("WAWebAboutInteractionWamEvent")).AboutInteractionWamEvent({
            aboutConsumptionSurface: e?.aboutConsumptionSurface
        }).commit();
    }
    l.ABOUT_CONSUMPTION_SURFACE_TYPE = o("WAWebWamEnumAboutConsumptionSurfaceType").ABOUT_CONSUMPTION_SURFACE_TYPE;
    l.ABOUT_ENTRYPOINT_TYPE = o("WAWebWamEnumAboutEntrypointType").ABOUT_ENTRYPOINT_TYPE;
    l.ABOUT_REQUEST_TYPE = o("WAWebWamEnumAboutRequestType").ABOUT_REQUEST_TYPE;
    l.PRESET_TYPE = o("WAWebWamEnumPresetType").PRESET_TYPE;
    l.logAboutCreation = u;
    l.logAboutConsumption = c;
    l.logAboutInteraction = d;
}, 98);