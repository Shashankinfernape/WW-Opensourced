__d("WAWebOrgMemberPickerStatusRow.react", [
    "WAWebOrgMemberSearchErrorRow.react",
    "WAWebOrgMemberSearchLoadingRow.react",
    "WAWebOrgMemberSearchStrings",
    "WAWebSectionHeader.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(5);
        const { onRetry, status } = e;
        let i;
        if (t[0] !== onRetry) {
            i = function(t) {
                if ((typeof t === "object" && t !== null || typeof t === "function") && t.kind === "header") {
                    return s.jsx(r("WAWebSectionHeader.react"), {
                        header: o("WAWebOrgMemberSearchStrings").getOrgMemberSearchHeader(),
                        testid: "org_member_picker_section_header",
                        uppercase: false
                    });
                }
                if ((typeof t === "object" && t !== null || typeof t === "function") && t.kind === "loading") {
                    return s.jsx(r("WAWebOrgMemberSearchLoadingRow.react"), {});
                }
                if ((typeof t === "object" && t !== null || typeof t === "function") && t.kind === "error" && "failure" in t) {
                    const failure = t.failure;
                    const Component = r("WAWebOrgMemberSearchErrorRow.react");
                    return <Component failure={failure} onRetry={onRetry}/>;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            };
            t[0] = onRetry;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== status || t[3] !== i) {
            l = i(status);
            t[2] = status;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    l.default = u;
}, 98);