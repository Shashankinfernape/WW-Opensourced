__d("WAWebMessageAssociationUIUtils", [
    "WAWebFrontendMsgGetters",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebMessageAssociation.flow",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Set([
        o("WAWebMsgType").MSG_TYPE.ALBUM,
        o("WAWebMsgType").MSG_TYPE.POLL_CREATION
    ]);
    function s(t, n, r) {
        if (r && e.has(n)) {
            return Math.min(...[
                t
            ].concat(r.map(({ ack })=>ack)));
        }
        return t;
    }
    function u(e, t = o("WAWebViewMode.flow").ViewModeSurface.CHAT) {
        return p(o("WAWebMsgCollection").MsgCollection.byParentMessage(e), t);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = Array.from(new Set(t));
            const r = n.filter((e)=>o("WAWebMsgCollection").MsgCollection.get(e) == null);
            if (r.length > 0) {
                yield o("WAWebMsgCollection").MsgCollection.getMessagesById(r);
            }
            const a = new Map(o("WAWebMsgCollection").MsgCollection.byParentMessage(e).map((e)=>[
                    e.id.toString(),
                    e
                ]));
            const i = [];
            n.forEach((e)=>{
                const t = a.get(e);
                if (t != null) {
                    i.push(t);
                }
            });
            return i;
        });
        return d.apply(this, arguments);
    }
    function m(e, t = o("WAWebViewMode.flow").ViewModeSurface.CHAT) {
        return o("WAWebMsgCollection").MsgCollection.byChat(e).filter(({ viewMode })=>!o("WAWebViewModeUtils").isViewModeVisibleInSurface(t, viewMode));
    }
    function p(e, t) {
        return e.filter(({ associationType, parentMsgKey, pendingDeleteForMe, viewMode })=>associationType != null && parentMsgKey != null && !pendingDeleteForMe && !o("WAWebViewModeUtils").isViewModeVisibleInSurface(t, viewMode));
    }
    function _({ duringDetach = false, parentMsgKey }) {
        const o = duringDetach ? 1 : 0;
        return u(parentMsgKey).length - o > 0;
    }
    function f({ duringDetach = false, parentMsg }) {
        switch(parentMsg.type){
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
                {
                    const a = o("WAWebFrontendMsgGetters").getAsPollCreation(parentMsg);
                    if (a == null) {
                        return true;
                    }
                    return a.pollContentType === o("WAWebPollCreationUtils").PollContentType.IMAGE && u(parentMsg.id).length !== a.pollOptions.length;
                }
            case o("WAWebMsgType").MSG_TYPE.ALBUM:
            default:
                return !_({
                    parentMsgKey: parentMsg.id,
                    duringDetach
                });
        }
    }
    function g(e) {
        const e_associationType = e.associationType;
        if (!e_associationType) {
            return true;
        }
        const n = e.parentMsgKey ? o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey) : null;
        e: return e_associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL ? n != null && n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION && !f({
            parentMsg: n
        }) : e_associationType === o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_ALBUM ? n != null && n.type === o("WAWebMsgType").MSG_TYPE.ALBUM && !f({
            parentMsg: n
        }) : true;
    }
    function h(e) {
        e.filter(Boolean).forEach(({ parentMsgKey, viewMode })=>{
            if (parentMsgKey && !o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, viewMode)) {
                const a = o("WAWebMsgCollection").MsgCollection.get(parentMsgKey);
                if (a && o("WAWebInvisiblePlaceholderViewModeProcessor").InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes?.includes(a.type) && !f({
                    parentMsg: a,
                    duringDetach: false
                }) && !o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, a?.viewMode)) {
                    a.set("viewMode", o("WAWebViewMode.flow").ViewModeType.VISIBLE);
                }
            }
        });
    }
    l.getLowestAckState = s;
    l.getHiddenAssociatedMessages = u;
    l.getAssociatedMessagesByMsgKeys = c;
    l.getHiddenViewModeMessagesForChat = m;
    l.filterOutVisibleAssociatedMessages = p;
    l.shouldHideParentMessage = f;
    l.shouldDisplayOrphanMessage = g;
    l.makeParentMessagesVisibleInChat = h;
}, 98);