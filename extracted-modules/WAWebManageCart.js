__d("WAWebManageCart", [
    "WAWebBizAddProductToCartAction",
    "WAWebBizCatalogGatingUtils",
    "WAWebCartLogEvents",
    "WAWebCommonToastMaxProductQuantityReached",
    "WAWebToastAddedProductToCart"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        const a = o("WAWebBizAddProductToCartAction").addProductToCart(e);
        const { newCount, status, totalCartCount } = a;
        switch(status){
            case o("WAWebBizAddProductToCartAction").AddToCartStatus.SUCCESS:
                if (o("WAWebBizCatalogGatingUtils").isQuantityControlsFeatureEnabled() === false) {
                    r("WAWebToastAddedProductToCart")(e, t);
                }
                if (totalCartCount === 1) {
                    o("WAWebCartLogEvents").logCreateNewCart(e, t, n, totalCartCount);
                }
                o("WAWebCartLogEvents").logAddProductToCart(e, t, newCount, n);
                break;
            case o("WAWebBizAddProductToCartAction").AddToCartStatus.QUANTITY_LIMIT_REACHED:
                r("WAWebCommonToastMaxProductQuantityReached")();
                break;
        }
    }
    l.addToCart = e;
}, 98);