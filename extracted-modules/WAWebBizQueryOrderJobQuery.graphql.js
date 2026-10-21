__d("WAWebBizQueryOrderJobQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "request"
            }
        ];
        const args = [
            {
                kind: "Variable",
                name: "request",
                variableName: "request"
            }
        ];
        const n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creation_time_stamp",
            storageKey: null
        };
        const r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        };
        const a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null
        };
        const i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "currency",
            storageKey: null
        };
        const l = {
            alias: null,
            args: null,
            concreteType: "XWACatalogProductVariantInfo",
            kind: "LinkedField",
            name: "variant_info",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: "XWACatalogVariantProperties",
                    kind: "LinkedField",
                    name: "variant_properties",
                    plural: true,
                    selections: [
                        o,
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "value",
                            storageKey: null
                        }
                    ],
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const s = {
            alias: null,
            args: null,
            concreteType: "XWAProductCatalogProductMedia",
            kind: "LinkedField",
            name: "media",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: "XWAProductCatalogProductMediaImage",
                    kind: "LinkedField",
                    name: "images",
                    plural: true,
                    selections: [
                        r,
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "request_image_url",
                            storageKey: null
                        }
                    ],
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const u = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "quantity",
            storageKey: null
        };
        const c = {
            alias: null,
            args: null,
            concreteType: "XWACheckoutPriceDetails",
            kind: "LinkedField",
            name: "price_details",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "subtotal_amount",
                    storageKey: null
                },
                i,
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "total_amount",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebBizQueryOrderJobQuery",
                selections: [
                    {
                        alias: null,
                        args,
                        concreteType: "XWACheckoutGetOrderInfoResponseSuccess",
                        kind: "LinkedField",
                        name: "xwa_checkout_get_order_info",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWACheckoutGetOrderInfoResponseSuccessOrder",
                                kind: "LinkedField",
                                name: "order",
                                plural: false,
                                selections: [
                                    n,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWACatalogProduct",
                                        kind: "LinkedField",
                                        name: "products",
                                        plural: true,
                                        selections: [
                                            {
                                                kind: "RequiredField",
                                                field: r,
                                                action: "THROW"
                                            },
                                            {
                                                kind: "RequiredField",
                                                field: o,
                                                action: "THROW"
                                            },
                                            a,
                                            i,
                                            l,
                                            s,
                                            u
                                        ],
                                        storageKey: null
                                    },
                                    c
                                ],
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    }
                ],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebBizQueryOrderJobQuery",
                selections: [
                    {
                        alias: null,
                        args,
                        concreteType: "XWACheckoutGetOrderInfoResponseSuccess",
                        kind: "LinkedField",
                        name: "xwa_checkout_get_order_info",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWACheckoutGetOrderInfoResponseSuccessOrder",
                                kind: "LinkedField",
                                name: "order",
                                plural: false,
                                selections: [
                                    n,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWACatalogProduct",
                                        kind: "LinkedField",
                                        name: "products",
                                        plural: true,
                                        selections: [
                                            r,
                                            o,
                                            a,
                                            i,
                                            l,
                                            s,
                                            u
                                        ],
                                        storageKey: null
                                    },
                                    c
                                ],
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    }
                ]
            },
            params: {
                id: "26593811266898374",
                metadata: {},
                name: "WAWebBizQueryOrderJobQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);