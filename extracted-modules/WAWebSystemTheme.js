__d("WAWebSystemTheme", [
    "WAWebEventEmitter",
    "WAWebUserPrefsMultiDevice"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            t.theme = t.getCurrentTheme();
            t.handleThemeChange = function() {
                const e = t.getCurrentTheme();
                if (!(!o("WAWebUserPrefsMultiDevice").isRegistered() || e === t.theme)) {
                    t.theme = e;
                    t.trigger("system_theme_change", e);
                }
            };
            t.mediaQuery.addListener(t.handleThemeChange);
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.getCurrentTheme = function() {
            if (this.mediaQuery.matches) {
                return "dark";
            }
            return "light";
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.default = s;
}, 98);