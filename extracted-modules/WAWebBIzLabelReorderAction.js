__d("WAWebBIzLabelReorderAction", [
    "WALogger",
    "WAWebLabelCollection"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        let n = false;
        t.forEach((e, t)=>{
            const r = o("WAWebLabelCollection").LabelCollection.get(String(e));
            if (r && r.orderIndex !== t) {
                r.orderIndex = t;
                n = true;
            }
        });
        if (n) {
            o("WAWebLabelCollection").LabelCollection.trigger("reorder");
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Label] reorderLabelsAction: labels reordered"
            ])));
        }
    }
    l.reorderLabelsAction = s;
}, 98);