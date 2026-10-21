__d("WAWebBizCatalogManagementAddProductMutation.graphql", [
    "WAWebBizCatalogManagementAddProductMutation_facebookRelayOperation"
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
                kind: "Variable",
                name: "request",
                variableName: "input"
            }
        ];
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
            name: "id",
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
            name: "name",
            storageKey: null
        };
        const s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null
        };
        const u = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "status",
            storageKey: null
        };
        const c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null
        };
        const d = [
            l,
            c
        ];
        const m = [
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
            r,
            o,
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
                            o,
                            a,
                            i
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
                            o,
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
            l,
            s,
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
                    s,
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
            u,
            {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppCatalogStatusInfo",
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
                    u
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
                                        selections: d,
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
                            l,
                            {
                                alias: null,
                                args: null,
                                concreteType: "XFBWhatsAppCatalogVariantTypeOption",
                                kind: "LinkedField",
                                name: "options",
                                plural: true,
                                selections: [
                                    c,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XFBWhatsAppCatalogProductMediaImage",
                                        kind: "LinkedField",
                                        name: "thumbnail_media",
                                        plural: false,
                                        selections: [
                                            o,
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
                        concreteType: "XFBWhatsAppCatalogVariantProperties",
                        kind: "LinkedField",
                        name: "variant_properties",
                        plural: true,
                        selections: d,
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
                name: "WAWebBizCatalogManagementAddProductMutation",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "XFBWhatsAppCatalogProductMutationResponse",
                        kind: "LinkedField",
                        name: "xfb_whatsapp_catalog_add_product",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XFBWhatsAppCatalogProductInfo",
                                kind: "LinkedField",
                                name: "product",
                                plural: false,
                                selections: [
                                    {
                                        kind: "InlineDataFragmentSpread",
                                        name: "WAWebBizCatalogManagementParseProductGraphql_product",
                                        selections: m,
                                        args: null,
                                        argumentDefinitions: []
                                    }
                                ],
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    }
                ],
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebBizCatalogManagementAddProductMutation",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "XFBWhatsAppCatalogProductMutationResponse",
                        kind: "LinkedField",
                        name: "xfb_whatsapp_catalog_add_product",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XFBWhatsAppCatalogProductInfo",
                                kind: "LinkedField",
                                name: "product",
                                plural: false,
                                selections: m,
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    }
                ]
            },
            params: {
                id: n("WAWebBizCatalogManagementAddProductMutation_facebookRelayOperation"),
                metadata: {},
                name: "WAWebBizCatalogManagementAddProductMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);