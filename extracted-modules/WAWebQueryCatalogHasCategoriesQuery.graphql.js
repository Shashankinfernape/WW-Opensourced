__d("WAWebQueryCatalogHasCategoriesQuery.graphql", [], function(t, n, r, o, a, i) {
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
                concreteType: "XWAProductCatalogGetCategoriesResponseSuccess",
                kind: "LinkedField",
                name: "xwa_product_catalog_get_categories",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XWAProductCatalogGetCategoriesResponseSuccessCategoryWithSubCategories",
                        kind: "LinkedField",
                        name: "categories",
                        plural: true,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "__typename",
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
                name: "WAWebQueryCatalogHasCategoriesQuery",
                selections: t,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebQueryCatalogHasCategoriesQuery",
                selections: t
            },
            params: {
                id: "9746549555457302",
                metadata: {},
                name: "WAWebQueryCatalogHasCategoriesQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);