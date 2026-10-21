__d("WAWebRenumberNumberedLists", [
    "Lexical",
    "WAWebComputeListNumbering"
], function(t, n, r, o, a, i, l) {
    const e = /^(\d+)(\D[\s\S]*)$/;
    function s() {
        const t = o("Lexical").$getRoot().getChildren().map((e)=>e.getNumberNode());
        const n = o("WAWebComputeListNumbering").computeListNumbering(t.map((e)=>u(e)));
        t.forEach((t, r)=>{
            const o = n[r];
            if (!(!t || o == null)) {
                const a = t.getTextContent().match(e);
                if (a) {
                    const i = `${o}${a[2]}`;
                    if (t.getTextContent() !== i) {
                        t.setTextContent(i);
                    }
                }
            }
        });
    }
    function u(t) {
        const n = t == null ? undefined : t.getTextContent().match(e);
        if (n) {
            return parseInt(n[1], 10);
        }
        return null;
    }
    l.$renumberNumberedLists = s;
}, 98);