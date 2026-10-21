__d("WAWebToastAddedProductToCart", [
    "fbt",
    "WAWebBizShowCartAction",
    "WAWebCartLogEvents",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUtilsLogQplEvents",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, t) {
        const n = ()=>{
            o("WAWebUtilsLogQplEvents").qplStartCartView("Toast");
            r("WAWebBizShowCartAction")(e.catalogWid.toString(), undefined, t);
            o("WAWebCartLogEvents").logCartToastClick(e.catalogWid.toString(), t);
        };
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            action: {
                actionText: s._("View cart"),
                onAction: function() {
                    n();
                }
            },
            duration: 6000,
            msg: s._("Item added to cart")
        }));
    }
    l.default = c;
}, 226);