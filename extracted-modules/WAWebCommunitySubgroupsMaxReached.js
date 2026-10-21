__d("WAWebCommunitySubgroupsMaxReached", [
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupsLimitReachedPopup.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const maxSubgroups = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit();
        const n = e ? e.joinedSubgroups.length : 0;
        const a = e ? e.unjoinedSubgroups.length : 0;
        const i = n + a;
        const l = ()=>{
            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebCommunitySubgroupsLimitReachedPopup.react"), {
                maxSubgroups
            }));
        };
        if (i >= maxSubgroups) {
            l();
            return true;
        }
        return false;
    }
    l.subgroupsMaxReached = u;
}, 98);