__d("WAWebParseCallLinkType", [
    "WAWebCurrentUser",
    "WAWebVoipGatingUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const s = /^https:\/\/web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const u = /^https:\/\/dev-web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const c = /^https:\/\/call\.[^/]+\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    const d = /^https:\/\/dev-web\.[^/]+\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    function m(t, n = false) {
        let a = t.match(e) ?? t.match(s);
        if (a == null && o("WAWebCurrentUser").isEmployee()) {
            a = t.match(u);
        }
        if (a == null || !n && !o("WAWebVoipGatingUtils").isCallingEnabled()) {
            return null;
        }
        if (a[1].toLowerCase() === "video") {
            return "video";
        }
        return "voice";
    }
    l.default = m;
}, 98);