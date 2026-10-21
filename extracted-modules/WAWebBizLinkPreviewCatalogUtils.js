__d("WAWebBizLinkPreviewCatalogUtils", [
    "WAWebCatalogCollection",
    "WAWebContactCollection",
    "WAWebContactSyncLogger",
    "WAWebCurrencyUtils",
    "WAWebFrontendContactGetters",
    "WAWebGetOrQueryUsyncInfoContactAction",
    "WAWebLinkPreviewUtils",
    "WAWebMediaDataUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "fbs"
], function(t, n, r, o, a, i, l) {
    const e = 100;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            let i;
            if (!r("WAWebWid").isWid(n)) {
                return null;
            }
            const c = o("WAWebWidFactory").createWid(n);
            let d;
            try {
                d = yield o("WAWebCatalogCollection").CatalogCollection.find(c);
            } catch (e) {
                return null;
            }
            const m = a != null ? d.productCollection.get(a) : d.productCollection.getProductModels().find((e)=>e.reviewStatus === "APPROVED" && !e.isHidden);
            if (m == null || m.reviewStatus !== "APPROVED" || m.isHidden) {
                return null;
            }
            const p = m.getPreviewImage();
            let _;
            if (p) {
                const f = [
                    {
                        width: e,
                        height: e,
                        imageFormat: "image/jpeg",
                        imageFormatOptions: 0.75
                    }
                ];
                const g = yield o("WAWebMediaDataUtils").getResizedThumbData(p.mediaUrl, f);
                _ = g[0];
            }
            let h;
            if ((i = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null && i.equals(c)) {
                const y = o("WAWebContactCollection").ContactCollection.get(c);
                if (y == null) {
                    return null;
                }
                h = o("WAWebFrontendContactGetters").getDisplayName(y);
            } else {
                const b = yield o("WAWebGetOrQueryUsyncInfoContactAction").getOrQueryUsyncInfo({
                    wid: c,
                    requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.BUSINESS_CONTACT_CHAT
                });
                h = b.bizInfo?.verifiedName.name;
            }
            let v;
            let S;
            if (a != null) {
                v = r("fbs")._("{productName} from {catalogOwnerName} on WhatsApp.", [
                    r("fbs")._param("productName", m.name),
                    r("fbs")._param("catalogOwnerName", h)
                ]).toString();
                if (m.description != null && m.priceAmount1000 != null && m.currency != null) {
                    S = `${m.description} · ${o("WAWebCurrencyUtils").formatAmount1000({
                        amount: m.priceAmount1000,
                        currency: m.currency
                    })}`;
                } else if (m.description != null) {
                    S = m.description;
                } else if (m.priceAmount1000 != null && m.currency != null) {
                    S = o("WAWebCurrencyUtils").formatAmount1000({
                        amount: m.priceAmount1000,
                        currency: m.currency
                    });
                }
            } else {
                v = r("fbs")._("View {catalogOwnerName}'s catalogue on WhatsApp", [
                    r("fbs")._param("catalogOwnerName", h)
                ]).toString();
                S = r("fbs")._("Learn more about their products & services").toString();
            }
            const R = o("WAWebLinkPreviewUtils").genLinkPreview({
                url: t,
                linkDetails: {
                    title: v,
                    description: S,
                    richPreviewType: o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE,
                    doNotPlayInline: true,
                    isLoading: false
                },
                linkThumbnail: {
                    thumbnail: _?.dataUrl,
                    thumbnailHeight: _?.height,
                    thumbnailWidth: _?.width
                }
            });
            return R;
        });
        return u.apply(this, arguments);
    }
    l.getProductOrCatalogLinkPreview = s;
}, 226);