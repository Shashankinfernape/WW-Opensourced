__d("WAWebBizCatalogManagementUpdateProductVisibility", [
    "WALogger",
    "WAWebBizCatalogManagementUpdateProductVisibilityMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = {
        type: "error"
    };
    const m = e !== undefined ? e : e = n("WAWebBizCatalogManagementUpdateProductVisibilityMutation.graphql");
    function p(e) {
        return _(e).then((e)=>{
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateProductVisibility: success"
                ])));
                return e;
            }
            e.type;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'updateProductVisibility: failed as "',
                '"'
            ])), e.type);
            return e;
        });
    }
    function _(e) {
        return o("WAWebFetchAdAccountToken").fetchToken().then((t)=>{
            if (t.type === "success") {
                return f(t.token, e).then((e)=>{
                    if (e.type !== "success" && e.type === "auth-failure") {
                        o("WAWebFetchAdAccountToken").markTokenAsInvalid();
                    } else {
                        e.type;
                    }
                    return e;
                });
            }
            t.type;
            return t;
        });
    }
    function f(token, t) {
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").commitMutation(m, {
                input: t
            }, {
                environmentType: "facebook",
                accessToken: token
            })).then((e)=>{
            if (e == null) {
                return d;
            }
            const e_xfb_whatsapp_catalog_product_visibility_update = e.xfb_whatsapp_catalog_product_visibility_update;
            if (e_xfb_whatsapp_catalog_product_visibility_update == null || e_xfb_whatsapp_catalog_product_visibility_update?.success == null) {
                return d;
            }
            return {
                type: "success",
                result: e_xfb_whatsapp_catalog_product_visibility_update.success
            };
        }).catch((e)=>{
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "updateProductVisibilityWithToken: failed with error"
            ])));
            if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)) {
                return {
                    type: "auth-failure"
                };
            }
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                return {
                    type: "graphql-error",
                    error: e
                };
            }
            return d;
        });
    }
    l.updateProductVisibility = p;
}, 98);