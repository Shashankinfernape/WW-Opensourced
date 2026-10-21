__d("WAWebMessageEditUtils", [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 2592000;
    function u(e) {
        if (e) {
            return s;
        }
        const t = o("WAWebABProps").getABPropConfigValue("message_edit_window_duration_seconds");
        if (t == null || t <= 0) {
            return 1200;
        }
        return t;
    }
    function c(e) {
        if (e) {
            return s;
        }
        const t = o("WAWebABProps").getABPropConfigValue("message_edit_client_entry_point_limit_seconds");
        if (t == null || t <= 0) {
            return 900;
        }
        return t;
    }
    const d = n("$InternalEnum").Mirrored([
        "TextEdit",
        "CaptionEdit",
        "EventEdit",
        "RichResponseEdit",
        "LoadingMediaEdit",
        "PollEdit"
    ]);
    function m(e) {
        switch(e){
            case o("WAWebMsgType").MSG_TYPE.CHAT:
                return d.TextEdit;
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return d.CaptionEdit;
            case o("WAWebMsgType").MSG_TYPE.EVENT_CREATION:
                return d.EventEdit;
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
                return d.PollEdit;
            case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
                return d.RichResponseEdit;
            case o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA:
                return d.LoadingMediaEdit;
            default:
                return null;
        }
    }
    function p(msgKey) {
        return o("WAWebMsgKeyUtils").isNoteToSelf(msgKey) && o("WAWebABProps").getABPropConfigValue("message_yourself_edit_window_is_forever_enabled") === true;
    }
    function _({ msgKey, msgType }) {
        const r = m(msgType);
        return (r === d.TextEdit || r === d.CaptionEdit || r === d.PollEdit) && p(msgKey);
    }
    function f({ msgKey, msgType }) {
        return msgType === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && p(msgKey);
    }
    const g = [
        (e = o("WAWebMsgType")).MSG_TYPE.CHAT,
        e.MSG_TYPE.IMAGE,
        e.MSG_TYPE.VIDEO,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.EVENT_CREATION,
        e.MSG_TYPE.POLL_CREATION,
        e.MSG_TYPE.RICH_RESPONSE,
        e.MSG_TYPE.LOADING_MEDIA
    ];
    function h(e) {
        return !!g.includes(e);
    }
    function y({ editTsInSeconds, msgKey, parentTsInSeconds }) {
        const i = r("WAWebWid").isNewsletter(msgKey.remote);
        if (editTsInSeconds != null) {
            return editTsInSeconds < parentTsInSeconds + u(i);
        }
        return o("WATimeUtils").unixTime() < parentTsInSeconds + u(i);
    }
    function C({ msgKey, parentTsInSeconds }) {
        return o("WATimeUtils").unixTime() < parentTsInSeconds + c(r("WAWebWid").isNewsletter(msgKey.remote));
    }
    l.getMessageEditProcessingWindowDurationSeconds = u;
    l.MsgEditType = d;
    l.getMsgEditType = m;
    l.isMessageYourselfEditExempt = _;
    l.shouldDeferMessageYourselfEditWindowCheck = f;
    l.msgTypeSupportsEditing = h;
    l.isParentWithinEditProcessingWindow = y;
    l.isParentWithinEditUIWindow = C;
}, 98);