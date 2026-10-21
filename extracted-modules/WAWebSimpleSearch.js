__d("WAWebSimpleSearch", [
    "WAWebL10NRemoveAccents"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e == null || e === "") {
            return false;
        }
        const n = s(e);
        const r = t.map(s).flat();
        return n.every((e)=>r.some((t)=>t?.startsWith(e)));
    }
    function s(e) {
        if (e == null) {
            return [];
        }
        const n = String(o("WAWebL10NRemoveAccents").removeAccents(e.toLocaleLowerCase("en")?.normalize("NFKD")));
        return n.split(/\s+/).filter(Boolean);
    }
    l.simpleSearch = e;
}, 98);