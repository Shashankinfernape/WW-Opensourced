__d("WAWebConsumerQuickPromotionActionGraphQL", [
    "WAWebConsumerQuickPromotionActionGraphQLMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = yield o("WAWebRelayClient").commitMutation(e !== void 0 ? e : e = n("WAWebConsumerQuickPromotionActionGraphQLMutation.graphql"), {
                input: t
            }, {
                environmentType: "whatsapp_web"
            });
            return r?.wa_consumer_quick_promotion_log_event != null;
        });
        return u.apply(this, arguments);
    }
    l.executeConsumerQuickPromotionActionGraphQL = s;
}, 98);