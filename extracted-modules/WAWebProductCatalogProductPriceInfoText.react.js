__d("WAWebProductCatalogProductPriceInfoText.react", [
    "fbt",
    "WAWebBizGetProductQuantityCartAction",
    "WAWebCurrencyUtils",
    "WAWebEmojiText.react",
    "WAWebProductSelectors",
    "WAWebProductTypes",
    "WAWebStrikethroughFormatMutator",
    "isStringNullOrEmpty",
    "react"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "fallback",
        "product",
        "showAvailabilityNotice",
        "showTotalPrice"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = (availability)=>{
        if (availability === o("WAWebProductTypes").ProductAvailability.OUT_OF_STOCK) {
            return s._("Out of stock");
        }
        if (availability === o("WAWebProductTypes").ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE) {
            return s._("Not available in your postcode");
        }
        return null;
    };
    const m = (amount, currency)=>o("WAWebCurrencyUtils").formatAmount1000({
            amount,
            currency
        });
    function p(t) {
        const t_fallback = t.fallback;
        const a = t_fallback === undefined ? null : t_fallback;
        const { product, showAvailabilityNotice } = t;
        const u = showAvailabilityNotice === undefined ? false : showAvailabilityNotice;
        const t_showTotalPrice = t.showTotalPrice;
        const _ = t_showTotalPrice === undefined ? false : t_showTotalPrice;
        const f = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { currency, priceAmount1000 } = product;
        const y = o("WAWebProductSelectors").getActivePrice(product);
        if (r("isStringNullOrEmpty")(currency) || priceAmount1000 == null || y == null) {
            return a;
        }
        let C = 1;
        const { catalogWid, id } = product;
        if (_ && id != null && catalogWid) {
            C = r("WAWebBizGetProductQuantityCartAction")(id.toString(), catalogWid);
        }
        const S = m(y * C, currency);
        const R = m(priceAmount1000 * C, currency);
        const L = ()=>{
            const e = o("WAWebProductSelectors").isSalePriceActive(product) ? `${S} ~${R}~` : S;
            const t = d(product.availability);
            if (u && t != null) {
                return s._("{price} • {availability}", [
                    s._param("price", e),
                    s._param("availability", t)
                ]);
            }
            return s._("{price}", [
                s._param("price", e)
            ]);
        };
        return c.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({}, f, {
            text: L(),
            formatters: [
                [
                    [
                        r("WAWebStrikethroughFormatMutator"),
                        {
                            selectable: f.selectable
                        }
                    ]
                ]
            ],
            ellipsify: true
        }));
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 226);