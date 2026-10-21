__d("WAWebCartQuantityControls.react", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebBizAddProductToCartAction",
    "WAWebBizDeleteProductFromCartAction",
    "WAWebBizGetProductQuantityCartAction",
    "WAWebBizUpdateProductQuantityCartAction",
    "WAWebCartCollection",
    "WAWebCartLogEvents",
    "WAWebCatalogCartVariantsPopupLoadable",
    "WAWebCommonQuantityControls.react",
    "WAWebNoop",
    "WAWebProductCatalogContext",
    "WAWebUseCartProductQuantity",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e) {
        const t = o("react-compiler-runtime").c(16);
        const { collectionId, context, product } = e;
        const c = o("WAWebUseCartProductQuantity").useCartProductQuantity(product);
        let m;
        if (t[0] !== collectionId || t[1] !== context || t[2] !== product || t[3] !== c) {
            m = function() {
                const e = o("WAWebProductCatalogContext").getProductCatalogContext(context);
                const t = o("WAWebBizAddProductToCartAction").addProductToCart(product);
                const { newCount, status, totalCartCount } = t;
                if (status === o("WAWebBizAddProductToCartAction").AddToCartStatus.SUCCESS) {
                    if (totalCartCount === 1) {
                        o("WAWebCartLogEvents").logCreateNewCart(product, e, collectionId, totalCartCount);
                    }
                    if (c === 0) {
                        o("WAWebCartLogEvents").logAddProductToCart(product, e, newCount, collectionId);
                    } else if (c > 0) {
                        o("WAWebCartLogEvents").logEditProduct(product, e, newCount, collectionId);
                    }
                }
            };
            t[0] = collectionId;
            t[1] = context;
            t[2] = product;
            t[3] = c;
            t[4] = m;
        } else {
            m = t[4];
        }
        const onAddOneClick = m;
        let f;
        if (t[5] !== collectionId || t[6] !== context || t[7] !== product || t[8] !== c) {
            const g = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = o("WAWebProductCatalogContext").getProductCatalogContext(context);
                    const t = r("WAWebBizGetProductQuantityCartAction")(product.id, product.catalogWid);
                    const s = [
                        r("WAWebBizUpdateProductQuantityCartAction")(product, t - 1)
                    ];
                    if (c === 1) {
                        const d = product.catalogWid.toString();
                        s.push(r("WAWebBizDeleteProductFromCartAction")(d, product.id.toString()));
                        o("WAWebCartLogEvents").logDeleteProduct(product, e, collectionId);
                        if (o("WAWebCartCollection").CartCollection.findCart(d).itemCount === 0) {
                            o("WAWebCartLogEvents").logCartAbandon(d, e);
                        }
                    } else {
                        if (c > 1) {
                            o("WAWebCartLogEvents").logEditProduct(product, e, c - 1, collectionId);
                        }
                    }
                    yield (u || (u = n("Promise"))).all(s);
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            f = function() {
                g().catch(p);
            };
            t[5] = collectionId;
            t[6] = context;
            t[7] = product;
            t[8] = c;
            t[9] = f;
        } else {
            f = t[9];
        }
        const onRemoveOneClick = f;
        const product_maxAvailable = product.maxAvailable;
        let C;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Items in cart");
            t[10] = C;
        } else {
            C = t[10];
        }
        let b;
        if (t[11] !== onAddOneClick || t[12] !== onRemoveOneClick || t[13] !== product.maxAvailable || t[14] !== c) {
            const Component = r("WAWebCommonQuantityControls.react");
            b = <Component maxQuantity={product_maxAvailable} onAddOneClick={onAddOneClick} onRemoveOneClick={onRemoveOneClick} quantity={c} quantityTitle={C}/>;
            t[11] = onAddOneClick;
            t[12] = onRemoveOneClick;
            t[13] = product.maxAvailable;
            t[14] = c;
            t[15] = b;
        } else {
            b = t[15];
        }
        return b;
    }
    function p(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Unable to remove the item from the cart"
        ]))).verbose().sendLogs("cart: failed to remove item from the cart");
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(8);
        const { collectionId, product } = e;
        const i = o("WAWebUseCartProductQuantity").useCartProductQuantityMultiple(product);
        let l;
        if (t[0] !== collectionId || t[1] !== product) {
            l = function() {
                o("WAWebCatalogCartVariantsPopupLoadable").openCatalogCartVariantsPopup({
                    collectionId,
                    onAddToCart: r("WAWebNoop"),
                    product
                });
            };
            t[0] = collectionId;
            t[1] = product;
            t[2] = l;
        } else {
            l = t[2];
        }
        const u = l;
        const product_maxAvailable = product.maxAvailable;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Items in cart");
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] !== u || t[5] !== product.maxAvailable || t[6] !== i) {
            const Component = r("WAWebCommonQuantityControls.react");
            p = <Component maxQuantity={product_maxAvailable} onAddOneClick={u} onRemoveOneClick={u} quantity={i} quantityTitle={m}/>;
            t[4] = u;
            t[5] = product.maxAvailable;
            t[6] = i;
            t[7] = p;
        } else {
            p = t[7];
        }
        return p;
    }
    l.WAWebCartQuantityControls = m;
    l.WAWebVariantCartQuantityControls = _;
}, 226);