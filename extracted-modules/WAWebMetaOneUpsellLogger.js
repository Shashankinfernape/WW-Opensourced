__d("WAWebMetaOneUpsellLogger", [
    "WALogger",
    "WAWebAiSubsBenefitUjWamEvent",
    "WAWebBotBaseGating",
    "WAWebBotJourneyLogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebWamEnumAiSubComponent",
    "WAWebWamEnumAiSubEntrypoint",
    "WAWebWamEnumAiSubScreen",
    "WAWebWamEnumAiSubUserAction",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral",
    "WAWebWamEnumWsuaScreen",
    "WAWebWamEnumWsuaScreenElement"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        META_AI_IMAGE_GEN: {
            aiSubEntrypoint: o("WAWebWamEnumAiSubEntrypoint").AI_SUB_ENTRYPOINT.IMAGINE,
            aiSubScreen: o("WAWebWamEnumAiSubScreen").AI_SUB_SCREEN.CHAT_THREAD_IMAGINE,
            referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.META_AI_IMAGINE,
            screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CHAT_THREAD_IMAGINE
        },
        META_AI_THINK_HARD: {
            aiSubEntrypoint: o("WAWebWamEnumAiSubEntrypoint").AI_SUB_ENTRYPOINT.THINKING,
            aiSubScreen: o("WAWebWamEnumAiSubScreen").AI_SUB_SCREEN.CHAT_THREAD_THINKING,
            referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.META_AI_THINKING,
            screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CHAT_THREAD_THINKING
        },
        META_AI_VIDEO_GEN: {
            aiSubEntrypoint: o("WAWebWamEnumAiSubEntrypoint").AI_SUB_ENTRYPOINT.VIDEO,
            aiSubScreen: o("WAWebWamEnumAiSubScreen").AI_SUB_SCREEN.CHAT_THREAD_VIDEO,
            referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.META_AI_VIDEO,
            screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CHAT_THREAD_VIDEO
        }
    };
    function u(e, t) {
        const n = f();
        if (g(`${n}:${e}`)) {
            h("VIEW", n, t);
        }
    }
    function c(e) {
        h("CLICK", f(), e);
    }
    function d() {
        p.clear();
        _ = null;
    }
    const m = 500;
    var p = new Set;
    var _ = null;
    function f() {
        const t = o("WAWebBotJourneyLogger").BotJourneyLogger.getDestinationId();
        if (t != null) {
            return t;
        }
        let n = _;
        if (n == null) {
            n = r("WAWebPonyfillsCryptoRandomUUID")();
            _ = n;
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[AI Subs] quota upsell logged with no bot-metrics destination id"
            ]))).sendLogs("metaone-upsell-missing-destination-id", {
                sampling: 0.01
            });
        }
        return n;
    }
    function g(e) {
        if (p.has(e)) {
            return false;
        }
        if (p.size >= m) {
            const t = p.values().next().value;
            if (t != null) {
                p.delete(t);
            }
        }
        p.add(e);
        return true;
    }
    function h(e, t, n) {
        if (o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled()) {
            const a = n != null ? s[n.toUpperCase()] : null;
            const i = e === "VIEW";
            new (o("WAWebSubscriptionUserActionWamEvent")).SubscriptionUserActionWamEvent({
                wsuaAction: i ? o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW : o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK,
                wsuaActionTarget: i ? undefined : o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET.UPSELL_CTA,
                wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE.META_ONE_CONSUMER,
                wsuaReferral: a?.referral,
                wsuaScreen: a?.screen ?? o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.CHAT_THREAD,
                wsuaScreenElement: o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT.UNIFIED_RESPONSE_UPSELL,
                wsuaSessionId: t
            }).commit();
            new (o("WAWebAiSubsBenefitUjWamEvent")).AiSubsBenefitUjWamEvent({
                aiSubComponent: o("WAWebWamEnumAiSubComponent").AI_SUB_COMPONENT.UNIFIED_RESPONSE_UPSELL,
                aiSubEntrypoint: a?.aiSubEntrypoint,
                aiSubScreen: a?.aiSubScreen,
                aiSubSessionId: t,
                aiSubUserAction: i ? o("WAWebWamEnumAiSubUserAction").AI_SUB_USER_ACTION.VIEW : o("WAWebWamEnumAiSubUserAction").AI_SUB_USER_ACTION.CLICK
            }).commit();
        }
    }
    l.logQuotaUpsellView = u;
    l.logQuotaUpsellCtaClick = c;
    l.resetLoggedViewKeysForTests = d;
}, 98);