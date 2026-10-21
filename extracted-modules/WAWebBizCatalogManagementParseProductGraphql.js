__d("WAWebBizCatalogManagementParseProductGraphql", [
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementParseProductGraphql_product.graphql",
    "WAWebBizCatalogParseProduct",
    "WAWebBizParseProductGraphql",
    "WAWebProductTypes",
    "WAWebSyntheticCountryCode",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== void 0 ? e : e = n("WAWebBizCatalogManagementParseProductGraphql_product.graphql");
    function u(e) {
        return o("WAWebBizParseProductGraphql").parseProductGraphQL({
            id: e.id,
            name: e.name,
            description: e.description,
            url: e.url,
            shimmed_url: e.shimmed_url,
            price: e.price,
            currency: e.currency,
            retailer_id: e.retailer_id,
            belongs_to: e.belongs_to,
            status_info: {
                can_appeal: e.status_info?.can_appeal,
                status: e.status_info?.status
            },
            product_availability: e.availability,
            max_available: e.max_available,
            sale_price: {
                start_date: e.sale_price?.start_date,
                end_date: e.sale_price?.end_date,
                price: e.sale_price?.price
            },
            media: {
                images: e.media?.images.map(function(e) {
                    return {
                        id: e.id,
                        original_image_url: e.original_image_url,
                        request_image_url: e.request_image_url
                    };
                }) ?? [],
                videos: (e.media?.videos ?? []).map((e)=>({
                        id: e.id,
                        original_video_url: e.original_video_url,
                        thumbnail_url: e.thumbnail_url
                    }))
            },
            compliance_info: e.compliance_info != null ? {
                country_code_origin: e.compliance_info.country_code_origin,
                importer_name: e.compliance_info.importer_name,
                importer_address: e.compliance_info.importer_address != null ? {
                    street1: e.compliance_info.importer_address.street1,
                    street2: e.compliance_info.importer_address.street2,
                    postal_code: e.compliance_info.importer_address.postal_code,
                    city: e.compliance_info.importer_address.city,
                    region: e.compliance_info.importer_address.region,
                    country_code: e.compliance_info.importer_address.country_code
                } : null
            } : null,
            compliance_category: o("WAWebProductTypes").mapComplianceCategoryToWASchema(e.compliance_category),
            is_hidden: o("WAWebProductTypes").mapIsHiddenToWASchema(e.is_hidden),
            is_sanctioned: e.is_sanctioned,
            variant_info: e.variant_info
        });
    }
    function c(e) {
        if (e.imageCdnUrl == null) {
            throw r("err")("productModelToGraphQLInput: imageCdnUrl is null");
        }
        const n = [
            {
                url: e.imageCdnUrl
            }
        ];
        if (e.additionalImageCdnUrl != null) {
            n.push(...e.additionalImageCdnUrl.map((e)=>({
                    url: e
                })));
        }
        const a = {
            name: e.name,
            media: {
                image: n
            },
            is_hidden: e.isHidden
        };
        if (!r("isStringNullOrEmpty")(e.description)) {
            a.description = e.description;
        }
        if (!r("isStringNullOrEmpty")(e.url)) {
            a.url = e.url;
        }
        if (!r("isStringNullOrEmpty")(e.retailerId)) {
            a.retailer_id = e.retailerId;
        }
        if (e.priceAmount1000 != null) {
            a.currency = e.currency;
            a.price = e.priceAmount1000.toString();
        }
        if (e.salePriceAmount1000 != null) {
            a.sale_price = e.salePriceAmount1000.toString();
        }
        if (e.videos != null) {
            a.media.video = e.videos.map((e)=>({
                    url: e.original_video_url
                }));
        }
        const i = e.complianceInfo && d(e.complianceInfo);
        if (i != null) {
            a.compliance_info = i;
        }
        if (e.complianceInfo?.countryCodeOrigin === o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable || e.importerInformationExempt && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) {
            a.compliance_category = o("WAWebProductTypes").ProductComplianceCategory.CountryOriginExempt;
        }
        return a;
    }
    function d(e) {
        const t = o("WAWebBizCatalogParseProduct").scanComplianceInfoForMissingData(e);
        const { hasCountryCodeOrigin: n, hasImporterAddress: a, hasImporterName: i, isExempt: l } = t;
        if (!(l || !(n || i || a))) {
            const s = {
                country_code_origin: n && e.countryCodeOrigin != null ? e.countryCodeOrigin : ""
            };
            if (i) {
                s.importer_name = e.importerName;
            }
            if (a) {
                const y = {
                    country_code: e.importerAddress?.countryCode ?? "",
                    city: e.importerAddress?.city ?? "",
                    street1: e.importerAddress?.street1 ?? ""
                };
                if (!r("isStringNullOrEmpty")(e.importerAddress?.street2)) {
                    y.street2 = e.importerAddress.street2;
                }
                if (!r("isStringNullOrEmpty")(e.importerAddress?.region)) {
                    y.region = e.importerAddress.region;
                }
                if (!r("isStringNullOrEmpty")(e.importerAddress?.postalCode)) {
                    y.postal_code = e.importerAddress.postalCode;
                }
            }
            return s;
        }
    }
    l.PARSE_PRODUCT_FRAGMENT = s;
    l.parseProductGraphQL = u;
    l.productModelToGraphQLInput = c;
}, 98);