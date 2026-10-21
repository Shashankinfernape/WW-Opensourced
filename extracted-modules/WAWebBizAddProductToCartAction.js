__d("WAWebBizAddProductToCartAction", [
    "$InternalEnum",
    "WAWebBizCartBridge",
    "WAWebBizCartConstants",
    "WAWebCartCollection",
    "WAWebProductSelectors",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsMeUser",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(774774794, "10");
    const s = n("$InternalEnum").Mirrored([
        "SUCCESS",
        "QUANTITY_LIMIT_REACHED"
    ]);
    function u(t) {
        const { currency, id, imageHash, name } = t;
        const u = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(e, {
            bool: {
                IsConsumer: !(u != null && u.equals(t.catalogWid))
            }
        });
        const c = t.catalogWid.toString();
        const d = o("WAWebCartCollection").CartCollection.findCart(c);
        const m = d.cartItemCollection.get(id);
        const p = m?.quantity || 0;
        const _ = Math.min(p + 1, o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY);
        d.cartItemCollection.add({
            id,
            priceAmount1000: o("WAWebProductSelectors").getActivePrice(t),
            currency,
            name,
            imageHash,
            quantity: _,
            maxAvailable: t.maxAvailable,
            variantProperties: t.variantInfo?.variant_properties
        }, {
            merge: true
        });
        d.trigger("change:cartItemCollection");
        const d_itemCount = d.itemCount;
        const status = p + 1 > o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY ? s.QUANTITY_LIMIT_REACHED : s.SUCCESS;
        o("WAWebBizCartBridge").updateCart(d, e).then(()=>{
            if (status === s.SUCCESS) {
                o("WAWebQplFlowWrapper").QPL.markerEnd(e, 2);
            } else if (status === s.QUANTITY_LIMIT_REACHED) {
                o("WAWebQplFlowWrapper").QPL.markerDrop(e);
            }
        }).catch(()=>{
            o("WAWebQplFlowWrapper").QPL.markerEnd(e, 3);
        });
        return {
            newCount: _,
            status,
            totalCartCount: d_itemCount
        };
    }
    l.AddToCartStatus = s;
    l.addProductToCart = u;
}, 98);