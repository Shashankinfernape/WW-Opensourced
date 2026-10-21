__d("WAWebHandleMsgMetaUtils", [
    "WAWebHandleMsgCommon",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e?.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction;
    }
    function s(e) {
        return e?.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll && e?.pollType === o("WAWebHandleMsgCommon").POLL_TYPES.vote;
    }
    function u(e) {
        return e?.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text && e?.threadMsgId != null && e?.threadMsgSenderJid != null;
    }
    function c(e) {
        return e?.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event && e?.eventType === o("WAWebHandleMsgCommon").EVENT_TYPES.response;
    }
    function d(e) {
        return e?.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event && e?.eventType === o("WAWebHandleMsgCommon").EVENT_TYPES.edit;
    }
    function m(e) {
        return e?.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media;
    }
    function p(e) {
        return e?.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll && e?.pollType === o("WAWebHandleMsgCommon").POLL_TYPES.edit;
    }
    function _(e) {
        return e?.appdata === o("WAWebHandleMsgCommon").APPDATA.member_tag;
    }
    function f(e) {
        if (e != null && u(e)) {
            return o("WAWebMsgType").MSG_TYPE.COMMENT;
        }
    }
    l.isReactionMsgMeta = e;
    l.isPollVoteMsgMeta = s;
    l.isCommentMsgMeta = u;
    l.isEventResponseMsgMeta = c;
    l.isEventEditMsgMeta = d;
    l.isMediaMsgMeta = m;
    l.isPollEditMsgMeta = p;
    l.isMemberTagMsgMeta = _;
    l.getMsgTypeFromMsgMeta = f;
}, 98);