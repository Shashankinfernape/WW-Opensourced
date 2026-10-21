__d("WAWebActionListenerHelpers", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatSendMessages",
    "WAWebChatThreadLogging",
    "WAWebMessageDeleteActionsWamEvent",
    "WAWebMiscErrors",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebOTPLoggingHelper",
    "WAWebSnackbarDeleteUndoWamEvent",
    "WAWebToastManager",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumDeleteActionType",
    "WAWebWamEnumSnackbarActionType",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const _ = 4000;
    function f(t) {
        switch(t){
            case 1:
                return s._("Alerts and sounds off for 1 hour");
            case 8:
                return s._("Alerts and sounds off for 8 hours");
            case 24:
                return s._("Alerts and sounds off for 1 day");
            case 168:
                return s._("Alerts and sounds off for 1 week");
            default:
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[DoNotDisturbSettings] non-standard mute duration: ",
                    ""
                ])), t);
                return s._("Alerts and sounds off");
        }
    }
    function g(e, t, a, i = "LEFT") {
        if (!t || t.some((e)=>!e.id)) {
            return (d || (d = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const l = r("isStringNullOrEmpty")(a) ? o("WAWebActionToast.react").genId() : a;
        const t_length = t.length;
        if (o("WAWebChatGetters").getIsPSA(e)) {
            let m = 0;
            for(m; m < t_length; m++){
                o("WAWebWamChatPSALogger").logChatPSAStar(t[m]);
            }
        }
        const _ = new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Starring messages\",\"_1\":\"Starring message\"}", [
            s._plural(t_length)
        ]));
        const f = o("WAWebChatSendMessages").sendStarMsgs(e, t, true).then(()=>new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"{count} messages starred\",\"_1\":\"1 message starred\"}", [
                s._plural(t_length, "count")
            ]), {
                actionText: s._("Undo"),
                actionHandler: function() {
                    return h(e, t, l, i);
                }
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
            if (t.status >= 400) {
                if (o("WAWebChatEphemerality").isEphemeralSettingOn(e)) {
                    return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't star messages because the messages may have expired\",\"_1\":\"Couldn't star message because the message may have expired\"}", [
                        s._plural(t_length)
                    ]));
                }
                return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't star messages\",\"_1\":\"Couldn't star message\"}", [
                    s._plural(t_length)
                ]));
            }
        })).catch((n)=>{
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "chatAction:sendStarMsgs dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't star messages\",\"_1\":\"Couldn't star message\"}", [
                s._plural(t_length)
            ]), {
                actionText: s._("Try again."),
                actionHandler: function() {
                    return g(e, t, l, i);
                }
            });
        });
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebActionToast.react").ActionToast, {
            id: l,
            toastPosition: i,
            initialAction: _,
            pendingAction: f
        }));
        return f;
    }
    function h(e, t, a, i = "LEFT") {
        if (!t || t.some((e)=>!e.id)) {
            return (d || (d = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const l = r("isStringNullOrEmpty")(a) ? o("WAWebActionToast.react").genId() : a;
        const t_length = t.length;
        const m = new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Unstarring messages\",\"_1\":\"Unstarring message\"}", [
            s._plural(t_length)
        ]));
        const _ = o("WAWebChatSendMessages").sendStarMsgs(e, t, false).then(()=>new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"{count} messages unstarred\",\"_1\":\"1 message unstarred\"}", [
                s._plural(t_length, "count")
            ]), {
                actionText: s._("Undo"),
                actionHandler: function() {
                    return g(e, t, l, i);
                }
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
            if (t.status >= 400) {
                if (o("WAWebChatEphemerality").isEphemeralSettingOn(e)) {
                    return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't unstar messages because the messages may have expired\",\"_1\":\"Couldn't unstar message because the message may have expired\"}", [
                        s._plural(t_length)
                    ]));
                }
                return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't unstar messages\",\"_1\":\"Couldn't unstar message\"}", [
                    s._plural(t_length)
                ]));
            }
        })).catch((n)=>{
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "chatAction:sendUnstarMsgs dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't unstar messages\",\"_1\":\"Couldn't unstar message\"}", [
                s._plural(t_length)
            ]), {
                actionText: s._("Try again."),
                actionHandler: function() {
                    return h(e, t, l, i);
                }
            });
        });
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebActionToast.react").ActionToast, {
            id: l,
            toastPosition: i,
            initialAction: m,
            pendingAction: _
        }));
        return _;
    }
    function y(list) {
        const t = Array.from(new Set(list.map((e)=>o("WAWebWamMsgUtils").getWamMediaType(e))));
        if (t.length === 1) {
            return t[0];
        }
    }
    function C(e, t, n) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (t.type === "message") {
                if (o("WAWebChatGetters").getIsPSA(e)) {
                    let r = 0;
                    for(r; r < t.list.length; r++){
                        o("WAWebWamChatPSALogger").logChatPSADelete(t.list[r]);
                    }
                }
                t.list.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach((e)=>{
                    o("WAWebOTPLoggingHelper").logOTPMessageDeleted(o("WAWebMsgDataFromModel").msgDataFromMsgModel(e));
                });
            }
            new (o("WAWebMessageDeleteActionsWamEvent")).MessageDeleteActionsWamEvent({
                deleteActionType: n ? o("WAWebWamEnumDeleteActionType").DELETE_ACTION_TYPE.DELETE_FOR_EVERYONE : o("WAWebWamEnumDeleteActionType").DELETE_ACTION_TYPE.DELETE_FOR_ME,
                isAGroup: o("WAWebChatGetters").getIsGroup(e),
                messagesDeleted: t.list.length,
                threadId: yield o("WAWebChatThreadLogging").getChatThreadID(e.id.toJid()),
                mediaType: y(t.list)
            }).commit();
        });
        return b.apply(this, arguments);
    }
    function v(e, t, n) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            new (o("WAWebSnackbarDeleteUndoWamEvent")).SnackbarDeleteUndoWamEvent({
                snackbarActionType: n === "shown" ? o("WAWebWamEnumSnackbarActionType").SNACKBAR_ACTION_TYPE.SNACKBAR_SHOWN : o("WAWebWamEnumSnackbarActionType").SNACKBAR_ACTION_TYPE.MESSAGE_UNDELETE,
                isAGroup: o("WAWebChatGetters").getIsGroup(e),
                messagesUndeleted: t.list.length,
                threadId: yield o("WAWebChatThreadLogging").getChatThreadID(e.id.toJid()),
                mediaType: y(t.list)
            }).commit();
        });
        return S.apply(this, arguments);
    }
    l.MESSAGE_DELETE_DELAY_DURATION = _;
    l.getMuteAllDurationLabel = f;
    l.handleSendStarMsgs = g;
    l.handleSendUnstarMsgs = h;
    l.logMessageDeleteActionsMetric = C;
    l.logSnackbarDeleteUndoMetric = v;
}, 226);