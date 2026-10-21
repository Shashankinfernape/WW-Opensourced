__d("WAWebDeleteChatAction", [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBizChatAssignmentAction",
    "WAWebBizCoexUtils",
    "WAWebChatDeleteBridge",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebMaybeClearChatAiThreads",
    "WAWebMetaAiThreadChatServerDelete",
    "WAWebNoop",
    "WAWebStateUtils",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = [
        o("WAWebChatFlowTypes").ChatKindType.Chat,
        o("WAWebChatFlowTypes").ChatKindType.Group,
        o("WAWebChatFlowTypes").ChatKindType.Community
    ];
    function m(e, t = true) {
        return y(o("WAWebStateUtils").unproxy(e), t).then(r("WAWebNoop"));
    }
    function p(e, t = true) {
        return y(o("WAWebStateUtils").unproxy(e), t);
    }
    const _ = Object.freeze({
        Community: function() {
            return s._("Deleting community");
        },
        Group: function() {
            return s._("Deleting group");
        },
        Broadcast: function() {
            return s._("Deleting broadcast list");
        },
        Chat: function() {
            return s._("Deleting chat");
        }
    });
    function f(e) {
        let t = "";
        if (e != null) {
            switch(e){
                case o("WAWebChatFlowTypes").ChatKindType.Community:
                    t = _.Community();
                    break;
                case o("WAWebChatFlowTypes").ChatKindType.Group:
                    t = _.Group();
                    break;
                case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                    t = _.Broadcast();
                    break;
                case o("WAWebChatFlowTypes").ChatKindType.Chat:
                    t = _.Chat();
                    break;
                case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                    break;
            }
        } else {
            t = _.Chat();
        }
        return new (o("WAWebActionToast.react")).ActionType(t);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("JSResourceForInteraction")("WAWebBizRemoveDirectConnectionKeysBridge").__setRef("WAWebDeleteChatAction").load();
            const t_removeDirectConnectionKeys = t.removeDirectConnectionKeys;
            yield t_removeDirectConnectionKeys(e);
        });
        return h.apply(this, arguments);
    }
    function y(t, r) {
        o("WAWebBizCoexUtils").deleteChatFromFallbackHostedAdvSystemMsgOnPlaceholderCache(t.id);
        if (t.promises.sendDelete) {
            return t.promises.sendDelete.then((e)=>e.status === 200);
        }
        const a = t.getLastMsgKeyForAction();
        const i = a ? t.msgs.get(a) : undefined;
        const l = o("WAWebMetaAiThreadChatServerDelete").getMetaAiThreadServerDelete(t.id);
        const u = t.promises.sendDelete = o("WAWebChatDeleteBridge").sendConversationDelete({
            id: t.id,
            tcToken: t.tcToken,
            tcTokenTimestamp: t.tcTokenTimestamp
        });
        const m = o("WAWebFrontendChatGetters").getKind(t);
        const p = u.then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.status === 200) {
                    o("WAWebLabelCollection").LabelCollection.removeAllLabelsMD(t);
                    if (m === o("WAWebChatFlowTypes").ChatKindType.Chat) {
                        yield g(t.id);
                    }
                    if (m != null) {
                        if (d.includes(m)) {
                            yield o("WAWebBizChatAssignmentAction").removeChatAssignmentsForChat(t.id);
                        }
                        o("WAWebMaybeClearChatAiThreads").maybeClearAiThreadsForChat(t);
                        switch(m){
                            case o("WAWebChatFlowTypes").ChatKindType.Community:
                                return new (o("WAWebActionToast.react")).ActionType(s._("Community deleted"));
                            case o("WAWebChatFlowTypes").ChatKindType.Group:
                                return new (o("WAWebActionToast.react")).ActionType(s._("Group deleted"));
                            case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                                return new (o("WAWebActionToast.react")).ActionType(s._("Broadcast audience deleted"));
                            case o("WAWebChatFlowTypes").ChatKindType.Chat:
                                return new (o("WAWebActionToast.react")).ActionType(s._("Chat deleted"));
                            case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                                return;
                        }
                    }
                } else if (e.status >= 400 && m != null) {
                    switch(m){
                        case o("WAWebChatFlowTypes").ChatKindType.Community:
                            return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't delete community."));
                        case o("WAWebChatFlowTypes").ChatKindType.Group:
                            return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't delete group."));
                        case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                            return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't delete broadcast list."));
                        case o("WAWebChatFlowTypes").ChatKindType.Chat:
                            return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't delete chat."));
                        case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                            return;
                    }
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).catch((n)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:chat:sendDelete dropped"
            ])));
            let a = "";
            if (m != null) {
                switch(m){
                    case o("WAWebChatFlowTypes").ChatKindType.Community:
                        a = s._("Couldn't delete community.");
                        break;
                    case o("WAWebChatFlowTypes").ChatKindType.Group:
                        a = s._("Couldn't delete group.");
                        break;
                    case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
                        a = s._("Couldn't delete broadcast list.");
                        break;
                    case o("WAWebChatFlowTypes").ChatKindType.Chat:
                        a = s._("Couldn't delete chat.");
                        break;
                    case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
                        break;
                }
            } else {
                a = s._("Couldn't delete chat.");
            }
            return new (o("WAWebActionToast.react")).ActionType(a, {
                actionText: s._("Try again."),
                actionHandler: function() {
                    return y(t, r);
                }
            });
        });
        if (r) {
            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
                initialAction: f(m),
                pendingAction: p
            }));
        }
        return u.then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.status !== 200) {
                    return false;
                }
                const n = t.getLastMsgKeyForAction();
                const r = a && a.equals(n) || a === n;
                if (r) {
                    t.delete();
                } else {
                    C(t, i);
                }
                if (o("WAWebFrontendChatGetters").getKind(t) === o("WAWebChatFlowTypes").ChatKindType.Community) {
                    o("WAWebContactCollection").ContactCollection.remove(t.id.toString());
                }
                if (r && l != null) {
                    yield o("WAWebMetaAiThreadChatServerDelete").completeMetaAiThreadServerDelete(t.id, l);
                }
                return true;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).finally(()=>{
            t.promises.sendDelete = null;
        });
    }
    function C(e, t) {
        let n;
        if (!t) {
            n = e.msgs.length;
        } else if (e.msgs.get(t.id)) {
            n = e.msgs.indexOf(t);
        } else {
            return;
        }
        const r = function(r, o, a) {
            return r.getMsgChunk() === e.msgs && o > n;
        };
        e.deleteMsgsPartial(r, true);
    }
    l.sendDelete = m;
    l.sendDeleteWithStatus = p;
    l.deleteActionFbtMap = _;
    l.getDeleteChatAction = f;
}, 226);