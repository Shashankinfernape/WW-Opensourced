__d("WAWebOrderLogEvents", [
    "WAWebProductCatalogContext",
    "WAWebProductCatalogEventUtils",
    "WAWebWamEnumCatalogBizAction",
    "WAWebWamEnumCatalogViewAction"
], function(t, n, r, o, a, i, l) {
    function e({ catalogContext, catalogOwnerJid }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_ORDER_MESSAGE_CLICK
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext), {
            catalogOwnerJid,
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerJid
            })
        }));
    }
    function s({ catalogContext, catalogOwnerJid, orderId, productCount }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            bizActionConfig: {
                orderId,
                productCount
            },
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_ORDER_LIST_IMPRESSION,
            catalogOwnerJid,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_ORDER_LIST_IMPRESSION
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext), {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerJid
            })
        }));
    }
    function u({ catalogContext, catalogOwnerJid, orderId }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            bizActionConfig: {
                orderId
            },
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_ORDER_LIST_ITEM_CLICK,
            catalogOwnerJid,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_ORDER_LIST_ITEM_CLICK
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext), {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerJid
            })
        }));
    }
    function c({ catalogContext, catalogOwnerJid, isOrderMsgAttached, orderId, quantity }) {
        o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers.extends({
            bizActionConfig: {
                orderId,
                quantity
            },
            catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_SEND_ORDER_MESSAGE,
            catalogOwnerJid,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION.ACTION_SEND_ORDER_MESSAGE
        }, o("WAWebProductCatalogContext").toDataForCatalogViewEvents(catalogContext), {
            isOrderMsgAttached,
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerJid
            })
        }));
    }
    l.logOrderMessageClick = e;
    l.logOrderListImpression = s;
    l.logOrderListItemClick = u;
    l.logSendOrderMessage = c;
}, 98);