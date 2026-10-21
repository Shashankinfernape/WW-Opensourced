__d("WAWebOrgMemberSearchLoadingRow.react", [
    "WAWebOrgMemberSearchLoadingRowLayout",
    "WAWebSpinner.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <div {...babelHelpers.extends({}, t, {
                "data-testid": "org_member_search_loading_row",
                children: <span aria-hidden>{s.jsx(o("WAWebSpinner.react").Spinner, {
                    size: o("WAWebOrgMemberSearchLoadingRowLayout").ORG_MEMBER_SEARCH_SPINNER_SIZE,
                    stroke: 6
                })}</span>
            })}/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = u;
}, 98);