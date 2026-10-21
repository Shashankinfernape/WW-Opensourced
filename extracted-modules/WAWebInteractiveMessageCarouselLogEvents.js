__d("WAWebInteractiveMessageCarouselLogEvents", [
    "WALogger",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMsgCollection",
    "WAWebPaidMessagingUserInteractionsLoggerWamEvent",
    "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
    "WAWebWamEnumPaidMessagingUserInteractionsActionType",
    "WAWebWamEnumPaidMessagingUserInteractionsComponentType",
    "WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType",
    "WAWebWamEnumPaidMessagingUserInteractionsMarketingFormat"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t) {
        if (v(e, t)) {
            new (o("WAWebPaidMessagingUserInteractionsLoggerWamEvent")).PaidMessagingUserInteractionsLoggerWamEvent(babelHelpers.extends({}, h(e, {
                duration_ms: t
            }), {
                pmxActionType: o("WAWebWamEnumPaidMessagingUserInteractionsActionType").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.VIEW,
                pmxComponentType: o("WAWebWamEnumPaidMessagingUserInteractionsComponentType").PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.NONE
            })).commit();
        }
    }
    function p(e, t) {
        if (v(e, t)) {
            const n = y(e, {
                duration_ms: t
            });
            if (n != null) {
                new (o("WAWebPaidMessagingUserInteractionsLoggerWamEvent")).PaidMessagingUserInteractionsLoggerWamEvent(babelHelpers.extends({}, n, {
                    pmxActionType: o("WAWebWamEnumPaidMessagingUserInteractionsActionType").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.VIEW,
                    pmxComponentType: o("WAWebWamEnumPaidMessagingUserInteractionsComponentType").PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.NONE
                })).commit();
            }
        }
    }
    function _(e) {
        new (o("WAWebPaidMessagingUserInteractionsLoggerWamEvent")).PaidMessagingUserInteractionsLoggerWamEvent(babelHelpers.extends({
            pmxComponentType: o("WAWebWamEnumPaidMessagingUserInteractionsComponentType").PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.HEADER,
            pmxActionTarget: o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.THUMBNAIL,
            pmxActionType: o("WAWebWamEnumPaidMessagingUserInteractionsActionType").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.CLICK
        }, y(e))).commit();
    }
    function f(e) {
        new (o("WAWebPaidMessagingUserInteractionsLoggerWamEvent")).PaidMessagingUserInteractionsLoggerWamEvent(babelHelpers.extends({
            pmxComponentType: o("WAWebWamEnumPaidMessagingUserInteractionsComponentType").PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.HEADER,
            pmxActionTarget: o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.HEADER,
            pmxActionType: o("WAWebWamEnumPaidMessagingUserInteractionsActionType").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.CLICK
        }, y(e))).commit();
    }
    function g(e, pmxActionTarget, button_index) {
        new (o("WAWebPaidMessagingUserInteractionsLoggerWamEvent")).PaidMessagingUserInteractionsLoggerWamEvent(babelHelpers.extends({
            pmxComponentType: o("WAWebWamEnumPaidMessagingUserInteractionsComponentType").PAID_MESSAGING_USER_INTERACTIONS_COMPONENT_TYPE.BUTTON,
            pmxActionTarget,
            pmxActionType: o("WAWebWamEnumPaidMessagingUserInteractionsActionType").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TYPE.CLICK
        }, y(e, {
            button_index
        }))).commit();
    }
    function h(t, n) {
        const t_carouselCards = t.carouselCards;
        if (t_carouselCards == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[buildBasicLoggingArgsFromCarouselMsg] carouselCards null"
            ])));
            return null;
        }
        const i = t_carouselCards.head();
        if (i == null) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[buildBasicLoggingArgsFromCarouselMsg] head() empty"
            ])));
            return null;
        }
        const pmxHeaderMediaType = C(i);
        if (pmxHeaderMediaType == null) {
            return null;
        }
        return {
            pmxMarketingFormat: o("WAWebWamEnumPaidMessagingUserInteractionsMarketingFormat").PAID_MESSAGING_USER_INTERACTIONS_MARKETING_FORMAT.CAROUSEL,
            pmxHeaderMediaType,
            pmxQueryParams: JSON.stringify(babelHelpers.extends({}, n, {
                num_cards: t_carouselCards.length
            })),
            templateId: t.templateId ?? ""
        };
    }
    function y(e, t) {
        const e_parentMsgId = e.parentMsgId;
        if (e_parentMsgId == null) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[buildBasicLoggingArgsFromCarouselCard] parentMsgId null"
            ])));
            return null;
        }
        const r = o("WAWebMsgCollection").MsgCollection.get(e_parentMsgId.toString());
        if (r == null) {
            return null;
        }
        const r_carouselCards = r.carouselCards;
        if (r_carouselCards == null) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[buildBasicLoggingArgsFromCarouselCard] carouselCards null"
            ])));
            return null;
        }
        const i = r_carouselCards.slice();
        return h(r, babelHelpers.extends({}, t, {
            card_index: i.findIndex((t)=>t.id.toString() === e.id.toString())
        }));
    }
    function C(e) {
        const n = e.interactiveHeader?.mediaType;
        if (n == null) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[getHeaderFromCarouselCard] mediaType null"
            ])));
            return null;
        }
        switch(n){
            case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE:
                return o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType").PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE.IMAGE;
            case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO:
                return o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType").PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE.VIDEO;
            case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT:
                return o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType").PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE.DOCUMENT;
            case o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.PRODUCT:
                return o("WAWebWamEnumPaidMessagingUserInteractionsHeaderMediaType").PAID_MESSAGING_USER_INTERACTIONS_HEADER_MEDIA_TYPE.IMAGE;
        }
    }
    const b = {};
    function v(e, t) {
        const n = e.id.toString();
        if (b[n] != null && b[n] > t) {
            return false;
        }
        b[n] = t;
        return true;
    }
    l.logViewCarousel = m;
    l.logViewCarouselCard = p;
    l.logCarouselCardClickToDownload = _;
    l.logCarouselCardClickToView = f;
    l.logCarouselCardClickCTA = g;
}, 98);