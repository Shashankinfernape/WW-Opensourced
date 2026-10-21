__d("WAWebBizGetMerchantCompliance", [
    "WALogger",
    "WAWebBizGetMerchantComplianceQuery.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebMerchantComplianceUtils",
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
    const m = e !== undefined ? e : e = n("WAWebBizGetMerchantComplianceQuery.graphql");
    function p(e) {
        return _(e).then((e)=>{
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getMerchantComplianceImpl: success"
                ])));
                return e;
            }
            e.type;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'fetchCatalog: failed as "',
                '"'
            ])), e.type);
            return e;
        });
    }
    function _(e) {
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAWebRelayClient").fetchQuery(m, {
                request: e
            }, {
                environmentType: "whatsapp_catalog"
            })).then((e)=>{
            if (e == null) {
                return d;
            }
            const c = e.xfb_whatsapp_biz_merchant_compliance_info?.merchant_info;
            if (c == null) {
                return d;
            }
            const merchant_info = [
                {
                    entity_name: c.entity_name || "",
                    entity_type: o("WAWebMerchantComplianceUtils").mapEntityTypeToBusinessTypeOption(c.entity_type),
                    is_registered: c.is_registered || false,
                    entity_type_custom: c.entity_type_custom || "",
                    customer_care_details: {
                        email: c.customer_care_details?.email || "",
                        landline_number: c.customer_care_details?.landline_number || "",
                        mobile_number: c.customer_care_details?.mobile_number || ""
                    },
                    grievance_officer_details: {
                        name: c.grievance_officer_details?.name || "",
                        email: c.grievance_officer_details?.email || "",
                        landline_number: c.grievance_officer_details?.landline_number || "",
                        mobile_number: c.grievance_officer_details?.mobile_number || ""
                    }
                }
            ];
            return {
                type: "success",
                merchant_info
            };
        }).catch((e)=>{
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "getMerchantComplianceImpl: failed with error"
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
    l.getMerchantCompliance = p;
}, 98);