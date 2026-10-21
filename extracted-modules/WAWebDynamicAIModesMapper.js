__d("WAWebDynamicAIModesMapper", [], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e.flatMap((e)=>{
            const { mode_id, subtitle, title, type } = e;
            if (mode_id == null || title == null || subtitle == null || type == null) {
                return [];
            }
            return [
                {
                    modeId: Number(mode_id),
                    type,
                    title,
                    subtitle,
                    isExperimental: e.is_experimental ?? false
                }
            ];
        });
    }
    l.mapFetchedModesToDynamicAIModeList = e;
}, 98);