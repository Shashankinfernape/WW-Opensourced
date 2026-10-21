__d("WAWebExecApiCmdHelpers", [
    "Promise",
    "WAWebContactUtils",
    "WAWebCreateFile",
    "WAWebDeepLinkOpenWamEvent",
    "WAWebDrawerManager",
    "WAWebExternalCtxAuthoriseWAChat",
    "WAWebExternalCtxConfig",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebOpenChatFlow.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebUim",
    "WAWebUpdateUtmAction",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumDeepLinkOpenFrom",
    "WAWebWamEnumDefaultProtocolResultType",
    "WAWebWidFactory",
    "WAWebWindowsDefaultProtocolActivationWamEvent",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(e, t) {
        if (e === true) {
            new (o("WAWebWindowsDefaultProtocolActivationWamEvent")).WindowsDefaultProtocolActivationWamEvent({
                defaultProtocolResult: t ? o("WAWebWamEnumDefaultProtocolResultType").DEFAULT_PROTOCOL_RESULT_TYPE.NAVIGATION_SUCCESS : o("WAWebWamEnumDefaultProtocolResultType").DEFAULT_PROTOCOL_RESULT_TYPE.NAVIGATION_FAILURE
            }).commit();
        }
    }
    function d(catalogOwnerJid, t) {
        const n = function({ chat }) {
            self.setTimeout(function() {
                o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView("Deeplink");
                if (t) {
                    o("WAWebUpdateUtmAction").addUtmToChat(chat.id, t);
                }
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                    chat,
                    catalogOwnerJid
                }), {
                    transition: "slide-left",
                    uim: o("WAWebUim").UIM.Manager.getTop(),
                    newDrawerContext: o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession, o("WAWebContactUtils").getMaybeBizPlatformForLogging(catalogOwnerJid), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_DEEPLINK)
                });
            }, 100);
        };
        const Component = o("WAWebOpenChatFlow.react").OpenChatFlow;
        o("WAWebModalManager").ModalManager.open(<Component target={{
            wid: o("WAWebWidFactory").createWid(catalogOwnerJid)
        }} onSuccess={n} msgText={null}/>, {
            transition: "modal-flow"
        });
    }
    function m(businessOwnerJid, productId, n) {
        const r = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession, o("WAWebContactUtils").getMaybeBizPlatformForLogging(businessOwnerJid), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_DEEPLINK);
        const a = function({ chat }) {
            self.setTimeout(function() {
                o("WAWebUtilsLogQplEvents").qplStartProductView("Deeplink");
                if (n) {
                    o("WAWebUpdateUtmAction").addUtmToChat(chat.id, n);
                }
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                    chat,
                    productInfo: {
                        productId,
                        businessOwnerJid
                    },
                    refreshCarousel: true
                }), {
                    transition: "slide-left",
                    uim: o("WAWebUim").UIM.Manager.getTop(),
                    newDrawerContext: r
                });
            }, 100);
        };
        const Component = o("WAWebOpenChatFlow.react").OpenChatFlow;
        o("WAWebModalManager").ModalManager.open(<Component target={{
            wid: o("WAWebWidFactory").createWid(businessOwnerJid)
        }} onSuccess={a} msgText={null}/>, {
            transition: "modal-flow"
        });
    }
    function p({ customUrl, invalidUsernameKey, phone, url, username, usernameKey }) {
        if (phone != null) {
            return {
                wid: o("WAWebWidFactory").createWid(phone)
            };
        }
        if (customUrl != null) {
            if (username != null) {
                return {
                    customUrl,
                    fallbackUrl: url,
                    username,
                    usernameKey,
                    invalidUsernameKey
                };
            }
            return {
                customUrl,
                fallbackUrl: url
            };
        }
        if (usernameKey != null) {
            return {
                username: r("nullthrows")(username),
                usernameKey
            };
        }
        return {
            username: r("nullthrows")(username),
            invalidUsernameKey
        };
    }
    function _({ campaign, deepLinkSessionId, deepLinkType, isExternal }) {
        const deepLinkOpenFrom = isExternal ? o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM.DEEP_LINK_EXTERNAL : o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM.DEEP_LINK_WA_LINK_CLICK;
        new (o("WAWebDeepLinkOpenWamEvent")).DeepLinkOpenWamEvent({
            deepLinkOpenFrom,
            deepLinkType,
            deepLinkSessionId,
            campaign: campaign ?? undefined
        }).commit();
    }
    function f({ chatId, deepLinkType, isExternal, partnerToken }) {
        if (o("WAWebExternalCtxConfig").isCtxLoggingEnabled()) {
            r("WAWebExternalCtxAuthoriseWAChat")({
                chatId,
                deepLinkType,
                isExternal,
                partnerToken
            }).finally(r("WAWebNoop"));
        }
    }
    function g(e, t) {
        const n = e.headers.get("content-disposition");
        if (n != null) {
            const r = /filename[^;=\n]*=(([\'\"]).*?\2|[^;\n]*)/;
            const o = r.exec(n);
            if (o != null && o[1]) {
                return o[1].replace(/\"/g, "");
            }
        }
        return t;
    }
    function h(t) {
        return (e || (e = n("Promise"))).all(t.map((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield window.fetch(e);
                const r = yield n.blob();
                const a = n.headers.get("Content-Type") || r.type;
                const i = g(n, `${t.toString()}.${a}`);
                return o("WAWebCreateFile").createFile([
                    r
                ], i, {
                    type: a
                });
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })()));
    }
    l.logDefaultProtocolNavigation = c;
    l.openChatAndCatalog = d;
    l.openChatAndProduct = m;
    l.getOpenChatFlowProps = p;
    l.submitDeepLinkOpenWamEvent = _;
    l.externalCtxAuthoriseWAChatIfEnabled = f;
    l.downloadAttachments = h;
}, 98);