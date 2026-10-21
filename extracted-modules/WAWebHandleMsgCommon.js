__d("WAWebHandleMsgCommon", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    const e = {
        text: "text",
        media: "media",
        medianotify: "medianotify",
        pay: "pay",
        poll: "poll",
        reaction: "reaction",
        event: "event"
    };
    const s = {
        peer: "peer"
    };
    const u = {
        ctwa: "ctwa"
    };
    const c = {
        pn: "pn",
        lid: "lid"
    };
    const d = {
        creation: "creation",
        quiz_creation: "quiz_creation",
        vote: "vote",
        result_snapshot: "result_snapshot",
        edit: "edit"
    };
    const m = {
        creation: "creation",
        response: "response",
        edit: "edit"
    };
    const p = {
        high: "high",
        low: "low",
        unknown: "unknown"
    };
    const _ = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "HSMMismatchError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const f = {
        send: "send",
        request: "request",
        futureproof: "futureproof",
        "request-decline": "request-decline",
        "request-cancel": "request-cancel",
        invite: "invite"
    };
    const g = "biz_source";
    const h = "channels_invitation";
    const y = {
        default: "default",
        member_tag: "member_tag",
        group_history: "group_history"
    };
    l.STANZA_MSG_TYPES = e;
    l.MSG_CATEGORY = s;
    l.STANZA_MSG_ORIGIN = u;
    l.STANZA_MSG_ADDRESSING_MODE = c;
    l.POLL_TYPES = d;
    l.EVENT_TYPES = m;
    l.MSG_VERIFIED_LEVEL = p;
    l.HsmMismatchError = _;
    l.PAY_NODE_TYPES = f;
    l.BIZ_SOURCE_ATTR = g;
    l.CONTEXT_SOURCE = h;
    l.APPDATA = y;
}, 98);