__d("WAWebOrgMemberPickerCell.react", [
    "fbt",
    "WAWebOrgMemberSearchCell.react",
    "WAWebOrgTimelock",
    "WAWebReachoutTimelockUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        accountRestrictedText: {
            fontStyle: "x1k4tb9n",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(9);
        const { active, disabled, lid, member } = e;
        let d;
        if (t[0] !== lid) {
            d = o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && !o("WAWebOrgTimelock").canMessageOrgMemberWhileTimelocked(lid);
            t[0] = lid;
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = d;
        let p;
        if (t[2] !== m) {
            const Component = r("WDSText.react");
            p = m ? <Component type="Body2" colorName="contentDefault" testid="reachout-timelock-secondary-cell-text" xstyle={c.accountRestrictedText}>{s._("Your account is restricted")}</Component> : null;
            t[2] = m;
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = disabled || m ? "chat-checkbox-disabled" : "chat-checkbox";
        let f;
        if (t[4] !== active || t[5] !== member || t[6] !== p || t[7] !== _) {
            f = u.jsx(r("WAWebOrgMemberSearchCell.react"), {
                active,
                member,
                secondary: p,
                theme: _
            });
            t[4] = active;
            t[5] = member;
            t[6] = p;
            t[7] = _;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    l.default = d;
}, 226);