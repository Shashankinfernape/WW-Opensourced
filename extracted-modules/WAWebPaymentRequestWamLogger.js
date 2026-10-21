__d("WAWebPaymentRequestWamLogger", [
    "Promise",
    "WALogger",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentRequest",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPrivacyModeSystemMsg",
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
    let d;
    const m = "pix";
    const p = "offsite_card";
    const _ = "payment_request";
    const f = "payment_request_template_cta";
    const g = "payment_request_text_cta";
    const h = "receiver_log_key";
    const y = "buyer_order_fs_log";
    const C = "cpx";
    const b = "individual";
    const v = "group";
    const S = "broadcast";
    const R = "newsletter";
    const L = "BRL";
    const E = new Map([
        [
            m,
            o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE
        ],
        [
            (d = o("WAWebBrPaymentRequest")).PaymentRequestCtaType.BOLETO,
            o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_BOLETO_CODE
        ],
        [
            d.PaymentRequestCtaType.PAYMENT_LINK,
            o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW
        ]
    ]);
    const k = new Map([
        [
            d.PaymentRequestCtaType.PIX_DYNAMIC_CODE,
            m
        ],
        [
            d.PaymentRequestCtaType.OFFSITE_CARD_PAY,
            p
        ]
    ]);
    function I(e) {
        return k.get(e) ?? e;
    }
    function T(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW && e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST;
    }
    function D(e) {
        const n = e.interactivePayload?.buttons;
        if (n == null) {
            return [];
        }
        const r = [];
        for (const a of n){
            const i = o("WAWebBrPaymentRequest").parsePaymentRequestButton(a);
            if (i != null) {
                r.push(I(i.paymentType));
            }
        }
        return r;
    }
    function x(e) {
        if (e.from?.isGroup() === true) {
            return v;
        }
        if (e.broadcastId?.isBroadcast() === true) {
            return S;
        }
        if (e.from?.isNewsletter() === true) {
            return R;
        }
        return b;
    }
    function $(e) {
        return o("WAWebMsgGetters").getSender(e)?.user;
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(e, t);
            const r = yield n.genFunnelInfo();
            const a = r.funnel_id;
            return a;
        });
        return N.apply(this, arguments);
    }
    function M(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = e.templateId != null;
            const a = e.id.id + e.to.toJid();
            const i = yield P(h, a);
            const l = yield P(i, y);
            const s = D(e);
            const u = G(e, t);
            const c = {
                cta: _,
                p2m_flow: r ? f : g,
                accepted_payment_method: s.length > 0 ? JSON.stringify(s) : void 0,
                order_funnel_id: i,
                chat_type: x(e)
            };
            if (!r) {
                c.is_payment_cta_shown = o("WAWebBrPaymentRequest").isPaymentDetectionEnhancementEnabled() ? "1" : "0";
            }
            new (o("WAWebStructuredMessageReceiveWamEvent")).StructuredMessageReceiveWamEvent({
                bizPlatform: u,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
                businessOwnerJid: $(e),
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, c, {
                    is_template: r,
                    platform: C
                })),
                templateId: e.templateId ?? void 0
            }).commit();
            const d = babelHelpers.extends({}, c, {
                order_funnel_id: l
            });
            new (o("WAWebStructuredMessageBuyerReceiveWamEvent")).StructuredMessageBuyerReceiveWamEvent({
                bizPlatform: u,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: V(r),
                messageClassAttributes: JSON.stringify(d)
            }).commit();
        });
        return w.apply(this, arguments);
    }
    function A(e, t) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield (c || (c = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (T(e)) {
                        const r = o("WAWebMsgGetters").getSender(e)?.toJid();
                        const a = r != null ? t.get(r) : null;
                        yield M(e, a).catch((e)=>{
                            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[WAM:PAYMENT_REQUEST] structured msg receive log err: ",
                                ""
                            ])), e);
                        });
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return F.apply(this, arguments);
    }
    function O(t, n, a = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA) {
        B(t, n, a).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAM:PAYMENT_REQUEST] structured msg interaction log err"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("payment-request-interaction-log-failed");
        });
    }
    function B(e, t, n) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const i = e.templateId != null;
            const l = I(t);
            const s = yield q(e);
            const u = {
                cta: _,
                p2m_flow: i ? f : g,
                is_template: i,
                payment_method_choice: l
            };
            const c = H(e, {
                attributes: u,
                normalizedPaymentMethod: l,
                psFunnelId: s,
                surface: n
            });
            new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent(babelHelpers.extends({}, c, {
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: V(i),
                businessOwnerJid: e.senderObj?.id?.user,
                templateId: e.templateId ?? void 0
            })).commit();
            yield j(u, i, s ?? "", c.messageInteraction, c.bizPlatform);
        });
        return W.apply(this, arguments);
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield P(h, e.id.id + e.to.toJid()).catch((e)=>{
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM:PAYMENT_REQUEST] interaction funnel id err"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("payment-request-interaction-funnel-id-failed");
                return "";
            });
            if (t === "") {
                return void 0;
            }
            return t;
        });
        return U.apply(this, arguments);
    }
    function V(e) {
        if (e) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE;
        }
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function H(e, { attributes: r, normalizedPaymentMethod: a, psFunnelId: i, surface: l }) {
        const s = D(e);
        return {
            bizPlatform: z(e),
            messageClassAttributes: JSON.stringify(babelHelpers.extends({}, r, {
                accepted_payment_method: s.length > 0 ? JSON.stringify(s) : void 0,
                order_funnel_id: i,
                chat_type: x(e),
                is_cta_available: true,
                currency: L,
                payment_method_surface: l
            })),
            messageInteraction: E.get(a) ?? o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START
        };
    }
    function G(e, t) {
        if (t?.isApi !== true) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
        }
        const r = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(e.privacyModeWhenSent ?? t.storedPrivacyMode);
        if (r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE || r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT;
        }
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
    }
    function z({ senderObj: t }) {
        if (t?.isEnterprise !== true) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
        }
        const n = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(t.privacyMode);
        if (n === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE || n === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP) {
            return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT;
        }
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
    }
    function j(e, t, n, r, o) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a) {
            const i = yield P(n, y);
            new (o("WAWebStructuredMessageBuyerInteractionWamEvent")).StructuredMessageBuyerInteractionWamEvent({
                bizPlatform: a,
                messageInteraction: r,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: V(t),
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, e, {
                    order_funnel_id: i
                }))
            }).commit();
        });
        return K.apply(this, arguments);
    }
    l.PIX_NORMALIZED = m;
    l.RECEIVER_EVENT_LOG_KEY = h;
    l.BUYER_HMAC_DATA = y;
    l.LOGGING_CURRENCY = L;
    l.isPaymentRequestMsg = T;
    l.getPaymentMethodsFromMsg = D;
    l.getChatTypeFromMsg = x;
    l.getBusinessOwnerJid = $;
    l.genFunnelId = P;
    l.logPaymentRequestReceivedWAMEvent = A;
    l.logPaymentRequestInteractionWAMEvent = O;
}, 98);