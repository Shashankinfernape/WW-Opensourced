__d("WAWebOrgMemberOfText.react", [
    "fbt",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_membership = e.membership;
        let r;
        if (t[0] !== e_membership.orgName) {
            let a;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                a = {
                    className: "x117nqv4"
                };
                t[2] = a;
            } else {
                a = t[2];
            }
            r = <span data-testid="org-member-of-text">{s._("Member of {organization name}", [
                s._param("organization name", <span {...babelHelpers.extends({}, a, {
                    children: e_membership.orgName
                })}/>)
            ])}</span>;
            t[0] = e_membership.orgName;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    l.default = c;
}, 226);