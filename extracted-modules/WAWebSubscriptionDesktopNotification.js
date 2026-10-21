__d("WAWebSubscriptionDesktopNotification", [
    "fbt",
    "Promise",
    "WAWebBaseNotification",
    "WAWebBizAiMetaOneDialogRequestStore",
    "WAWebNotificationController",
    "WAWebNotificationIconUtils",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const tag = "meta-one-subscription";
    const c = "management";
    const d = "MP4B";
    const m = ((t)=>{
        function a(e) {
            let n;
            n = t.call(this) || this;
            n.$WASubscriptionDesktopNotification$p_2 = r("WAWebPonyfillsCryptoRandomUUID")();
            n.$WASubscriptionDesktopNotification$p_1 = e;
            return n;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.buildKey = function() {
            return `meta-one-subscription:${this.$WASubscriptionDesktopNotification$p_1.stanzaId}`;
        };
        a_prototype.getChatKind = function() {
            return null;
        };
        a_prototype.getIcon = function() {
            return (e || (e = n("Promise"))).resolve(o("WAWebNotificationIconUtils").WHATSAPP_BUSINESS_DEFAULT_ICON);
        };
        a_prototype.shouldPlaySound = function() {
            return this.shouldShowBanner() && t.prototype.shouldPlaySound.call(this);
        };
        a_prototype.afterBannerShown = function() {
            g(o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW, this.$WASubscriptionDesktopNotification$p_2);
        };
        a_prototype.getBannerOptions = function() {
            const e = this;
            const $WASubscriptionDesktopNotification$p_1 = this.$WASubscriptionDesktopNotification$p_1;
            const { link, text, title } = $WASubscriptionDesktopNotification$p_1;
            const i = _(link);
            return {
                wid: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                tag,
                title: title ?? s._("Meta One").toString(),
                body: text,
                doNotOpenChat: true,
                onClick: function() {
                    g(o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK, e.$WASubscriptionDesktopNotification$p_2);
                    if (i != null) {
                        o("WAWebBizAiMetaOneDialogRequestStore").requestMetaOneDialog(i);
                    }
                }
            };
        };
        return a;
    })(o("WAWebBaseNotification").WABaseNotification);
    function p(e) {
        o("WAWebNotificationController").WANotificationController.triggerNotification(new m(e));
    }
    function _(link) {
        if (link == null) {
            return null;
        }
        try {
            const n = new URL(link).searchParams;
            return n.get("meta_one_destination") ?? (f(n.get("deeplink_params")) ? c : null);
        } catch (e) {
            return null;
        }
    }
    function f(e) {
        if (e == null) {
            return false;
        }
        const t = JSON.parse(e);
        return typeof t === "object" && t != null && t.product_type === d;
    }
    function g(wsuaAction, wsuaSessionId) {
        new (o("WAWebSubscriptionUserActionWamEvent")).SubscriptionUserActionWamEvent({
            wsuaAction,
            wsuaActionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET.META_ONE_BUSINESS_ENTRY_POINT,
            wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE.META_ONE_BUSINESS,
            wsuaReferral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.NOTIFICATION,
            wsuaSessionId
        }).commit();
    }
    l.WASubscriptionDesktopNotification = m;
    l.showSubscriptionDesktopNotification = p;
}, 226);