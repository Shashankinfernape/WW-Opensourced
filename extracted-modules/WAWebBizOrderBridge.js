__d("WAWebBizOrderBridge", [
    "Promise",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCreateOrderJob",
    "WAWebBizLogQplEvents",
    "WAWebBizQueryOrderJob"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ height, orderId, sellerJid, token, width }) {
        if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
            return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).E451);
        }
        o("WAWebBizLogQplEvents").qplPointOrderView("datasource_start");
        const u = o("WAWebBizQueryOrderJob").queryOrder({
            height,
            orderId,
            sellerJid,
            token,
            width
        });
        return u.then((e)=>{
            o("WAWebBizLogQplEvents").qplPointOrderView("datasource_end");
            return e;
        });
    }
    function u(t, r) {
        if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
            return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).E451);
        }
        o("WAWebBizLogQplEvents").qplPointOrderCreate("datasource_start");
        const a = o("WAWebBizCreateOrderJob").createOrderMD(t, r);
        return a.then((e)=>{
            o("WAWebBizLogQplEvents").qplPointOrderCreate("datasource_end");
            return e;
        });
    }
    l.queryOrder = s;
    l.createOrder = u;
}, 98);