__d("WAWebBizCatalogManagementDeleteProductMutation.graphql", [
    "WAWebBizCatalogManagementDeleteProductMutation_facebookRelayOperation"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }
        ];
        const t = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "request",
                        variableName: "input"
                    }
                ],
                concreteType: "XFBWhatsAppCatalogDeleteProductResponse",
                kind: "LinkedField",
                name: "xfb_whatsapp_catalog_delete_product",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "deleted_count",
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
                name: "WAWebBizCatalogManagementDeleteProductMutation",
                selections: t,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebBizCatalogManagementDeleteProductMutation",
                selections: t
            },
            params: {
                id: n("WAWebBizCatalogManagementDeleteProductMutation_facebookRelayOperation"),
                metadata: {},
                name: "WAWebBizCatalogManagementDeleteProductMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);