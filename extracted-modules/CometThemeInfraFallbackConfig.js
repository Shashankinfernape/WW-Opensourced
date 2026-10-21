__d("CometThemeInfraFallbackConfig", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set;
    function l(fallbackThemes, t) {
        return fallbackThemes.auto === t.auto && fallbackThemes.dark === t.dark && fallbackThemes.light === t.light;
    }
    var s = {
        fallbackThemes: {
            auto: null,
            dark: null,
            light: null
        },
        setFallbackTheme: function(n) {
            if (!l(s.fallbackThemes, n)) {
                s.fallbackThemes = n;
                e.forEach((e)=>e());
            }
        },
        subscribe: function(n) {
            e.add(n);
            return function() {
                e.delete(n);
            };
        }
    };
    i.default = s;
}, 66);