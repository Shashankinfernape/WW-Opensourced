__d("WAWebGalaxyFlowWamLoggerUtils", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebExtensionScreenProgressWamEvent",
    "WAWebExtensionsStructuredMessageInteractionWamEvent",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetGalaxyFlowCtaButton",
    "WAWebHandleMsgTypes.flow",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamCodegenWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumFlowEntryPoint",
    "WAWebWamEnumStructuredMessageClass",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW;
    }
    function c(e) {
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
    function d(e) {
        return o("WAWebMsgGetters").getSender(e)?.user;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new (o("WAWebStructuredMessageReceiveWamEvent")).StructuredMessageReceiveWamEvent({
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
                messageClassAttributes: f(e),
                businessOwnerJid: d(e)
            });
            t.commit();
            if (o("WAWebABProps").getABPropConfigValue("payments_br_p2m_buyer_logging_phase_2")) {
                new (o("WAWebStructuredMessageBuyerReceiveWamEvent")).StructuredMessageBuyerReceiveWamEvent({
                    messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                    messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                    messageClassAttributes: JSON.stringify({
                        cta: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
                        is_template: e.templateId != null ? 1 : 0,
                        chat_type: c(e)
                    })
                }).commit();
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const n = [];
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW && e.interactivePayload?.buttons != null) {
            e.interactivePayload.buttons.forEach((t, r)=>{
                const i = o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowCtaButton(t.buttonParamsJson ?? "", r, e.t);
                if (i != null) {
                    n.push(i);
                }
            });
        }
        if (n.length === 0) {
            return null;
        }
        return n[0];
    }
    function f(e) {
        const l = _(e);
        return JSON.stringify({
            cta: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
            flow_id: l?.data?.flowId,
            extensions_message_id: e.galaxyFlowWAMMessageId,
            is_flow_message_with_payload: o("WAWebGalaxyFlowsUtils").isFlowInitWithoutDataChannel(l?.data?.flowAction ?? ""),
            is_template: e.templateId != null ? 1 : 0,
            extension_status: l?.data?.mode
        });
    }
    function g(e) {
        try {
            let t;
            if ((t = e.from) != null && t.isLid()) {
                return o("WAWebApiContact").getPhoneNumber(o("WAWebWidFactory").asUserLidOrThrow(e.from))?.user ?? "";
            }
            return e.from?.user ?? "";
        } catch (t) {
            return e.from?.user ?? "";
        }
    }
    function h(e) {
        if (e.contact.id == null) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
        }
        const n = e.contact;
        if (n == null || !n.isBusiness) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
        }
        if (e.contact?.privacyMode?.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
        }
        if (n.isEnterprise) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT;
        }
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB;
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield (s || (s = n("Promise"))).all(t.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    if (u(t)) {
                        yield m(t).catch((t)=>{
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[WAM:GALAXY_FLOW] structured msg receive log err: ",
                                ""
                            ])), String(t));
                        });
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n, a, i) {
        new (o("WAWebExtensionsStructuredMessageInteractionWamEvent")).ExtensionsStructuredMessageInteractionWamEvent({
            bizPlatform: h(t),
            businessOwnerJid: g(n),
            flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT.MESSAGE_CTA,
            messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageInteraction: a,
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(n),
            messageClassAttributes: JSON.stringify(babelHelpers.extends({
                cta: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
                flow_id: e?.flowId,
                extensions_message_id: n.galaxyFlowWAMMessageId,
                session_id: e?.flowWAMSessionId,
                is_template: n.templateId != null ? 1 : 0,
                extension_status: e?.mode,
                categories: JSON.stringify(e?.categories),
                data_channel_navigation: !o("WAWebGalaxyFlowsUtils").isFlowInitWithoutDataChannel(e?.flowAction ?? "")
            }, i != null ? {
                error_type: i
            } : {}))
        }).commit();
    }
    function v({ chat: n, flowData: r, msg: a }) {
        new (o("WAWebExtensionScreenProgressWamEvent")).ExtensionScreenProgressWamEvent({
            bizPlatform: h(n),
            businessOwnerJid: g(a) ?? "",
            extensionCategory: JSON.stringify(r?.categories),
            extensionRestoredFromCache: r?.isRestoredFromCache,
            extensionScreenLength: r?.screenLength,
            extensionStatus: r?.mode,
            extensionsFlowId: r?.flowId,
            extensionsMessageId: a.galaxyFlowWAMMessageId ?? "",
            extensionsSessionId: r?.flowWAMSessionId,
            flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT.MESSAGE_CTA,
            flowStatusExit: "user_interrupted",
            hsmTag: a.hsmTag ?? "",
            isTemplate: a.templateId != null,
            screenProgress: r.screenProgress,
            sequenceNumber: r.sequenceNumber,
            layoutType: r.layoutType,
            isSuccessScreen: r.isSuccess === true
        }).commit();
    }
    function S({ bizPlatform: t, businessOwnerJid: n, clickType: r, currentFlowId: a, flowsMessageId: i, flowsSessionId: l }) {
        new (o("WAWebWamCodegenWamEvent")).RawWamEvent({
            id: 5980,
            weight: 0,
            wamChannel: "private",
            privateStatsIdInt: 0,
            1: t,
            2: n,
            4: r,
            5: a,
            8: "RESPONSE",
            10: i,
            13: l,
            14: 1
        }).commit();
    }
    l.getFlowBusinessPhoneNumber = g;
    l.getFlowsMaybeBizPlatform = h;
    l.logStructuredMessageReceivedWAMEvent = y;
    l.logStructuredMessageInteractionWAMEvent = b;
    l.logExtensionScreenProgressWAMEvent = v;
    l.logFlowsScreenActionWAMEvent = S;
}, 98);