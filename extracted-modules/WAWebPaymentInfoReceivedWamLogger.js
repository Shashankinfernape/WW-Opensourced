__d("WAWebPaymentInfoReceivedWamLogger", [
    "WALogger",
    "WAWebABProps",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetailsReceivedWamLogger",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "payment_key_info";
    function u(t) {
        for (const n of t){
            if (d(n)) {
                try {
                    c(n);
                } catch (t) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAM:PAYMENT_INFO] structured msg receive log err: ",
                        ""
                    ])), t).sendLogs("payment-info-receive-log-err");
                }
            }
        }
    }
    function c(e) {
        const t = o("WAWebOrderDetailsReceivedWamLogger").getChatTypeFromMsg(e);
        const n = e.nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO;
        const a = n ? {
            cta: "p2p_pix",
            p2p_flow: "QUICK_REPLY",
            chat_type: t
        } : {
            cta: "quick_reply",
            p2m_flow: "QUICK_REPLY",
            p2m_type: "p2m_pro",
            chat_type: t
        };
        new (o("WAWebStructuredMessageReceiveWamEvent")).StructuredMessageReceiveWamEvent({
            messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
            businessOwnerJid: m(e),
            messageClassAttributes: JSON.stringify(a)
        }).commit();
        if (o("WAWebABProps").getABPropConfigValue("payments_br_p2m_buyer_logging_phase_2")) {
            new (o("WAWebStructuredMessageBuyerReceiveWamEvent")).StructuredMessageBuyerReceiveWamEvent({
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
                messageClassAttributes: JSON.stringify(babelHelpers.extends({
                    cta: a.cta
                }, n ? {
                    p2p_flow: "QUICK_REPLY"
                } : {
                    p2m_flow: "QUICK_REPLY",
                    p2m_type: "p2m_pro"
                }, {
                    chat_type: t
                }))
            }).commit();
        }
    }
    function d(e) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || e.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            return false;
        }
        if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
            return true;
        }
        const n = e.interactivePayload?.buttons?.[0]?.name;
        return n === s;
    }
    function m(e) {
        return o("WAWebMsgGetters").getSender(e)?.user;
    }
    l.logPaymentInfoReceivedWAMEvent = u;
}, 98);