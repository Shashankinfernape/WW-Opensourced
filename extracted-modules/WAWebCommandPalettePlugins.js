__d("WAWebCommandPalettePlugins", [
    "WAWebThemeCommandPalettePlugin",
    "cr:8750",
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = [
            o("WAWebThemeCommandPalettePlugin").ThemeCommandPalettePlugin
        ];
        if (r("gkx")("16539")) {
            const a = (n("cr:8750") == null ? undefined : n("cr:8750").filter(Boolean)) ?? [];
            e.unshift(...a);
        }
        return e;
    }
    l.getAvailablePlugins = e;
}, 98);