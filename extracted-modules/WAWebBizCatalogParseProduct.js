__d("WAWebBizCatalogParseProduct", [
    "WAWebBizCartConstants",
    "WAWebProductTypes",
    "WAWebSignedShimmedUrl",
    "WAWebSyntheticCountryCode"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const a = e.child("id").contentString();
        const i = e.maybeChild("url");
        let l = "";
        if (i && i.hasContent()) {
            l = i.contentString();
        }
        const u = e.child("name").contentString();
        const d = e.maybeAttrString("availability") ?? o("WAWebProductTypes").ProductAvailability.UNKNOWN;
        let m = o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY;
        const p = e.maybeAttrString("max_available");
        if (p != null) {
            m = Number(p);
        }
        const _ = e.maybeChild("max_available");
        const f = _?.contentString();
        if (f != null) {
            m = Number(f);
        }
        const g = e.maybeChild("description");
        const h = g ? g.contentString() : "";
        const y = e.maybeChild("belongs_to");
        const C = y?.contentString() === "true" || false;
        const b = [];
        const v = [];
        const S = [];
        const R = e.child("media");
        let L = true;
        R.forEachChildWithTag("image", function(e) {
            if (L) {
                L = false;
                b.push({
                    key: "requested",
                    value: e.child("request_image_url").contentString()
                });
                b.push({
                    key: "full",
                    value: e.child("original_image_url").contentString()
                });
                S.push(e.child("id").contentString());
            } else {
                const t = [];
                t.push({
                    key: "requested",
                    value: e.child("request_image_url").contentString()
                });
                t.push({
                    key: "full",
                    value: e.child("original_image_url").contentString()
                });
                v.push(t);
                S.push(e.child("id").contentString());
            }
        });
        const E = [];
        R.forEachChildWithTag("video", function(e) {
            const t = e.maybeChild("id");
            const n = e.child("original_video_url").contentString();
            const r = e.maybeChild("thumbnail_url");
            const o = t?.contentString() || "";
            const a = r?.contentString() || "";
            E.push({
                id: o,
                original_video_url: n,
                thumbnail_url: a
            });
        });
        const k = e.maybeChild("status_info");
        const I = (k == null ? void 0 : k.child("status").contentString()) || "APPROVED";
        const T = k?.maybeChild("can_appeal")?.contentString();
        const D = [
            {
                key: "WHATSAPP",
                value: I
            }
        ];
        const x = e.maybeChild("currency");
        const $ = x ? x.contentString() : void 0;
        const P = e.maybeChild("price");
        const N = P?.contentString();
        const M = e.maybeChild("retailer_id");
        const w = M ? M.contentString() : "";
        const A = e.hasAttr("is_hidden") ? e.attrString("is_hidden") === "true" : false;
        const F = e.hasAttr("compliance_category") ? o("WAWebProductTypes").ProductComplianceCategory.cast(e.attrString("compliance_category")) : o("WAWebProductTypes").ProductComplianceCategory.Default;
        const O = e.maybeChild("sale_price");
        const B = O ? babelHelpers.extends({
            sale_price: O.maybeChild("price")?.contentString()
        }, O.hasChild("start_date") && O.hasChild("end_date") ? {
            sale_start_date: O.child("start_date").contentString(),
            sale_end_date: O.child("end_date").contentString()
        } : null) : null;
        const W = e.maybeAttrString("is_sanctioned") === "true";
        const q = babelHelpers.extends({
            id: a,
            is_hidden: A,
            is_sanctioned: W,
            url: l,
            name: u,
            description: h,
            availability: d,
            max_available: m,
            additional_image_cdn_urls: v,
            image_cdn_urls: b,
            capability_to_review_status: D,
            whatsapp_product_can_appeal: T === "true",
            image_hashes_for_whatsapp: S,
            currency: $,
            price: N,
            retailer_id: w,
            checkmark: C,
            videos: E,
            variant_info: null
        }, B);
        const U = e.maybeChild("compliance_info");
        if (F === o("WAWebProductTypes").ProductComplianceCategory.CountryOriginExempt) {
            q.compliance_info = c();
        } else if (U) {
            q.compliance_info = s(U);
        }
        const V = e.maybeChild("shimmed_url");
        if (V != null) {
            const H = V.contentString();
            if (H !== "") {
                q.signedShimmedUrl = o("WAWebSignedShimmedUrl").asSignedShimmedUrl(H);
            }
        }
        return q;
    }
    function s(e) {
        const n = e.child("country_code_origin").contentString();
        const r = e.maybeChild("importer_name")?.contentString();
        const o = e.maybeChild("importer_address");
        const a = {
            country_code_origin: n,
            importer_name: r
        };
        if (o) {
            a.importer_address = {
                street1: o.child("street1").contentString(),
                street2: o.maybeChild("street2")?.contentString(),
                postal_code: o.maybeChild("postal_code")?.contentString(),
                city: o.child("city").contentString(),
                region: o.maybeChild("region")?.contentString(),
                country_code: o.child("country_code").contentString()
            };
        }
        return a;
    }
    function u(e) {
        const t = e?.countryCodeOrigin === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable);
        const n = !t && e?.countryCodeOrigin !== void 0;
        const r = !t && e?.importerName !== void 0;
        const a = !t && e?.importerAddress !== void 0 && [
            e.importerAddress.street1,
            e.importerAddress.street2,
            e.importerAddress.city,
            e.importerAddress.region,
            e.importerAddress.postalCode,
            e.importerAddress.countryCode
        ].some((e)=>e);
        return {
            isExempt: t,
            hasImporterAddress: a,
            hasImporterName: r,
            hasCountryCodeOrigin: n
        };
    }
    function c() {
        return {
            country_code_origin: String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable)
        };
    }
    l.parseProductNode = e;
    l.scanComplianceInfoForMissingData = u;
}, 98);