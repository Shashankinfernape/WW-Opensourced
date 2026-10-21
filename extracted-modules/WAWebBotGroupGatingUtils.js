__d("WAWebBotGroupGatingUtils", [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBotProduct",
    "WAWebBotUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        GROUP: "group",
        ONE_TO_ONE: "one_to_one"
    });
    function s() {
        return o("WAWebABProps").getABPropConfigValue("ai_standard_bot_profile_group_enabled") === true;
    }
    function u() {
        return s() && c();
    }
    function c() {
        return o("WAWebABProps").getABPropConfigValue("ai_hatch_3p_bot_enabled") === true;
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("ai_hatch_3p_bot_group_add_companion_enabled") === true && s() && c() && o("WAWebABProps").getABPropConfigValue("ai_hatch_3p_bot_group_add_enabled") === true;
    }
    function m(e) {
        return o("WAWebBotProduct").botProductFromServerValue(e) === o("WAWebBotProduct").BotProduct.MUSE;
    }
    function p(t, n) {
        if (n !== e.GROUP || t?.isDeprecated === true || t?.isDeleted === true || !m(t?.product)) {
            return false;
        }
        return s();
    }
    function _(e, t) {
        if (t) {
            return false;
        }
        if (o("WAWebBotUtils").isMetaAiBot(e) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)) {
            return true;
        }
        return s();
    }
    function f() {
        if (o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") !== true) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("ai_group_participation_enabled") === true;
    }
    function g() {
        if (o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") !== true) {
            return false;
        }
        return o("WAWebABProps").getABPropConfigValue("ai_group_participation_add_tee_enabled") === true;
    }
    function h(e) {
        if (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)) {
            return f();
        }
        if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)) {
            return true;
        }
        return s();
    }
    function y(e) {
        if (e == null) {
            return false;
        }
        if (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)) {
            return b();
        }
        if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)) {
            return g();
        }
        return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    function C({ authorWid, botGroupParticipant, chatWid, isBotInvoke }) {
        if (chatWid?.isGroup() !== true || botGroupParticipant == null || !y(botGroupParticipant)) {
            return false;
        }
        return !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(botGroupParticipant) || isBotInvoke || authorWid?.equals(botGroupParticipant) === true;
    }
    function b() {
        return o("WAWebABProps").getABPropConfigValue("web_ai_group_open_support") === true;
    }
    function v(e) {
        if (b() && e?.isOpenBotGroup === true) {
            return o("WAWebBotUtils").META_BOT_FBID_WID;
        }
        if (g() && e?.isTeeBotGroup === true) {
            return o("WAWebBotUtils").META_BOT_TEE_FBID_WID;
        }
        return null;
    }
    function S(e) {
        if (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)) {
            return b();
        }
        return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && s();
    }
    l.BotGroupContext = e;
    l.isStandardBotProfileGroupEnabled = s;
    l.isMuseGroupAgentRenderingEnabled = u;
    l.isMuseProductSupported = c;
    l.isMuseGroupAddEnabled = d;
    l.isGroupAgentProduct = m;
    l.isGroupAgent = p;
    l.isGroupBotInvokeAllowed = _;
    l.isOpenGroupBotParticipantAddEnabled = f;
    l.isTEEGroupBotParticipantAddEnabled = g;
    l.isAgentListedInGroupInfoResponse = h;
    l.isGroupBotParticipantEnabled = y;
    l.isGroupBotMessage = C;
    l.isOpenGroupBotSendEnabled = b;
    l.getSendGroupBotParticipant = v;
    l.isGroupRevokeAgentTarget = S;
}, 98);