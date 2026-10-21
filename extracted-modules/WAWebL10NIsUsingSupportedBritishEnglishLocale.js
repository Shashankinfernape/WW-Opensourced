__d("WAWebL10NIsUsingSupportedBritishEnglishLocale", [
    "WAWebL10N"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        "en-GB",
        "en-AU",
        "en-IN"
    ]);
    function s() {
        const t = r("WAWebL10N").getFullLocale();
        return e.has(t);
    }
    l.isUsingSupportedBritishEnglishLocale = s;
}, 98);