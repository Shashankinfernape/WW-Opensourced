__d("WAWebProductGetters", [
    "WAWebGetters",
    "WAWebGettersCaches"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createProductCache
    });
    const { clearCacheFor, field } = e;
    const c = clearCacheFor;
    const d = field("additionalImageCdnUrl");
    const m = field("availability");
    const p = field("canAppeal");
    const _ = field("catalogWid");
    const f = field("complianceInfo");
    const g = field("currency");
    const h = field("description");
    const y = field("fetchedFromServer");
    const C = field("id");
    const b = field("imageCdnUrl");
    const v = field("imageHash");
    const S = field("isHidden");
    const R = field("isSanctioned");
    const L = field("maxAvailable");
    const E = field("name");
    const k = field("priceAmount1000");
    const I = field("productImageCollection");
    const T = field("productMsgMediaData");
    const D = field("retailerId");
    const x = field("reviewStatus");
    const $ = field("salePriceAmount1000");
    const P = field("salePriceEndDate");
    const N = field("salePriceStartDate");
    const M = field("signedShimmedUrl");
    const w = field("url");
    const A = field("variantInfo");
    const F = field("videos");
    l.clearProductGetterCacheFor = c;
    l.getAdditionalImageCdnUrl = d;
    l.getAvailability = m;
    l.getCanAppeal = p;
    l.getCatalogWid = _;
    l.getComplianceInfo = f;
    l.getCurrency = g;
    l.getDescription = h;
    l.getFetchedFromServer = y;
    l.getId = C;
    l.getImageCdnUrl = b;
    l.getImageHash = v;
    l.getIsHidden = S;
    l.getIsSanctioned = R;
    l.getMaxAvailable = L;
    l.getName = E;
    l.getPriceAmount1000 = k;
    l.getProductImageCollection = I;
    l.getProductMsgMediaData = T;
    l.getRetailerId = D;
    l.getReviewStatus = x;
    l.getSalePriceAmount1000 = $;
    l.getSalePriceEndDate = P;
    l.getSalePriceStartDate = N;
    l.getSignedShimmedUrl = M;
    l.getUrl = w;
    l.getVariantInfo = A;
    l.getVideos = F;
}, 98);