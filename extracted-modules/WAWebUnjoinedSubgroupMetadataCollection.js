__d("WAWebUnjoinedSubgroupMetadataCollection", [
    "WAWebBaseCollection",
    "WAWebGroupMetadataCollection",
    "WAWebUnjoinedSubgroupMetadataModel",
    "WAWebUpdateSubgroupsCommunityAction"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.listenTo(t, "add", t.$UnjoinedSubgroupMetadataCollection$p_1);
            t.listenTo(t, "remove", t.$UnjoinedSubgroupMetadataCollection$p_1);
            t.listenTo(t, "change:parentGroupId", t.$UnjoinedSubgroupMetadataCollection$p_2);
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.$UnjoinedSubgroupMetadataCollection$p_3 = function(t) {
            if (t) {
                o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroups(t);
            }
        };
        t_prototype.$UnjoinedSubgroupMetadataCollection$p_1 = function(t) {
            const e = r("WAWebGroupMetadataCollection").get(t.parentGroupId.toString());
            this.$UnjoinedSubgroupMetadataCollection$p_3(e);
        };
        t_prototype.$UnjoinedSubgroupMetadataCollection$p_2 = function(t, n, o) {
            const e = n != null ? r("WAWebGroupMetadataCollection").get(n.toString()) : null;
            const a = o != null ? r("WAWebGroupMetadataCollection").get(o.toString()) : null;
            this.$UnjoinedSubgroupMetadataCollection$p_3(e);
            this.$UnjoinedSubgroupMetadataCollection$p_3(a);
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebUnjoinedSubgroupMetadataModel");
    const s = new e;
    l.default = s;
}, 98);