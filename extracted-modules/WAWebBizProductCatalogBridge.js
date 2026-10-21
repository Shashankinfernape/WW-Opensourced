__d("WAWebBizProductCatalogBridge", [
    "Promise",
    "WALogger",
    "WAWeb-moment",
    "WAWebBackendErrors",
    "WAWebBizCatalogAddProductJob",
    "WAWebBizCatalogAppealProductJob",
    "WAWebBizCatalogDeleteProductsJob",
    "WAWebBizCatalogEditProductJob",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogProductVisibilitySetJob",
    "WAWebBizCreateProductCatalogJob",
    "WAWebBizLogQplEvents",
    "WAWebNoop",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebProductTypes",
    "WAWebQplFlowWrapper",
    "WAWebQueryCatalogHasCategories",
    "WAWebQueryProductListCatalogJob",
    "WAWebReportProductJob",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "WAWebWidFactory",
    "qpl",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = r("requireDeferred")("WAWebQueryCatalog").__setRef("WAWebBizProductCatalogBridge");
    const _ = r("requireDeferred")("WAWebQueryCatalogProduct").__setRef("WAWebBizProductCatalogBridge");
    const f = (m = r("qpl"))._(774782053, "3437");
    const g = m._(774769273, "3438");
    const h = m._(774769395, "3439");
    const y = m._(774779113, "3440");
    const C = m._(774774122, "3441");
    const b = m._(774778628, "3442");
    function v(e, t, n, a, i, l, s, u, c) {
        if (l === true) {
            o("WAWebBizLogQplEvents").qplPointProductView("datasource_start");
        }
        const d = _.load().then((r)=>r(e, t, n, a, i, s, u, c));
        d.then(()=>l === true && o("WAWebBizLogQplEvents").qplPointProductView("datasource_end")).catch(r("WAWebNoop"));
        return o("WAWebBackendErrors").attachErrorLogger(d, "Query product failed");
    }
    function S(t, r, a, i, l, u, allowShopSource, variantInfoFields, variantThumbnailHeight, variantThumbnailWidth) {
        if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
            return (d || (d = n("Promise"))).reject(new (o("WAWebBackendErrors")).E451);
        }
        const g = p.load().then((e)=>e({
                catalogWid: t,
                afterCursor: r,
                limit: a,
                width: i,
                height: l,
                checkmarkCollectionId: u,
                allowShopSource,
                variantInfoFields,
                variantThumbnailHeight,
                variantThumbnailWidth
            }));
        return g.catch((t)=>{
            throw t instanceof o("WAWebBackendErrors").ServerStatusCodeError && t.statusCode === 404 ? t : t.errorCode === 451 ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Query catalog failed, error: 451"
            ]))).verbose().sendLogs("Query catalog failed, commerce-features-disabled"), new (o("WAWebBackendErrors")).E451) : (o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Query catalog failed, error: ",
                ""
            ])), t).verbose().sendLogs("Query catalog failed"), t);
        });
    }
    function R(e, productIds, r, a, i) {
        if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()) {
            return (d || (d = n("Promise"))).reject(new (o("WAWebBackendErrors")).E451);
        }
        if (i) {
            o("WAWebBizLogQplEvents").qplPointPLMDetailsView("datasource_start");
        }
        const l = o("WAWebRestOperations").runRestOperation(o("WAWebScheduledOperations").ScheduledOperation.QUERY_PRODUCT_LIST, function() {
            return o("WAWebQueryProductListCatalogJob").queryProductListCatalog({
                catalogWid: e.toString(),
                directConnectionEncryptedInfo: undefined,
                height: a,
                productIds,
                width: r
            });
        }, function() {
            return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilCompleted(o("WAWebPersistedJobDefinitions").jobSerializers.queryProductList(e, productIds, undefined, r, a));
        });
        l.then(()=>i && o("WAWebBizLogQplEvents").qplPointPLMDetailsView("datasource_end")).catch((e)=>{
            if (e.errorCode === 451) {
                throw new (o("WAWebBackendErrors")).E451;
            }
        });
        return l;
    }
    function L(e) {
        return o("WAWebQueryCatalogHasCategories").queryCatalogHasCategories({
            catalogWid: e
        });
    }
    function E(e, t, n) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_start");
        const a = r("WAWebReportProductJob")(e, t, n);
        a.then(()=>{
            o("WAWebQplFlowWrapper").QPL.markerPoint(f, "datasource_end");
        }).catch(r("WAWebNoop"));
        return o("WAWebBackendErrors").attachErrorLogger(a, "Report product failed");
    }
    function k(e, t) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_start");
        const n = o("WAWebBizCatalogAppealProductJob").appealProductMD(e, t);
        n.then(()=>{
            o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_end");
        }).catch(r("WAWebNoop"));
        return o("WAWebBackendErrors").attachErrorLogger(n, "Appeal product failed");
    }
    function I() {
        o("WAWebQplFlowWrapper").QPL.markerPoint(h, "datasource_start");
        const e = o("WAWebBizCreateProductCatalogJob").createProductCatalog();
        e.then(()=>{
            o("WAWebQplFlowWrapper").QPL.markerPoint(h, "datasource_end");
        }).catch(r("WAWebNoop"));
        return o("WAWebBackendErrors").attachErrorLogger(e, "Create catalog failed");
    }
    function T({ height, product, width }) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_start");
        const i = o("WAWebBizCatalogAddProductJob").addProductMD(product, width, height);
        i.then(()=>{
            o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_end");
        }).catch(r("WAWebNoop"));
        return i.then(N).catch((e)=>{
            if (!(e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === 406 || e instanceof o("WAWebBackendErrors").CatalogEditServerError && e.statusCode === 406)) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Add product failed, error: ",
                    ""
                ])), e).verbose().sendLogs("Add product failed");
            }
            throw e;
        });
    }
    function D(e, t, n) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_start");
        const a = r("WAWebBizCatalogEditProductJob")(e, t, n);
        a.then((e)=>{
            o("WAWebQplFlowWrapper").QPL.markerPoint(y, "datasource_end");
        }).catch(r("WAWebNoop"));
        return a.then(N).catch((e)=>{
            if (!(e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === 406 || e instanceof o("WAWebBackendErrors").CatalogEditServerError && e.statusCode === 406)) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Edit product failed, error: ",
                    ""
                ])), e).verbose().sendLogs("Edit product failed");
            }
            throw e;
        });
    }
    function x(e) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(C, "datasource_start");
        const t = o("WAWebBizCatalogDeleteProductsJob").deleteProductsMD(e);
        const n = t.then((e)=>{
            o("WAWebQplFlowWrapper").QPL.markerPoint(C, "datasource_end");
            return e;
        });
        return o("WAWebBackendErrors").attachErrorLogger(n, "Delete product failed");
    }
    function $(e) {
        if (e == null) {
            return null;
        }
        return parseInt(e, 10);
    }
    function P(e) {
        if (e != null && e !== "") {
            return r("WAWeb-moment").utc(e, r("WAWeb-moment").ISO_8601).valueOf();
        }
        return null;
    }
    function N(e, t) {
        const i = e.capability_to_review_status[0]?.value || "APPROVED";
        const l = {
            catalogWid: t,
            id: e.id,
            isHidden: e.is_hidden || false,
            isSanctioned: e.is_sanctioned || false,
            url: e.url || "",
            name: e.name,
            description: e.description || "",
            availability: o("WAWebProductTypes").ProductAvailability.cast(e.availability) ?? o("WAWebProductTypes").ProductAvailability.UNKNOWN,
            maxAvailable: e.max_available,
            additionalImageCdnUrl: e.additional_image_cdn_urls.map((e)=>e[1].value),
            additionalImageHashes: e.image_hashes_for_whatsapp.slice(1),
            imageCdnUrl: e.image_cdn_urls[1].value,
            imageHash: e.image_hashes_for_whatsapp[0],
            reviewStatus: i,
            currency: e.currency,
            priceAmount1000: $(e.price),
            salePriceAmount1000: $(e.sale_price),
            salePriceStartDate: P(e.sale_start_date),
            salePriceEndDate: P(e.sale_end_date),
            retailerId: e.retailer_id || "",
            productMsgMediaData: null,
            imageCount: e.additional_image_cdn_urls.length + 1,
            fetchedFromServer: true,
            videos: e.videos?.map(function(e) {
                return {
                    thumbnail_url: e.thumbnail_url,
                    original_video_url: e.original_video_url,
                    id: e.id
                };
            }),
            t: Date.now() / 1000,
            old: false,
            canAppeal: e.whatsapp_product_can_appeal,
            checkmark: e.checkmark,
            importerInformationExempt: !!e.importer_information_exempt,
            variantInfo: e.variant_info,
            displayPriority: 0
        };
        if (e.compliance_info) {
            l.complianceInfo = A(e.compliance_info);
        }
        if (e.signedShimmedUrl != null) {
            l.signedShimmedUrl = e.signedShimmedUrl;
        }
        return l;
    }
    function M(e) {
        let t;
        if (e.businessOwnerJid != null && e.businessOwnerJid !== "") {
            t = o("WAWebWidFactory").createWid(e.businessOwnerJid);
        }
        return {
            catalogWid: t,
            id: e.productId || "",
            url: e.url,
            name: e.title,
            description: e.description,
            imageCdnUrl: e.mediaData.renderableUrl,
            reviewStatus: "",
            currency: e.currencyCode,
            priceAmount1000: e.priceAmount1000,
            salePriceAmount1000: e.salePriceAmount1000,
            retailerId: e.retailerId,
            productMsgMediaData: e.mediaData,
            imageCount: e.productImageCount != null && e.productImageCount !== 0 ? e.productImageCount : 1,
            fetchedFromServer: false,
            t: e.t,
            isHidden: false
        };
    }
    function w(e, t) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(b, "datasource_start");
        const n = r("WAWebBizCatalogProductVisibilitySetJob")(e, t);
        n.then(()=>{
            o("WAWebQplFlowWrapper").QPL.markerPoint(b, "datasource_end");
        }).catch(r("WAWebNoop"));
        return o("WAWebBackendErrors").attachErrorLogger(n, "Product visibility change failed");
    }
    function A(compliance_info) {
        const t = {
            countryCodeOrigin: compliance_info.country_code_origin
        };
        if (compliance_info.importer_name != null && compliance_info.importer_name !== "") {
            t.importerName = compliance_info.importer_name;
        }
        if (compliance_info.importer_address) {
            t.importerAddress = F(compliance_info.importer_address);
        }
        return t;
    }
    function F(importer_address) {
        const t = {
            street1: importer_address.street1,
            city: importer_address.city,
            countryCode: importer_address.country_code
        };
        if (importer_address.street2 != null && importer_address.street2 !== "") {
            t.street2 = importer_address.street2;
        }
        if (importer_address.postal_code != null && importer_address.postal_code !== "") {
            t.postalCode = importer_address.postal_code;
        }
        if (importer_address.region != null && importer_address.region !== "null") {
            t.region = importer_address.region;
        }
        if (importer_address.country_code) {
            t.countryCode = importer_address.country_code;
        }
        return t;
    }
    l.queryProduct = v;
    l.queryCatalog = S;
    l.queryProductList = R;
    l.queryCatalogHasCategories = L;
    l.reportProduct = E;
    l.appealProduct = k;
    l.createCatalog = I;
    l.addProduct = T;
    l.editProduct = D;
    l.deleteProducts = x;
    l.parseDateValue = P;
    l.mapProductResponseToModel = N;
    l.mapMsgToProductModel = M;
    l.productVisibilitySet = w;
}, 98);