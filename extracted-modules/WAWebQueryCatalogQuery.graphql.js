__d("WAWebQueryCatalogQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "request"
            }
        ];
        const t = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        };
        const r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "description",
            storageKey: null
        };
        const o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null
        };
        const a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "original_image_url",
            storageKey: null
        };
        const i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "request_image_url",
            storageKey: null
        };
        const l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null
        };
        const s = [
            n,
            l
        ];
        const u = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "request",
                        variableName: "request"
                    }
                ],
                concreteType: "XWAProductCatalogGetResponseSuccess",
                kind: "LinkedField",
                name: "xwa_product_catalog_get_product_catalog",
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
                        concreteType: "XWAProductCatalogGetResponseSuccessProductCatalog",
                        kind: "LinkedField",
                        name: "product_catalog",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWACatalogProduct",
                                kind: "LinkedField",
                                name: "products",
                                plural: true,
                                selections: [
                                    t,
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "retailer_id",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_hidden",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_sanctioned",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "product_availability",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "max_available",
                                        storageKey: null
                                    },
                                    n,
                                    r,
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "url",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "shimmed_url",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "currency",
                                        storageKey: null
                                    },
                                    o,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWAProductCatalogProductStatusInfo",
                                        kind: "LinkedField",
                                        name: "status_info",
                                        plural: false,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "can_appeal",
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "status",
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWAProductCatalogProductSalePrice",
                                        kind: "LinkedField",
                                        name: "sale_price",
                                        plural: false,
                                        selections: [
                                            o,
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "start_date",
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "end_date",
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    },
                                    {
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
                                                    t,
                                                    a,
                                                    i
                                                ],
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWAProductCatalogProductMediaVideo",
                                                kind: "LinkedField",
                                                name: "videos",
                                                plural: true,
                                                selections: [
                                                    t,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "original_video_url",
                                                        storageKey: null
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "thumbnail_url",
                                                        storageKey: null
                                                    }
                                                ],
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "belongs_to",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "compliance_category",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWAProductCatalogProductComplianceInfo",
                                        kind: "LinkedField",
                                        name: "compliance_info",
                                        plural: false,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "country_code_origin",
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "importer_name",
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWAProductCatalogProductComplianceInfoImporterAddress",
                                                kind: "LinkedField",
                                                name: "importer_address",
                                                plural: false,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "street1",
                                                        storageKey: null
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "street2",
                                                        storageKey: null
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "postal_code",
                                                        storageKey: null
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "city",
                                                        storageKey: null
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "region",
                                                        storageKey: null
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "country_code",
                                                        storageKey: null
                                                    }
                                                ],
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    },
                                    {
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
                                                concreteType: "XWACatalogVariantListingDetails",
                                                kind: "LinkedField",
                                                name: "listing_details",
                                                plural: false,
                                                selections: [
                                                    r,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "multi_price",
                                                        storageKey: null
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "lowest_price",
                                                        storageKey: null
                                                    }
                                                ],
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWACatalogVariantAvailability",
                                                kind: "LinkedField",
                                                name: "availability",
                                                plural: false,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XWAVariantAvailabilityListing",
                                                        kind: "LinkedField",
                                                        name: "listing",
                                                        plural: true,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                kind: "ScalarField",
                                                                name: "is_available",
                                                                storageKey: null
                                                            },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "XWAVariantAvailabilityListingOption",
                                                                kind: "LinkedField",
                                                                name: "options",
                                                                plural: true,
                                                                selections: s,
                                                                storageKey: null
                                                            },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                kind: "ScalarField",
                                                                name: "product_id",
                                                                storageKey: null
                                                            }
                                                        ],
                                                        storageKey: null
                                                    }
                                                ],
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWACatalogVariantTypes",
                                                kind: "LinkedField",
                                                name: "types",
                                                plural: true,
                                                selections: [
                                                    n,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "XWACatalogVariantTypeOption",
                                                        kind: "LinkedField",
                                                        name: "options",
                                                        plural: true,
                                                        selections: [
                                                            l,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "XWAProductCatalogProductMediaImage",
                                                                kind: "LinkedField",
                                                                name: "thumbnail_media",
                                                                plural: false,
                                                                selections: [
                                                                    t,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "XWAProductCatalogProductMediaImageOriginalDimensions",
                                                                        kind: "LinkedField",
                                                                        name: "original_dimensions",
                                                                        plural: false,
                                                                        selections: [
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: "ScalarField",
                                                                                name: "height",
                                                                                storageKey: null
                                                                            },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: "ScalarField",
                                                                                name: "width",
                                                                                storageKey: null
                                                                            }
                                                                        ],
                                                                        storageKey: null
                                                                    },
                                                                    a,
                                                                    i
                                                                ],
                                                                storageKey: null
                                                            }
                                                        ],
                                                        storageKey: null
                                                    }
                                                ],
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWACatalogVariantProperties",
                                                kind: "LinkedField",
                                                name: "variant_properties",
                                                plural: true,
                                                selections: s,
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    }
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWACatalogPaging",
                                kind: "LinkedField",
                                name: "paging",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "before",
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "after",
                                        storageKey: null
                                    }
                                ],
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
                name: "WAWebQueryCatalogQuery",
                selections: u,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebQueryCatalogQuery",
                selections: u
            },
            params: {
                id: "30445081048424116",
                metadata: {},
                name: "WAWebQueryCatalogQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);