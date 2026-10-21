__d("WAWebGraphQLProductCatalogGetPublicKeyJob", [
    "WAWebCertificateString",
    "WAWebGraphQLProductCatalogGetPublicKeyJobQuery.graphql",
    "WAWebRelayClient"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== void 0 ? e : e = n("WAWebGraphQLProductCatalogGetPublicKeyJobQuery.graphql");
    function u(e) {
        return o("WAWebRelayClient").fetchQuery(s, {
            request: {
                public_key: {
                    biz_jid: e.toJid()
                }
            }
        }).then((e)=>{
            const n = e?.xwa_product_catalog_get_public_key?.public_key_certificate_pem;
            return {
                certificate: n != null ? o("WAWebCertificateString").stringToCertificateString(n) : null
            };
        });
    }
    l.getPublicKey = u;
}, 98);