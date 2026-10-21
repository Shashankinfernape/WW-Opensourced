__d("WAWebProductCatalogLogEvents", [
    "WAWebBizCatalogUtils",
    "WAWebBizCatalogViewWamEvent",
    "WAWebCatalogBizWamEvent",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogEventUtils",
    "WAWebProductCatalogSession",
    "WAWebSelfCatalogOwnership",
    "WAWebWamEnumCatalogBizAction",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumCatalogViewAction",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    function e({ catalogContext, catalogOwnerWid }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({}, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext), {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerWid
            }),
            catalogOwnerJid: catalogOwnerWid.toJid()
        }));
    }
    function s({ catalogContext, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_CARD_ITEM_CLICK
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext), {
            catalogOwnerJid: product.catalogWid.toJid()
        }));
    }
    function u({ catalogContext, catalogOwnerWid }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerWid
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_CARD_MORE_CLICK,
            catalogOwnerJid: catalogOwnerWid.toJid()
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function c({ cartToggle, catalogContext, catalogOwnerWid }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerWid
            }),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_LIST_IMPRESSION,
            catalogOwnerJid: catalogOwnerWid.toJid(),
            cartToggle
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function d({ catalogContext, catalogOwnerWid }) {
        const r = o("WAWebProductCatalogEventUtils").isCatalogOwner({
            catalogOwnerWid
        });
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: r,
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_LINK_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_LINK_CLICK,
            catalogOwnerJid: catalogOwnerWid.toJid()
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function m({ catalogContext, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            catalogOwnerJid: product.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            })
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function p({ catalogContext, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_DETAIL_IMAGE_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_DETAIL_IMAGE_CLICK,
            catalogOwnerJid: product.catalogWid.toJid(),
            productId: product.id.toString()
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function _({ catalogContext, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            catalogOwnerJid: product.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_DETAIL_LINK_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_DETAIL_LINK_CLICK,
            productId: product.id.toString()
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function f({ catalogSessionId, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
            catalogOwnerJid: product.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogSessionId
        });
    }
    function g({ catalogSessionId, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
            catalogOwnerJid: product.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogSessionId
        });
    }
    function h({ catalogSessionId, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
            catalogOwnerJid: product.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogSessionId
        });
    }
    function y({ catalogSessionId, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
            catalogOwnerJid: product.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_FULL_IMAGE_SWIPE,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_FULL_IMAGE_SWIPE,
            catalogSessionId,
            productId: product.id.toString()
        });
    }
    function C({ cartToggle, catalogContext, collectionId, product }) {
        const i = o("WAWebBizCatalogUtils").getProductStatsInFetched(product.catalogWid.toString(), collectionId, product);
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            catalogOwnerJid: product.catalogWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_DETAIL_IMPRESSION,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_DETAIL_IMPRESSION,
            cartToggle
        }, i, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function b({ catalogSessionId, product, reason }) {
        new (o("WAWebBizCatalogViewWamEvent")).BizCatalogViewWamEvent({
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_REPORT_PRODUCT_SUCCESS,
            catalogSessionId,
            catalogOwnerJid: product.catalogWid.toJid(),
            catalogReportReasonCode: reason,
            productId: product.id.toString()
        }).commit();
    }
    function v({ catalogSessionId, product, reason }) {
        new (o("WAWebBizCatalogViewWamEvent")).BizCatalogViewWamEvent({
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_REPORT_PRODUCT_FAILURE,
            catalogOwnerJid: product.catalogWid.toJid(),
            catalogSessionId,
            catalogReportReasonCode: reason,
            productId: product.id.toString()
        }).commit();
    }
    function S({ catalogContext, product }) {
        const r = o("WAWebProductCatalogEventUtils").isCatalogOwner({
            product
        });
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: r,
            catalogOwnerJid: product.catalogWid.toJid(),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_QUOTED_PRODUCT_IN_CONVERSATION_CLICK
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function R({ catalogContext, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogOwnerJid: product.catalogWid.toJid(),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_IN_CONVERSATION_CLICK
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function L({ catalogContext, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_LINK_CLICK,
            catalogOwnerJid: product.catalogWid.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_LINK_CLICK,
            productId: product.id.toString()
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function E(e, t) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product: e
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_MESSAGE_BUSINESS_BUTTON_CLICK,
            catalogOwnerJid: e.catalogWid.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_MESSAGE_BUSINESS_BUTTON_CLICK,
            productId: e.id.toString()
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t)));
    }
    function k(e, t) {
        let a = false;
        let i = "";
        if (e.businessOwnerJid != null) {
            i = e.businessOwnerJid;
            a = o("WAWebSelfCatalogOwnership").isSelfCatalogOwnerJid(i);
        }
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
            isOwner: a,
            catalogOwnerJid: i,
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_QUOTED_PRODUCT_MESSAGE_SEND,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_QUOTED_PRODUCT_MESSAGE_SEND,
            productId: e?.productId?.toString(),
            catalogSessionId: r("isStringNullOrEmpty")(t) ? new (o("WAWebProductCatalogSession")).ProductCatalogSession().toString() : t
        });
    }
    function I({ catalogContext, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_COPY_LINK_CLICK,
            catalogOwnerJid: product.catalogWid.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_COPY_LINK_CLICK,
            productId: product.id.toString()
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function T({ catalogContext, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogOwnerJid: product.catalogWid.toJid(),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_VIA_WA_LINK_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_VIA_WA_LINK_CLICK,
            productId: product.id.toString()
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function D(e) {
        const t = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_CATALOG_IN_CONVERSATION_CLICK,
            catalogEntryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_ATTACHMENT_PANEL,
            catalogSessionId: e
        });
        t.commit();
    }
    function x({ catalogSessionId, product }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                product
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SEND_PRODUCT_MESSAGE,
            catalogOwnerJid: product.catalogWid.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_SEND_PRODUCT_MESSAGE,
            catalogSessionId,
            productId: product.id.toString()
        });
    }
    function $({ catalogSessionId }) {
        const n = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SEND_CATALOG_CLICK,
            catalogSessionId
        });
        n.commit();
    }
    function P({ catalogContext, catalogOwnerWid }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerWid
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_COPY_LINK_CLICK,
            catalogOwnerJid: catalogOwnerWid.toJid(),
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_COPY_LINK_CLICK
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function N({ catalogContext, catalogOwnerWid }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            catalogOwnerJid: catalogOwnerWid.toJid(),
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerWid
            }),
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_VIA_WA_LINK_CLICK,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_VIA_WA_LINK_CLICK
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext)));
    }
    function M(e, has_catalog) {
        const n = {
            has_catalog
        };
        const r = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_ADD_CLICKED,
            catalogSessionId: e.session.toString(),
            catalogEntryPoint: e.entryPoint,
            extraAttributes: JSON.stringify(n)
        });
        r.commit();
    }
    function w(e) {
        const t = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_ADD_SUCCESS,
            catalogEntryPoint: e.entryPoint,
            catalogSessionId: e.session.toString()
        });
        t.commit();
    }
    function A(e, t) {
        const n = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_ADD_FAILED,
            catalogEntryPoint: e.entryPoint,
            catalogSessionId: e.session.toString(),
            errorCode: t
        });
        n.commit();
    }
    function F(e, t) {
        const n = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_EDIT_CLICKED,
            productId: e.id.toString(),
            catalogEntryPoint: t.entryPoint,
            catalogSessionId: t.session.toString()
        });
        n.commit();
    }
    function O(e, t) {
        const n = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_EDIT_SUCCESS,
            catalogEntryPoint: t.entryPoint,
            productId: e.id.toString(),
            catalogSessionId: t.session.toString()
        });
        n.commit();
    }
    function B(e, t, n) {
        const r = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_EDIT_FAILED,
            catalogEntryPoint: t.entryPoint,
            productId: e.id.toString(),
            errorCode: n,
            catalogSessionId: t.session.toString()
        });
        r.commit();
    }
    function W({ context, product, productCount }) {
        const a = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_DELETE_CLICKED,
            catalogEntryPoint: context.entryPoint,
            productId: product.id.toString(),
            productCount,
            catalogSessionId: context.session.toString()
        });
        a.commit();
    }
    function q(e, productCount, n) {
        const r = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_DELETE_SUCCESS,
            catalogEntryPoint: n.entryPoint,
            productId: e.id.toString(),
            productCount,
            catalogSessionId: n.session.toString()
        });
        r.commit();
    }
    function U({ context, errorCode, product, productCount }) {
        const i = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_DELETE_FAILED,
            catalogEntryPoint: context.entryPoint,
            productId: product.id.toString(),
            productCount,
            errorCode,
            catalogSessionId: context.session.toString()
        });
        i.commit();
    }
    function V(e) {
        const t = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_ONBOARD_IMPRESSION,
            catalogEntryPoint: e.entryPoint,
            catalogSessionId: e.session.toString()
        });
        t.commit();
    }
    function H(e) {
        const t = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_CREATE_PRODUCT_CATALOG,
            catalogEntryPoint: e.entryPoint,
            catalogSessionId: e.session.toString()
        });
        t.commit();
    }
    function G(e) {
        const t = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_CREATE_PRODUCT_CATALOG_SUCCESS,
            catalogEntryPoint: e.entryPoint,
            catalogSessionId: e.session.toString()
        });
        t.commit();
    }
    function z(e, t) {
        const n = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_CREATE_PRODUCT_CATALOG_FAILED,
            catalogEntryPoint: e.entryPoint,
            errorCode: t,
            catalogSessionId: e.session.toString()
        });
        n.commit();
    }
    function j(e) {
        const t = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_APPEAL_PRODUCT_CLICKED,
            catalogEntryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
            catalogSessionId: e
        });
        t.commit();
    }
    function K(e) {
        const t = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_APPEAL_PRODUCT_SUCCESS,
            catalogEntryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
            catalogSessionId: e
        });
        t.commit();
    }
    function Q(e, t) {
        const n = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_APPEAL_PRODUCT_FAILED,
            catalogEntryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
            errorCode: t,
            catalogSessionId: e
        });
        n.commit();
    }
    function X(e, t) {
        const n = new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_MENU_CLICK,
            catalogEntryPoint: t?.entryPoint,
            catalogSessionId: t == null ? undefined : t.session.toString(),
            productId: e
        });
        n.commit();
    }
    function Y(catalogBizAction, t, n) {
        new (o("WAWebCatalogBizWamEvent")).CatalogBizWamEvent({
            catalogBizAction,
            catalogEntryPoint: n.entryPoint,
            catalogSessionId: n.session.toString(),
            productId: t
        }).commit();
    }
    function J(e, t) {
        Y(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_HIDE_CLICKED, e, t);
    }
    function Z(e, t) {
        Y(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_HIDE_SUCCESS, e, t);
    }
    function ee(e, t) {
        Y(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_HIDE_CANCELLED, e, t);
    }
    function te(e, t) {
        Y(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_HIDE_FAILED, e, t);
    }
    function ne(e, t) {
        Y(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_UNHIDE_CLICKED, e, t);
    }
    function re(e, t) {
        Y(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_UNHIDE_SUCCESS, e, t);
    }
    function oe(e, t) {
        Y(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_UNHIDE_CANCELLED, e, t);
    }
    function ae(e, t) {
        Y(o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_PRODUCT_UNHIDE_FAILED, e, t);
    }
    l.logBusinessProfileCatalogView = e;
    l.logProfileProductClick = s;
    l.logCarouselViewMoreClick = u;
    l.logCatalogListView = c;
    l.logCatalogShareLinkClick = d;
    l.logCatalogListDetailClick = m;
    l.logDetailImageClick = p;
    l.logDetailLinkClick = _;
    l.logImageCarouselModalView = f;
    l.logImageListClick = g;
    l.logFullImageView = h;
    l.logImageNavigate = y;
    l.logProductDetailView = C;
    l.logReportProductSuccess = b;
    l.logReportProductFailure = v;
    l.logProductInquiryClick = S;
    l.logProductMsgClick = R;
    l.logProductShareLinkClick = L;
    l.logProductMessageBusinessClick = E;
    l.logProductMessageBusinessSend = k;
    l.logShareProductCopyLinkClick = I;
    l.logShareProductViaWALinkClick = T;
    l.logCatalogAttachmentButtonClick = D;
    l.logProductMessageSent = x;
    l.logSendCatalogClick = $;
    l.logShareCatalogCopyLinkClick = P;
    l.logShareCatalogViaWALinkClick = N;
    l.logAddProductClick = M;
    l.logAddProductSuccess = w;
    l.logAddProductFailed = A;
    l.logEditProductClick = F;
    l.logEditProductSuccess = O;
    l.logEditProductFailed = B;
    l.logDeleteProductClick = W;
    l.logDeleteProductSuccess = q;
    l.logDeleteProductFailed = U;
    l.logCatalogOnboardImpression = V;
    l.logCreateProductCatalogClick = H;
    l.logCreateProductCatalogSuccess = G;
    l.logCreateProductCatalogFailed = z;
    l.logAppealProductCatalogClick = j;
    l.logAppealProductCatalogSuccess = K;
    l.logAppealProductCatalogFailed = Q;
    l.logCatalogContextMenuClick = X;
    l.logCatalogProductHideClick = J;
    l.logCatalogProductHideSuccess = Z;
    l.logCatalogProductHideCancelled = ee;
    l.logCatalogProductHideFailed = te;
    l.logCatalogProductShowClick = ne;
    l.logCatalogProductShowSuccess = re;
    l.logCatalogProductShowCancelled = oe;
    l.logCatalogProductShowFailed = ae;
}, 98);