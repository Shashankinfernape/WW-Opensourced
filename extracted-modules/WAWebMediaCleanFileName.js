__d("WAWebMediaCleanFileName", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (!e) {
            return e;
        }
        const t = e.replace(/[\u202a-\u202e\u2066-\u2069\u200E\u200F\u061C]/g, "\uFFFD");
        const n = t.split(".");
        if (n.length === 1) {
            return t;
        }
        for(let r = n.length - 1; r > 0; r--){
            const o = n[r].trim();
            if (o.length) {
                return `${n.slice(0, r).join(".")}.${o}`;
            }
        }
        return t;
    }
    function u(t) {
        if (t == null) {
            return t;
        }
        const n = s(t);
        if (t !== n && n) {
            const r = [
                "bat",
                "exe",
                "cmd",
                "com",
                "lnk",
                "pif",
                "scr",
                "vb",
                "vbe",
                "vbs",
                "wsh",
                "js",
                "ps1",
                "hta",
                "sh",
                "csh",
                "msi",
                "app",
                "scpt",
                "applescript",
                "reg",
                "vbe",
                "wsf",
                "sct"
            ];
            const a = n.split(".");
            const i = a.length >= 2 ? a.pop() : "";
            if (i != null && r.includes(i)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "cleanIncomingFilename:extension: ",
                    ""
                ])), i).verbose();
            }
        }
        return n;
    }
    l.cleanFilename = s;
    l.cleanIncomingFilename = u;
}, 98);