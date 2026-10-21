__d("WAWebCommonToastMaxProductQuantityReached", [
    "fbt",
    "WAWebBizCartConstants",
    "WAWebBizCatalogGatingUtils",
    "WAWebFbtCommon",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e = o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY, t = false) {
        const n = o("WAWebBizCatalogGatingUtils").isQuantityControlsFeatureEnabled() || t ? null : {
            actionText: r("WAWebFbtCommon")("GOT IT"),
            dismiss: true,
            theme: "success"
        };
        const a = s._("_j{\"*\":{\"*\":\"Only {max-number-of-items} of these items are currently available.\",\"_1\":\"Only {max-number-of-items} of these items is currently available.\"}}", [
            s._param("max-number-of-items", e, [
                0
            ]),
            s._plural(e)
        ]);
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            action: n,
            duration: 6000,
            msg: a
        }));
    }
    l.default = c;
}, 226);