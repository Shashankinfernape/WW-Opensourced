__d("WAWebL10nHelpersBridgeApi", [
    "WAWebFrontendL10nHelpers",
    "WAWebL10N"
], function(t, n, r, o, a, i, l) {
    const e = {
        mungeLocaleOverrideFromUrlIfNecessary: function() {
            o("WAWebFrontendL10nHelpers").mungeWAWebLocaleOverrideFromUrlIfNecessary();
        },
        extendLocalePrefCookieTtl: function() {
            o("WAWebFrontendL10nHelpers").extendWAWebLocalePrefCookieTtl();
        },
        getUserLocale: function() {
            return r("WAWebL10N").getLocale();
        },
        getNormalizedLocale: function() {
            return r("WAWebL10N").getNormalizedLocale();
        },
        getFullLocale: function() {
            return r("WAWebL10N").getFullLocale();
        },
        getLanguage: function() {
            return r("WAWebL10N").getLanguage();
        },
        normalizeLocaleToWajsLocale: function({ locale }) {
            return r("WAWebL10N").normalizeLocaleToWajsLocale(locale);
        },
        setLocale: function({ locale, priority, reload }) {
            return r("WAWebL10N").setLocale(locale, priority, reload);
        }
    };
    l.L10nHelpersBridgeApi = e;
}, 98);