__d("WAWebBizParseProductGraphql", [
    "WAWebBizCartConstants",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizParseProductGraphql_product.graphql",
    "WAWebProductTypes",
    "WAWebSignedShimmedUrl",
    "WAWebSyntheticCountryCode",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = [
        "compliance_info",
        "product_availability",
        "sale_price",
        "status_info"
    ];
    const u = {
        AVAILABLE_FOR_ANOTHER_POSTCODE: o("WAWebProductTypes").ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE,
        IN_STOCK: o("WAWebProductTypes").ProductAvailability.IN_STOCK,
        OUT_OF_STOCK: o("WAWebProductTypes").ProductAvailability.OUT_OF_STOCK
    };
    function c(t) {
        const { compliance_info: b, product_availability: v, sale_price: S, status_info: R } = t;
        const L = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const E = L.media?.images ?? [];
        const k = E[0];
        const I = babelHelpers.arrayLikeToArray(E).slice(1);
        const T = babelHelpers.extends({
            id: r("nullthrows")(L.id),
            retailer_id: L.retailer_id ?? "",
            name: r("nullthrows")(L.name),
            description: L.description ?? "",
            url: L.url ?? "",
            currency: L.currency,
            price: L.price,
            is_hidden: L.is_hidden === "ISHIDDEN_TRUE",
            is_sanctioned: L.is_sanctioned ?? false,
            max_available: L.max_available ?? o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY,
            availability: v && v in u ? u[v] : o("WAWebProductTypes").ProductAvailability.UNKNOWN
        }, S?.price != null ? babelHelpers.extends({
            sale_price: S.price
        }, S.start_date != null && S.end_date != null ? {
            sale_start_date: S.start_date,
            sale_end_date: S.end_date
        } : null) : null, {
            checkmark: L.belongs_to === "true",
            image_hashes_for_whatsapp: (L.media?.images ?? []).map((e)=>r("nullthrows")(e.id)),
            image_cdn_urls: k ? [
                {
                    key: "requested",
                    value: r("nullthrows")(k.request_image_url)
                },
                {
                    key: "full",
                    value: r("nullthrows")(k.original_image_url)
                }
            ] : [],
            additional_image_cdn_urls: I.map((e)=>[
                    {
                        key: "requested",
                        value: r("nullthrows")(e.request_image_url)
                    },
                    {
                        key: "full",
                        value: r("nullthrows")(e.original_image_url)
                    }
                ]),
            whatsapp_product_can_appeal: R?.can_appeal === "true",
            capability_to_review_status: [
                {
                    key: "WHATSAPP",
                    value: R?.status ?? "APPROVED"
                }
            ],
            videos: L.media?.videos?.filter(function(e) {
                return e.original_video_url != null || e.thumbnail_url != null;
            }).map(function(e) {
                return {
                    id: e.id ?? "",
                    original_video_url: e.original_video_url ?? "",
                    thumbnail_url: e.thumbnail_url ?? ""
                };
            }),
            variant_info: L.variant_info != null ? {
                listing_details: L.variant_info.listing_details ? {
                    description: L.variant_info.listing_details.description,
                    multi_price: L.variant_info.listing_details.multi_price,
                    lowest_price: L.variant_info.listing_details.lowest_price
                } : void 0,
                availability: L.variant_info.availability ? {
                    listing: L.variant_info.availability.listing.map((e)=>({
                            is_available: e.is_available,
                            options: e.options.map((e)=>({
                                    name: e.name,
                                    value: e.value
                                })),
                            product_id: e.product_id
                        }))
                } : void 0,
                types: L.variant_info?.types.map(function(e) {
                    return {
                        name: e.name,
                        options: e.options.map((e)=>{
                            let t;
                            if (e.thumbnail_media) {
                                t = {
                                    id: e.thumbnail_media.id,
                                    original_dimensions: e.thumbnail_media.original_dimensions ? {
                                        height: e.thumbnail_media.original_dimensions.height,
                                        width: e.thumbnail_media.original_dimensions.width
                                    } : void 0,
                                    original_image_url: e.thumbnail_media.original_image_url,
                                    request_image_url: e.thumbnail_media.request_image_url
                                };
                            }
                            return {
                                value: e.value,
                                thumbnail_media: t
                            };
                        })
                    };
                }) ?? [],
                variant_properties: L.variant_info?.variant_properties.map(function(e) {
                    return {
                        name: e.name,
                        value: e.value
                    };
                }) ?? []
            } : void 0
        });
        if (L.compliance_category === "COMPLIANCECATEGORY_COUNTRYORIGINEXEMPT") {
            if (b != null && b.country_code_origin != null && b.importer_address == null && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) {
                T.compliance_info = {
                    country_code_origin: b.country_code_origin ?? void 0
                };
                T.importer_information_exempt = true;
            } else {
                if (b == null && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) {
                    T.importer_information_exempt = true;
                } else {
                    T.compliance_info = {
                        country_code_origin: o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable
                    };
                }
            }
        } else if (b != null) {
            const x = b.importer_address;
            if (x) {
                T.compliance_info = {
                    country_code_origin: b.country_code_origin ?? void 0,
                    importer_name: b.importer_name ?? void 0,
                    importer_address: {
                        street1: r("nullthrows")(x?.street1),
                        street2: x?.street2 ?? void 0,
                        postal_code: x?.postal_code ?? void 0,
                        city: r("nullthrows")(x?.city),
                        region: x?.region ?? void 0,
                        country_code: r("nullthrows")(x?.country_code)
                    }
                };
            } else {
                T.compliance_info = {
                    country_code_origin: b.country_code_origin ?? void 0,
                    importer_name: b.importer_name ?? void 0,
                    importer_address: void 0
                };
            }
        }
        if (L.shimmed_url != null) {
            T.signedShimmedUrl = o("WAWebSignedShimmedUrl").asSignedShimmedUrl(L.shimmed_url);
        }
        return T;
    }
    l.parseProductGraphQL = c;
}, 98);