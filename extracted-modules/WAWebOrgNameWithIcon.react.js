__d("WAWebOrgNameWithIcon.react", [
    "WAWebOrgIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { children, membership } = e;
        if (membership?.orgIconURI == null) {
            return children;
        }
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x6s0dn4 x3nfvp2 x193iq5w xeuugli"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "x78zum5 xeuugli x6ikm8r x10wlt62"
            };
            t[1] = l;
        } else {
            l = t[1];
        }
        let u;
        if (t[2] !== children) {
            u = <span {...babelHelpers.extends({}, l, {
                "data-testid": "organization-contact-name",
                children
            })}/>;
            t[2] = children;
            t[3] = u;
        } else {
            u = t[3];
        }
        let c;
        if (t[4] !== membership) {
            c = s.jsx(r("WAWebOrgIcon.react"), {
                membership
            });
            t[4] = membership;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== u || t[7] !== c) {
            d = <span {...babelHelpers.extends({}, i, {
                "data-testid": "organization-name-with-icon",
                children: [
                    u,
                    c
                ]
            })}/>;
            t[6] = u;
            t[7] = c;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    l.default = u;
}, 98);