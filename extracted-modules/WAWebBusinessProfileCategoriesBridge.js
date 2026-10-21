__d("WAWebBusinessProfileCategoriesBridge", [
    "JSResourceForInteraction",
    "WAWebABProps",
    "WAWebBizLogQplEvents",
    "WAWebBizProfileGatingUtils",
    "WAWebQueryBusinessCategoriesJob"
], function(t, n, r, o, a, i, l) {
    const e = r("JSResourceForInteraction")("WAWebBizGetCategoriesQuery").__setRef("WAWebBusinessProfileCategoriesBridge");
    const s = r("JSResourceForInteraction")("WAWebBizGetCategoriesV2Query").__setRef("WAWebBusinessProfileCategoriesBridge");
    function u(t, n) {
        o("WAWebBizLogQplEvents").qplPointProfileCatsView("datasource_start");
        let r;
        if (o("WAWebABProps").getABPropConfigValue("smb_web_category_search_via_graph_enabled")) {
            if (o("WAWebBizProfileGatingUtils").getCatkitVersion() >= 2) {
                r = s.load().then((e)=>e.getBusinessCategoriesV2(t, n));
            } else {
                r = e.load().then((e)=>e.getBusinessCategories(t, n));
            }
        } else {
            r = o("WAWebQueryBusinessCategoriesJob").queryBusinessCategories(t);
        }
        return r.then((e)=>{
            o("WAWebBizLogQplEvents").qplPointProfileCatsView("datasource_end");
            return e;
        });
    }
    l.queryBusinessCategories = u;
}, 98);