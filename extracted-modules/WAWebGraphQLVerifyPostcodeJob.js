__d("WAWebGraphQLVerifyPostcodeJob", [
    "WAWebGraphQLServerError",
    "WAWebGraphQLVerifyPostcodeJobQuery.graphql",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebRelayClient"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== void 0 ? e : e = n("WAWebGraphQLVerifyPostcodeJobQuery.graphql");
    function u(e, t) {
        return o("WAWebRelayClient").fetchQuery(s, {
            request: {
                verify_postcode: {
                    biz_jid: e.toJid(),
                    direct_connection_encrypted_info: t
                }
            }
        }).then((e)=>{
            const r = e?.xwa_product_catalog_get_verify_postcode?.postcode_verification_result ?? {};
            const { encrypted_location_name: o, result_code: a } = r;
            return {
                encryptedLocationName: o,
                resultCode: c(a)
            };
        }).catch((e)=>{
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(e);
            }
            throw e;
        });
    }
    function c(e) {
        switch(e){
            case "RESULT_CODE_SUCCESS":
                return "success";
            case "RESULT_CODE_UNSERVICEABLE_LOCATION":
                return "unserviceable_location";
            default:
                return "invalid_postcode";
        }
    }
    l.verifyPostcode = u;
}, 98);