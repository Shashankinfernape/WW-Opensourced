__d("WAWebBizProductCatalogAction", [
    "WAWebBizCreateProductInquiry",
    "WAWebBizProductCatalogBridge",
    "WAWebBusinessProfileCollection",
    "WAWebCatalogCollection",
    "WAWebCatalogVariantHelper",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
    "WAWebFrontendConstants",
    "WAWebMsgCollection",
    "WAWebMsgModelUtils",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n, r, o, a) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = 100, r = 100, a, i) {
            let s;
            let u;
            let c;
            const d = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(e);
            const m = o("WAWebCatalogCollection").CatalogCollection.get(e)?.productCollection.get(t);
            if (o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(d, m)) {
                s = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS;
                u = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE;
                c = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE;
            }
            return o("WAWebBizProductCatalogBridge").queryProduct(e, t, n, r, a, i, s, u, c);
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n = 5, r = 100, a = 100, i, l = false, s, u, c) {
        return o("WAWebBizProductCatalogBridge").queryCatalog(e, t, n, r, a, i, l, s, u, c);
    }
    function c(e, t, n = 100, r = 100, a) {
        return o("WAWebBizProductCatalogBridge").queryProductList(e, t, n, r, a);
    }
    function d(e, t) {
        return o("WAWebBizProductCatalogBridge").appealProduct(e, t);
    }
    function m(e, t, n) {
        return o("WAWebBizProductCatalogBridge").reportProduct(e, t, n);
    }
    function p({ height = 100, product, width = 100 }) {
        return o("WAWebBizProductCatalogBridge").addProduct({
            height,
            product,
            width
        });
    }
    function _({ height = 100, product, width = 100 }) {
        return o("WAWebBizProductCatalogBridge").editProduct(product, width, height);
    }
    function f(e) {
        return o("WAWebBizProductCatalogBridge").deleteProducts(e);
    }
    function g(e, t, r) {
        const e_catalogWid = e.catalogWid;
        if (t) {
            const i = t.productCollection.get(e.id);
            const l = i ? o("WAWebStateUtils").unproxy(i) : o("WAWebStateUtils").unproxy(e);
            if (l) {
                const s = l.getProductImageCollectionHead();
                const mediaData = s?.mediaData;
                if (mediaData) {
                    o("WAWebFindChatAction").findOrCreateLatestChat(e_catalogWid, "bizProductCatalogAction").then((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat }) {
                            yield o("WAWebCmd").Cmd.openChatFromUnread({
                                chat,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizProduct
                            }).then((e)=>{
                                if (e) {
                                    const n = o("WAWebStateUtils").unproxy(o("WAWebBizCreateProductInquiry").createProductInquiry({
                                        catalogWid: e_catalogWid,
                                        chatId: chat.id,
                                        mediaData,
                                        product: l,
                                        sessionId: r == null ? undefined : r.session.toString()
                                    }));
                                    o("WAWebMsgCollection").MsgCollection.add(n);
                                    chat.composeQuotedMsg = o("WAWebMsgModelUtils").createMsgSnapshot(n);
                                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
                                    if (window.innerWidth <= o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH) {
                                        o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                                    }
                                }
                            });
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                }
            }
        }
    }
    l.queryProduct = e;
    l.queryCatalog = u;
    l.queryProductList = c;
    l.appealProduct = d;
    l.reportProduct = m;
    l.addProduct = p;
    l.editProduct = _;
    l.deleteProducts = f;
    l.sendProductToChat = g;
}, 98);