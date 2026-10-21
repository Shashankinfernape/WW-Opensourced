__d("WAWebNormalizeThemeId", [
    "WAWebChatThemeEnums"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    for (const s of o("WAWebChatThemeEnums").Theme.members()){
        const u = s;
        const c = u.replace(/-/g, "");
        if (c !== u) {
            e.set(c, u);
        }
    }
    function d(t) {
        let r = t;
        let o = "";
        const a = t.indexOf("@");
        if (a !== -1) {
            r = t.slice(0, a);
            o = t.slice(a);
        } else if (t.endsWith("Tonal")) {
            r = t.slice(0, -5);
            o = "@Tonal";
        } else if (t.endsWith("Minimal")) {
            r = t.slice(0, -7);
            o = "@Minimal";
        }
        const i = e.get(r) ?? r;
        return i + o;
    }
    l.default = d;
}, 98);