__d("WAWebBizCartBridge", [
    "Promise",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizLogQplEvents",
    "WAWebBizRefreshCartJob",
    "WAWebQplFlowWrapper",
    "WAWebSchemaCart"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(bizJID, ids, imageWidth, imageHeight, l) {
        if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
            return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).E451);
        }
        if (l === true) {
            o("WAWebBizLogQplEvents").qplPointCartView("datasource_start");
        }
        const s = o("WAWebBizRefreshCartJob").refreshCart({
            bizJID,
            ids,
            imageHeight,
            imageWidth
        });
        return s.then((e)=>{
            if (l === true) {
                o("WAWebBizLogQplEvents").qplPointCartView("datasource_end");
            }
            return e;
        });
    }
    function u(t, r) {
        if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
            return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).E451);
        }
        let a = (e || (e = n("Promise"))).resolve();
        if (r) {
            o("WAWebQplFlowWrapper").QPL.markerPoint(r, "datasource_start");
        }
        if (t.itemCount > 0 || t.message != null && t.message.length > 0) {
            const i = c(t);
            a = o("WAWebSchemaCart").getCartTable().createOrReplace(i);
        } else {
            a = o("WAWebSchemaCart").getCartTable().remove(t.id.toString());
        }
        a.then(()=>r && o("WAWebQplFlowWrapper").QPL.markerPoint(r, "datasource_end")).catch((e)=>{
            if (e.errorCode === 451) {
                throw new (o("WAWebBackendErrors")).E451;
            }
        });
        return a;
    }
    function c(e) {
        const t = e.cartItemCollection.map((e)=>({
                id: e.id,
                priceAmount1000: e.priceAmount1000,
                currency: e.currency,
                name: e.name,
                quantity: e.quantity,
                imageHash: e.imageHash,
                variantProperties: e.variantProperties
            }));
        const n = {
            id: e.id.toString(),
            message: e.message,
            total: e.total,
            currency: e.currency,
            itemCount: e.itemCount,
            products: t
        };
        return n;
    }
    l.refreshCart = s;
    l.updateCart = u;
    l.cartToCartRowType = c;
}, 98);