__d("WAWebCommunityGetActivityCellText", [
    "fbt",
    "WAWebCommunityActivityModel"
], function(t, n, r, o, a, i, l, s) {
    const e = "...";
    const u = 37;
    const c = (subgroupName)=>{
        if (subgroupName.length > u) {
            return subgroupName.substr(0, u) + e;
        }
        return subgroupName;
    };
    function d(e) {
        if (e.length === 0) {
            return null;
        }
        const t = e.filter((e)=>e.type === o("WAWebCommunityActivityModel").ActivityTypeType.SUB_GROUP_LINK);
        if (t.length === e.length) {
            return m(t).toString();
        }
    }
    function m(e) {
        if (e.length === 1) {
            const t = e[0];
            const n = c(t.subgroupName);
            return s._("New group \"{subgroup_name_first}\" added", [
                s._param("subgroup_name_first", n)
            ]);
        } else if (e.length === 2) {
            const r = e[0];
            const o = e[1];
            const a = c(r.subgroupName);
            const i = c(o.subgroupName);
            return s._("New groups \"{subgroup_name_first}\" and \"{subgroup_name_second}\" added", [
                s._param("subgroup_name_first", a),
                s._param("subgroup_name_second", i)
            ]);
        }
        const l = e[0];
        const u = e[1];
        const d = c(l.subgroupName);
        const m = c(u.subgroupName);
        const p = e.length - 2;
        return s._("_j{\"*\":\"New groups \\\"{subgroup_name_first}\\\", \\\"{subgroup_name_second}\\\", and {leftover_subgroup_activity} more\",\"_1\":\"New groups \\\"{subgroup_name_first}\\\", \\\"{subgroup_name_second}\\\", and 1 more\"}", [
            s._plural(p, "leftover_subgroup_activity"),
            s._param("subgroup_name_first", d),
            s._param("subgroup_name_second", m)
        ]);
    }
    l.getActivityCellText = d;
}, 226);