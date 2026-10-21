__d("WAWebL10NGetSystemLocale", [
    "WAWebL10NCoerceToFBLocale"
], function(t, n, r, o, a, i, l) {
    function e() {
        const navigator_language = navigator.language;
        const t = navigator_language || o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE;
        return o("WAWebL10NCoerceToFBLocale").coerceWAWebL10nLocaleToFBLocale(t);
    }
    const s = new Set([
        "ar",
        "fa",
        "he",
        "ps",
        "sy",
        "ur",
        "yi",
        "cb"
    ]);
    function u() {
        const e = navigator.language || o("WAWebL10NCoerceToFBLocale").DEFAULT_WA_WEB_LOCALE;
        const t = e.toLocaleLowerCase("en").split(/[-_]/)[0];
        return s.has(t);
    }
    l.getSystemLocale = e;
    l.isSystemLocaleRTL = u;
}, 98);