__d("useWAWebResolvedBotMode", [
    "WAWebAiModeSelectorUtils",
    "WAWebBotBaseGating",
    "react-compiler-runtime",
    "useWAWebBotModeSelection",
    "useWAWebDynamicBotModeOverride"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = o("react-compiler-runtime").c(17);
        const r = o("useWAWebDynamicBotModeOverride").useWAWebDynamicBotModeOverride(e, t);
        const a = o("useWAWebBotModeSelection").useWAWebBotModeSelection(e, t);
        if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
            if (r != null) {
                let i;
                if (n[0] !== r.type) {
                    i = o("WAWebAiModeSelectorUtils").getDynamicModeIcon(r.type);
                    n[0] = r.type;
                    n[1] = i;
                } else {
                    i = n[1];
                }
                let l;
                if (n[2] !== r.subtitle || n[3] !== r.title || n[4] !== i) {
                    l = {
                        icon: i,
                        title: r.title,
                        subtitle: r.subtitle
                    };
                    n[2] = r.subtitle;
                    n[3] = r.title;
                    n[4] = i;
                    n[5] = l;
                } else {
                    l = n[5];
                }
                return l;
            }
            let s;
            if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
                s = o("WAWebAiModeSelectorUtils").getDefaultDynamicResolvedBotMode();
                n[6] = s;
            } else {
                s = n[6];
            }
            return s;
        }
        const u = a.length > 0 ? a[0] : undefined;
        let c;
        if (n[7] !== u) {
            c = o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(u);
            n[7] = u;
            n[8] = c;
        } else {
            c = n[8];
        }
        let d;
        if (n[9] !== u) {
            d = o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(u);
            n[9] = u;
            n[10] = d;
        } else {
            d = n[10];
        }
        const m = String(d);
        let p;
        if (n[11] !== u) {
            p = o("WAWebAiModeSelectorUtils").getBotUserSelectModeSubtitle(u);
            n[11] = u;
            n[12] = p;
        } else {
            p = n[12];
        }
        const subtitle = String(p);
        let f;
        if (n[13] !== c || n[14] !== m || n[15] !== subtitle) {
            f = {
                icon: c,
                title: m,
                subtitle
            };
            n[13] = c;
            n[14] = m;
            n[15] = subtitle;
            n[16] = f;
        } else {
            f = n[16];
        }
        return f;
    }
    l.useWAWebResolvedBotMode = e;
}, 98);