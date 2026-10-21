__d("WAWebLabelItemCollection", [
    "WAWebBaseCollection",
    "WAWebBizLabelUtils",
    "WAWebCustomerManagerGating",
    "WAWebLabelItemModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.listenTo(t, "add", s);
            t.listenTo(t, "remove", u);
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebLabelItemModel");
    function s(e) {
        c(e, true);
    }
    function u(e) {
        c(e, false);
    }
    function c(e, t) {
        const n = d(e);
        n.forEach((n)=>{
            const r = n.labels || [];
            if (t) {
                if (!r.includes(e.labelId)) {
                    n.labels = [
                        e.labelId
                    ].concat(r);
                }
            } else {
                n.labels = r.filter((t)=>t !== e.labelId);
            }
        });
    }
    function d(e) {
        if (o("WAWebCustomerManagerGating").customerManagerEnabled()) {
            return o("WAWebBizLabelUtils").getParentModelsAnyAddressingMode(e.parentId, e.parentType);
        }
        const t = o("WAWebBizLabelUtils").getParentCollection(e.parentType).get(e.parentId);
        if (t != null) {
            return [
                t
            ];
        }
        return [];
    }
    l.LabelItemCollection = e;
}, 98);