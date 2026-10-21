__d("WAWebProductCatalogEventUtils", [
    "WAWebBizCatalogViewWamEvent",
    "WAWebCatalogBizWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = [
        "bizActionConfig",
        "bizPlatform",
        "catalogBizAction",
        "catalogOwnerJid",
        "catalogViewAction",
        "isOwner"
    ];
    function s(e) {
        let t;
        if (r("isStringNullOrEmpty")(e.catalogOwnerJid)) {
            if (e.catalogOwnerWid) {
                t = e.catalogOwnerWid;
            } else if (e.product) {
                t = e.product.catalogWid;
            }
        } else {
            t = o("WAWebWidFactory").createWid(e.catalogOwnerJid);
        }
        return t instanceof r("WAWebWid") && o("WAWebUserPrefsMeUser").isMeAccount(t);
    }
    function u(t) {
        const { bizActionConfig, bizPlatform, catalogBizAction, catalogOwnerJid, catalogViewAction, isOwner } = t;
        const u = babelHelpers.objectWithoutPropertiesLoose(t, e);
        if (catalogBizAction && isOwner) {
            new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent(babelHelpers.extends({
                catalogBizAction
            }, u, bizActionConfig)).commit();
            return;
        }
        if (catalogViewAction) {
            new (o("WAWebBizCatalogViewWamEvent")).BizCatalogViewWamEvent(babelHelpers.extends({
                catalogViewAction,
                bizPlatform,
                catalogOwnerJid
            }, u)).commit();
            return;
        }
    }
    l.isCatalogOwner = s;
    l.logCatalogViewOrBizEvent = u;
}, 98);