__d("WAWebPaymentLinkWamLogger", [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebLinkify",
    "WAWebMerchantCommerceEventWamEvent",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPaymentLink",
    "WAWebProtobufsE2E.pb",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumStructuredMessageClass",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "receiver_log_key";
    const s = "buyer_order_fs_log";
    const u = {
        CTA: "payment_link",
        P2M_FLOW: "PAYMENT_LINK"
    };
    const c = {
        INTERACTION_ACTION: "send_payment_link",
        INTERACTION_SURFACE: "chat",
        REFERRAL: "composer",
        COMMERCE_EXPERIENCE: "non_native",
        P2M_FLOW: "payment_link",
        ACCEPTED_PAYMENT_METHOD: "payment_link"
    };
    const d = n("$InternalEnum")({
        NOT_STARTED: "not_started",
        STARTED: "started",
        COMPLETED: "completed"
    });
    const m = n("$InternalEnum")({
        INDIVIDUAL: "individual",
        GROUP: "group",
        BROADCAST: "broadcast",
        NEWSLETTER: "newsletter"
    });
    const p = n("$InternalEnum")({
        LINK: "link",
        LINK_PREVIEW: "link_preview",
        LINK_CTA: "link_cta",
        UNKNOWN: "unknown"
    });
    function _(e) {
        const a = o("WAWebMsgGetters").getPaymentLinkMetadata(e);
        const i = a?.provider?.paramsJson != null ? JSON.parse(a?.provider?.paramsJson)?.name : null;
        return i;
    }
    function f(e) {
        if (o("WAWebMsgGetters").getIsSentByMe(e)) {
            return false;
        }
        if (o("WAWebMsgGetters").getRichPreviewType(e) === o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS) {
            return o("WAWebABProps").getABPropConfigValue("smb_payment_links_logging_enabled");
        }
        const t = _(e);
        if (t == null) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("smb_payment_links_logging_enabled");
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(e, t.id.id + t.to.toJid());
            return n.genFunnelInfo();
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = _(e.msg);
            const r = n ?? (t != null ? o("WAWebPaymentLink").getPSP(t) : null);
            const a = yield g(e.msg);
            const i = b(e.msg, k(e.msg), a.funnel_id, a.is_logging_secret_available, r, n != null);
            const l = new (o("WAWebStructuredMessageReceiveWamEvent")).StructuredMessageReceiveWamEvent(babelHelpers.extends({}, i, {
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, i.messageClassAttributes))
            }, $(e.msg) && {
                businessOwnerJid: x(e)
            }));
            l.commit();
            if (o("WAWebABProps").getABPropConfigValue("payments_br_payment_links_buyer_logging")) {
                new (o("WAWebStructuredMessageBuyerReceiveWamEvent")).StructuredMessageBuyerReceiveWamEvent({
                    messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.HSM,
                    messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e.msg),
                    messageClassAttributes: JSON.stringify({
                        cta: u.CTA,
                        p2m_flow: u.P2M_FLOW,
                        chat_type: k(e.msg)
                    })
                }).commit();
            }
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n, r, a, i) {
        const l = v(e, t, n, r, a, i);
        return {
            bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
            messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.HSM,
            messageClassAttributes: l,
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e)
        };
    }
    function v(e, t, n, r, a, i) {
        let l = {
            funnel_id: n,
            is_logging_secret_available: r,
            cta: u.CTA,
            p2m_flow: u.P2M_FLOW,
            chat_type: t,
            has_link_preview: o("WAWebMsgGetters").getRichPreviewType(e) === o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS,
            is_payment_provider_in_metadata: i,
            is_forwarded: o("WAWebMsgGetters").getIsForwarded(e),
            is_edited: o("WAWebMsgGetters").getIsEdited(e)
        };
        l = S(e, l);
        l = R(l, a);
        l = L(e, l);
        if (o("WAWebABProps").getABPropConfigValue("payment_link_trace_id_logging_enabled")) {
            l = E(e, l);
        }
        return l;
    }
    function S(e, t) {
        const n = P(e.paymentLinkMetadata);
        return babelHelpers.extends({}, t, n != null && {
            cta_variant: n
        });
    }
    function R(e, t) {
        return babelHelpers.extends({}, e, t != null && {
            payment_provider: t
        });
    }
    function L(e, t) {
        const r = o("WAWebMsgGetters").getPaymentLinkMetadata(e);
        const a = j(r?.provider?.paramsJson);
        return babelHelpers.extends({}, t, a != null && {
            metatags: a
        });
    }
    function E(e, t) {
        const r = o("WAWebMsgGetters").getPaymentLinkMetadata(e);
        const a = K(r?.provider?.paramsJson);
        if (a == null || a === "") {
            return t;
        }
        return babelHelpers.extends({}, t, {
            payment_link_trace_id: a
        });
    }
    function k(e) {
        if (I(e)) {
            return m.GROUP;
        }
        if (T(e)) {
            return m.BROADCAST;
        }
        if (D(e)) {
            return m.NEWSLETTER;
        }
        return m.INDIVIDUAL;
    }
    function I({ from: n }) {
        return n?.isGroup() ?? false;
    }
    function T(e) {
        return e.broadcastId?.isBroadcast() ?? false;
    }
    function D({ from: n }) {
        return n?.isNewsletter() ?? false;
    }
    function x(e) {
        if (e.interaction_component == null) {
            return o("WAWebMsgGetters").getSender(e.msg)?.toJid();
        }
        return e.msg.senderObj?.id.toJid();
    }
    function $(e) {
        if (!o("WAWebABProps").getABPropConfigValue("payment_link_trace_id_logging_enabled")) {
            return true;
        }
        const n = o("WAWebMsgGetters").getPaymentLinkMetadata(e);
        const r = K(n?.provider?.paramsJson);
        return !(r != null && r !== "" && o("WAWebMsgGetters").getIsForwarded(e));
    }
    function P(e) {
        if (e?.header?.headerType != null) {
            return o("WAWebProtobufsE2E.pb").Message$PaymentLinkMetadata$PaymentLinkHeader$PaymentLinkHeaderType.getName(e?.header?.headerType).toLowerCase();
        }
        return null;
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield w(e, t, k(e.msg));
            const r = new (o("WAWebPsStructuredMessageInteractionWamEvent")).PsStructuredMessageInteractionWamEvent(babelHelpers.extends({}, n, {
                messageClassAttributes: JSON.stringify(babelHelpers.extends({}, n.messageClassAttributes))
            }, $(e.msg) && {
                businessOwnerJid: x(e)
            }, {
                messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW
            }));
            r.commit();
            if (o("WAWebABProps").getABPropConfigValue("payments_br_payment_links_buyer_logging")) {
                const a = n.messageClassAttributes.funnel_id;
                const i = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(a, s);
                const l = yield i.genFunnelInfo();
                const c = l.funnel_id;
                new (o("WAWebStructuredMessageBuyerInteractionWamEvent")).StructuredMessageBuyerInteractionWamEvent({
                    messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.HSM,
                    messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e.msg),
                    messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
                    messageClassAttributes: JSON.stringify({
                        cta: u.CTA,
                        p2m_flow: u.P2M_FLOW,
                        chat_type: k(e.msg),
                        order_funnel_id: c
                    })
                }).commit();
            }
        });
        return M.apply(this, arguments);
    }
    function w(e, t, n) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const o = _(e.msg);
            const a = o ?? t;
            const i = yield g(e.msg);
            const l = b(e.msg, n, i.funnel_id, i.is_logging_secret_available, a, o != null);
            return babelHelpers.extends({}, l, {
                messageClassAttributes: babelHelpers.extends({}, l.messageClassAttributes, {
                    interaction_component: e.interaction_component ?? p.UNKNOWN
                })
            });
        });
        return A.apply(this, arguments);
    }
    function F() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("smb_payment_links_seller_logging_enabled");
    }
    function O(e, t, n, r, o, a, i) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a, i, l) {
            const s = o("WAWebLinkify").findLinks(e, false, o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE());
            const u = V(s, t, n, r, i, l);
            if (u) {
                W(a, u);
            }
        });
        return B.apply(this, arguments);
    }
    function W(e, t) {
        const n = new (o("WAWebMerchantCommerceEventWamEvent")).MerchantCommerceEventWamEvent({
            bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
            commerceInteractionAction: c.INTERACTION_ACTION,
            commerceSurface: c.INTERACTION_SURFACE,
            referral: c.REFERRAL,
            commerceExperience: c.COMMERCE_EXPERIENCE,
            p2mFlow: c.P2M_FLOW,
            acceptedPaymentMethods: c.ACCEPTED_PAYMENT_METHOD,
            isEligibleForAdSignal: false,
            merchantHasCatalog: e,
            extraAttributes: JSON.stringify(t)
        });
        n.commit();
    }
    function q(e) {
        if (o("WAWebChatGetters").getIsGroup(e)) {
            return m.GROUP;
        }
        if (o("WAWebChatGetters").getIsBroadcast(e)) {
            return m.BROADCAST;
        }
        if (o("WAWebChatGetters").getIsNewsletter(e)) {
            return m.NEWSLETTER;
        }
        return m.INDIVIDUAL;
    }
    function U(e) {
        if (o("WAWebChatGetters").getIsGroup(e)) {
            return e.getParticipantCount();
        }
        if (o("WAWebChatGetters").getIsNewsletter(e)) {
            return e.newsletterMetadata?.size ?? 1;
        }
        return 1;
    }
    function V(e, t, n, r, a, i) {
        const d = e.map((e)=>o("WAWebPaymentLink").getPSP(e.url)).filter((e)=>e != null);
        if (d.length <= 0) {
            return null;
        }
        const m = Array.from(new Set(d));
        const p = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
        const _ = p.disableLinkPreviews;
        let f = {
            url_preview_cancelled: t,
            url_preview_enabled: !_,
            url_preview_loaded: n != null || t,
            payment_provider: m.toString(),
            rich_preview_type: n?.data?.richPreviewType ?? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE,
            does_preview_have_thumbnail: !Q(n?.data?.thumbnail) || !Q(n?.data?.thumbnailHQ),
            number_of_payment_links: d.length,
            number_of_links: e.length,
            link_preview_status: r,
            is_first_http_url_a_payment_link: X(e),
            chat_participant_count: U(a),
            chat_type: q(a)
        };
        f = H(f, i);
        f = G(f, i);
        if (o("WAWebABProps").getABPropConfigValue("payment_link_trace_id_logging_enabled")) {
            f = z(f, i);
        }
        return f;
    }
    function H(e, t) {
        const n = P(t);
        return babelHelpers.extends({}, e, n != null && {
            cta_variant: n
        });
    }
    function G(e, t) {
        const r = j(t?.provider?.paramsJson);
        return babelHelpers.extends({}, e, r != null && {
            metatags: r
        });
    }
    function z(e, t) {
        const r = K(t?.provider?.paramsJson);
        if (r == null || r === "") {
            return e;
        }
        return babelHelpers.extends({}, e, {
            payment_link_trace_id: r
        });
    }
    function j(e) {
        try {
            const n = e == null ? null : JSON.parse(e);
            if (n == null) {
                return null;
            }
            const r = n?.meta_tags;
            if (r == null) {
                return null;
            }
            let o = null;
            if (r.is_business_verified != null) {
                o = babelHelpers.extends({}, o, {
                    is_business_verified: r.is_business_verified === true
                });
            }
            const a = r.provider_name?.trim();
            if (a != null) {
                o = babelHelpers.extends({}, o, {
                    is_psp_name_available: a.length > 0
                });
            }
            if (r.amount != null && r.currency != null && r.offset != null) {
                o = babelHelpers.extends({}, o, {
                    og_tag_view_enabled: true
                });
            }
            return o;
        } catch (e) {
            return null;
        }
    }
    function K(e) {
        if (e == null || e === "") {
            return null;
        }
        try {
            const t = JSON.parse(e);
            return t.payment_link_trace_id;
        } catch (e) {
            return null;
        }
    }
    function Q(e) {
        return e == null || e.trim().length === 0;
    }
    function X(e) {
        for (const t of e){
            if (t && t.isHttp) {
                return o("WAWebPaymentLink").getPSP(t.url) != null;
            }
        }
        return false;
    }
    l.LinkPreviewStatus = d;
    l.ClickInteractionComponent = p;
    l.shouldLogReceiverEvent = f;
    l.genReceiverEventFunnelInfo = g;
    l.genLogReceiveEvent = y;
    l.genLogClickEvent = N;
    l.shouldLogSendEvent = F;
    l.genLogSendEventIfPaymentLink = O;
}, 98);