__d("WAWebGraphQLVerifyPostcodeJobQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "request"
            }
        ];
        const t = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "request",
                        variableName: "request"
                    }
                ],
                concreteType: "XWAProductCatalogGetVerifyPostcodeResponseSuccess",
                kind: "LinkedField",
                name: "xwa_product_catalog_get_verify_postcode",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XWAProductCatalogGetVerifyPostcodeResponseSuccessPostcodeVerificationResult",
                        kind: "LinkedField",
                        name: "postcode_verification_result",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "result_code",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "encrypted_location_name",
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    }
                ],
                storageKey: null
            }
        ];
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebGraphQLVerifyPostcodeJobQuery",
                selections: t,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebGraphQLVerifyPostcodeJobQuery",
                selections: t
            },
            params: {
                id: "WAWebGraphQLVerifyPostcodeJobQuery",
                metadata: {},
                name: "WAWebGraphQLVerifyPostcodeJobQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    e.hash = "7154b35b1d03a7c8ff2e0600cc3ac8c0";
    a.exports = e;
}, null);