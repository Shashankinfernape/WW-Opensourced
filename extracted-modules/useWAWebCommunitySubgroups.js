__d("useWAWebCommunitySubgroups", [
    "WAWebFrontendGroupMetadataGetters",
    "react-compiler-runtime",
    "useWAWebGroupMetadataValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = o("react-compiler-runtime").c(8);
        const r = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(e?.id, [
            o("WAWebFrontendGroupMetadataGetters").getJoinedSubgroups,
            o("WAWebFrontendGroupMetadataGetters").getUnjoinedSubgroups
        ]) ?? [];
        const a = r[0];
        const i = r[1];
        let l;
        if (n[0] !== a) {
            l = a === undefined ? [] : a;
            n[0] = a;
            n[1] = l;
        } else {
            l = n[1];
        }
        const joinedSubgroups = l;
        let u;
        if (n[2] !== i) {
            u = i === undefined ? [] : i;
            n[2] = i;
            n[3] = u;
        } else {
            u = n[3];
        }
        const unjoinedSubgroups = u;
        const subgroupCount = joinedSubgroups.length + unjoinedSubgroups.length;
        let m;
        if (n[4] !== joinedSubgroups || n[5] !== subgroupCount || n[6] !== unjoinedSubgroups) {
            m = {
                joinedSubgroups,
                unjoinedSubgroups,
                subgroupCount
            };
            n[4] = joinedSubgroups;
            n[5] = subgroupCount;
            n[6] = unjoinedSubgroups;
            n[7] = m;
        } else {
            m = n[7];
        }
        return m;
    }
    l.default = e;
}, 98);