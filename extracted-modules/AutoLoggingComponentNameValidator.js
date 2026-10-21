__d("AutoLoggingComponentNameValidator", [
    "AutoLoggingComponentValidatorListSitevarConfig.experimental",
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        COMPONENT_ALLOW_LIST: r("AutoLoggingComponentValidatorListSitevarConfig.experimental").COMPONENT_ALLOW_LIST,
        COMPONENT_BLOCK_LIST: r("AutoLoggingComponentValidatorListSitevarConfig.experimental").COMPONENT_BLOCK_LIST
    };
    const s = (t)=>t.join("|");
    let u = null;
    function c(t) {
        if (u != null && u !== t) {
            r("FBLogger")("auto_logging").warn("Config name used to get validator changed, ensure you are using consistent init config across AutoLogging", u, t);
        }
        u = t;
        const a = r("AutoLoggingComponentValidatorListSitevarConfig.experimental").TOOL_CONFIG?.[t] ?? e;
        const i = s(a.COMPONENT_ALLOW_LIST);
        const l = s(a.COMPONENT_BLOCK_LIST);
        return function(e) {
            return e.match(i) != null && e.match(l) == null;
        };
    }
    l.getComponentNameValidator = c;
}, 98);