__d("WAWebExperienceIdReceive", [
    "WALogger",
    "WAWebExperienceIdGatingUtils",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 10;
    function u(t, n, a) {
        try {
            if (a !== "relay" || t.id?.fromMe === true || n.isForwarded === true || !o("WAWebExperienceIdGatingUtils").isExperienceIdReceiveEnabled()) {
                return;
            }
            const l = c(n.experienceIds);
            if (l != null) {
                t.experienceIds = l;
            }
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "maybeStampExperienceIds failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("experience-id-stamp-failed");
        }
    }
    function c(experienceIds) {
        if (!Array.isArray(experienceIds) || experienceIds.length === 0) {
            return null;
        }
        const t = Array.from(new Set(experienceIds.filter((e)=>Number.isInteger(e) && e > 0))).slice(0, s);
        if (t.length > 0) {
            return t;
        }
        return null;
    }
    l.MAX_EXPERIENCE_IDS_PER_MSG = s;
    l.maybeStampExperienceIds = u;
}, 98);