__d("WAWebKeepInChatMsgUtils", [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebEphemeralKeepInChatAbpropUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebMsgGetters").getIsEphemeral(e) && (e.star || e.isGif || o("WAWebMsgGetters").getIsStickerMsg(e));
    }
    function s(e) {
        const t = o("WAWebMsgGetters").getKicSender(e);
        const n = r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(t, o("WAWebMsgGetters").getSender(e)));
        return o("WAWebMsgGetters").getIsUnkept(e) && n && !u(e);
    }
    function u(e) {
        return o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebMsgGetters").getKicSender(e));
    }
    function c(e) {
        const t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
        if (t != null) {
            const n = Math.trunc(+new Date / 1000) - t;
            return o("WAWebMsgGetters").getIsKept(e) && n > o("WAWebEphemeralKeepInChatAbpropUtils").getUndoKeepInChatExpiration();
        }
        return false;
    }
    function d(e) {
        const t = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        return p(e, t);
    }
    function m(e, t) {
        return p(e, t);
    }
    function p(e, t) {
        let n;
        const r = o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e)) ? !((n = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata) != null && n.userCanSetEphemeralSetting(t)) : false;
        return r;
    }
    function _(e) {
        return o("WAWebMsgGetters").getIsEphemeral(e) && e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED && !e.isViewOnce && !o("WAWebFrontendMsgGetters").getAsAlbum(e);
    }
    function f(e) {
        return g(e) || y(e);
    }
    function g(e) {
        return _(e) && h(e) && o("WAWebChatGroupUtils").canSendToGroup(o("WAWebFrontendMsgGetters").getChat(e)) && !d(e) && !e.star && !e.isGif && !o("WAWebMsgGetters").getIsStickerMsg(e);
    }
    function h(e) {
        const e_afterReadDuration = e.afterReadDuration;
        if (e_afterReadDuration == null || e_afterReadDuration === 0) {
            return true;
        }
        const n = o("WAWebMsgGetters").getT(e);
        if (n == null || n === 0) {
            return true;
        }
        return o("WATimeUtils").unixTime() - n <= e_afterReadDuration;
    }
    function y(e) {
        return o("WAWebMsgGetters").getIsKept(e) && _(e) && !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(o("WAWebFrontendMsgGetters").getChat(e)) && (C(e) || g(e) || e.isGif || o("WAWebMsgGetters").getIsStickerMsg(e));
    }
    function C(e) {
        if (o("WAWebMsgGetters").getIsSentByMe(e)) {
            if (o("WAWebChatGetters").getIsGroup(o("WAWebFrontendMsgGetters").getChat(e)) && o("WAWebFrontendMsgGetters").getChat(e).groupMetadata?.participants.iAmMember() === true) {
                return true;
            }
            if (o("WAWebChatGetters").getIsUser(o("WAWebFrontendMsgGetters").getChat(e)) && !o("WAWebFrontendMsgGetters").getChat(e).contact.isContactBlocked) {
                return true;
            }
        }
        return false;
    }
    function b(e) {
        const groupMetadata = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
        if (groupMetadata == null) {
            return false;
        }
        const n = o("WAWebMsgGetters").getSender(e);
        if (n != null && groupMetadata.participants.get(n) != null) {
            return true;
        }
        if (!o("WAWebGroupMetadataGetters").getIsCag(groupMetadata)) {
            return false;
        }
        const r = n != null ? o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(n)) : null;
        if (r == null) {
            return false;
        }
        return groupMetadata.participants.get(r) != null;
    }
    function v(e) {
        const t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
        if (t == null) {
            return false;
        }
        return t <= o("WATimeUtils").unixTime();
    }
    function S(e) {
        return v(e) && !o("WAWebMsgGetters").getIsKept(e);
    }
    l.supportsStarWithKeepInChat = e;
    l.keepIsLockedForMeSenderSuperpower = s;
    l.isPastUnkeepExpirationLimit = c;
    l.keepIsLockedForMe = d;
    l.keepIsLockedForUser = m;
    l.canShowKeepOrUnkeepOption = f;
    l.canShowKeepOption = g;
    l.canShowUnkeepOption = y;
    l.senderIsGroupParticipant = b;
    l.isExpired = v;
    l.isExpiredAndNotKept = S;
}, 98);