__d("WAWebUprWamLogger", [
    "Promise",
    "WALogger",
    "WAWebBuyerEventLogger",
    "WAWebChatGetters",
    "WAWebMsgGetters",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    let u;
    let c;
    const d = "receiver_log_key";
    const m = "upr_message_id";
    const cta_1 = "universal_payment_request";
    const _ = "upr_payment_bubble";
    const f = "upr_payment_options";
    const g = 200;
    const h = new Set;
    const y = "individual";
    const C = "group";
    const b = "broadcast";
    const v = "newsletter";
    const S = Object.freeze({
        OPEN_PAYMENT_LINK: "open_payment_link",
        COPY_PAYMENT_KEY: "copy_payment_key",
        VIEW_PAYMENT_OPTIONS: "view_payment_options",
        VIEW_DETAILS: "view_details"
    });
    const R = Object.freeze({
        [S.OPEN_PAYMENT_LINK]: (c = o("WAWebWamEnumInteractionType")).INTERACTION_TYPE.USER_OPEN_BROWSER,
        [S.COPY_PAYMENT_KEY]: c.INTERACTION_TYPE.CLICK_COPY_PAYMENT_KEY,
        [S.VIEW_PAYMENT_OPTIONS]: c.INTERACTION_TYPE.CLICK_PAYMENT_DETAILS,
        [S.VIEW_DETAILS]: c.INTERACTION_TYPE.CLICK_ORDER_SUMMARY
    });
    function L(chat) {
        if (o("WAWebChatGetters").getIsGroup(chat)) {
            return C;
        }
        if (o("WAWebChatGetters").getIsBroadcast(chat)) {
            return b;
        }
        if (o("WAWebChatGetters").getIsNewsletter(chat)) {
            return v;
        }
        return y;
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(e, t);
            const r = yield n.genFunnelInfo();
            const r_funnel_id = r.funnel_id;
            return r_funnel_id;
        });
        return k.apply(this, arguments);
    }
    function I({ buyerAttributes, interaction, msg, psAttributes }) {
        const u = msg.unsafe();
        const businessOwnerJid = o("WAWebMsgGetters").getBusinessOwnerJid(u) ?? o("WAWebMsgGetters").getSender(u)?.toJid();
        w({
            buyerAttributes,
            businessOwnerJid,
            interaction,
            msg,
            psAttributes
        }).catch((e)=>{
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAM:UPR] interaction log err: ",
                ""
            ])), e);
        });
    }
    function T({ chat, cta, identifierType, info, msg, paymentMethodChoice }) {
        const interaction = R[cta];
        const s = L(chat);
        const u = identifierType?.toLowerCase();
        const psAttributes = {
            cta: cta_1,
            is_upr: true,
            payment_method_choice: paymentMethodChoice,
            identifier_type: u,
            is_single_option: info.paymentOptions.length === 1,
            chat_type: s,
            currency: info.currency,
            order_amount: x(info)
        };
        const buyerAttributes = {
            cta: cta_1,
            isUpr: true,
            paymentMethodChoice,
            identifierType: u,
            chatType: s,
            currency: info.currency
        };
        I({
            buyerAttributes,
            interaction,
            msg,
            psAttributes
        });
    }
    function D({ direction, msg }) {
        if (!h.has(msg.id.id)) {
            if (h.size >= g) {
                const r = h.values().next().value;
                if (r != null) {
                    h.delete(r);
                }
            }
            h.add(msg.id.id);
            I({
                msg,
                interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_VIEW,
                psAttributes: {
                    direction,
                    is_upr: true,
                    screen: _
                }
            });
        }
    }
    function x({ totalAmount }) {
        if (!(totalAmount == null || totalAmount.offset === 0)) {
            return totalAmount.value / totalAmount.offset;
        }
    }
    function $({ msg }) {
        I({
            msg,
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_VIEW,
            psAttributes: {
                is_upr: true,
                screen: f
            },
            buyerAttributes: {
                isUpr: true,
                screen: f
            }
        });
    }
    function P({ info, msg }, t) {
        const a = t.identifierType.toLowerCase();
        const i = info.currency === "" ? undefined : info.currency;
        I({
            msg,
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.CLICK_COPY_PAYMENT_KEY,
            psAttributes: {
                is_upr: true,
                screen: f,
                method_type: t.accountType,
                identifier_type: a,
                order_amount: x(info),
                currency: i
            },
            buyerAttributes: {
                isUpr: true,
                screen: f,
                methodType: t.accountType,
                identifierType: a,
                currency: i
            }
        });
    }
    function N({ info, msg }) {
        const r = info.currency === "" ? undefined : info.currency;
        I({
            msg,
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_OPEN_BROWSER,
            psAttributes: {
                is_upr: true,
                screen: f,
                method_type: "payment_link",
                order_amount: x(info),
                currency: r
            },
            buyerAttributes: {
                isUpr: true,
                screen: f,
                methodType: "payment_link",
                currency: r
            }
        });
    }
    function M({ msg }) {
        I({
            msg,
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_CANCEL,
            psAttributes: {
                is_upr: true,
                screen: f
            },
            buyerAttributes: {
                isUpr: true,
                screen: f
            }
        });
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ businessOwnerJid, buyerAttributes, interaction, msg, psAttributes }) {
            const s = msg.id.id + msg.to.toJid();
            const c = yield (u || (u = n("Promise"))).all([
                E(d, s),
                E(m, msg.id.id)
            ]);
            const p = c[0];
            const _ = c[1];
            new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent({
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
                businessOwnerJid,
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, psAttributes, {
                    message_id: _,
                    order_funnel_id: p
                })),
                messageInteraction: interaction,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
            }).commit();
            if (buyerAttributes != null) {
                yield o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                    attributes: babelHelpers.extends({}, buyerAttributes, {
                        messageId: _
                    }),
                    bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
                    interaction,
                    isLoggingEnabled: true,
                    psFunnelId: p
                });
            }
        });
        return A.apply(this, arguments);
    }
    l.UprCtaType = S;
    l.logUprInteractionWAMEvent = T;
    l.logUprBubbleViewWAMEvent = D;
    l.logUprPaymentOptionsViewWAMEvent = $;
    l.logUprPaymentOptionCopyWAMEvent = P;
    l.logUprPaymentOptionOpenLinkWAMEvent = N;
    l.logUprPaymentOptionsDismissWAMEvent = M;
}, 98);