__d("WAWebRichResponseTableFragmentText.react", [
    "WAWebRichResponse.flow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e.type !== o("WAWebRichResponse.flow").RichResponseFragmentType.Table) {
            return "";
        }
        return e.table.map((e, t)=>{
            let n = ` | ${e.items.join(" | ")} |`;
            if (t === 0) {
                n = n.slice(1);
            }
            if (e.isHeading) {
                const r = ` | ${e.items.map(()=>" --- ").join("|")} |`;
                n += r;
            }
            return n;
        }).join("");
    }
    l.getTableFragmentText = e;
}, 98);