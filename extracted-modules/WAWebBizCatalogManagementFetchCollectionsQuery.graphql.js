__d("WAWebBizCatalogManagementFetchCollectionsQuery.graphql", [
    "WAWebBizCatalogManagementFetchCollectionsQuery_facebookRelayOperation"
], function(t, n, r, o, a, i) {
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
                kind: "Variable",
                name: "request",
                variableName: "request"
            }
        ];
        const r = {
            alias: null,
            args: null,
            concreteType: "XFBWhatsAppCatalogPagingInfo",
            kind: "LinkedField",
            name: "paging",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "after",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "catalog_type",
            storageKey: null
        };
        const a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        };
        const l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "description",
            storageKey: null
        };
        const s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "original_image_url",
            storageKey: null
        };
        const u = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "request_image_url",
            storageKey: null
        };
        const c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null
        };
        const d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "status",
            storageKey: null
        };
        const m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_appeal",
            storageKey: null
        };
        const p = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null
        };
        const _ = [
            i,
            p
        ];
        const f = [
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "availability",
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
                concreteType: "XFBWhatsAppCatalogProductComplianceInfo",
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
                        concreteType: "XFBWhatsAppCatalogProductComplianceInfoImporterAddress",
                        kind: "LinkedField",
                        name: "importer_address",
                        plural: false,
                        selections: [
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
                                name: "country_code",
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
                                name: "region",
                                storageKey: null
                            },
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
                            }
                        ],
                        storageKey: null
                    },
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "importer_name",
                        storageKey: null
                    }
                ],
                storageKey: null
            },
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "currency",
                storageKey: null
            },
            l,
            a,
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
                name: "max_available",
                storageKey: null
            },
            {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppCatalogProductMedia",
                kind: "LinkedField",
                name: "media",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XFBWhatsAppCatalogProductMediaImage",
                        kind: "LinkedField",
                        name: "images",
                        plural: true,
                        selections: [
                            a,
                            s,
                            u
                        ],
                        storageKey: null
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "XFBWhatsAppCatalogProductMediaVideo",
                        kind: "LinkedField",
                        name: "videos",
                        plural: true,
                        selections: [
                            a,
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
            i,
            c,
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
                concreteType: "XFBWhatsAppCatalogProductSalePrice",
                kind: "LinkedField",
                name: "sale_price",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "end_date",
                        storageKey: null
                    },
                    c,
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "start_date",
                        storageKey: null
                    }
                ],
                storageKey: null
            },
            d,
            {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppCatalogStatusInfo",
                kind: "LinkedField",
                name: "status_info",
                plural: false,
                selections: [
                    m,
                    d
                ],
                storageKey: null
            },
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
                concreteType: "XFBWhatsAppCatalogProductVariantInfo",
                kind: "LinkedField",
                name: "variant_info",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XFBWhatsAppCatalogVariantListingDetails",
                        kind: "LinkedField",
                        name: "listing_details",
                        plural: false,
                        selections: [
                            l,
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
                        concreteType: "XFBWhatsAppCatalogVariantAvailability",
                        kind: "LinkedField",
                        name: "availability",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XFBWhatsAppCatalogVariantAvailabilityListing",
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
                                        concreteType: "XFBWhatsAppCatalogVariantAvailabilityListingOption",
                                        kind: "LinkedField",
                                        name: "options",
                                        plural: true,
                                        selections: _,
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
                        concreteType: "XFBWhatsAppCatalogVariantTypes",
                        kind: "LinkedField",
                        name: "types",
                        plural: true,
                        selections: [
                            i,
                            {
                                alias: null,
                                args: null,
                                concreteType: "XFBWhatsAppCatalogVariantTypeOption",
                                kind: "LinkedField",
                                name: "options",
                                plural: true,
                                selections: [
                                    p,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XFBWhatsAppCatalogProductMediaImage",
                                        kind: "LinkedField",
                                        name: "thumbnail_media",
                                        plural: false,
                                        selections: [
                                            a,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XFBWhatsAppCatalogProductMediaImageOriginalDimensions",
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
                                            s,
                                            u
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
                        concreteType: "XFBWhatsAppCatalogVariantProperties",
                        kind: "LinkedField",
                        name: "variant_properties",
                        plural: true,
                        selections: _,
                        storageKey: null
                    }
                ],
                storageKey: null
            }
        ];
        const g = {
            alias: null,
            args: null,
            concreteType: "XFBWhatsAppCatalogStatusInfo",
            kind: "LinkedField",
            name: "status_info",
            plural: false,
            selections: [
                m,
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "commerce_url",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "reject_reason",
                    storageKey: null
                },
                d
            ],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebBizCatalogManagementFetchCollectionsQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "XFBWhatsAppCatalogGetCollectionsResponse",
                        kind: "LinkedField",
                        name: "xfb_whatsapp_catalog_collections",
                        plural: false,
                        selections: [
                            r,
                            o,
                            {
                                alias: null,
                                args: null,
                                concreteType: "XFBWhatsAppCatalogCollectionInfo",
                                kind: "LinkedField",
                                name: "collections",
                                plural: true,
                                selections: [
                                    a,
                                    i,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XFBWhatsAppCatalogProductInfo",
                                        kind: "LinkedField",
                                        name: "products",
                                        plural: true,
                                        selections: [
                                            {
                                                kind: "InlineDataFragmentSpread",
                                                name: "WAWebBizCatalogManagementParseProductGraphql_product",
                                                selections: f,
                                                args: null,
                                                argumentDefinitions: []
                                            }
                                        ],
                                        storageKey: null
                                    },
                                    g
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
                name: "WAWebBizCatalogManagementFetchCollectionsQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "XFBWhatsAppCatalogGetCollectionsResponse",
                        kind: "LinkedField",
                        name: "xfb_whatsapp_catalog_collections",
                        plural: false,
                        selections: [
                            r,
                            o,
                            {
                                alias: null,
                                args: null,
                                concreteType: "XFBWhatsAppCatalogCollectionInfo",
                                kind: "LinkedField",
                                name: "collections",
                                plural: true,
                                selections: [
                                    a,
                                    i,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XFBWhatsAppCatalogProductInfo",
                                        kind: "LinkedField",
                                        name: "products",
                                        plural: true,
                                        selections: f,
                                        storageKey: null
                                    },
                                    g
                                ],
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    }
                ]
            },
            params: {
                id: n("WAWebBizCatalogManagementFetchCollectionsQuery_facebookRelayOperation"),
                metadata: {},
                name: "WAWebBizCatalogManagementFetchCollectionsQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);