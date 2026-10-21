__d("WAWebBizCatalogManagementCreateCatalogMutation.graphql", [
    "WAWebBizCatalogManagementCreateCatalogMutation_facebookRelayOperation"
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
                concreteType: "XFBWhatsAppCatalogCreateResponse",
                kind: "LinkedField",
                name: "xfb_whatsapp_catalog_create",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "success",
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
                name: "WAWebBizCatalogManagementCreateCatalogMutation",
                selections: t,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebBizCatalogManagementCreateCatalogMutation",
                selections: t
            },
            params: {
                id: n("WAWebBizCatalogManagementCreateCatalogMutation_facebookRelayOperation"),
                metadata: {},
                name: "WAWebBizCatalogManagementCreateCatalogMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);