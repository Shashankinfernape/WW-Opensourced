__d("WAWebBizAiPaymentRequestWamLogger", [
    "Promise",
    "WALogger",
    "WAWebMsgGetters",
    "WAWebPaymentRequestWamLogger",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = "payment_request";
    function m(e, t) {
        return k(e, e) && I(t);
    }
    function p(e, t) {
        return _(e) && I(t);
    }
    function _(e) {
        return k(e, e.unsafe());
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield (c || (c = n("Promise"))).all(e.map((e)=>y(e).catch((e)=>{
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAM:BIZ_AI_PAYMENT_REQUEST] receive log err"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-payment-request-receive-log-failed");
                })));
        });
        return g.apply(this, arguments);
    }
    function h(t) {
        b(t).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAM:BIZ_AI_PAYMENT_REQUEST] pix copy log err"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-payment-request-pix-copy-log-failed");
        });
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = e.templateId != null;
            const r = yield S(e);
            const { buyerFunnelId: a, psFunnelId: i } = r;
            const l = L(e, n);
            new (o("WAWebStructuredMessageReceiveWamEvent")).StructuredMessageReceiveWamEvent({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: E(n),
                businessOwnerJid: o("WAWebPaymentRequestWamLogger").getBusinessOwnerJid(e),
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, l, {
                    order_funnel_id: i
                })),
                templateId: e.templateId ?? void 0
            }).commit();
            new (o("WAWebStructuredMessageBuyerReceiveWamEvent")).StructuredMessageBuyerReceiveWamEvent({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: E(n),
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, l, {
                    order_funnel_id: a
                }))
            }).commit();
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const r = e.templateId != null;
            const a = yield S(e);
            const { buyerFunnelId: i, psFunnelId: l } = a;
            const s = babelHelpers.extends({}, L(e, r), {
                payment_method_choice: o("WAWebPaymentRequestWamLogger").PIX_NORMALIZED,
                currency: o("WAWebPaymentRequestWamLogger").LOGGING_CURRENCY
            });
            new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: E(r),
                messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE,
                businessOwnerJid: e.senderObj?.id?.user,
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, s, {
                    order_funnel_id: l
                })),
                templateId: e.templateId ?? void 0
            }).commit();
            new (o("WAWebStructuredMessageBuyerInteractionWamEvent")).StructuredMessageBuyerInteractionWamEvent({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: E(r),
                messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE,
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, s, {
                    order_funnel_id: i
                }))
            }).commit();
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            try {
                t = yield o("WAWebPaymentRequestWamLogger").genFunnelId(o("WAWebPaymentRequestWamLogger").RECEIVER_EVENT_LOG_KEY, e.id.id + e.to.toJid());
                if (t === "") {
                    return {
                        buyerFunnelId: void 0,
                        psFunnelId: void 0
                    };
                }
                const n = yield o("WAWebPaymentRequestWamLogger").genFunnelId(t, o("WAWebPaymentRequestWamLogger").BUYER_HMAC_DATA);
                return {
                    buyerFunnelId: n === "" ? void 0 : n,
                    psFunnelId: t
                };
            } catch (e) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM:BIZ_AI_PAYMENT_REQUEST] funnel id err"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-payment-request-funnel-id-failed");
                return {
                    buyerFunnelId: void 0,
                    psFunnelId: t
                };
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return {
            p2m_flow: d,
            is_biz_ai_checkout: true,
            accepted_payment_method: JSON.stringify(o("WAWebPaymentRequestWamLogger").getPaymentMethodsFromMsg(e)),
            chat_type: o("WAWebPaymentRequestWamLogger").getChatTypeFromMsg(e),
            is_template: t
        };
    }
    function E(e) {
        if (e) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE;
        }
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function k(e, t) {
        return o("WAWebPaymentRequestWamLogger").getPaymentMethodsFromMsg(e).includes(o("WAWebPaymentRequestWamLogger").PIX_NORMALIZED) && o("WAWebMsgGetters").getIsBizBot1pResponse(t);
    }
    function I(e) {
        return e?.isApi !== true && e?.isSmb === true;
    }
    l.isBizAiPixPaymentRequest = m;
    l.isBizAiPixPaymentRequestMsg = p;
    l.hasBizAiPixPaymentRequestMarkers = _;
    l.logBizAiPaymentRequestReceivedWAMEvent = f;
    l.logBizAiPaymentRequestPixCopyWAMEvent = h;
}, 98);