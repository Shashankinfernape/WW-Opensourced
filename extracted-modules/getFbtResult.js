__d("getFbtResult", [
    "FBLogger",
    "FbtResult",
    "FbtResultGK",
    "InlineFbtResult",
    "getUnwrappedFbt",
    "gkx"
], function(t, n, r, o, a, i, l) {
    if (r("gkx")("20935") && r("FbtResultGK").inlineMode === "TRANSLATION") {
        r("FBLogger")("internationalization").mustfix("TransAppInlineMode=TRANSLATION should not happen on Comet yet. [inlineMode=%s][runtime_site_is_comet=%s]", r("FbtResultGK").inlineMode != null ? r("FbtResultGK").inlineMode : "", String(r("gkx")("20935")));
    }
    function e(e) {
        const t = r("getUnwrappedFbt")(e);
        if (t != null) {
            return t;
        }
        const { contents, patternHash, patternString } = e;
        if (r("FbtResultGK").inlineMode != null && r("FbtResultGK").inlineMode !== "NO_INLINE") {
            return new (r("InlineFbtResult"))(contents, r("FbtResultGK").inlineMode, patternString, patternHash);
        }
        return r("FbtResult").get(e);
    }
    l.default = e;
}, 98);