__d("WAWebOrgIcon.react", [
    "WAWebOrgIconContentLoadable",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_membership = e.membership;
        const iconURI = e_membership?.orgIconURI;
        let a;
        if (t[0] !== iconURI || t[1] !== e_membership) {
            a = e_membership == null || iconURI == null ? null : <C6 iconURI={iconURI} orgName={e_membership.orgName}/>;
            t[0] = iconURI;
            t[1] = e_membership;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function C6(e) {
        const t = o("react-compiler-runtime").c(3);
        const { iconURI, orgName } = e;
        const i = o("useWAWebABPropConfigValue").useABPropConfigValue("whatsapp_orgs_enabled");
        if (!i) {
            return null;
        }
        let l;
        if (t[0] !== iconURI || t[1] !== orgName) {
            l = s.jsx(r("WAWebOrgIconContentLoadable"), {
                iconURI,
                orgName
            });
            t[0] = iconURI;
            t[1] = orgName;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.default = u;
}, 98);