__d("WAWebCartLogEvents", [
    "WALogger",
    "WAWebBizCatalogUtils",
    "WAWebBizCatalogViewWamEvent",
    "WAWebCatalogBizWamEvent",
    "WAWebProductCatalogContext",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCatalogBizAction",
    "WAWebWamEnumCatalogViewAction"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "bizPlatform",
        "collectionStats"
    ];
    function u(e) {
        return Object.keys(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION).find((t)=>t === e);
    }
    function c(e) {
        return Object.keys(o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION).find((t)=>t === e);
    }
    function d(catalogOwnerJid, n, r) {
        const a = catalogOwnerJid === o("WAWebUserPrefsMeUser").getMeUserOrThrow().toString();
        const { bizPlatform, collectionStats } = r;
        const d = babelHelpers.objectWithoutPropertiesLoose(r, s);
        const m = u(n);
        if (a && m !== undefined) {
            new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent(babelHelpers.extends({
                catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION[m],
                collectionIndex: collectionStats?.collectionIndex,
                productIndex: collectionStats?.productIndex
            }, d)).commit();
            return;
        }
        const p = c(n);
        if (!a && p !== undefined) {
            new (o("WAWebBizCatalogViewWamEvent")).BizCatalogViewWamEvent(babelHelpers.extends({
                bizPlatform,
                catalogOwnerJid,
                catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION[p]
            }, collectionStats, d)).commit();
            return;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "logCartAction: unsupported log action - ",
            ""
        ])), n);
    }
    function m(e, t, n, quantity, a) {
        const collectionStats = o("WAWebBizCatalogUtils").getProductStatsInFetched(t.catalogWid.toString(), a, t) || undefined;
        d(t.catalogWid.toString(), e, babelHelpers.extends({}, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(n), {
            collectionStats,
            quantity
        }));
    }
    function p(e, t, n, r) {
        m("ACTION_CART_ADD_PRODUCT", e, t, n, r);
    }
    function _(e, t, n, r) {
        m("ACTION_CART_EDIT_PRODUCT", e, t, n, r);
    }
    function f(e, t, n) {
        m("ACTION_CART_DELETE_PRODUCT", e, t, undefined, n);
    }
    function g(e, t) {
        d(e, "ACTION_CART_ABANDON", babelHelpers.extends({}, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t)));
    }
    function h(catalogOwnerJid, context) {
        d(catalogOwnerJid, "ACTION_CART_ICON_CLICK", babelHelpers.extends({}, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(context)));
    }
    function y({ catalogOwnerJid, context, onCartClick }) {
        return function() {
            onCartClick();
            h(catalogOwnerJid, context);
        };
    }
    function C(e, t) {
        d(e, "ACTION_CART_SNACKBAR_CLICK", babelHelpers.extends({}, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t)));
    }
    function b(e, t) {
        d(e, "ACTION_CART_LIST_IMPRESSION", babelHelpers.extends({}, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t)));
    }
    function v(e, t, n, r) {
        m("ACTION_CREATE_CART", e, t, r, n);
    }
    l.logAddProductToCart = p;
    l.logEditProduct = _;
    l.logDeleteProduct = f;
    l.logCartAbandon = g;
    l.getOnCartClickWithLog = y;
    l.logCartToastClick = C;
    l.logCartListImpression = b;
    l.logCreateNewCart = v;
}, 98);