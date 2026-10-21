__d("WAWebCommunitySubgroupsLimitReachedPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const { isCommunityCreation, maxSubgroups } = e;
        const a = isCommunityCreation === undefined ? false : isCommunityCreation;
        if (a) {
            let i;
            if (t[0] !== maxSubgroups) {
                i = s._("_j{\"*\":\"You can only add {max_subgroup_count} groups when creating a community. You can add more after this community is created.\",\"_1\":\"You can only add 1 group when creating a community. You can add more after this community is created.\"}", [
                    s._plural(maxSubgroups - 1, "max_subgroup_count")
                ]);
                t[0] = maxSubgroups;
                t[1] = i;
            } else {
                i = t[1];
            }
            let l;
            if (t[2] !== i) {
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                l = <Component testid="max-subgroup-count-creation-popup" onOK={o("WAWebModalManager").closeModalManager}>{i}</Component>;
                t[2] = i;
                t[3] = l;
            } else {
                l = t[3];
            }
            return l;
        }
        let c;
        if (t[4] !== maxSubgroups) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            c = <Component testid="max-subgroup-count-popup" onOK={o("WAWebModalManager").closeModalManager}>{s._("_j{\"*\":\"Limit of {max_subgroups} groups reached.\",\"_1\":\"Limit of 1 group reached.\"}", [
                s._plural(maxSubgroups - 1, "max_subgroups")
            ])}</Component>;
            t[4] = maxSubgroups;
            t[5] = c;
        } else {
            c = t[5];
        }
        return c;
    }
    l.default = c;
}, 226);