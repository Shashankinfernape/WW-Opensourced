__d("WAWebHeaderOrgMemberTagSubtitleContentLoadable", [
    "JSResourceForInteraction",
    "WAWebContactGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebUserSubtitle.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createContext, useContext } = u;
    const MContext = createContext(null);
    const p = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebHeaderOrgMemberTagSubtitleContent.react").__setRef("WAWebHeaderOrgMemberTagSubtitleContentLoadable").load();
    }), "OrgMemberTagSubtitleContent");
    const _ = r("WAWebLoadable")({
        loader: p,
        loading: function() {
            return <G2Component/>;
        },
        renderLoadingImmediately: true
    });
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(7);
        const { orgMemberLid, presence, userSubtitle } = e;
        let i;
        if (t[0] !== orgMemberLid || t[1] !== presence || t[2] !== userSubtitle) {
            i = <_ orgMemberLid={orgMemberLid} presence={presence} userSubtitle={userSubtitle}/>;
            t[0] = orgMemberLid;
            t[1] = presence;
            t[2] = userSubtitle;
            t[3] = i;
        } else {
            i = t[3];
        }
        let l;
        if (t[4] !== i || t[5] !== userSubtitle) {
            l = <MContext.Provider value={userSubtitle}>{i}</MContext.Provider>;
            t[4] = i;
            t[5] = userSubtitle;
            t[6] = l;
        } else {
            l = t[6];
        }
        return l;
    }
    function G2Component() {
        const e = o("react-compiler-runtime").c(2);
        const t = useContext(MContext);
        let n;
        if (e[0] !== t) {
            n = t == null || o("WAWebContactGetters").getIsBusiness(t.contact) ? null : s.jsx(r("WAWebUserSubtitle.react"), {
                userSubtitle: t
            });
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = FComponent;
}, 98);