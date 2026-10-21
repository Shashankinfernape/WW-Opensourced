__d("WAWebPDFNUtils", [
    "WAWebThemeContext"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebThemeContext").useIsDarkTheme();
        if (e == null) {
            return null;
        }
        if (t) {
            return e.dark;
        }
        return e.light;
    }
    l.usePDFNThemedIcon = e;
}, 98);