__d("WAWebGroupAgentProfileRouting", [
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebChatGetters",
    "WAWebHatchFrontendGating",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        BASIC_CARD: "basic_card",
        OWNER_CARD: "owner_card"
    });
    const s = n("$InternalEnum")({
        HATCH_CHAT: "hatch_chat",
        NONE: "none"
    });
    function u(e, t, n = h(e)) {
        if (C(e, t)) {
            return y(e, n);
        }
        return null;
    }
    function c(e, t = h(e)) {
        if (b(e)) {
            return y(e, t);
        }
        return null;
    }
    function d(e, t) {
        if (!C(e, t)) {
            return false;
        }
        const n = h(e);
        return E(e, v(n), n?.creatorLid);
    }
    function m(e, t) {
        const n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
        if (n?.lastFetchedTimeMs == null || n.isDeleted === true || n.isDeprecated === true || !C(e, t)) {
            return false;
        }
        const r = o("WAWebBotProduct").botProductFromServerValue(n.product);
        if (r != null && r !== o("WAWebBotProduct").BotProduct.THIRD_PARTY && !R(e, r)) {
            return false;
        }
        return o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function p(e, t, n) {
        return _(u(e, t), n);
    }
    function _(t, remove) {
        if (t == null) {
            return null;
        }
        return {
            info: t === e.OWNER_CARD,
            remove
        };
    }
    function f(e) {
        return e.info || e.remove;
    }
    function g(t, n) {
        return ((t)=>{
            if (t === e.OWNER_CARD) {
                return s.HATCH_CHAT;
            }
            if (t === e.BASIC_CARD) {
                return s.NONE;
            }
            if (t == null) {
                return null;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })(u(t, n));
    }
    function h(e) {
        const t = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
        if (t == null) {
            return null;
        }
        return {
            creatorLid: t.creatorLid,
            isDeleted: t.isDeleted,
            isDeprecated: t.isDeprecated,
            lastFetchedTimeMs: t.lastFetchedTimeMs,
            product: t.product
        };
    }
    function y(t, n) {
        const r = v(n);
        if (r != null && !R(t, r) || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return null;
        }
        if (L(t, r, n?.creatorLid)) {
            return e.OWNER_CARD;
        }
        return e.BASIC_CARD;
    }
    function C(e, t) {
        if (t == null) {
            return false;
        }
        return o("WAWebChatGetters").getIsGroup(t) && b(e);
    }
    function b(e) {
        return e.isFbidBot() && !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    function v(e) {
        if (e == null || e.lastFetchedTimeMs == null) {
            return null;
        }
        return o("WAWebBotProduct").botProductFromServerValue(e.product);
    }
    function S(e, t) {
        return o("WAWebBotProduct").isMuseAgentProduct(e, t);
    }
    function R(e, t) {
        return S(e, t);
    }
    function L(e, t, n) {
        return E(e, t, n) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled();
    }
    function E(e, t, n) {
        const r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
        return S(e, t) && n != null && r != null && n === r.user && o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled();
    }
    l.GroupAgentProfileDestination = e;
    l.GroupAgentOneToOneTarget = s;
    l.getGroupAgentProfileDestination = u;
    l.getMuseAgentProfileDestinationOutsideGroup = c;
    l.isViewerOwnMuseGroupAgent = d;
    l.isOpenGroupAiAgent = m;
    l.getGroupAgentParticipantActions = p;
    l.getGroupAgentParticipantActionsForDestination = _;
    l.hasGroupAgentParticipantAction = f;
    l.getGroupAgentOneToOneTarget = g;
    l.isMuseGroupAgentProfileProduct = S;
}, 98);