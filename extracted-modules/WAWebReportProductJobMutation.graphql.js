__d("WAWebReportProductJobMutation.graphql", [], function(t, n, r, o, a, i) {
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
                concreteType: "XWAWhatsAppCatalogReportProductResponse",
                kind: "LinkedField",
                name: "xwa_whatsapp_catalog_report_product",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
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
                name: "WAWebReportProductJobMutation",
                selections: t,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebReportProductJobMutation",
                selections: t
            },
            params: {
                id: "27419506181072609",
                metadata: {},
                name: "WAWebReportProductJobMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);