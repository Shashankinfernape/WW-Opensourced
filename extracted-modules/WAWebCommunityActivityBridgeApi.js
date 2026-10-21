__d("WAWebCommunityActivityBridgeApi", [
    "Promise",
    "WAWebCommunityActivityCollection",
    "WAWebGroupMetadataCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        restoreCommunityActivity: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = r("WAWebGroupMetadataCollection").filter((e)=>e.isParentGroup);
                const o = t.map((e)=>r("WAWebCommunityActivityCollection").syncActivityFor(e.id));
                yield (e || (e = n("Promise"))).all(o);
            });
            function o() {
                return t.apply(this, arguments);
            }
            return o;
        })()
    };
    l.CommunityActivityBridgeApi = s;
}, 98);