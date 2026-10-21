__d("WAWebCometRouterMetaManager.react", [
    "fbt",
    "WAWebCometRouterMetaManager",
    "WAWebNavBarCometRouting",
    "WAWebNavBarTypes",
    "react",
    "react-compiler-runtime",
    "useCurrentRoute"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function useC() {
        const e = o("react-compiler-runtime").c(3);
        const t = r("useCurrentRoute")();
        const n = t?.url;
        let a;
        let i;
        if (e[0] !== n) {
            a = function() {
                const e = n != null ? o("WAWebNavBarCometRouting").getNavBarItemForRouteUrl(n) : o("WAWebNavBarTypes").NavBarItems.Chats;
                o("WAWebCometRouterMetaManager").updateRouteTitle(m(e));
                return d;
            };
            i = [
                n
            ];
            e[0] = n;
            e[1] = a;
            e[2] = i;
        } else {
            a = e[1];
            i = e[2];
        }
        useEffect(a, i);
        return null;
    }
    function d() {
        o("WAWebCometRouterMetaManager").updateRouteTitle(null);
    }
    function m(e) {
        switch(e){
            case o("WAWebNavBarTypes").NavBarItems.Settings:
                return s._("Settings").toString();
            case o("WAWebNavBarTypes").NavBarItems.Calls:
                return s._("Calls").toString();
            case o("WAWebNavBarTypes").NavBarItems.Communities:
                return s._("Communities").toString();
            case o("WAWebNavBarTypes").NavBarItems.Status:
                return s._("Status").toString();
            case o("WAWebNavBarTypes").NavBarItems.Chats:
            default:
                return null;
        }
    }
    l.default = useC;
}, 226);