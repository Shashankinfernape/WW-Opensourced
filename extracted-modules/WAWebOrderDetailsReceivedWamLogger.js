__d("WAWebOrderDetailsReceivedWamLogger", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBizOrderDetailsParams",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebP2XFunnelIdGenerator",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebUprPaymentRequest",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = [
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
    ];
    const c = "receiver_log_key";
    const d = "buyer_order_fs_log";
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield (s || (s = n("Promise"))).all(t.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    if (g(t) && o("WAWebUprPaymentRequest").parseUprPaymentInfo(t) == null) {
                        yield _(t).catch((t)=>{
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[WAM:ORDER_DETAILS] structured msg receive log err: ",
                                ""
                            ])), t).sendLogs("order-details-receive-log-err");
                        });
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = e.templateId != null;
            const r = e.nativeFlowName ?? "order_details";
            const a = h(e);
            const i = e.id.id + e.to.toJid();
            const l = y(e);
            const s = C(e);
            const u = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(c, i);
            const m = yield u.genFunnelInfo();
            const p = m.funnel_id;
            const _ = {
                cta: r,
                order_funnel_id: p,
                chat_type: a,
                is_template: n ? "1" : "0",
                p2m_offering_type: l,
                is_simplified_order: s
            };
            new (o("WAWebStructuredMessageReceiveWamEvent")).StructuredMessageReceiveWamEvent({
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
                businessOwnerJid: b(e),
                messageClassAttributes: JSON.stringify(_)
            }).commit();
            if (o("WAWebABProps").getABPropConfigValue("payments_br_p2m_buyer_logging_phase_2")) {
                const f = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(p, d);
                const g = yield f.genFunnelInfo();
                const v = g.funnel_id;
                new (o("WAWebStructuredMessageBuyerReceiveWamEvent")).StructuredMessageBuyerReceiveWamEvent({
                    messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                    messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
                    messageClassAttributes: JSON.stringify({
                        cta: r,
                        is_template: n ? "1" : "0",
                        chat_type: a,
                        order_funnel_id: v,
                        p2m_offering_type: l,
                        wa_pay_registered: false,
                        is_cta_available: false,
                        is_simplified_order: s
                    })
                }).commit();
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName != null && u.includes(e.nativeFlowName);
    }
    function h(e) {
        if (e.from?.isGroup() === true) {
            return "group";
        }
        if (e.broadcastId?.isBroadcast() === true) {
            return "broadcast";
        }
        if (e.from?.isNewsletter() === true) {
            return "newsletter";
        }
        return "individual";
    }
    function y(e) {
        try {
            const n = e.interactivePayload?.buttons?.[0]?.buttonParamsJson;
            if (n != null) {
                const r = JSON.parse(n);
                const a = r.payment_settings;
                const i = Array.isArray(a) && a.some((e)=>typeof e === "object" && e != null && e[o("WAWebBizOrderDetailsParams").PaymentSettingType.PAYMENT_LINK] != null);
                if (i === true) {
                    return "checkout_lite";
                }
            }
        } catch (e) {}
        return "unknown";
    }
    function C(e) {
        const r = e.interactivePayload?.buttons?.[0];
        return o("WAWebOrderDetails").paramsJsonToOrderInfo(r?.name, r?.buttonParamsJson)?.isOrderNodeOmitted;
    }
    function b(e) {
        return o("WAWebMsgGetters").getSender(e)?.user;
    }
    l.logOrderDetailsReceivedWAMEvent = m;
    l.getChatTypeFromMsg = h;
}, 98);