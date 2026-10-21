__d("WAWebBizRefreshCartJob", [
    "WALogger",
    "WAWebBizGraphQLRefreshCartJob",
    "WAWebGetFormattedCatalogJid",
    "WAWebLidMigrationUtils",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a, i) {
            const s = yield o("WAWebBizGraphQLRefreshCartJob").RefreshCart({
                cart: {
                    jid: o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(t) ?? t.toString(),
                    products: n.map((e)=>({
                            id: e
                        })),
                    image_dimensions: {
                        width: a,
                        height: i
                    },
                    variant_info_fields: "variant_properties"
                }
            });
            if (s.type === "success") {
                return s.cartResult;
            }
            s.type;
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBizRefreshCart: error handling flow, Error Type ",
                ""
            ])), JSON.stringify(s.type));
            throw r("err")(`refreshCartGraphQL: error handling flow, Error Type ${JSON.stringify(s.type)}`);
        });
        return function(n, r, o, a) {
            return t.apply(this, arguments);
        };
    })();
    function u({ bizJID, ids, imageHeight, imageWidth }) {
        const l = o("WAWebLidMigrationUtils").toPn(bizJID) ?? bizJID;
        return s(l, ids, imageWidth, imageHeight);
    }
    l.refreshCart = u;
}, 98);