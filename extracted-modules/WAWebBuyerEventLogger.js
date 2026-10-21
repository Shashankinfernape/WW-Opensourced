__d("WAWebBuyerEventLogger", [
    "WAWebBuyerEventAttributes",
    "WAWebP2XFunnelIdGenerator",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "buyer_order_fs_log";
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ attributes, bizPlatform, interaction, isLoggingEnabled, psFunnelId }) {
            if (isLoggingEnabled) {
                const s = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(psFunnelId, e);
                const u = yield s.genFunnelInfo();
                const c = u.funnel_id;
                const d = o("WAWebBuyerEventAttributes").buyerEventAttributesToObject(attributes);
                d.order_funnel_id = c;
                const m = new (o("WAWebStructuredMessageBuyerInteractionWamEvent")).StructuredMessageBuyerInteractionWamEvent({
                    bizPlatform,
                    messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                    messageClassAttributes: JSON.stringify(d),
                    messageInteraction: interaction,
                    messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
                });
                m.commit();
            }
        });
        return u.apply(this, arguments);
    }
    l.submitBuyerInteractionEvent = s;
}, 98);